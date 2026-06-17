import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { CTASection } from "@/components/ui/CTASection";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n";

interface HomePageProps {
  locale: Locale;
}

export function HomePage({ locale }: HomePageProps) {
  const t = getTranslations(locale);

  return (
    <>
      {/* Hero — starts below the header bar */}
      <section className="relative min-h-[calc(100svh-5rem)] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroBackground />
        </div>
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0F3D2E]/85 from-0% via-[#0F3D2E]/45 via-[45%] to-transparent to-[80%] max-md:via-[#0F3D2E]/55 max-md:via-[55%] max-md:to-[92%]"
          aria-hidden="true"
        />
        <div className="relative z-[2] mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl items-center px-6 pb-20 pt-16 md:px-8 md:pb-24 md:pt-20">
          <div className="max-w-3xl">
            <h1 className="text-h1 whitespace-pre-line text-white">
              {t.home.hero.headline}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-[1.8] text-white/90">
              {t.home.hero.subheadline}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={getRoute(locale, "dashboard")} className="w-full sm:w-auto">
                {t.home.hero.ctaPrimary}
              </Button>
              <Button
                href={getRoute(locale, "solutions")}
                variant="secondary"
                className="w-full border-white/30 text-white hover:border-gold-500/60 hover:bg-white/10 sm:w-auto"
              >
                {t.home.hero.ctaSecondary}
              </Button>
            </div>
            <p className="mt-12 whitespace-pre-line text-sm leading-relaxed text-white/75">
              {t.home.hero.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Platform */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2 text-brand-800">{t.home.platform.headline}</h2>
          <p className="mt-8 text-2xl font-semibold tracking-tight text-brand-800 md:text-3xl">
            {t.home.platform.acronym}
          </p>
          <div className="gold-rule mx-auto mt-8" />
          <p className="mt-8 text-lg leading-[1.8] text-muted">{t.home.platform.text}</p>
        </div>
      </Section>

      {/* Fit */}
      <Section variant="muted">
        <SectionHeader headline={t.home.fit.headline} />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.home.fit.cards.map((card) => (
            <Card key={card.title}>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </Card>
          ))}
        </div>
      </Section>

      {/* Goals */}
      <Section>
        <SectionHeader
          label={t.home.goals.label}
          headline={t.home.goals.headline}
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.home.goals.cards.map((title) => {
            const isEigennutzung =
              title === "Eigennutzung" || title === "Own use";
            const href =
              isEigennutzung
                ? locale === "de"
                  ? "/de/loesungen/eigennutzung"
                  : "/en/solutions/owner-occupied"
                : undefined;

            const card = (
              <Card key={title} className="justify-center">
                <CardTitle className="text-2xl">{title}</CardTitle>
              </Card>
            );

            return href ? (
              <Link key={title} href={href} className="block no-underline">
                {card}
              </Link>
            ) : (
              card
            );
          })}
        </div>
      </Section>

      {/* Analyses */}
      <Section variant="muted">
        <SectionHeader
          label={t.home.analyses.label}
          headline={t.home.analyses.headline}
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {t.home.analyses.cards.map((title) => (
            <Card key={title} className="justify-center">
              <CardTitle className="text-xl">{title}</CardTitle>
            </Card>
          ))}
        </div>
      </Section>

      {/* Tools */}
      <Section>
        <SectionHeader label={t.home.tools.label} headline="" className="mb-12" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.home.tools.cards.map((title) => (
            <Card key={title} className="justify-center">
              <CardTitle className="text-2xl">{title}</CardTitle>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section variant="muted">
        <SectionHeader label={t.home.process.label} headline="" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {t.home.process.steps.map((step, index) => (
            <div key={step} className="relative">
              <span className="text-label mb-4 block text-gold-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-h3 text-brand-800">{step}</h3>
              {index < t.home.process.steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-8 bg-warm-gray lg:block" />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Knowledge */}
      <Section>
        <SectionHeader label={t.home.knowledge.label} headline="" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.home.knowledge.cards.map((title) => (
            <Card key={title} className="justify-center">
              <CardTitle className="text-2xl">{title}</CardTitle>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        headline={t.home.cta.headline}
        text={t.home.cta.text}
        primaryLabel={t.home.cta.ctaPrimary}
        primaryHref={getRoute(locale, "dashboard")}
        secondaryLabel={t.home.cta.ctaSecondary}
        secondaryHref={getRoute(locale, "contact")}
      />
    </>
  );
}
