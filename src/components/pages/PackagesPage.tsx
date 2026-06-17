import { Button } from "@/components/ui/Button";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { CTASection } from "@/components/ui/CTASection";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n";

interface PackagesPageProps {
  locale: Locale;
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-muted">
          <span className="mt-0.5 shrink-0 text-[#B9965B]" aria-hidden="true">
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

interface PackageCardProps {
  title: string;
  label?: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
}

function PackageCard({
  title,
  label,
  description,
  features,
  cta,
  href,
  highlighted = false,
}: PackageCardProps) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col",
        highlighted &&
          "border-[#B9965B]/35 shadow-[0_12px_40px_rgba(185,150,91,0.12)] ring-1 ring-[#B9965B]/15",
      )}
    >
      <CardTitle className="text-2xl">{title}</CardTitle>
      {label && (
        <p className="mt-3 text-sm font-medium tracking-wide text-[#B9965B]">
          {label}
        </p>
      )}
      <CardDescription className="mt-4 text-base">{description}</CardDescription>
      <FeatureList items={features} />
      <div className="mt-auto pt-10">
        <Button
          href={href}
          variant={highlighted ? "primary" : "secondary"}
          className="w-full sm:w-auto"
        >
          {cta}
        </Button>
      </div>
    </Card>
  );
}

export function PackagesPage({ locale }: PackagesPageProps) {
  const t = getTranslations(locale);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/[0.04] bg-cream px-6 py-20 md:px-8 md:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-h1 text-brand-800">{t.packages.hero.headline}</h1>
          <p className="mt-8 text-lg leading-[1.8] text-muted">
            {t.packages.hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              href={getRoute(locale, "dashboard")}
              className="w-full border-transparent bg-brand-800 text-white hover:bg-brand-900 sm:w-auto"
            >
              {t.packages.hero.ctaPrimary}
            </Button>
            <Button
              href={getRoute(locale, "contact")}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {t.packages.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </section>

      {/* Single project */}
      <Section variant="muted">
        <SectionHeader
          headline={t.packages.single.headline}
          description={t.packages.single.text}
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {t.packages.single.cards.map((card) => (
            <PackageCard
              key={card.title}
              title={card.title}
              label={card.label || undefined}
              description={card.description}
              features={card.features}
              cta={card.cta}
              href={getRoute(locale, "dashboard")}
              highlighted={card.highlighted}
            />
          ))}
        </div>
      </Section>

      {/* Membership */}
      <Section>
        <SectionHeader
          headline={t.packages.membership.headline}
          description={t.packages.membership.text}
        />
        <div className="mx-auto max-w-2xl">
          <PackageCard
            title={t.packages.membership.card.title}
            description={t.packages.membership.card.subtitle}
            features={t.packages.membership.card.features}
            cta={t.packages.membership.card.cta}
            href={getRoute(locale, "dashboard")}
          />
        </div>
      </Section>

      {/* Custom solutions */}
      <Section variant="muted">
        <SectionHeader headline={t.packages.custom.headline} />
        <Card className="mx-auto max-w-4xl">
          <p className="text-lg leading-[1.8] text-muted">{t.packages.custom.text}</p>
          <p className="mt-6 text-lg leading-[1.8] text-brand-800">
            {t.packages.custom.pricing}
          </p>
          <p className="text-label mt-10 text-gold-600">{t.packages.custom.suitableLabel}</p>
          <ul className="mt-6 space-y-3">
            {t.packages.custom.suitable.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] leading-relaxed text-muted"
              >
                <span className="mt-0.5 shrink-0 text-[#B9965B]" aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href={getRoute(locale, "contact")} className="w-full sm:w-auto">
              {t.packages.custom.cta}
            </Button>
          </div>
        </Card>
      </Section>

      {/* Models */}
      <Section>
        <SectionHeader headline={t.packages.models.headline} />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.packages.models.cards.map((title) => (
            <Card key={title} className="justify-center text-center">
              <CardTitle className="text-xl">{title}</CardTitle>
            </Card>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <CTASection
        headline={t.packages.cta.headline}
        text={t.packages.cta.text}
        primaryLabel={t.packages.cta.ctaPrimary}
        primaryHref={getRoute(locale, "dashboard")}
        secondaryLabel={t.packages.cta.ctaSecondary}
        secondaryHref={getRoute(locale, "contact")}
      />
    </>
  );
}
