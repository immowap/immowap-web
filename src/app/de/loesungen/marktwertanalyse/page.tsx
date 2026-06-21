import type { Metadata } from "next";
import { MarktwertanalysePage } from "@/components/pages/MarktwertanalysePage";

export const metadata: Metadata = {
  title: "Marktwertanalyse für Immobilien | immowap",
  description:
    "Marktwertanalyse für Immobilien in Deutschland: Lage, Zustand, Vergleichsdaten und Bewertungsverfahren nach ImmoWertV – für fundierte Kauf- und Verkaufsentscheidungen.",
};

export default function DeMarktwertanalysePage() {
  return <MarktwertanalysePage locale="de" />;
}
