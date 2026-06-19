import { VermietungPage, vermietungCopy } from "@/components/pages/VermietungPage";

export const metadata = {
  title: vermietungCopy.de.metaTitle,
  description: vermietungCopy.de.metaDescription,
};

export default function DeVermietungPage() {
  return <VermietungPage locale="de" />;
}
