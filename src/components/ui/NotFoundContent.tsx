"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { getLocaleFromPath } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n";

export function NotFoundContent() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname ?? "") ?? "de";
  const t = getTranslations(locale);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <p className="text-label mb-4 text-gold-600">404</p>
      <h1 className="text-h2 text-brand-800">{t.notFound.title}</h1>
      <p className="mt-4 max-w-md text-muted">{t.notFound.text}</p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button href={locale === "de" ? "/de" : "/en"}>
          {t.notFound.backHome}
        </Button>
        <Button
          href={locale === "de" ? "/en" : "/de"}
          variant="secondary"
        >
          {locale === "de" ? "Back to home (EN)" : "Zur Startseite (DE)"}
        </Button>
      </div>
    </div>
  );
}
