import { checkContactRateLimit } from "./rate-limit";
import { sendContactEnquiry } from "./send-enquiry";
import type { ContactFormState } from "./types";
import { parseContactFormData, validateContactPayload } from "./validation";

export interface ContactValidationCopy {
  name: string;
  email: string;
  emailFormat: string;
  subject: string;
  message: string;
  consent: string;
  tooLong: string;
}

export async function processContactSubmission(
  formData: FormData,
  clientKey: string,
  validationCopy: ContactValidationCopy,
): Promise<ContactFormState> {
  const { payload, honeypot } = parseContactFormData(formData);

  if (honeypot) {
    return { ok: false, error: "spam" };
  }

  const validation = validateContactPayload(payload, validationCopy);
  if (!validation.valid) {
    return {
      ok: false,
      error: "validation",
      fields: validation.fields,
      values: payload,
    };
  }

  const rate = checkContactRateLimit(`${clientKey}:${validation.data.email.toLowerCase()}`);
  if (!rate.allowed) {
    return {
      ok: false,
      error: "rate_limit",
      values: validation.data,
    };
  }

  const delivery = await sendContactEnquiry(validation.data);
  if (!delivery.ok) {
    return {
      ok: false,
      error: delivery.error ?? "send_failed",
      values: validation.data,
    };
  }

  return { ok: true };
}
