import type { ReactNode } from "react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { Container } from "@/components/ui/Container";
import {
  pageHeroGridClassName,
  pageHeroMediaClassName,
  pageHeroTextClassName,
} from "@/components/ui/HeroImage";
import { PageImage } from "@/components/ui/PageImage";
import { cn } from "@/lib/utils";

type PageHeaderLayout = "split" | "text" | "centered";

interface PageHeaderProps {
  label?: string;
  headline: string;
  subheadline?: string;
  imageSrc?: string;
  imageAlt?: string;
  visual?: ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  children?: ReactNode;
  layout?: PageHeaderLayout;
  backgroundClassName?: string;
  className?: string;
}

function PageHeaderText({
  label,
  headline,
  subheadline,
  children,
  showPrimary,
  showSecondary,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  centered = false,
}: {
  label?: string;
  headline: string;
  subheadline?: string;
  children?: ReactNode;
  showPrimary: boolean;
  showSecondary: boolean;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  centered?: boolean;
}) {
  return (
    <>
      {label ? (
        <p className={cn("text-label mb-6 block text-gold-600", centered && "mx-auto")}>
          {label}
        </p>
      ) : null}
      <h1
        className={cn(
          "text-h1 whitespace-pre-line text-brand-800",
          centered && "mx-auto",
        )}
      >
        {headline}
      </h1>
      <div
        className={cn("gold-rule mt-8", centered && "mx-auto")}
        aria-hidden="true"
      />
      {subheadline ? (
        <p
          className={cn(
            "mt-8 max-w-2xl text-body-lg text-muted",
            centered && "mx-auto",
          )}
        >
          {subheadline}
        </p>
      ) : null}
      {children}
      {showPrimary || showSecondary ? (
        <div
          className={cn(
            "mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center",
            centered ? "items-center justify-center" : "items-stretch",
          )}
        >
          {showPrimary ? (
            <PrimaryButton href={primaryHref!} className="w-full sm:w-auto">
              {primaryLabel}
            </PrimaryButton>
          ) : null}
          {showSecondary ? (
            <SecondaryButton href={secondaryHref!} className="w-full sm:w-auto">
              {secondaryLabel}
            </SecondaryButton>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

/**
 * Unified page header for all top-level pages.
 * Split: text left, image or visual right (desktop) — stacked on mobile.
 * Text: label + headline + copy without media.
 * Centered: centered text block with optional CTAs.
 */
export function PageHeader({
  label,
  headline,
  subheadline,
  imageSrc,
  imageAlt,
  visual,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  children,
  layout,
  backgroundClassName = "bg-cream",
  className,
}: PageHeaderProps) {
  const showPrimary = Boolean(primaryHref && primaryLabel);
  const showSecondary = Boolean(secondaryHref && secondaryLabel);
  const hasMedia = Boolean(visual || (imageSrc && imageAlt));
  const resolvedLayout: PageHeaderLayout =
    layout ?? (hasMedia ? "split" : "text");

  const textProps = {
    label,
    headline,
    subheadline,
    children,
    showPrimary,
    showSecondary,
    primaryHref,
    primaryLabel,
    secondaryHref,
    secondaryLabel,
  };

  if (resolvedLayout === "centered") {
    return (
      <section className={cn("overflow-hidden", backgroundClassName, className)}>
        <Container variant="content" className="py-20 text-center md:py-28 lg:py-32">
          <PageHeaderText {...textProps} centered />
        </Container>
      </section>
    );
  }

  if (resolvedLayout === "split" && hasMedia) {
    return (
      <section className={cn("overflow-hidden", backgroundClassName, className)}>
        <Container>
          <div className={pageHeroGridClassName}>
            <div className={pageHeroTextClassName}>
              <PageHeaderText {...textProps} />
            </div>
            <div className={pageHeroMediaClassName}>
              {visual ??
                (imageSrc && imageAlt ? (
                  <PageImage src={imageSrc} alt={imageAlt} />
                ) : null)}
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className={cn("overflow-hidden", backgroundClassName, className)}>
      <Container>
        <div className={cn(pageHeroTextClassName, "py-20 lg:py-28")}>
          <PageHeaderText {...textProps} />
        </div>
      </Container>
    </section>
  );
}
