import type { Metadata } from "next";
import { ToolsPage } from "@/components/pages/tools/ToolsPage";

export const metadata: Metadata = {
  title: "Portfolioübersicht | Tools & Reports | immowap",
  description:
    "Portfolioübersicht für Immobilieninvestoren: Gesamtwert, Mieteinnahmen, Cashflow, Rendite und Risikoverteilung im Überblick.",
};

export default function DeToolsPortfolioPage() {
  return <ToolsPage locale="de" pageKey="portfoliouebersicht" />;
}
