import { Button } from "@/components/ui/Button";

interface CTASectionProps {
  headline: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export function CTASection({
  headline,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <>
      <section className="bg-brand-800 px-6 pt-[140px] pb-[140px] text-white md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2 text-white">{headline}</h2>
          <p className="mt-6 whitespace-pre-line text-lg leading-[1.8] text-white/85">
            {text}
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Button href={primaryHref} className="w-full sm:w-auto">
              {primaryLabel}
            </Button>
            <Button
              href={secondaryHref}
              variant="secondary"
              className="w-full border-white/30 text-white hover:border-gold-500/60 hover:bg-white/10 sm:w-auto"
            >
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </section>
      <div className="min-h-[100px] bg-cream" aria-hidden="true" />
    </>
  );
}
