import { ProductVisual } from "@/components/illustrations/ProductVisual";
import { SecondaryButton } from "@/components/ui/buttons";
import { Card, CardTitle } from "@/components/ui/Card";
import { PricingCard } from "@/components/ui/cards";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { Section, SectionHeader } from "@/components/ui/Section";
import { PricingComparisonTable } from "@/components/trust";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n";

interface PackagesPageProps {
  locale: Locale;
}

const comparisonCopy = {
  de: {
    label: "Vergleich",
    headline: "Leistungen im Überblick",
    description: "Transparente Einordnung der wichtigsten Unterschiede zwischen den Modellen.",
    caption: "Vergleich der immowap Pakete",
    headers: ["Leistung", "Basic", "Premium", "Professional"] as const,
    rows: [
      { feature: "Erste Einschätzung", basic: "✓", premium: "✓", professional: "✓" },
      { feature: "Erweiterte Analyse", basic: "—", premium: "✓", professional: "✓" },
      { feature: "PDF-Berichte", basic: "—", premium: "✓", professional: "✓" },
      { feature: "Dashboard-Zugang", basic: "—", premium: "—", professional: "✓" },
      { feature: "Projektübersicht", basic: "—", premium: "—", professional: "✓" },
    ],
  },
  en: {
    label: "Comparison",
    headline: "Features at a glance",
    description: "A transparent overview of the key differences between plans.",
    caption: "Comparison of immowap packages",
    headers: ["Feature", "Basic", "Premium", "Professional"] as const,
    rows: [
      { feature: "Initial assessment", basic: "✓", premium: "✓", professional: "✓" },
      { feature: "Extended analysis", basic: "—", premium: "✓", professional: "✓" },
      { feature: "PDF reports", basic: "—", premium: "✓", professional: "✓" },
      { feature: "Dashboard access", basic: "—", premium: "—", professional: "✓" },
      { feature: "Project overview", basic: "—", premium: "—", professional: "✓" },
    ],
  },
} as const;

export function PackagesPage({ locale }: PackagesPageProps) {
  const t = getTranslations(locale);
  const comparison = comparisonCopy[locale];
  const contactHref = getRoute(locale, "contact");
  const availability = t.packages.availability;

  return (
    <>
      <PageHeader
        layout="split"
        label={t.pages.packages}
        headline={t.packages.hero.headline}
        subheadline={t.packages.hero.subheadline}
        visual={<ProductVisual variant="chart" locale={locale} className="max-w-full" />}
        secondaryHref={contactHref}
        secondaryLabel={t.packages.hero.ctaSecondary}
      />

      <Section variant="muted">
        <SectionHeader
          headline={t.packages.single.headline}
          description={t.packages.single.text}
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {t.packages.single.cards.map((card) => (
            <PricingCard
              key={card.title}
              title={card.title}
              availability={availability[card.availability as keyof typeof availability]}
              audience={card.audience}
              label={card.label || undefined}
              description={card.description}
              features={card.features}
              cta={card.cta}
              href={contactHref}
              highlighted={card.highlighted}
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          headline={t.packages.membership.headline}
          description={t.packages.membership.text}
        />
        <div className="mx-auto max-w-2xl">
          <PricingCard
            title={t.packages.membership.card.title}
            availability={availability[t.packages.membership.card.availability as keyof typeof availability]}
            audience={t.packages.membership.card.audience}
            description={t.packages.membership.card.subtitle}
            features={t.packages.membership.card.features}
            cta={t.packages.membership.card.cta}
            href={contactHref}
            highlighted
          />
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeader
          label={comparison.label}
          headline={comparison.headline}
          description={comparison.description}
        />
        <PricingComparisonTable
          caption={comparison.caption}
          headers={comparison.headers}
          rows={comparison.rows}
        />
      </Section>

      <Section>
        <SectionHeader headline={t.packages.custom.headline} />
        <Card className="mx-auto max-w-4xl">
          <p className="text-label text-gold-600">
            {availability[t.packages.custom.availability as keyof typeof availability]}
          </p>
          <p className="mt-6 text-body-lg text-muted">{t.packages.custom.text}</p>
          <p className="mt-6 text-body-lg text-brand-800">{t.packages.custom.pricing}</p>
          <p className="text-label mt-10 text-gold-600">{t.packages.custom.suitableLabel}</p>
          <ul className="mt-6 space-y-3">
            {t.packages.custom.suitable.map((item) => (
              <li key={item} className="flex items-start gap-3 text-body-sm text-muted">
                <span className="mt-0.5 shrink-0 text-gold-600" aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <SecondaryButton href={contactHref} className="w-full sm:w-auto">
              {t.packages.custom.cta}
            </SecondaryButton>
          </div>
        </Card>
      </Section>

      <Section variant="muted">
        <SectionHeader headline={t.packages.models.headline} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.packages.models.cards.map((title) => (
            <Card key={title} className="justify-center text-center">
              <CardTitle className="text-h4">{title}</CardTitle>
            </Card>
          ))}
        </div>
      </Section>

      <CTASection
        headline={t.packages.cta.headline}
        text={t.packages.cta.text}
        primaryLabel={t.packages.cta.ctaPrimary}
        primaryHref={contactHref}
        secondaryLabel={t.packages.cta.ctaSecondary}
        secondaryHref={getRoute(locale, "dashboard")}
      />
    </>
  );
}
