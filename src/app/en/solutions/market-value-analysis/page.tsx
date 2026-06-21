import type { Metadata } from "next";
import { MarktwertanalysePage } from "@/components/pages/MarktwertanalysePage";

export const metadata: Metadata = {
  title: "Property Market Value Analysis | immowap",
  description:
    "Property market value analysis in Germany: location, condition, comparable data and valuation methods under ImmoWertV – for well-founded buying and selling decisions.",
};

export default function EnMarketValueAnalysisPage() {
  return <MarktwertanalysePage locale="en" />;
}
