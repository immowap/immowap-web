import type { Metadata } from "next";
import { ToolsPage } from "@/components/pages/tools/ToolsPage";

export const metadata: Metadata = {
  title: "Dokumenten-Upload | Tools & Reports | immowap",
  description:
    "Sicherer Dokumenten-Upload für Exposé, Grundbuch, Energieausweis, Mietvertrag und mehr — Grundlage für dokumentenbasierte Immobilienanalysen.",
};

export default function DeToolsDokumentenUploadPage() {
  return <ToolsPage locale="de" pageKey="dokumenten-upload" />;
}
