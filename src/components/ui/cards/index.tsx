import Link from "next/link";
import type { ReactNode } from "react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/icons/Icon";
import { animationClasses } from "@/lib/design-system/tokens/animation";
import { cn } from "@/lib/utils";

interface InformationCardProps {
  title: string;
  description: string;
  className?: string;
}

export function InformationCard({ title, description, className }: InformationCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardTitle>{title}</CardTitle>
      <CardDescription className="flex-1">{description}</CardDescription>
    </Card>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: IconName;
  href?: string;
  linkLabel?: string;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  href,
  linkLabel,
  className,
}: FeatureCardProps) {
  const content = (
    <Card interactive={Boolean(href)} className={cn("h-full", className)}>
      {icon ? (
        <span className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-secondary/10 text-brand-secondary">
          <Icon name={icon} size={20} />
        </span>
      ) : null}
      <CardTitle>{title}</CardTitle>
      <CardDescription className="flex-1">{description}</CardDescription>
      {href && linkLabel ? (
        <span
          className={cn(
            "text-label mt-6 inline-flex items-center gap-2 text-gold-600",
            animationClasses.transition,
            "group-hover:gap-3",
          )}
        >
          {linkLabel}
          <span aria-hidden="true">→</span>
        </span>
      ) : null}
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className="group block min-w-0 no-underline">
        {content}
      </Link>
    );
  }

  return content;
}

interface KnowledgeCardProps {
  title: string;
  description: string;
  href: string;
  icon?: IconName;
  linkLabel?: string;
  className?: string;
}

export function KnowledgeCard({
  title,
  description,
  href,
  icon = "reports",
  linkLabel,
  className,
}: KnowledgeCardProps) {
  const label = linkLabel ?? "Learn more";

  return (
    <Link href={href} className="group block min-w-0 no-underline">
      <Card interactive className={cn("h-full", className)}>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-600">
          <Icon name={icon} size={20} />
        </span>
        <CardTitle className="text-h4">{title}</CardTitle>
        <CardDescription className="flex-1 text-body-sm">{description}</CardDescription>
        <span
          className={cn(
            "text-label mt-6 inline-flex items-center gap-2 text-gold-600",
            animationClasses.transition,
            "group-hover:gap-3",
          )}
        >
          {label}
          <span aria-hidden="true">→</span>
        </span>
      </Card>
    </Link>
  );
}

interface AnalysisCardProps {
  title: string;
  icon?: IconName;
  className?: string;
}

export function AnalysisCard({ title, icon = "chart", className }: AnalysisCardProps) {
  return (
    <div
      className={cn(
        "flex min-w-0 items-center gap-3 rounded-2xl border border-warm-gray/30 bg-surface px-4 py-3",
        className,
      )}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-secondary/10 text-brand-secondary">
        <Icon name={icon} size={18} />
      </span>
      <span className="min-w-0 break-words text-body-sm font-medium text-brand-800 [overflow-wrap:anywhere]">
        {title}
      </span>
    </div>
  );
}

export function ContactOptionCard({
  title,
  value,
  note,
  icon,
  href,
  className,
}: {
  title: string;
  value: string;
  note?: string;
  icon: ReactNode;
  href?: string;
  className?: string;
}) {
  const inner = (
    <Card interactive={Boolean(href)} className={cn("h-full", className)}>
      <div className="mb-4 shrink-0">{icon}</div>
      <CardTitle className="text-h4">{title}</CardTitle>
      <p className="mt-2 break-words text-body font-medium text-brand-800 [overflow-wrap:anywhere]">
        {value}
      </p>
      {note ? <CardDescription className="mt-2">{note}</CardDescription> : null}
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className="block min-w-0 no-underline">
        {inner}
      </Link>
    );
  }

  return inner;
}

interface ContactCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
  className?: string;
}

export function ContactCard({ title, description, icon, href, className }: ContactCardProps) {
  const inner = (
    <Card interactive={Boolean(href)} className={cn("h-full", className)}>
      {icon ? <div className="mb-4 shrink-0">{icon}</div> : null}
      <CardTitle className="text-h4">{title}</CardTitle>
      <CardDescription className="flex-1">{description}</CardDescription>
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className="block min-w-0 no-underline">
        {inner}
      </Link>
    );
  }

  return inner;
}

interface PricingCardProps {
  title: string;
  label?: string;
  availability?: string;
  audience?: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
}

export function PricingCard({
  title,
  label,
  availability,
  audience,
  description,
  features,
  cta,
  href,
  highlighted = false,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "flex h-full min-w-0 flex-col",
        highlighted &&
          "border-gold-500/35 shadow-[0_12px_40px_rgba(185,150,91,0.12)] ring-1 ring-gold-500/15",
      )}
    >
      {availability ? (
        <p className="text-label mb-4 text-gold-600">{availability}</p>
      ) : null}
      <CardTitle>{title}</CardTitle>
      {audience ? (
        <p className="mt-3 text-body-sm font-medium text-brand-800">{audience}</p>
      ) : null}
      {label ? (
        <p className="mt-3 text-body-sm font-medium tracking-wide text-gold-600">{label}</p>
      ) : null}
      <CardDescription className="mt-4">{description}</CardDescription>
      <ul className="mt-8 flex-1 space-y-3.5">
        {features.map((item) => (
          <li key={item} className="flex min-w-0 items-start gap-3 text-body-sm text-muted">
            <span className="mt-0.5 shrink-0 text-gold-600" aria-hidden="true">
              ✓
            </span>
            <span className="min-w-0 break-words [overflow-wrap:anywhere]">{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-10">
        {highlighted ? (
          <PrimaryButton href={href} className="w-full max-w-full sm:w-auto">
            {cta}
          </PrimaryButton>
        ) : (
          <SecondaryButton href={href} className="w-full max-w-full sm:w-auto">
            {cta}
          </SecondaryButton>
        )}
      </div>
    </Card>
  );
}

export {
  InformationCard as InfoCard,
  FeatureCard as LinkCard,
};
