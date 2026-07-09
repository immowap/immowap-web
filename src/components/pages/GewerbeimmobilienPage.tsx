import { GoalSolutionLayout, type GoalSolutionCopy } from "@/components/solutions/GoalSolutionLayout";
import type { Locale } from "@/lib/i18n/config";

interface GewerbeimmobilienPageProps {
  locale: Locale;
}

const de = {
    heroLabel: "Für Ihre Ziele",
    heroHeadline: "Gewerbeimmobilien strategisch betrachten.",
    heroSubheadline:
      "Gewerbeimmobilien stellen besondere Anforderungen. Standort, Nutzungskonzepte, wirtschaftliche Rahmenbedingungen und langfristige Perspektiven sollten ganzheitlich betrachtet werden.",
    heroBtnPrimary: "Analyse starten",
    heroBtnSecondary: "Anfrage senden",
    section1Headline: "Gewerbeimmobilien erfordern eine andere Perspektive.",
    section1Text:
      "Anders als Wohnimmobilien werden Gewerbeimmobilien von zahlreichen Faktoren beeinflusst. Nutzung, Flexibilität und wirtschaftliche Potenziale spielen dabei eine zentrale Rolle.",
    section2Label: "Typische Herausforderungen",
    section2Headline: "Was wir berücksichtigen",
    considerationCards: [
      {
        title: "Nutzungskonzepte",
        description:
          "Beurteilung bestehender und möglicher Nutzungskonzepte im Hinblick auf Nachfrage und Wirtschaftlichkeit.",
      },
      {
        title: "Standortqualität",
        description:
          "Einordnung des Mikrostandorts nach gewerberelevanten Kriterien: Sichtbarkeit, Erreichbarkeit, Umfeld.",
      },
      {
        title: "Ertragspotenzial",
        description:
          "Analyse der erzielbaren Mieterträge und langfristiger wirtschaftlicher Perspektiven im Marktkontext.",
      },
      {
        title: "Marktumfeld",
        description:
          "Strukturierte Einschätzung der Nachfragesituation, Wettbewerbsumgebung und Marktentwicklung.",
      },
      {
        title: "Risiken",
        description:
          "Frühzeitige Identifikation von Leerstandsrisiken, Marktveränderungen und strukturellen Unsicherheiten.",
      },
      {
        title: "Langfristige Perspektiven",
        description:
          "Betrachtung des Objekts als strategischen Vermögenswert – über aktuelle Nutzung und Erträge hinaus.",
      },
    ],
    section3Headline: "Strukturierte Entscheidungsgrundlagen",
    section3Text:
      "Durch strukturierte Analysen lassen sich wirtschaftliche Potenziale, Chancen und Risiken besser einordnen. immowap verbindet Erfahrung, Transparenz und nachvollziehbare Entscheidungsgrundlagen.",
    section3Btn: "Mehr über unsere Analysen",
    section4Label: "Analyse",
    section4Headline: "Relevante Analysen",
    cardLink: "Mehr erfahren",
    analysisCards: [
      {
        title: "Marktwertanalyse",
        description: "Einordnung der Immobilie im aktuellen Marktumfeld.",
        href: "/de/loesungen/marktwertanalyse",
      },
      {
        title: "Renditeanalyse",
        description: "Bewertung wirtschaftlicher Perspektiven und Ertragspotenziale.",
        href: "/de/loesungen/analysen/ertragswertverfahren",
      },
      {
        title: "Risikoanalyse",
        description: "Frühzeitige Identifikation möglicher Unsicherheiten.",
        href: "/de/loesungen/analysen/risikoanalyse",
      },
      {
        title: "Individuelle Immobilienanalyse",
        description: "Berücksichtigung spezifischer Anforderungen und Zielsetzungen.",
        href: "/de/loesungen/analysen/individuelle-immobilienanalyse",
      },
    ],
    section5Label: "Erwartete Ergebnisse",
    section5Headline: "Für unterschiedliche Immobilienarten",
    strategyCards: [
      {
        title: "Büroimmobilien",
        description:
          "Klassische und moderne Büroflächen – bewertet nach Lage, Flexibilität und Nachfrageperspektive.",
      },
      {
        title: "Einzelhandelsflächen",
        description:
          "Retail- und Handelsobjekte mit Fokus auf Passantenfrequenz, Sortimentskonzept und Marktlage.",
      },
      {
        title: "Ärztehäuser und Gesundheitsimmobilien",
        description:
          "Spezialisierte Gesundheitsimmobilien mit stabiler Nachfrage und klarem Nutzungskonzept.",
      },
      {
        title: "Lager- und Logistikflächen",
        description:
          "Gewerbliche Nutzflächen mit Fokus auf Infrastruktur, Anbindung und operativer Wirtschaftlichkeit.",
      },
      {
        title: "Mischobjekte",
        description:
          "Gemischt genutzte Objekte mit mehreren Einkommensquellen und individuellem Entwicklungspotenzial.",
      },
      {
        title: "Spezialimmobilien",
        description:
          "Objekte mit besonderer Zweckbestimmung – individuell bewertet nach Nutzungskonzept und Marktumfeld.",
      },
    ],
    section6Label: "Was uns unterscheidet",
    section6Headline: "Jede Gewerbeimmobilie folgt eigenen Rahmenbedingungen.",
    section6Text:
      "Ob langfristige Vermietung, Eigennutzung oder strategische Investitionen – immowap betrachtet jede Immobilie im Zusammenhang mit ihren individuellen Anforderungen und Perspektiven.",
    section6TextSecondary:
      "Es gibt keine Standardlösungen. Jede Analyse orientiert sich am individuellen Kontext der Immobilie und ihrer Nutzung.",
    section6ListLabel: "Jede Analyse basiert auf",
    section6Items: [
      "Individuellen Zielen",
      "Nutzungskonzepten",
      "Geschäftlichen Anforderungen",
      "Langfristigen Prioritäten",
    ],
    section7Headline: "Langfristige Entscheidungen benötigen Klarheit.",
    principleCards: [
      {
        number: "01",
        title: "Transparenz",
        description:
          "Strukturierte Grundlagen für fundierte Entscheidungen – nachvollziehbar und auf das Objekt zugeschnitten.",
      },
      {
        number: "02",
        title: "Perspektive",
        description:
          "Fokus auf nachhaltige Entwicklungen und wirtschaftliche Potenziale jenseits kurzfristiger Einschätzungen.",
      },
      {
        number: "03",
        title: "Individualität",
        description:
          "Keine Standardlösungen, sondern eine Betrachtung im jeweiligen Kontext der Immobilie und ihrer Nutzung.",
      },
    ],
};

const en = {
    heroLabel: "For your goals",
    heroHeadline: "Commercial real estate viewed strategically.",
    heroSubheadline:
      "Commercial real estate places special demands. Location, usage concepts, economic framework conditions and long-term perspectives should all be considered holistically.",
    heroBtnPrimary: "Start analysis",
    heroBtnSecondary: "Send enquiry",
    section1Headline: "Commercial real estate requires a different perspective.",
    section1Text:
      "Unlike residential properties, commercial real estate is influenced by numerous factors. Usage, flexibility and economic potential play a central role.",
    section2Label: "Typical challenges",
    section2Headline: "What we take into account",
    considerationCards: [
      {
        title: "Usage concepts",
        description:
          "Assessment of existing and possible usage concepts with regard to demand and economic viability.",
      },
      {
        title: "Location quality",
        description:
          "Classification of the micro-location by commercially relevant criteria: visibility, accessibility, environment.",
      },
      {
        title: "Yield potential",
        description:
          "Analysis of achievable rental income and long-term economic perspectives in the market context.",
      },
      {
        title: "Market environment",
        description:
          "Structured assessment of the demand situation, competitive environment and market development.",
      },
      {
        title: "Risks",
        description:
          "Early identification of vacancy risks, market changes and structural uncertainties.",
      },
      {
        title: "Long-term perspectives",
        description:
          "Consideration of the property as a strategic asset — beyond current usage and returns.",
      },
    ],
    section3Headline: "Structured decision foundations",
    section3Text:
      "Through structured analyses, economic potential, opportunities and risks can be better assessed. immowap combines experience, transparency and traceable decision-making foundations.",
    section3Btn: "Learn more about our analyses",
    section4Label: "Analysis",
    section4Headline: "Relevant analyses",
    cardLink: "Learn more",
    analysisCards: [
      {
        title: "Market value analysis",
        description: "Assessment of the property in the current market environment.",
        href: "/en/solutions/market-value-analysis",
      },
      {
        title: "Return analysis",
        description: "Evaluation of economic perspectives and yield potential.",
        href: "/en/solutions/analyses/income-approach",
      },
      {
        title: "Risk analysis",
        description: "Early identification of possible uncertainties.",
        href: "/en/solutions/analyses/risk-analysis",
      },
      {
        title: "Individual property analysis",
        description: "Consideration of specific requirements and objectives.",
        href: "/en/solutions/analyses/individual-property-analysis",
      },
    ],
    section5Label: "Expected outcomes",
    section5Headline: "For different property types",
    strategyCards: [
      {
        title: "Office properties",
        description:
          "Classic and modern office space — evaluated by location, flexibility and demand perspective.",
      },
      {
        title: "Retail space",
        description:
          "Retail and commercial properties with a focus on footfall, product mix and market conditions.",
      },
      {
        title: "Medical & healthcare properties",
        description:
          "Specialised healthcare properties with stable demand and a clear usage concept.",
      },
      {
        title: "Warehouse & logistics space",
        description:
          "Commercial usable space with a focus on infrastructure, connectivity and operational viability.",
      },
      {
        title: "Mixed-use properties",
        description:
          "Mixed-use properties with multiple income streams and individual development potential.",
      },
      {
        title: "Special-purpose properties",
        description:
          "Properties with a special purpose — individually evaluated by usage concept and market environment.",
      },
    ],
    section6Label: "What sets us apart",
    section6Headline: "Every commercial property follows its own framework.",
    section6Text:
      "Whether long-term letting, owner-occupation or strategic investment — immowap considers every property in relation to its individual requirements and perspectives.",
    section6TextSecondary:
      "There are no standard solutions. Every analysis is based on the individual context of the property and its use.",
    section6ListLabel: "Every analysis is based on",
    section6Items: [
      "Individual goals",
      "Usage concepts",
      "Business requirements",
      "Long-term priorities",
    ],
    section7Headline: "Long-term decisions require clarity.",
    principleCards: [
      {
        number: "01",
        title: "Transparency",
        description:
          "Structured foundations for well-founded decisions — traceable and tailored to the property.",
      },
      {
        number: "02",
        title: "Perspective",
        description:
          "Focus on sustainable developments and economic potential beyond short-term assessments.",
      },
      {
        number: "03",
        title: "Individuality",
        description:
          "No standard solutions — instead, a consideration in the respective context of the property and its use.",
      },
    ],
};

const copy = { de, en } satisfies Record<Locale, GoalSolutionCopy>;

export function GewerbeimmobilienPage({ locale }: GewerbeimmobilienPageProps) {
  return (
    <GoalSolutionLayout
      locale={locale}
      pageKey="gewerbeimmobilien"
      visual="dashboard"
      strategyIcons={["building", "location", "investment", "chart", "risk", "strategy"]}
      c={copy[locale]}
    />
  );
}
