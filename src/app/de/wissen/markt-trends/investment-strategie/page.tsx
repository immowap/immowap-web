import { MarketTrendsCategoryPage } from "@/components/pages/MarketTrendsCategoryPage";

export const metadata = {
  title: "Investment & Strategie | immowap",
  description: "Immobilienstrategien für unterschiedliche Anlageziele und Marktphasen.",
};

export default function DeInvestmentStrategiePage() {
  return <MarketTrendsCategoryPage locale="de" categoryId="investment" />;
}
