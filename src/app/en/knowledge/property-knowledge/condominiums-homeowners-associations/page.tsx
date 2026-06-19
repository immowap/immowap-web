import { EigentumswohnungWegPage } from "@/components/pages/EigentumswohnungWegPage";
import { getPropertyKnowledgeArticle } from "@/lib/i18n/property-knowledge";

const article = getPropertyKnowledgeArticle("eigentumswohnung-weg");

export const metadata = {
  title: `${article.en.title} | immowap`,
  description:
    "Condominiums and homeowners associations explained clearly. Service charges, reserves, special assessments and key fundamentals for buyers at a glance.",
};

export default function EnCondominiumsHomeownersAssociationsPage() {
  return <EigentumswohnungWegPage locale="en" />;
}
