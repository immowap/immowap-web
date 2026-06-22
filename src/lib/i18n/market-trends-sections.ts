export interface MarketTrendsArticleContent {
  title: string;
  description: string;
  expanded: string;
  topics?: string[];
}

export interface MarketTrendsArticle {
  id: string;
  image: string;
  imageAlt: { de: string; en: string };
  de: MarketTrendsArticleContent;
  en: MarketTrendsArticleContent;
}

export interface MarketTrendsSection {
  id: string;
  label: { de: string; en: string };
  headline: { de: string; en: string };
  articles: MarketTrendsArticle[];
}

const REGION_TOPICS = {
  de: [
    "Kaufpreise",
    "Mietpreise",
    "Renditen",
    "Mikro- und Makrolage",
    "Infrastruktur",
    "Chancen",
    "Risiken",
  ],
  en: [
    "Purchase prices",
    "Rental prices",
    "Yields",
    "Micro and macro location",
    "Infrastructure",
    "Opportunities",
    "Risks",
  ],
} as const;

function regionArticle(
  id: string,
  cityDe: string,
  cityEn: string,
  image: string,
  de: Omit<MarketTrendsArticleContent, "topics">,
  en: Omit<MarketTrendsArticleContent, "topics">,
): MarketTrendsArticle {
  return {
    id,
    image,
    imageAlt: {
      de: `${cityDe} – Immobilienmarkt und Standortanalyse`,
      en: `${cityEn} – property market and location analysis`,
    },
    de: { ...de, topics: [...REGION_TOPICS.de] },
    en: { ...en, topics: [...REGION_TOPICS.en] },
  };
}

export const marketTrendsSections: MarketTrendsSection[] = [
  {
    id: "marktberichte",
    label: { de: "Marktberichte", en: "Market Reports" },
    headline: {
      de: "Einordnung des deutschen Immobilienmarkts",
      en: "Assessing the German property market",
    },
    articles: [],
  },
  {
    id: "regionen",
    label: { de: "Regionen & Standorte", en: "Regions & Locations" },
    headline: {
      de: "Regionale Märkte im Vergleich",
      en: "Regional markets compared",
    },
    articles: [
      regionArticle(
        "duesseldorf",
        "Düsseldorf",
        "Düsseldorf",
        "/images/gewerbeimmobilien/typ-1.jpg",
        {
          title: "Düsseldorf",
          description:
            "Düsseldorf verbindet Wirtschaftskraft, internationale Nachfrage und eine differenzierte Wohnungsmarktstruktur. Lage und Segment bestimmen hier maßgeblich Wert und Ertrag.",
          expanded:
            "Als Landeshauptstadt und Wirtschaftsstandort zieht Düsseldorf stabilisierende Nachfrage an – mit deutlichen Unterschieden zwischen Innenstadtlagen, Rheinnähe und peripheren Stadtteilen. immowap ordnet Kauf- und Mietniveau, Renditepotenzial und Infrastruktur im Mikro- und Makrokontext ein.",
        },
        {
          title: "Düsseldorf",
          description:
            "Düsseldorf combines economic strength, international demand and a differentiated housing market structure. Location and segment largely determine value and yield here.",
          expanded:
            "As state capital and business location, Düsseldorf attracts stabilising demand – with clear differences between city centre locations, Rhine proximity and peripheral districts. immowap assesses purchase and rent levels, yield potential and infrastructure in micro and macro context.",
        },
      ),
      regionArticle(
        "koeln",
        "Köln",
        "Cologne",
        "/images/fix-flip/section1.jpg",
        {
          title: "Köln",
          description:
            "Köln bietet eine breite Nachfragebasis, starke Mietmärkte und regionale Unterschiede zwischen Zentrums- und Randlagen. Eine präzise Standortanalyse ist entscheidend.",
          expanded:
            "Bevölkerungswachstum, Universitätsstandort und vielfältige Stadtteilstrukturen prägen den Kölner Markt. immowap vergleicht Kaufpreise, Mietrenditen und Entwicklungspotenzial entlang relevanter Lagekriterien – für eine nachvollziehbare Wertermittlung im regionalen Kontext.",
        },
        {
          title: "Cologne",
          description:
            "Cologne offers a broad demand base, strong rental markets and regional differences between central and peripheral locations. Precise location analysis is essential.",
          expanded:
            "Population growth, university location and diverse district structures shape the Cologne market. immowap compares purchase prices, rental yields and development potential along relevant location criteria – for traceable valuation in the regional context.",
        },
      ),
      regionArticle(
        "berlin",
        "Berlin",
        "Berlin",
        "/images/mehrfamilienhaeuser/hero.jpg",
        {
          title: "Berlin",
          description:
            "Berlin bleibt einer der größten und dynamischsten Immobilienmärkte Deutschlands – mit erheblichen Spannweiten zwischen Bezirken und Objektsegmenten.",
          expanded:
            "Demografie, Regulierung und Investitionsnachfrage beeinflussen Kauf- und Mietpreise unterschiedlich. immowap analysiert Berlin entlang von Mikrolage, Mietrendite, Infrastrukturausbau und langfristiger Bevölkerungsentwicklung. So werden Chancen und Risiken für unterschiedliche Strategien klarer.",
        },
        {
          title: "Berlin",
          description:
            "Berlin remains one of Germany's largest and most dynamic property markets – with considerable spread between districts and property segments.",
          expanded:
            "Demographics, regulation and investment demand influence purchase and rent prices differently. immowap analyses Berlin through micro-location, rental yield, infrastructure expansion and long-term population development. This clarifies opportunities and risks for different strategies.",
        },
      ),
      regionArticle(
        "muenchen",
        "München",
        "Munich",
        "/images/sanierung/hero.jpg",
        {
          title: "München",
          description:
            "München steht für hohe Kaufpreise, begrenztes Angebot und eine starke Wirtschaftsregion. Rendite und Wertentwicklung hängen hier besonders eng mit der Lage zusammen.",
          expanded:
            "Arbeitsmarkt, Tech- und Industriestandorte sowie begrenzte Baulandverfügbarkeit prägen den Münchner Markt. immowap ordnet Preisniveau, Mietrendite und langfristige Nachfrage in den bayerischen Metropolraum ein – mit Fokus auf belastbare Wertermittlung und Risikotransparenz.",
        },
        {
          title: "Munich",
          description:
            "Munich stands for high purchase prices, limited supply and a strong economic region. Yield and value development are particularly closely linked to location here.",
          expanded:
            "Labour market, tech and industrial locations as well as limited land availability shape the Munich market. immowap assesses price level, rental yield and long-term demand in the Bavarian metropolitan area – with a focus on robust valuation and risk transparency.",
        },
      ),
      regionArticle(
        "hamburg",
        "Hamburg",
        "Hamburg",
        "/images/wissen/kaufprozess/hero.jpg",
        {
          title: "Hamburg",
          description:
            "Hamburg vereint Hafenwirtschaft, Wachstumscluster und unterschiedliche Wohnlagen – vom urbanen Zentrum bis zu wasserorientierten Quartieren.",
          expanded:
            "Nachfrage, Neubauaktivität und Infrastrukturprojekte beeinflussen den Markt segmentweise. immowap betrachtet Kaufpreise, Mietniveau und Renditepotenzial in Abhängigkeit von Stadtteil, Erreichbarkeit und langfristiger Stadtentwicklung.",
        },
        {
          title: "Hamburg",
          description:
            "Hamburg combines port economy, growth clusters and diverse residential locations – from the urban centre to water-oriented districts.",
          expanded:
            "Demand, new-build activity and infrastructure projects influence the market by segment. immowap considers purchase prices, rent levels and yield potential depending on district, accessibility and long-term urban development.",
        },
      ),
      regionArticle(
        "frankfurt",
        "Frankfurt",
        "Frankfurt",
        "/images/gewerbeimmobilien/hero.jpg",
        {
          title: "Frankfurt",
          description:
            "Frankfurt ist Finanz- und Businessmetropole mit internationaler Nachfrage. Wohn- und Investmentimmobilien unterliegen hier besonderen Marktdynamiken.",
          expanded:
            "Zentrumslagen, Mainufer und angrenzende Stadtteile weisen unterschiedliche Preis- und Renditeprofile auf. immowap analysiert Frankfurts Mikrolage, Mietmarkt und langfristige Wirtschaftsstruktur – als Grundlage für fundierte Kauf- und Anlageentscheidungen.",
        },
        {
          title: "Frankfurt",
          description:
            "Frankfurt is a financial and business metropolis with international demand. Residential and investment property are subject to particular market dynamics here.",
          expanded:
            "Central locations, Main riverfront and adjacent districts show different price and yield profiles. immowap analyses Frankfurt's micro-location, rental market and long-term economic structure – as a basis for well-founded purchase and investment decisions.",
        },
      ),
      regionArticle(
        "ruhrgebiet",
        "Ruhrgebiet",
        "Ruhr region",
        "/images/mehrfamilienhaeuser/strategie-3.jpg",
        {
          title: "Ruhrgebiet",
          description:
            "Das Ruhrgebiet bietet vielfältige Märkte mit unterschiedlichen Entwicklungspfaden – von strukturstarken Zentren bis zu transformierenden Quartieren.",
          expanded:
            "Kaufpreise, Mietrenditen und Leerstandsrisiken variieren deutlich zwischen Städten und Lagen. immowap ordnet das Ruhrgebiet anhand von Infrastruktur, Bevölkerungsentwicklung und wirtschaftlicher Struktur ein – für realistische Chancen- und Risikobewertungen.",
        },
        {
          title: "Ruhr region",
          description:
            "The Ruhr region offers diverse markets with different development paths – from structurally strong centres to transforming districts.",
          expanded:
            "Purchase prices, rental yields and vacancy risks vary significantly between cities and locations. immowap assesses the Ruhr region through infrastructure, population development and economic structure – for realistic opportunity and risk evaluation.",
        },
      ),
      regionArticle(
        "wachstumsregionen",
        "Wachstumsregionen",
        "Growth regions",
        "/images/kapitalanlage/hero.jpg",
        {
          title: "Wachstumsregionen",
          description:
            "Neben Metropolen gewinnen ausgewählte Wachstumsregionen an Bedeutung – getrieben von Wirtschaft, Mobilität und demografischer Entwicklung.",
          expanded:
            "Regionen mit Ausbau von Infrastruktur, Arbeitsplätzen und Wohnraum können langfristige Perspektiven bieten – bei unterschiedlichem Risikoprofil. immowap identifiziert und bewertet Wachstumsregionen entlang von Kaufpreisentwicklung, Mietnachfrage und Standortqualität.",
        },
        {
          title: "Growth regions",
          description:
            "Beyond metropolises, selected growth regions are gaining importance – driven by economy, mobility and demographic development.",
          expanded:
            "Regions with expanding infrastructure, jobs and housing can offer long-term perspectives – with varying risk profiles. immowap identifies and evaluates growth regions through purchase price development, rental demand and location quality.",
        },
      ),
    ],
  },
  {
    id: "trends",
    label: { de: "Trends & Entwicklungen", en: "Trends & Developments" },
    headline: {
      de: "Strukturelle Entwicklungen am Markt",
      en: "Structural market developments",
    },
    articles: [
      {
        id: "esg",
        image: "/images/sanierung/section1.jpg",
        imageAlt: { de: "ESG und nachhaltige Immobilien", en: "ESG and sustainable property" },
        de: {
          title: "ESG",
          description:
            "Environmental, Social und Governance-Kriterien prägen Investitions- und Finanzierungsentscheidungen zunehmend. Nachhaltigkeit wird zum relevanten Werttreiber.",
          expanded:
            "Energieeffizienz, soziale Nutzung und transparente Governance beeinflussen Marktzugang, Refinanzierung und langfristige Werthaltigkeit. immowap ordnet ESG-Faktoren in die Bewertung und Strategie ein – ohne sie von Rendite und Risiko zu trennen.",
        },
        en: {
          title: "ESG",
          description:
            "Environmental, social and governance criteria increasingly shape investment and financing decisions. Sustainability is becoming a relevant value driver.",
          expanded:
            "Energy efficiency, social use and transparent governance influence market access, refinancing and long-term value retention. immowap integrates ESG factors into valuation and strategy – without separating them from yield and risk.",
        },
      },
      {
        id: "energieeffizienz",
        image: "/images/wissen/dokumente-verstehen/energieausweis.jpg",
        imageAlt: { de: "Energieeffizienz und Gebäudewert", en: "Energy efficiency and building value" },
        de: {
          title: "Energieeffizienz",
          description:
            "Der Energieausweis und die energetische Gebäudequalität beeinflussen Vermietbarkeit, Sanierungsbedarf und langfristige Werthaltigkeit.",
          expanded:
            "Steigende Anforderungen an Effizienz und Betriebskosten verändern die Attraktivität von Bestandsimmobilien. immowap bewertet Energieeffizienz im Zusammenhang mit Modernisierungskosten, Mietpotenzial und regulatorischem Rahmen – für eine realistische Gesamtbetrachtung.",
        },
        en: {
          title: "Energy efficiency",
          description:
            "Energy certificates and building energy quality influence lettability, renovation needs and long-term value retention.",
          expanded:
            "Rising requirements for efficiency and operating costs are changing the attractiveness of existing stock. immowap evaluates energy efficiency together with modernisation costs, rental potential and regulatory framework – for a realistic overall assessment.",
        },
      },
      {
        id: "ki",
        image: "/images/knowledge/finanzierung-intro.jpg",
        imageAlt: { de: "Künstliche Intelligenz in der Immobilienanalyse", en: "Artificial intelligence in property analysis" },
        de: {
          title: "KI",
          description:
            "Künstliche Intelligenz unterstützt Datenanalyse, Mustererkennung und Bewertungsprozesse – als Ergänzung zu fachlicher Expertise, nicht als Ersatz.",
          expanded:
            "KI kann große Datenmengen strukturieren und Indikatoren schneller auswerten. immowap nutzt datenbasierte Methoden, um Markt- und Objektinformationen präziser einzuordnen – stets im Rahmen nachvollziehbarer, individueller Analyse.",
        },
        en: {
          title: "AI",
          description:
            "Artificial intelligence supports data analysis, pattern recognition and valuation processes – as a complement to professional expertise, not a replacement.",
          expanded:
            "AI can structure large data volumes and evaluate indicators more quickly. immowap uses data-based methods to assess market and property information more precisely – always within the framework of traceable, individual analysis.",
        },
      },
      {
        id: "smart-home",
        image: "/images/fix-flip/hero.jpg",
        imageAlt: { de: "Smart Home und digitale Gebäudetechnik", en: "Smart home and digital building technology" },
        de: {
          title: "Smart Home",
          description:
            "Digitale Gebäudetechnik und Smart-Home-Lösungen gewinnen an Relevanz für Komfort, Effizienz und zukünftige Vermietbarkeit.",
          expanded:
            "Vernetzte Systeme können Betriebskosten senken und Wohnqualität erhöhen – mit unterschiedlichem Investitionsaufwand. immowap ordnet Smart-Home-Potenzial im Objektkontext ein und bewertet, ob technische Upgrades werthaltig und wirtschaftlich sinnvoll sind.",
        },
        en: {
          title: "Smart home",
          description:
            "Digital building technology and smart home solutions are gaining relevance for comfort, efficiency and future lettability.",
          expanded:
            "Connected systems can reduce operating costs and increase living quality – with varying investment outlay. immowap assesses smart home potential in the property context and evaluates whether technical upgrades are value-retaining and economically sensible.",
        },
      },
      {
        id: "demografischer-wandel",
        image: "/images/wissen/immobilienstrategien/hero.jpg",
        imageAlt: { de: "Demografischer Wandel und Wohnbedarf", en: "Demographic change and housing demand" },
        de: {
          title: "Demografischer Wandel",
          description:
            "Alterung, Urbanisierung und Haushaltsstrukturen verändern langfristig den Wohnbedarf und die Nachfrage nach Immobilientypen.",
          expanded:
            "Regionen mit Zuwachs unterscheiden sich deutlich von schrumpfenden Märkten. immowap berücksichtigt demografische Entwicklung bei Standort- und Strategiebewertung – als Grundlage für nachhaltige Entscheidungen über Eigennutzung und Kapitalanlage.",
        },
        en: {
          title: "Demographic change",
          description:
            "Ageing, urbanisation and household structures are changing housing demand and demand for property types in the long term.",
          expanded:
            "Regions with growth differ significantly from shrinking markets. immowap considers demographic development in location and strategy assessment – as a basis for sustainable decisions on owner occupation and investment.",
        },
      },
      {
        id: "gesetze-sanierungspflichten",
        image: "/images/wissen/sanierung-modernisierung-hero.jpg",
        imageAlt: { de: "Gesetze und Sanierungspflichten", en: "Regulation and renovation obligations" },
        de: {
          title: "Gesetze / Sanierungspflichten",
          description:
            "Regulatorische Anforderungen an Energie, Mietrecht und Gebäudestandard beeinflussen Kosten, Werthaltigkeit und Investitionsstrategien.",
          expanded:
            "Sanierungspflichten und gesetzliche Vorgaben können kurzfristige Belastungen mit langfristiger Werterhaltung verbinden. immowap ordnet regulatorische Risiken und Modernisierungsbedarf in die Gesamtbewertung ein – transparent und objektbezogen.",
        },
        en: {
          title: "Regulation / renovation obligations",
          description:
            "Regulatory requirements for energy, tenancy law and building standards influence costs, value retention and investment strategies.",
          expanded:
            "Renovation obligations and legal requirements can combine short-term burden with long-term value preservation. immowap integrates regulatory risks and modernisation needs into overall valuation – transparently and property-specific.",
        },
      },
      {
        id: "digitalisierung",
        image: "/images/knowledge/dokumente-verstehen.jpg",
        imageAlt: { de: "Digitalisierung im Immobiliensektor", en: "Digitalisation in the property sector" },
        de: {
          title: "Digitalisierung",
          description:
            "Digitale Prozesse verändern Suche, Bewertung, Finanzierung und Verwaltung von Immobilien – mit Auswirkungen auf Transparenz und Entscheidungsgeschwindigkeit.",
          expanded:
            "Von Online-Exposés bis zu datenbasierten Analysen eröffnen digitale Werkzeuge neue Möglichkeiten – erfordern aber weiterhin fachliche Einordnung. immowap verbindet digitale Analysemethoden mit strukturierter Wertermittlung und individueller Beratung.",
        },
        en: {
          title: "Digitalisation",
          description:
            "Digital processes are changing search, valuation, financing and management of property – with effects on transparency and decision speed.",
          expanded:
            "From online listings to data-based analyses, digital tools open new possibilities – but still require professional assessment. immowap combines digital analysis methods with structured valuation and individual advisory.",
        },
      },
      {
        id: "europaeische-maerkte",
        image: "/images/gewerbeimmobilien/typ-2.jpg",
        imageAlt: { de: "Europäische Immobilienmärkte", en: "European property markets" },
        de: {
          title: "Europäische Märkte",
          description:
            "Immobilienmärkte in Europa entwickeln sich unterschiedlich – geprägt von Zinsen, Regulierung und regionaler Wirtschaftsdynamik.",
          expanded:
            "Für grenzüberschreitende Investoren und strategische Vergleiche ist ein strukturierter Blick auf europäische Märkte relevant. immowap ordnet internationale Entwicklungen ein und verbindet sie mit der Bewertungslogik des deutschen Marktes.",
        },
        en: {
          title: "European markets",
          description:
            "Property markets in Europe are developing differently – shaped by interest rates, regulation and regional economic dynamics.",
          expanded:
            "For cross-border investors and strategic comparisons, a structured view of European markets is relevant. immowap assesses international developments and connects them with German market valuation logic.",
        },
      },
      {
        id: "wohnen-der-zukunft",
        image: "/images/wissen/finanzierung/intro.jpg",
        imageAlt: { de: "Wohnen der Zukunft", en: "Future living" },
        de: {
          title: "Wohnen der Zukunft",
          description:
            "Neue Wohnformen, hybride Nutzungen und veränderte Lebensmodelle prägen die Nachfrage nach flexiblen, qualitativ hochwertigen Immobilien.",
          expanded:
            "Homeoffice, Mehrgenerationenwohnen und Quartierskonzepte verändern Anforderungen an Grundrisse und Lage. immowap betrachtet Zukunftstrends im Kontext von Werthaltigkeit, Vermietbarkeit und langfristiger Nachfrage.",
        },
        en: {
          title: "Future living",
          description:
            "New forms of housing, hybrid uses and changing lifestyles are shaping demand for flexible, high-quality property.",
          expanded:
            "Remote work, multi-generational living and district concepts are changing requirements for layouts and location. immowap considers future trends in the context of value retention, lettability and long-term demand.",
        },
      },
      {
        id: "zukunft-des-neubaus",
        image: "/images/fix-flip/section3.jpg",
        imageAlt: { de: "Zukunft des Neubaus", en: "Future of new construction" },
        de: {
          title: "Zukunft des Neubaus",
          description:
            "Der Neubau steht vor strukturellen Herausforderungen – von Baukosten über Genehmigungen bis zu Nachhaltigkeitsanforderungen.",
          expanded:
            "Weniger Fertigstellungen verschärfen das Angebot, während Qualitäts- und Effizienzstandards steigen. immowap ordnet Neubauperspektiven regional und strategisch ein – als Ergänzung zur Bewertung von Bestandsimmobilien.",
        },
        en: {
          title: "Future of new construction",
          description:
            "New construction faces structural challenges – from building costs and approvals to sustainability requirements.",
          expanded:
            "Fewer completions tighten supply while quality and efficiency standards rise. immowap assesses new-build perspectives regionally and strategically – as a complement to existing stock valuation.",
        },
      },
    ],
  },
  {
    id: "daten",
    label: { de: "Daten & Einblicke", en: "Data & Insights" },
    headline: {
      de: "Kennzahlen für fundierte Entscheidungen",
      en: "Key figures for informed decisions",
    },
    articles: [
      {
        id: "kaufpreis-qm",
        image: "/images/knowledge/kaufprozess-section.jpg",
        imageAlt: { de: "Kaufpreis pro Quadratmeter", en: "Purchase price per square metre" },
        de: {
          title: "Kaufpreis / qm",
          description:
            "Der Kaufpreis pro Quadratmeter ist ein zentraler Vergleichswert – muss aber immer im Kontext von Lage, Zustand und Objekttyp interpretiert werden.",
          expanded:
            "Makrostatistiken liefern Orientierung, ersetzen aber keine objektbezogene Wertermittlung. immowap nutzt Kaufpreis/qm-Daten als Ausgangspunkt und verbindet sie mit Vergleichsobjekten, Mikrolage und Marktentwicklung.",
        },
        en: {
          title: "Purchase price / sqm",
          description:
            "Purchase price per square metre is a central comparison value – but must always be interpreted in the context of location, condition and property type.",
          expanded:
            "Macro statistics provide orientation but do not replace property-specific valuation. immowap uses purchase price/sqm data as a starting point and connects it with comparable properties, micro-location and market development.",
        },
      },
      {
        id: "mietrendite",
        image: "/images/kapitalanlage/strategie-1.jpg",
        imageAlt: { de: "Mietrendite als Kennzahl", en: "Rental yield as a key figure" },
        de: {
          title: "Mietrendite",
          description:
            "Die Mietrendite zeigt das Verhältnis von Mieteinnahmen zum Kaufpreis – ein wichtiger Indikator für Kapitalanleger, jedoch nicht der einzige.",
          expanded:
            "Brutto- und Nettorendite, Leerstandsrisiko und Nebenkosten müssen gemeinsam betrachtet werden. immowap berechnet und ordnet Mietrenditen im Markt- und Objektkontext ein – für realistische Ertragsbewertungen.",
        },
        en: {
          title: "Rental yield",
          description:
            "Rental yield shows the ratio of rental income to purchase price – an important indicator for investors, but not the only one.",
          expanded:
            "Gross and net yield, vacancy risk and ancillary costs must be considered together. immowap calculates and assesses rental yields in market and property context – for realistic income evaluation.",
        },
      },
      {
        id: "kaufpreisfaktor",
        image: "/images/mehrfamilienhaeuser/strategie-1.jpg",
        imageAlt: { de: "Kaufpreisfaktor und Bewertung", en: "Price factor and valuation" },
        de: {
          title: "Kaufpreisfaktor",
          description:
            "Der Kaufpreisfaktor setzt Kaufpreis in Relation zur Jahresnettokaltmiete und dient als schneller Vergleichsindikator am Markt.",
          expanded:
            "Niedrige Faktoren deuten auf höhere Rendite hin, können aber auch höhere Risiken oder Sanierungsbedarf signalisieren. immowap interpretiert den Kaufpreisfaktor zusammen mit Lage, Mietentwicklung und Objektzustand.",
        },
        en: {
          title: "Price factor",
          description:
            "The price factor relates purchase price to annual net cold rent and serves as a quick comparison indicator in the market.",
          expanded:
            "Low factors indicate higher yield but can also signal higher risks or renovation needs. immowap interprets the price factor together with location, rent development and property condition.",
        },
      },
      {
        id: "leerstandsquote",
        image: "/images/wissen/dokumente-verstehen/analyse.jpg",
        imageAlt: { de: "Leerstandsquote und Marktrisiko", en: "Vacancy rate and market risk" },
        de: {
          title: "Leerstandsquote",
          description:
            "Die Leerstandsquote misst ungenutzten Wohn- oder Gewerberaum und ist ein wichtiger Indikator für Marktspannung und Risiko.",
          expanded:
            "Regionale und segmentbezogene Unterschiede sind erheblich. immowap berücksichtigt Leerstandsquoten bei Standort- und Investmentbewertung – als Teil einer ganzheitlichen Risikoanalyse.",
        },
        en: {
          title: "Vacancy rate",
          description:
            "The vacancy rate measures unused residential or commercial space and is an important indicator of market tension and risk.",
          expanded:
            "Regional and segment-related differences are considerable. immowap considers vacancy rates in location and investment assessment – as part of a holistic risk analysis.",
        },
      },
      {
        id: "bevoelkerungsentwicklung",
        image: "/images/wissen/immobilienwissen/hero.jpg",
        imageAlt: { de: "Bevölkerungsentwicklung und Nachfrage", en: "Population development and demand" },
        de: {
          title: "Bevölkerungsentwicklung",
          description:
            "Bevölkerungszu- oder -abnahme beeinflusst langfristig Wohnraumbedarf, Mietniveau und Preisentwicklung in einer Region.",
          expanded:
            "Demografische Trends sind ein zentraler Makroindikator für Immobilienmärkte. immowap verbindet Bevölkerungsdaten mit Arbeitsmarkt, Infrastruktur und Angebot – für belastbare Standortprognosen.",
        },
        en: {
          title: "Population development",
          description:
            "Population growth or decline influences housing demand, rent levels and price development in a region in the long term.",
          expanded:
            "Demographic trends are a central macro indicator for property markets. immowap connects population data with labour market, infrastructure and supply – for robust location forecasts.",
        },
      },
      {
        id: "baukosten",
        image: "/images/sanierung/section3.jpg",
        imageAlt: { de: "Baukosten und Immobilienwirtschaft", en: "Construction costs and property economics" },
        de: {
          title: "Baukosten",
          description:
            "Steigende Baukosten beeinflussen Neubauprojekte, Sanierungsentscheidungen und die Wirtschaftlichkeit von Immobilieninvestments.",
          expanded:
            "Material, Arbeitskosten und Regulierung treiben die Kostenentwicklung. immowap ordnet Baukosten in Modernisierungs- und Neubaubewertungen ein – als relevanter Faktor für Gesamtrendite und Werthaltigkeit.",
        },
        en: {
          title: "Construction costs",
          description:
            "Rising construction costs influence new-build projects, renovation decisions and the economic viability of property investments.",
          expanded:
            "Materials, labour costs and regulation drive cost development. immowap integrates construction costs into modernisation and new-build valuations – as a relevant factor for overall yield and value retention.",
        },
      },
      {
        id: "preis-miet-verhaeltnis",
        image: "/images/knowledge/immobilienstrategien.jpg",
        imageAlt: { de: "Preis-Miet-Verhältnis", en: "Price-to-rent ratio" },
        de: {
          title: "Preis-Miet-Verhältnis",
          description:
            "Das Verhältnis von Kaufpreis zu Miete zeigt, ob ein Markt eher kauf- oder mietorientiert bewertet wird – relevant für Eigennutzung und Kapitalanlage.",
          expanded:
            "Hohe Preis-Miet-Verhältnisse können auf eingepreiste Wertsteigerungserwartungen hindeuten. immowap nutzt diese Kennzahl zur Einordnung von Marktzyklen und Strategieentscheidungen.",
        },
        en: {
          title: "Price-to-rent ratio",
          description:
            "The ratio of purchase price to rent shows whether a market is valued more for buying or renting – relevant for owner occupation and investment.",
          expanded:
            "High price-to-rent ratios may indicate priced-in value appreciation expectations. immowap uses this figure to assess market cycles and strategy decisions.",
        },
      },
      {
        id: "inflation-daten",
        image: "/images/wissen/steuern/hero.jpg",
        imageAlt: { de: "Inflation als Marktindikator", en: "Inflation as a market indicator" },
        de: {
          title: "Inflation",
          description:
            "Inflationsraten beeinflussen Kaufkraft, Finanzierungskosten und die Attraktivität von Sachwertanlagen wie Immobilien.",
          expanded:
            "Immobilien können langfristig inflationsbedingten Schutz bieten – abhängig von Finanzierung und Marktphase. immowap berücksichtigt Inflation in der Gesamtbewertung von Ertrag, Risiko und Vermögensstrategie.",
        },
        en: {
          title: "Inflation",
          description:
            "Inflation rates influence purchasing power, financing costs and the attractiveness of real assets such as property.",
          expanded:
            "Property can offer long-term inflation protection – depending on financing and market phase. immowap considers inflation in the overall assessment of income, risk and wealth strategy.",
        },
      },
      {
        id: "hypothekenzinsen",
        image: "/images/knowledge/steuern/afa.jpg",
        imageAlt: { de: "Hypothekenzinsen und Finanzierung", en: "Mortgage rates and financing" },
        de: {
          title: "Hypothekenzinsen",
          description:
            "Hypothekenzinsen sind ein zentraler Parameter für Tragbarkeit, Refinanzierung und die Bewertung von Kapitalanlagen.",
          expanded:
            "Zinsniveau und Bindungsfristen prägen die langfristige Kalkulation. immowap simuliert und ordnet Finanzierungsszenarien in die Immobilienanalyse ein – für transparente Entscheidungsgrundlagen.",
        },
        en: {
          title: "Mortgage rates",
          description:
            "Mortgage rates are a central parameter for affordability, refinancing and the assessment of investments.",
          expanded:
            "Interest levels and fixed-rate periods shape long-term calculation. immowap simulates and integrates financing scenarios into property analysis – for transparent decision foundations.",
        },
      },
      {
        id: "nachfrageindikatoren",
        image: "/images/gewerbeimmobilien/section3.jpg",
        imageAlt: { de: "Nachfrageindikatoren am Immobilienmarkt", en: "Demand indicators in the property market" },
        de: {
          title: "Nachfrageindikatoren",
          description:
            "Anfragen, Besichtigungen und Transaktionsaktivität signalisieren die aktuelle Nachfragestärke – oft früher als Preisstatistiken.",
          expanded:
            "Nachfrageindikatoren helfen, Marktdynamik zeitnah einzuordnen. immowap nutzt sie zusammen mit harten Marktdaten für eine aktuelle, datenbasierte Markteinschätzung.",
        },
        en: {
          title: "Demand indicators",
          description:
            "Enquiries, viewings and transaction activity signal current demand strength – often earlier than price statistics.",
          expanded:
            "Demand indicators help assess market dynamics in a timely way. immowap uses them together with hard market data for a current, data-based market assessment.",
        },
      },
    ],
  },
  {
    id: "investment",
    label: { de: "Investment & Strategie", en: "Investment & Strategy" },
    headline: {
      de: "Strategien für unterschiedliche Anlageziele",
      en: "Strategies for different investment goals",
    },
    articles: [
      {
        id: "eigennutzung-kapitalanlage",
        image: "/images/knowledge/eigentumswohnung-weg.jpg",
        imageAlt: { de: "Eigennutzung und Kapitalanlage", en: "Owner occupation and investment" },
        de: {
          title: "Eigennutzung / Kapitalanlage",
          description:
            "Die Entscheidung zwischen Eigennutzung und Kapitalanlage prägt Finanzierung, Steuer und langfristige Strategie – beide Wege erfordern unterschiedliche Bewertungslogik.",
          expanded:
            "Eigennutzer priorisieren Wohnqualität und Stabilität, Anleger Rendite und Risiko. immowap analysiert beide Perspektiven strukturiert und zeigt, welche Option zum individuellen Zielprofil passt.",
        },
        en: {
          title: "Owner occupation / investment",
          description:
            "The decision between owner occupation and investment shapes financing, tax and long-term strategy – both paths require different valuation logic.",
          expanded:
            "Owner-occupiers prioritise living quality and stability, investors yield and risk. immowap analyses both perspectives in a structured way and shows which option fits the individual goal profile.",
        },
      },
      {
        id: "fix-flip",
        image: "/images/fix-flip/projekt-1.jpg",
        imageAlt: { de: "Fix & Flip Strategie", en: "Fix and flip strategy" },
        de: {
          title: "Fix & Flip",
          description:
            "Fix & Flip zielt auf Wertsteigerung durch gezielte Aufwertung und Wiederverkauf – mit höherem Aktivitäts- und Timingrisiko.",
          expanded:
            "Erfolg hängt von Ankaufspreis, Sanierungskosten, Marktlage und Vermarktungsdauer ab. immowap bewertet Fix-&-Flip-Vorhaben mit realistischen Kosten-, Zeit- und Marktszenarien.",
        },
        en: {
          title: "Fix & flip",
          description:
            "Fix and flip aims at value appreciation through targeted upgrading and resale – with higher activity and timing risk.",
          expanded:
            "Success depends on purchase price, renovation costs, market conditions and marketing duration. immowap evaluates fix-and-flip projects with realistic cost, time and market scenarios.",
        },
      },
      {
        id: "mehrfamilienhaeuser",
        image: "/images/mehrfamilienhaeuser/strategie-2.jpg",
        imageAlt: { de: "Individuelle Immobilienstrategie", en: "Individual property strategy" },
        de: {
          title: "Individuelle Strategie",
          description:
            "Wenn keine Standardlösung passt: Vermögensaufbau, Portfolioentwicklung und langfristige Ziele individuell strukturieren.",
          expanded:
            "Fix & Hold, Strategiekombinationen und Bestandsoptimierung erfordern persönliche Prioritäten und transparente Analysen. immowap unterstützt individuelle Entscheidungsfindung entlang Ihrer Ziele – ohne vorgefertigte Produktlogik.",
        },
        en: {
          title: "Individual strategy",
          description:
            "When no standard solution fits: structuring wealth building, portfolio development and long-term goals individually.",
          expanded:
            "Fix & hold, strategy combinations and stock optimisation require personal priorities and transparent analyses. immowap supports individual decision-making aligned with your goals – without off-the-shelf product logic.",
        },
      },
      {
        id: "gewerbe",
        image: "/images/gewerbeimmobilien/typ-3.jpg",
        imageAlt: { de: "Gewerbeimmobilien und Investment", en: "Commercial property and investment" },
        de: {
          title: "Gewerbe",
          description:
            "Gewerbeimmobilien unterliegen anderen Nachfrage- und Mietzyklen als Wohnimmobilien – mit spezifischen Chancen und Risiken.",
          expanded:
            "Mietvertragsstruktur, Nutzungsart und Standortqualität prägen Ertrag und Werthaltigkeit. immowap ordnet Gewerbeobjekte im Investmentkontext ein – mit Fokus auf Nachhaltigkeit der Erträge.",
        },
        en: {
          title: "Commercial",
          description:
            "Commercial property follows different demand and rent cycles than residential – with specific opportunities and risks.",
          expanded:
            "Lease structure, use type and location quality shape income and value retention. immowap assesses commercial properties in the investment context – with a focus on income sustainability.",
        },
      },
      {
        id: "vermoegensaufbau",
        image: "/images/kapitalanlage/strategie-3.jpg",
        imageAlt: { de: "Vermögensaufbau mit Immobilien", en: "Wealth building with property" },
        de: {
          title: "Vermögensaufbau",
          description:
            "Immobilien können langfristig Vermögen aufbauen und absichern – wenn Strategie, Finanzierung und Objektauswahl zusammenpassen.",
          expanded:
            "Vermögensaufbau erfordert mehr als kurzfristige Renditeoptimierung. immowap entwickelt strukturierte Analysen für nachhaltigen Vermögenserhalt und strategischen Portfolioaufbau.",
        },
        en: {
          title: "Wealth building",
          description:
            "Property can build and safeguard wealth in the long term – when strategy, financing and property selection align.",
          expanded:
            "Wealth building requires more than short-term yield optimisation. immowap develops structured analyses for sustainable wealth preservation and strategic portfolio building.",
        },
      },
      {
        id: "chancen-risiken-investment",
        image: "/images/wissen/eigentumswohnung-weg/hero.jpg",
        imageAlt: { de: "Chancen und Risiken bei Investments", en: "Opportunities and risks in investments" },
        de: {
          title: "Chancen / Risiken",
          description:
            "Jede Investmentstrategie bringt spezifische Chancen und Risiken mit sich – eine transparente Gewichtung ist Voraussetzung für belastbare Entscheidungen.",
          expanded:
            "Markt-, Objekt-, Finanzierungs- und Liquiditätsrisiken müssen gemeinsam betrachtet werden. immowap strukturiert Chancen und Risiken für jede Strategie individuell und nachvollziehbar.",
        },
        en: {
          title: "Opportunities / risks",
          description:
            "Every investment strategy carries specific opportunities and risks – transparent weighting is a prerequisite for robust decisions.",
          expanded:
            "Market, property, financing and liquidity risks must be considered together. immowap structures opportunities and risks for each strategy individually and traceably.",
        },
      },
      {
        id: "marktzyklen",
        image: "/images/knowledge/sanierung-modernisierung.jpg",
        imageAlt: { de: "Marktzyklen und Timing", en: "Market cycles and timing" },
        de: {
          title: "Marktzyklen",
          description:
            "Immobilienmärkte durchlaufen Zyklen – von expansiven Phasen bis zu Korrekturen. Timing ist relevant, aber selten allein entscheidend.",
          expanded:
            "Langfristige Perspektive, Objektqualität und Finanzierungstragfähigkeit bleiben zentral. immowap ordnet Marktzyklen ein und zeigt, wie sie in individuelle Kauf- und Haltestrategien integriert werden können.",
        },
        en: {
          title: "Market cycles",
          description:
            "Property markets go through cycles – from expansion phases to corrections. Timing is relevant but rarely decisive alone.",
          expanded:
            "Long-term perspective, property quality and financing sustainability remain central. immowap assesses market cycles and shows how they can be integrated into individual purchase and hold strategies.",
        },
      },
      {
        id: "kaufzeitpunkt",
        image: "/images/fix-flip/projekt-2.jpg",
        imageAlt: { de: "Kaufzeitpunkt am Immobilienmarkt", en: "Purchase timing in the property market" },
        de: {
          title: "Kaufzeitpunkt",
          description:
            "Der optimale Kaufzeitpunkt hängt von Marktlage, Finanzierung, persönlicher Situation und Objektqualität ab – nicht von allgemeinen Prognosen.",
          expanded:
            "Moderation am Markt kann Chancen eröffnen, erfordert aber weiterhin sorgfältige Objektprüfung. immowap unterstützt die Einordnung des Kaufzeitpunkts im Zusammenhang mit Zielen, Budget und Marktdaten.",
        },
        en: {
          title: "Purchase timing",
          description:
            "The optimal purchase timing depends on market conditions, financing, personal situation and property quality – not on general forecasts.",
          expanded:
            "Market moderation can open opportunities but still requires careful property review. immowap supports assessment of purchase timing in relation to goals, budget and market data.",
        },
      },
    ],
  },
  {
    id: "zukunft",
    label: { de: "Zukunftsthemen", en: "Future Topics" },
    headline: {
      de: "Perspektiven für den Immobilienmarkt von morgen",
      en: "Perspectives for tomorrow's property market",
    },
    articles: [
      {
        id: "ki-bewertung",
        image: "/images/wissen/dokumente-verstehen/dokumentenpruefung.jpg",
        imageAlt: { de: "KI-gestützte Immobilienbewertung", en: "AI-supported property valuation" },
        de: {
          title: "KI Bewertung",
          description:
            "Künstliche Intelligenz kann Bewertungsprozesse unterstützen – durch schnellere Datenverarbeitung und konsistente Vergleichsanalysen.",
          expanded:
            "KI ersetzt nicht die fachliche Einordnung, sondern erweitert die analytische Basis. immowap nutzt datenbasierte Methoden im Einklang mit anerkannten Wertermittlungsprinzipien.",
        },
        en: {
          title: "AI valuation",
          description:
            "Artificial intelligence can support valuation processes – through faster data processing and consistent comparative analysis.",
          expanded:
            "AI does not replace professional assessment but expands the analytical basis. immowap uses data-based methods in line with recognised valuation principles.",
        },
      },
      {
        id: "digitale-analyse",
        image: "/images/knowledge/vermietung.jpg",
        imageAlt: { de: "Digitale Immobilienanalyse", en: "Digital property analysis" },
        de: {
          title: "Digitale Analyse",
          description:
            "Digitale Analysewerkzeuge ermöglichen tiefere Einblicke in Markt, Objekt und Finanzierung – schneller und strukturierter als manuelle Einzelprüfung.",
          expanded:
            "Von Standortdaten bis zu Cashflow-Modellen schaffen digitale Tools Transparenz. immowap verbindet digitale Analyse mit individueller Beratung für nachvollziehbare Ergebnisse.",
        },
        en: {
          title: "Digital analysis",
          description:
            "Digital analysis tools enable deeper insights into market, property and financing – faster and more structured than manual individual review.",
          expanded:
            "From location data to cashflow models, digital tools create transparency. immowap combines digital analysis with individual advisory for traceable results.",
        },
      },
      {
        id: "big-data",
        image: "/images/wissen/dokumente-verstehen/grundbuchauszug.jpg",
        imageAlt: { de: "Big Data im Immobiliensektor", en: "Big data in the property sector" },
        de: {
          title: "Big Data",
          description:
            "Große Datenmengen aus Markt, Standort und Transaktionen liefern neue Erkenntnispotenziale – wenn sie fachlich korrekt interpretiert werden.",
          expanded:
            "Big Data allein erzeugt noch keine belastbare Bewertung. immowap filtert relevante Informationen und ordnet sie in den jeweiligen Objekt- und Marktkontext ein.",
        },
        en: {
          title: "Big data",
          description:
            "Large data volumes from market, location and transactions offer new insight potential – when interpreted correctly from a professional perspective.",
          expanded:
            "Big data alone does not produce robust valuation. immowap filters relevant information and places it in the respective property and market context.",
        },
      },
      {
        id: "esg-ratings",
        image: "/images/sanierung/vorhaben-2.jpg",
        imageAlt: { de: "ESG Ratings für Immobilien", en: "ESG ratings for property" },
        de: {
          title: "ESG Ratings",
          description:
            "ESG-Ratings bewerten Nachhaltigkeit und Governance von Immobilien – zunehmend relevant für Investoren und Finanzierungspartner.",
          expanded:
            "Ratings schaffen Vergleichbarkeit, müssen aber im Objektkontext verstanden werden. immowap integriert ESG-Kriterien in die Gesamtbewertung von Chancen, Risiken und langfristiger Werthaltigkeit.",
        },
        en: {
          title: "ESG ratings",
          description:
            "ESG ratings assess sustainability and governance of property – increasingly relevant for investors and financing partners.",
          expanded:
            "Ratings create comparability but must be understood in the property context. immowap integrates ESG criteria into the overall assessment of opportunities, risks and long-term value retention.",
        },
      },
      {
        id: "smart-cities",
        image: "/images/gewerbeimmobilien/typ-4.jpg",
        imageAlt: { de: "Smart Cities und Stadtentwicklung", en: "Smart cities and urban development" },
        de: {
          title: "Smart Cities",
          description:
            "Smart-City-Konzepte verbinden Infrastruktur, Mobilität und Digitalisierung – mit Auswirkungen auf Standortqualität und langfristige Nachfrage.",
          expanded:
            "Städte mit intelligenter Infrastruktur können Wohn- und Investmentstandorte stärken. immowap bewertet Smart-City-Entwicklungen im Rahmen von Standort- und Marktanalysen.",
        },
        en: {
          title: "Smart cities",
          description:
            "Smart city concepts connect infrastructure, mobility and digitalisation – with effects on location quality and long-term demand.",
          expanded:
            "Cities with intelligent infrastructure can strengthen residential and investment locations. immowap evaluates smart city developments within location and market analyses.",
        },
      },
      {
        id: "markt-2030",
        image: "/images/wissen/kaufprozess/section.jpg",
        imageAlt: { de: "Immobilienmarkt 2030", en: "Property market 2030" },
        de: {
          title: "Markt 2030",
          description:
            "Der Blick auf 2030 verbindet demografische, technologische und regulatorische Trends – als Orientierung, nicht als fixe Prognose.",
          expanded:
            "Langfristige Szenarien helfen, Strategien zu schärfen und Risiken früh zu erkennen. immowap entwickelt datenbasierte Perspektiven für nachhaltige Immobilienentscheidungen.",
        },
        en: {
          title: "Market 2030",
          description:
            "The view to 2030 connects demographic, technological and regulatory trends – as orientation, not as a fixed forecast.",
          expanded:
            "Long-term scenarios help sharpen strategies and identify risks early. immowap develops data-based perspectives for sustainable property decisions.",
        },
      },
      {
        id: "automatisierte-marktbeobachtung",
        image: "/images/fix-flip/projekt-3.jpg",
        imageAlt: { de: "Automatisierte Marktbeobachtung", en: "Automated market monitoring" },
        de: {
          title: "Automatisierte Marktbeobachtung",
          description:
            "Automatisierte Systeme können Marktbewegungen frühzeitig erkennen – und Entscheidungsträger rechtzeitig informieren.",
          expanded:
            "Kontinuierliche Beobachtung von Preisen, Angebot und Nachfrage schafft Reaktionsfähigkeit. immowap nutzt strukturierte Marktbeobachtung als Ergänzung zur individuellen Objektanalyse.",
        },
        en: {
          title: "Automated market monitoring",
          description:
            "Automated systems can detect market movements early – and inform decision-makers in good time.",
          expanded:
            "Continuous monitoring of prices, supply and demand creates responsiveness. immowap uses structured market monitoring as a complement to individual property analysis.",
        },
      },
      {
        id: "europaeische-expansion",
        image: "/images/gewerbeimmobilien/typ-5.jpg",
        imageAlt: { de: "Europäische Expansion", en: "European expansion" },
        de: {
          title: "Europäische Expansion",
          description:
            "Immobilienplattformen und Analysedienstleister expandieren zunehmend europaweit – mit Potenzial für vergleichbare Markttransparenz.",
          expanded:
            "Grenzüberschreitende Daten und Standards können Entscheidungen erleichtern. immowap verbindet deutsche Bewertungslogik mit europäischen Marktperspektiven.",
        },
        en: {
          title: "European expansion",
          description:
            "Property platforms and analysis providers are increasingly expanding across Europe – with potential for comparable market transparency.",
          expanded:
            "Cross-border data and standards can facilitate decisions. immowap connects German valuation logic with European market perspectives.",
        },
      },
      {
        id: "datenbasierte-entscheidungen",
        image: "/images/wissen/dokumente-verstehen/wirtschaftsplan.jpg",
        imageAlt: { de: "Datenbasierte Immobilienentscheidungen", en: "Data-based property decisions" },
        de: {
          title: "Datenbasierte Entscheidungen",
          description:
            "Fundierte Immobilienentscheidungen basieren auf Daten, Struktur und fachlicher Einordnung – nicht auf Intuition allein.",
          expanded:
            "immowap steht für transparente, datenbasierte Analysen im Einklang mit individuellen Zielen. So entstehen Entscheidungsgrundlagen, die Markt, Objekt und Strategie zusammenführen.",
        },
        en: {
          title: "Data-based decisions",
          description:
            "Well-founded property decisions are based on data, structure and professional assessment – not on intuition alone.",
          expanded:
            "immowap stands for transparent, data-based analyses aligned with individual goals. This creates decision foundations that bring together market, property and strategy.",
        },
      },
    ],
  },
];
