import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/icons/Icon";
import { cn } from "@/lib/utils";

type EmptyStateVariant = "no-results" | "coming-soon" | "no-data" | "upload-required";

interface EmptyStateProps {
  variant?: EmptyStateVariant;
  title: string;
  description?: string;
  icon?: IconName;
  action?: ReactNode;
  className?: string;
}

const defaultIcons: Record<EmptyStateVariant, IconName> = {
  "no-results": "search",
  "coming-soon": "strategy",
  "no-data": "chart",
  "upload-required": "documents",
};

export function EmptyState({
  variant = "no-data",
  title,
  description,
  icon,
  action,
  className,
}: EmptyStateProps) {
  const iconName = icon ?? defaultIcons[variant];

  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-[28px] border border-dashed border-warm-gray/50 bg-surface px-8 py-16 text-center",
        className,
      )}
      role="status"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-800/6 text-brand-800">
        <Icon name={iconName} size={26} />
      </span>
      <h3 className="mt-6 text-h4 text-brand-800">{title}</h3>
      {description ? <p className="mt-3 max-w-md text-body-sm text-muted">{description}</p> : null}
      {action ? <div className="mt-8">{action}</div> : null}
    </div>
  );
}
