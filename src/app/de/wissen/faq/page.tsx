import { FAQPage, getFaqPageMetadata } from "@/components/pages/FAQPage";

export const metadata = getFaqPageMetadata("de");

export default function DeWissenFAQPage() {
  return <FAQPage locale="de" />;
}
