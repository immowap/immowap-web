import { PageBottomSpacer } from "@/components/ui/PageBottomSpacer";
import { InformationCard } from "@/components/ui/cards";
import { ProductSplitSection } from "@/components/ui/ProductSplitSection";
import { Section, SectionHeader } from "@/components/ui/Section";
import { RelatedSolutionsSection } from "@/components/solutions/RelatedSolutionsSection";
import { SolutionBreadcrumb } from "@/components/solutions/SolutionBreadcrumb";
import { SolutionInsightGrid } from "@/components/solutions/SolutionInsightGrid";
import { SolutionPageHero } from "@/components/solutions/SolutionPageHero";
import { SolutionProcessSteps } from "@/components/solutions/SolutionProcessSteps";
import { SolutionQuestionGrid } from "@/components/solutions/SolutionQuestionGrid";
import type { ProductVisualVariant } from "@/components/illustrations/ProductVisual";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";
import type { SolutionPageKey } from "@/lib/solutions/routes";

export interface AnalysisSolutionCopy {
  breadcrumbCurrent: string;
  heroLabel: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroText: string;
  heroBtnPrimary: string;
  heroBtnSecondary: string;
  sectionWhyLabel: string;
  sectionWhyHeadline: string;
  whyCards: readonly { title: string; description: string }[];
  sectionConsiderLabel: string;
  sectionConsiderHeadline: string;
  considerCards: readonly { title: string; description: string }[];
  sectionQuestionsLabel: string;
  sectionQuestionsHeadline: string;
  questionCards: readonly string[];
  sectionProcessLabel: string;
  sectionProcessHeadline: string;
  processSteps: readonly { title: string; description: string }[];
  sectionOverviewHeadline: string;
  overviewCards: readonly { title: string; description: string }[];
  sectionDiffLabel: string;
  sectionDiffHeadline: string;
  diffCards: readonly { title: string; description: string }[];
}

interface AnalysisSolutionLayoutProps {
  locale: Locale;
  pageKey: SolutionPageKey;
  visual: ProductVisualVariant;
  c: AnalysisSolutionCopy;
}

/**
 * Standard layout for analytical service pages.
 * Structure: Breadcrumb → Hero → Why → How we help → Questions → Process → Outcomes → Perspective → Related
 */
export function AnalysisSolutionLayout({
  locale,
  pageKey,
  visual,
  c,
}: AnalysisSolutionLayoutProps) {
  const contactHref = getRoute(locale, "contact");
  const dashboardHref = getRoute(locale, "dashboard");

  return (
    <>
      <SolutionBreadcrumb
        locale={locale}
        category="analyses"
        currentTitle={c.breadcrumbCurrent}
      />

      <SolutionPageHero
        label={c.heroLabel}
        headline={c.heroHeadline}
        primaryHref={dashboardHref}
        primaryLabel={c.heroBtnPrimary}
        secondaryHref={contactHref}
        secondaryLabel={c.heroBtnSecondary}
        visual={visual}
        backgroundClassName="bg-surface"
      >
        <p className="mt-8 text-h4 font-medium text-brand-800">{c.heroSubheadline}</p>
        <p className="mt-6 text-body-lg text-muted">{c.heroText}</p>
      </SolutionPageHero>

      {/* Why this matters */}
      <SolutionInsightGrid
        label={c.sectionWhyLabel}
        headline={c.sectionWhyHeadline}
        items={c.whyCards}
        columns={4}
      />

      {/* How immowap helps — risk/challenge factors */}
      <Section variant="muted">
        <p className="text-label mb-8 text-gold-600">{c.sectionConsiderLabel}</p>
        <ProductSplitSection
          headline={c.sectionConsiderHeadline}
          visual={visual}
          visualPosition="left"
        >
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {c.considerCards.map((card) => (
              <InformationCard key={card.title} title={card.title} description={card.description} />
            ))}
          </div>
        </ProductSplitSection>
      </Section>

      {/* Typical questions */}
      <SolutionQuestionGrid
        label={c.sectionQuestionsLabel}
        headline={c.sectionQuestionsHeadline}
        questions={c.questionCards}
      />

      {/* Methodology / process */}
      <SolutionProcessSteps
        label={c.sectionProcessLabel}
        headline={c.sectionProcessHeadline}
        steps={c.processSteps}
      />

      {/* Expected outcomes */}
      <Section>
        <SectionHeader headline={c.sectionOverviewHeadline} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.overviewCards.map((card) => (
            <InformationCard key={card.title} title={card.title} description={card.description} />
          ))}
        </div>
      </Section>

      {/* immowap perspective */}
      <Section variant="muted">
        <SectionHeader label={c.sectionDiffLabel} headline={c.sectionDiffHeadline} />
        <div className="grid gap-6 lg:grid-cols-3">
          {c.diffCards.map((card) => (
            <InformationCard key={card.title} title={card.title} description={card.description} />
          ))}
        </div>
      </Section>

      <RelatedSolutionsSection locale={locale} pageKey={pageKey} />

      <PageBottomSpacer />
    </>
  );
}
