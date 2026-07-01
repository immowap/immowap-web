import type { Locale } from "@/lib/i18n/config";

export type ToolPageKey =
  | "dashboard"
  | "ki-assistent"
  | "pdf-berichte"
  | "dokumenten-upload"
  | "vergleichsanalysen"
  | "projektmanagement"
  | "portfoliouebersicht";

const toolPathsDe: Record<ToolPageKey, string> = {
  dashboard: "/de/loesungen/tools/dashboard",
  "ki-assistent": "/de/loesungen/tools/ki-assistent",
  "pdf-berichte": "/de/loesungen/tools/pdf-berichte",
  "dokumenten-upload": "/de/loesungen/tools/dokumenten-upload",
  vergleichsanalysen: "/de/loesungen/tools/vergleichsanalysen",
  projektmanagement: "/de/loesungen/tools/projektmanagement",
  portfoliouebersicht: "/de/loesungen/tools/portfoliouebersicht",
};

const toolPathsEn: Record<ToolPageKey, string> = {
  dashboard: "/en/solutions/tools/dashboard",
  "ki-assistent": "/en/solutions/tools/ai-assistant",
  "pdf-berichte": "/en/solutions/tools/pdf-reports",
  "dokumenten-upload": "/en/solutions/tools/document-upload",
  vergleichsanalysen: "/en/solutions/tools/comparison-analyses",
  projektmanagement: "/en/solutions/tools/project-management",
  portfoliouebersicht: "/en/solutions/tools/portfolio-overview",
};

export function getToolRoute(locale: Locale, key: ToolPageKey): string {
  return locale === "de" ? toolPathsDe[key] : toolPathsEn[key];
}

export const toolPathMapDeToEn: Record<string, string> = {
  "/loesungen/tools/dashboard": "/solutions/tools/dashboard",
  "/loesungen/tools/ki-assistent": "/solutions/tools/ai-assistant",
  "/loesungen/tools/pdf-berichte": "/solutions/tools/pdf-reports",
  "/loesungen/tools/dokumenten-upload": "/solutions/tools/document-upload",
  "/loesungen/tools/vergleichsanalysen": "/solutions/tools/comparison-analyses",
  "/loesungen/tools/projektmanagement": "/solutions/tools/project-management",
  "/loesungen/tools/portfoliouebersicht": "/solutions/tools/portfolio-overview",
};
