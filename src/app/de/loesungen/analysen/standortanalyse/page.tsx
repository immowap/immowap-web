import type { Metadata } from "next";
import { StandortanalysePage } from "@/components/pages/StandortanalysePage";

export const metadata: Metadata = {
  title: "Standortanalyse für Immobilien | immowap",
  description:
    "Fundierte Standortanalyse für Immobilien: Makrolage, Mikrolage, Infrastruktur und Entwicklungspotenziale nachvollziehbar einordnen.",
};

export default function DeStandortanalysePage() {
  return <StandortanalysePage locale="de" />;
}
