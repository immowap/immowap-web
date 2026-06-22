import { MarketTrendsCategoryPage } from "@/components/pages/MarketTrendsCategoryPage";

export const metadata = {
  title: "Regions & Locations | immowap",
  description: "Regional property markets compared – from metropolises to growth regions.",
};

export default function EnRegionsLocationsPage() {
  return <MarketTrendsCategoryPage locale="en" categoryId="regionen" />;
}
