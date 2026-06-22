import { LegalPage } from "@/components/pages/LegalPage";

export const metadata = {
  title: "Datenschutz | immowap",
  description: "Datenschutzhinweise von immowap.",
};

export default function DeDatenschutzPage() {
  return <LegalPage locale="de" pageId="datenschutz" />;
}
