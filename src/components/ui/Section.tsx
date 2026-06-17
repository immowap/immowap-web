import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "dark" | "muted";
}

const variantStyles = {
  default: "bg-cream",
  dark: "bg-brand-800 text-white",
  muted: "bg-white",
};

export function Section({
  children,
  className,
  id,
  variant = "default",
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", variantStyles[variant], className)}>
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">{children}</div>
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
    <div className={cn("mb-12 md:mb-16", className)}>
      {label && (
        <p
          className={cn(
            "text-label mb-4",
            dark ? "text-gold-500" : "text-gold-600",
          )}
        >
          {label}
        </p>
      )}
      {headline && (
        <h2
          className={cn(
            "text-h2 max-w-3xl",
            dark ? "text-white" : "text-brand-800",
          )}
        >
          {headline}
        </h2>
      )}
      {description && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-lg leading-[1.8]",
            dark ? "text-white/80" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
