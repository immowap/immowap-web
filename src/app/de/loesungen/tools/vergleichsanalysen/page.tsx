import type { Metadata } from "next";
import { ToolsPage } from "@/components/pages/tools/ToolsPage";

export const metadata: Metadata = {
  title: "Vergleichsanalysen | Tools & Reports | immowap",
  description:
    "Immobilien Vergleichsanalysen: Objekte, Standorte, Rendite und Risiken strukturiert nebeneinander — für fundierte Kaufentscheidungen.",
};

export default function DeToolsVergleichsanalysenPage() {
  return <ToolsPage locale="de" pageKey="vergleichsanalysen" />;
}
