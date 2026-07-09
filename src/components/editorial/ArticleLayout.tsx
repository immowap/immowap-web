import type { ReactNode } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { RelatedArticlesSection } from "@/components/property-knowledge/RelatedArticlesSection";
import {
  ArticleMetaRow,
  CategoryBadge,
  PropertyKnowledgeBackLink,
  PropertyKnowledgeBreadcrumb,
} from "@/components/property-knowledge/ArticleUi";
import { TableOfContents, type TocItem } from "@/components/editorial/TableOfContents";
import { KeyTakeaways } from "@/components/editorial/EditorialCallout";
import type { Locale } from "@/lib/i18n/config";
import type { PropertyKnowledgeArticleId } from "@/lib/i18n/property-knowledge";

interface ArticleLayoutProps {
  locale: Locale;
  /** Breadcrumb current page title */
  breadcrumbTitle: string;
  /** PageHeader fields */
  heroLabel: string;
  heroHeadline: string;
  heroSubheadline?: string;
  /** Article header (can match hero or differ) */
  articleTitle?: string;
  articleSubtitle?: string;
  readMinutes: number;
  showCategory?: boolean;
  /** Optional TOC */
  tocLabel?: string;
  tocItems?: readonly TocItem[];
  /** Introduction paragraphs before main article */
  introduction?: ReactNode;
  children: ReactNode;
  /** Key takeaways before footer */
  takeaways?: { title: string; items: readonly string[] };
  backLinkHref: string;
  relatedExcludeId?: PropertyKnowledgeArticleId;
  relatedLimit?: number;
  /** Extra sections after article, before related */
  afterArticle?: ReactNode;
}

/**
 * Standard editorial layout for property-knowledge articles.
 * PageHeader → Introduction → TOC → Content → Takeaways → Related Articles
 */
export function ArticleLayout({
  locale,
  breadcrumbTitle,
  heroLabel,
  heroHeadline,
  heroSubheadline,
  articleTitle,
  articleSubtitle,
  readMinutes,
  showCategory = true,
  tocLabel,
  tocItems,
  introduction,
  children,
  takeaways,
  backLinkHref,
  relatedExcludeId,
  relatedLimit = 4,
  afterArticle,
}: ArticleLayoutProps) {
  const displayTitle = articleTitle ?? heroHeadline;
  const hasToc = tocItems && tocItems.length > 0 && tocLabel;

  return (
    <>
      <PageHeader
        layout="text"
        label={heroLabel}
        headline={heroHeadline}
        subheadline={heroSubheadline}
      />

      <div className="bg-cream py-12 md:py-16">
        <Container variant="article">
          <PropertyKnowledgeBreadcrumb locale={locale} currentTitle={breadcrumbTitle} />

          <header className="mb-10">
            {showCategory ? <CategoryBadge locale={locale} /> : null}
            {articleTitle && articleTitle !== heroHeadline ? (
              <h2 className="text-h2 text-brand-800">{displayTitle}</h2>
            ) : null}
            {articleSubtitle ? (
              <p className="mt-4 text-body-lg text-muted">{articleSubtitle}</p>
            ) : null}
            <div className="gold-rule mt-7" aria-hidden="true" />
            <ArticleMetaRow locale={locale} readMinutes={readMinutes} />
          </header>

          {hasToc ? (
            <div className="lg:hidden">
              <TableOfContents label={tocLabel} items={tocItems} />
            </div>
          ) : null}

          <div className={hasToc ? "lg:grid lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-12 xl:gap-16" : undefined}>
            <div className="min-w-0">
              {introduction}
              <article className="editorial-article">{children}</article>
              {takeaways ? (
                <KeyTakeaways title={takeaways.title} items={takeaways.items} />
              ) : null}
              <PropertyKnowledgeBackLink locale={locale} overviewHref={backLinkHref} />
            </div>

            {hasToc ? (
              <aside className="hidden lg:block">
                <TableOfContents label={tocLabel} items={tocItems} variant="sidebar" />
              </aside>
            ) : null}
          </div>
        </Container>
      </div>

      {afterArticle}

      {relatedExcludeId ? (
        <RelatedArticlesSection
          locale={locale}
          excludeId={relatedExcludeId}
          limit={relatedLimit}
        />
      ) : null}
    </>
  );
}
