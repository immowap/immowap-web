import { LegalPage } from "@/components/pages/LegalPage";

export const metadata = {
  title: "Terms & Conditions | immowap",
  description: "Terms and conditions for immowap services.",
};

export default function EnTermsPage() {
  return <LegalPage locale="en" pageId="agb" />;
}
