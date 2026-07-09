import type { Locale } from "@/lib/i18n/config";

/** Stable keys for solution pages — used for related-solutions mapping */
export type SolutionPageKey =
  | "eigennutzung"
  | "kapitalanlage"
  | "fix-flip"
  | "sanierung"
  | "mehrfamilienhaeuser"
  | "gewerbeimmobilien"
  | "marktwertanalyse"
  | "vergleichswertverfahren"
  | "sachwertverfahren"
  | "ertragswertverfahren"
  | "risikoanalyse"
  | "standortanalyse"
  | "dokumentenanalyse"
  | "individuelle-immobilienanalyse"
  | "dashboard"
  | "ki-assistent"
  | "pdf-berichte"
  | "dokumenten-upload"
  | "vergleichsanalysen"
  | "projektmanagement"
  | "portfoliouebersicht";

const routes: Record<Locale, Record<SolutionPageKey, string>> = {
  de: {
    eigennutzung: "/de/loesungen/eigennutzung",
    kapitalanlage: "/de/loesungen/kapitalanlage",
    "fix-flip": "/de/loesungen/fix-flip",
    sanierung: "/de/loesungen/sanierung-modernisierung",
    mehrfamilienhaeuser: "/de/loesungen/mehrfamilienhaeuser",
    gewerbeimmobilien: "/de/loesungen/gewerbeimmobilien",
    marktwertanalyse: "/de/loesungen/marktwertanalyse",
    vergleichswertverfahren: "/de/loesungen/analysen/vergleichswertverfahren",
    sachwertverfahren: "/de/loesungen/analysen/sachwertverfahren",
    ertragswertverfahren: "/de/loesungen/analysen/ertragswertverfahren",
    risikoanalyse: "/de/loesungen/analysen/risikoanalyse",
    standortanalyse: "/de/loesungen/analysen/standortanalyse",
    dokumentenanalyse: "/de/loesungen/analysen/dokumentenanalyse",
    "individuelle-immobilienanalyse": "/de/loesungen/analysen/individuelle-immobilienanalyse",
    dashboard: "/de/loesungen/tools/dashboard",
    "ki-assistent": "/de/loesungen/tools/ki-assistent",
    "pdf-berichte": "/de/loesungen/tools/pdf-berichte",
    "dokumenten-upload": "/de/loesungen/tools/dokumenten-upload",
    vergleichsanalysen: "/de/loesungen/tools/vergleichsanalysen",
    projektmanagement: "/de/loesungen/tools/projektmanagement",
    portfoliouebersicht: "/de/loesungen/tools/portfoliouebersicht",
  },
  en: {
    eigennutzung: "/en/solutions/owner-occupation",
    kapitalanlage: "/en/solutions/investment-property",
    "fix-flip": "/en/solutions/fix-flip",
    sanierung: "/en/solutions/renovation-modernization",
    mehrfamilienhaeuser: "/en/solutions/multi-family-properties",
    gewerbeimmobilien: "/en/solutions/commercial-real-estate",
    marktwertanalyse: "/en/solutions/market-value-analysis",
    vergleichswertverfahren: "/en/solutions/analyses/sales-comparison-approach",
    sachwertverfahren: "/en/solutions/analyses/cost-approach",
    ertragswertverfahren: "/en/solutions/analyses/income-approach",
    risikoanalyse: "/en/solutions/analyses/risk-analysis",
    standortanalyse: "/en/solutions/analyses/location-analysis",
    dokumentenanalyse: "/en/solutions/analyses/document-analysis",
    "individuelle-immobilienanalyse": "/en/solutions/analyses/individual-property-analysis",
    dashboard: "/en/solutions/tools/dashboard",
    "ki-assistent": "/en/solutions/tools/ai-assistant",
    "pdf-berichte": "/en/solutions/tools/pdf-reports",
    "dokumenten-upload": "/en/solutions/tools/document-upload",
    vergleichsanalysen: "/en/solutions/tools/comparison-analyses",
    projektmanagement: "/en/solutions/tools/project-management",
    portfoliouebersicht: "/en/solutions/tools/portfolio-overview",
  },
};

export function getSolutionHref(locale: Locale, key: SolutionPageKey): string {
  return routes[locale][key];
}
