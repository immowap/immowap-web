import Image from "next/image";
import type { ReactNode } from "react";
import { Button, SecondaryButtonOnDark } from "@/components/ui/Button";
import {
  HeroImage,
  pageHeroGridClassName,
  pageHeroMediaClassName,
  pageHeroTextClassName,
} from "@/components/ui/HeroImage";
import {
  ProductVisual,
  type ProductVisualVariant,
} from "@/components/illustrations/ProductVisual";
import { cn } from "@/lib/utils";

export interface SolutionHeroSectionProps {
  backgroundClassName?: string;
  label: string;
  headline: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  /** Product illustration variant — preferred over photography */
  visual?: ProductVisualVariant;
  /** @deprecated Use `visual` instead. Kept for editorial pages only. */
  imageSrc?: string;
  imageAlt?: string;
  imageOverlayClassName?: string;
  children?: ReactNode;
}

export function SolutionHeroSection({
  backgroundClassName = "bg-cream",
  label,
  headline,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  visual = "dashboard",
  children,
}: SolutionHeroSectionProps) {
  return (
    <section className={cn("overflow-hidden", backgroundClassName)}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className={pageHeroGridClassName}>
          <div className={pageHeroTextClassName}>
            <p className="text-label mb-6 block text-gold-600">{label}</p>
            <h1 className="text-h1 text-brand-800">{headline}</h1>
            <div className="gold-rule mt-8" aria-hidden="true" />
            {children}
            <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Button href={primaryHref}>{primaryLabel}</Button>
              {secondaryHref && secondaryLabel ? (
                <Button href={secondaryHref} variant="secondary">
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          </div>
          <div className={pageHeroMediaClassName}>
            <ProductVisual variant={visual} />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Hero variant for editorial/knowledge hub pages with side-by-side photography */
export function EditorialHeroSection({
  backgroundClassName = "bg-cream",
  label,
  headline,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  imageSrc,
  imageAlt,
  children,
}: SolutionHeroSectionProps & { imageSrc: string; imageAlt: string }) {
  return (
    <section className={cn("overflow-hidden", backgroundClassName)}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className={pageHeroGridClassName}>
          <div className={pageHeroTextClassName}>
            <p className="text-label mb-6 block text-gold-600">{label}</p>
            <h1 className="text-h1 text-brand-800">{headline}</h1>
            <div className="gold-rule mt-8" aria-hidden="true" />
            {children}
            <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Button href={primaryHref}>{primaryLabel}</Button>
              {secondaryHref && secondaryLabel ? (
                <Button href={secondaryHref} variant="secondary">
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          </div>
          <div className={pageHeroMediaClassName}>
            <HeroImage src={imageSrc} alt={imageAlt} />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Full-bleed hero for knowledge articles — editorial only */
export function ArticleHeroSection({
  label,
  headline,
  subheadline,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  imageSrc,
  imageAlt,
}: {
  label: string;
  headline: string;
  subheadline?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <section className="relative min-h-[420px] w-full overflow-hidden md:min-h-[480px]">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-r from-brand-800/85 from-0% via-brand-800/50 via-[50%] to-brand-800/20 to-[85%]"
        aria-hidden="true"
      />
      <div className="relative z-[2] mx-auto flex min-h-[420px] max-w-7xl items-center px-6 py-20 md:min-h-[480px] md:px-8 md:py-24">
        <div className="max-w-3xl">
          <p className="text-label mb-6 text-gold-500">{label}</p>
          <h1 className="text-h1 text-white">{headline}</h1>
          {subheadline ? (
            <p className="mt-6 max-w-2xl text-lg leading-[1.8] text-white/85">
              {subheadline}
            </p>
          ) : null}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href={primaryHref}>{primaryLabel}</Button>
            {secondaryHref && secondaryLabel ? (
              <SecondaryButtonOnDark href={secondaryHref}>
                {secondaryLabel}
              </SecondaryButtonOnDark>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
