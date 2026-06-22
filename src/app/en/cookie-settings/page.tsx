import { LegalPage } from "@/components/pages/LegalPage";

export const metadata = {
  title: "Cookie Settings | immowap",
  description: "Cookie settings and privacy preferences for immowap.",
};

export default function EnCookieSettingsPage() {
  return <LegalPage locale="en" pageId="cookies" />;
}
