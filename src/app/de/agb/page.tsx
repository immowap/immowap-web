import { LegalPage } from "@/components/pages/LegalPage";

export const metadata = {
  title: "AGB | immowap",
  description: "Allgemeine Geschäftsbedingungen von immowap.",
};

export default function DeAgbPage() {
  return <LegalPage locale="de" pageId="agb" />;
}
