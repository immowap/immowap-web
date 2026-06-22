import { LegalPage } from "@/components/pages/LegalPage";

export const metadata = {
  title: "Widerrufsbelehrung | immowap",
  description: "Widerrufsbelehrung für Verbraucher bei immowap.",
};

export default function DeWiderrufPage() {
  return <LegalPage locale="de" pageId="widerruf" />;
}
