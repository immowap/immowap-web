import { AnalyticsCardHeader } from "@/components/illustrations/AnalyticsCardHeader";
import { cn } from "@/lib/utils";
import type { IconName } from "@/components/ui/icons/Icon";

export const marketTrendsInsightGridClass = "grid gap-8 md:grid-cols-2";

export const marketTrendsCardClass =
  "group flex flex-col overflow-hidden rounded-[24px] border border-brand-800/10 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-[var(--shadow-card-hover)]";

export interface MarketTrendsInsightCardProps {
  title: string;
  description: string;
  body: string;
  topics?: string[];
  /** @deprecated Photography replaced by analytics graphics */
  image?: string;
  imageAlt?: string;
  actionLabel: string;
  analyticsIcon?: IconName;
  analyticsMetric?: string;
}

export function MarketTrendsInsightCard({
  title,
  description,
  body,
  topics,
  actionLabel,
  analyticsIcon = "chart",
  analyticsMetric,
}: MarketTrendsInsightCardProps) {
  return (
    <article className={marketTrendsCardClass}>
      <AnalyticsCardHeader icon={analyticsIcon} metric={analyticsMetric ?? "+2,4%"} />

      <div className="flex flex-col gap-5 p-8 md:p-10">
        <h3 className="text-h3 break-words text-brand-800 [overflow-wrap:anywhere] hyphens-auto">
          {title}
        </h3>
        <p className="break-words text-base leading-[1.8] text-muted [overflow-wrap:anywhere] hyphens-auto">
          {description}
        </p>
        <p className="break-words text-base leading-[1.8] text-muted [overflow-wrap:anywhere] hyphens-auto">
          {body}
        </p>
        {topics && topics.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <li
                key={topic}
                className="rounded-full bg-brand-800/[0.06] px-3 py-1 text-sm text-brand-800"
              >
                {topic}
              </li>
            ))}
          </ul>
        ) : null}
        <p className="text-label mt-2 inline-flex items-center gap-2 text-brand-800/55 transition-colors duration-300 group-hover:text-gold-600">
          {actionLabel}
        </p>
      </div>
    </article>
  );
}

export interface MarketTrendsFeaturedInsightProps {
  title: string;
  description: string;
  body: string;
  /** @deprecated Photography replaced by analytics graphics */
  image?: string;
  imageAlt?: string;
  actionLabel: string;
  className?: string;
  analyticsIcon?: IconName;
  analyticsMetric?: string;
}

export function MarketTrendsFeaturedInsight({
  title,
  description,
  body,
  actionLabel,
  className,
  analyticsIcon = "market-value",
  analyticsMetric = "+3,1%",
}: MarketTrendsFeaturedInsightProps) {
  return (
    <article className={cn(marketTrendsCardClass, className)}>
      <div className="grid lg:grid-cols-2">
        <AnalyticsCardHeader
          icon={analyticsIcon}
          metric={analyticsMetric}
          label="Marktentwicklung"
          className="min-h-[280px] lg:min-h-[420px]"
        />

        <div className="flex flex-col gap-6 p-8 md:p-10 lg:p-12">
          <h3 className="text-h2 break-words text-brand-800 [overflow-wrap:anywhere] hyphens-auto">
            {title}
          </h3>
          <p className="break-words text-lg leading-[1.8] text-muted [overflow-wrap:anywhere] hyphens-auto">
            {description}
          </p>
          <p className="break-words text-base leading-[1.8] text-muted [overflow-wrap:anywhere] hyphens-auto">
            {body}
          </p>
          <p className="text-label mt-auto inline-flex items-center gap-2 text-brand-800/55 transition-colors duration-300 group-hover:text-gold-600">
            {actionLabel}
          </p>
        </div>
      </div>
    </article>
  );
}
