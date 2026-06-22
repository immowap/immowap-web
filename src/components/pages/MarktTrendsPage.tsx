import Image from "next/image";
import { MarketTrendsHubCard } from "@/components/market-trends/MarketTrendsHubCard";
import { CTASection } from "@/components/ui/CTASection";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SolutionHeroSection } from "@/components/ui/SolutionHeroSection";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";
import {
  getMarketTrendsCategoryHref,
  marketTrendsCategories,
} from "@/lib/i18n/market-trends-categories";
import { getMarketTrendsHubImage } from "@/lib/i18n/market-trends-images";
import { marketTrendsPageCopy } from "@/lib/i18n/market-trends-copy";

interface MarktTrendsPageProps {
  locale: Locale;
}

export function MarktTrendsPage({ locale }: MarktTrendsPageProps) {
  const copy = marketTrendsPageCopy[locale];
  const contactHref = getRoute(locale, "contact");
  const dashboardHref = getRoute(locale, "dashboard");

  return (
    <>
      <SolutionHeroSection
        label={copy.heroLabel}
        headline={copy.heroHeadline}
        primaryHref="#kategorien"
        primaryLabel={copy.heroBtnPrimary}
        secondaryHref={contactHref}
        secondaryLabel={copy.heroBtnSecondary}
        imageSrc="/images/knowledge/market-trends-hero.jpg"
        imageAlt={
          locale === "de"
            ? "Markt und Trends – Immobilienmarktanalyse"
            : "Market and trends – property market analysis"
        }
      >
        <p className="mt-8 text-lg leading-[1.8] text-muted">{copy.heroSubheadline}</p>
        <p className="mt-4 text-base leading-[1.8] text-muted">{copy.heroIntro}</p>
      </SolutionHeroSection>

      <Section id="kategorien" variant="muted" className="py-24 md:py-32">
        <SectionHeader
          label={locale === "de" ? "Themenbereiche" : "Topic areas"}
          headline={
            locale === "de"
              ? "Markt & Trends im Überblick"
              : "Market & trends at a glance"
          }
          description={
            locale === "de"
              ? "Sechs Bereiche – von Marktberichten über Regionen bis zu Zukunftsthemen. Jeder Bereich führt zu vertiefenden Analysen und Einordnungen."
              : "Six areas – from market reports and regions to future topics. Each area leads to in-depth analyses and assessments."
          }
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {marketTrendsCategories.map((category) => {
            const hub = category.hub[locale];
            return (
              <MarketTrendsHubCard
                key={category.id}
                href={getMarketTrendsCategoryHref(locale, category.id)}
                title={hub.title}
                description={hub.description}
                image={getMarketTrendsHubImage(category.id)}
                imageAlt={hub.imageAlt}
                linkLabel={copy.learnMore}
              />
            );
          })}
        </div>
      </Section>

      <Section variant="default" className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-label mb-4 text-gold-600">
            {locale === "de" ? "Haltung" : "Approach"}
          </p>
          <h2 className="text-h2 text-brand-800">
            {locale === "de" ? "Wissen statt Schlagzeilen" : "Knowledge instead of headlines"}
          </h2>
          <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-[1.8] text-muted">
            {locale === "de"
              ? "immowap versteht Märkte nicht als tägliche Nachrichten, sondern als Zusammenspiel von Daten, Lage, Finanzierung und individuellen Zielen."
              : "immowap does not treat markets as daily news but as the interplay of data, location, financing and individual objectives."}
          </p>
        </div>
      </Section>

      <Section variant="muted" className="pb-24 pt-0 md:pb-32">
        <div className="relative mx-auto aspect-[21/9] max-w-5xl overflow-hidden rounded-[32px] shadow-xl">
          <Image
            src="/images/knowledge/mt-hub-overview.jpg"
            alt={
              locale === "de"
                ? "Markt und Trends – Immobilienmarkt Einordnung"
                : "Market and trends – property market assessment"
            }
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </Section>

      <CTASection
        headline={copy.ctaHeadline}
        text={copy.ctaText}
        primaryLabel={copy.ctaPrimary}
        primaryHref={dashboardHref}
        secondaryLabel={copy.ctaSecondary}
        secondaryHref={contactHref}
      />
    </>
  );
}
