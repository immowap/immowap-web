import { GoalSolutionLayout, type GoalSolutionCopy } from "@/components/solutions/GoalSolutionLayout";
import type { Locale } from "@/lib/i18n/config";

interface FixFlipPageProps {
  locale: Locale;
}

const de = {
    heroLabel: "Für Ihre Ziele",
    heroHeadline: "Immobilienpotenziale erkennen. Werte entwickeln.",
    heroSubheadline:
      "Nicht jede Immobilie eignet sich für ein Fix & Flip Projekt. Entscheidend sind Kaufpreis, Sanierungsaufwand, Marktumfeld und die individuelle Strategie.",
    heroBtnPrimary: "Analyse starten",
    heroBtnSecondary: "Anfrage senden",
    section1Headline: "Mehr als nur günstig einkaufen.",
    section1Text:
      "Erfolgreiche Fix & Flip Projekte basieren auf deutlich mehr als einem attraktiven Kaufpreis. Lage, Zustand, Modernisierungskosten und Marktpotenzial sollten ganzheitlich betrachtet werden.",
    section2Label: "Typische Herausforderungen",
    section2Headline: "Was wir berücksichtigen",
    considerationCards: [
      {
        title: "Kaufpreis",
        description:
          "Realistischer Einstiegspreis als Grundlage – unter Berücksichtigung von Marktlage und Entwicklungspotenzial.",
      },
      {
        title: "Sanierungskosten",
        description:
          "Strukturierte Einschätzung des Modernisierungsaufwands – auf Basis von Zustand, Umfang und Marktstandards.",
      },
      {
        title: "Marktpotenzial",
        description:
          "Einordnung des Standorts und der Zielgruppe – für eine fundierte Einschätzung des erzielbaren Verkaufspreises.",
      },
      {
        title: "Zeitrahmen",
        description:
          "Realistischer Projektzeitraum von Ankauf über Modernisierung bis zum Verkauf – inklusive Puffer.",
      },
      {
        title: "Risiken",
        description:
          "Frühzeitige Identifikation von Kosten-, Zeit- und Marktrisiken für eine belastbare Entscheidungsgrundlage.",
      },
      {
        title: "Verkaufsperspektive",
        description:
          "Einschätzung der Nachfrage und der erzielbaren Erlöse nach abgeschlossener Modernisierung.",
      },
    ],
    section3Headline: "Struktur statt Spekulation",
    section3Text:
      "Durch strukturierte Analysen lassen sich Chancen und Risiken frühzeitig besser einschätzen. immowap verbindet Erfahrung, Daten und nachvollziehbare Entscheidungsgrundlagen.",
    section3Btn: "Mehr über unsere Analysen",
    section4Label: "Analyse",
    section4Headline: "Relevante Analysen",
    cardLink: "Mehr erfahren",
    analysisCards: [
      {
        title: "Marktwertanalyse",
        description: "Realistische Einordnung vor und nach der Modernisierung.",
        href: "/de/loesungen/marktwertanalyse",
      },
      {
        title: "Cashflow-Analyse",
        description: "Übersicht über Kosten, Liquidität und Wirtschaftlichkeit.",
        href: "/de/loesungen/analysen/ertragswertverfahren",
      },
      {
        title: "Risikoanalyse",
        description: "Frühzeitige Identifikation möglicher Unsicherheiten.",
        href: "/de/loesungen/analysen/risikoanalyse",
      },
      {
        title: "Individuelle Immobilienanalyse",
        description: "Ganzheitliche Betrachtung des Projekts und seiner Potenziale.",
        href: "/de/loesungen/analysen/individuelle-immobilienanalyse",
      },
    ],
    section5Label: "Erwartete Ergebnisse",
    section5Headline: "Für unterschiedliche Projekte",
    strategyCards: [
      {
        title: "Eigentumswohnungen",
        description:
          "Attraktive Ausgangsobjekte mit klarem Modernisierungspotenzial und definierten Zielgruppen.",
      },
      {
        title: "Einfamilienhäuser",
        description:
          "Hoher Individualitätsgrad, breite Käufergruppe und oft unterschätztes Wertsteigerungspotenzial.",
      },
      {
        title: "Sanierungsobjekte",
        description:
          "Objekte mit erhöhtem Modernisierungsbedarf – und entsprechend großem Entwicklungspotenzial.",
      },
      {
        title: "Entwicklungsprojekte",
        description:
          "Komplexere Vorhaben mit strukturierter Planung, mehreren Gewerken und klarer Exit-Strategie.",
      },
    ],
    section6Label: "Was uns unterscheidet",
    section6Headline: "Jedes Projekt folgt eigenen Rahmenbedingungen.",
    section6Text:
      "Ob kurze Haltedauer, umfangreiche Modernisierung oder unterschiedliche Zielgruppen – immowap betrachtet jedes Vorhaben individuell und orientiert sich an den jeweiligen Zielen und Prioritäten.",
    section6TextSecondary:
      "Es gibt keine Standardlösungen. Jede Analyse orientiert sich am individuellen Kontext des Projekts.",
    section6ListLabel: "Jede Analyse basiert auf",
    section6Items: [
      "Individuellen Zielen",
      "Projektumfang",
      "Zeithorizont",
      "Risikoprofil",
    ],
    section7Headline: "Potenziale sichtbar machen.",
    principleCards: [
      {
        number: "01",
        title: "Wertsteigerung",
        description:
          "Fokus auf Entwicklungspotenziale und den nachhaltigen Mehrwert einer durchdachten Modernisierung.",
      },
      {
        number: "02",
        title: "Strukturierte Entscheidungen",
        description:
          "Fundierte Analysen statt Spekulation – nachvollziehbar, datenbasiert und auf das Projekt zugeschnitten.",
      },
      {
        number: "03",
        title: "Individuelle Strategien",
        description: "Jedes Projekt wird im jeweiligen Kontext betrachtet – ohne pauschale Annahmen.",
      },
    ],
};

const en = {
    heroLabel: "For your goals",
    heroHeadline: "Identify property potential. Create value.",
    heroSubheadline:
      "Not every property is suitable for a Fix & Flip project. The purchase price, renovation scope, market environment and individual strategy are decisive.",
    heroBtnPrimary: "Start analysis",
    heroBtnSecondary: "Send enquiry",
    section1Headline: "More than just buying cheap.",
    section1Text:
      "Successful Fix & Flip projects are based on considerably more than an attractive purchase price. Location, condition, renovation costs and market potential should be viewed holistically.",
    section2Label: "Typical challenges",
    section2Headline: "What we take into account",
    considerationCards: [
      {
        title: "Purchase price",
        description:
          "A realistic entry price as the foundation — taking market conditions and development potential into account.",
      },
      {
        title: "Renovation costs",
        description:
          "Structured assessment of the modernisation scope — based on condition, extent and market standards.",
      },
      {
        title: "Market potential",
        description:
          "Assessment of the location and target group — for a well-founded estimate of the achievable sale price.",
      },
      {
        title: "Timeline",
        description:
          "Realistic project period from purchase through renovation to sale — including contingency.",
      },
      {
        title: "Risks",
        description:
          "Early identification of cost, time and market risks for a robust decision-making foundation.",
      },
      {
        title: "Sales perspective",
        description:
          "Assessment of demand and achievable proceeds after completion of modernisation.",
      },
    ],
    section3Headline: "Structure instead of speculation",
    section3Text:
      "Through structured analyses, opportunities and risks can be better assessed at an early stage. immowap combines experience, data and traceable decision-making foundations.",
    section3Btn: "Learn more about our analyses",
    section4Label: "Analysis",
    section4Headline: "Relevant analyses",
    cardLink: "Learn more",
    analysisCards: [
      {
        title: "Market value analysis",
        description: "Realistic assessment before and after modernisation.",
        href: "/en/solutions/market-value-analysis",
      },
      {
        title: "Cashflow analysis",
        description: "Overview of costs, liquidity and economic viability.",
        href: "/en/solutions/analyses/income-approach",
      },
      {
        title: "Risk analysis",
        description: "Early identification of possible uncertainties.",
        href: "/en/solutions/analyses/risk-analysis",
      },
      {
        title: "Individual property analysis",
        description: "Holistic consideration of the project and its potential.",
        href: "/en/solutions/analyses/individual-property-analysis",
      },
    ],
    section5Label: "Expected outcomes",
    section5Headline: "For different projects",
    strategyCards: [
      {
        title: "Owner-occupied apartments",
        description:
          "Attractive starting properties with clear modernisation potential and defined target groups.",
      },
      {
        title: "Single-family houses",
        description:
          "High individuality, broad buyer group and often underestimated value appreciation potential.",
      },
      {
        title: "Renovation properties",
        description:
          "Properties with increased need for modernisation — and correspondingly large development potential.",
      },
      {
        title: "Development projects",
        description:
          "More complex projects with structured planning, multiple trades and a clear exit strategy.",
      },
    ],
    section6Label: "What sets us apart",
    section6Headline: "Every project follows its own framework.",
    section6Text:
      "Whether short holding period, extensive modernisation or different target groups — immowap considers every project individually, oriented towards the respective goals and priorities.",
    section6TextSecondary:
      "There are no standard solutions. Every analysis is based on the individual context of the project.",
    section6ListLabel: "Every analysis is based on",
    section6Items: [
      "Individual goals",
      "Project scope",
      "Time horizon",
      "Risk profile",
    ],
    section7Headline: "Making potential visible.",
    principleCards: [
      {
        number: "01",
        title: "Value creation",
        description:
          "Focus on development potential and the sustainable added value of a well-conceived modernisation.",
      },
      {
        number: "02",
        title: "Structured decisions",
        description:
          "Well-founded analyses instead of speculation — traceable, data-based and tailored to the project.",
      },
      {
        number: "03",
        title: "Individual strategies",
        description:
          "Every project is considered in its respective context — without blanket assumptions.",
      },
    ],
};

const copy = { de, en } satisfies Record<Locale, GoalSolutionCopy>;

export function FixFlipPage({ locale }: FixFlipPageProps) {
  return (
    <GoalSolutionLayout
      locale={locale}
      pageKey="fix-flip"
      visual="renovation"
      strategyIcons={["building", "renovation", "investment", "strategy"]}
      c={copy[locale]}
    />
  );
}
