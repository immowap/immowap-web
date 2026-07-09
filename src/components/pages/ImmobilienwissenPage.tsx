import { ArticleCard } from "@/components/editorial/ArticleCard";
import { ProductVisual } from "@/components/illustrations/ProductVisual";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageBottomSpacer } from "@/components/ui/PageBottomSpacer";
import { SecondaryButton } from "@/components/ui/buttons";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { IconName } from "@/components/ui/icons/Icon";
import type { Locale } from "@/lib/i18n/config";
import {
  propertyKnowledgeArticles,
  propertyKnowledgeOverviewCopy,
  propertyKnowledgeUi,
} from "@/lib/i18n/property-knowledge";

type LegacyIconName =
  | "scale"
  | "banknote"
  | "key"
  | "document"
  | "building"
  | "home"
  | "tool"
  | "receipt"
  | "chart"
  | "book";

const ARTICLE_ICON_MAP: Record<LegacyIconName, IconName> = {
  scale: "market-value",
  banknote: "cashflow",
  key: "building",
  document: "documents",
  building: "building",
  home: "building",
  tool: "renovation",
  receipt: "reports",
  chart: "chart",
  book: "reports",
};

interface ImmobilienwissenPageProps {
  locale: Locale;
}

export function ImmobilienwissenPage({ locale }: ImmobilienwissenPageProps) {
  const copy = propertyKnowledgeOverviewCopy[locale];
  const ui = propertyKnowledgeUi[locale];

  return (
    <>
      <PageHeader
        layout="split"
        label={copy.heroLabel}
        headline={copy.heroHeadline}
        subheadline={copy.heroSubheadline}
        primaryHref="#artikel"
        primaryLabel={copy.heroBtnPrimary}
        secondaryHref={copy.faqHref}
        secondaryLabel={copy.heroBtnSecondary}
        visual={<ProductVisual variant="documents" className="max-w-full" />}
      />

      <Section variant="muted" className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-h2 text-brand-800">{copy.introHeadline}</h2>
          <div className="gold-rule mt-8" aria-hidden="true" />
          <p className="mt-8 text-lg leading-[1.8] text-muted">{copy.introText}</p>
        </div>
      </Section>

      <Section id="artikel" className="py-24 md:py-32">
        <SectionHeader
          label={copy.gridLabel}
          headline={copy.gridHeadline}
          description={copy.gridDescription}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {propertyKnowledgeArticles.map((article) => (
            <ArticleCard
              key={article.id}
              icon={ARTICLE_ICON_MAP[article.icon]}
              title={article[locale].title}
              description={article[locale].description}
              href={article[locale].href}
              category={ui.category}
              linkLabel={ui.mehrErfahren}
            />
          ))}
        </div>
      </Section>

      <Section variant="muted" className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-label mb-6 block text-gold-600">{copy.outlookLabel}</p>
          <h2 className="text-h2 text-brand-800">{copy.outlookHeadline}</h2>
          <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
          <p className="mx-auto mt-8 max-w-xl text-lg leading-[1.8] text-muted">
            {copy.outlookText}
          </p>
          <div className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <SecondaryButton href={copy.marketHref}>{copy.outlookBtnMarket}</SecondaryButton>
            <SecondaryButton href={copy.faqHref}>{copy.outlookBtnFaq}</SecondaryButton>
          </div>
        </div>
      </Section>

      <PageBottomSpacer />
    </>
  );
}
