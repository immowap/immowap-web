import { Section, SectionHeader } from "@/components/ui/Section";

interface SolutionQuestionGridProps {
  label?: string;
  headline: string;
  questions: readonly string[];
}

export function SolutionQuestionGrid({
  label,
  headline,
  questions,
}: SolutionQuestionGridProps) {
  return (
    <Section>
      <SectionHeader label={label} headline={headline} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {questions.map((question) => (
          <div
            key={question}
            className="card-premium flex min-h-[120px] items-center p-6 md:p-8"
          >
            <p className="text-h4 text-brand-800">{question}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
