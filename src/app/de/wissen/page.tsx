import { PlaceholderPage } from "@/components/ui/PlaceholderPage";
import { getTranslations } from "@/lib/i18n";

export default function DeWissenPage() {
  const t = getTranslations("de");
  return <PlaceholderPage locale="de" title={t.pages.knowledge} />;
}
