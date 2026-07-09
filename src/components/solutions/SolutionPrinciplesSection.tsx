import { Section, SectionHeader } from "@/components/ui/Section";

interface PrincipleItem {
  number: string;
  title: string;
  description: string;
}

interface SolutionPrinciplesSectionProps {
  headline: string;
  items: readonly PrincipleItem[];
}

export function SolutionPrinciplesSection({
  headline,
  items,
}: SolutionPrinciplesSectionProps) {
  return (
    <Section>
      <SectionHeader headline={headline} />
      <div className="grid gap-8 md:grid-cols-3">
        {items.map((card) => (
          <div key={card.title} className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <span className="text-label text-gold-500/60">{card.number}</span>
              <div className="h-px flex-1 bg-warm-gray/50" aria-hidden="true" />
            </div>
            <h3 className="text-h3 text-brand-800">{card.title}</h3>
            <p className="text-body text-muted">{card.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
