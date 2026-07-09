import { GoalSolutionLayout, type GoalSolutionCopy } from "@/components/solutions/GoalSolutionLayout";
import type { Locale } from "@/lib/i18n/config";

interface EigennutzungPageProps {
  locale: Locale;
}

const de = {
    heroLabel: "Für Ihre Ziele",
    heroHeadline: "Immobilienentscheidungen für die Eigennutzung. Individuell betrachtet.",
    heroSubheadline:
      "Jede Lebenssituation ist unterschiedlich. Deshalb analysiert immowap Immobilien nicht nach einem starren Schema, sondern im Kontext Ihrer persönlichen Ziele, Prioritäten und Rahmenbedingungen.",
    heroBtnPrimary: "Analyse starten",
    heroBtnSecondary: "Anfrage senden",
    section1Headline:
      "Nicht jede passende Immobilie ist für jeden Menschen die richtige Entscheidung.",
    section1Text:
      "Eine Immobilie kann auf dem Papier attraktiv erscheinen und dennoch nicht zu den individuellen Bedürfnissen, der finanziellen Situation oder den langfristigen Plänen passen. Deshalb betrachten wir Immobilien immer im Zusammenhang mit den Menschen, die sie nutzen möchten.",
    section2Label: "Typische Herausforderungen",
    section2Headline: "Was wir berücksichtigen",
    considerationCards: [
      {
        title: "Persönliche Ziele",
        description:
          "Was wünschen Sie sich von Ihrer Immobilie? Ruhe, Nähe zur Familie, mehr Raum – individuelle Ziele bestimmen die Analyse.",
      },
      {
        title: "Familiengröße und Lebenssituation",
        description:
          "Aktuelle und zukünftige Haushaltsgröße sowie Lebensphasen fließen in die Bewertung mit ein.",
      },
      {
        title: "Finanzielle Belastbarkeit",
        description:
          "Kaufpreis, Nebenkosten, Finanzierungsstruktur und monatliche Belastung werden realistisch eingeordnet.",
      },
      {
        title: "Lage und Infrastruktur",
        description:
          "Nahversorgung, Schulen, Anbindung und Quartiersentwicklung beeinflussen die langfristige Wohnqualität.",
      },
      {
        title: "Zukunftsperspektiven",
        description:
          "Wie verändert sich Ihre Lebenssituation in 5, 10 oder 20 Jahren? Die Analyse berücksichtigt Ihre langfristige Perspektive.",
      },
      {
        title: "Chancen und Risiken",
        description:
          "Objektive Einschätzung von Potenzialen und Risiken – ohne Schönfärberei, mit klarem Fokus auf Ihre Situation.",
      },
    ],
    section3Headline: "Strukturierte Betrachtung statt pauschaler Empfehlungen",
    section3Text:
      "immowap kombiniert praktische Erfahrung mit datenbasierten Analysen und KI-gestützten Auswertungen. Dadurch entstehen nachvollziehbare Entscheidungsgrundlagen, die sich an Ihrer individuellen Situation orientieren.",
    section3Btn: "Mehr über unsere Analysen",
    section4Label: "Analyse",
    section4Headline: "Mögliche Analysen",
    cardLink: "Mehr erfahren",
    analysisCards: [
      {
        title: "Marktwertanalyse",
        description:
          "Einordnung des Kaufpreises im aktuellen Marktkontext – für eine realistische Beurteilung des Angebots.",
        href: "/de/loesungen/marktwertanalyse",
      },
      {
        title: "Standortanalyse",
        description:
          "Bewertung der Lage nach wohnrelevanten Kriterien: Infrastruktur, Quartiersentwicklung, Anbindung.",
        href: "/de/loesungen/analysen/standortanalyse",
      },
      {
        title: "Risikoanalyse",
        description:
          "Strukturierte Einschätzung von Risiken – baulich, finanziell und im Hinblick auf Ihre persönliche Situation.",
        href: "/de/loesungen/analysen/risikoanalyse",
      },
      {
        title: "Individuelle Immobilienanalyse",
        description:
          "Umfassende Betrachtung einer konkreten Immobilie im Kontext Ihrer individuellen Ziele und Rahmenbedingungen.",
        href: "/de/loesungen/analysen/individuelle-immobilienanalyse",
      },
    ],
    section5Label: "Erwartete Ergebnisse",
    section5Headline: "Für unterschiedliche Lebenssituationen",
    strategyCards: [
      {
        title: "Erstimmobilie",
        description: "Der Schritt in die erste eigene Immobilie – strukturiert und fundiert begleitet.",
      },
      {
        title: "Familien mit Kindern",
        description: "Mehr Raum, sichere Lage, langfristige Stabilität – Prioritäten, die wirklich zählen.",
      },
      {
        title: "Altersgerechtes Wohnen",
        description: "Komfort, Barrierefreiheit und die richtigen Rahmenbedingungen für die nächste Lebensphase.",
      },
      {
        title: "Langfristige Wohnplanung",
        description: "Immobilienentscheidungen, die heute passen und morgen Bestand haben.",
      },
    ],
    section6Label: "Was uns unterscheidet",
    section6Headline: "Die richtige Immobilie beginnt mit der richtigen Perspektive.",
    section6Text:
      "Fundierte Entscheidungen entstehen dann, wenn persönliche Ziele und objektive Analysen zusammengeführt werden.",
    section6TextSecondary:
      "Wir betrachten nicht jede Immobilie auf dieselbe Weise. Jede Analyse orientiert sich an den individuellen Gegebenheiten des Menschen, der sie nutzen möchte.",
    section6ListLabel: "Jede Analyse basiert auf",
    section6Items: [
      "Individuellen Zielen",
      "Persönlichen Prioritäten",
      "Lebensverhältnissen",
      "Erwartungen",
    ],
    section7Headline: "Mit Klarheit entscheiden.",
    principleCards: [
      {
        number: "01",
        title: "Die richtige Perspektive",
        description:
          "Fundierte Entscheidungen entstehen, wenn persönliche Ziele und objektive Analysen zusammengeführt werden.",
      },
      {
        number: "02",
        title: "Strukturierte Betrachtung",
        description:
          "Nachvollziehbare Entscheidungsgrundlagen statt pauschaler Empfehlungen – orientiert an Ihrer individuellen Situation.",
      },
      {
        number: "03",
        title: "Individuelle Einordnung",
        description:
          "Jede Analyse orientiert sich an den individuellen Gegebenheiten des Menschen, der die Immobilie nutzen möchte.",
      },
    ],
};

const en = {
    heroLabel: "For your goals",
    heroHeadline: "Property decisions for owner-occupation. Considered individually.",
    heroSubheadline:
      "Every life situation is different. That is why immowap does not evaluate properties according to a rigid framework, but in the context of your personal goals, priorities and circumstances.",
    heroBtnPrimary: "Start analysis",
    heroBtnSecondary: "Send enquiry",
    section1Headline:
      "Not every suitable property is the right decision for everyone.",
    section1Text:
      "A property may appear attractive on paper and yet not match individual needs, the financial situation or long-term plans. That is why we always consider properties in relation to the people who wish to use them.",
    section2Label: "Typical challenges",
    section2Headline: "What we take into account",
    considerationCards: [
      {
        title: "Personal goals",
        description:
          "What do you want from your property? Peace, proximity to family, more space — individual goals shape the analysis.",
      },
      {
        title: "Family size & life situation",
        description:
          "Current and future household size as well as life stages are factored into the assessment.",
      },
      {
        title: "Financial capacity",
        description:
          "Purchase price, ancillary costs, financing structure and monthly outgoings are assessed realistically.",
      },
      {
        title: "Location & infrastructure",
        description:
          "Local amenities, schools, transport links and neighbourhood development influence long-term quality of life.",
      },
      {
        title: "Future perspectives",
        description:
          "How will your life situation change in 5, 10 or 20 years? The analysis takes your long-term perspective into account.",
      },
      {
        title: "Opportunities & risks",
        description:
          "Objective assessment of potential and risks — without sugarcoating, with a clear focus on your situation.",
      },
    ],
    section3Headline: "Structured assessment instead of blanket recommendations",
    section3Text:
      "immowap combines practical experience with data-based analyses and AI-supported evaluations. This produces traceable decision-making foundations aligned with your individual situation.",
    section3Btn: "Learn more about our analyses",
    section4Label: "Analysis",
    section4Headline: "Possible analyses",
    cardLink: "Learn more",
    analysisCards: [
      {
        title: "Market value analysis",
        description:
          "Assessment of the purchase price in the current market context — for a realistic evaluation of the offer.",
        href: "/en/solutions/market-value-analysis",
      },
      {
        title: "Location analysis",
        description:
          "Evaluation of the location according to residential criteria: infrastructure, neighbourhood development, transport links.",
        href: "/en/solutions/analyses/location-analysis",
      },
      {
        title: "Risk analysis",
        description:
          "Structured assessment of risks — structural, financial and with regard to your personal situation.",
        href: "/en/solutions/analyses/risk-analysis",
      },
      {
        title: "Individual property analysis",
        description:
          "Comprehensive consideration of a specific property in the context of your individual goals and circumstances.",
        href: "/en/solutions/analyses/individual-property-analysis",
      },
    ],
    section5Label: "Expected outcomes",
    section5Headline: "For different life situations",
    strategyCards: [
      {
        title: "First home buyers",
        description: "The step into your first property — structured and well-founded.",
      },
      {
        title: "Families with children",
        description: "More space, a safe location, long-term stability — priorities that truly matter.",
      },
      {
        title: "Age-appropriate living",
        description: "Comfort, accessibility and the right conditions for the next phase of life.",
      },
      {
        title: "Long-term residential planning",
        description: "Property decisions that fit today and stand the test of time.",
      },
    ],
    section6Label: "What sets us apart",
    section6Headline: "The right property starts with the right perspective.",
    section6Text:
      "Well-founded decisions emerge when personal goals and objective analyses are brought together.",
    section6TextSecondary:
      "We do not evaluate every property in the same way. Every analysis is based on the individual circumstances of the person who wishes to use it.",
    section6ListLabel: "Every analysis is based on",
    section6Items: [
      "Individual goals",
      "Personal priorities",
      "Life circumstances",
      "Expectations",
    ],
    section7Headline: "Decide with clarity.",
    principleCards: [
      {
        number: "01",
        title: "The right perspective",
        description:
          "Well-founded decisions emerge when personal goals and objective analyses are brought together.",
      },
      {
        number: "02",
        title: "Structured assessment",
        description:
          "Traceable decision-making foundations instead of blanket recommendations — aligned with your individual situation.",
      },
      {
        number: "03",
        title: "Individual assessment",
        description:
          "Every analysis is based on the individual circumstances of the person who wishes to use the property.",
      },
    ],
};

const copy = { de, en } satisfies Record<Locale, GoalSolutionCopy>;

export function EigennutzungPage({ locale }: EigennutzungPageProps) {
  return (
    <GoalSolutionLayout
      locale={locale}
      pageKey="eigennutzung"
      visual="valuation"
      strategyIcons={["building", "location", "strategy", "market-value"]}
      c={copy[locale]}
    />
  );
}
