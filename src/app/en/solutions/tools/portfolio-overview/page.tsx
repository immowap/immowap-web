import type { Metadata } from "next";
import { ToolsPage } from "@/components/pages/tools/ToolsPage";

export const metadata: Metadata = {
  title: "Portfolio overview | Tools & Reports | immowap",
  description:
    "Portfolio overview for property investors: total value, rental income, cash flow, yield and risk distribution at a glance.",
};

export default function EnToolsPortfolioOverviewPage() {
  return <ToolsPage locale="en" pageKey="portfoliouebersicht" />;
}
