import type { Metadata } from "next";
import { ToolsPage } from "@/components/pages/tools/ToolsPage";

export const metadata: Metadata = {
  title: "Comparison analyses | Tools & Reports | immowap",
  description:
    "Property comparison analyses: assets, locations, yield and risks side by side — for well-founded purchase decisions.",
};

export default function EnToolsComparisonAnalysesPage() {
  return <ToolsPage locale="en" pageKey="vergleichsanalysen" />;
}
