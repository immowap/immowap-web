export {
  getMarketReportsHref,
  getMarketTrendsHref,
} from "./market-trends-categories";

export interface MarketReport {
  id: string;
  image: string;
  imageAlt: { de: string; en: string };
  de: {
    title: string;
    description: string;
    expanded: string;
  };
  en: {
    title: string;
    description: string;
    expanded: string;
  };
}

export type MarketIndicatorIcon =
  | "mortgage"
  | "prices"
  | "yield"
  | "construction"
  | "inflation"
  | "demand";

export interface MarketIndicator {
  id: string;
  icon: MarketIndicatorIcon;
  de: { title: string; description: string };
  en: { title: string; description: string };
}

export const marketReportsPageCopy = {
  de: {
    breadcrumbKnowledge: "Wissen",
    breadcrumbMarketTrends: "Markt & Trends",
    breadcrumbCurrent: "Marktberichte",
    heroLabel: "Markt & Trends",
    heroHeadline: "Marktberichte",
    heroSubheadline:
      "Marktentwicklungen und langfristige Analysen für den deutschen und europäischen Immobilienmarkt.",
    heroIntro:
      "Immobilienmärkte verändern sich kontinuierlich. Marktberichte helfen dabei, Entwicklungen besser einzuordnen und Entscheidungen auf einer fundierten Grundlage zu treffen.",
    heroBtnPrimary: "Berichte entdecken",
    featuredLabel: "Aktueller Bericht",
    featuredHeadline: "Im Fokus",
    latestLabel: "Publikationen",
    latestHeadline: "Aktuelle Berichte",
    latestDescription:
      "Strukturierte Marktanalysen zu zentralen Themen – von Zinsentwicklung und Preisniveau bis zu regionalen Unterschieden und langfristigen Perspektiven.",
    indicatorsLabel: "Kennzahlen",
    indicatorsHeadline: "Marktindikatoren",
    indicatorsDescription:
      "Die wichtigsten Kennzahlen für eine belastbare Einordnung – ohne Kurzschlussreaktionen auf einzelne Datenpunkte.",
    editorialLabel: "Haltung",
    editorialHeadline: "Wissen statt Schlagzeilen",
    editorialText:
      "Der Fokus von immowap liegt nicht auf täglichen Nachrichten, sondern auf langfristigen Entwicklungen und fundierten Zusammenhängen.",
    ctaHeadline: "Benötigen Sie eine individuelle Marktanalyse?",
    ctaText:
      "Marktberichte liefern den Rahmen – Ihre Entscheidung braucht den passenden Objekt- und Finanzierungskontext. immowap erstellt individuelle Analysen abgestimmt auf Ihre Ziele.",
    ctaPrimary: "Analyse starten",
    ctaSecondary: "Kontakt aufnehmen",
    cardActionLabel: "Marktbericht lesen →",
    learnMore: "Mehr erfahren",
    readArticle: "Bericht öffnen",
    closeArticle: "Bericht schließen",
  },
  en: {
    breadcrumbKnowledge: "Knowledge",
    breadcrumbMarketTrends: "Market & Trends",
    breadcrumbCurrent: "Market Reports",
    heroLabel: "Market & Trends",
    heroHeadline: "Market Reports",
    heroSubheadline:
      "Market developments and long-term analyses for the German and European property market.",
    heroIntro:
      "Property markets are constantly evolving. Market reports provide valuable insights and support informed decision-making.",
    heroBtnPrimary: "Explore reports",
    featuredLabel: "Current report",
    featuredHeadline: "In focus",
    latestLabel: "Publications",
    latestHeadline: "Latest reports",
    latestDescription:
      "Structured market analyses on central themes – from interest rate trends and price levels to regional differences and long-term perspectives.",
    indicatorsLabel: "Metrics",
    indicatorsHeadline: "Market indicators",
    indicatorsDescription:
      "The key metrics for a robust assessment – without knee-jerk reactions to individual data points.",
    editorialLabel: "Approach",
    editorialHeadline: "Knowledge instead of headlines",
    editorialText:
      "immowap focuses on understanding markets and long-term developments rather than publishing short-lived daily news.",
    ctaHeadline: "Need an individual market analysis?",
    ctaText:
      "Market reports provide the framework – your decision needs the right property and financing context. immowap creates individual analyses aligned with your objectives.",
    ctaPrimary: "Start analysis",
    ctaSecondary: "Contact us",
    cardActionLabel: "Read market report →",
    learnMore: "Learn more",
    readArticle: "Open report",
    closeArticle: "Close report",
  },
} as const;

export const marketReportsHubCopy = {
  de: {
    title: "Marktberichte",
    description:
      "Langfristige Marktanalysen und strukturierte Einordnungen für den deutschen und europäischen Immobilienmarkt – von Preisentwicklung über Finanzierung bis zu regionalen Unterschieden.",
    linkLabel: "Marktberichte entdecken",
    imageAlt: "Marktberichte – Immobilienmarktanalysen",
  },
  en: {
    title: "Market reports",
    description:
      "Long-term market analyses and structured assessments for the German and European property market – from price development and financing to regional differences.",
    linkLabel: "Explore market reports",
    imageAlt: "Market reports – property market analyses",
  },
} as const;

export const MARKET_REPORTS_HUB_IMAGE = "/images/knowledge/market-reports-hub.jpg";

export const marketReportsFeaturedId = "immobilienmarkt-deutschland-2026";

export const marketReports: MarketReport[] = [
  {
    id: "immobilienmarkt-deutschland-2026",
    image: "/images/knowledge/market-reports-01.jpg",
    imageAlt: {
      de: "Immobilienmarkt Deutschland 2026 – Wohngebäude in Europa",
      en: "German property market 2026 – European residential buildings",
    },
    de: {
      title: "Immobilienmarkt Deutschland 2026",
      description:
        "Der deutsche Markt befindet sich in einer Phase der Neugewichtung: Preise, Finanzierung und Nachfrage entwickeln sich selektiver als in den Jahren zuvor.",
      expanded:
        "Nach einer langen Phase hoher Dynamik ordnet sich der Markt neu – ohne dass Lage, Objektqualität und Tragfähigkeit an Bedeutung verlieren. immowap betrachtet Preisniveau, Transaktionsvolumen, Finanzierungsbedingungen und regionale Differenzierung im Sinne einer nachvollziehbaren Wertermittlung. So entsteht ein belastbares Bild für Eigennutzer, Kapitalanleger und strategische Entscheider.",
    },
    en: {
      title: "German Property Market 2026",
      description:
        "The German market is in a phase of rebalancing: prices, financing and demand are developing more selectively than in previous years.",
      expanded:
        "After a long period of high momentum the market is reordering – without reducing the importance of location, property quality and affordability. immowap assesses price levels, transaction volumes, financing conditions and regional differentiation in the spirit of traceable valuation. This produces a robust picture for owner-occupiers, investors and strategic decision-makers.",
    },
  },
  {
    id: "zinsentwicklung-immobilien",
    image: "/images/knowledge/market-reports-02.jpg",
    imageAlt: {
      de: "Zinsentwicklung und Immobilien – Finanzunterlagen",
      en: "Interest rates and real estate – financial documents",
    },
    de: {
      title: "Zinsentwicklung und Immobilien",
      description:
        "Hypothekenzinsen prägen Kaufkraft, Renditebetrachtung und Refinanzierungsentscheidungen. Ihre Entwicklung bleibt ein zentraler Hebel für Immobilieninvestments.",
      expanded:
        "Zinsänderungen wirken unmittelbar auf monatliche Belastung, erreichbare Kaufpreise und die Attraktivität von Kapitalanlagen. immowap ordnet Zinsniveau, Zinskurve und Finanzierungsrahmen in den jeweiligen Markt- und Objektkontext ein – statt pauschaler Prognosen. So lassen sich Tragbarkeit und langfristige Perspektive realistischer bewerten.",
    },
    en: {
      title: "Interest Rates and Real Estate",
      description:
        "Mortgage rates shape purchasing power, yield assessment and refinancing decisions. Their development remains a central lever for property investments.",
      expanded:
        "Rate changes directly affect monthly burden, achievable purchase prices and the attractiveness of investment properties. immowap places interest levels, yield curves and financing frameworks in the respective market and property context – rather than relying on blanket forecasts. This enables a more realistic assessment of affordability and long-term perspective.",
    },
  },
  {
    id: "preisentwicklung-wohnimmobilien",
    image: "/images/knowledge/market-reports-03.jpg",
    imageAlt: {
      de: "Preisentwicklung von Wohnimmobilien – Wohngebäude",
      en: "Residential property price development – apartment buildings",
    },
    de: {
      title: "Preisentwicklung von Wohnimmobilien",
      description:
        "Kaufpreise entwickeln sich regional und segmentbezogen unterschiedlich. Makrodaten allein reichen für eine fundierte Entscheidung selten aus.",
      expanded:
        "Während Metropolregionen und ausgewählte Lagen stabil bleiben können, zeigen andere Märkte Anpassungsbewegungen. immowap vergleicht Preisniveaus mit Mietentwicklung, Angebotslage und Mikrolage – im Sinne einer nachvollziehbaren Wertermittlung. Damit wird sichtbar, ob ein Preis im Markt- und Objektkontext tragfähig ist.",
    },
    en: {
      title: "Residential Property Price Development",
      description:
        "Purchase prices develop differently by region and segment. Macro data alone is rarely sufficient for a well-founded decision.",
      expanded:
        "While metropolitan areas and selected locations may remain stable, other markets show adjustment movements. immowap compares price levels with rental development, supply conditions and micro-location – in the spirit of traceable valuation. This reveals whether a price is sustainable in the market and property context.",
    },
  },
  {
    id: "angebot-nachfrage",
    image: "/images/knowledge/market-reports-04.jpg",
    imageAlt: {
      de: "Angebot und Nachfrage – städtische Landschaft",
      en: "Supply and demand – urban city landscape",
    },
    de: {
      title: "Angebot und Nachfrage",
      description:
        "Das Verhältnis von Angebot und Nachfrage bestimmt Verhandlungsspielräume, Vermarktungsdauer und Preisstabilität. Beide Seiten müssen gemeinsam betrachtet werden.",
      expanded:
        "Geringes Angebot bei selektiver Nachfrage kann Preise stützen, während erhöhte Bestände in bestimmten Segmenten zu längeren Vermarktungszeiten führen. immowap analysiert Nachfrageindikatoren, Transaktionsaktivität und Bestandsentwicklung für relevante Marktsegmente. So entsteht eine realistische Einschätzung der aktuellen Marktposition eines Objekts.",
    },
    en: {
      title: "Supply and Demand",
      description:
        "The balance of supply and demand determines negotiation scope, marketing duration and price stability. Both sides must be considered together.",
      expanded:
        "Low supply with selective demand can support prices, while increased stock in certain segments leads to longer marketing times. immowap analyses demand indicators, transaction activity and stock development for relevant market segments. This produces a realistic assessment of a property's current market position.",
    },
  },
  {
    id: "neubaukrise-deutschland",
    image: "/images/knowledge/market-reports-05.jpg",
    imageAlt: {
      de: "Neubaukrise in Deutschland – Baustelle mit Kränen",
      en: "Construction slowdown in Germany – construction site with cranes",
    },
    de: {
      title: "Neubaukrise in Deutschland",
      description:
        "Rückläufige Baufertigstellungen und steigende Baukosten verändern das Angebotsumfeld nachhaltig. Bestandsimmobilien gewinnen in vielen Regionen an strategischer Bedeutung.",
      expanded:
        "Finanzierungsengpässe, Genehmigungsverfahren und Kostensteigerungen bremsen den Neubau – mit Folgen für Verfügbarkeit, Mietniveau und Sanierungsbedarf. immowap ordnet Neubaudynamik, Baukostenentwicklung und Bestandsqualität regional ein. Für Investoren und Eigennutzer wird so erkennbar, wo Substanz, Modernisierung oder Neubau die tragfähigere Option ist.",
    },
    en: {
      title: "Construction Slowdown in Germany",
      description:
        "Declining completions and rising construction costs are sustainably changing the supply environment. Existing stock is gaining strategic importance in many regions.",
      expanded:
        "Financing constraints, approval procedures and cost increases are slowing new construction – with consequences for availability, rent levels and renovation needs. immowap assesses new-build dynamics, construction cost development and stock quality by region. For investors and owner-occupiers this clarifies where substance, modernisation or new build is the more viable option.",
    },
  },
  {
    id: "mietmarkt-mietpreisentwicklung",
    image: "/images/knowledge/market-reports-06.jpg",
    imageAlt: {
      de: "Mietmarkt und Mietpreisentwicklung – Mietwohngebäude",
      en: "Rental market and rent development – rental housing",
    },
    de: {
      title: "Mietmarkt und Mietpreisentwicklung",
      description:
        "Der Mietmarkt bleibt in vielen Regionen angespannt, während sich Kaufpreise moderieren. Mieteinnahmen sind für Kapitalanleger ein zentraler Stabilitätsfaktor.",
      expanded:
        "Nachfrage nach Wohnraum, Regulierung und Angebotsknappheit prägen Mietniveau und Leerstandsrisiko. immowap betrachtet Mietrendite, Vergleichsmieten und regionale Nachfragestruktur im Zusammenhang mit Objekt- und Lagequalität. Damit lassen sich Ertrags- und Risikoprofile für vermietete Immobilien fundierter einordnen.",
    },
    en: {
      title: "Rental Market and Rent Development",
      description:
        "The rental market remains tight in many regions while purchase prices moderate. Rental income is a central stability factor for investors.",
      expanded:
        "Demand for housing, regulation and supply shortages shape rent levels and vacancy risk. immowap considers rental yield, comparable rents and regional demand structure in relation to property and location quality. This enables a more well-founded assessment of income and risk profiles for rented properties.",
    },
  },
  {
    id: "inflation-immobilienwerte",
    image: "/images/knowledge/market-reports-07.jpg",
    imageAlt: {
      de: "Inflation und Immobilienwerte – wirtschaftliche Analyse",
      en: "Inflation and property values – economic analysis",
    },
    de: {
      title: "Inflation und Immobilienwerte",
      description:
        "Immobilien gelten langfristig als Sachwertanlage – doch der inflationsbedingte Schutz hängt von Finanzierung, Lage und Objektqualität ab.",
      expanded:
        "Steigende Lebenshaltungskosten und Zinsniveau verändern die Rechnung für Eigennutzer und Anleger gleichermaßen. immowap verbindet Inflationseinordnung mit Cashflow-, Finanzierungs- und Werthaltigkeitsanalyse. So wird sichtbar, in welchem Umfang Immobilien tatsächlich als Vermögensschutz und Wertanker wirken können.",
    },
    en: {
      title: "Inflation and Property Values",
      description:
        "Property is considered a long-term real asset – yet inflation protection depends on financing, location and property quality.",
      expanded:
        "Rising living costs and interest levels change the calculation for owner-occupiers and investors alike. immowap combines inflation assessment with cashflow, financing and value retention analysis. This reveals the extent to which property can actually serve as wealth protection and a value anchor.",
    },
  },
  {
    id: "wohnungsmarkt-europa",
    image: "/images/knowledge/market-reports-08.jpg",
    imageAlt: {
      de: "Wohnungsmarkt in Europa – europäische Städte",
      en: "European housing market – European cities",
    },
    de: {
      title: "Wohnungsmarkt in Europa",
      description:
        "Europäische Wohnungsmärkte unterscheiden sich deutlich in Regulierung, Finanzierung und Angebotsstruktur. Ein Vergleich lohnt sich für grenzüberschreitende Entscheidungen.",
      expanded:
        "Von Metropolen mit hoher Nachfragedichte bis zu regionalen Märkten mit moderaterer Dynamik reicht das Spektrum. immowap ordnet europäische Entwicklungen entlang von Preisniveau, Mietrendite, Finanzierungsrahmen und demografischen Trends ein. So entsteht ein belastbarer Vergleich für strategische Portfoliobetrachtungen.",
    },
    en: {
      title: "European Housing Market",
      description:
        "European housing markets differ significantly in regulation, financing and supply structure. Comparison is worthwhile for cross-border decisions.",
      expanded:
        "The spectrum ranges from metropolitan areas with high demand density to regional markets with more moderate dynamics. immowap assesses European developments through price levels, rental yields, financing frameworks and demographic trends. This produces a robust comparison for strategic portfolio considerations.",
    },
  },
  {
    id: "zukunft-immobilienmarkt",
    image: "/images/knowledge/market-reports-09.jpg",
    imageAlt: {
      de: "Zukunft des Immobilienmarktes – moderne Mischnutzung",
      en: "Future of the property market – modern mixed-use developments",
    },
    de: {
      title: "Zukunft des Immobilienmarktes",
      description:
        "Demografie, Energieeffizienz und Finanzierungsbedingungen prägen die langfristige Marktentwicklung. Wer früh strukturiert denkt, trifft bessere Entscheidungen.",
      expanded:
        "Bestandsqualität, Modernisierungsbedarf und regulatorische Anforderungen gewinnen gegenüber kurzfristigen Preisbewegungen an Gewicht. immowap verbindet langfristige Markttrends mit Objekt- und Standortfaktoren – im Sinne einer nachhaltigen Wertermittlung. Damit wird erkennbar, welche Immobilien langfristig tragfähig bleiben.",
    },
    en: {
      title: "Future of the Property Market",
      description:
        "Demographics, energy efficiency and financing conditions shape long-term market development. Those who think structurally early make better decisions.",
      expanded:
        "Stock quality, modernisation needs and regulatory requirements are gaining weight relative to short-term price movements. immowap connects long-term market trends with property and location factors – in the spirit of sustainable valuation. This reveals which properties remain viable in the long term.",
    },
  },
  {
    id: "chancen-risiken-marktphase",
    image: "/images/knowledge/market-reports-10.jpg",
    imageAlt: {
      de: "Chancen und Risiken der aktuellen Marktphase – Analyseumgebung",
      en: "Opportunities and risks of the current market cycle – business analysis",
    },
    de: {
      title: "Chancen und Risiken der aktuellen Marktphase",
      description:
        "Jede Marktphase birgt Chancen und Risiken – entscheidend ist, sie objekt- und zielbezogen zu gewichten statt pauschal zu reagieren.",
      expanded:
        "Moderation am Kaufpreismarkt kann Einstiegsfenster eröffnen, während Finanzierungs- und Regulierungsrisiken bestehen bleiben. immowap strukturiert Chancen und Risiken entlang von Markt, Objekt, Finanzierung und persönlicher Strategie. Damit entsteht eine belastbare Grundlage für Entscheidungen im Einklang mit individuellen Zielen.",
    },
    en: {
      title: "Opportunities and Risks of the Current Market Cycle",
      description:
        "Every market phase holds opportunities and risks – what matters is weighting them in relation to the property and objectives rather than reacting in blanket terms.",
      expanded:
        "Moderation in the purchase market can open entry windows, while financing and regulatory risks remain. immowap structures opportunities and risks across market, property, financing and personal strategy. This creates a robust foundation for decisions aligned with individual goals.",
    },
  },
];

export const marketIndicators: MarketIndicator[] = [
  {
    id: "mortgage-rates",
    icon: "mortgage",
    de: {
      title: "Hypothekenzinsen",
      description:
        "Finanzierungskosten prägen Kaufkraft und Renditebetrachtung. Das Zinsniveau bleibt ein zentraler Referenzpunkt.",
    },
    en: {
      title: "Mortgage rates",
      description:
        "Financing costs shape purchasing power and yield assessment. The interest rate level remains a central reference point.",
    },
  },
  {
    id: "purchase-prices",
    icon: "prices",
    de: {
      title: "Kaufpreise",
      description:
        "Preisniveau und Entwicklung unterscheiden sich regional und segmentbezogen – Makrodaten allein genügen selten.",
    },
    en: {
      title: "Purchase prices",
      description:
        "Price levels and development differ by region and segment – macro data alone is rarely sufficient.",
    },
  },
  {
    id: "rental-yields",
    icon: "yield",
    de: {
      title: "Mietrenditen",
      description:
        "Ertragskraft vermieteter Objekte hängt von Mietniveau, Leerstandsrisiko und Finanzierung ab.",
    },
    en: {
      title: "Rental yields",
      description:
        "The earning power of rented properties depends on rent levels, vacancy risk and financing.",
    },
  },
  {
    id: "construction-costs",
    icon: "construction",
    de: {
      title: "Baukosten",
      description:
        "Steigende Baukosten beeinflussen Neubau, Sanierung und die Wirtschaftlichkeit von Vorhaben.",
    },
    en: {
      title: "Construction costs",
      description:
        "Rising construction costs affect new build, renovation and the viability of projects.",
    },
  },
  {
    id: "inflation",
    icon: "inflation",
    de: {
      title: "Inflation",
      description:
        "Inflation verändert die Rechnung für Eigennutzer und Anleger – der Sachwertcharakter von Immobilien ist kontextabhängig.",
    },
    en: {
      title: "Inflation",
      description:
        "Inflation changes the calculation for owner-occupiers and investors – the real asset character of property is context-dependent.",
    },
  },
  {
    id: "demand-trends",
    icon: "demand",
    de: {
      title: "Nachfrageentwicklung",
      description:
        "Nachfrage nach Wohnraum und Kapitalanlagen entwickelt sich selektiver – Lage und Segment gewinnen an Gewicht.",
    },
    en: {
      title: "Demand trends",
      description:
        "Demand for housing and investment property is developing more selectively – location and segment are gaining weight.",
    },
  },
];
