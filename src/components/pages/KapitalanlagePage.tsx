import { GoalSolutionLayout, type GoalSolutionCopy } from "@/components/solutions/GoalSolutionLayout";
import type { Locale } from "@/lib/i18n/config";

interface KapitalanlagePageProps {
  locale: Locale;
}

const copy = {
  de: {
    heroLabel: "Für Ihre Ziele",
    heroHeadline: "Kapitalanlagen mit Struktur und Perspektive.",
    heroSubheadline:
      "Nicht jede Immobilie ist automatisch eine gute Investition. immowap unterstützt dabei, Chancen, Risiken und langfristige Perspektiven fundiert einzuordnen.",
    heroBtnPrimary: "Analyse starten",
    heroBtnSecondary: "Anfrage senden",
    section1Headline: "Nicht jede Rendite erzählt die ganze Geschichte.",
    section1Text:
      "Neben der Rendite spielen Lage, Entwicklungspotenzial, Risiken und persönliche Ziele eine entscheidende Rolle. Eine strukturierte Betrachtung hilft dabei, langfristige Chancen besser einzuordnen.",
    section2Label: "Typische Herausforderungen",
    section2Headline: "Was wir berücksichtigen",
    considerationCards: [
      { title: "Renditepotenzial", description: "Einordnung der erwarteten Rendite im Marktkontext – realistisch, nachvollziehbar und auf Ihre Ziele abgestimmt." },
      { title: "Cashflow", description: "Übersicht über Einnahmen, laufende Kosten und Liquidität – für eine solide Entscheidungsgrundlage." },
      { title: "Standortqualität", description: "Bewertung der Lage nach investmentrelevanten Kriterien: Entwicklungspotenzial, Nachfrage, Infrastruktur." },
      { title: "Risiken", description: "Frühzeitige Identifikation von Markt-, Objekt- und Finanzierungsrisiken für eine belastbare Entscheidung." },
      { title: "Wertentwicklung", description: "Einschätzung der langfristigen Wertentwicklung auf Basis von Marktdaten und Standortanalysen." },
      { title: "Finanzierung", description: "Strukturierung und Beurteilung der Finanzierung im Hinblick auf Tragbarkeit und langfristige Stabilität." },
    ],
    section3Headline: "Daten statt Bauchgefühl",
    section3Text:
      "immowap verbindet praktische Erfahrung mit datenbasierten Analysen und strukturierten Auswertungen. Dadurch entstehen nachvollziehbare Entscheidungsgrundlagen für langfristige Investitionen.",
    section3Btn: "Alle Lösungen",
    section4Label: "Analyse",
    section4Headline: "Relevante Analysen",
    cardLink: "Analyse ansehen",
    analysisCards: [
      { title: "Marktwertanalyse", description: "Fundierte Wertermittlung im Marktkontext.", href: "/de/loesungen/marktwertanalyse" },
      { title: "Ertragswertverfahren", description: "Langfristige Ertragsperspektiven und Cashflow-Einordnung.", href: "/de/loesungen/analysen/ertragswertverfahren" },
      { title: "Risikoanalyse", description: "Frühzeitige Identifikation möglicher Risiken und Unsicherheiten.", href: "/de/loesungen/analysen/risikoanalyse" },
      { title: "Standortanalyse", description: "Bewertung der Lage nach investmentrelevanten Kriterien.", href: "/de/loesungen/analysen/standortanalyse" },
      { title: "Dokumentenanalyse", description: "Strukturierte Auswertung von Exposés und Unterlagen.", href: "/de/loesungen/analysen/dokumentenanalyse" },
    ],
    section5Label: "Erwartete Ergebnisse",
    section5Headline: "Für unterschiedliche Strategien",
    strategyCards: [
      { title: "Langfristige Kapitalanlage", description: "Immobilien als strategische Vermögenskomponente mit langfristigem Wertsteigerungspotenzial." },
      { title: "Vermietete Immobilien", description: "Laufende Erträge durch strukturierte Beurteilung von Mietnachfrage und Cashflow." },
      { title: "Portfolioaufbau", description: "Diversifikation und strukturierter Aufbau eines nachhaltigen Immobilienportfolios." },
      { title: "Vermögenssicherung", description: "Immobilien als stabile Komponente zur langfristigen Sicherung und Erhaltung von Vermögen." },
    ],
    section6Label: "Methodik",
    section6Headline: "Jeder Investor verfolgt andere Ziele.",
    section6Text:
      "Ob laufender Cashflow, langfristiger Vermögensaufbau oder strategische Diversifikation – immowap betrachtet Immobilien immer im Zusammenhang mit den individuellen Erwartungen und Prioritäten.",
    section6TextSecondary:
      "Es gibt keine Standardlösungen. Jede Analyse orientiert sich am individuellen Kontext des Investors.",
    section6ListLabel: "Jede Analyse basiert auf",
    section6Items: ["Individuellen Zielen", "Risikobereitschaft", "Anlagehorizont", "Persönlichen Prioritäten"],
    section7Headline: "Langfristige Werte entstehen nicht zufällig.",
    principleCards: [
      { number: "01", title: "Nachhaltige Erträge", description: "Fokus auf Stabilität und langfristige Perspektiven statt kurzfristiger Optimierung." },
      { number: "02", title: "Transparente Entscheidungsgrundlagen", description: "Strukturierte Analysen statt pauschaler Einschätzungen – nachvollziehbar und individuell." },
      { number: "03", title: "Individuelle Betrachtung", description: "Jede Immobilie und jede Strategie werden im jeweiligen Kontext bewertet." },
    ],
  },
  en: {
    heroLabel: "For your goals",
    heroHeadline: "Investment properties with structure and perspective.",
    heroSubheadline:
      "Not every property is automatically a good investment. immowap helps to assess opportunities, risks and long-term perspectives in a well-founded way.",
    heroBtnPrimary: "Start analysis",
    heroBtnSecondary: "Send enquiry",
    section1Headline: "Not every yield tells the whole story.",
    section1Text:
      "Beyond yield, location, development potential, risks and personal goals play a decisive role. A structured assessment helps to better classify long-term opportunities.",
    section2Label: "Typical challenges",
    section2Headline: "What we take into account",
    considerationCards: [
      { title: "Yield potential", description: "Assessment of the expected yield in the market context — realistic, traceable and aligned with your goals." },
      { title: "Cashflow", description: "Overview of income, ongoing costs and liquidity — for a solid decision-making foundation." },
      { title: "Location quality", description: "Evaluation of the location by investment-relevant criteria: development potential, demand, infrastructure." },
      { title: "Risks", description: "Early identification of market, property and financing risks for a robust decision." },
      { title: "Value development", description: "Assessment of long-term value appreciation based on market data and location analyses." },
      { title: "Financing", description: "Structuring and assessment of financing with regard to affordability and long-term stability." },
    ],
    section3Headline: "Data instead of gut feeling",
    section3Text:
      "immowap combines practical experience with data-based analyses and structured evaluations. This produces traceable decision-making foundations for long-term investments.",
    section3Btn: "All solutions",
    section4Label: "Analysis",
    section4Headline: "Relevant analyses",
    cardLink: "View analysis",
    analysisCards: [
      { title: "Market value analysis", description: "Well-founded valuation in market context.", href: "/en/solutions/market-value-analysis" },
      { title: "Income approach", description: "Long-term yield perspectives and cashflow assessment.", href: "/en/solutions/analyses/income-approach" },
      { title: "Risk analysis", description: "Early identification of possible risks and uncertainties.", href: "/en/solutions/analyses/risk-analysis" },
      { title: "Location analysis", description: "Evaluation of the location by investment-relevant criteria.", href: "/en/solutions/analyses/location-analysis" },
      { title: "Document analysis", description: "Structured evaluation of listings and documents.", href: "/en/solutions/analyses/document-analysis" },
    ],
    section5Label: "Expected outcomes",
    section5Headline: "For different strategies",
    strategyCards: [
      { title: "Long-term investment", description: "Properties as a strategic wealth component with long-term value appreciation potential." },
      { title: "Rented properties", description: "Ongoing returns through structured assessment of rental demand and cashflow." },
      { title: "Portfolio building", description: "Diversification and structured development of a sustainable property portfolio." },
      { title: "Wealth preservation", description: "Properties as a stable component for the long-term safeguarding and preservation of wealth." },
    ],
    section6Label: "Methodology",
    section6Headline: "Every investor pursues different goals.",
    section6Text:
      "Whether ongoing cashflow, long-term wealth accumulation or strategic diversification — immowap always considers properties in relation to individual expectations and priorities.",
    section6TextSecondary:
      "There are no standard solutions. Every analysis is based on the individual context of the investor.",
    section6ListLabel: "Every analysis is based on",
    section6Items: ["Individual goals", "Risk tolerance", "Investment horizon", "Personal priorities"],
    section7Headline: "Long-term value does not arise by chance.",
    principleCards: [
      { number: "01", title: "Sustainable returns", description: "Focus on stability and long-term perspectives instead of short-term optimisation." },
      { number: "02", title: "Transparent decision foundations", description: "Structured analyses instead of blanket assessments — traceable and individual." },
      { number: "03", title: "Individual assessment", description: "Every property and every strategy is evaluated in its respective context." },
    ],
  },
} as const satisfies Record<Locale, GoalSolutionCopy>;

export function KapitalanlagePage({ locale }: KapitalanlagePageProps) {
  return (
    <GoalSolutionLayout
      locale={locale}
      pageKey="kapitalanlage"
      visual="investment"
      strategyIcons={["investment", "cashflow", "strategy", "market-value"]}
      c={copy[locale]}
    />
  );
}
