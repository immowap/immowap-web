import { NextResponse } from "next/server";
import { processContactSubmission } from "@/lib/contact/service";

const VALIDATION_COPY = {
  name: "Name is required.",
  email: "Email is required.",
  emailFormat: "Please enter a valid email address.",
  subject: "Subject is required.",
  message: "Message is required.",
  consent: "Consent is required.",
  tooLong: "This field exceeds the maximum length.",
};

function getClientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const result = await processContactSubmission(
      formData,
      getClientKey(request),
      VALIDATION_COPY,
    );

    if (result.ok) {
      return NextResponse.json({ ok: true });
    }

    const status =
      result.error === "rate_limit"
        ? 429
        : result.error === "service_unavailable" || result.error === "send_failed"
          ? 503
          : 400;

    return NextResponse.json(result, { status });
  } catch (error) {
    console.error("[contact/api] Unexpected error:", error);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 500 });
  }
}
