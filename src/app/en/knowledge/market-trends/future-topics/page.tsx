import { MarketTrendsCategoryPage } from "@/components/pages/MarketTrendsCategoryPage";

export const metadata = {
  title: "Future Topics | immowap",
  description: "Perspectives for tomorrow's property market – assessed for the long term.",
};

export default function EnFutureTopicsPage() {
  return <MarketTrendsCategoryPage locale="en" categoryId="zukunft" />;
}
