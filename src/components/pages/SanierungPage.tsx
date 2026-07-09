import { GoalSolutionLayout, type GoalSolutionCopy } from "@/components/solutions/GoalSolutionLayout";
import type { Locale } from "@/lib/i18n/config";

interface SanierungPageProps {
  locale: Locale;
}

const de = {
    heroLabel: "Für Ihre Ziele",
    heroHeadline: "Projekte entwickeln. Potenziale realisieren.",
    heroSubheadline:
      "Projektentwicklung verbindet Grundstücke, Neubau, Umbau und Nachverdichtung mit klaren wirtschaftlichen Zielen – von der ersten Idee bis zur Exit-Strategie.",
    heroBtnPrimary: "Analyse starten",
    heroBtnSecondary: "Anfrage senden",
    section1Headline: "Vom Grundstück bis zur Entscheidung.",
    section1Text:
      "Ob Neubau, Aufteilung, Umbau oder Bauträgerprojekt: Entscheidend sind Standort, Genehmigungslage, Wirtschaftlichkeit und ein realistischer Exit. Diese Faktoren sollten strukturiert zusammen betrachtet werden.",
    section2Label: "Typische Herausforderungen",
    section2Headline: "Was wir berücksichtigen",
    considerationCards: [
      {
        title: "Grundstücke",
        description:
          "Bewertung von Lage, Bebauungsplan, Erschließung und Entwicklungsfähigkeit als Basis jeder Projektentscheidung.",
      },
      {
        title: "Neubau & Umbau",
        description:
          "Einordnung von Baukonzept, Kostenrahmen, Zeitplan und technischen Anforderungen im jeweiligen Marktkontext.",
      },
      {
        title: "Aufteilung & Nachverdichtung",
        description:
          "Prüfung von Teilungs- und Verdichtungspotenzialen – rechtlich, baulich und wirtschaftlich.",
      },
      {
        title: "Bauträgerprojekte",
        description:
          "Strukturierte Betrachtung von Projektstruktur, Risikoverteilung, Vertrieb und Finanzierung im Bauträgerkontext.",
      },
      {
        title: "Wirtschaftlichkeit",
        description:
          "Realistische Kalkulation von Kosten, Erträgen, Rendite und Sensitivitäten für belastbare Entscheidungen.",
      },
      {
        title: "Exit-Strategien",
        description:
          "Frühzeitige Klärung, ob Verkauf, Bestandshaltung oder Teilveräußerung zum Projektziel passt.",
      },
    ],
    section3Headline: "Strukturierte Projektentscheidungen statt Bauchgefühl",
    section3Text:
      "Durch ganzheitliche Analysen lassen sich Chancen, Risiken und wirtschaftliche Potenziale frühzeitig erkennen – bevor Kapital gebunden wird.",
    section3Btn: "Mehr über unsere Analysen",
    section4Label: "Analyse",
    section4Headline: "Relevante Analysen",
    cardLink: "Mehr erfahren",
    analysisCards: [
      {
        title: "Marktwertanalyse",
        description: "Einordnung von Grundstück, Bestand und geplantem Ergebnis im Marktumfeld.",
        href: "/de/loesungen/marktwertanalyse",
      },
      {
        title: "Risikoanalyse",
        description: "Identifikation baulicher, regulatorischer und wirtschaftlicher Projektunsicherheiten.",
        href: "/de/loesungen/analysen/risikoanalyse",
      },
      {
        title: "Dokumentenanalyse",
        description: "Auswertung von Bebauungsplan, Gutachten, Kalkulationen und Vertragsunterlagen.",
        href: "/de/loesungen/analysen/dokumentenanalyse",
      },
      {
        title: "Individuelle Immobilienanalyse",
        description: "Projektspezifische Bewertung entlang Ihrer Ziele und Exit-Strategie.",
        href: "/de/loesungen/analysen/individuelle-immobilienanalyse",
      },
    ],
    section5Label: "Erwartete Ergebnisse",
    section5Headline: "Typische Entwicklungsvorhaben",
    strategyCards: [
      {
        title: "Neubau",
        description:
          "Neue Wohn- oder Nutzflächen auf entwickelten Grundstücken – mit Fokus auf Markt, Kosten und Vermarktbarkeit.",
      },
      {
        title: "Aufteilung",
        description:
          "Aufteilung bestehender Gebäude in Einheiten – als strategischer Hebel für Verkauf oder langfristigen Bestand.",
      },
      {
        title: "Nachverdichtung",
        description:
          "Zusätzliche Flächen durch Aufstockung, Anbau oder Umnutzung – unter Berücksichtigung von Genehmigung und Wirtschaftlichkeit.",
      },
      {
        title: "Verkauf oder Bestand",
        description:
          "Abwägung zwischen sofortigem Verkauf, Halten im Portfolio und gestaffelter Exit-Strategie.",
      },
    ],
    section6Label: "Was uns unterscheidet",
    section6Headline: "Jedes Projekt verfolgt ein anderes Ziel.",
    section6Text:
      "Ob Bauträgerprojekt, Bestandsentwicklung oder individuelle Grundstücksentwicklung – immowap betrachtet jedes Vorhaben im Zusammenhang mit Wirtschaftlichkeit, Risiko und persönlicher Strategie.",
    section6TextSecondary:
      "Es gibt keine Standardlösung. Jede Analyse orientiert sich am konkreten Projekt, den Rahmenbedingungen und der geplanten Exit-Strategie.",
    section6ListLabel: "Jede Analyse basiert auf",
    section6Items: [
      "Projektziel und Exit",
      "Standort und Genehmigungslage",
      "Wirtschaftlichkeit und Potenziale",
      "Individuellen Rahmenbedingungen",
    ],
    section7Headline: "Potenziale erkennen. Entscheidungen fundieren.",
    principleCards: [
      {
        number: "01",
        title: "Wirtschaftlichkeit zuerst",
        description:
          "Fokus auf realistische Kalkulation, Sensitivitäten und nachvollziehbare Renditeperspektiven.",
      },
      {
        number: "02",
        title: "Strukturierte Projektplanung",
        description:
          "Ganzheitliche Betrachtung von Grundstück, Bauprojekt, Finanzierung und Exit – statt isolierter Einzelentscheidungen.",
      },
      {
        number: "03",
        title: "Individuelle Einordnung",
        description:
          "Jedes Vorhaben wird im jeweiligen Markt- und Projektkontext bewertet – transparent und nachvollziehbar.",
      },
    ],
};

const en = {
    heroLabel: "For your goals",
    heroHeadline: "Develop projects. Realise potential.",
    heroSubheadline:
      "Project development connects land, new build, conversion and densification with clear economic goals – from the first idea to the exit strategy.",
    heroBtnPrimary: "Start analysis",
    heroBtnSecondary: "Send enquiry",
    section1Headline: "From land to decision.",
    section1Text:
      "Whether new build, subdivision, conversion or developer project: location, planning status, economic viability and a realistic exit are decisive. These factors should be assessed together in a structured way.",
    section2Label: "Typical challenges",
    section2Headline: "What we take into account",
    considerationCards: [
      {
        title: "Land",
        description:
          "Assessment of location, zoning, infrastructure and development potential as the basis of every project decision.",
      },
      {
        title: "New build & conversion",
        description:
          "Classification of building concept, cost framework, timeline and technical requirements in the relevant market context.",
      },
      {
        title: "Subdivision & densification",
        description:
          "Review of subdivision and densification potential – legally, structurally and economically.",
      },
      {
        title: "Developer projects",
        description:
          "Structured review of project structure, risk allocation, sales and financing in a developer context.",
      },
      {
        title: "Economic viability",
        description:
          "Realistic calculation of costs, income, returns and sensitivities for robust decisions.",
      },
      {
        title: "Exit strategies",
        description:
          "Early clarification of whether sale, retention or partial disposal fits the project goal.",
      },
    ],
    section3Headline: "Structured project decisions instead of gut feeling",
    section3Text:
      "Holistic analyses help identify opportunities, risks and economic potential early – before capital is committed.",
    section3Btn: "Learn more about our analyses",
    section4Label: "Analysis",
    section4Headline: "Relevant analyses",
    cardLink: "Learn more",
    analysisCards: [
      {
        title: "Market value analysis",
        description: "Assessment of land, existing stock and planned outcome in the market environment.",
        href: "/en/solutions/market-value-analysis",
      },
      {
        title: "Risk analysis",
        description: "Identification of structural, regulatory and economic project uncertainties.",
        href: "/en/solutions/analyses/risk-analysis",
      },
      {
        title: "Document analysis",
        description: "Review of zoning plans, surveys, calculations and contract documents.",
        href: "/en/solutions/analyses/document-analysis",
      },
      {
        title: "Individual property analysis",
        description: "Project-specific assessment aligned with your goals and exit strategy.",
        href: "/en/solutions/analyses/individual-property-analysis",
      },
    ],
    section5Label: "Expected outcomes",
    section5Headline: "Typical development projects",
    strategyCards: [
      {
        title: "New build",
        description:
          "New residential or commercial space on developed land – with a focus on market, costs and marketability.",
      },
      {
        title: "Subdivision",
        description:
          "Splitting existing buildings into units – as a strategic lever for sale or long-term retention.",
      },
      {
        title: "Densification",
        description:
          "Additional space through extensions, roof additions or change of use – considering permits and viability.",
      },
      {
        title: "Sale or retention",
        description:
          "Weighing immediate sale, portfolio retention and a phased exit strategy.",
      },
    ],
    section6Label: "What sets us apart",
    section6Headline: "Every project pursues a different goal.",
    section6Text:
      "Whether a developer project, stock development or individual land development – immowap considers every venture in relation to viability, risk and personal strategy.",
    section6TextSecondary:
      "There is no standard solution. Every analysis is based on the specific project, framework conditions and planned exit strategy.",
    section6ListLabel: "Every analysis is based on",
    section6Items: [
      "Project goal and exit",
      "Location and planning status",
      "Viability and potential",
      "Individual framework conditions",
    ],
    section7Headline: "Recognise potential. Make informed decisions.",
    principleCards: [
      {
        number: "01",
        title: "Viability first",
        description:
          "Focus on realistic calculation, sensitivities and traceable return perspectives.",
      },
      {
        number: "02",
        title: "Structured project planning",
        description:
          "Holistic view of land, build, financing and exit – instead of isolated individual decisions.",
      },
      {
        number: "03",
        title: "Individual assessment",
        description:
          "Every project is evaluated in its market and project context – transparently and traceably.",
      },
    ],
};

const copy = { de, en } satisfies Record<Locale, GoalSolutionCopy>;

export function SanierungPage({ locale }: SanierungPageProps) {
  return (
    <GoalSolutionLayout
      locale={locale}
      pageKey="sanierung"
      visual="renovation"
      strategyIcons={["building", "renovation", "strategy", "investment"]}
      c={copy[locale]}
    />
  );
}
