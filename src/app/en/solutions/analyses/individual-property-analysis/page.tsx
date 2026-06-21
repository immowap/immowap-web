import type { Metadata } from "next";
import { IndividuelleImmobilienanalysePage } from "@/components/pages/IndividuelleImmobilienanalysePage";

export const metadata: Metadata = {
  title: "Individual Real Estate Analysis | immowap",
  description:
    "Individual real estate analysis aligned with ImmoWertV principles: personal objectives, financing, market and risks for informed decisions.",
};

export default function EnIndividualPropertyAnalysisPage() {
  return <IndividuelleImmobilienanalysePage locale="en" />;
}
