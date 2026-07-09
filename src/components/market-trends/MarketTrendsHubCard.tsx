import Link from "next/link";
import { AnalyticsCardHeader } from "@/components/illustrations/AnalyticsCardHeader";
import type { IconName } from "@/components/ui/icons/Icon";

interface MarketTrendsHubCardProps {
  href: string;
  title: string;
  description: string;
  /** @deprecated Replaced by analytics graphics */
  image?: string;
  imageAlt?: string;
  linkLabel: string;
  analyticsIcon?: IconName;
}

export function MarketTrendsHubCard({
  href,
  title,
  description,
  linkLabel,
  analyticsIcon = "chart",
}: MarketTrendsHubCardProps) {
  return (
    <Link href={href} className="group block h-full min-w-0 no-underline">
      <article className="card-premium card-premium--interactive flex h-full flex-col overflow-hidden border-gold-500/20 p-0 transition-all duration-300">
        <AnalyticsCardHeader icon={analyticsIcon} className="aspect-[16/9] min-h-[180px]" />
        <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
          <h2 className="text-h3 break-words text-brand-800 transition-colors duration-300 group-hover:text-brand-600 [overflow-wrap:anywhere] hyphens-auto">
            {title}
          </h2>
          <p className="flex-1 break-words text-base leading-[1.8] text-muted [overflow-wrap:anywhere] hyphens-auto">
            {description}
          </p>
          <span className="text-label mt-auto inline-flex items-center gap-2 text-gold-600 transition-all duration-300 group-hover:gap-3">
            {linkLabel}
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </article>
    </Link>
  );
}
