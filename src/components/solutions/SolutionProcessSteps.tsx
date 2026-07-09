import { Section, SectionHeader } from "@/components/ui/Section";

interface ProcessStep {
  title: string;
  description: string;
}

interface SolutionProcessStepsProps {
  label?: string;
  headline: string;
  steps: readonly ProcessStep[];
}

export function SolutionProcessSteps({
  label,
  headline,
  steps,
}: SolutionProcessStepsProps) {
  const colClass =
    steps.length === 3
      ? "md:grid-cols-3"
      : steps.length === 4
        ? "md:grid-cols-2 lg:grid-cols-4"
        : steps.length === 5
          ? "md:grid-cols-2 lg:grid-cols-5"
          : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <Section variant="muted">
      <SectionHeader label={label} headline={headline} />
      <div className={`grid gap-8 ${colClass}`}>
        {steps.map((step, index) => (
          <div key={step.title} className="relative flex flex-col">
            <span className="text-label mb-4 block text-gold-600">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-h4 mb-3 text-brand-800">{step.title}</h3>
            <p className="text-body-sm text-muted">{step.description}</p>
            {index < steps.length - 1 ? (
              <div
                className="absolute -right-4 top-8 hidden h-px w-8 bg-warm-gray/60 lg:block"
                aria-hidden="true"
              />
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
