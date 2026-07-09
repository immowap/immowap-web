import { SecondaryButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageBottomSpacer } from "@/components/ui/PageBottomSpacer";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";

const copy = {
  de: {
    headline: "Brauchen Sie Unterstützung?",
    text: "Kontaktieren Sie unser Team.",
    cta: "Kontakt",
  },
  en: {
    headline: "Need help?",
    text: "Contact our team.",
    cta: "Contact",
  },
} as const;

interface ContactStripProps {
  locale: Locale;
}

/** Compact contact prompt for sub-pages */
export function ContactStrip({ locale }: ContactStripProps) {
  const c = copy[locale];

  return (
    <>
      <section className="border-t border-warm-gray/40 bg-cream">
        <Container className="flex flex-col items-start justify-between gap-4 py-10 md:flex-row md:items-center md:py-12">
          <div>
            <p className="text-body-sm font-medium text-brand-800">{c.headline}</p>
            <p className="mt-1 text-body-sm text-muted">{c.text}</p>
          </div>
          <SecondaryButton href={getRoute(locale, "contact")} size="compact">
            {c.cta}
          </SecondaryButton>
        </Container>
      </section>
      <PageBottomSpacer />
    </>
  );
}
