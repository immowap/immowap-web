import type { Locale } from "./config";

export type MarketTrendsCategoryId =
  | "marktberichte"
  | "regionen"
  | "trends"
  | "daten"
  | "investment"
  | "zukunft";

export interface MarketTrendsCategoryConfig {
  id: MarketTrendsCategoryId;
  dePath: string;
  enPath: string;
  label: { de: string; en: string };
  hub: {
    de: { title: string; description: string; imageAlt: string };
    en: { title: string; description: string; imageAlt: string };
  };
  page: {
    de: {
      heroSubheadline: string;
      heroIntro: string;
      heroBtnPrimary: string;
      articlesLabel: string;
      articlesDescription: string;
      editorialLabel: string;
      editorialHeadline: string;
      editorialText: string;
      ctaHeadline: string;
      ctaText: string;
      ctaPrimary: string;
      ctaSecondary: string;
      cardActionLabel: string;
      readArticle: string;
      closeArticle: string;
      learnMore: string;
    };
    en: {
      heroSubheadline: string;
      heroIntro: string;
      heroBtnPrimary: string;
      articlesLabel: string;
      articlesDescription: string;
      editorialLabel: string;
      editorialHeadline: string;
      editorialText: string;
      ctaHeadline: string;
      ctaText: string;
      ctaPrimary: string;
      ctaSecondary: string;
      cardActionLabel: string;
      readArticle: string;
      closeArticle: string;
      learnMore: string;
    };
  };
}

export const marketTrendsCategories: MarketTrendsCategoryConfig[] = [
  {
    id: "marktberichte",
    dePath: "/wissen/markt-trends/marktberichte",
    enPath: "/knowledge/market-trends/market-reports",
    label: { de: "Marktberichte", en: "Market Reports" },
    hub: {
      de: {
        title: "Marktberichte",
        description:
          "Langfristige Marktanalysen und strukturierte Einordnungen für den deutschen und europäischen Immobilienmarkt – von Preisentwicklung über Finanzierung bis zu regionalen Unterschieden.",
        imageAlt: "Marktberichte – Immobilienmarktanalysen",
      },
      en: {
        title: "Market Reports",
        description:
          "Long-term market analyses and structured assessments for the German and European property market – from price development and financing to regional differences.",
        imageAlt: "Market reports – property market analyses",
      },
    },
    page: {
      de: {
        heroSubheadline: "",
        heroIntro: "",
        heroBtnPrimary: "",
        articlesLabel: "",
        articlesDescription: "",
        editorialLabel: "",
        editorialHeadline: "",
        editorialText: "",
        ctaHeadline: "",
        ctaText: "",
        ctaPrimary: "",
        ctaSecondary: "",
        cardActionLabel: "",
        readArticle: "",
        closeArticle: "",
        learnMore: "",
      },
      en: {
        heroSubheadline: "",
        heroIntro: "",
        heroBtnPrimary: "",
        articlesLabel: "",
        articlesDescription: "",
        editorialLabel: "",
        editorialHeadline: "",
        editorialText: "",
        ctaHeadline: "",
        ctaText: "",
        ctaPrimary: "",
        ctaSecondary: "",
        cardActionLabel: "",
        readArticle: "",
        closeArticle: "",
        learnMore: "",
      },
    },
  },
  {
    id: "regionen",
    dePath: "/wissen/markt-trends/regionen-standorte",
    enPath: "/knowledge/market-trends/regions-locations",
    label: { de: "Regionen & Standorte", en: "Regions & Locations" },
    hub: {
      de: {
        title: "Regionen & Standorte",
        description:
          "Regionale Märkte im Vergleich – von Metropolen bis Wachstumsregionen, mit Fokus auf Lage, Nachfrage und langfristige Entwicklung.",
        imageAlt: "Regionen und Standorte – Immobilienmärkte in Deutschland",
      },
      en: {
        title: "Regions & Locations",
        description:
          "Regional markets compared – from metropolises to growth regions, with a focus on location, demand and long-term development.",
        imageAlt: "Regions and locations – property markets in Germany",
      },
    },
    page: {
      de: {
        heroSubheadline:
          "Deutschlands Immobilienmärkte unterscheiden sich deutlich – Lage, Infrastruktur und Nachfrage prägen Wert und Ertrag.",
        heroIntro:
          "Eine fundierte Standortbetrachtung geht über Durchschnittswerte hinaus. immowap ordnet regionale Märkte entlang von Mikrolage, Mietentwicklung und wirtschaftlicher Struktur ein.",
        heroBtnPrimary: "Regionen entdecken",
        articlesLabel: "Standorte",
        articlesDescription:
          "Ausgewählte Märkte und Regionen – strukturiert betrachtet, mit Blick auf Chancen, Risiken und langfristige Perspektiven.",
        editorialLabel: "Einordnung",
        editorialHeadline: "Lage bleibt der entscheidende Faktor",
        editorialText:
          "Marktdaten liefern den Rahmen, doch der Wert einer Immobilie entsteht immer im konkreten Standortkontext. immowap verbindet regionale Markteinblicke mit objektbezogener Wertermittlung.",
        ctaHeadline: "Benötigen Sie eine Standortanalyse?",
        ctaText:
          "Regionale Einordnung ist der Ausgangspunkt – Ihre Entscheidung braucht die passende Objekt- und Finanzierungsperspektive.",
        ctaPrimary: "Analyse starten",
        ctaSecondary: "Kontakt aufnehmen",
        cardActionLabel: "Standortanalyse ansehen →",
        readArticle: "Artikel öffnen",
        closeArticle: "Artikel schließen",
        learnMore: "Mehr erfahren",
      },
      en: {
        heroSubheadline:
          "Germany's property markets differ significantly – location, infrastructure and demand shape value and yield.",
        heroIntro:
          "A well-founded location assessment goes beyond average values. immowap assesses regional markets through micro-location, rental development and economic structure.",
        heroBtnPrimary: "Explore regions",
        articlesLabel: "Locations",
        articlesDescription:
          "Selected markets and regions – considered in a structured way, with a view to opportunities, risks and long-term perspectives.",
        editorialLabel: "Assessment",
        editorialHeadline: "Location remains the decisive factor",
        editorialText:
          "Market data provides the framework, but a property's value always emerges in the specific location context. immowap connects regional market insights with property-specific valuation.",
        ctaHeadline: "Need a location analysis?",
        ctaText:
          "Regional assessment is the starting point – your decision needs the right property and financing perspective.",
        ctaPrimary: "Start analysis",
        ctaSecondary: "Contact us",
        cardActionLabel: "View location analysis →",
        readArticle: "Open article",
        closeArticle: "Close article",
        learnMore: "Learn more",
      },
    },
  },
  {
    id: "trends",
    dePath: "/wissen/markt-trends/trends-entwicklungen",
    enPath: "/knowledge/market-trends/trends-developments",
    label: { de: "Trends & Entwicklungen", en: "Trends & Developments" },
    hub: {
      de: {
        title: "Trends & Entwicklungen",
        description:
          "Strukturelle Veränderungen am Immobilienmarkt – von ESG und Energieeffizienz bis zu Digitalisierung und demografischem Wandel.",
        imageAlt: "Trends und Entwicklungen am Immobilienmarkt",
      },
      en: {
        title: "Trends & Developments",
        description:
          "Structural changes in the property market – from ESG and energy efficiency to digitalisation and demographic change.",
        imageAlt: "Trends and developments in the property market",
      },
    },
    page: {
      de: {
        heroSubheadline:
          "Langfristige Entwicklungen prägen den Markt stärker als kurzfristige Nachrichten.",
        heroIntro:
          "Regulierung, Nachhaltigkeit und technologischer Wandel verändern Bewertung, Finanzierung und Nutzung von Immobilien. immowap ordnet diese Trends im wirtschaftlichen und rechtlichen Kontext ein.",
        heroBtnPrimary: "Trends entdecken",
        articlesLabel: "Themen",
        articlesDescription:
          "Zentrale Entwicklungen, die den deutschen und europäischen Immobilienmarkt nachhaltig beeinflussen.",
        editorialLabel: "Perspektive",
        editorialHeadline: "Struktur statt Schlagzeile",
        editorialText:
          "Trends wirken selten über Nacht – sie entfalten sich über Jahre und Jahrzehnte. immowap betrachtet Entwicklungen mit dem Blick eines langfristigen Marktbeobachters, nicht eines Nachrichtenportals.",
        ctaHeadline: "Benötigen Sie eine individuelle Marktanalyse?",
        ctaText:
          "Trends liefern Orientierung – Ihre Entscheidung braucht den passenden Objekt- und Strategiekontext.",
        ctaPrimary: "Analyse starten",
        ctaSecondary: "Kontakt aufnehmen",
        cardActionLabel: "Entwicklung analysieren →",
        readArticle: "Artikel öffnen",
        closeArticle: "Artikel schließen",
        learnMore: "Mehr erfahren",
      },
      en: {
        heroSubheadline:
          "Long-term developments shape the market more strongly than short-term news.",
        heroIntro:
          "Regulation, sustainability and technological change are altering the valuation, financing and use of property. immowap assesses these trends in economic and legal context.",
        heroBtnPrimary: "Explore trends",
        articlesLabel: "Topics",
        articlesDescription:
          "Central developments sustainably influencing the German and European property market.",
        editorialLabel: "Perspective",
        editorialHeadline: "Structure instead of headlines",
        editorialText:
          "Trends rarely take effect overnight – they unfold over years and decades. immowap considers developments with the eye of a long-term market observer, not a news portal.",
        ctaHeadline: "Need an individual market analysis?",
        ctaText:
          "Trends provide orientation – your decision needs the right property and strategy context.",
        ctaPrimary: "Start analysis",
        ctaSecondary: "Contact us",
        cardActionLabel: "Analyse development →",
        readArticle: "Open article",
        closeArticle: "Close article",
        learnMore: "Learn more",
      },
    },
  },
  {
    id: "daten",
    dePath: "/wissen/markt-trends/daten-einblicke",
    enPath: "/knowledge/market-trends/data-insights",
    label: { de: "Daten & Einblicke", en: "Data & Insights" },
    hub: {
      de: {
        title: "Daten & Einblicke",
        description:
          "Kennzahlen und Marktdaten verständlich eingeordnet – von Kaufpreisen und Mietrenditen bis zu Nachfrageindikatoren.",
        imageAlt: "Daten und Einblicke – Immobilienmarkt Kennzahlen",
      },
      en: {
        title: "Data & Insights",
        description:
          "Metrics and market data explained clearly – from purchase prices and rental yields to demand indicators.",
        imageAlt: "Data and insights – property market metrics",
      },
    },
    page: {
      de: {
        heroSubheadline:
          "Marktdaten sind nur so wertvoll wie ihre Einordnung im jeweiligen Kontext.",
        heroIntro:
          "Kaufpreise pro Quadratmeter, Mietrenditen oder Leerstandsquoten liefern Orientierung – wenn sie richtig interpretiert werden. immowap verbindet harte Daten mit Lage- und Objektbezug.",
        heroBtnPrimary: "Daten entdecken",
        articlesLabel: "Kennzahlen",
        articlesDescription:
          "Zentrale Marktindikatoren – verständlich erklärt und im Sinne einer nachvollziehbaren Wertermittlung eingeordnet.",
        editorialLabel: "Methodik",
        editorialHeadline: "Daten mit Kontext lesen",
        editorialText:
          "Einzelne Kennzahlen können irreführen, wenn sie isoliert betrachtet werden. immowap ordnet Daten immer im Zusammenhang mit Markt, Objekt und individueller Strategie ein.",
        ctaHeadline: "Benötigen Sie eine datenbasierte Analyse?",
        ctaText:
          "Marktdaten liefern die Grundlage – Ihre Entscheidung braucht die passende Objekt- und Finanzierungsperspektive.",
        ctaPrimary: "Analyse starten",
        ctaSecondary: "Kontakt aufnehmen",
        cardActionLabel: "Daten & Einblicke entdecken →",
        readArticle: "Artikel öffnen",
        closeArticle: "Artikel schließen",
        learnMore: "Mehr erfahren",
      },
      en: {
        heroSubheadline:
          "Market data is only as valuable as its assessment in the respective context.",
        heroIntro:
          "Purchase prices per square metre, rental yields or vacancy rates provide orientation – when interpreted correctly. immowap connects hard data with location and property context.",
        heroBtnPrimary: "Explore data",
        articlesLabel: "Metrics",
        articlesDescription:
          "Central market indicators – explained clearly and assessed in the spirit of traceable valuation.",
        editorialLabel: "Methodology",
        editorialHeadline: "Read data with context",
        editorialText:
          "Individual metrics can be misleading when viewed in isolation. immowap always assesses data in relation to market, property and individual strategy.",
        ctaHeadline: "Need a data-based analysis?",
        ctaText:
          "Market data provides the foundation – your decision needs the right property and financing perspective.",
        ctaPrimary: "Start analysis",
        ctaSecondary: "Contact us",
        cardActionLabel: "Discover data & insights →",
        readArticle: "Open article",
        closeArticle: "Close article",
        learnMore: "Learn more",
      },
    },
  },
  {
    id: "investment",
    dePath: "/wissen/markt-trends/investment-strategie",
    enPath: "/knowledge/market-trends/investment-strategy",
    label: { de: "Investment & Strategie", en: "Investment & Strategy" },
    hub: {
      de: {
        title: "Investment & Strategie",
        description:
          "Strategien für unterschiedliche Anlageziele – von Eigennutzung und Kapitalanlage bis zu Fix & Flip und individueller Strategie.",
        imageAlt: "Investment und Strategie – Immobilienanlage",
      },
      en: {
        title: "Investment & Strategy",
        description:
          "Strategies for different investment goals – from owner occupation and investment to fix and flip and individual strategy.",
        imageAlt: "Investment and strategy – property investment",
      },
    },
    page: {
      de: {
        heroSubheadline:
          "Erfolgreiche Immobilienentscheidungen beginnen mit einer klaren Strategie.",
        heroIntro:
          "Eigennutzung, Kapitalanlage oder aktive Wertsteigerung erfordern unterschiedliche Bewertungslogik. immowap ordnet Strategien entlang von Rendite, Risiko und persönlichen Zielen ein.",
        heroBtnPrimary: "Strategien entdecken",
        articlesLabel: "Strategien",
        articlesDescription:
          "Ausgewählte Anlageansätze – strukturiert betrachtet, mit Blick auf Chancen, Risiken und Marktzyklen.",
        editorialLabel: "Haltung",
        editorialHeadline: "Strategie vor Objekt",
        editorialText:
          "Das passende Objekt hängt von der Strategie ab – nicht umgekehrt. immowap unterstützt Entscheidungen, die zu Ihren Zielen, Ihrem Budget und Ihrer Risikobereitschaft passen.",
        ctaHeadline: "Benötigen Sie eine Investmentanalyse?",
        ctaText:
          "Strategische Einordnung ist der Ausgangspunkt – immowap erstellt Analysen abgestimmt auf Ihre Anlageziele.",
        ctaPrimary: "Analyse starten",
        ctaSecondary: "Kontakt aufnehmen",
        cardActionLabel: "Strategie entdecken →",
        readArticle: "Artikel öffnen",
        closeArticle: "Artikel schließen",
        learnMore: "Mehr erfahren",
      },
      en: {
        heroSubheadline:
          "Successful property decisions begin with a clear strategy.",
        heroIntro:
          "Owner occupation, investment or active value enhancement require different valuation logic. immowap assesses strategies through yield, risk and personal objectives.",
        heroBtnPrimary: "Explore strategies",
        articlesLabel: "Strategies",
        articlesDescription:
          "Selected investment approaches – considered in a structured way, with a view to opportunities, risks and market cycles.",
        editorialLabel: "Approach",
        editorialHeadline: "Strategy before property",
        editorialText:
          "The right property depends on strategy – not the other way around. immowap supports decisions that fit your objectives, budget and risk tolerance.",
        ctaHeadline: "Need an investment analysis?",
        ctaText:
          "Strategic assessment is the starting point – immowap creates analyses aligned with your investment goals.",
        ctaPrimary: "Start analysis",
        ctaSecondary: "Contact us",
        cardActionLabel: "Discover strategy →",
        readArticle: "Open article",
        closeArticle: "Close article",
        learnMore: "Learn more",
      },
    },
  },
  {
    id: "zukunft",
    dePath: "/wissen/markt-trends/zukunftsthemen",
    enPath: "/knowledge/market-trends/future-topics",
    label: { de: "Zukunftsthemen", en: "Future Topics" },
    hub: {
      de: {
        title: "Zukunftsthemen",
        description:
          "Perspektiven für den Immobilienmarkt von morgen – von datenbasierten Analysen bis zu Smart Cities und europäischer Marktentwicklung.",
        imageAlt: "Zukunftsthemen – Immobilienmarkt Perspektiven",
      },
      en: {
        title: "Future Topics",
        description:
          "Perspectives for tomorrow's property market – from data-based analyses to smart cities and European market development.",
        imageAlt: "Future topics – property market perspectives",
      },
    },
    page: {
      de: {
        heroSubheadline:
          "Der Immobilienmarkt von morgen wird von heute getroffenen Entscheidungen geprägt.",
        heroIntro:
          "Technologie, Regulierung und demografischer Wandel verändern Bewertung und Nutzung von Immobilien. immowap betrachtet Zukunftsthemen mit dem Blick auf belastbare, langfristige Entscheidungen.",
        heroBtnPrimary: "Themen entdecken",
        articlesLabel: "Perspektiven",
        articlesDescription:
          "Zentrale Zukunftsthemen – eingeordnet mit Blick auf Chancen, Risiken und praktische Relevanz für Eigennutzer und Anleger.",
        editorialLabel: "Blick nach vorn",
        editorialHeadline: "Vorausschauend, nicht spekulativ",
        editorialText:
          "Zukunft lässt sich nicht vorhersagen – aber vorbereiten. immowap ordnet Entwicklungen ein, die langfristig relevant sind, ohne in kurzlebige Prognosen abzudriften.",
        ctaHeadline: "Benötigen Sie eine zukunftsorientierte Analyse?",
        ctaText:
          "Langfristige Perspektiven sind der Ausgangspunkt – immowap erstellt Analysen abgestimmt auf Ihre Ziele.",
        ctaPrimary: "Analyse starten",
        ctaSecondary: "Kontakt aufnehmen",
        cardActionLabel: "Mehr über das Thema erfahren →",
        readArticle: "Artikel öffnen",
        closeArticle: "Artikel schließen",
        learnMore: "Mehr erfahren",
      },
      en: {
        heroSubheadline:
          "Tomorrow's property market is shaped by decisions made today.",
        heroIntro:
          "Technology, regulation and demographic change are altering the valuation and use of property. immowap considers future topics with a view to robust, long-term decisions.",
        heroBtnPrimary: "Explore topics",
        articlesLabel: "Perspectives",
        articlesDescription:
          "Central future topics – assessed with a view to opportunities, risks and practical relevance for owner-occupiers and investors.",
        editorialLabel: "Forward view",
        editorialHeadline: "Forward-looking, not speculative",
        editorialText:
          "The future cannot be predicted – but it can be prepared for. immowap assesses developments that are relevant in the long term, without drifting into short-lived forecasts.",
        ctaHeadline: "Need a forward-looking analysis?",
        ctaText:
          "Long-term perspectives are the starting point – immowap creates analyses aligned with your objectives.",
        ctaPrimary: "Start analysis",
        ctaSecondary: "Contact us",
        cardActionLabel: "Learn more about this topic →",
        readArticle: "Open article",
        closeArticle: "Close article",
        learnMore: "Learn more",
      },
    },
  },
];

export function getMarketTrendsCategory(
  id: MarketTrendsCategoryId,
): MarketTrendsCategoryConfig {
  const category = marketTrendsCategories.find((item) => item.id === id);
  if (!category) {
    throw new Error(`Unknown market trends category: ${id}`);
  }
  return category;
}

export function getMarketTrendsCategoryHref(
  locale: Locale,
  id: MarketTrendsCategoryId,
): string {
  const category = getMarketTrendsCategory(id);
  const prefix = locale === "de" ? "/de" : "/en";
  const path = locale === "de" ? category.dePath : category.enPath;
  return `${prefix}${path}`;
}

export function getMarketTrendsHref(locale: Locale): string {
  return locale === "de" ? "/de/wissen/markt-trends" : "/en/knowledge/market-trends";
}

export function getMarketReportsHref(locale: Locale): string {
  return getMarketTrendsCategoryHref(locale, "marktberichte");
}
