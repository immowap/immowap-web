import Image from "next/image";

import { MarketReportFeatured } from "@/components/market-reports/MarketReportFeatured";

import { MarketTrendsArticleCard } from "@/components/market-trends/MarketTrendsArticleCard";

import { MarketTrendsBreadcrumb } from "@/components/market-trends/MarketTrendsBreadcrumb";

import { TrendDriverCard } from "@/components/market-trends/TrendDriverCard";

import { marketTrendsInsightGridClass } from "@/components/market-trends/MarketTrendsInsightCard";

import { CTASection } from "@/components/ui/CTASection";

import { Section, SectionHeader } from "@/components/ui/Section";

import { SolutionHeroSection } from "@/components/ui/SolutionHeroSection";

import type { Locale } from "@/lib/i18n/config";

import { getRoute } from "@/lib/i18n/config";

import {

  trendDrivers,

  trendsEntwicklungenPageCopy,

  trendsFeaturedTopic,

  trendsTopics,

} from "@/lib/i18n/trends-entwicklungen";



interface TrendsEntwicklungenPageProps {

  locale: Locale;

}



const HERO_IMAGE = "/images/knowledge/trends-dev/hero.jpg";

const EDITORIAL_IMAGE = "/images/knowledge/trends-dev/editorial.jpg";



export function TrendsEntwicklungenPage({ locale }: TrendsEntwicklungenPageProps) {

  const copy = trendsEntwicklungenPageCopy[locale];

  const contactHref = getRoute(locale, "contact");

  const dashboardHref = getRoute(locale, "dashboard");

  const featured = trendsFeaturedTopic;



  return (

    <>

      <MarketTrendsBreadcrumb locale={locale} currentTitle={copy.breadcrumbCurrent} />



      <SolutionHeroSection

        backgroundClassName="bg-[#F7F5EF]"

        label={copy.heroLabel}

        headline={copy.heroHeadline}

        primaryHref="#inhalte"

        primaryLabel={copy.heroBtnPrimary}

        imageSrc={HERO_IMAGE}

        imageAlt={

          locale === "de"

            ? "Trends und Entwicklungen – Immobilienmarkt Perspektiven"

            : "Trends and developments – property market perspectives"

        }

      >

        <p className="mt-8 text-lg leading-[1.8] text-muted">{copy.heroSubheadline}</p>

        <p className="mt-4 text-base leading-[1.8] text-muted">{copy.heroIntro}</p>

      </SolutionHeroSection>



      <Section id="inhalte" variant="muted" className="py-24 md:py-32">

        <div className="mb-12">

          <SectionHeader label={copy.featuredLabel} headline={copy.featuredHeadline} />

          <MarketReportFeatured

            title={featured[locale].title}

            description={featured[locale].description}

            expandedText={featured[locale].expanded}

            image={featured.image}

            imageAlt={featured.imageAlt[locale]}

            actionLabel={copy.cardActionLabel}

          />

        </div>



        <SectionHeader

          label={copy.latestLabel}

          headline={copy.latestHeadline}

          description={copy.latestDescription}

          className="mb-12"

        />

        <div className={marketTrendsInsightGridClass}>

          {trendsTopics.map((topic) => {

            const content = topic[locale];

            return (

              <MarketTrendsArticleCard

                key={topic.id}

                title={content.title}

                description={content.description}

                expandedText={content.expanded}

                image={topic.image}

                imageAlt={topic.imageAlt[locale]}

                actionLabel={copy.cardActionLabel}

              />

            );

          })}

        </div>

      </Section>



      <Section variant="default" className="py-24 md:py-32">

        <SectionHeader headline={copy.driversHeadline} description={copy.driversDescription} />

        <div className={marketTrendsInsightGridClass}>

          {trendDrivers.map((driver) => {

            const content = driver[locale];

            return (

              <TrendDriverCard

                key={driver.id}

                icon={driver.icon}

                title={content.title}

                description={content.description}

              />

            );

          })}

        </div>

      </Section>



      <Section variant="muted" className="py-24 md:py-32">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] shadow-xl">

            <Image

              src={EDITORIAL_IMAGE}

              alt={

                locale === "de"

                  ? "Langfristige Entwicklungen – Immobilienmarkt Forschung"

                  : "Long-term developments – property market research"

              }

              fill

              className="object-cover object-center"

              sizes="(max-width: 1024px) 100vw, 50vw"

            />

          </div>

          <div>

            <p className="text-label mb-4 text-gold-600">{copy.editorialLabel}</p>

            <h2 className="text-h2 text-brand-800">{copy.editorialHeadline}</h2>

            <div className="gold-rule mt-8" aria-hidden="true" />

            <p className="mt-8 text-lg leading-[1.8] text-muted">{copy.editorialText}</p>

          </div>

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


