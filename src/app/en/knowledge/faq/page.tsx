import { FAQPage, getFaqPageMetadata } from "@/components/pages/FAQPage";

export const metadata = getFaqPageMetadata("en");

export default function EnKnowledgeFAQPage() {
  return <FAQPage locale="en" />;
}
