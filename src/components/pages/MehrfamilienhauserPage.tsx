import { GoalSolutionLayout, type GoalSolutionCopy } from "@/components/solutions/GoalSolutionLayout";
import type { Locale } from "@/lib/i18n/config";

interface MehrfamilienhauserPageProps {
  locale: Locale;
}

const de = {
    heroLabel: "Für Ihre Ziele",
    heroHeadline: "Ihre Strategie. Kein Standard.",
    heroSubheadline:
      "Individuelle Strategie richtet sich an Nutzer, die keine pauschale Lösung suchen – sondern Vermögensaufbau, Portfolioentwicklung und langfristige Ziele im eigenen Tempo verfolgen.",
    heroBtnPrimary: "Analyse starten",
    heroBtnSecondary: "Anfrage senden",
    section1Headline: "Mehr als ein Objekttyp – ein persönlicher Weg.",
    section1Text:
      "Ob Fix & Hold, Kombination verschiedener Ansätze oder Optimierung bestehender Bestände: Entscheidend sind Ihre Ziele, Ihr Risikoprofil und Ihr Zeithorizont – nicht vorgegebene Produktlogiken.",
    section2Label: "Typische Herausforderungen",
    section2Headline: "Was wir berücksichtigen",
    considerationCards: [
      {
        title: "Vermögensaufbau",
        description:
          "Langfristige Entwicklung persönlichen Vermögens durch Immobilien – strukturiert und zielgerichtet.",
      },
      {
        title: "Finanzielle Unabhängigkeit",
        description:
          "Einordnung, wie Immobilienentscheidungen Einkommen, Sicherheit und Freiräume über die Zeit beeinflussen.",
      },
      {
        title: "Portfolioaufbau",
        description:
          "Schrittweiser Aufbau und Diversifikation eines Immobilienportfolios entlang individueller Prioritäten.",
      },
      {
        title: "Fix & Hold",
        description:
          "Bewertung langfristiger Haltestrategien mit Fokus auf Stabilität, Cashflow und Werthaltigkeit.",
      },
      {
        title: "Strategiekombination",
        description:
          "Verbindung unterschiedlicher Ansätze – etwa Eigennutzung, Kapitalanlage und gezielte Entwicklung.",
      },
      {
        title: "Bestandsoptimierung",
        description:
          "Analyse und Verbesserung bestehender Immobilien im Hinblick auf Ertrag, Substanz und langfristige Ziele.",
      },
    ],
    section3Headline: "Individuelle Analyse statt Standardempfehlung",
    section3Text:
      "Durch strukturierte Auswertungen lassen sich Chancen, Risiken und passende Strategieoptionen transparent darstellen – als Grundlage für fundierte Entscheidungen.",
    section3Btn: "Mehr über unsere Analysen",
    section4Label: "Analyse",
    section4Headline: "Relevante Analysen",
    cardLink: "Mehr erfahren",
    analysisCards: [
      {
        title: "Individuelle Immobilienanalyse",
        description: "Ganzheitliche Betrachtung im Kontext Ihrer persönlichen Ziele.",
        href: "/de/loesungen/analysen/individuelle-immobilienanalyse",
      },
      {
        title: "Risikoanalyse",
        description: "Frühzeitige Identifikation von Unsicherheiten entlang Ihrer Strategie.",
        href: "/de/loesungen/analysen/risikoanalyse",
      },
      {
        title: "Marktvergleich",
        description: "Einordnung von Objekten und Szenarien im aktuellen Marktumfeld.",
        href: "/de/loesungen/analysen/vergleichswertverfahren",
      },
      {
        title: "Dokumentenanalyse",
        description: "Strukturierte Auswertung vorhandener Unterlagen und Bestandsinformationen.",
        href: "/de/loesungen/analysen/dokumentenanalyse",
      },
    ],
    section5Label: "Erwartete Ergebnisse",
    section5Headline: "Typische Ausrichtungen",
    strategyCards: [
      {
        title: "Langfristige Ziele",
        description:
          "Immobilienentscheidungen entlang persönlicher Lebens- und Vermögensplanung – nicht kurzfristiger Trends.",
      },
      {
        title: "Portfolioaufbau",
        description:
          "Schrittweiser Aufbau eines stabilen Immobilienportfolios mit klarer Struktur und Diversifikation.",
      },
      {
        title: "Fix & Hold",
        description:
          "Langfristiges Halten mit Fokus auf nachhaltige Erträge, Werthaltigkeit und strategischer Bestandsentwicklung.",
      },
      {
        title: "Entscheidungsfindung",
        description:
          "Individuelle Analyse und transparente Abwägung – wenn keine Standardlösung passt.",
      },
    ],
    section6Label: "Was uns unterscheidet",
    section6Headline: "Jede Strategie beginnt mit Ihren Zielen.",
    section6Text:
      "Ob Vermögensaufbau, finanzielle Unabhängigkeit oder Optimierung bestehender Immobilien – immowap betrachtet Entscheidungen immer im Zusammenhang mit Ihrem individuellen Kontext.",
    section6TextSecondary:
      "Es gibt keine Standardlösungen. Jede Analyse orientiert sich an Ihren Prioritäten, Ihrem Risikoprofil und Ihrem langfristigen Horizont.",
    section6ListLabel: "Jede Analyse basiert auf",
    section6Items: [
      "Individuellen Zielen",
      "Risikoprofil",
      "Langfristigen Prioritäten",
      "Bestehendem Portfolio",
    ],
    section7Headline: "Klarheit schafft bessere Entscheidungen.",
    principleCards: [
      {
        number: "01",
        title: "Persönliche Ausrichtung",
        description:
          "Fokus auf Ihre Ziele statt auf vorgefertigte Produktempfehlungen – nachvollziehbar und individuell.",
      },
      {
        number: "02",
        title: "Transparente Grundlagen",
        description:
          "Strukturierte Analysen und Szenarien statt pauschaler Einschätzungen – als Basis für Entscheidungen.",
      },
      {
        number: "03",
        title: "Langfristige Perspektive",
        description:
          "Betrachtung über einzelne Objekte hinaus – im Kontext Ihrer gesamten Immobilienstrategie.",
      },
    ],
};

const en = {
    heroLabel: "For your goals",
    heroHeadline: "Your strategy. No standard template.",
    heroSubheadline:
      "Individual strategy is for users who are not looking for a one-size-fits-all solution – but want to pursue wealth building, portfolio development and long-term goals at their own pace.",
    heroBtnPrimary: "Start analysis",
    heroBtnSecondary: "Send enquiry",
    section1Headline: "More than a property type – a personal path.",
    section1Text:
      "Whether fix & hold, combining different approaches or optimising existing stock: what matters are your goals, risk profile and time horizon – not predefined product logic.",
    section2Label: "Typical challenges",
    section2Headline: "What we take into account",
    considerationCards: [
      {
        title: "Wealth building",
        description:
          "Long-term development of personal wealth through property – structured and goal-oriented.",
      },
      {
        title: "Financial independence",
        description:
          "Assessment of how property decisions affect income, security and flexibility over time.",
      },
      {
        title: "Portfolio building",
        description:
          "Step-by-step development and diversification of a property portfolio aligned with individual priorities.",
      },
      {
        title: "Fix & hold",
        description:
          "Evaluation of long-term retention strategies with a focus on stability, cash flow and value retention.",
      },
      {
        title: "Strategy combination",
        description:
          "Combining different approaches – such as owner-occupation, investment and targeted development.",
      },
      {
        title: "Stock optimisation",
        description:
          "Analysis and improvement of existing properties with regard to income, substance and long-term goals.",
      },
    ],
    section3Headline: "Individual analysis instead of standard recommendations",
    section3Text:
      "Structured evaluations make opportunities, risks and suitable strategy options transparent – as a basis for well-founded decisions.",
    section3Btn: "Learn more about our analyses",
    section4Label: "Analysis",
    section4Headline: "Relevant analyses",
    cardLink: "Learn more",
    analysisCards: [
      {
        title: "Individual property analysis",
        description: "Holistic assessment in the context of your personal goals.",
        href: "/en/solutions/analyses/individual-property-analysis",
      },
      {
        title: "Risk analysis",
        description: "Early identification of uncertainties along your strategy.",
        href: "/en/solutions/analyses/risk-analysis",
      },
      {
        title: "Market comparison",
        description: "Assessment of properties and scenarios in the current market environment.",
        href: "/en/solutions/analyses/sales-comparison-approach",
      },
      {
        title: "Document analysis",
        description: "Structured evaluation of available documents and portfolio information.",
        href: "/en/solutions/analyses/document-analysis",
      },
    ],
    section5Label: "Expected outcomes",
    section5Headline: "Typical orientations",
    strategyCards: [
      {
        title: "Long-term goals",
        description:
          "Property decisions aligned with personal life and wealth planning – not short-term trends.",
      },
      {
        title: "Portfolio building",
        description:
          "Step-by-step development of a stable property portfolio with clear structure and diversification.",
      },
      {
        title: "Fix & hold",
        description:
          "Long-term retention with a focus on sustainable income, value retention and strategic stock development.",
      },
      {
        title: "Decision-making",
        description:
          "Individual analysis and transparent weighing of options – when no standard solution fits.",
      },
    ],
    section6Label: "What sets us apart",
    section6Headline: "Every strategy starts with your goals.",
    section6Text:
      "Whether wealth building, financial independence or optimising existing properties – immowap always considers decisions in relation to your individual context.",
    section6TextSecondary:
      "There are no standard solutions. Every analysis is based on your priorities, risk profile and long-term horizon.",
    section6ListLabel: "Every analysis is based on",
    section6Items: [
      "Individual goals",
      "Risk profile",
      "Long-term priorities",
      "Existing portfolio",
    ],
    section7Headline: "Clarity leads to better decisions.",
    principleCards: [
      {
        number: "01",
        title: "Personal orientation",
        description:
          "Focus on your goals instead of off-the-shelf product recommendations – traceable and individual.",
      },
      {
        number: "02",
        title: "Transparent foundations",
        description:
          "Structured analyses and scenarios instead of blanket assessments – as a basis for decisions.",
      },
      {
        number: "03",
        title: "Long-term perspective",
        description:
          "View beyond individual properties – in the context of your overall property strategy.",
      },
    ],
};

const copy = { de, en } satisfies Record<Locale, GoalSolutionCopy>;

export function MehrfamilienhauserPage({ locale }: MehrfamilienhauserPageProps) {
  return (
    <GoalSolutionLayout
      locale={locale}
      pageKey="mehrfamilienhaeuser"
      visual="investment"
      strategyIcons={["investment", "strategy", "cashflow", "market-value"]}
      c={copy[locale]}
    />
  );
}
