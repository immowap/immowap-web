import { AnalysisSolutionLayout, type AnalysisSolutionCopy } from "@/components/solutions/AnalysisSolutionLayout";
import type { Locale } from "@/lib/i18n/config";

interface RisikoanalysePageProps {
  locale: Locale;
}

const copy = {
  de: {
    breadcrumbCurrent: "Risikoanalyse",
    heroLabel: "Analysen",
    heroHeadline: "Risikoanalyse für Immobilien",
    heroSubheadline: "Risiken erkennen und fundierte Entscheidungen treffen.",
    heroText:
      "Neben Marktwert und Rendite spielen zahlreiche Risiken eine wichtige Rolle. Eine strukturierte Risikoanalyse hilft dabei, Chancen und mögliche Schwachstellen frühzeitig zu erkennen und Entscheidungen besser abzusichern.",
    heroBtnPrimary: "Risikoanalyse starten",
    heroBtnSecondary: "Kontakt aufnehmen",
    sectionWhyLabel: "Einordnung",
    sectionWhyHeadline: "Warum eine Risikoanalyse wichtig ist",
    whyCards: [
      {
        title: "Marktrisiken",
        description: "Entwicklung von Angebot, Nachfrage und Preisniveau.",
      },
      {
        title: "Finanzierungsrisiken",
        description: "Zinsen, Kapitalstruktur und langfristige Belastungen.",
      },
      {
        title: "Objektrisiken",
        description: "Bausubstanz, Alter und technischer Zustand.",
      },
      {
        title: "Vermietungsrisiken",
        description: "Leerstand und Mietausfall.",
      },
    ],
    sectionConsiderLabel: "Risikofaktoren",
    sectionConsiderHeadline: "Welche Risiken berücksichtigt immowap?",
    considerCards: [
      {
        title: "Standortrisiko",
        description:
          "Entwicklung der Mikrolage, Infrastruktur und regionaler Nachfrage im Bewertungskontext.",
      },
      {
        title: "Marktentwicklung",
        description: "Veränderungen von Angebot, Nachfrage und Preisniveau am Immobilienmarkt.",
      },
      {
        title: "Finanzierungsrisiko",
        description: "Zinsniveau, Kapitalstruktur und langfristige Tragfähigkeit.",
      },
      {
        title: "Technischer Zustand",
        description: "Bausubstanz, Alter, Modernisierungsstand und Instandhaltungsbedarf.",
      },
      {
        title: "Mietausfallrisiko",
        description: "Leerstand, Mietausfall und nachhaltige Vermietbarkeit.",
      },
      {
        title: "Regulatorische Risiken",
        description: "Energetische Anforderungen, Mietrecht und weitere rechtliche Rahmenbedingungen.",
      },
    ],
    sectionQuestionsLabel: "Fragestellungen",
    sectionQuestionsHeadline: "Typische Fragestellungen",
    questionCards: [
      "Ist die Immobilie überbewertet?",
      "Wie hoch ist das Leerstandsrisiko?",
      "Welche Sanierungskosten können entstehen?",
      "Wie wirken sich steigende Zinsen aus?",
      "Welche Risiken bestehen in der Lage?",
      "Ist die Immobilie langfristig robust?",
    ],
    sectionProcessLabel: "Ablauf",
    sectionProcessHeadline: "Was fließt in die Risikoanalyse ein?",
    processSteps: [
      { title: "Ziele verstehen", description: "Individuelle Zielsetzung und Rahmenbedingungen." },
      { title: "Objekt analysieren", description: "Zustand, Lage und objektspezifische Merkmale." },
      { title: "Risiken identifizieren", description: "Systematische Erfassung relevanter Risikofaktoren." },
      { title: "Szenarien bewerten", description: "Einordnung von Chancen und Unsicherheiten." },
      {
        title: "Entscheidungsgrundlagen ableiten",
        description: "Nachvollziehbare Zusammenfassung für die Entscheidung.",
      },
    ],
    sectionOverviewHeadline: "Mögliche Risiken im Überblick",
    overviewCards: [
      { title: "Leerstand", description: "Risiko unvermieteter Flächen und Einnahmeausfälle." },
      { title: "Mietausfall", description: "Ausfall von Mieteinnahmen und Bonitätsrisiken." },
      {
        title: "Sanierungsbedarf",
        description: "Notwendige Investitionen in Bausubstanz und Technik.",
      },
      {
        title: "Marktveränderungen",
        description: "Schwankungen bei Preisen, Nachfrage und Zinsen.",
      },
      {
        title: "Finanzierungsrisiken",
        description: "Belastung durch Zins, Tilgung und Kapitalstruktur.",
      },
      {
        title: "Gesetzliche und energetische Anforderungen",
        description: "Regulatorische Vorgaben und Modernisierungspflichten.",
      },
    ],
    sectionDiffLabel: "Perspektive",
    sectionDiffHeadline: "Der Unterschied von immowap",
    diffCards: [
      {
        title: "Standardbetrachtung",
        description: "Oft werden nur Kaufpreis und Rendite betrachtet.",
      },
      {
        title: "Ganzheitliche Betrachtung",
        description:
          "immowap berücksichtigt Markt, Objekt, Finanzierung und individuelle Ziele.",
      },
      {
        title: "Individuelle Entscheidungsgrundlage",
        description:
          "Keine pauschalen Aussagen, sondern nachvollziehbare Analysen.",
      },
    ],
  },
  en: {
    breadcrumbCurrent: "Risk analysis",
    heroLabel: "Analyses",
    heroHeadline: "Real Estate Risk Analysis",
    heroSubheadline: "Understand risks and make well-founded decisions.",
    heroText:
      "In addition to market value and returns, many factors influence the long-term success of a property. A structured risk analysis helps identify potential weaknesses and supports better decisions.",
    heroBtnPrimary: "Start risk analysis",
    heroBtnSecondary: "Contact us",
    sectionWhyLabel: "Context",
    sectionWhyHeadline: "Why risk analysis matters",
    whyCards: [
      {
        title: "Market risks",
        description: "Changes in supply, demand and market conditions.",
      },
      {
        title: "Financing risks",
        description: "Interest rates, leverage and financing structures.",
      },
      {
        title: "Property risks",
        description: "Building condition, age and technical quality.",
      },
      {
        title: "Rental risks",
        description: "Vacancy and rental default risks.",
      },
    ],
    sectionConsiderLabel: "Risk factors",
    sectionConsiderHeadline: "Which risks does immowap consider?",
    considerCards: [
      {
        title: "Location risk",
        description:
          "Micro-location development, infrastructure and regional demand in the valuation context.",
      },
      {
        title: "Market development",
        description: "Changes in supply, demand and price levels in the property market.",
      },
      {
        title: "Financing risk",
        description: "Interest rates, capital structure and long-term affordability.",
      },
      {
        title: "Technical condition",
        description: "Building fabric, age, modernisation status and maintenance needs.",
      },
      {
        title: "Vacancy risk",
        description: "Vacancy, rental default and sustainable lettability.",
      },
      {
        title: "Regulatory risks",
        description: "Energy requirements, tenancy law and other legal frameworks.",
      },
    ],
    sectionQuestionsLabel: "Questions",
    sectionQuestionsHeadline: "Typical questions",
    questionCards: [
      "Is the property overpriced?",
      "How high is the vacancy risk?",
      "Which renovation costs may arise?",
      "How do rising interest rates affect the investment?",
      "Which location risks exist?",
      "Is the investment sustainable in the long term?",
    ],
    sectionProcessLabel: "Process",
    sectionProcessHeadline: "What is included in the risk analysis?",
    processSteps: [
      { title: "Understand objectives", description: "Individual goals and framework conditions." },
      { title: "Analyse the property", description: "Condition, location and property-specific features." },
      { title: "Identify risks", description: "Systematic identification of relevant risk factors." },
      { title: "Evaluate scenarios", description: "Assessment of opportunities and uncertainties." },
      {
        title: "Develop decision support",
        description: "Traceable summary for decision-making.",
      },
    ],
    sectionOverviewHeadline: "Potential risks at a glance",
    overviewCards: [
      { title: "Vacancy", description: "Risk of unlet space and loss of income." },
      { title: "Rental default", description: "Loss of rental income and credit risks." },
      { title: "Renovation requirements", description: "Necessary investment in building fabric and systems." },
      { title: "Market changes", description: "Fluctuations in prices, demand and interest rates." },
      { title: "Financing risks", description: "Burden from interest, repayment and capital structure." },
      {
        title: "Regulatory and energy requirements",
        description: "Regulatory obligations and modernisation duties.",
      },
    ],
    sectionDiffLabel: "Perspective",
    sectionDiffHeadline: "The immowap difference",
    diffCards: [
      {
        title: "Standard approach",
        description: "Traditional analyses often focus only on purchase price and returns.",
      },
      {
        title: "Holistic perspective",
        description:
          "immowap considers market factors, the property itself, financing and personal objectives.",
      },
      {
        title: "Individual decision support",
        description:
          "No one-size-fits-all recommendations but objective and transparent analyses.",
      },
    ],
  },
} as const satisfies Record<Locale, AnalysisSolutionCopy>;

export function RisikoanalysePage({ locale }: RisikoanalysePageProps) {
  return (
    <AnalysisSolutionLayout
      locale={locale}
      pageKey="risikoanalyse"
      visual="risk"
      c={copy[locale]}
    />
  );
}
