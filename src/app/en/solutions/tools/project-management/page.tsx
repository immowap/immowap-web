import type { Metadata } from "next";
import { ToolsPage } from "@/components/pages/tools/ToolsPage";

export const metadata: Metadata = {
  title: "Project management | Tools & Reports | immowap",
  description:
    "Project management for renovation, fix and flip and modernisation: tasks, budget, timeline, documents and milestones with immowap.",
};

export default function EnToolsProjectManagementPage() {
  return <ToolsPage locale="en" pageKey="projektmanagement" />;
}
