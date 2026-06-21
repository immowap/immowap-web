import type { Metadata } from "next";
import { RisikoanalysePage } from "@/components/pages/RisikoanalysePage";

export const metadata: Metadata = {
  title: "Risikoanalyse für Immobilien | immowap",
  description:
    "Strukturierte Risikoanalyse für Immobilien: Markt-, Finanzierungs-, Objekt- und Vermietungsrisiken frühzeitig erkennen und fundierte Entscheidungen treffen.",
};

export default function DeRisikoanalysePage() {
  return <RisikoanalysePage locale="de" />;
}
