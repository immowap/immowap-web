import Image from "next/image";

import { MarketTrendsArticleCard } from "@/components/market-trends/MarketTrendsArticleCard";

import { MarketTrendsBreadcrumb } from "@/components/market-trends/MarketTrendsBreadcrumb";

import { marketTrendsInsightGridClass } from "@/components/market-trends/MarketTrendsInsightCard";

import { CTASection } from "@/components/ui/CTASection";

import { Section, SectionHeader } from "@/components/ui/Section";

import { SolutionHeroSection } from "@/components/ui/SolutionHeroSection";

import type { Locale } from "@/lib/i18n/config";

import { getRoute } from "@/lib/i18n/config";

import {

  getMarketTrendsCategory,

  type MarketTrendsCategoryId,

} from "@/lib/i18n/market-trends-categories";

import {

  getMarketTrendsArticleImage,

  getMarketTrendsEditorialImage,

  getMarketTrendsHeroImage,

} from "@/lib/i18n/market-trends-images";

import { marketTrendsSections } from "@/lib/i18n/market-trends-sections";



interface MarketTrendsCategoryPageProps {

  locale: Locale;

  categoryId: MarketTrendsCategoryId;

}



export function MarketTrendsCategoryPage({ locale, categoryId }: MarketTrendsCategoryPageProps) {

  const category = getMarketTrendsCategory(categoryId);

  const copy = category.page[locale];

  const section = marketTrendsSections.find((item) => item.id === categoryId);



  if (!section) {

    throw new Error(`No section data for category: ${categoryId}`);

  }



  const contactHref = getRoute(locale, "contact");

  const dashboardHref = getRoute(locale, "dashboard");

  const heroImage = getMarketTrendsHeroImage(categoryId);

  const editorialImage = getMarketTrendsEditorialImage(categoryId);



  return (

    <>

      <MarketTrendsBreadcrumb locale={locale} currentTitle={category.label[locale]} />



      <SolutionHeroSection

        backgroundClassName="bg-[#F7F5EF]"

        label={locale === "de" ? "Markt & Trends" : "Market & Trends"}

        headline={category.label[locale]}

        primaryHref="#inhalte"

        primaryLabel={copy.heroBtnPrimary}

        imageSrc={heroImage}

        imageAlt={category.hub[locale].imageAlt}

      >

        <p className="mt-8 text-lg leading-[1.8] text-muted">{copy.heroSubheadline}</p>

        <p className="mt-4 text-base leading-[1.8] text-muted">{copy.heroIntro}</p>

      </SolutionHeroSection>



      <Section id="inhalte" variant="muted" className="py-24 md:py-32">

        <SectionHeader

          label={copy.articlesLabel}

          headline={section.headline[locale]}

          description={copy.articlesDescription}

        />

        <div className={marketTrendsInsightGridClass}>

          {section.articles.map((article) => {

            const content = article[locale];

            return (

              <MarketTrendsArticleCard

                key={article.id}

                title={content.title}

                description={content.description}

                expandedText={content.expanded}

                topics={content.topics}

                image={getMarketTrendsArticleImage(categoryId, article.id)}

                imageAlt={article.imageAlt[locale]}

                actionLabel={copy.cardActionLabel}

              />

            );

          })}

        </div>

      </Section>



      <Section variant="default" className="py-24 md:py-32">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] shadow-xl">

            <Image

              src={editorialImage}

              alt={category.hub[locale].imageAlt}

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


