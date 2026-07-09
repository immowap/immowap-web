import Image from "next/image";

import { KnowledgeBreadcrumb } from "@/components/editorial/KnowledgeBreadcrumb";
import { MarketIndicatorCard } from "@/components/market-reports/MarketIndicatorCard";
import { MarketReportFeatured } from "@/components/market-reports/MarketReportFeatured";
import { MarketTrendsArticleCard } from "@/components/market-trends/MarketTrendsArticleCard";
import { marketTrendsInsightGridClass } from "@/components/market-trends/MarketTrendsInsightCard";
import { PageBottomSpacer } from "@/components/ui/PageBottomSpacer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import {
  marketIndicators,
  marketReports,
  marketReportsFeaturedId,
  marketReportsPageCopy,
} from "@/lib/i18n/market-reports";

interface MarketReportsPageProps {
  locale: Locale;
}

const HERO_IMAGE = "/images/knowledge/market-reports-hero.jpg";
const FEATURED_IMAGE = "/images/knowledge/market-reports-featured.jpg";
const EDITORIAL_IMAGE = "/images/knowledge/market-reports-editorial.jpg";

export function MarketReportsPage({ locale }: MarketReportsPageProps) {
  const copy = marketReportsPageCopy[locale];
  const featuredReport = marketReports.find((report) => report.id === marketReportsFeaturedId);

  return (
    <>
      <KnowledgeBreadcrumb
        locale={locale}
        category="market-trends"
        currentTitle={copy.breadcrumbCurrent}
      />

      <PageHeader
        layout="split"
        label={copy.heroLabel}
        headline={copy.heroHeadline}
        imageSrc={HERO_IMAGE}
        imageAlt={
          locale === "de"
            ? "Marktberichte – Immobilienmarktanalysen"
            : "Market reports – property market analyses"
        }
        primaryHref="#inhalte"
        primaryLabel={copy.heroBtnPrimary}
      >
        <p className="mt-8 text-lg leading-[1.8] text-muted">{copy.heroSubheadline}</p>
        <p className="mt-4 text-base leading-[1.8] text-muted">{copy.heroIntro}</p>
      </PageHeader>

      <Section id="inhalte" variant="muted" className="py-24 md:py-32">
        {featuredReport ? (
          <div className="mb-12">
            <SectionHeader label={copy.featuredLabel} headline={copy.featuredHeadline} />
            <MarketReportFeatured
              title={featuredReport[locale].title}
              description={featuredReport[locale].description}
              expandedText={featuredReport[locale].expanded}
              image={FEATURED_IMAGE}
              imageAlt={featuredReport.imageAlt[locale]}
              actionLabel={copy.cardActionLabel}
            />
          </div>
        ) : null}

        <SectionHeader
          label={copy.latestLabel}
          headline={copy.latestHeadline}
          description={copy.latestDescription}
          className={featuredReport ? "mb-12" : undefined}
        />
        <div className={marketTrendsInsightGridClass}>
          {marketReports.map((report) => {
            const content = report[locale];
            return (
              <MarketTrendsArticleCard
                key={report.id}
                title={content.title}
                description={content.description}
                expandedText={content.expanded}
                image={report.image}
                imageAlt={report.imageAlt[locale]}
                actionLabel={copy.cardActionLabel}
              />
            );
          })}
        </div>
      </Section>

      <Section variant="default" className="py-24 md:py-32">
        <SectionHeader
          label={copy.indicatorsLabel}
          headline={copy.indicatorsHeadline}
          description={copy.indicatorsDescription}
        />
        <div className={marketTrendsInsightGridClass}>
          {marketIndicators.map((indicator) => {
            const content = indicator[locale];
            return (
              <MarketIndicatorCard
                key={indicator.id}
                icon={indicator.icon}
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
                  ? "Wissen statt Schlagzeilen – Marktforschung"
                  : "Knowledge instead of headlines – market research"
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

      <PageBottomSpacer />
    </>
  );
}
