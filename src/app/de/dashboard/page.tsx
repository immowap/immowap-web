import { PlaceholderPage } from "@/components/ui/PlaceholderPage";
import { getTranslations } from "@/lib/i18n";

export default function DeDashboardPage() {
  const t = getTranslations("de");
  return <PlaceholderPage locale="de" title={t.pages.dashboard} />;
}
