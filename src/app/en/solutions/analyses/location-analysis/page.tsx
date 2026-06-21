import type { Metadata } from "next";
import { StandortanalysePage } from "@/components/pages/StandortanalysePage";

export const metadata: Metadata = {
  title: "Real Estate Location Analysis | immowap",
  description:
    "Structured real estate location analysis: assess macro and micro location, infrastructure and development potential objectively.",
};

export default function EnLocationAnalysisPage() {
  return <StandortanalysePage locale="en" />;
}
