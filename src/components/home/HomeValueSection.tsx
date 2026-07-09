import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n";

interface HomeValueSectionProps {
  locale: Locale;
}

/** Merged platform identity + trust pillars */
export function HomeValueSection({ locale }: HomeValueSectionProps) {
  const t = getTranslations(locale);

  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeader headline={t.home.platform.headline} className="mb-0 [&_h2]:mx-auto" />
        <p className="mt-6 text-h3 font-semibold tracking-tight text-brand-800">
          {t.home.platform.acronym}
        </p>
        <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
        <p className="mt-8 text-body-lg text-muted">{t.home.platform.text}</p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {t.home.fit.cards.map((card) => (
          <Card key={card.title} className="text-center md:text-left">
            <CardTitle className="text-h4">{card.title}</CardTitle>
            <CardDescription className="mt-3">{card.description}</CardDescription>
          </Card>
        ))}
      </div>
    </Section>
  );
}
