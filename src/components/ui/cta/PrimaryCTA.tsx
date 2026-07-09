import { PrimaryButton, SecondaryButtonOnDark } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageBottomSpacer } from "@/components/ui/PageBottomSpacer";
import { layoutSpacing } from "@/lib/design-system/tokens/spacing";
import { cn } from "@/lib/utils";

interface PrimaryCTAProps {
  headline: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

/** Full-width dark closing CTA for top-level pages */
export function PrimaryCTA({
  headline,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: PrimaryCTAProps) {
  return (
    <>
      <section className="bg-brand-800 text-white">
        <Container variant="content" className={cn(layoutSpacing.sectionYCTA, "text-center")}>
          <h2 className="text-h2 text-white">{headline}</h2>
          <p className="mt-6 whitespace-pre-line text-body-lg text-white/85">{text}</p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <PrimaryButton href={primaryHref} className="w-full sm:w-auto">
              {primaryLabel}
            </PrimaryButton>
            <SecondaryButtonOnDark href={secondaryHref} className="w-full sm:w-auto">
              {secondaryLabel}
            </SecondaryButtonOnDark>
          </div>
        </Container>
      </section>
      <PageBottomSpacer />
    </>
  );
}

/** @deprecated Use PrimaryCTA */
export const CTASection = PrimaryCTA;
