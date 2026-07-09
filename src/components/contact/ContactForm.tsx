"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { PrimaryButton } from "@/components/ui/buttons";
import {
  Checkbox,
  FormField,
  FormMessage,
  Input,
  Label,
  Select,
  Textarea,
} from "@/components/ui/forms";
import { formPanel, formUploadZone } from "@/lib/design-system/classes/forms";
import type { ContactFieldKey } from "@/lib/contact/types";
import { cn } from "@/lib/utils";
import type { DeTranslations } from "@/lib/i18n/translations/de";
import type { Locale } from "@/lib/i18n/config";

type ContactFormCopy = DeTranslations["contact"]["form"];

interface ContactFormProps {
  copy: ContactFormCopy;
  privacyHref: string;
  privacyLabel: string;
  locale: Locale;
  contactEmail: string;
}

const initialState: ContactFormState = { ok: false };

function fieldErrorId(field: ContactFieldKey): string {
  return `contact-${field}-error`;
}

export function ContactForm({
  copy,
  privacyHref,
  privacyLabel,
  locale,
  contactEmail,
}: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const [fileName, setFileName] = useState<string | null>(null);
  const preserved = state.values;
  const fields = state.fields;
  const formKey = preserved ? JSON.stringify(preserved) : "initial";

  if (state.ok) {
    return (
      <div
        className={cn(formPanel, "border-warm-gray/60")}
        role="status"
        aria-live="polite"
      >
        <p className="text-body-lg font-medium text-brand-800">{copy.successTitle}</p>
        <p className="mt-4 text-body text-muted">{copy.successText}</p>
      </div>
    );
  }

  const showGlobalError =
    state.error === "rate_limit" ||
    state.error === "service_unavailable" ||
    state.error === "send_failed" ||
    state.error === "spam";

  return (
    <form action={formAction} className={cn(formPanel, "relative")} noValidate>
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="_validation" value={JSON.stringify(copy.validation)} />

      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="contact-hp">Leave blank</label>
        <input id="contact-hp" name="_hp" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {showGlobalError ? (
        <div
          className="mb-8 rounded-lg border border-red-200 bg-red-50/80 px-5 py-4"
          role="alert"
          aria-live="assertive"
        >
          <p className="text-body font-medium text-red-900">
            {state.error === "rate_limit" ? copy.rateLimitText : copy.errorTitle}
          </p>
          {state.error !== "rate_limit" ? (
            <p className="mt-2 text-body-sm text-red-800">
              {copy.errorText}{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="font-medium underline underline-offset-2"
              >
                {contactEmail}
              </a>
              .
            </p>
          ) : null}
        </div>
      ) : null}

      <div key={formKey} className="space-y-6">
        <FormField>
          <Label htmlFor="contact-name">{copy.fields.name}</Label>
          <Input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            maxLength={120}
            defaultValue={preserved?.name ?? ""}
            aria-invalid={fields?.name ? true : undefined}
            aria-describedby={fields?.name ? fieldErrorId("name") : undefined}
          />
          {fields?.name ? (
            <FormMessage id={fieldErrorId("name")} variant="error">
              {fields.name}
            </FormMessage>
          ) : null}
        </FormField>

        <FormField>
          <Label htmlFor="contact-email">{copy.fields.email}</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={254}
            defaultValue={preserved?.email ?? ""}
            aria-invalid={fields?.email ? true : undefined}
            aria-describedby={fields?.email ? fieldErrorId("email") : undefined}
          />
          {fields?.email ? (
            <FormMessage id={fieldErrorId("email")} variant="error">{fields.email}</FormMessage>
          ) : null}
        </FormField>

        <FormField>
          <Label htmlFor="contact-subject">{copy.fields.subject}</Label>
          <Input
            id="contact-subject"
            name="subject"
            type="text"
            required
            maxLength={200}
            defaultValue={preserved?.subject ?? ""}
            aria-invalid={fields?.subject ? true : undefined}
            aria-describedby={fields?.subject ? fieldErrorId("subject") : undefined}
          />
          {fields?.subject ? (
            <FormMessage id={fieldErrorId("subject")} variant="error">{fields.subject}</FormMessage>
          ) : null}
        </FormField>

        <FormField>
          <Label htmlFor="contact-phone" optional optionalText={copy.optional}>
            {copy.fields.phone}
          </Label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
            defaultValue={preserved?.phone ?? ""}
            aria-invalid={fields?.phone ? true : undefined}
            aria-describedby={fields?.phone ? fieldErrorId("phone") : undefined}
          />
          {fields?.phone ? (
            <FormMessage id={fieldErrorId("phone")} variant="error">{fields.phone}</FormMessage>
          ) : null}
        </FormField>

        <FormField>
          <Label htmlFor="contact-goal" optional optionalText={copy.optional}>
            {copy.fields.goal}
          </Label>
          <Select
            id="contact-goal"
            name="goal"
            defaultValue={preserved?.goal ?? ""}
            aria-invalid={fields?.goal ? true : undefined}
            aria-describedby={fields?.goal ? fieldErrorId("goal") : undefined}
          >
            <option value="">{copy.selectPlaceholder}</option>
            {copy.goalOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          {fields?.goal ? (
            <FormMessage id={fieldErrorId("goal")} variant="error">{fields.goal}</FormMessage>
          ) : null}
        </FormField>

        <FormField>
          <Label htmlFor="contact-project-type" optional optionalText={copy.optional}>
            {copy.fields.projectType}
          </Label>
          <Select
            id="contact-project-type"
            name="projectType"
            defaultValue={preserved?.projectType ?? ""}
            aria-invalid={fields?.projectType ? true : undefined}
            aria-describedby={fields?.projectType ? fieldErrorId("projectType") : undefined}
          >
            <option value="">{copy.selectPlaceholder}</option>
            {copy.projectTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          {fields?.projectType ? (
            <FormMessage id={fieldErrorId("projectType")} variant="error">{fields.projectType}</FormMessage>
          ) : null}
        </FormField>

        <FormField>
          <Label htmlFor="contact-location" optional optionalText={copy.optional}>
            {copy.fields.location}
          </Label>
          <Input
            id="contact-location"
            name="location"
            type="text"
            maxLength={120}
            defaultValue={preserved?.location ?? ""}
            aria-invalid={fields?.location ? true : undefined}
            aria-describedby={fields?.location ? fieldErrorId("location") : undefined}
          />
          {fields?.location ? (
            <FormMessage id={fieldErrorId("location")} variant="error">{fields.location}</FormMessage>
          ) : null}
        </FormField>

        <FormField>
          <Label htmlFor="contact-message">{copy.fields.message}</Label>
          <Textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            maxLength={5000}
            defaultValue={preserved?.message ?? ""}
            aria-invalid={fields?.message ? true : undefined}
            aria-describedby={fields?.message ? fieldErrorId("message") : undefined}
          />
          {fields?.message ? (
            <FormMessage id={fieldErrorId("message")} variant="error">{fields.message}</FormMessage>
          ) : null}
        </FormField>

        <FormField>
          <Label optional optionalText={copy.optional}>
            {copy.fields.upload}
          </Label>
          <p className="mb-3 text-body-sm leading-relaxed text-muted">{copy.fields.uploadHint}</p>
          <label htmlFor="contact-upload" className={formUploadZone}>
            {fileName ?? copy.fields.uploadAction}
          </label>
          <input
            id="contact-upload"
            type="file"
            accept=".pdf,image/*"
            className="sr-only"
            disabled
            onChange={(event) => {
              const file = event.target.files?.[0];
              setFileName(file?.name ?? null);
            }}
          />
        </FormField>

        <FormField className="pt-2">
          <Checkbox
            id="contact-consent"
            name="consent"
            value="yes"
            required
            defaultChecked={preserved?.consent ?? false}
            aria-invalid={fields?.consent ? true : undefined}
            aria-describedby={fields?.consent ? fieldErrorId("consent") : undefined}
            label={
              <>
                {copy.fields.consent}{" "}
                <Link href={privacyHref} className="text-brand-secondary underline underline-offset-2">
                  {privacyLabel}
                </Link>
              </>
            }
          />
          {fields?.consent ? (
            <FormMessage id={fieldErrorId("consent")} variant="error" className="mt-2">
              {fields.consent}
            </FormMessage>
          ) : null}
        </FormField>
      </div>

      <div className="mt-10">
        <PrimaryButton
          type="submit"
          className="w-full max-w-full sm:w-auto"
          loading={pending}
          disabled={pending}
        >
          {pending ? copy.submitting : copy.submit}
        </PrimaryButton>
      </div>
    </form>
  );
}
