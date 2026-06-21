import type { Metadata } from "next";
import { ErtragswertverfahrenPage } from "@/components/pages/ErtragswertverfahrenPage";

export const metadata: Metadata = {
  title: "Income Approach | immowap",
  description:
    "Income approach under ImmoWertV: valuation of investment properties based on sustainable income, property yield and remaining useful life.",
};

export default function EnIncomeApproachPage() {
  return <ErtragswertverfahrenPage locale="en" />;
}
