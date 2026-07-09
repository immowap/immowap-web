import { ArticleCard } from "@/components/editorial/ArticleCard";
import { PageBottomSpacer } from "@/components/ui/PageBottomSpacer";
import type { Locale } from "@/lib/i18n/config";
import {
  getRelatedArticles,
  propertyKnowledgeUi,
  type PropertyKnowledgeArticleId,
} from "@/lib/i18n/property-knowledge";

const sectionCopy = {
  de: {
    related: "Verwandte Artikel",
    continue: "Weiterlesen",
    topics: "Empfohlene Themen zum Vertiefen",
    linkLabel: "Artikel lesen",
  },
  en: {
    related: "Related articles",
    continue: "Continue reading",
    topics: "Recommended topics to explore further",
    linkLabel: "Read article",
  },
} as const;

interface RelatedArticlesSectionProps {
  locale: Locale;
  excludeId?: PropertyKnowledgeArticleId;
  limit?: number;
}

export function RelatedArticlesSection({
  locale,
  excludeId,
  limit = 4,
}: RelatedArticlesSectionProps) {
  const ui = propertyKnowledgeUi[locale];
  const labels = sectionCopy[locale];
  const articles = getRelatedArticles(locale, excludeId).slice(0, limit);

  if (articles.length === 0) {
    return <PageBottomSpacer />;
  }

  return (
    <>
      <section className="border-t border-warm-gray/40 bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="text-label mb-3 text-gold-600">{labels.continue}</p>
          <h2 className="text-h2 text-brand-800">{labels.related}</h2>
          <p className="mt-3 max-w-2xl text-body-sm text-muted">{labels.topics}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((article) => (
              <ArticleCard
                key={article.href}
                title={article.title}
                description={article.description}
                href={article.href}
                category={ui.category}
                linkLabel={labels.linkLabel}
              />
            ))}
          </div>
        </div>
      </section>
      <PageBottomSpacer />
    </>
  );
}
