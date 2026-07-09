import type { Locale } from "@/lib/i18n/config";

const copy = {
  de: {
    stats: {
      marketValue: "Marktwert",
      risk: "Risiko",
      location: "Standort",
      cashflow: "Cashflow",
      low: "Niedrig",
      chartTitle: "Wertentwicklung",
      chartPeriod: "12 Monate",
      docTitle: "Exposé-Analyse",
      docMeta: "3 Dokumente · 98% Confidence",
      aiBadge: "KI-Analyse",
    },
    trends: {
      marketValue: "+3,2% YoY",
      risk: "Score 82/100",
      location: "Top 12% Region",
      cashflow: "Netto positiv",
    },
    values: {
      marketValue: "€ 485.000",
      risk: "Niedrig",
      location: "A+",
      cashflow: "+ € 840/m",
    },
  },
  en: {
    stats: {
      marketValue: "Market value",
      risk: "Risk",
      location: "Location",
      cashflow: "Cashflow",
      low: "Low",
      chartTitle: "Value development",
      chartPeriod: "12 months",
      docTitle: "Listing analysis",
      docMeta: "3 documents · 98% confidence",
      aiBadge: "AI analysis",
    },
    trends: {
      marketValue: "+3.2% YoY",
      risk: "Score 82/100",
      location: "Top 12% region",
      cashflow: "Net positive",
    },
    values: {
      marketValue: "€ 485,000",
      risk: "Low",
      location: "A+",
      cashflow: "+ € 840/mo",
    },
  },
} as const;

export function getProductHeroCopy(locale: Locale) {
  return copy[locale];
}
