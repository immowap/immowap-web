import { ImmobilienwissenPage } from "@/components/pages/ImmobilienwissenPage";
import { propertyKnowledgeOverviewCopy } from "@/lib/i18n/property-knowledge";

export const metadata = {
  title: propertyKnowledgeOverviewCopy.de.metaTitle,
  description: propertyKnowledgeOverviewCopy.de.metaDescription,
};

export default function DeImmobilienwissenPage() {
  return <ImmobilienwissenPage locale="de" />;
}
