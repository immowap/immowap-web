import { LegalPage } from "@/components/pages/LegalPage";

export const metadata = {
  title: "Imprint | immowap",
  description: "Imprint and provider information for immowap.",
};

export default function EnImprintPage() {
  return <LegalPage locale="en" pageId="impressum" />;
}
