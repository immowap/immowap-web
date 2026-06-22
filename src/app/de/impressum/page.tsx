import { LegalPage } from "@/components/pages/LegalPage";

export const metadata = {
  title: "Impressum | immowap",
  description: "Impressum und Anbieterkennzeichnung von immowap.",
};

export default function DeImpressumPage() {
  return <LegalPage locale="de" pageId="impressum" />;
}
