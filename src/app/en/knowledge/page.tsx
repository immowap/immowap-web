import { PlaceholderPage } from "@/components/ui/PlaceholderPage";
import { getTranslations } from "@/lib/i18n";

export default function EnKnowledgePage() {
  const t = getTranslations("en");
  return <PlaceholderPage locale="en" title={t.pages.knowledge} />;
}
