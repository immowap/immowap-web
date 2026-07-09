import { CONTACT_LIMITS } from "./constants";
import type { ContactFieldErrors, ContactPayload } from "./types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function trimOrEmpty(value: unknown): string {
  return String(value ?? "").trim();
}

function lengthError(value: string, max: number): boolean {
  return value.length > max;
}

export function parseContactFormData(formData: FormData): {
  payload: Partial<ContactPayload>;
  honeypot: string;
} {
  return {
    honeypot: trimOrEmpty(formData.get("_hp")),
    payload: {
      name: trimOrEmpty(formData.get("name")),
      email: trimOrEmpty(formData.get("email")),
      subject: trimOrEmpty(formData.get("subject")),
      message: trimOrEmpty(formData.get("message")),
      phone: trimOrEmpty(formData.get("phone")) || undefined,
      goal: trimOrEmpty(formData.get("goal")) || undefined,
      projectType: trimOrEmpty(formData.get("projectType")) || undefined,
      location: trimOrEmpty(formData.get("location")) || undefined,
      locale: (trimOrEmpty(formData.get("locale")) === "en" ? "en" : "de") as "de" | "en",
      consent: formData.get("consent") === "yes",
    },
  };
}

type ValidationMessages = {
  name: string;
  email: string;
  emailFormat: string;
  subject: string;
  message: string;
  consent: string;
  tooLong: string;
};

export function validateContactPayload(
  payload: Partial<ContactPayload>,
  messages: ValidationMessages,
): { valid: false; fields: ContactFieldErrors } | { valid: true; data: ContactPayload } {
  const fields: ContactFieldErrors = {};

  if (!payload.name) {
    fields.name = messages.name;
  } else if (lengthError(payload.name, CONTACT_LIMITS.name)) {
    fields.name = messages.tooLong;
  }

  if (!payload.email) {
    fields.email = messages.email;
  } else if (!EMAIL_PATTERN.test(payload.email)) {
    fields.email = messages.emailFormat;
  } else if (lengthError(payload.email, CONTACT_LIMITS.email)) {
    fields.email = messages.tooLong;
  }

  if (!payload.subject) {
    fields.subject = messages.subject;
  } else if (lengthError(payload.subject, CONTACT_LIMITS.subject)) {
    fields.subject = messages.tooLong;
  }

  if (!payload.message) {
    fields.message = messages.message;
  } else if (lengthError(payload.message, CONTACT_LIMITS.message)) {
    fields.message = messages.tooLong;
  }

  if (!payload.consent) {
    fields.consent = messages.consent;
  }

  if (payload.phone && lengthError(payload.phone, CONTACT_LIMITS.phone)) {
    fields.phone = messages.tooLong;
  }

  if (payload.location && lengthError(payload.location, CONTACT_LIMITS.location)) {
    fields.location = messages.tooLong;
  }

  if (Object.keys(fields).length > 0) {
    return { valid: false, fields };
  }

  return {
    valid: true,
    data: {
      name: payload.name!,
      email: payload.email!,
      subject: payload.subject!,
      message: payload.message!,
      phone: payload.phone,
      goal: payload.goal,
      projectType: payload.projectType,
      location: payload.location,
      locale: payload.locale ?? "de",
      consent: true,
    },
  };
}
