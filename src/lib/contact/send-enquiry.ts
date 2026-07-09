import type { ContactPayload } from "./types";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(payload: ContactPayload): string {
  const rows = [
    ["Name", payload.name],
    ["E-Mail", payload.email],
    ["Betreff", payload.subject],
    ...(payload.phone ? [["Telefon", payload.phone]] : []),
    ...(payload.goal ? [["Ziel", payload.goal]] : []),
    ...(payload.projectType ? [["Projekttyp", payload.projectType]] : []),
    ...(payload.location ? [["Ort", payload.location]] : []),
    ["Sprache", payload.locale.toUpperCase()],
  ] as const;

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;color:#0f3d2e;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px 12px;color:#1d1d1b">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:Inter,system-ui,sans-serif;max-width:640px">
      <p style="color:#6b6a65;margin:0 0 24px">Neue Kontaktanfrage über immowap.com</p>
      <table style="width:100%;border-collapse:collapse;border:1px solid #d7d2c8;border-radius:8px">
        ${tableRows}
      </table>
      <h2 style="color:#0f3d2e;font-size:16px;margin:24px 0 8px">Nachricht</h2>
      <p style="white-space:pre-wrap;color:#1d1d1b;line-height:1.7;margin:0">${escapeHtml(payload.message)}</p>
    </div>
  `.trim();
}

function getContactConfig() {
  return {
    resendApiKey: process.env.RESEND_API_KEY?.trim(),
    webhookUrl: process.env.CONTACT_WEBHOOK_URL?.trim(),
    fromEmail: process.env.CONTACT_FROM_EMAIL?.trim() ?? "immowap <onboarding@resend.dev>",
    toEmail: process.env.CONTACT_TO_EMAIL?.trim() ?? "info@immowap.de",
  };
}

export function isContactDeliveryConfigured(): boolean {
  const { resendApiKey, webhookUrl } = getContactConfig();
  return Boolean(resendApiKey || webhookUrl);
}

export async function sendContactEnquiry(payload: ContactPayload): Promise<{
  ok: boolean;
  error?: "service_unavailable" | "send_failed";
}> {
  const { resendApiKey, webhookUrl, fromEmail, toEmail } = getContactConfig();

  if (!resendApiKey && !webhookUrl) {
    console.error("[contact] No RESEND_API_KEY or CONTACT_WEBHOOK_URL configured.");
    return { ok: false, error: "service_unavailable" };
  }

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact_enquiry",
          receivedAt: new Date().toISOString(),
          ...payload,
        }),
      });

      if (!response.ok) {
        console.error("[contact] Webhook failed:", response.status, await response.text());
        return { ok: false, error: "send_failed" };
      }

      return { ok: true };
    } catch (error) {
      console.error("[contact] Webhook error:", error);
      return { ok: false, error: "send_failed" };
    }
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: payload.email,
        subject: `[immowap] ${payload.subject}`,
        html: buildEmailHtml(payload),
      }),
    });

    if (!response.ok) {
      console.error("[contact] Resend failed:", response.status, await response.text());
      return { ok: false, error: "send_failed" };
    }

    return { ok: true };
  } catch (error) {
    console.error("[contact] Resend error:", error);
    return { ok: false, error: "send_failed" };
  }
}
