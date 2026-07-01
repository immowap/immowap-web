import type { Metadata } from "next";
import { ToolsPage } from "@/components/pages/tools/ToolsPage";

export const metadata: Metadata = {
  title: "AI assistant | Tools & Reports | immowap",
  description:
    "AI-supported property assistant for questions, document explanations, risk indicators and valuation support — structured and traceable.",
};

export default function EnToolsAiAssistantPage() {
  return <ToolsPage locale="en" pageKey="ki-assistent" />;
}
