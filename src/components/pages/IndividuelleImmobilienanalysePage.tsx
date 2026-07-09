import { AnalysisSolutionLayout, type AnalysisSolutionCopy } from "@/components/solutions/AnalysisSolutionLayout";
import type { Locale } from "@/lib/i18n/config";

interface IndividuelleImmobilienanalysePageProps {
  locale: Locale;
}

const copy = {
  de: {
    breadcrumbCurrent: "Individuelle Immobilienanalyse",
    heroLabel: "Analysen",
    heroHeadline: "Individuelle Immobilienanalyse",
    heroSubheadline: "Jede Immobilie. Jede Situation. Jede Entscheidung ist einzigartig.",
    heroText:
      "Standardlösungen werden komplexen Immobilienentscheidungen häufig nicht gerecht. Eine individuelle Immobilienanalyse berücksichtigt nicht nur die Immobilie selbst, sondern auch persönliche Ziele, finanzielle Rahmenbedingungen und langfristige Strategien.",
    heroBtnPrimary: "Analyse starten",
    heroBtnSecondary: "Kontakt aufnehmen",
    sectionWhyLabel: "Einordnung",
    sectionWhyHeadline: "Warum individuelle Analysen wichtig sind",
    whyCards: [
      {
        title: "Persönliche Ziele",
        description: "Eigennutzung, Kapitalanlage oder langfristiger Vermögensaufbau.",
      },
      {
        title: "Individuelle Rahmenbedingungen",
        description: "Finanzierung, Eigenkapital und Zeithorizont.",
      },
      {
        title: "Ganzheitliche Betrachtung",
        description: "Objekt, Markt, Lage und Risiken werden gemeinsam betrachtet.",
      },
      {
        title: "Bessere Entscheidungen",
        description: "Fundierte Entscheidungsgrundlagen statt pauschaler Aussagen.",
      },
    ],
    sectionConsiderLabel: "Perspektive",
    sectionConsiderHeadline: "Was berücksichtigt immowap?",
    considerCards: [
      {
        title: "Persönliche Ziele",
        description: "Eigennutzung, Kapitalanlage oder langfristige Vermögensstrategie.",
      },
      {
        title: "Finanzielle Situation",
        description: "Eigenkapital, Finanzierung und langfristige Tragfähigkeit.",
      },
      {
        title: "Marktumfeld",
        description: "Angebot, Nachfrage und Marktentwicklung im Bewertungskontext.",
      },
      {
        title: "Standort und Lage",
        description: "Makro- und Mikrolage als zentrale Wertfaktoren nach ImmoWertV.",
      },
      {
        title: "Risiken und Chancen",
        description: "Objekt-, Markt- und finanzierungsbezogene Unsicherheiten.",
      },
      {
        title: "Langfristige Strategie",
        description: "Zeithorizont, Nutzungsplanung und persönliche Prioritäten.",
      },
    ],
    sectionQuestionsLabel: "Fragestellungen",
    sectionQuestionsHeadline: "Typische Fragestellungen",
    questionCards: [
      "Passt die Immobilie zu meinen Zielen?",
      "Ist die Finanzierung langfristig tragfähig?",
      "Welche Risiken bestehen?",
      "Ist die Immobilie überbewertet?",
      "Welche Strategie ist sinnvoll?",
      "Wie entwickelt sich die Immobilie langfristig?",
    ],
    sectionProcessLabel: "Ablauf",
    sectionProcessHeadline: "Der Analyseprozess",
    processSteps: [
      { title: "Ziele verstehen", description: "Individuelle Zielsetzung und Prioritäten." },
      { title: "Rahmenbedingungen analysieren", description: "Finanzierung, Zeithorizont und persönliche Situation." },
      { title: "Objekt und Markt bewerten", description: "Immobilie, Lage und Marktumfeld im Bewertungskontext." },
      { title: "Risiken und Chancen einordnen", description: "Stärken, Schwächen und Unsicherheiten." },
      {
        title: "Individuelle Entscheidungsgrundlagen ableiten",
        description: "Nachvollziehbare Zusammenfassung für die persönliche Entscheidung.",
      },
    ],
    sectionOverviewHeadline: "Für wen eignet sich die Analyse?",
    overviewCards: [
      { title: "Eigennutzer", description: "Entscheidungen zur Eigennutzung und langfristigen Bindung." },
      { title: "Kapitalanleger", description: "Rendite, Risiko und langfristige Perspektive." },
      { title: "Fix-&-Flip-Projekte", description: "Kurzfristige Strategien mit klarer Wirtschaftlichkeit." },
      { title: "Sanierungsobjekte", description: "Zustand, Investitionsbedarf und Wertpotenzial." },
      { title: "Individuelle Strategie", description: "Maßgeschneiderte Betrachtung für persönliche Ziele und Portfolioentwicklung." },
      { title: "Gewerbeimmobilien", description: "Nutzungsspezifische Bewertung und Marktlogik." },
    ],
    sectionDiffLabel: "Perspektive",
    sectionDiffHeadline: "Der Unterschied von immowap",
    diffCards: [
      {
        title: "Standardlösungen",
        description: "Viele Bewertungen orientieren sich ausschließlich an Durchschnittswerten.",
      },
      {
        title: "Ganzheitliche Betrachtung",
        description:
          "immowap verbindet Markt, Objekt, Finanzierung, Risiken und individuelle Ziele.",
      },
      {
        title: "Nachvollziehbare Entscheidungsgrundlagen",
        description: "Keine pauschalen Empfehlungen, sondern nachvollziehbare Analysen.",
      },
    ],
  },
  en: {
    breadcrumbCurrent: "Individual property analysis",
    heroLabel: "Analyses",
    heroHeadline: "Individual Real Estate Analysis",
    heroSubheadline: "Every property. Every situation. Every decision is unique.",
    heroText:
      "Complex real estate decisions require more than standard solutions. An individual analysis considers not only the property itself but also personal objectives, financial circumstances and long-term strategies.",
    heroBtnPrimary: "Start analysis",
    heroBtnSecondary: "Contact us",
    sectionWhyLabel: "Context",
    sectionWhyHeadline: "Why individual analysis matters",
    whyCards: [
      {
        title: "Personal objectives",
        description: "Owner-occupation, investment or long-term wealth creation.",
      },
      {
        title: "Individual circumstances",
        description: "Financing, equity and investment horizon.",
      },
      {
        title: "Holistic perspective",
        description: "Property, market, location and risks are evaluated together.",
      },
      {
        title: "Better decisions",
        description: "Structured analysis instead of one-size-fits-all recommendations.",
      },
    ],
    sectionConsiderLabel: "Perspective",
    sectionConsiderHeadline: "What does immowap consider?",
    considerCards: [
      {
        title: "Personal objectives",
        description: "Owner-occupation, investment or long-term wealth strategy.",
      },
      {
        title: "Financial situation",
        description: "Equity, financing and long-term affordability.",
      },
      {
        title: "Market environment",
        description: "Supply, demand and market development in the valuation context.",
      },
      {
        title: "Location factors",
        description: "Macro and micro location as key value drivers under ImmoWertV principles.",
      },
      {
        title: "Risks and opportunities",
        description: "Property-, market- and financing-related uncertainties.",
      },
      {
        title: "Long-term strategy",
        description: "Time horizon, intended use and personal priorities.",
      },
    ],
    sectionQuestionsLabel: "Questions",
    sectionQuestionsHeadline: "Typical questions",
    questionCards: [
      "Does the property fit my objectives?",
      "Is the financing sustainable?",
      "What risks should be considered?",
      "Is the property overpriced?",
      "Which strategy may be appropriate?",
      "How could the property evolve over time?",
    ],
    sectionProcessLabel: "Process",
    sectionProcessHeadline: "The analysis process",
    processSteps: [
      { title: "Understand objectives", description: "Individual goals and priorities." },
      { title: "Analyse individual circumstances", description: "Financing, time horizon and personal situation." },
      { title: "Evaluate property and market", description: "Property, location and market in the valuation context." },
      { title: "Assess risks and opportunities", description: "Strengths, weaknesses and uncertainties." },
      {
        title: "Develop individual decision support",
        description: "Traceable summary for personal decision-making.",
      },
    ],
    sectionOverviewHeadline: "Who is this analysis for?",
    overviewCards: [
      { title: "Owner-occupiers", description: "Decisions on owner-occupation and long-term commitment." },
      { title: "Investors", description: "Returns, risk and long-term perspective." },
      { title: "Fix & flip projects", description: "Short-term strategies with clear economics." },
      { title: "Renovation projects", description: "Condition, investment needs and value potential." },
      { title: "Individual Strategy", description: "Tailored assessment for personal goals and portfolio development." },
      { title: "Commercial real estate", description: "Use-specific valuation and market logic." },
    ],
    sectionDiffLabel: "Perspective",
    sectionDiffHeadline: "The immowap difference",
    diffCards: [
      {
        title: "Standard solutions",
        description: "Many analyses rely only on average assumptions.",
      },
      {
        title: "Holistic perspective",
        description:
          "immowap combines market conditions, property characteristics, financing, risks and personal objectives.",
      },
      {
        title: "Transparent decision support",
        description: "No one-size-fits-all recommendations but transparent and objective assessments.",
      },
    ],
  },
} as const satisfies Record<Locale, AnalysisSolutionCopy>;

export function IndividuelleImmobilienanalysePage({
  locale,
}: IndividuelleImmobilienanalysePageProps) {
  return (
    <AnalysisSolutionLayout
      locale={locale}
      pageKey="individuelle-immobilienanalyse"
      visual="dashboard"
      c={copy[locale]}
    />
  );
}
