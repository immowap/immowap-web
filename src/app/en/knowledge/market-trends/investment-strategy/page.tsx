import { MarketTrendsCategoryPage } from "@/components/pages/MarketTrendsCategoryPage";

export const metadata = {
  title: "Investment & Strategy | immowap",
  description: "Property strategies for different investment goals and market phases.",
};

export default function EnInvestmentStrategyPage() {
  return <MarketTrendsCategoryPage locale="en" categoryId="investment" />;
}
