import { FeatureCard } from "@/components/ui/cards";
import { CTASection } from "@/components/ui/CTASection";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { IconName } from "@/components/ui/icons/Icon";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";
import { getToolHref } from "@/lib/tools/routes";

interface LoesungenPageProps {
  locale: Locale;
}

interface GoalCard {
  title: string;
  description: string;
  href: string;
}

interface AnalysisCard {
  title: string;
  description: string;
  href: string;
}

interface ToolCard {
  title: string;
  description: string;
  href: string;
  icon: IconName;
}

const goalsDE: GoalCard[] = [
  {
    title: "Eigennutzung",
    description:
      "Individuelle Betrachtung für das Wohnen im Eigenbestand. Entscheidungen im Kontext Ihrer persönlichen Ziele, Lebenssituation und langfristigen Pläne.",
    href: "/de/loesungen/eigennutzung",
  },
  {
    title: "Kapitalanlage",
    description:
      "Renditeorientierte Analysen für Investitionsentscheidungen. Bewertung von Cashflow, Rendite und Risikoprofil.",
    href: "/de/loesungen/kapitalanlage",
  },
  {
    title: "Fix & Flip",
    description:
      "Strukturierte Einschätzung von Sanierungspotenzial und Wertsteigerung für kurz- bis mittelfristige Investitionen.",
    href: "/de/loesungen/fix-flip",
  },
  {
    title: "Projektentwicklung",
    description:
      "Grundstücke, Neubau, Aufteilung, Umbau und Nachverdichtung – von der Idee bis zur Exit-Strategie.",
    href: "/de/loesungen/sanierung-modernisierung",
  },
  {
    title: "Individuelle Strategie",
    description:
      "Maßgeschneiderte Betrachtung für Vermögensaufbau, Portfolioaufbau, Fix & Hold und langfristige Ziele – ohne Standardlösungen.",
    href: "/de/loesungen/mehrfamilienhaeuser",
  },
  {
    title: "Gewerbeimmobilien",
    description:
      "Einschätzung gewerblicher Objekte nach individuellem Nutzungskonzept, Zielsetzung und Marktlage.",
    href: "/de/loesungen/gewerbeimmobilien",
  },
];

const goalsEN: GoalCard[] = [
  {
    title: "Owner Occupation",
    description:
      "Individual assessment for owner-occupied properties. Decisions in the context of your personal goals, life situation and long-term plans.",
    href: "/en/solutions/owner-occupation",
  },
  {
    title: "Investment Property",
    description:
      "Return-focused analyses for investment decisions. Assessment of cashflow, yield and risk profile.",
    href: "/en/solutions/investment-property",
  },
  {
    title: "Fix & Flip",
    description:
      "Structured assessment of renovation potential and value creation for short- to medium-term investments.",
    href: "/en/solutions/fix-flip",
  },
  {
    title: "Project Development",
    description:
      "Land, new build, subdivision, conversion and densification – from concept to exit strategy.",
    href: "/en/solutions/renovation-modernization",
  },
  {
    title: "Individual Strategy",
    description:
      "Tailored assessment for wealth building, portfolio development, fix & hold and long-term goals – without one-size-fits-all solutions.",
    href: "/en/solutions/multi-family-properties",
  },
  {
    title: "Commercial Real Estate",
    description:
      "Assessment of commercial properties by individual usage concept, objectives and market conditions.",
    href: "/en/solutions/commercial-real-estate",
  },
];

function getAnalysesDE(): AnalysisCard[] {
  return [
    {
      title: "Marktwertanalyse",
      description:
        "Marktwert nach objektiven Kriterien und ImmoWertV-Grundsätzen nachvollziehbar einordnen.",
      href: "/de/loesungen/marktwertanalyse",
    },
    {
      title: "Vergleichswertverfahren",
      description:
        "Wert auf Basis vergleichbarer Objekte strukturiert und transparent bestimmen.",
      href: "/de/loesungen/analysen/vergleichswertverfahren",
    },
    {
      title: "Ertragswertverfahren",
      description:
        "Ertragswert aus Mieteinnahmen und Bewirtschaftungskosten im Bewertungskontext betrachten.",
      href: "/de/loesungen/analysen/ertragswertverfahren",
    },
    {
      title: "Sachwertverfahren",
      description:
        "Boden- und Gebäudewert nach technischen und wirtschaftlichen Gesichtspunkten ableiten.",
      href: "/de/loesungen/analysen/sachwertverfahren",
    },
    {
      title: "Renditeanalyse",
      description:
        "Renditepotenzial im Verhältnis zu Risiko, Finanzierung und individuellen Zielen bewerten.",
      href: "/de/loesungen/analysen/ertragswertverfahren",
    },
    {
      title: "Cashflow-Analyse",
      description:
        "Laufende Einnahmen und Belastungen strukturiert gegenüberstellen und einordnen.",
      href: "/de/loesungen/analysen/ertragswertverfahren",
    },
    {
      title: "Risikoanalyse",
      description:
        "Chancen, Unsicherheiten und Schwachstellen frühzeitig erkennen und bewerten.",
      href: "/de/loesungen/analysen/risikoanalyse",
    },
    {
      title: "Standortanalyse",
      description:
        "Makro- und Mikrolage als zentrale Wertfaktoren im Bewertungskontext betrachten.",
      href: "/de/loesungen/analysen/standortanalyse",
    },
    {
      title: "Dokumentenanalyse",
      description:
        "Unterlagen strukturiert prüfen und relevante Informationen für Entscheidungen ableiten.",
      href: "/de/loesungen/analysen/dokumentenanalyse",
    },
    {
      title: "Individuelle Immobilienanalyse",
      description:
        "Objekt, Markt, Finanzierung und persönliche Ziele in einer ganzheitlichen Betrachtung verbinden.",
      href: "/de/loesungen/analysen/individuelle-immobilienanalyse",
    },
  ];
}

function getAnalysesEN(): AnalysisCard[] {
  return [
    {
      title: "Market value analysis",
      description:
        "Assess market value based on objective criteria and ImmoWertV principles.",
      href: "/en/solutions/market-value-analysis",
    },
    {
      title: "Sales comparison approach",
      description:
        "Determine value based on comparable properties in a structured and transparent way.",
      href: "/en/solutions/analyses/sales-comparison-approach",
    },
    {
      title: "Income approach",
      description:
        "Evaluate income value from rental income and operating costs in the valuation context.",
      href: "/en/solutions/analyses/income-approach",
    },
    {
      title: "Cost approach",
      description:
        "Derive land and building value from technical and economic factors.",
      href: "/en/solutions/analyses/cost-approach",
    },
    {
      title: "Return analysis",
      description:
        "Assess return potential in relation to risk, financing and individual objectives.",
      href: "/en/solutions/analyses/income-approach",
    },
    {
      title: "Cashflow analysis",
      description:
        "Compare and evaluate ongoing income and expenses in a structured way.",
      href: "/en/solutions/analyses/income-approach",
    },
    {
      title: "Risk analysis",
      description:
        "Identify and assess opportunities, uncertainties and potential weaknesses early.",
      href: "/en/solutions/analyses/risk-analysis",
    },
    {
      title: "Location analysis",
      description:
        "Consider macro and micro location as key value drivers in the valuation context.",
      href: "/en/solutions/analyses/location-analysis",
    },
    {
      title: "Document analysis",
      description:
        "Review documents systematically and derive relevant information for decisions.",
      href: "/en/solutions/analyses/document-analysis",
    },
    {
      title: "Individual property analysis",
      description:
        "Connect property, market, financing and personal objectives in a holistic assessment.",
      href: "/en/solutions/analyses/individual-property-analysis",
    },
  ];
}

function getToolsDE(): ToolCard[] {
  return [
    {
      title: "Dashboard",
      description: "Zentrale Übersicht Ihrer Projekte, Analysen und Entscheidungsgrundlagen.",
      href: getToolHref("de", "dashboard"),
      icon: "chart",
    },
    {
      title: "KI-Assistent",
      description: "Digitale Unterstützung bei Fragen, Auswertungen und Immobilienentscheidungen.",
      href: getToolHref("de", "ki-assistent"),
      icon: "ai-analysis",
    },
    {
      title: "PDF-Berichte",
      description: "Strukturierte Berichte für Transparenz, Dokumentation und Entscheidungen.",
      href: getToolHref("de", "pdf-berichte"),
      icon: "reports",
    },
    {
      title: "Dokumenten-Upload",
      description: "Unterlagen zentral erfassen und für Analysen nutzbar machen.",
      href: getToolHref("de", "dokumenten-upload"),
      icon: "documents",
    },
    {
      title: "Vergleichsanalysen",
      description: "Objekte, Szenarien und Kennzahlen strukturiert nebeneinander betrachten.",
      href: getToolHref("de", "vergleichsanalysen"),
      icon: "chart",
    },
    {
      title: "Projektmanagement",
      description: "Immobilienprojekte und Analyseprozesse übersichtlich begleiten.",
      href: getToolHref("de", "projektmanagement"),
      icon: "strategy",
    },
    {
      title: "Portfolioübersicht",
      description: "Bestand, Entwicklung und Perspektiven Ihrer Immobilien im Überblick.",
      href: getToolHref("de", "portfoliouebersicht"),
      icon: "investment",
    },
  ];
}

function getToolsEN(): ToolCard[] {
  return [
    {
      title: "Dashboard",
      description: "Central overview of your projects, analyses and decision support.",
      href: getToolHref("en", "dashboard"),
      icon: "chart",
    },
    {
      title: "AI assistant",
      description: "Digital support for questions, evaluations and property decisions.",
      href: getToolHref("en", "ki-assistent"),
      icon: "ai-analysis",
    },
    {
      title: "PDF reports",
      description: "Structured reports for transparency, documentation and decisions.",
      href: getToolHref("en", "pdf-berichte"),
      icon: "reports",
    },
    {
      title: "Document upload",
      description: "Capture documents centrally and prepare them for analysis.",
      href: getToolHref("en", "dokumenten-upload"),
      icon: "documents",
    },
    {
      title: "Comparison analyses",
      description: "Compare properties, scenarios and key figures in a structured way.",
      href: getToolHref("en", "vergleichsanalysen"),
      icon: "chart",
    },
    {
      title: "Project management",
      description: "Manage property projects and analysis workflows with clarity.",
      href: getToolHref("en", "projektmanagement"),
      icon: "strategy",
    },
    {
      title: "Portfolio overview",
      description: "Overview of holdings, development and perspectives across your portfolio.",
      href: getToolHref("en", "portfoliouebersicht"),
      icon: "investment",
    },
  ];
}

const copy = {
  de: {
    heroLabel: "Lösungen",
    heroHeadline: "Lösungen für Ihre Immobilienziele",
    heroText:
      "immowap bietet strukturierte Analysen, digitale Werkzeuge und individuelle Beratung – abgestimmt auf Ihre Ziele, Ihre Situation und Ihre Erwartungen.",
    goalsLabel: "Für Ihre Ziele",
    goalsHeadline: "Sechs Bereiche. Eine Plattform.",
    goalsDescription:
      "Jeder Bereich adressiert unterschiedliche Ziele, Situationen und Anforderungen. Analysen werden individuell und kontextbezogen erstellt.",
    analysesLabel: "Analysen",
    analysesHeadline: "Analysen",
    analysesDescription:
      "Strukturierte Betrachtungen auf Grundlage objektiver Kriterien und unter Berücksichtigung der ImmoWertV.",
    toolsLabel: "Tools & Reports",
    toolsHeadline: "Tools & Reports",
    toolsDescription:
      "Digitale Werkzeuge und strukturierte Auswertungen für mehr Transparenz.",
    cardLink: "Mehr erfahren",
    differentiatorHeadline: "Nicht jede Immobilie wird gleich betrachtet.",
    differentiatorText:
      "Unterschiedliche Ziele erfordern unterschiedliche Betrachtungsweisen. immowap strukturiert Analysen nach dem jeweiligen Kontext – ob Eigennutzung, Kapitalanlage oder Projektentwicklung.",
    ctaHeadline: "Bereit für eine strukturierte Analyse?",
    ctaText:
      "Teilen Sie uns Ihr Vorhaben mit. Wir erstellen eine individuelle Einschätzung abgestimmt auf Ihre Ziele.",
    ctaPrimary: "Analyse starten",
    ctaSecondary: "Anfrage senden",
  },
  en: {
    heroLabel: "Solutions",
    heroHeadline: "Solutions for your property goals",
    heroText:
      "immowap offers structured analyses, digital tools and individual advisory — tailored to your goals, your situation and your expectations.",
    goalsLabel: "For your goals",
    goalsHeadline: "Six areas. One platform.",
    goalsDescription:
      "Each area addresses different goals, situations and requirements. Analyses are created individually and in context.",
    analysesLabel: "Analyses",
    analysesHeadline: "Analyses",
    analysesDescription:
      "Structured assessments based on objective criteria and aligned with the principles of ImmoWertV.",
    toolsLabel: "Tools & Reports",
    toolsHeadline: "Tools & Reports",
    toolsDescription:
      "Digital tools and structured reports for greater transparency.",
    cardLink: "Learn more",
    differentiatorHeadline: "Not every property is evaluated in the same way.",
    differentiatorText:
      "Different goals require different perspectives. immowap structures analyses according to the respective context — whether owner-occupation, investment or project development.",
    ctaHeadline: "Ready for a structured analysis?",
    ctaText:
      "Share your plans with us. We will create an individual assessment aligned with your goals.",
    ctaPrimary: "Start analysis",
    ctaSecondary: "Send enquiry",
  },
} as const;

export function LoesungenPage({ locale }: LoesungenPageProps) {
  const c = copy[locale];
  const goals = locale === "de" ? goalsDE : goalsEN;
  const analyses = locale === "de" ? getAnalysesDE() : getAnalysesEN();
  const tools = locale === "de" ? getToolsDE() : getToolsEN();

  return (
    <>
      <PageHeader
        layout="text"
        label={c.heroLabel}
        headline={c.heroHeadline}
        subheadline={c.heroText}
      />

      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader
          label={c.goalsLabel}
          headline={c.goalsHeadline}
          description={c.goalsDescription}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal) => (
            <FeatureCard
              key={goal.title}
              title={goal.title}
              description={goal.description}
              href={goal.href}
              linkLabel={c.cardLink}
            />
          ))}
        </div>
      </Section>

      <Section className="py-24 md:py-32">
        <SectionHeader
          label={c.analysesLabel}
          headline={c.analysesHeadline}
          description={c.analysesDescription}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {analyses.map((analysis) => (
            <FeatureCard
              key={analysis.title}
              title={analysis.title}
              description={analysis.description}
              href={analysis.href}
              linkLabel={c.cardLink}
            />
          ))}
        </div>
      </Section>

      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader
          label={c.toolsLabel}
          headline={c.toolsHeadline}
          description={c.toolsDescription}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tools.map((tool) => (
            <FeatureCard
              key={tool.title}
              title={tool.title}
              description={tool.description}
              href={tool.href}
              linkLabel={c.cardLink}
              icon={tool.icon}
            />
          ))}
        </div>
      </Section>

      <Section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2 text-brand-800">{c.differentiatorHeadline}</h2>
          <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-[1.8] text-muted">
            {c.differentiatorText}
          </p>
        </div>
      </Section>

      <CTASection
        headline={c.ctaHeadline}
        text={c.ctaText}
        primaryLabel={c.ctaPrimary}
        primaryHref={getRoute(locale, "dashboard")}
        secondaryLabel={c.ctaSecondary}
        secondaryHref={getRoute(locale, "contact")}
      />
    </>
  );
}
