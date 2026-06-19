import { VermietungPage, vermietungCopy } from "@/components/pages/VermietungPage";

export const metadata = {
  title: vermietungCopy.en.metaTitle,
  description: vermietungCopy.en.metaDescription,
};

export default function EnRentingOutPropertyPage() {
  return <VermietungPage locale="en" />;
}
