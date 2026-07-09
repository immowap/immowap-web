import { cn } from "@/lib/utils";
import { containerClasses } from "@/lib/design-system/tokens/containers";
import { layoutSpacing } from "@/lib/design-system/tokens/spacing";
import { typographyClasses } from "@/lib/design-system/tokens/typography";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "dark" | "muted";
}

const variantStyles = {
  default: "bg-cream",
  dark: "bg-brand-800 text-white",
  muted: "bg-surface",
};

export function Section({
  children,
  className,
  id,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(layoutSpacing.sectionY, variantStyles[variant], className)}
    >
      <div className={containerClasses.page}>{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  headline?: string;
  description?: string;
  className?: string;
  dark?: boolean;
}

export function SectionHeader({
  label,
  headline,
  description,
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={cn(layoutSpacing.sectionHeaderMb, className)}>
      {label ? (
        <p
          className={cn(
            typographyClasses.label,
            "mb-4",
            dark ? "text-gold-500" : "text-gold-600",
          )}
        >
          {label}
        </p>
      ) : null}
      {headline ? (
        <h2
          className={cn(
            typographyClasses.h2,
            "max-w-3xl",
            dark ? "text-white" : "text-brand-800",
          )}
        >
          {headline}
        </h2>
      ) : null}
      {description ? (
        <p
          className={cn(
            "mt-6 max-w-2xl text-body-lg",
            dark ? "text-white/80" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
