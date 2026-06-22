import { MarketTrendsCategoryPage } from "@/components/pages/MarketTrendsCategoryPage";

export const metadata = {
  title: "Regionen & Standorte | immowap",
  description:
    "Regionale Immobilienmärkte im Vergleich – von Metropolen bis Wachstumsregionen.",
};

export default function DeRegionenStandortePage() {
  return <MarketTrendsCategoryPage locale="de" categoryId="regionen" />;
}
