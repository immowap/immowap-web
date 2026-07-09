import { FeatureCard } from "@/components/ui/cards";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import { getRelatedSolutions } from "@/lib/solutions/related-solutions";
import type { SolutionPageKey } from "@/lib/solutions/routes";

interface RelatedSolutionsSectionProps {
  locale: Locale;
  pageKey: SolutionPageKey;
}

const sectionCopy = {
  de: {
    label: "Weiterführend",
    headline: "Verwandte Lösungen",
    description: "Vertiefen Sie Ihre Entscheidung mit passenden Analysen und Tools.",
    linkLabel: "Mehr erfahren",
  },
  en: {
    label: "Explore further",
    headline: "Related solutions",
    description: "Deepen your decision with matching analyses and tools.",
    linkLabel: "Learn more",
  },
} as const;

export function RelatedSolutionsSection({
  locale,
  pageKey,
}: RelatedSolutionsSectionProps) {
  const copy = sectionCopy[locale];
  const items = getRelatedSolutions(locale, pageKey);

  if (items.length === 0) return null;

  return (
    <Section variant="muted">
      <SectionHeader
        label={copy.label}
        headline={copy.headline}
        description={copy.description}
      />
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <FeatureCard
            key={item.key}
            title={item.title}
            description={item.description}
            icon={item.icon}
            href={item.href}
            linkLabel={copy.linkLabel}
          />
        ))}
      </div>
    </Section>
  );
}
