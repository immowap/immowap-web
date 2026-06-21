import type { Metadata } from "next";
import { IndividuelleImmobilienanalysePage } from "@/components/pages/IndividuelleImmobilienanalysePage";

export const metadata: Metadata = {
  title: "Individuelle Immobilienanalyse | immowap",
  description:
    "Individuelle Immobilienanalyse nach ImmoWertV-Grundsätzen: persönliche Ziele, Finanzierung, Markt und Risiken für fundierte Entscheidungen.",
};

export default function DeIndividuelleImmobilienanalysePage() {
  return <IndividuelleImmobilienanalysePage locale="de" />;
}
