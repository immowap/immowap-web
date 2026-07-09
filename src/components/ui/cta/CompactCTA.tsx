import { SecondaryButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface CompactCTAProps {
  headline: string;
  text: string;
  ctaLabel: string;
  ctaHref: string;
}

/** Smaller inline CTA block for mid-page prompts */
export function CompactCTA({ headline, text, ctaLabel, ctaHref }: CompactCTAProps) {
  return (
    <section className="bg-surface">
      <Container className="py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h3 text-brand-800">{headline}</h2>
          <p className="mt-4 text-body text-muted">{text}</p>
          <div className="mt-8">
            <SecondaryButton href={ctaHref}>{ctaLabel}</SecondaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
