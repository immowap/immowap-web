import type { Metadata } from "next";
import { ToolsPage } from "@/components/pages/tools/ToolsPage";

export const metadata: Metadata = {
  title: "KI-Assistent | Tools & Reports | immowap",
  description:
    "KI-gestützter Immobilien-Assistent für Objektfragen, Dokumentenerklärung, Risikoindikatoren und Bewertungsunterstützung — strukturiert und nachvollziehbar.",
};

export default function DeToolsKiAssistentPage() {
  return <ToolsPage locale="de" pageKey="ki-assistent" />;
}
