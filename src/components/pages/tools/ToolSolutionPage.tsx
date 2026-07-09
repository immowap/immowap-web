import { PageBottomSpacer } from "@/components/ui/PageBottomSpacer";
import { InformationCard } from "@/components/ui/cards";
import { ProductSplitSection } from "@/components/ui/ProductSplitSection";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  RelatedSolutionsSection,
  SolutionBreadcrumb,
  SolutionInsightGrid,
  SolutionPageHero,
  SolutionProcessSteps,
} from "@/components/solutions";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";
import type { SolutionPageKey } from "@/lib/solutions/routes";
import type { ToolPageContent } from "@/lib/tools/content";

interface ToolSolutionPageProps {
  locale: Locale;
  pageKey: SolutionPageKey;
  content: ToolPageContent;
}

export function ToolSolutionPage({ locale, pageKey, content }: ToolSolutionPageProps) {
  const c = content[locale];
  const contactHref = getRoute(locale, "contact");
  const dashboardHref = getRoute(locale, "dashboard");

  return (
    <>
      <SolutionBreadcrumb
        locale={locale}
        category="tools"
        currentTitle={c.breadcrumbCurrent}
      />

      <SolutionPageHero
        label={c.heroLabel}
        headline={c.heroHeadline}
        primaryHref={dashboardHref}
        primaryLabel={c.heroBtnPrimary}
        secondaryHref={contactHref}
        secondaryLabel={c.heroBtnSecondary}
        visual="dashboard"
        backgroundClassName="bg-surface"
      >
        <p className="mt-8 text-h4 font-medium text-brand-800">{c.heroSubheadline}</p>
        <p className="mt-6 text-body-lg text-muted">{c.heroText}</p>
      </SolutionPageHero>

      <Section variant="muted">
        <p className="text-label mb-8 text-gold-600">{c.introLabel}</p>
        <ProductSplitSection headline={c.introHeadline} text={c.introText} visual="dashboard" />
      </Section>

      <SolutionInsightGrid
        label={c.featureLabel}
        headline={c.featureHeadline}
        items={c.featureCards}
        columns={3}
      />

      <SolutionProcessSteps
        label={c.processLabel}
        headline={c.processHeadline}
        steps={c.processSteps}
      />

      <Section>
        <SectionHeader label={c.trustLabel} headline={c.trustHeadline} />
        <p className="mx-auto mb-10 max-w-3xl text-center text-body-lg text-muted">
          {c.trustText}
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.trustPoints.map((point) => (
            <InformationCard
              key={point.title}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>
      </Section>

      <RelatedSolutionsSection locale={locale} pageKey={pageKey} />

      <PageBottomSpacer />
    </>
  );
}
