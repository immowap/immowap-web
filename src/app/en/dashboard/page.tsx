import { PlaceholderPage } from "@/components/ui/PlaceholderPage";
import { getTranslations } from "@/lib/i18n";

export default function EnDashboardPage() {
  const t = getTranslations("en");
  return <PlaceholderPage locale="en" title={t.pages.dashboard} />;
}
