import Link from "next/link";
import { cn } from "@/lib/utils";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";

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
  icon: ToolIconName;
}

type ToolIconName =
  | "dashboard"
  | "assistant"
  | "pdf"
  | "upload"
  | "compare"
  | "project"
  | "portfolio";

const TOOL_ICON_PATHS: Record<ToolIconName, string> = {
  dashboard:
    "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  assistant:
    "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
  pdf: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
  upload:
    "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5",
  compare:
    "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
  project:
    "M3.75 12h16.5m-16.5 3.75H16.5A2.25 2.25 0 0020.625 13.5v-6.75A2.25 2.25 0 0018.375 4.5H3.75m9 9v6.75m-3-3h6",
  portfolio:
    "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
};

const cardTitleClass =
  "text-h3 text-brand-800 break-words [overflow-wrap:anywhere] hyphens-auto transition-colors duration-300 group-hover:text-brand-600";
const cardTextClass =
  "text-base leading-[1.8] text-muted break-words [overflow-wrap:anywhere] hyphens-auto";

function ToolIcon({ name }: { name: ToolIconName }) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-800/[0.06] transition-colors duration-300 group-hover:bg-brand-800/[0.1]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-brand-700"
        aria-hidden="true"
      >
        <path d={TOOL_ICON_PATHS[name]} />
      </svg>
    </div>
  );
}

function OverviewLinkCard({
  title,
  description,
  href,
  linkLabel,
  premium = false,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  premium?: boolean;
  icon?: ToolIconName;
}) {
  return (
    <Link href={href} className="group block h-full no-underline">
      <div
        className={cn(
          "card-premium flex h-full min-h-[220px] flex-col gap-4 p-6 transition-all duration-300 hover:border-gold-500/25 md:p-8",
          premium &&
            "border-[#B9965B]/30 shadow-[0_12px_40px_rgba(185,150,91,0.10)] ring-1 ring-[#B9965B]/15",
        )}
      >
        <div className="flex items-start gap-4">
          {icon ? <ToolIcon name={icon} /> : null}
          <h2 className={cn(cardTitleClass, icon ? "flex-1" : undefined)}>{title}</h2>
        </div>
        <p className={cn(cardTextClass, "flex-1")}>{description}</p>
        <span className="text-label mt-auto inline-flex items-center gap-2 text-gold-600 transition-all duration-300 group-hover:gap-3">
          {linkLabel}
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
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

function getAnalysesDE(dashboardHref: string): AnalysisCard[] {
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
      href: dashboardHref,
    },
    {
      title: "Cashflow-Analyse",
      description:
        "Laufende Einnahmen und Belastungen strukturiert gegenüberstellen und einordnen.",
      href: dashboardHref,
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

function getAnalysesEN(dashboardHref: string): AnalysisCard[] {
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
      href: dashboardHref,
    },
    {
      title: "Cashflow analysis",
      description:
        "Compare and evaluate ongoing income and expenses in a structured way.",
      href: dashboardHref,
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

function getToolsDE(dashboardHref: string, solutionsHref: string): ToolCard[] {
  return [
    {
      title: "Dashboard",
      description: "Zentrale Übersicht Ihrer Projekte, Analysen und Entscheidungsgrundlagen.",
      href: dashboardHref,
      icon: "dashboard",
    },
    {
      title: "KI-Assistent",
      description: "Digitale Unterstützung bei Fragen, Auswertungen und Immobilienentscheidungen.",
      href: solutionsHref,
      icon: "assistant",
    },
    {
      title: "PDF-Berichte",
      description: "Strukturierte Berichte für Transparenz, Dokumentation und Entscheidungen.",
      href: solutionsHref,
      icon: "pdf",
    },
    {
      title: "Dokumenten-Upload",
      description: "Unterlagen zentral erfassen und für Analysen nutzbar machen.",
      href: solutionsHref,
      icon: "upload",
    },
    {
      title: "Vergleichsanalysen",
      description: "Objekte, Szenarien und Kennzahlen strukturiert nebeneinander betrachten.",
      href: solutionsHref,
      icon: "compare",
    },
    {
      title: "Projektmanagement",
      description: "Immobilienprojekte und Analyseprozesse übersichtlich begleiten.",
      href: solutionsHref,
      icon: "project",
    },
    {
      title: "Portfolioübersicht",
      description: "Bestand, Entwicklung und Perspektiven Ihrer Immobilien im Überblick.",
      href: solutionsHref,
      icon: "portfolio",
    },
  ];
}

function getToolsEN(dashboardHref: string, solutionsHref: string): ToolCard[] {
  return [
    {
      title: "Dashboard",
      description: "Central overview of your projects, analyses and decision support.",
      href: dashboardHref,
      icon: "dashboard",
    },
    {
      title: "AI assistant",
      description: "Digital support for questions, evaluations and property decisions.",
      href: solutionsHref,
      icon: "assistant",
    },
    {
      title: "PDF reports",
      description: "Structured reports for transparency, documentation and decisions.",
      href: solutionsHref,
      icon: "pdf",
    },
    {
      title: "Document upload",
      description: "Capture documents centrally and prepare them for analysis.",
      href: solutionsHref,
      icon: "upload",
    },
    {
      title: "Comparison analyses",
      description: "Compare properties, scenarios and key figures in a structured way.",
      href: solutionsHref,
      icon: "compare",
    },
    {
      title: "Project management",
      description: "Manage property projects and analysis workflows with clarity.",
      href: solutionsHref,
      icon: "project",
    },
    {
      title: "Portfolio overview",
      description: "Overview of holdings, development and perspectives across your portfolio.",
      href: solutionsHref,
      icon: "portfolio",
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
  const contactHref = getRoute(locale, "contact");
  const dashboardHref = getRoute(locale, "dashboard");
  const solutionsHref = getRoute(locale, "solutions");
  const analyses = locale === "de" ? getAnalysesDE(dashboardHref) : getAnalysesEN(dashboardHref);
  const tools =
    locale === "de"
      ? getToolsDE(dashboardHref, solutionsHref)
      : getToolsEN(dashboardHref, solutionsHref);

  return (
    <>
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-label mb-6 block text-gold-600">{c.heroLabel}</p>
            <h1 className="text-h1 text-brand-800">{c.heroHeadline}</h1>
            <div className="gold-rule mt-8" aria-hidden="true" />
            <p className="mt-8 max-w-2xl text-lg leading-[1.8] text-muted">{c.heroText}</p>
          </div>
        </div>
      </section>

      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader
          label={c.goalsLabel}
          headline={c.goalsHeadline}
          description={c.goalsDescription}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal) => (
            <OverviewLinkCard
              key={goal.title}
              title={goal.title}
              description={goal.description}
              href={goal.href}
              linkLabel={c.cardLink}
              premium
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
            <OverviewLinkCard
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
            <OverviewLinkCard
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
        primaryHref={dashboardHref}
        secondaryLabel={c.ctaSecondary}
        secondaryHref={contactHref}
      />
    </>
  );
}
