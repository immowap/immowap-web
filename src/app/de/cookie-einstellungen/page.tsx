import { LegalPage } from "@/components/pages/LegalPage";

export const metadata = {
  title: "Cookie-Einstellungen | immowap",
  description: "Cookie-Einstellungen und Datenschutzpräferenzen bei immowap.",
};

export default function DeCookieEinstellungenPage() {
  return <LegalPage locale="de" pageId="cookies" />;
}
