import { Icon, type IconName } from "@/components/ui/icons/Icon";
import { animationClasses } from "@/lib/design-system/tokens/animation";
import { radiusClasses } from "@/lib/design-system/tokens/radius";
import { cn } from "@/lib/utils";

interface FeatureInsightCardProps {
  title: string;
  description: string;
  icon?: IconName;
  index?: number;
  className?: string;
}

const DEFAULT_ICONS: IconName[] = [
  "investment",
  "strategy",
  "market-value",
  "cashflow",
  "location",
  "risk",
];

export function FeatureInsightCard({
  title,
  description,
  icon,
  index = 0,
  className,
}: FeatureInsightCardProps) {
  const iconName = icon ?? DEFAULT_ICONS[index % DEFAULT_ICONS.length];

  return (
    <article
      className={cn(
        "group relative flex min-h-[320px] min-w-0 flex-col overflow-hidden border border-warm-gray/30 bg-surface p-8 shadow-[var(--shadow-card)] sm:min-h-[360px]",
        radiusClasses.xl,
        animationClasses.transition,
        animationClasses.hoverLift,
        "hover:border-gold-500/30 hover:shadow-[var(--shadow-card-hover)]",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-brand-secondary/8 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-brand-800/[0.03] to-transparent"
        aria-hidden="true"
      />

      <div className="relative flex min-w-0 flex-1 flex-col">
        <span
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-800/8 text-brand-800",
            animationClasses.transition,
            "group-hover:bg-brand-800 group-hover:text-white",
          )}
        >
          <Icon name={iconName} size={24} />
        </span>
        <h3 className="mt-8 break-words text-h3 text-brand-800 [overflow-wrap:anywhere]">{title}</h3>
        <p className="mt-3 max-w-sm flex-1 break-words text-body text-muted [overflow-wrap:anywhere]">
          {description}
        </p>
        <div className="mt-8 flex items-end gap-1.5" aria-hidden="true">
          {[35, 55, 45, 70, 60, 85].map((h, i) => (
            <div
              key={i}
              className={cn(
                "w-full max-w-[12px] rounded-sm transition-colors duration-300",
                i >= 4 ? "bg-gold-500/70" : "bg-brand-secondary/35 group-hover:bg-brand-secondary/50",
              )}
              style={{ height: `${h * 0.5}px` }}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

interface FeatureInsightGridProps {
  items: readonly { title: string; description: string }[];
  icons?: IconName[];
}

export function FeatureInsightGrid({ items, icons }: FeatureInsightGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 [&>*]:min-w-0">
      {items.map((item, index) => (
        <FeatureInsightCard
          key={item.title}
          title={item.title}
          description={item.description}
          icon={icons?.[index]}
          index={index}
        />
      ))}
    </div>
  );
}
