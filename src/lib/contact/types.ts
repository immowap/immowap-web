export type ContactFieldKey =
  | "name"
  | "email"
  | "subject"
  | "message"
  | "consent"
  | "phone"
  | "goal"
  | "projectType"
  | "location";

export type ContactFieldErrors = Partial<Record<ContactFieldKey, string>>;

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  goal?: string;
  projectType?: string;
  location?: string;
  locale: "de" | "en";
  consent: boolean;
}

export type ContactSubmitError =
  | "validation"
  | "rate_limit"
  | "spam"
  | "service_unavailable"
  | "send_failed";

export interface ContactFormState {
  ok: boolean;
  error?: ContactSubmitError;
  fields?: ContactFieldErrors;
  values?: Partial<ContactPayload>;
}
