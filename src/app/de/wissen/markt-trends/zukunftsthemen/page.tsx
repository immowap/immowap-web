import { MarketTrendsCategoryPage } from "@/components/pages/MarketTrendsCategoryPage";

export const metadata = {
  title: "Zukunftsthemen | immowap",
  description: "Perspektiven für den Immobilienmarkt von morgen – langfristig eingeordnet.",
};

export default function DeZukunftsthemenPage() {
  return <MarketTrendsCategoryPage locale="de" categoryId="zukunft" />;
}
