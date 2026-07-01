import type { Metadata } from "next";
import { ToolsPage } from "@/components/pages/tools/ToolsPage";

export const metadata: Metadata = {
  title: "PDF-Berichte | Tools & Reports | immowap",
  description:
    "Strukturierte PDF-Berichte für Marktwert, Rendite, Risiko und Vergleich — dokumentierte Entscheidungsgrundlagen von immowap.",
};

export default function DeToolsPdfBerichtePage() {
  return <ToolsPage locale="de" pageKey="pdf-berichte" />;
}
