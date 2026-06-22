import { SanierungModernisierungPage } from "@/components/pages/SanierungModernisierungPage";
import { getPropertyKnowledgeArticle } from "@/lib/i18n/property-knowledge";

const article = getPropertyKnowledgeArticle("sanierung-modernisierung");

export const metadata = {
  title: `${article.en.title} | Land, new build & exit | immowap`,
  description:
    "Understand project development: land, new build, subdivision, conversion, densification, developer projects, viability and exit strategies – sale or retention.",
};

export default function EnRenovationModernizationPage() {
  return <SanierungModernisierungPage locale="en" />;
}
