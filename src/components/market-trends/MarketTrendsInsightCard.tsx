import Image from "next/image";
import { cn } from "@/lib/utils";

export const marketTrendsInsightGridClass = "grid gap-8 md:grid-cols-2";

export const marketTrendsCardClass =
  "group flex flex-col overflow-hidden rounded-[24px] border border-[#0F3D2E]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#B9965B] hover:shadow-[0_20px_50px_rgba(15,61,46,0.08)]";

export interface MarketTrendsInsightCardProps {
  title: string;
  description: string;
  body: string;
  topics?: string[];
  image: string;
  imageAlt: string;
  actionLabel: string;
}

export function MarketTrendsInsightCard({
  title,
  description,
  body,
  topics,
  image,
  imageAlt,
  actionLabel,
}: MarketTrendsInsightCardProps) {
  return (
    <article className={marketTrendsCardClass}>
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

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
        <p className="text-label mt-2 inline-flex items-center gap-2 text-[#0F3D2E]/55 transition-colors duration-300 group-hover:text-[#B9965B]">
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
  image: string;
  imageAlt: string;
  actionLabel: string;
  className?: string;
}

export function MarketTrendsFeaturedInsight({
  title,
  description,
  body,
  image,
  imageAlt,
  actionLabel,
  className,
}: MarketTrendsFeaturedInsightProps) {
  return (
    <article className={cn(marketTrendsCardClass, className)}>
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[280px] lg:min-h-[420px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

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
          <p className="text-label mt-auto inline-flex items-center gap-2 text-[#0F3D2E]/55 transition-colors duration-300 group-hover:text-[#B9965B]">
            {actionLabel}
          </p>
        </div>
      </div>
    </article>
  );
}
