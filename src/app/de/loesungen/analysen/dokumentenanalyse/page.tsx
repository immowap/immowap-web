import type { Metadata } from "next";
import { DokumentenanalysePage } from "@/components/pages/DokumentenanalysePage";

export const metadata: Metadata = {
  title: "Dokumentenanalyse für Immobilien | immowap",
  description:
    "Strukturierte Dokumentenanalyse für Immobilien: Grundbuch, Wirtschaftsplan, Protokolle und Energieausweis nachvollziehbar einordnen.",
};

export default function DeDokumentenanalysePage() {
  return <DokumentenanalysePage locale="de" />;
}
