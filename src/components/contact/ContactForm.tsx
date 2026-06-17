"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { DeTranslations } from "@/lib/i18n/translations/de";

type ContactFormCopy = DeTranslations["contact"]["form"];

interface ContactFormProps {
  copy: ContactFormCopy;
}

const fieldClassName =
  "w-full rounded-2xl border border-[#D7D2C8] bg-white px-5 py-4 text-base text-[#1D1D1B] outline-none transition-all duration-200 placeholder:text-[#1D1D1B]/40 focus:border-[#B9965B]/60 focus:ring-2 focus:ring-[#B9965B]/15";

const labelClassName = "mb-2.5 block text-sm font-medium text-[#0F3D2E]";

export function ContactForm({ copy }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[28px] border border-[#D7D2C8]/60 bg-white p-10 shadow-[0_20px_48px_rgba(15,61,46,0.08)] md:p-12">
        <p className="text-lg font-medium text-[#0F3D2E]">{copy.successTitle}</p>
        <p className="mt-4 text-base leading-[1.8] text-[#1D1D1B]/70">{copy.successText}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[28px] border border-black/[0.05] bg-white p-8 shadow-[0_20px_48px_rgba(15,61,46,0.08)] md:p-12"
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="contact-name" className={labelClassName}>
            {copy.fields.name}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClassName}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClassName}>
            {copy.fields.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClassName}
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className={labelClassName}>
            {copy.fields.phone}{" "}
            <span className="font-normal text-[#1D1D1B]/50">({copy.optional})</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClassName}
          />
        </div>

        <div>
          <label htmlFor="contact-goal" className={labelClassName}>
            {copy.fields.goal}
          </label>
          <select id="contact-goal" name="goal" required defaultValue="" className={cn(fieldClassName, "appearance-none")}>
            <option value="" disabled>
              {copy.selectPlaceholder}
            </option>
            {copy.goalOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact-project-type" className={labelClassName}>
            {copy.fields.projectType}
          </label>
          <select
            id="contact-project-type"
            name="projectType"
            required
            defaultValue=""
            className={cn(fieldClassName, "appearance-none")}
          >
            <option value="" disabled>
              {copy.selectPlaceholder}
            </option>
            {copy.projectTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact-location" className={labelClassName}>
            {copy.fields.location}{" "}
            <span className="font-normal text-[#1D1D1B]/50">({copy.optional})</span>
          </label>
          <input id="contact-location" name="location" type="text" className={fieldClassName} />
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClassName}>
            {copy.fields.message}
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className={cn(fieldClassName, "resize-y min-h-[140px]")}
          />
        </div>

        <div>
          <span className={labelClassName}>
            {copy.fields.upload}{" "}
            <span className="font-normal text-[#1D1D1B]/50">({copy.optional})</span>
          </span>
          <p className="mb-3 text-sm leading-relaxed text-[#1D1D1B]/60">{copy.fields.uploadHint}</p>
          <label
            htmlFor="contact-upload"
            className="flex min-h-[56px] cursor-pointer items-center justify-center rounded-2xl border border-dashed border-[#D7D2C8] bg-[#F7F5EF]/60 px-5 py-4 text-sm font-medium text-[#0F3D2E] transition-colors hover:border-[#B9965B]/50 hover:bg-[#F7F5EF]"
          >
            {fileName ?? copy.fields.uploadAction}
          </label>
          <input
            id="contact-upload"
            name="upload"
            type="file"
            accept=".pdf,image/*"
            className="sr-only"
            onChange={(event) => {
              const file = event.target.files?.[0];
              setFileName(file?.name ?? null);
            }}
          />
        </div>

        <div className="pt-2">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              name="consent"
              required
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
              className="mt-1 h-5 w-5 shrink-0 rounded border-[#D7D2C8] text-[#B9965B] focus:ring-[#B9965B]/30"
            />
            <span className="text-sm leading-relaxed text-[#1D1D1B]/80">{copy.fields.consent}</span>
          </label>
        </div>
      </div>

      <div className="mt-10">
        <Button type="submit" className="w-full sm:w-auto">
          {copy.submit}
        </Button>
      </div>
    </form>
  );
}
