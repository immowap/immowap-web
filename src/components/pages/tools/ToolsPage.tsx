import { ToolSolutionPage } from "@/components/pages/tools/ToolSolutionPage";
import { getToolPageContent } from "@/lib/tools/content";
import type { ToolPageKey } from "@/lib/tools/routes";
import type { Locale } from "@/lib/i18n/config";

interface ToolsPageProps {
  locale: Locale;
  pageKey: ToolPageKey;
}

export function ToolsPage({ locale, pageKey }: ToolsPageProps) {
  return <ToolSolutionPage locale={locale} content={getToolPageContent(pageKey)} />;
}
