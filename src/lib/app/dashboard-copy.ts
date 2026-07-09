import type { Locale } from "@/lib/i18n/config";

export const dashboardCopy: Record<
  Locale,
  {
    headline: string;
    text: string;
    startAnalysis: string;
    backToWebsite: string;
    metaTitle: string;
    metaDescription: string;
  }
> = {
  de: {
    headline: "Willkommen im immowap Dashboard",
    text: "Hier entsteht der geschützte Bereich für Immobilienanalysen, Dokumenten-Uploads, PDF-Berichte, Projektmanagement und Portfolioübersicht.",
    startAnalysis: "Analyse starten",
    backToWebsite: "Zur Website zurück",
    metaTitle: "immowap Dashboard",
    metaDescription:
      "Der geschützte immowap-Bereich für Immobilienanalysen, Dokumenten-Uploads, PDF-Berichte, Projektmanagement und Portfolioübersicht.",
  },
  en: {
    headline: "Welcome to the immowap Dashboard",
    text: "This will become the secure immowap app area for property analysis, document uploads, PDF reports, project management, and portfolio overview.",
    startAnalysis: "Start analysis",
    backToWebsite: "Back to website",
    metaTitle: "immowap Dashboard",
    metaDescription:
      "The secure immowap app area for property analysis, document uploads, PDF reports, project management, and portfolio overview.",
  },
};
