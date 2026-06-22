import { LegalPage } from "@/components/pages/LegalPage";

export const metadata = {
  title: "Privacy Policy | immowap",
  description: "Privacy policy for immowap.",
};

export default function EnPrivacyPage() {
  return <LegalPage locale="en" pageId="datenschutz" />;
}
