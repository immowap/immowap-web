import { SecondaryButton } from "@/components/ui/buttons";
import { FeatureCard } from "@/components/ui/cards";
import { PageBottomSpacer } from "@/components/ui/PageBottomSpacer";
import { FeatureInsightGrid } from "@/components/ui/FeatureInsightCard";
import { ProductSplitSection } from "@/components/ui/ProductSplitSection";
import { Section, SectionHeader } from "@/components/ui/Section";
import { RelatedSolutionsSection } from "@/components/solutions/RelatedSolutionsSection";
import { SolutionDifferentiatorSection } from "@/components/solutions/SolutionDifferentiatorSection";
import { SolutionInsightGrid } from "@/components/solutions/SolutionInsightGrid";
import { SolutionPageHero } from "@/components/solutions/SolutionPageHero";
import { SolutionPrinciplesSection } from "@/components/solutions/SolutionPrinciplesSection";
import type { ProductVisualVariant } from "@/components/illustrations/ProductVisual";
import type { IconName } from "@/components/ui/icons/Icon";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";
import type { SolutionPageKey } from "@/lib/solutions/routes";

export interface GoalSolutionCopy {
  heroLabel: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroBtnPrimary: string;
  heroBtnSecondary: string;
  section1Headline: string;
  section1Text: string;
  section2Label: string;
  section2Headline: string;
  considerationCards: readonly { title: string; description: string }[];
  section3Headline: string;
  section3Text: string;
  section3Btn: string;
  section4Label: string;
  section4Headline: string;
  cardLink: string;
  analysisCards: readonly { title: string; description: string; href: string }[];
  section5Label: string;
  section5Headline: string;
  strategyCards: readonly { title: string; description: string }[];
  section6Label: string;
  section6Headline: string;
  section6Text: string;
  section6TextSecondary: string;
  section6ListLabel: string;
  section6Items: readonly string[];
  section7Headline: string;
  principleCards: readonly { number: string; title: string; description: string }[];
}

interface GoalSolutionLayoutProps {
  locale: Locale;
  pageKey: SolutionPageKey;
  visual: ProductVisualVariant;
  strategyIcons?: IconName[];
  c: GoalSolutionCopy;
}

const recommendedAnalysesHeader = {
  de: {
    label: "Für Ihr Ziel",
    headline: "Empfohlene Analysen",
    description:
      "Diese Analysen unterstützen typische Entscheidungen in diesem Zielkontext — ohne technische Vorkenntnisse.",
  },
  en: {
    label: "For your goal",
    headline: "Recommended analyses",
    description:
      "These analyses support typical decisions in this goal context — without requiring technical prior knowledge.",
  },
} as const;

/**
 * Standard layout for goal-based solution pages.
 * Structure: Hero → Intro → Challenges → How we help → Analyses → Outcomes → Trust → Principles → Related
 */
export function GoalSolutionLayout({
  locale,
  pageKey,
  visual,
  strategyIcons,
  c,
}: GoalSolutionLayoutProps) {
  const contactHref = getRoute(locale, "contact");
  const dashboardHref = getRoute(locale, "dashboard");
  const solutionsHref = getRoute(locale, "solutions");

  return (
    <>
      <SolutionPageHero
        label={c.heroLabel}
        headline={c.heroHeadline}
        primaryHref={dashboardHref}
        primaryLabel={c.heroBtnPrimary}
        secondaryHref={contactHref}
        secondaryLabel={c.heroBtnSecondary}
        visual={visual}
      >
        <p className="mt-8 text-body-lg text-muted">{c.heroSubheadline}</p>
      </SolutionPageHero>

      {/* 1. Introduction — why this matters */}
      <Section variant="muted">
        <ProductSplitSection
          headline={c.section1Headline}
          text={c.section1Text}
          visual={visual}
        />
      </Section>

      {/* 2. Typical challenges / considerations */}
      <SolutionInsightGrid
        label={c.section2Label}
        headline={c.section2Headline}
        items={c.considerationCards}
        columns={3}
      />

      {/* 3. How immowap helps */}
      <Section variant="muted">
        <ProductSplitSection
          headline={c.section3Headline}
          text={c.section3Text}
          visual={visual}
          visualPosition="left"
        >
          <div className="mt-10">
            <SecondaryButton href={solutionsHref}>{c.section3Btn}</SecondaryButton>
          </div>
        </ProductSplitSection>
      </Section>

      {/* 4. Recommended analyses for this goal */}
      <Section>
        <SectionHeader
          label={recommendedAnalysesHeader[locale].label}
          headline={recommendedAnalysesHeader[locale].headline}
          description={recommendedAnalysesHeader[locale].description}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {c.analysisCards.map((card) => (
            <FeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
              href={card.href}
              linkLabel={c.cardLink}
            />
          ))}
        </div>
      </Section>

      {/* 5. Expected outcomes / strategies */}
      <Section variant="muted">
        <SectionHeader label={c.section5Label} headline={c.section5Headline} />
        <FeatureInsightGrid
          items={c.strategyCards}
          icons={strategyIcons}
        />
      </Section>

      {/* 6. Trust & methodology */}
      <SolutionDifferentiatorSection
        label={c.section6Label}
        headline={c.section6Headline}
        text={c.section6Text}
        textSecondary={c.section6TextSecondary}
        listLabel={c.section6ListLabel}
        items={c.section6Items}
      />

      {/* 7. Principles / outcomes */}
      <SolutionPrinciplesSection
        headline={c.section7Headline}
        items={c.principleCards}
      />

      {/* 8. Related solutions */}
      <RelatedSolutionsSection locale={locale} pageKey={pageKey} />

      <PageBottomSpacer />
    </>
  );
}
