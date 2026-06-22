export type TrendDriverIcon =
  | "technology"
  | "sustainability"
  | "energy"
  | "demographics"
  | "digitalisation"
  | "regulation";

export interface TrendTopic {
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

export interface TrendDriver {
  id: string;
  icon: TrendDriverIcon;
  de: { title: string; description: string };
  en: { title: string; description: string };
}

export const trendsFeaturedId = "zukunft-immobilienmarkt";

export const trendsEntwicklungenPageCopy = {
  de: {
    breadcrumbCurrent: "Trends & Entwicklungen",
    heroLabel: "Markt & Trends",
    heroHeadline: "Trends & Entwicklungen",
    heroSubheadline:
      "Langfristige Veränderungen und Zukunftsthemen im Immobilienmarkt verstehen.",
    heroIntro:
      "Immobilienmärkte werden von wirtschaftlichen, technologischen und gesellschaftlichen Entwicklungen beeinflusst. Langfristige Trends helfen dabei, Chancen frühzeitig zu erkennen und Risiken besser einzuordnen.",
    heroBtnPrimary: "Themen entdecken",
    featuredLabel: "Schwerpunkt",
    featuredHeadline: "Im Fokus",
    latestLabel: "Themen",
    latestHeadline: "Aktuelle Themen",
    latestDescription:
      "Strukturelle Entwicklungen am Immobilienmarkt – von Nachhaltigkeit und Energieeffizienz bis zu Digitalisierung und demografischem Wandel.",
    driversLabel: "Einordnung",
    driversHeadline: "Einflussfaktoren",
    driversDescription:
      "Sechs zentrale Kräfte, die den Immobilienmarkt langfristig prägen – strukturiert betrachtet statt isoliert interpretiert.",
    editorialLabel: "Perspektive",
    editorialHeadline: "Langfristige Entwicklungen statt kurzfristiger Schlagzeilen",
    editorialText:
      "Immowap konzentriert sich auf strukturelle Veränderungen und nachhaltige Entwicklungen. Ziel ist es, Zusammenhänge verständlich darzustellen und langfristige Perspektiven aufzuzeigen.",
    ctaHeadline: "Benötigen Sie eine individuelle Analyse?",
    ctaText:
      "Trends liefern Orientierung – Ihre Entscheidung braucht den passenden Objekt- und Strategiekontext. immowap erstellt individuelle Analysen abgestimmt auf Ihre Ziele.",
    ctaPrimary: "Analyse starten",
    ctaSecondary: "Kontakt aufnehmen",
    cardActionLabel: "Entwicklung analysieren →",
    learnMore: "Mehr erfahren",
    readArticle: "Thema öffnen",
    closeArticle: "Thema schließen",
  },
  en: {
    breadcrumbCurrent: "Trends & Developments",
    heroLabel: "Market & Trends",
    heroHeadline: "Trends & Developments",
    heroSubheadline:
      "Understanding long-term changes and future trends in the property market.",
    heroIntro:
      "Property markets are shaped by economic, technological and demographic developments. Understanding long-term trends helps identify opportunities and manage risks.",
    heroBtnPrimary: "Explore topics",
    featuredLabel: "Focus",
    featuredHeadline: "In focus",
    latestLabel: "Topics",
    latestHeadline: "Latest topics",
    latestDescription:
      "Structural developments in the property market – from sustainability and energy efficiency to digitalisation and demographic change.",
    driversLabel: "Assessment",
    driversHeadline: "Key drivers",
    driversDescription:
      "Six central forces shaping the property market in the long term – considered structurally rather than in isolation.",
    editorialLabel: "Approach",
    editorialHeadline: "Long-term trends instead of short-term headlines",
    editorialText:
      "immowap focuses on structural changes and long-term developments rather than short-lived headlines.",
    ctaHeadline: "Need an Individual Analysis?",
    ctaText:
      "Trends provide orientation – your decision needs the right property and strategy context. immowap creates individual analyses aligned with your objectives.",
    ctaPrimary: "Start analysis",
    ctaSecondary: "Contact us",
    cardActionLabel: "Analyse development →",
    learnMore: "Learn more",
    readArticle: "Open topic",
    closeArticle: "Close topic",
  },
} as const;

const IMAGE_BASE = "/images/knowledge/trends-dev";

export const trendsFeaturedTopic: TrendTopic = {
  id: trendsFeaturedId,
  image: `${IMAGE_BASE}/featured.jpg`,
  imageAlt: {
    de: "Die Zukunft des Immobilienmarktes – langfristige Perspektiven",
    en: "The future of real estate – long-term perspectives",
  },
  de: {
    title: "Die Zukunft des Immobilienmarktes",
    description:
      "Demografie, Energie, Technologie und Regulierung verändern den Markt grundlegend – nicht über Nacht, aber nachhaltig und strukturell.",
    expanded:
      "Wer Immobilien langfristig bewertet, muss über Zinszyklen und Preisbewegungen hinausdenken. Bestandsqualität, Modernisierungsbedarf und regulatorische Anforderungen gewinnen gegenüber kurzfristigen Marktbewegungen an Gewicht. immowap ordnet diese Entwicklungen im Sinne einer nachvollziehbaren Wertermittlung ein – für Eigennutzer, Kapitalanleger und strategische Entscheider.",
  },
  en: {
    title: "The Future of Real Estate",
    description:
      "Demographics, energy, technology and regulation are fundamentally changing the market – not overnight, but sustainably and structurally.",
    expanded:
      "Those who value property in the long term must think beyond interest cycles and price movements. Stock quality, modernisation needs and regulatory requirements are gaining weight relative to short-term market movements. immowap assesses these developments in the spirit of traceable valuation – for owner-occupiers, investors and strategic decision-makers.",
  },
};

export const trendsTopics: TrendTopic[] = [
  {
    id: "esg-nachhaltigkeit",
    image: `${IMAGE_BASE}/01.jpg`,
    imageAlt: {
      de: "ESG und Nachhaltigkeit – grüne Gebäude und moderne Architektur",
      en: "ESG and sustainability – green buildings and modern architecture",
    },
    de: {
      title: "ESG und Nachhaltigkeit",
      description:
        "Environmental, Social und Governance-Kriterien prägen Investitions- und Finanzierungsentscheidungen zunehmend. Nachhaltigkeit wird zum relevanten Werttreiber.",
      expanded:
        "Energieeffizienz, soziale Nutzung und transparente Governance beeinflussen Marktzugang, Refinanzierung und langfristige Werthaltigkeit. immowap ordnet ESG-Faktoren in die Bewertung und Strategie ein – ohne sie von Rendite und Risiko zu trennen.",
    },
    en: {
      title: "ESG and Sustainability",
      description:
        "Environmental, social and governance criteria increasingly shape investment and financing decisions. Sustainability is becoming a relevant value driver.",
      expanded:
        "Energy efficiency, social use and transparent governance influence market access, refinancing and long-term value retention. immowap integrates ESG factors into valuation and strategy – without separating them from yield and risk.",
    },
  },
  {
    id: "energieeffizienz",
    image: `${IMAGE_BASE}/02.jpg`,
    imageAlt: {
      de: "Energieeffizienz bei Immobilien – modern gedämmte Wohngebäude",
      en: "Energy efficiency in real estate – modern insulated residential buildings",
    },
    de: {
      title: "Energieeffizienz bei Immobilien",
      description:
        "Der Energieausweis und die energetische Gebäudequalität beeinflussen Vermietbarkeit, Sanierungsbedarf und langfristige Werthaltigkeit.",
      expanded:
        "Steigende Anforderungen an Effizienz und Betriebskosten verändern die Attraktivität von Bestandsimmobilien. immowap bewertet Energieeffizienz im Zusammenhang mit Modernisierungskosten, Mietpotenzial und regulatorischem Rahmen – für eine realistische Gesamtbetrachtung.",
    },
    en: {
      title: "Energy Efficiency in Real Estate",
      description:
        "Energy certificates and building energy quality influence lettability, renovation needs and long-term value retention.",
      expanded:
        "Rising requirements for efficiency and operating costs are changing the attractiveness of existing stock. immowap evaluates energy efficiency together with modernisation costs, rental potential and regulatory framework – for a realistic overall assessment.",
    },
  },
  {
    id: "kuenstliche-intelligenz",
    image: `${IMAGE_BASE}/03.jpg`,
    imageAlt: {
      de: "Künstliche Intelligenz im Immobilienbereich – digitale Analyse im Büro",
      en: "Artificial intelligence in real estate – digital analysis in office",
    },
    de: {
      title: "Künstliche Intelligenz im Immobilienbereich",
      description:
        "Künstliche Intelligenz unterstützt Datenanalyse, Mustererkennung und Bewertungsprozesse – als Ergänzung zu fachlicher Expertise, nicht als Ersatz.",
      expanded:
        "KI kann große Datenmengen strukturieren und Indikatoren schneller auswerten. immowap nutzt datenbasierte Methoden, um Markt- und Objektinformationen präziser einzuordnen – stets im Rahmen nachvollziehbarer, individueller Analyse.",
    },
    en: {
      title: "Artificial Intelligence in Real Estate",
      description:
        "Artificial intelligence supports data analysis, pattern recognition and valuation processes – as a complement to professional expertise, not a replacement.",
      expanded:
        "AI can structure large data volumes and evaluate indicators more quickly. immowap uses data-based methods to assess market and property information more precisely – always within the framework of traceable, individual analysis.",
    },
  },
  {
    id: "smart-home",
    image: `${IMAGE_BASE}/04.jpg`,
    imageAlt: {
      de: "Smart Home Technologien – modernes europäisches Apartment-Interieur",
      en: "Smart home technologies – modern European apartment interior",
    },
    de: {
      title: "Smart Home Technologien",
      description:
        "Digitale Gebäudetechnik und Smart-Home-Lösungen gewinnen an Relevanz für Komfort, Effizienz und zukünftige Vermietbarkeit.",
      expanded:
        "Vernetzte Systeme können Betriebskosten senken und Wohnqualität erhöhen – mit unterschiedlichem Investitionsaufwand. immowap ordnet Smart-Home-Potenzial im Objektkontext ein und bewertet, ob technische Upgrades werthaltig und wirtschaftlich sinnvoll sind.",
    },
    en: {
      title: "Smart Home Technologies",
      description:
        "Digital building technology and smart home solutions are gaining relevance for comfort, efficiency and future lettability.",
      expanded:
        "Connected systems can reduce operating costs and increase living quality – with varying investment outlay. immowap assesses smart home potential in the property context and evaluates whether technical upgrades are value-retaining and economically sensible.",
    },
  },
  {
    id: "demografischer-wandel",
    image: `${IMAGE_BASE}/05.jpg`,
    imageAlt: {
      de: "Demografischer Wandel – Menschen in urbanen Wohnvierteln",
      en: "Demographic change – people in urban neighborhoods",
    },
    de: {
      title: "Demografischer Wandel",
      description:
        "Alterung, Urbanisierung und Haushaltsstrukturen verändern langfristig den Wohnbedarf und die Nachfrage nach Immobilientypen.",
      expanded:
        "Regionen mit Zuwachs unterscheiden sich deutlich von schrumpfenden Märkten. immowap berücksichtigt demografische Entwicklung bei Standort- und Strategiebewertung – als Grundlage für nachhaltige Entscheidungen über Eigennutzung und Kapitalanlage.",
    },
    en: {
      title: "Demographic Change",
      description:
        "Ageing, urbanisation and household structures are changing housing demand and demand for property types in the long term.",
      expanded:
        "Regions with growth differ significantly from shrinking markets. immowap considers demographic development in location and strategy assessment – as a basis for sustainable decisions on owner occupation and investment.",
    },
  },
  {
    id: "digitalisierung",
    image: `${IMAGE_BASE}/06.jpg`,
    imageAlt: {
      de: "Digitalisierung im Immobilienmarkt – Immobilienanalyse und modernes Büro",
      en: "Digitalisation in real estate – property analysis and modern office",
    },
    de: {
      title: "Digitalisierung im Immobilienmarkt",
      description:
        "Digitale Prozesse verändern Suche, Bewertung, Finanzierung und Verwaltung von Immobilien – mit Auswirkungen auf Transparenz und Entscheidungsgeschwindigkeit.",
      expanded:
        "Von Online-Exposés bis zu datenbasierten Analysen eröffnen digitale Werkzeuge neue Möglichkeiten – erfordern aber weiterhin fachliche Einordnung. immowap verbindet digitale Analysemethoden mit strukturierter Wertermittlung und individueller Beratung.",
    },
    en: {
      title: "Digitalisation in Real Estate",
      description:
        "Digital processes are changing search, valuation, financing and management of property – with effects on transparency and decision speed.",
      expanded:
        "From online listings to data-based analyses, digital tools open new possibilities – but still require professional assessment. immowap combines digital analysis methods with structured valuation and individual advisory.",
    },
  },
  {
    id: "energiegesetze-sanierung",
    image: `${IMAGE_BASE}/07.jpg`,
    imageAlt: {
      de: "Neue Energiegesetze und Sanierungspflichten – energetische Gebäudesanierung",
      en: "Energy regulations and renovation requirements – energy-efficient building renovation",
    },
    de: {
      title: "Neue Energiegesetze und Sanierungspflichten",
      description:
        "Regulatorische Anforderungen an Energie, Mietrecht und Gebäudestandard beeinflussen Kosten, Werthaltigkeit und Investitionsstrategien.",
      expanded:
        "Sanierungspflichten und gesetzliche Vorgaben können kurzfristige Belastungen mit langfristiger Werterhaltung verbinden. immowap ordnet regulatorische Risiken und Modernisierungsbedarf in die Gesamtbewertung ein – transparent und objektbezogen.",
    },
    en: {
      title: "Energy Regulations and Renovation Requirements",
      description:
        "Regulatory requirements for energy, tenancy law and building standards influence costs, value retention and investment strategies.",
      expanded:
        "Renovation obligations and legal requirements can combine short-term burden with long-term value preservation. immowap integrates regulatory risks and modernisation needs into overall valuation – transparently and property-specific.",
    },
  },
  {
    id: "wohnen-der-zukunft",
    image: `${IMAGE_BASE}/08.jpg`,
    imageAlt: {
      de: "Wohnen der Zukunft – moderne Wohnentwicklungen",
      en: "Future living concepts – modern residential developments",
    },
    de: {
      title: "Wohnen der Zukunft",
      description:
        "Neue Wohnformen, hybride Nutzungen und veränderte Lebensmodelle prägen die Nachfrage nach flexiblen, qualitativ hochwertigen Immobilien.",
      expanded:
        "Homeoffice, Mehrgenerationenwohnen und Quartierskonzepte verändern Anforderungen an Grundrisse und Lage. immowap betrachtet Zukunftstrends im Kontext von Werthaltigkeit, Vermietbarkeit und langfristiger Nachfrage.",
    },
    en: {
      title: "Future Living Concepts",
      description:
        "New forms of housing, hybrid uses and changing lifestyles are shaping demand for flexible, high-quality property.",
      expanded:
        "Remote work, multi-generational living and district concepts are changing requirements for layouts and location. immowap considers future trends in the context of value retention, lettability and long-term demand.",
    },
  },
  {
    id: "europaeische-maerkte",
    image: `${IMAGE_BASE}/09.jpg`,
    imageAlt: {
      de: "Europäische Immobilienmärkte – europäische Stadtsilhouette",
      en: "European property markets – European city skyline",
    },
    de: {
      title: "Europäische Immobilienmärkte",
      description:
        "Immobilienmärkte in Europa entwickeln sich unterschiedlich – geprägt von Zinsen, Regulierung und regionaler Wirtschaftsdynamik.",
      expanded:
        "Für grenzüberschreitende Investoren und strategische Vergleiche ist ein strukturierter Blick auf europäische Märkte relevant. immowap ordnet internationale Entwicklungen ein und verbindet sie mit der Bewertungslogik des deutschen Marktes.",
    },
    en: {
      title: "European Property Markets",
      description:
        "Property markets in Europe are developing differently – shaped by interest rates, regulation and regional economic dynamics.",
      expanded:
        "For cross-border investors and strategic comparisons, a structured view of European markets is relevant. immowap assesses international developments and connects them with German market valuation logic.",
    },
  },
  {
    id: "zukunft-neubau",
    image: `${IMAGE_BASE}/10.jpg`,
    imageAlt: {
      de: "Zukunft des Neubaus – moderne Bauprojekte mit Kränen",
      en: "The future of construction – modern construction projects and cranes",
    },
    de: {
      title: "Zukunft des Neubaus",
      description:
        "Der Neubau steht vor strukturellen Herausforderungen – von Baukosten über Genehmigungen bis zu Nachhaltigkeitsanforderungen.",
      expanded:
        "Weniger Fertigstellungen verschärfen das Angebot, während Qualitäts- und Effizienzstandards steigen. immowap ordnet Neubauperspektiven regional und strategisch ein – als Ergänzung zur Bewertung von Bestandsimmobilien.",
    },
    en: {
      title: "The Future of Construction",
      description:
        "New construction faces structural challenges – from building costs and approvals to sustainability requirements.",
      expanded:
        "Fewer completions tighten supply while quality and efficiency standards rise. immowap assesses new-build perspectives regionally and strategically – as a complement to existing stock valuation.",
    },
  },
];

export const trendDrivers: TrendDriver[] = [
  {
    id: "technology",
    icon: "technology",
    de: {
      title: "Technologie",
      description:
        "Digitale Werkzeuge und datenbasierte Analysen verändern, wie Immobilien bewertet, verglichen und verwaltet werden.",
    },
    en: {
      title: "Technology",
      description:
        "Digital tools and data-based analyses are changing how property is valued, compared and managed.",
    },
  },
  {
    id: "sustainability",
    icon: "sustainability",
    de: {
      title: "Nachhaltigkeit",
      description:
        "ESG-Kriterien und ökologische Standards prägen Finanzierung, Investition und langfristige Werthaltigkeit.",
    },
    en: {
      title: "Sustainability",
      description:
        "ESG criteria and ecological standards shape financing, investment and long-term value retention.",
    },
  },
  {
    id: "energy",
    icon: "energy",
    de: {
      title: "Energie",
      description:
        "Energieeffizienz und steigende Anforderungen an Gebäudestandard beeinflussen Kosten und Sanierungsbedarf.",
    },
    en: {
      title: "Energy",
      description:
        "Energy efficiency and rising building standards influence costs and renovation requirements.",
    },
  },
  {
    id: "demographics",
    icon: "demographics",
    de: {
      title: "Demografie",
      description:
        "Alterung, Urbanisierung und Haushaltsstrukturen verändern langfristig den Wohnbedarf in Regionen und Segmenten.",
    },
    en: {
      title: "Demographics",
      description:
        "Ageing, urbanisation and household structures are changing housing demand in regions and segments in the long term.",
    },
  },
  {
    id: "digitalisation",
    icon: "digitalisation",
    de: {
      title: "Digitalisierung",
      description:
        "Online-Prozesse und digitale Transparenz beschleunigen Entscheidungen – ohne fachliche Einordnung zu ersetzen.",
    },
    en: {
      title: "Digitalisation",
      description:
        "Online processes and digital transparency accelerate decisions – without replacing professional assessment.",
    },
  },
  {
    id: "regulation",
    icon: "regulation",
    de: {
      title: "Regulierung",
      description:
        "Gesetzliche Vorgaben zu Energie, Mietrecht und Gebäudestandard prägen Kosten und Investitionsstrategien.",
    },
    en: {
      title: "Regulation",
      description:
        "Legal requirements for energy, tenancy law and building standards shape costs and investment strategies.",
    },
  },
];
