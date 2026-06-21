import type { Metadata } from "next";
import { SachwertverfahrenPage } from "@/components/pages/SachwertverfahrenPage";

export const metadata: Metadata = {
  title: "Cost Approach | immowap",
  description:
    "Cost approach under ImmoWertV: land value, replacement costs, depreciation and market adjustment – structured analysis of the intrinsic value of a property.",
};

export default function EnCostApproachPage() {
  return <SachwertverfahrenPage locale="en" />;
}
