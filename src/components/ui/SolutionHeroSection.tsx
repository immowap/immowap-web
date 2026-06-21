import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface SolutionHeroSectionProps {
  backgroundClassName?: string;
  label: string;
  headline: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  imageSrc: string;
  imageAlt: string;
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
  imageSrc,
  imageAlt,
  imageOverlayClassName = "from-[#0F3D2E]/10",
  children,
}: SolutionHeroSectionProps) {
  return (
    <section className={cn("overflow-hidden", backgroundClassName)}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-12 py-20 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-0">
          <div className="max-w-3xl lg:py-28">
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
          <div className="flex w-full justify-center lg:justify-end">
            <div className="relative aspect-[4/5] w-full max-w-[430px] overflow-hidden rounded-[32px] shadow-xl lg:max-w-[473px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 473px"
              />
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 bg-gradient-to-bl to-transparent",
                  imageOverlayClassName,
                )}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
