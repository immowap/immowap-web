import { MarketTrendsCategoryPage } from "@/components/pages/MarketTrendsCategoryPage";

export const metadata = {
  title: "Data & Insights | immowap",
  description: "Property market metrics and data explained clearly and in context.",
};

export default function EnDataInsightsPage() {
  return <MarketTrendsCategoryPage locale="en" categoryId="daten" />;
}
