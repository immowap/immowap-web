import type { ReactNode } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProductVisual, type ProductVisualVariant } from "@/components/illustrations/ProductVisual";

interface SolutionPageHeroProps {
  label: string;
  headline: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  visual?: ProductVisualVariant;
  backgroundClassName?: string;
  children?: ReactNode;
}

/** Split hero with product visual — standard for all solution pages */
export function SolutionPageHero({
  label,
  headline,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  visual = "dashboard",
  backgroundClassName = "bg-cream",
  children,
}: SolutionPageHeroProps) {
  return (
    <PageHeader
      layout="split"
      label={label}
      headline={headline}
      primaryHref={primaryHref}
      primaryLabel={primaryLabel}
      secondaryHref={secondaryHref}
      secondaryLabel={secondaryLabel}
      backgroundClassName={backgroundClassName}
      visual={<ProductVisual variant={visual} className="max-w-full" />}
    >
      {children}
    </PageHeader>
  );
}
