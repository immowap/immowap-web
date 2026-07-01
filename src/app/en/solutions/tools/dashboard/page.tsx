import type { Metadata } from "next";
import { ToolsPage } from "@/components/pages/tools/ToolsPage";

export const metadata: Metadata = {
  title: "Dashboard | Tools & Reports | immowap",
  description:
    "Your immowap dashboard: projects, analyses, documents and PDF reports in one place — the starting point for structured property decisions.",
};

export default function EnToolsDashboardPage() {
  return <ToolsPage locale="en" pageKey="dashboard" />;
}
