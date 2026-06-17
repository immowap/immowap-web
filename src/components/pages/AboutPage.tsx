import Image from "next/image";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { CTASection } from "@/components/ui/CTASection";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n";
import { images } from "@/lib/images";

interface AboutPageProps {
  locale: Locale;
}

export function AboutPage({ locale }: AboutPageProps) {
  const t = getTranslations(locale);

  return (
    <>
      {/* Hero — starts below the header bar */}
      <section className="relative min-h-[calc(100svh-5rem)] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.aboutHero}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-brand-900/60" aria-hidden="true" />
        <div className="relative z-[2] mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl items-end px-6 pb-16 pt-16 md:px-8 md:pb-20 md:pt-20">
          <div className="max-w-3xl">
            <h1 className="text-h1 whitespace-pre-line text-white">
              {t.about.hero.headline}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-[1.8] text-white/90">
              {t.about.hero.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Idea — editorial, text-focused */}
      <Section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader headline={t.about.idea.headline} className="mb-0" />
          <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-warm-gray/50">
          <p className="text-lg leading-[1.9] text-muted lg:pr-14">{t.about.idea.text}</p>
          <p className="text-lg leading-[1.9] text-muted lg:pl-14">{t.about.idea.textSecondary}</p>
        </div>
      </Section>

      {/* Experience & Technology — premium cards */}
      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader headline={t.about.experience.headline} />
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <Card className="h-full">
            <CardTitle className="text-2xl">{t.about.experience.left.title}</CardTitle>
            <CardDescription className="mt-4 text-lg">{t.about.experience.left.text}</CardDescription>
          </Card>
          <Card className="h-full">
            <CardTitle className="text-2xl">{t.about.experience.right.title}</CardTitle>
            <CardDescription className="mt-4 text-lg">{t.about.experience.right.text}</CardDescription>
          </Card>
        </div>
      </Section>

      {/* Difference */}
      <Section>
        <SectionHeader headline={t.about.difference.headline} />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.about.difference.cards.map((card) => (
            <Card key={card.title}>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </Card>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section variant="muted">
        <SectionHeader headline={t.about.values.headline} />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.about.values.cards.map((title) => (
            <Card key={title} className="justify-center">
              <CardTitle className="text-2xl">{title}</CardTitle>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeader
          headline={t.about.process.headline}
          description={t.about.process.text}
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {t.about.process.steps.map((step, index) => (
            <div key={step}>
              <span className="text-label mb-4 block text-gold-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold text-brand-800">{step}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
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
