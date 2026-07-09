import { AnalysisSolutionLayout, type AnalysisSolutionCopy } from "@/components/solutions/AnalysisSolutionLayout";
import type { Locale } from "@/lib/i18n/config";

interface StandortanalysePageProps {
  locale: Locale;
}

const copy = {
  de: {
    breadcrumbCurrent: "Standortanalyse",
    heroLabel: "Analysen",
    heroHeadline: "Standortanalyse für Immobilien",
    heroSubheadline: "Lage verstehen und Potenziale frühzeitig erkennen.",
    heroText:
      "Die Lage zählt zu den wichtigsten Einflussfaktoren einer Immobilie. Eine fundierte Standortanalyse hilft dabei, Chancen, Risiken und langfristige Entwicklungen besser einzuschätzen.",
    heroBtnPrimary: "Standortanalyse starten",
    heroBtnSecondary: "Kontakt aufnehmen",
    sectionWhyLabel: "Einordnung",
    sectionWhyHeadline: "Warum die Lage entscheidend ist",
    whyCards: [
      {
        title: "Makrolage",
        description: "Regionale Wirtschafts- und Bevölkerungsentwicklung.",
      },
      {
        title: "Mikrolage",
        description: "Direktes Umfeld und Nachbarschaft.",
      },
      {
        title: "Infrastruktur",
        description: "Verkehrsanbindung, Schulen und Versorgung.",
      },
      {
        title: "Zukunftspotenzial",
        description: "Langfristige Entwicklungsmöglichkeiten.",
      },
    ],
    sectionConsiderLabel: "Standortfaktoren",
    sectionConsiderHeadline: "Welche Faktoren berücksichtigt immowap?",
    considerCards: [
      {
        title: "Makrolage",
        description:
          "Regionale Rahmenbedingungen, Wirtschaftsstruktur und demografische Entwicklung im Bewertungskontext.",
      },
      {
        title: "Mikrolage",
        description: "Unmittelbares Umfeld, Nachbarschaftsqualität und objektspezifische Lagevorteile.",
      },
      {
        title: "Verkehrsanbindung",
        description: "Erreichbarkeit, ÖPNV, Straßenanbindung und Mobilitätsinfrastruktur.",
      },
      {
        title: "Demografische Entwicklung",
        description: "Bevölkerungsentwicklung, Haushaltsstruktur und regionale Nachfrage.",
      },
      {
        title: "Arbeitsmarkt und Wirtschaft",
        description: "Beschäftigung, Wirtschaftskraft und regionale Wettbewerbsfähigkeit.",
      },
      {
        title: "Entwicklungspotenziale",
        description: "Städtebauliche Planung, Infrastrukturprojekte und langfristige Perspektiven.",
      },
    ],
    sectionQuestionsLabel: "Fragestellungen",
    sectionQuestionsHeadline: "Typische Fragestellungen",
    questionCards: [
      "Ist die Lage langfristig attraktiv?",
      "Wie entwickelt sich die Region?",
      "Welche Infrastruktur ist vorhanden?",
      "Besteht ein Vermietungspotenzial?",
      "Welche Risiken bestehen?",
      "Wie beeinflusst die Lage den Wert?",
    ],
    sectionProcessLabel: "Ablauf",
    sectionProcessHeadline: "Bestandteile einer Standortanalyse",
    processSteps: [
      { title: "Region verstehen", description: "Makrolage und regionale Rahmenbedingungen." },
      { title: "Mikrolage analysieren", description: "Unmittelbares Umfeld und Nachbarschaft." },
      { title: "Marktdaten bewerten", description: "Nachfrage, Angebot und Marktentwicklung." },
      { title: "Chancen und Risiken einordnen", description: "Standortbezogene Stärken und Unsicherheiten." },
      {
        title: "Entscheidungsgrundlagen ableiten",
        description: "Nachvollziehbare Zusammenfassung für die Entscheidung.",
      },
    ],
    sectionOverviewHeadline: "Einflussfaktoren auf den Standort",
    overviewCards: [
      {
        title: "Bevölkerungsentwicklung",
        description: "Demografischer Wandel und regionale Bevölkerungsdynamik.",
      },
      {
        title: "Wirtschaftskraft",
        description: "Regionale Wirtschaftsstruktur und Kaufkraft.",
      },
      {
        title: "Verkehrsanbindung",
        description: "Erreichbarkeit und Mobilitätsinfrastruktur.",
      },
      {
        title: "Bildungseinrichtungen",
        description: "Schulen, Kitas und Bildungsangebote in der Nähe.",
      },
      {
        title: "Freizeit und Nahversorgung",
        description: "Einkaufsmöglichkeiten, Grünflächen und Freizeitangebote.",
      },
      {
        title: "Städtebauliche Entwicklung",
        description: "Planung, Infrastrukturprojekte und städtebauliche Perspektiven.",
      },
    ],
    sectionDiffLabel: "Perspektive",
    sectionDiffHeadline: "Der Unterschied von immowap",
    diffCards: [
      {
        title: "Standardbetrachtung",
        description: "Oft wird die Lage nur oberflächlich bewertet.",
      },
      {
        title: "Ganzheitliche Analyse",
        description: "immowap verbindet Markt, Lage und individuelle Ziele.",
      },
      {
        title: "Nachvollziehbare Entscheidungsgrundlagen",
        description: "Keine pauschalen Aussagen, sondern objektive Analysen.",
      },
    ],
  },
  en: {
    breadcrumbCurrent: "Location analysis",
    heroLabel: "Analyses",
    heroHeadline: "Real Estate Location Analysis",
    heroSubheadline: "Understand locations and identify long-term potential.",
    heroText:
      "Location is one of the most important factors affecting real estate value. A structured location analysis helps assess opportunities, risks and future developments.",
    heroBtnPrimary: "Start location analysis",
    heroBtnSecondary: "Contact us",
    sectionWhyLabel: "Context",
    sectionWhyHeadline: "Why location matters",
    whyCards: [
      {
        title: "Macro location",
        description: "Regional economic and demographic trends.",
      },
      {
        title: "Micro location",
        description: "Immediate surroundings and neighborhood quality.",
      },
      {
        title: "Infrastructure",
        description: "Transport links, schools and daily amenities.",
      },
      {
        title: "Future potential",
        description: "Long-term development prospects.",
      },
    ],
    sectionConsiderLabel: "Location factors",
    sectionConsiderHeadline: "Which factors does immowap consider?",
    considerCards: [
      {
        title: "Macro location",
        description:
          "Regional framework conditions, economic structure and demographic development in the valuation context.",
      },
      {
        title: "Micro location",
        description: "Immediate surroundings, neighborhood quality and property-specific location advantages.",
      },
      {
        title: "Accessibility",
        description: "Reachability, public transport, road links and mobility infrastructure.",
      },
      {
        title: "Demographic trends",
        description: "Population development, household structure and regional demand.",
      },
      {
        title: "Employment and economy",
        description: "Employment, economic strength and regional competitiveness.",
      },
      {
        title: "Future development potential",
        description: "Urban planning, infrastructure projects and long-term prospects.",
      },
    ],
    sectionQuestionsLabel: "Questions",
    sectionQuestionsHeadline: "Typical questions",
    questionCards: [
      "Is the location attractive in the long term?",
      "How is the region developing?",
      "What infrastructure is available?",
      "Is there strong rental demand?",
      "What risks should be considered?",
      "How does location affect value?",
    ],
    sectionProcessLabel: "Process",
    sectionProcessHeadline: "Components of a location analysis",
    processSteps: [
      { title: "Understand the region", description: "Macro location and regional framework conditions." },
      { title: "Analyse the micro location", description: "Immediate surroundings and neighborhood." },
      { title: "Evaluate market data", description: "Demand, supply and market development." },
      { title: "Assess opportunities and risks", description: "Location-specific strengths and uncertainties." },
      {
        title: "Develop decision support",
        description: "Traceable summary for decision-making.",
      },
    ],
    sectionOverviewHeadline: "Location drivers",
    overviewCards: [
      { title: "Population growth", description: "Demographic change and regional population dynamics." },
      { title: "Economic strength", description: "Regional economic structure and purchasing power." },
      { title: "Transportation", description: "Accessibility and mobility infrastructure." },
      { title: "Educational facilities", description: "Schools, childcare and educational offerings nearby." },
      { title: "Leisure and amenities", description: "Retail, green spaces and leisure opportunities." },
      { title: "Urban development", description: "Planning, infrastructure projects and urban perspectives." },
    ],
    sectionDiffLabel: "Perspective",
    sectionDiffHeadline: "The immowap difference",
    diffCards: [
      {
        title: "Standard approach",
        description: "Traditional approaches often focus on simplified location assessments.",
      },
      {
        title: "Holistic analysis",
        description:
          "immowap combines market factors, location quality and personal objectives.",
      },
      {
        title: "Transparent decision support",
        description:
          "No one-size-fits-all recommendations but transparent and objective assessments.",
      },
    ],
  },
} as const satisfies Record<Locale, AnalysisSolutionCopy>;

export function StandortanalysePage({ locale }: StandortanalysePageProps) {
  return (
    <AnalysisSolutionLayout
      locale={locale}
      pageKey="standortanalyse"
      visual="location"
      c={copy[locale]}
    />
  );
}
