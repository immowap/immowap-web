import type { Metadata } from "next";
import { DokumentenanalysePage } from "@/components/pages/DokumentenanalysePage";

export const metadata: Metadata = {
  title: "Real Estate Document Analysis | immowap",
  description:
    "Structured real estate document analysis: land register, business plan, meeting minutes and energy certificate reviewed objectively.",
};

export default function EnDocumentAnalysisPage() {
  return <DokumentenanalysePage locale="en" />;
}
