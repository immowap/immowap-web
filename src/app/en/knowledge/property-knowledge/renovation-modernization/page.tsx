import { SanierungModernisierungPage } from "@/components/pages/SanierungModernisierungPage";
import { getPropertyKnowledgeArticle } from "@/lib/i18n/property-knowledge";

const article = getPropertyKnowledgeArticle("sanierung-modernisierung");

export const metadata = {
  title: `${article.en.title} | Renovate or refurbish? | immowap`,
  description:
    "Understand the differences between renovation, modernisation and refurbishment. Information on roof, windows, heating, insulation, electrical systems, funding programmes and value increase through modernisation.",
};

export default function EnRenovationModernizationPage() {
  return <SanierungModernisierungPage locale="en" />;
}
