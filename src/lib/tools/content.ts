import type { ToolPageKey } from "./routes";

export interface ToolPageLocaleContent {
  breadcrumbSolutions: string;
  breadcrumbTools: string;
  breadcrumbCurrent: string;
  heroLabel: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroText: string;
  heroBtnPrimary: string;
  heroBtnSecondary: string;
  heroImageAlt: string;
  introLabel: string;
  introHeadline: string;
  introText: string;
  introImageAlt: string;
  featureLabel: string;
  featureHeadline: string;
  featureCards: { title: string; description: string }[];
  processLabel: string;
  processHeadline: string;
  processSteps: { title: string; description: string }[];
  trustLabel: string;
  trustHeadline: string;
  trustText: string;
  trustPoints: { title: string; description: string }[];
  ctaHeadline: string;
  ctaText: string;
  ctaBtnPrimary: string;
  ctaBtnSecondary: string;
}

export interface ToolPageContent {
  images: { hero: string; intro: string };
  de: ToolPageLocaleContent;
  en: ToolPageLocaleContent;
}

const sharedButtons = {
  de: {
    heroBtnPrimary: "Analyse starten",
    heroBtnSecondary: "Kontakt aufnehmen",
    ctaBtnPrimary: "Analyse starten",
    ctaBtnSecondary: "Kontakt aufnehmen",
  },
  en: {
    heroBtnPrimary: "Start analysis",
    heroBtnSecondary: "Contact us",
    ctaBtnPrimary: "Start analysis",
    ctaBtnSecondary: "Contact us",
  },
};

const trustBase = {
  de: {
    trustLabel: "Analysequalität",
    trustHeadline: "Daten, Dokumente und Expertise — strukturiert verbunden",
    trustText:
      "immowap kombiniert strukturierte Objektdaten, Dokumentenprüfung, Marktkontext, Ihre Ziele und fachliche Einordnung — unterstützt durch KI, ergänzt durch menschliche Expertise. immowap ist keine Makler-, Bank-, Rechts- oder Steuerberatung und erstellt keine rechtsverbindlichen Gutachten nach ImmoWertV.",
    trustPoints: [
      {
        title: "Strukturierte Daten",
        description: "Objekt, Lage, Nutzung und Kennzahlen in einem konsistenten Datenmodell.",
      },
      {
        title: "Dokumentenprüfung",
        description: "Exposé, Verträge und Unterlagen fließen in die Einordnung ein.",
      },
      {
        title: "Marktkontext",
        description: "Vergleichswert-, Ertragswert- und Sachwertlogik dort, wo sie passt.",
      },
      {
        title: "Individuelle Ziele",
        description: "Eigennutzung, Kapitalanlage, Projekt oder Portfolio — passend zu Ihrer Strategie.",
      },
      {
        title: "KI-Unterstützung",
        description: "Schnelle Auswertung und Mustererkennung — ohne übertriebene Versprechen.",
      },
      {
        title: "Menschliche Expertise",
        description: "Fachliche Einordnung und Rückfragen, wo Entscheidungen es erfordern.",
      },
    ],
  },
  en: {
    trustLabel: "Analysis quality",
    trustHeadline: "Data, documents and expertise — structured together",
    trustText:
      "immowap combines structured property data, document review, market context, your objectives and professional assessment — supported by AI and complemented by human expertise. immowap is not a brokerage, bank, legal or tax advisory service and does not produce legally binding valuations under ImmoWertV.",
    trustPoints: [
      {
        title: "Structured data",
        description: "Property, location, use and key figures in one consistent data model.",
      },
      {
        title: "Document review",
        description: "Exposés, contracts and documents feed into the assessment.",
      },
      {
        title: "Market context",
        description: "Sales comparison, income and cost approach logic where appropriate.",
      },
      {
        title: "Individual objectives",
        description: "Owner-occupation, investment, project or portfolio — aligned with your strategy.",
      },
      {
        title: "AI support",
        description: "Fast evaluation and pattern recognition — without exaggerated claims.",
      },
      {
        title: "Human expertise",
        description: "Professional assessment and follow-up where decisions require it.",
      },
    ],
  },
};

export const TOOL_PAGES: Record<ToolPageKey, ToolPageContent> = {
  dashboard: {
    images: {
      hero: "/images/tools/dashboard-hero.jpg",
      intro: "/images/tools/dashboard-intro.jpg",
    },
    de: {
      breadcrumbSolutions: "Lösungen",
      breadcrumbTools: "Tools & Reports",
      breadcrumbCurrent: "Dashboard",
      heroLabel: "Tools & Reports",
      heroHeadline: "Ihr immowap Dashboard — Startpunkt für kluge Immobilienentscheidungen",
      heroSubheadline: "Projekte, Analysen und Unterlagen an einem Ort.",
      heroText:
        "Das Dashboard ist Ihr zentraler Arbeitsbereich: Sie sehen laufende Analysen, hochgeladene Dokumente, PDF-Berichte und Projektstatus — und starten neue Schritte mit wenigen Klicks.",
      ...sharedButtons.de,
      heroImageAlt: "Digitale Immobilienanalyse auf einem professionellen Bildschirm",
      introLabel: "Einordnung",
      introHeadline: "Warum ein zentrales Dashboard den Unterschied macht",
      introText:
        "Immobilienentscheidungen basieren selten auf einer einzelnen Zahl. Sie verbinden Objekt, Markt, Finanzierung und persönliche Ziele. Ein übersichtliches Dashboard bündelt diese Informationen und macht den aktuellen Stand jederzeit nachvollziehbar — ohne Tabellen-Chaos oder verstreute E-Mails.",
      introImageAlt: "Übersicht über Analyseprojekte und Kennzahlen",
      featureLabel: "Funktionen",
      featureHeadline: "Was Sie im Dashboard sehen und steuern",
      featureCards: [
        {
          title: "Projektübersicht",
          description: "Alle laufenden und abgeschlossenen Analysen mit Status und nächsten Schritten.",
        },
        {
          title: "Letzte Analysen",
          description: "Schneller Zugriff auf zuletzt bearbeitete Objekte und Ergebnisse.",
        },
        {
          title: "Dokumente",
          description: "Hochgeladene Exposés, Verträge und Unterlagen direkt am Projekt.",
        },
        {
          title: "PDF-Berichte",
          description: "Generierte Berichte zum Download und zur Weitergabe an Berater.",
        },
        {
          title: "Schnellaktionen",
          description: "Neue Analyse starten, Dokument hochladen oder Vergleich anlegen.",
        },
        {
          title: "Projektstatus",
          description: "Transparente Phasen von Datenerfassung bis Entscheidungsgrundlage.",
        },
      ],
      processLabel: "Ablauf",
      processHeadline: "So nutzen Sie das Dashboard im Alltag",
      processSteps: [
        { title: "Anmelden", description: "Zugang zu Ihrem persönlichen Arbeitsbereich." },
        { title: "Projekt wählen", description: "Bestehendes Objekt öffnen oder neue Analyse anlegen." },
        { title: "Daten ergänzen", description: "Objektangaben, Dokumente und Ziele schrittweise erfassen." },
        { title: "Ergebnisse nutzen", description: "Berichte, Kennzahlen und Empfehlungen für Ihre Entscheidung." },
      ],
      ...trustBase.de,
      ctaHeadline: "Ihren Arbeitsbereich nutzen",
      ctaText:
        "Starten Sie mit einer strukturierten Analyse und behalten Sie Objekt, Unterlagen und Ergebnisse im Blick — klar, übersichtlich und jederzeit nachvollziehbar.",
    },
    en: {
      breadcrumbSolutions: "Solutions",
      breadcrumbTools: "Tools & Reports",
      breadcrumbCurrent: "Dashboard",
      heroLabel: "Tools & Reports",
      heroHeadline: "Your immowap dashboard — starting point for smart property decisions",
      heroSubheadline: "Projects, analyses and documents in one place.",
      heroText:
        "The dashboard is your central workspace: view ongoing analyses, uploaded documents, PDF reports and project status — and launch new steps with just a few clicks.",
      ...sharedButtons.en,
      heroImageAlt: "Digital property analysis on a professional screen",
      introLabel: "Context",
      introHeadline: "Why a central dashboard makes the difference",
      introText:
        "Property decisions rarely depend on a single figure. They connect the asset, market, financing and personal objectives. A clear dashboard brings this information together and keeps the current status traceable — without spreadsheet chaos or scattered emails.",
      introImageAlt: "Overview of analysis projects and key figures",
      featureLabel: "Features",
      featureHeadline: "What you see and control in the dashboard",
      featureCards: [
        {
          title: "Project overview",
          description: "All ongoing and completed analyses with status and next steps.",
        },
        {
          title: "Recent analyses",
          description: "Quick access to recently edited properties and results.",
        },
        {
          title: "Documents",
          description: "Uploaded exposés, contracts and files linked to each project.",
        },
        {
          title: "PDF reports",
          description: "Generated reports for download and sharing with advisors.",
        },
        {
          title: "Quick actions",
          description: "Start a new analysis, upload documents or create a comparison.",
        },
        {
          title: "Project status",
          description: "Transparent phases from data capture to decision support.",
        },
      ],
      processLabel: "Process",
      processHeadline: "How to use the dashboard day to day",
      processSteps: [
        { title: "Sign in", description: "Access your personal workspace." },
        { title: "Select project", description: "Open an existing property or start a new analysis." },
        { title: "Add data", description: "Capture property details, documents and goals step by step." },
        { title: "Use results", description: "Reports, metrics and recommendations for your decision." },
      ],
      ...trustBase.en,
      ctaHeadline: "Use your workspace",
      ctaText:
        "Start with a structured analysis and keep property, documents and results in view — clear, organised and always traceable.",
    },
  },

  "ki-assistent": {
    images: {
      hero: "/images/tools/ki-assistent-hero.jpg",
      intro: "/images/tools/ki-assistent-intro.jpg",
    },
    de: {
      breadcrumbSolutions: "Lösungen",
      breadcrumbTools: "Tools & Reports",
      breadcrumbCurrent: "KI-Assistent",
      heroLabel: "Tools & Reports",
      heroHeadline: "KI-Assistent für Immobilienfragen — strukturiert und nachvollziehbar",
      heroSubheadline: "Antworten, Einordnung und erste Indikatoren — nicht statt Fachberatung.",
      heroText:
        "Der immowap KI-Assistent unterstützt Sie bei Objektfragen, Dokumentenverständnis, ersten Risikoindikatoren und Bewertungslogik — immer eingebettet in Ihre Analyse und ergänzt durch menschliche Expertise, wo nötig.",
      ...sharedButtons.de,
      heroImageAlt: "Professionelle Immobilienberatung mit digitaler Unterstützung",
      introLabel: "Einordnung",
      introHeadline: "Wofür der KI-Assistent sinnvoll eingesetzt wird",
      introText:
        "Komplexe Immobilienunterlagen und Marktzusammenhänge lassen sich nicht in einem Satz beantworten. Der Assistent hilft, Fragen zu strukturieren, Begriffe zu erklären und Zusammenhänge sichtbar zu machen — als Ergänzung zu Ihrer Analyse, nicht als Ersatz für Gutachter, Anwalt oder Steuerberater.",
      introImageAlt: "Digitale Unterstützung bei Immobilienentscheidungen",
      featureLabel: "Funktionen",
      featureHeadline: "Praktische Unterstützung im Analyseprozess",
      featureCards: [
        {
          title: "Objektfragen",
          description: "Verständliche Antworten zu Lage, Zustand, Nutzung und Kennzahlen.",
        },
        {
          title: "Dokumentenerklärung",
          description: "Hilfe beim Verstehen von Exposé, Teilungserklärung oder Energieausweis.",
        },
        {
          title: "Erste Risikoindikatoren",
          description: "Hinweise auf mögliche Schwachstellen — zur vertieften Prüfung.",
        },
        {
          title: "Bewertungsunterstützung",
          description: "Einordnung von Marktwert, Vergleichswert- und Ertragswertlogik.",
        },
        {
          title: "Investmentlogik",
          description: "Rendite, Cashflow und Kaufpreisfaktor im Kontext Ihrer Ziele.",
        },
        {
          title: "Menschliche Prüfung",
          description: "Bei Bedarf Eskalation an Fachexpertise — keine Black Box.",
        },
      ],
      processLabel: "Ablauf",
      processHeadline: "So arbeiten Sie mit dem KI-Assistenten",
      processSteps: [
        { title: "Frage stellen", description: "Konkret zu Objekt, Dokument oder Kennzahl." },
        { title: "Kontext nutzen", description: "Assistent berücksichtigt Ihre Analyse und hochgeladene Daten." },
        { title: "Einordnung erhalten", description: "Strukturierte Antwort mit Hinweisen und Grenzen." },
        { title: "Vertiefen", description: "Bei Bedarf Analyse erweitern oder Experten kontaktieren." },
      ],
      ...trustBase.de,
      ctaHeadline: "Fragen strukturiert klären",
      ctaText:
        "Nutzen Sie den KI-Assistenten als intelligente Ergänzung — für Klarheit bei Objekt, Dokumenten und Entscheidungslogik.",
    },
    en: {
      breadcrumbSolutions: "Solutions",
      breadcrumbTools: "Tools & Reports",
      breadcrumbCurrent: "AI assistant",
      heroLabel: "Tools & Reports",
      heroHeadline: "AI assistant for property questions — structured and traceable",
      heroSubheadline: "Answers, context and first indicators — not a substitute for professional advice.",
      heroText:
        "The immowap AI assistant supports property questions, document understanding, initial risk indicators and valuation logic — always embedded in your analysis and complemented by human expertise where needed.",
      ...sharedButtons.en,
      heroImageAlt: "Professional property consultation with digital support",
      introLabel: "Context",
      introHeadline: "What the AI assistant is designed for",
      introText:
        "Complex property documents and market relationships cannot be answered in one sentence. The assistant helps structure questions, explain terms and reveal connections — as a complement to your analysis, not a replacement for appraisers, lawyers or tax advisors.",
      introImageAlt: "Digital support for property decisions",
      featureLabel: "Features",
      featureHeadline: "Practical support in the analysis process",
      featureCards: [
        {
          title: "Property questions",
          description: "Clear answers on location, condition, use and key figures.",
        },
        {
          title: "Document explanations",
          description: "Help understanding exposés, division declarations or energy certificates.",
        },
        {
          title: "Initial risk indicators",
          description: "Hints on potential weaknesses — for deeper review.",
        },
        {
          title: "Valuation support",
          description: "Context for market value, sales comparison and income approach logic.",
        },
        {
          title: "Investment logic",
          description: "Yield, cash flow and price factor in the context of your goals.",
        },
        {
          title: "Human review",
          description: "Escalation to professional expertise when needed — no black box.",
        },
      ],
      processLabel: "Process",
      processHeadline: "How to work with the AI assistant",
      processSteps: [
        { title: "Ask a question", description: "Specific to property, document or metric." },
        { title: "Use context", description: "The assistant considers your analysis and uploaded data." },
        { title: "Receive context", description: "Structured answer with notes and limitations." },
        { title: "Go deeper", description: "Extend the analysis or contact experts if needed." },
      ],
      ...trustBase.en,
      ctaHeadline: "Clarify questions with structure",
      ctaText:
        "Use the AI assistant as an intelligent complement — for clarity on property, documents and decision logic.",
    },
  },

  "pdf-berichte": {
    images: {
      hero: "/images/tools/pdf-berichte-hero.jpg",
      intro: "/images/tools/pdf-berichte-intro.jpg",
    },
    de: {
      breadcrumbSolutions: "Lösungen",
      breadcrumbTools: "Tools & Reports",
      breadcrumbCurrent: "PDF-Berichte",
      heroLabel: "Tools & Reports",
      heroHeadline: "PDF-Berichte — strukturierte Entscheidungsunterlagen",
      heroSubheadline: "Marktwert, Rendite, Risiko und Vergleich — dokumentiert und nachvollziehbar.",
      heroText:
        "Das Reporting-Center von immowap erstellt übersichtliche PDF-Berichte auf Basis Ihrer Analyse: für interne Entscheidungen, Gespräche mit Beratern oder die Dokumentation Ihres Vorgehens — ohne rechtsverbindliche Gutachten zu versprechen.",
      ...sharedButtons.de,
      heroImageAlt: "Strukturierter Immobilienbericht auf dem Schreibtisch",
      introLabel: "Einordnung",
      introHeadline: "Warum professionelle Berichte Entscheidungen absichern",
      introText:
        "Zahlen allein reichen selten. Entscheidungsträger brauchen nachvollziehbare Zusammenfassungen: Was wurde betrachtet? Welche Verfahrenslogik wurde angewendet? Wo liegen Unsicherheiten? PDF-Berichte von immowap schaffen diese Transparenz — klar strukturiert und zum Teilen geeignet.",
      introImageAlt: "Marktberichte und Analyseunterlagen",
      featureLabel: "Berichtstypen",
      featureHeadline: "Welche Reports immowap bereitstellt",
      featureCards: [
        {
          title: "Marktwertberichte",
          description: "Einordnung von Verkehrswert und Marktlage — orientiert an anerkannten Verfahren.",
        },
        {
          title: "Ertragsberichte",
          description: "Miete, Hausgeld, Rendite und Ertragswertlogik im Überblick.",
        },
        {
          title: "Risikoberichte",
          description: "Objekt-, Markt- und Finanzierungsrisiken strukturiert dargestellt.",
        },
        {
          title: "Vergleichsberichte",
          description: "Objekte und Szenarien nebeneinander — für fundierte Auswahl.",
        },
        {
          title: "Downloadbare PDFs",
          description: "Berichte exportieren und archivieren — jederzeit abrufbar.",
        },
        {
          title: "Entscheidungsdokumente",
          description: "Kompakte Zusammenfassungen für Gespräche und interne Freigaben.",
        },
      ],
      processLabel: "Ablauf",
      processHeadline: "Vom Dateninput zum PDF-Bericht",
      processSteps: [
        { title: "Analyse durchführen", description: "Objekt, Ziele und Unterlagen erfassen." },
        { title: "Berichtstyp wählen", description: "Marktwert, Ertrag, Risiko oder Vergleich." },
        { title: "PDF generieren", description: "Strukturierter Bericht auf Basis Ihrer Daten." },
        { title: "Nutzen & teilen", description: "Download, Archivierung oder Weitergabe an Berater." },
      ],
      ...trustBase.de,
      ctaHeadline: "Entscheidungen dokumentieren",
      ctaText:
        "Erstellen Sie nachvollziehbare PDF-Berichte — für Transparenz, Dokumentation und strukturierte Immobilienentscheidungen.",
    },
    en: {
      breadcrumbSolutions: "Solutions",
      breadcrumbTools: "Tools & Reports",
      breadcrumbCurrent: "PDF reports",
      heroLabel: "Tools & Reports",
      heroHeadline: "PDF reports — structured decision documents",
      heroSubheadline: "Market value, yield, risk and comparison — documented and traceable.",
      heroText:
        "immowap's reporting centre produces clear PDF reports based on your analysis: for internal decisions, advisor meetings or documenting your approach — without promising legally binding appraisals.",
      ...sharedButtons.en,
      heroImageAlt: "Structured property report on a desk",
      introLabel: "Context",
      introHeadline: "Why professional reports support decisions",
      introText:
        "Figures alone are rarely enough. Decision-makers need traceable summaries: What was considered? Which approach was applied? Where are uncertainties? immowap PDF reports create this transparency — clearly structured and ready to share.",
      introImageAlt: "Market reports and analysis documents",
      featureLabel: "Report types",
      featureHeadline: "Reports immowap provides",
      featureCards: [
        {
          title: "Market value reports",
          description: "Assessment of market value and conditions — aligned with recognised methods.",
        },
        {
          title: "Income reports",
          description: "Rent, service charges, yield and income approach logic at a glance.",
        },
        {
          title: "Risk reports",
          description: "Property, market and financing risks presented in structure.",
        },
        {
          title: "Comparison reports",
          description: "Properties and scenarios side by side — for informed selection.",
        },
        {
          title: "Downloadable PDFs",
          description: "Export and archive reports — accessible at any time.",
        },
        {
          title: "Decision documents",
          description: "Concise summaries for meetings and internal approvals.",
        },
      ],
      processLabel: "Process",
      processHeadline: "From data input to PDF report",
      processSteps: [
        { title: "Run analysis", description: "Capture property, goals and documents." },
        { title: "Choose report type", description: "Market value, income, risk or comparison." },
        { title: "Generate PDF", description: "Structured report based on your data." },
        { title: "Use & share", description: "Download, archive or forward to advisors." },
      ],
      ...trustBase.en,
      ctaHeadline: "Document your decisions",
      ctaText:
        "Create traceable PDF reports — for transparency, documentation and structured property decisions.",
    },
  },

  "dokumenten-upload": {
    images: {
      hero: "/images/tools/dokumenten-upload-hero.jpg",
      intro: "/images/tools/dokumenten-upload-intro.jpg",
    },
    de: {
      breadcrumbSolutions: "Lösungen",
      breadcrumbTools: "Tools & Reports",
      breadcrumbCurrent: "Dokumenten-Upload",
      heroLabel: "Tools & Reports",
      heroHeadline: "Dokumenten-Upload — sichere Erfassung für fundierte Analysen",
      heroSubheadline: "Unterlagen zentral hochladen und für die Auswertung nutzen.",
      heroText:
        "Der Dokumenten-Upload ist Ihr Eingangstor für Exposé, Grundbuch, Energieausweis, Mietvertrag und weitere Unterlagen. immowap ordnet Dokumente Ihrem Projekt zu und nutzt sie für dokumentenbasierte Analysen — transparent und nachvollziehbar.",
      ...sharedButtons.de,
      heroImageAlt: "Immobiliendokumente und Unterlagen auf einem Schreibtisch",
      introLabel: "Einordnung",
      introHeadline: "Warum Dokumente die Analysequalität prägen",
      introText:
        "Exposé-Zahlen allein erzählen selten die ganze Geschichte. Grundbuchauszüge, Teilungserklärungen, Hausgeldabrechnungen und Verträge liefern entscheidende Details. Je vollständiger die Unterlagen, desto präziser kann immowap einordnen — ohne Ihnen Uploads aufzuzwingen.",
      introImageAlt: "Grundbuchauszug und Immobilienunterlagen",
      featureLabel: "Unterlagen",
      featureHeadline: "Welche Dokumente Sie bereitstellen können",
      featureCards: [
        { title: "Exposé", description: "Objektbeschreibung, Flächen, Preis und Ausstattung." },
        { title: "Grundbuchauszug", description: "Eigentumsverhältnisse, Belastungen und Rechte." },
        { title: "Energieausweis", description: "Effizienzklasse und energetische Bewertung." },
        { title: "Teilungserklärung", description: "WEG-Regelungen, Sondernutzungsrechte und Kosten." },
        { title: "Mietvertrag", description: "Miete, Laufzeit und vertragliche Besonderheiten." },
        { title: "Wirtschaftsplan", description: "Hausgeld, Rücklagen und geplante Kosten." },
      ],
      processLabel: "Ablauf",
      processHeadline: "Vom Upload zur dokumentenbasierten Analyse",
      processSteps: [
        { title: "Projekt öffnen", description: "Analyse anlegen oder bestehendes Objekt wählen." },
        { title: "Dokumente hochladen", description: "PDF oder Bild — sicher dem Projekt zuordnen." },
        { title: "Status verfolgen", description: "Upload-Status und Verarbeitung im Dashboard sehen." },
        { title: "In Analyse einfließen", description: "Inhalte fließen in Bewertung und Risikoeinordnung." },
      ],
      ...trustBase.de,
      ctaHeadline: "Unterlagen strukturiert nutzen",
      ctaText:
        "Laden Sie relevante Dokumente hoch und verbessern Sie die Grundlage Ihrer Immobilienanalyse — Schritt für Schritt.",
    },
    en: {
      breadcrumbSolutions: "Solutions",
      breadcrumbTools: "Tools & Reports",
      breadcrumbCurrent: "Document upload",
      heroLabel: "Tools & Reports",
      heroHeadline: "Document upload — secure intake for well-founded analyses",
      heroSubheadline: "Upload documents centrally and use them for evaluation.",
      heroText:
        "Document upload is your entry point for exposés, land register extracts, energy certificates, lease agreements and more. immowap assigns documents to your project and uses them for document-based analysis — transparent and traceable.",
      ...sharedButtons.en,
      heroImageAlt: "Property documents and files on a desk",
      introLabel: "Context",
      introHeadline: "Why documents shape analysis quality",
      introText:
        "Exposé figures alone rarely tell the full story. Land register extracts, division declarations, service charge statements and contracts provide crucial details. The more complete the documents, the more precisely immowap can assess — without forcing uploads.",
      introImageAlt: "Land register extract and property documents",
      featureLabel: "Documents",
      featureHeadline: "Documents you can provide",
      featureCards: [
        { title: "Exposé", description: "Property description, areas, price and equipment." },
        { title: "Land register extract", description: "Ownership, encumbrances and rights." },
        { title: "Energy certificate", description: "Efficiency class and energy rating." },
        { title: "Division declaration", description: "HOA rules, special usage rights and costs." },
        { title: "Lease agreement", description: "Rent, term and contractual specifics." },
        { title: "Budget plan", description: "Service charges, reserves and planned costs." },
      ],
      processLabel: "Process",
      processHeadline: "From upload to document-based analysis",
      processSteps: [
        { title: "Open project", description: "Create an analysis or select an existing property." },
        { title: "Upload documents", description: "PDF or image — securely assigned to the project." },
        { title: "Track status", description: "See upload status and processing in the dashboard." },
        { title: "Feed into analysis", description: "Content flows into valuation and risk assessment." },
      ],
      ...trustBase.en,
      ctaHeadline: "Use documents with structure",
      ctaText:
        "Upload relevant documents and improve the foundation of your property analysis — step by step.",
    },
  },

  vergleichsanalysen: {
    images: {
      hero: "/images/tools/vergleichsanalysen-hero.jpg",
      intro: "/images/tools/vergleichsanalysen-intro.jpg",
    },
    de: {
      breadcrumbSolutions: "Lösungen",
      breadcrumbTools: "Tools & Reports",
      breadcrumbCurrent: "Vergleichsanalysen",
      heroLabel: "Tools & Reports",
      heroHeadline: "Vergleichsanalysen — Objekte und Szenarien nebeneinander",
      heroSubheadline: "Immobilie A vs. B — strukturiert, nachvollziehbar, zielorientiert.",
      heroText:
        "Mit Vergleichsanalysen stellen Sie Kaufobjekte, Standorte, Renditen und Risiken strukturiert gegenüber — statt isolierter Einzelbetrachtungen. Ideal für Kaufentscheidungen, Portfolioerweiterung oder Fix-&-Flip-Alternativen.",
      ...sharedButtons.de,
      heroImageAlt: "Vergleich von Immobilienkennzahlen auf einem Analysebildschirm",
      introLabel: "Einordnung",
      introHeadline: "Warum Vergleiche bessere Entscheidungen ermöglichen",
      introText:
        "Ein attraktiver Kaufpreis sagt wenig über die Gesamtqualität einer Investition. Vergleichsanalysen machen Unterschiede bei Lage, Ertrag, Zustand und Marktposition sichtbar — orientiert an Vergleichswert- und Ertragswertlogik, ohne rechtsverbindliche Bewertungen zu ersetzen.",
      introImageAlt: "Kaufpreis und Kennzahlen im Vergleich",
      featureLabel: "Vergleichsdimensionen",
      featureHeadline: "Was Sie gegenüberstellen können",
      featureCards: [
        { title: "Objekt A vs. B", description: "Zwei Kandidaten direkt nebeneinander bewerten." },
        { title: "Standorte", description: "Mikrolage, Infrastruktur und Marktposition im Vergleich." },
        { title: "Kaufpreis", description: "Preisniveau, Kaufpreisfaktor und Nebenkosten." },
        { title: "Rendite", description: "Mietrendite, Cashflow und Ertragspotenzial." },
        { title: "Risiken", description: "Leerstand, Sanierung und Marktrisiken gegenüberstellen." },
        { title: "Sanierungsbedarf", description: "Investitionsbedarf und Modernisierungspotenzial." },
      ],
      processLabel: "Ablauf",
      processHeadline: "So führen Sie eine Vergleichsanalyse durch",
      processSteps: [
        { title: "Objekte erfassen", description: "Zwei oder mehr Kandidaten mit Daten anlegen." },
        { title: "Kriterien wählen", description: "Rendite, Lage, Risiko oder Preis als Schwerpunkt." },
        { title: "Vergleich anzeigen", description: "Strukturierte Gegenüberstellung im Dashboard." },
        { title: "Entscheiden", description: "PDF-Bericht exportieren und nächsten Schritt planen." },
      ],
      ...trustBase.de,
      ctaHeadline: "Alternativen strukturiert vergleichen",
      ctaText:
        "Treffen Sie Immobilienentscheidungen auf Basis klarer Gegenüberstellungen — nicht isolierter Einzelzahlen.",
    },
    en: {
      breadcrumbSolutions: "Solutions",
      breadcrumbTools: "Tools & Reports",
      breadcrumbCurrent: "Comparison analyses",
      heroLabel: "Tools & Reports",
      heroHeadline: "Comparison analyses — properties and scenarios side by side",
      heroSubheadline: "Property A vs. B — structured, traceable, goal-oriented.",
      heroText:
        "Comparison analyses let you contrast purchase targets, locations, yields and risks in structure — instead of isolated single views. Ideal for purchase decisions, portfolio expansion or fix-and-flip alternatives.",
      ...sharedButtons.en,
      heroImageAlt: "Comparison of property metrics on an analysis screen",
      introLabel: "Context",
      introHeadline: "Why comparisons enable better decisions",
      introText:
        "An attractive purchase price says little about overall investment quality. Comparison analyses reveal differences in location, income, condition and market position — aligned with sales comparison and income approach logic, without replacing legally binding valuations.",
      introImageAlt: "Purchase price and metrics in comparison",
      featureLabel: "Comparison dimensions",
      featureHeadline: "What you can contrast",
      featureCards: [
        { title: "Property A vs. B", description: "Evaluate two candidates directly side by side." },
        { title: "Locations", description: "Micro-location, infrastructure and market position compared." },
        { title: "Purchase price", description: "Price level, multiplier and ancillary costs." },
        { title: "Yield", description: "Rental yield, cash flow and income potential." },
        { title: "Risks", description: "Vacancy, renovation and market risks contrasted." },
        { title: "Renovation needs", description: "Investment requirements and modernisation potential." },
      ],
      processLabel: "Process",
      processHeadline: "How to run a comparison analysis",
      processSteps: [
        { title: "Capture properties", description: "Add two or more candidates with data." },
        { title: "Choose criteria", description: "Focus on yield, location, risk or price." },
        { title: "View comparison", description: "Structured contrast in the dashboard." },
        { title: "Decide", description: "Export PDF report and plan the next step." },
      ],
      ...trustBase.en,
      ctaHeadline: "Compare alternatives with structure",
      ctaText:
        "Make property decisions based on clear comparisons — not isolated single figures.",
    },
  },

  projektmanagement: {
    images: {
      hero: "/images/tools/projektmanagement-hero.jpg",
      intro: "/images/tools/projektmanagement-intro.jpg",
    },
    de: {
      breadcrumbSolutions: "Lösungen",
      breadcrumbTools: "Tools & Reports",
      breadcrumbCurrent: "Projektmanagement",
      heroLabel: "Tools & Reports",
      heroHeadline: "Projektmanagement — Sanierung, Fix & Flip und Modernisierung im Griff",
      heroSubheadline: "Aufgaben, Budget, Zeitplan und Risiken an einem Ort.",
      heroText:
        "Das Projektmanagement-Tool begleitet Renovierungs-, Modernisierungs- und Fix-&-Flip-Vorhaben: von der Planung über Meilensteine bis zur Dokumentation — verbunden mit Ihrer immowap Analyse.",
      ...sharedButtons.de,
      heroImageAlt: "Immobilienprojektplanung mit Unterlagen und Zeitplan",
      introLabel: "Einordnung",
      introHeadline: "Warum Projekte strukturiert geführt werden sollten",
      introText:
        "Bei Sanierung und Fix & Flip entscheiden Budget, Zeitplan und Risikosteuerung über den Erfolg. Ein zentrales Projekttool hält Aufgaben, Kosten und Unterlagen zusammen — ohne immowap als Bauunternehmen darzustellen, sondern als intelligente Entscheidungs- und Steuerungsplattform.",
      introImageAlt: "Projektplanung und Immobilienunterlagen",
      featureLabel: "Funktionen",
      featureHeadline: "Was das Projektmanagement abdeckt",
      featureCards: [
        { title: "Aufgaben", description: "To-dos, Verantwortlichkeiten und Fortschritt im Blick." },
        { title: "Budget", description: "Geplante und tatsächliche Kosten gegenüberstellen." },
        { title: "Zeitplan", description: "Meilensteine und Fristen für Ihr Vorhaben." },
        { title: "Dokumente", description: "Angebote, Pläne und Verträge am Projekt." },
        { title: "Meilensteine", description: "Klar definierte Projektphasen und Erfolgskriterien." },
        { title: "Projektrisiken", description: "Verzögerungen, Kostenüberschreitungen und Abhängigkeiten." },
      ],
      processLabel: "Ablauf",
      processHeadline: "So führen Sie ein Immobilienprojekt mit immowap",
      processSteps: [
        { title: "Projekt anlegen", description: "Ziel, Objekt und Rahmenbedingungen definieren." },
        { title: "Plan erstellen", description: "Aufgaben, Budget und Timeline strukturieren." },
        { title: "Fortschritt tracken", description: "Status, Dokumente und Kosten aktuell halten." },
        { title: "Auswerten", description: "Ergebnis mit Analyse und Berichten verknüpfen." },
      ],
      ...trustBase.de,
      ctaHeadline: "Projekte professionell steuern",
      ctaText:
        "Behalten Sie Sanierung, Modernisierung und Fix & Flip strukturiert im Blick — von der Planung bis zur Auswertung.",
    },
    en: {
      breadcrumbSolutions: "Solutions",
      breadcrumbTools: "Tools & Reports",
      breadcrumbCurrent: "Project management",
      heroLabel: "Tools & Reports",
      heroHeadline: "Project management — renovation, fix & flip and modernisation under control",
      heroSubheadline: "Tasks, budget, timeline and risks in one place.",
      heroText:
        "The project management tool supports renovation, modernisation and fix-and-flip projects: from planning through milestones to documentation — linked to your immowap analysis.",
      ...sharedButtons.en,
      heroImageAlt: "Property project planning with documents and timeline",
      introLabel: "Context",
      introHeadline: "Why projects need structured management",
      introText:
        "For renovation and fix and flip, budget, timeline and risk control determine success. A central project tool keeps tasks, costs and documents together — presenting immowap as an intelligent decision platform, not a construction company.",
      introImageAlt: "Project planning and property documents",
      featureLabel: "Features",
      featureHeadline: "What project management covers",
      featureCards: [
        { title: "Tasks", description: "To-dos, responsibilities and progress at a glance." },
        { title: "Budget", description: "Compare planned and actual costs." },
        { title: "Timeline", description: "Milestones and deadlines for your project." },
        { title: "Documents", description: "Quotes, plans and contracts linked to the project." },
        { title: "Milestones", description: "Clearly defined project phases and success criteria." },
        { title: "Project risks", description: "Delays, cost overruns and dependencies." },
      ],
      processLabel: "Process",
      processHeadline: "How to run a property project with immowap",
      processSteps: [
        { title: "Create project", description: "Define goal, property and framework." },
        { title: "Build plan", description: "Structure tasks, budget and timeline." },
        { title: "Track progress", description: "Keep status, documents and costs current." },
        { title: "Evaluate", description: "Link outcomes with analysis and reports." },
      ],
      ...trustBase.en,
      ctaHeadline: "Manage projects professionally",
      ctaText:
        "Keep renovation, modernisation and fix and flip structured — from planning through to evaluation.",
    },
  },

  portfoliouebersicht: {
    images: {
      hero: "/images/tools/portfoliouebersicht-hero.jpg",
      intro: "/images/tools/portfoliouebersicht-intro.jpg",
    },
    de: {
      breadcrumbSolutions: "Lösungen",
      breadcrumbTools: "Tools & Reports",
      breadcrumbCurrent: "Portfolioübersicht",
      heroLabel: "Tools & Reports",
      heroHeadline: "Portfolioübersicht — Bestand, Ertrag und Risiko im Gesamtüberblick",
      heroSubheadline: "Für langfristige Investoren und Eigentümer mit mehreren Objekten.",
      heroText:
        "Die Portfolioübersicht bündelt Ihre Immobilien: Gesamtwert, Mieteinnahmen, Cashflow, Rendite und Risikoverteilung — ergänzt um eine Standortübersicht für strategische Entscheidungen.",
      ...sharedButtons.de,
      heroImageAlt: "Portfolioübersicht mehrerer Immobilieninvestments",
      introLabel: "Einordnung",
      introHeadline: "Warum Portfoliodenken über Einzelobjekte hinausgeht",
      introText:
        "Wer mehrere Objekte hält, braucht mehr als Einzelanalysen. Die Portfolioübersicht zeigt Konzentrationen, Ertragsstruktur und Risikoverteilung — als Grundlage für Rebalancing, Verkauf oder Neuinvestition, orientiert an Ertragswert- und Marktwertlogik.",
      introImageAlt: "Investmentchancen und Risiken im Portfolio",
      featureLabel: "Kennzahlen",
      featureHeadline: "Was die Portfolioübersicht abbildet",
      featureCards: [
        { title: "Immobilienportfolio", description: "Alle Objekte mit Status und Kerndaten." },
        { title: "Gesamtwert", description: "Aggregierte Marktwert- und Buchwertperspektive." },
        { title: "Mieteinnahmen", description: "Kalt- und Warmmiete über den Bestand." },
        { title: "Cashflow", description: "Laufende Einnahmen und Belastungen im Überblick." },
        { title: "Rendite", description: "Portfolio-Rendite und objektbezogene Abweichungen." },
        { title: "Risikoverteilung", description: "Standort-, Mieter- und Objektrisiken aggregiert." },
      ],
      processLabel: "Ablauf",
      processHeadline: "So nutzen Sie die Portfolioübersicht",
      processSteps: [
        { title: "Objekte erfassen", description: "Bestand mit Daten und Dokumenten anlegen." },
        { title: "Kennzahlen aggregieren", description: "Wert, Miete, Cashflow und Rendite berechnen." },
        { title: "Risiken einordnen", description: "Verteilung und Konzentrationen erkennen." },
        { title: "Strategie ableiten", description: "Reports und Vergleiche für Portfolioentscheidungen." },
      ],
      ...trustBase.de,
      ctaHeadline: "Ihr Portfolio im Blick behalten",
      ctaText:
        "Behalten Sie Wert, Ertrag und Risiko Ihres Immobilienbestands im Überblick — strukturiert und jederzeit aktualisierbar.",
    },
    en: {
      breadcrumbSolutions: "Solutions",
      breadcrumbTools: "Tools & Reports",
      breadcrumbCurrent: "Portfolio overview",
      heroLabel: "Tools & Reports",
      heroHeadline: "Portfolio overview — holdings, income and risk at a glance",
      heroSubheadline: "For long-term investors and owners with multiple properties.",
      heroText:
        "The portfolio overview consolidates your properties: total value, rental income, cash flow, yield and risk distribution — plus a location overview for strategic decisions.",
      ...sharedButtons.en,
      heroImageAlt: "Portfolio overview of multiple property investments",
      introLabel: "Context",
      introHeadline: "Why portfolio thinking goes beyond single assets",
      introText:
        "Owners of multiple properties need more than individual analyses. The portfolio overview shows concentrations, income structure and risk distribution — as a basis for rebalancing, sale or new investment, aligned with income and market value logic.",
      introImageAlt: "Investment opportunities and risks in a portfolio",
      featureLabel: "Metrics",
      featureHeadline: "What the portfolio overview shows",
      featureCards: [
        { title: "Property portfolio", description: "All assets with status and core data." },
        { title: "Total value", description: "Aggregated market value and book value perspective." },
        { title: "Rental income", description: "Net and gross rent across the portfolio." },
        { title: "Cash flow", description: "Ongoing income and charges at a glance." },
        { title: "Yield", description: "Portfolio yield and property-level deviations." },
        { title: "Risk distribution", description: "Location, tenant and property risks aggregated." },
      ],
      processLabel: "Process",
      processHeadline: "How to use the portfolio overview",
      processSteps: [
        { title: "Capture properties", description: "Add holdings with data and documents." },
        { title: "Aggregate metrics", description: "Calculate value, rent, cash flow and yield." },
        { title: "Assess risks", description: "Identify distribution and concentrations." },
        { title: "Derive strategy", description: "Reports and comparisons for portfolio decisions." },
      ],
      ...trustBase.en,
      ctaHeadline: "Keep your portfolio in view",
      ctaText:
        "Track value, income and risk across your property holdings — structured and always up to date.",
    },
  },
};

export function getToolPageContent(key: ToolPageKey): ToolPageContent {
  return TOOL_PAGES[key];
}
