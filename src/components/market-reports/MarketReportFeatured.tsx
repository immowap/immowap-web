import { MarketTrendsFeaturedInsight } from "@/components/market-trends/MarketTrendsInsightCard";

/** @deprecated Use MarketTrendsFeaturedInsight instead */
export interface MarketReportFeaturedProps {
  title: string;
  description: string;
  expandedText: string;
  image: string;
  imageAlt: string;
  actionLabel: string;
  learnMoreLabel?: string;
  readReportLabel?: string;
  closeReportLabel?: string;
}

export function MarketReportFeatured({
  title,
  description,
  expandedText,
  image,
  imageAlt,
  actionLabel,
}: MarketReportFeaturedProps) {
  return (
    <MarketTrendsFeaturedInsight
      title={title}
      description={description}
      body={expandedText}
      image={image}
      imageAlt={imageAlt}
      actionLabel={actionLabel}
    />
  );
}
