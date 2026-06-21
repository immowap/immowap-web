import type { Metadata } from "next";
import { VergleichswertverfahrenPage } from "@/components/pages/VergleichswertverfahrenPage";

export const metadata: Metadata = {
  title: "Sales Comparison Approach | immowap",
  description:
    "The sales comparison approach under ImmoWertV: fundamentals, areas of application, process and limitations – understanding property values through comparable market transactions.",
};

export default function EnSalesComparisonApproachPage() {
  return <VergleichswertverfahrenPage locale="en" />;
}
