import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n";

interface PlaceholderPageProps {
  locale: Locale;
  title: string;
}

export function PlaceholderPage({ locale, title }: PlaceholderPageProps) {
  const t = getTranslations(locale);

  return (
    <Section variant="muted" className="min-h-[60vh]">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-h1 text-brand-800">{title}</h1>
        <div className="gold-rule mx-auto mt-8" />
        <p className="mt-8 text-lg leading-[1.8] text-muted">{t.placeholder.text}</p>
        <div className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <Button href={getRoute(locale, "home")} className="w-full sm:w-auto">
            {t.placeholder.backHome}
          </Button>
          <Button
            href={getRoute(locale, "contact")}
            variant="secondary"
            className="w-full sm:w-auto"
          >
            {t.placeholder.contact}
          </Button>
        </div>
      </div>
    </Section>
  );
}
