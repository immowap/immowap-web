import type { Metadata } from "next";
import { ToolsPage } from "@/components/pages/tools/ToolsPage";

export const metadata: Metadata = {
  title: "Document upload | Tools & Reports | immowap",
  description:
    "Secure document upload for exposés, land register extracts, energy certificates, lease agreements and more — for document-based property analysis.",
};

export default function EnToolsDocumentUploadPage() {
  return <ToolsPage locale="en" pageKey="dokumenten-upload" />;
}
