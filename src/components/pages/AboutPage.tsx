import { ProductVisual } from "@/components/illustrations/ProductVisual";
import { InformationCard } from "@/components/ui/cards";
import { Card, CardTitle } from "@/components/ui/Card";
import { CTASection } from "@/components/ui/CTASection";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/Section";
import { TrustStepGrid } from "@/components/trust";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n";

interface AboutPageProps {
  locale: Locale;
}

export function AboutPage({ locale }: AboutPageProps) {
  const t = getTranslations(locale);

  return (
    <>
      <PageHeader
        layout="split"
        label={t.pages.about}
        headline={t.about.hero.headline}
        subheadline={t.about.hero.subheadline}
        visual={<ProductVisual variant="dashboard" locale={locale} className="max-w-full" />}
      />

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader headline={t.about.idea.headline} className="mb-0 [&_h2]:mx-auto" />
          <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16">
          <p className="text-body-lg text-muted">{t.about.idea.text}</p>
          <p className="text-body-lg text-muted">{t.about.idea.textSecondary}</p>
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeader headline={t.about.experience.headline} />
        <div className="grid gap-8 lg:grid-cols-2">
          <InformationCard
            title={t.about.experience.left.title}
            description={t.about.experience.left.text}
          />
          <InformationCard
            title={t.about.experience.right.title}
            description={t.about.experience.right.text}
          />
        </div>
      </Section>

      <Section>
        <SectionHeader headline={t.about.difference.headline} />
        <div className="grid gap-6 md:grid-cols-3">
          {t.about.difference.cards.map((card) => (
            <InformationCard
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeader headline={t.about.values.headline} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.about.values.cards.map((title) => (
            <Card key={title} className="justify-center text-center">
              <CardTitle className="text-h4">{title}</CardTitle>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          headline={t.about.process.headline}
          description={t.about.process.text}
        />
        <TrustStepGrid steps={t.about.process.steps} />
      </Section>

      <CTASection
        headline={t.about.cta.headline}
        text={t.about.cta.text}
        primaryLabel={t.about.cta.ctaPrimary}
        primaryHref={getRoute(locale, "dashboard")}
        secondaryLabel={t.about.cta.ctaSecondary}
        secondaryHref={getRoute(locale, "contact")}
      />
    </>
  );
}
