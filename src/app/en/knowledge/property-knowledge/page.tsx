import { ImmobilienwissenPage } from "@/components/pages/ImmobilienwissenPage";
import { propertyKnowledgeOverviewCopy } from "@/lib/i18n/property-knowledge";

export const metadata = {
  title: propertyKnowledgeOverviewCopy.en.metaTitle,
  description: propertyKnowledgeOverviewCopy.en.metaDescription,
};

export default function EnPropertyKnowledgePage() {
  return <ImmobilienwissenPage locale="en" />;
}
