"use server";

import { headers } from "next/headers";
import { processContactSubmission } from "@/lib/contact/service";
import type { ContactFormState } from "@/lib/contact/types";
import type { DeTranslations } from "@/lib/i18n/translations/de";

type ContactValidationCopy = DeTranslations["contact"]["form"]["validation"];

async function getClientKey(): Promise<string> {
  const headerStore = await headers();
  const forwarded = headerStore.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }
  return headerStore.get("x-real-ip") ?? "unknown";
}

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const validationJson = formData.get("_validation");
  let validationCopy: ContactValidationCopy;

  try {
    validationCopy = JSON.parse(String(validationJson)) as ContactValidationCopy;
  } catch {
    validationCopy = {
      name: "Bitte geben Sie Ihren Namen an.",
      email: "Bitte geben Sie Ihre E-Mail-Adresse an.",
      emailFormat: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
      subject: "Bitte geben Sie einen Betreff an.",
      message: "Bitte geben Sie eine Nachricht ein.",
      consent: "Bitte stimmen Sie der Datenverarbeitung zu.",
      tooLong: "Dieses Feld ist zu lang.",
    };
  }

  return processContactSubmission(formData, await getClientKey(), validationCopy);
}

export type { ContactFormState };
