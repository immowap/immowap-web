import type { Metadata } from "next";
import { RisikoanalysePage } from "@/components/pages/RisikoanalysePage";

export const metadata: Metadata = {
  title: "Real Estate Risk Analysis | immowap",
  description:
    "Structured real estate risk analysis: identify market, financing, property and rental risks early and make well-founded decisions.",
};

export default function EnRiskAnalysisPage() {
  return <RisikoanalysePage locale="en" />;
}
