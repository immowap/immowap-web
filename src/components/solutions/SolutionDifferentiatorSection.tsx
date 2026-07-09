import { Container } from "@/components/ui/Container";

interface SolutionDifferentiatorSectionProps {
  label: string;
  headline: string;
  text: string;
  textSecondary?: string;
  listLabel: string;
  items: readonly string[];
}

export function SolutionDifferentiatorSection({
  label,
  headline,
  text,
  textSecondary,
  listLabel,
  items,
}: SolutionDifferentiatorSectionProps) {
  return (
    <section className="bg-brand-800 text-white">
      <Container className="py-24 md:py-32 lg:py-36">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-label mb-6 block text-gold-500">{label}</p>
            <h2 className="text-h2 text-white">{headline}</h2>
            <div className="gold-rule mt-8" aria-hidden="true" />
            <p className="mt-8 text-body-lg text-white/80">{text}</p>
            {textSecondary ? (
              <p className="mt-6 text-body-lg text-white/65">{textSecondary}</p>
            ) : null}
          </div>
          <div className="lg:pt-20">
            <p className="text-label mb-10 block text-gold-500">{listLabel}</p>
            <ul className="space-y-7" role="list">
              {items.map((item, i) => (
                <li key={item} className="flex items-baseline gap-5">
                  <span className="text-label shrink-0 text-gold-500/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl font-light text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
