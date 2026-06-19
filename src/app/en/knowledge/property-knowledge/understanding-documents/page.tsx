import { DokumenteVerstehenPage } from "@/components/pages/DokumenteVerstehenPage";
import { getPropertyKnowledgeArticle } from "@/lib/i18n/property-knowledge";

const article = getPropertyKnowledgeArticle("dokumente-verstehen");

export const metadata = {
  title: `${article.en.title} – Which documents matter before purchase | immowap`,
  description:
    "Land register extract, declaration of division, budget plan, energy certificate and other documents: Which papers should be reviewed before buying property.",
};

export default function EnUnderstandingDocumentsPage() {
  return <DokumenteVerstehenPage locale="en" />;
}
