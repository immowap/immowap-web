import type { Metadata } from "next";
import { ToolsPage } from "@/components/pages/tools/ToolsPage";

export const metadata: Metadata = {
  title: "Dashboard | Tools & Reports | immowap",
  description:
    "Ihr immowap Dashboard: Projekte, Analysen, Dokumente und PDF-Berichte an einem Ort — der Startpunkt für strukturierte Immobilienentscheidungen.",
};

export default function DeToolsDashboardPage() {
  return <ToolsPage locale="de" pageKey="dashboard" />;
}
