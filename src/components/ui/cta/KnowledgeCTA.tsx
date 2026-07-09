import { SecondaryButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface KnowledgeCTAProps {
  headline: string;
  text: string;
  ctaLabel: string;
  ctaHref: string;
}

/** Editorial knowledge prompt — used on knowledge hub pages */
export function KnowledgeCTA({ headline, text, ctaLabel, ctaHref }: KnowledgeCTAProps) {
  return (
    <section className="bg-cream">
      <Container className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2 text-brand-800">{headline}</h2>
          <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
          <p className="mt-8 text-body-lg text-muted">{text}</p>
          <div className="mt-10">
            <SecondaryButton href={ctaHref}>{ctaLabel}</SecondaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
