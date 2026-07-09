import { InformationCard } from "@/components/ui/cards";
import { Section, SectionHeader } from "@/components/ui/Section";

interface InsightItem {
  title: string;
  description: string;
}

interface SolutionInsightGridProps {
  label?: string;
  headline: string;
  description?: string;
  items: readonly InsightItem[];
  columns?: 2 | 3 | 4;
}

const columnClass = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
} as const;

export function SolutionInsightGrid({
  label,
  headline,
  description,
  items,
  columns = 3,
}: SolutionInsightGridProps) {
  return (
    <Section>
      <SectionHeader label={label} headline={headline} description={description} />
      <div className={`grid gap-6 ${columnClass[columns]}`}>
        {items.map((item) => (
          <InformationCard key={item.title} title={item.title} description={item.description} />
        ))}
      </div>
    </Section>
  );
}
