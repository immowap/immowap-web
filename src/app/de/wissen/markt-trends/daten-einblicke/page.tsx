import { MarketTrendsCategoryPage } from "@/components/pages/MarketTrendsCategoryPage";

export const metadata = {
  title: "Daten & Einblicke | immowap",
  description: "Marktdaten und Kennzahlen verständlich eingeordnet für den Immobilienmarkt.",
};

export default function DeDatenEinblickePage() {
  return <MarketTrendsCategoryPage locale="de" categoryId="daten" />;
}
