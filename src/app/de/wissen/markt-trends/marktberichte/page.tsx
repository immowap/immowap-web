import { MarketReportsPage } from "@/components/pages/MarketReportsPage";

export const metadata = {
  title: "Marktberichte | immowap",
  description:
    "Marktentwicklungen und langfristige Analysen für den deutschen und europäischen Immobilienmarkt.",
};

export default function DeMarketReportsPage() {
  return <MarketReportsPage locale="de" />;
}
