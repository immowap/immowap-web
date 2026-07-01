import type { Metadata } from "next";
import { ToolsPage } from "@/components/pages/tools/ToolsPage";

export const metadata: Metadata = {
  title: "PDF reports | Tools & Reports | immowap",
  description:
    "Structured PDF reports for market value, yield, risk and comparison — documented decision support from immowap.",
};

export default function EnToolsPdfReportsPage() {
  return <ToolsPage locale="en" pageKey="pdf-berichte" />;
}
