import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";

export type PropertyKnowledgeArticleId =
  | "immobilienbewertung"
  | "finanzierung"
  | "kaufprozess"
  | "dokumente-verstehen"
  | "eigentumswohnung-weg"
  | "vermietung"
  | "sanierung-modernisierung"
  | "steuern"
  | "immobilienstrategien"
  | "immobilienlexikon";

export interface PropertyKnowledgeArticle {
  id: PropertyKnowledgeArticleId;
  icon: "scale" | "banknote" | "key" | "document" | "building" | "home" | "tool" | "receipt" | "chart" | "book";
  de: { href: string; pathSuffix: string; title: string; description: string };
  en: { href: string; pathSuffix: string; title: string; description: string };
}

export const propertyKnowledgeOverview: Record<
  Locale,
  { href: string; pathSuffix: string; title: string }
> = {
  de: {
    href: "/de/wissen/immobilienwissen",
    pathSuffix: "/wissen/immobilienwissen",
    title: "Immobilienwissen",
  },
  en: {
    href: "/en/knowledge/property-knowledge",
    pathSuffix: "/knowledge/property-knowledge",
    title: "Property Knowledge",
  },
};

export const propertyKnowledgeOverviewCopy = {
  de: {
    metaTitle: "Immobilienwissen | immowap",
    metaDescription:
      "Fundiertes Wissen rund um Immobilien, Bewertung, Finanzierung und Strategien. Verständlich aufbereitet und langfristig erweiterbar.",
    heroLabel: "Wissen",
    heroHeadline: "Immobilienwissen",
    heroSubheadline:
      "Fundiertes Wissen rund um Immobilien, Bewertung, Finanzierung und Strategien. Verständlich aufbereitet und langfristig erweiterbar.",
    heroBtnPrimary: "Artikel entdecken",
    heroBtnSecondary: "FAQ & Antworten",
    heroImageAlt: "Elegantes europäisches Wohngebäude – Immobilienwissen",
    introHeadline: "Wissen als Grundlage guter Entscheidungen",
    introText:
      "Immobilienentscheidungen betreffen häufig langfristige finanzielle und persönliche Ziele. Deshalb stellt immowap ausgewählte Themen verständlich und strukturiert dar. Die Inhalte werden kontinuierlich erweitert und orientieren sich an den Bedürfnissen von Eigentümern, Käufern und Investoren.",
    gridLabel: "Themenübersicht",
    gridHeadline: "Immobilienwissen im Überblick",
    gridDescription:
      "Grundlagen, Begriffe und strukturierte Einordnungen zu den wichtigsten Themen rund um Immobilien. Die Sammlung wird kontinuierlich erweitert.",
    outlookLabel: "Ausblick",
    outlookHeadline: "Weitere Inhalte folgen",
    outlookText:
      "Das Immobilienwissen von immowap wird kontinuierlich erweitert. Neben Grundlagenartikeln entstehen zusätzliche Beiträge zu Markttrends, Strategien und häufig gestellten Fragen.",
    outlookBtnMarket: "Markt & Trends",
    outlookBtnFaq: "FAQ & Antworten",
    faqHref: "/de/wissen/faq",
    marketHref: "/de/wissen/markt-trends",
  },
  en: {
    metaTitle: "Property Knowledge | immowap",
    metaDescription:
      "In-depth knowledge on property, valuation, financing and strategy. Clearly structured and continuously expanded.",
    heroLabel: "Knowledge",
    heroHeadline: "Property Knowledge",
    heroSubheadline:
      "In-depth knowledge on property, valuation, financing and strategy. Clearly structured and continuously expanded.",
    heroBtnPrimary: "Explore articles",
    heroBtnSecondary: "FAQ & answers",
    heroImageAlt: "Elegant European residential building – Property Knowledge",
    introHeadline: "Knowledge as the foundation for good decisions",
    introText:
      "Property decisions often involve long-term financial and personal goals. That is why immowap presents selected topics in a clear, structured way. Content is continuously expanded and tailored to the needs of owners, buyers and investors.",
    gridLabel: "Topic overview",
    gridHeadline: "Property Knowledge at a glance",
    gridDescription:
      "Fundamentals, terminology and structured guidance on the most important property topics. This collection is continuously expanded.",
    outlookLabel: "Outlook",
    outlookHeadline: "More content coming soon",
    outlookText:
      "immowap's Property Knowledge is continuously expanded. In addition to foundational articles, further content on market trends, strategies and frequently asked questions is being added.",
    outlookBtnMarket: "Market & trends",
    outlookBtnFaq: "FAQ & answers",
    faqHref: "/en/knowledge/faq",
    marketHref: "/en/knowledge/market-trends",
  },
} as const;

export const propertyKnowledgeArticles: PropertyKnowledgeArticle[] = [
  {
    id: "immobilienbewertung",
    icon: "scale",
    de: {
      href: "/de/wissen/immobilienwissen/immobilienbewertung",
      pathSuffix: "/wissen/immobilienwissen/immobilienbewertung",
      title: "Immobilienbewertung",
      description:
        "Den Wert einer Immobilie richtig verstehen – von Marktwert und Verkehrswert bis zu den wichtigsten Bewertungsverfahren.",
    },
    en: {
      href: "/en/knowledge/property-knowledge/property-valuation",
      pathSuffix: "/knowledge/property-knowledge/property-valuation",
      title: "Property Valuation",
      description:
        "Understanding property value correctly – from market value and fair market value to the most important valuation methods.",
    },
  },
  {
    id: "finanzierung",
    icon: "banknote",
    de: {
      href: "/de/wissen/finanzierung/immobilienfinanzierung-in-deutschland-verstehen",
      pathSuffix:
        "/wissen/finanzierung/immobilienfinanzierung-in-deutschland-verstehen",
      title: "Finanzierung",
      description:
        "Grundlagen der Immobilienfinanzierung, Eigenkapital, Zinsbindung und wichtige Aspekte der Kreditvergabe.",
    },
    en: {
      href: "/en/knowledge/property-knowledge/property-financing",
      pathSuffix: "/knowledge/property-knowledge/property-financing",
      title: "Property Financing",
      description:
        "Fundamentals of property financing, equity, fixed interest periods and key aspects of lending.",
    },
  },
  {
    id: "kaufprozess",
    icon: "key",
    de: {
      href: "/de/wissen/immobilienwissen/kaufprozess",
      pathSuffix: "/wissen/immobilienwissen/kaufprozess",
      title: "Kaufprozess",
      description:
        "Der Immobilienkauf Schritt für Schritt – von der Suche bis zur Übergabe.",
    },
    en: {
      href: "/en/knowledge/property-knowledge/buying-process",
      pathSuffix: "/knowledge/property-knowledge/buying-process",
      title: "Buying Process",
      description:
        "The property purchase step by step – from search to handover.",
    },
  },
  {
    id: "dokumente-verstehen",
    icon: "document",
    de: {
      href: "/de/wissen/immobilienwissen/dokumente-verstehen",
      pathSuffix: "/wissen/immobilienwissen/dokumente-verstehen",
      title: "Dokumente verstehen",
      description:
        "Wichtige Unterlagen vor dem Kauf richtig einordnen und bewerten.",
    },
    en: {
      href: "/en/knowledge/property-knowledge/understanding-documents",
      pathSuffix: "/knowledge/property-knowledge/understanding-documents",
      title: "Understanding Documents",
      description:
        "Correctly assessing and evaluating important documents before purchase.",
    },
  },
  {
    id: "eigentumswohnung-weg",
    icon: "building",
    de: {
      href: "/de/wissen/immobilienwissen/eigentumswohnung-weg",
      pathSuffix: "/wissen/immobilienwissen/eigentumswohnung-weg",
      title: "Eigentumswohnung & WEG",
      description:
        "Hausgeld, Rücklagen, Sonderumlagen und die wichtigsten Grundlagen der Wohnungseigentümergemeinschaft.",
    },
    en: {
      href: "/en/knowledge/property-knowledge/condominiums-homeowners-associations",
      pathSuffix:
        "/knowledge/property-knowledge/condominiums-homeowners-associations",
      title: "Condominiums & Homeowners Associations",
      description:
        "Service charges, reserves, special assessments and the key fundamentals of homeowners associations.",
    },
  },
  {
    id: "vermietung",
    icon: "home",
    de: {
      href: "/de/wissen/immobilienwissen/vermietung",
      pathSuffix: "/wissen/immobilienwissen/vermietung",
      title: "Vermietung",
      description:
        "Grundlagen für Eigentümer und Investoren rund um Mietvertrag, Nebenkosten und Vermietung.",
    },
    en: {
      href: "/en/knowledge/property-knowledge/renting-out-property",
      pathSuffix: "/knowledge/property-knowledge/renting-out-property",
      title: "Renting Out Property",
      description:
        "Fundamentals for owners and investors on tenancy agreements, service charges and letting.",
    },
  },
  {
    id: "sanierung-modernisierung",
    icon: "tool",
    de: {
      href: "/de/wissen/immobilienwissen/sanierung-modernisierung",
      pathSuffix: "/wissen/immobilienwissen/sanierung-modernisierung",
      title: "Sanierung & Modernisierung",
      description:
        "Renovieren, modernisieren oder sanieren – welche Maßnahmen sinnvoll sein können.",
    },
    en: {
      href: "/en/knowledge/property-knowledge/renovation-modernization",
      pathSuffix: "/knowledge/property-knowledge/renovation-modernization",
      title: "Renovation & Modernization",
      description:
        "Renovating, modernising or refurbishing – which measures may make sense.",
    },
  },
  {
    id: "steuern",
    icon: "receipt",
    de: {
      href: "/de/wissen/immobilienwissen/steuern-rund-um-immobilien",
      pathSuffix: "/wissen/immobilienwissen/steuern-rund-um-immobilien",
      title: "Steuern rund um Immobilien",
      description:
        "Wichtige steuerliche Aspekte beim Kauf, Besitz und Verkauf von Immobilien.",
    },
    en: {
      href: "/en/knowledge/property-knowledge/property-taxes",
      pathSuffix: "/knowledge/property-knowledge/property-taxes",
      title: "Property Taxes",
      description:
        "Important tax aspects when buying, owning and selling property.",
    },
  },
  {
    id: "immobilienstrategien",
    icon: "chart",
    de: {
      href: "/de/wissen/immobilienwissen/immobilienstrategien",
      pathSuffix: "/wissen/immobilienwissen/immobilienstrategien",
      title: "Immobilienstrategien",
      description:
        "Eigennutzung, Kapitalanlage, Fix & Flip, Mehrfamilienhäuser und unterschiedliche Investitionsansätze.",
    },
    en: {
      href: "/en/knowledge/property-knowledge/property-strategies",
      pathSuffix: "/knowledge/property-knowledge/property-strategies",
      title: "Property Strategies",
      description:
        "Owner-occupation, buy-to-let, fix & flip, multi-family homes and different investment approaches.",
    },
  },
  {
    id: "immobilienlexikon",
    icon: "book",
    de: {
      href: "/de/wissen/immobilienwissen/immobilienlexikon",
      pathSuffix: "/wissen/immobilienwissen/immobilienlexikon",
      title: "Immobilienlexikon",
      description:
        "Die wichtigsten Begriffe rund um Immobilien einfach erklärt.",
    },
    en: {
      href: "/en/knowledge/property-knowledge/real-estate-glossary",
      pathSuffix: "/knowledge/property-knowledge/real-estate-glossary",
      title: "Real Estate Glossary",
      description:
        "The most important property terms explained simply and clearly.",
    },
  },
];

/** Path map entries for language switcher (de suffix → en suffix). */
export function getPropertyKnowledgePathMap(): Record<string, string> {
  const map: Record<string, string> = {
    [propertyKnowledgeOverview.de.pathSuffix]:
      propertyKnowledgeOverview.en.pathSuffix,
  };

  for (const article of propertyKnowledgeArticles) {
    map[article.de.pathSuffix] = article.en.pathSuffix;
  }

  return map;
}

export function getPropertyKnowledgeArticle(
  id: PropertyKnowledgeArticleId,
): PropertyKnowledgeArticle {
  const article = propertyKnowledgeArticles.find((a) => a.id === id);
  if (!article) throw new Error(`Unknown property knowledge article: ${id}`);
  return article;
}

export function getPropertyKnowledgeArticleHref(
  locale: Locale,
  id: PropertyKnowledgeArticleId,
): string {
  const article = getPropertyKnowledgeArticle(id);
  return article[locale].href;
}

export const propertyKnowledgeUi = {
  de: {
    home: "Startseite",
    knowledge: "Wissen",
    category: "Immobilienwissen",
    categoryShort: "Wissen · Immobilienwissen",
    readTime: (minutes: number) => `ca. ${minutes} Minuten Lesezeit`,
    date: "Juni 2025",
    backToAll: "Alle Artikel in Immobilienwissen",
    analyseStarten: "Analyse starten",
    anfrageSenden: "Anfrage senden",
    mehrErfahren: "Mehr erfahren",
    demnaechst: "Demnächst",
    baldVerfuegbar: "Bald verfügbar",
    relatedLabel: "Immobilienwissen",
  },
  en: {
    home: "Home",
    knowledge: "Knowledge",
    category: "Property Knowledge",
    categoryShort: "Knowledge · Property Knowledge",
    readTime: (minutes: number) => `approx. ${minutes} min read`,
    date: "June 2025",
    backToAll: "All articles in Property Knowledge",
    analyseStarten: "Start analysis",
    anfrageSenden: "Send enquiry",
    mehrErfahren: "Learn more",
    demnaechst: "Coming soon",
    baldVerfuegbar: "Coming soon",
    relatedLabel: "Property Knowledge",
  },
} as const;

export function getPropertyKnowledgeBreadcrumb(
  locale: Locale,
  currentTitle: string,
) {
  const ui = propertyKnowledgeUi[locale];
  return [
    { label: ui.home, href: getRoute(locale, "home") },
    { label: ui.knowledge, href: getRoute(locale, "knowledge") },
    {
      label: propertyKnowledgeOverview[locale].title,
      href: propertyKnowledgeOverview[locale].href,
    },
    { label: currentTitle, href: null as string | null },
  ];
}

export function getRelatedArticles(locale: Locale, excludeId?: PropertyKnowledgeArticleId) {
  return propertyKnowledgeArticles
    .filter((a) => a.id !== excludeId)
    .map((a) => ({
      title: a[locale].title,
      description: a[locale].description,
      href: a[locale].href,
    }));
}
