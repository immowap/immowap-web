import type { Metadata } from "next";
import { ToolsPage } from "@/components/pages/tools/ToolsPage";

export const metadata: Metadata = {
  title: "Projektmanagement | Tools & Reports | immowap",
  description:
    "Projektmanagement für Sanierung, Fix & Flip und Modernisierung: Aufgaben, Budget, Timeline, Dokumente und Meilensteine mit immowap.",
};

export default function DeToolsProjektmanagementPage() {
  return <ToolsPage locale="de" pageKey="projektmanagement" />;
}
