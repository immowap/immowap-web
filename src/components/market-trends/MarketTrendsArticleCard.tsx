import { MarketTrendsInsightCard } from "@/components/market-trends/MarketTrendsInsightCard";

export interface MarketTrendsArticleCardProps {
  title: string;
  description: string;
  expandedText: string;
  topics?: string[];
  image: string;
  imageAlt: string;
  actionLabel: string;
}

export function MarketTrendsArticleCard({
  title,
  description,
  expandedText,
  topics,
  image,
  imageAlt,
  actionLabel,
}: MarketTrendsArticleCardProps) {
  return (
    <MarketTrendsInsightCard
      title={title}
      description={description}
      body={expandedText}
      topics={topics}
      image={image}
      imageAlt={imageAlt}
      actionLabel={actionLabel}
    />
  );
}
