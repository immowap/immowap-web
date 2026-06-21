import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SolutionHeroSection } from "@/components/ui/SolutionHeroSection";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";

interface RisikoanalysePageProps {
  locale: Locale;
}

const HERO_IMAGE = "/images/analysen/risikoanalyse-hero.jpg";
const SECTION_IMAGE = "/images/analysen/risikoanalyse-section.jpg";

const cardTitleClass =
  "text-xl md:text-[22px] lg:text-[26px] font-semibold leading-[1.3] text-brand-800 break-words [overflow-wrap:anywhere] hyphens-auto";
const cardTextClass =
  "text-[15px] md:text-base leading-[1.4] text-muted break-words [overflow-wrap:anywhere] hyphens-auto";
const cardShellClass =
  "card-premium flex min-h-0 flex-col gap-4 overflow-visible p-6 md:p-8 lg:p-10";

const copy = {
  de: {
    breadcrumbSolutions: "Lösungen",
    breadcrumbAnalyses: "Analysen",
    breadcrumbCurrent: "Risikoanalyse",
    heroLabel: "Analysen",
    heroHeadline: "Risikoanalyse für Immobilien",
    heroSubheadline: "Risiken erkennen und fundierte Entscheidungen treffen.",
    heroText:
      "Neben Marktwert und Rendite spielen zahlreiche Risiken eine wichtige Rolle. Eine strukturierte Risikoanalyse hilft dabei, Chancen und mögliche Schwachstellen frühzeitig zu erkennen und Entscheidungen besser abzusichern.",
    heroBtnPrimary: "Risikoanalyse starten",
    heroBtnSecondary: "Kontakt aufnehmen",
    sectionWhyLabel: "Einordnung",
    sectionWhyHeadline: "Warum eine Risikoanalyse wichtig ist",
    whyCards: [
      {
        title: "Marktrisiken",
        description: "Entwicklung von Angebot, Nachfrage und Preisniveau.",
      },
      {
        title: "Finanzierungsrisiken",
        description: "Zinsen, Kapitalstruktur und langfristige Belastungen.",
      },
      {
        title: "Objektrisiken",
        description: "Bausubstanz, Alter und technischer Zustand.",
      },
      {
        title: "Vermietungsrisiken",
        description: "Leerstand und Mietausfall.",
      },
    ],
    sectionConsiderLabel: "Risikofaktoren",
    sectionConsiderHeadline: "Welche Risiken berücksichtigt immowap?",
    considerCards: [
      {
        title: "Standortrisiko",
        description:
          "Entwicklung der Mikrolage, Infrastruktur und regionaler Nachfrage im Bewertungskontext.",
      },
      {
        title: "Marktentwicklung",
        description: "Veränderungen von Angebot, Nachfrage und Preisniveau am Immobilienmarkt.",
      },
      {
        title: "Finanzierungsrisiko",
        description: "Zinsniveau, Kapitalstruktur und langfristige Tragfähigkeit.",
      },
      {
        title: "Technischer Zustand",
        description: "Bausubstanz, Alter, Modernisierungsstand und Instandhaltungsbedarf.",
      },
      {
        title: "Mietausfallrisiko",
        description: "Leerstand, Mietausfall und nachhaltige Vermietbarkeit.",
      },
      {
        title: "Regulatorische Risiken",
        description: "Energetische Anforderungen, Mietrecht und weitere rechtliche Rahmenbedingungen.",
      },
    ],
    sectionQuestionsLabel: "Fragestellungen",
    sectionQuestionsHeadline: "Typische Fragestellungen",
    questionCards: [
      "Ist die Immobilie überbewertet?",
      "Wie hoch ist das Leerstandsrisiko?",
      "Welche Sanierungskosten können entstehen?",
      "Wie wirken sich steigende Zinsen aus?",
      "Welche Risiken bestehen in der Lage?",
      "Ist die Immobilie langfristig robust?",
    ],
    sectionProcessLabel: "Ablauf",
    sectionProcessHeadline: "Was fließt in die Risikoanalyse ein?",
    processSteps: [
      { title: "Ziele verstehen", description: "Individuelle Zielsetzung und Rahmenbedingungen." },
      { title: "Objekt analysieren", description: "Zustand, Lage und objektspezifische Merkmale." },
      { title: "Risiken identifizieren", description: "Systematische Erfassung relevanter Risikofaktoren." },
      { title: "Szenarien bewerten", description: "Einordnung von Chancen und Unsicherheiten." },
      {
        title: "Entscheidungsgrundlagen ableiten",
        description: "Nachvollziehbare Zusammenfassung für die Entscheidung.",
      },
    ],
    sectionOverviewHeadline: "Mögliche Risiken im Überblick",
    overviewCards: [
      { title: "Leerstand", description: "Risiko unvermieteter Flächen und Einnahmeausfälle." },
      { title: "Mietausfall", description: "Ausfall von Mieteinnahmen und Bonitätsrisiken." },
      {
        title: "Sanierungsbedarf",
        description: "Notwendige Investitionen in Bausubstanz und Technik.",
      },
      {
        title: "Marktveränderungen",
        description: "Schwankungen bei Preisen, Nachfrage und Zinsen.",
      },
      {
        title: "Finanzierungsrisiken",
        description: "Belastung durch Zins, Tilgung und Kapitalstruktur.",
      },
      {
        title: "Gesetzliche und energetische Anforderungen",
        description: "Regulatorische Vorgaben und Modernisierungspflichten.",
      },
    ],
    sectionDiffLabel: "Perspektive",
    sectionDiffHeadline: "Der Unterschied von immowap",
    diffCards: [
      {
        title: "Standardbetrachtung",
        description: "Oft werden nur Kaufpreis und Rendite betrachtet.",
      },
      {
        title: "Ganzheitliche Betrachtung",
        description:
          "immowap berücksichtigt Markt, Objekt, Finanzierung und individuelle Ziele.",
      },
      {
        title: "Individuelle Entscheidungsgrundlage",
        description:
          "Keine pauschalen Aussagen, sondern nachvollziehbare Analysen.",
      },
    ],
    ctaHeadline: "Risiken frühzeitig erkennen",
    ctaText:
      "Eine Immobilie sollte nicht nur Chancen bieten, sondern auch langfristig zu Ihren Zielen passen. Eine strukturierte Risikoanalyse schafft Transparenz und unterstützt fundierte Entscheidungen.",
    ctaBtn: "Analyse starten",
  },
  en: {
    breadcrumbSolutions: "Solutions",
    breadcrumbAnalyses: "Analyses",
    breadcrumbCurrent: "Risk analysis",
    heroLabel: "Analyses",
    heroHeadline: "Real Estate Risk Analysis",
    heroSubheadline: "Understand risks and make well-founded decisions.",
    heroText:
      "In addition to market value and returns, many factors influence the long-term success of a property. A structured risk analysis helps identify potential weaknesses and supports better decisions.",
    heroBtnPrimary: "Start risk analysis",
    heroBtnSecondary: "Contact us",
    sectionWhyLabel: "Context",
    sectionWhyHeadline: "Why risk analysis matters",
    whyCards: [
      {
        title: "Market risks",
        description: "Changes in supply, demand and market conditions.",
      },
      {
        title: "Financing risks",
        description: "Interest rates, leverage and financing structures.",
      },
      {
        title: "Property risks",
        description: "Building condition, age and technical quality.",
      },
      {
        title: "Rental risks",
        description: "Vacancy and rental default risks.",
      },
    ],
    sectionConsiderLabel: "Risk factors",
    sectionConsiderHeadline: "Which risks does immowap consider?",
    considerCards: [
      {
        title: "Location risk",
        description:
          "Micro-location development, infrastructure and regional demand in the valuation context.",
      },
      {
        title: "Market development",
        description: "Changes in supply, demand and price levels in the property market.",
      },
      {
        title: "Financing risk",
        description: "Interest rates, capital structure and long-term affordability.",
      },
      {
        title: "Technical condition",
        description: "Building fabric, age, modernisation status and maintenance needs.",
      },
      {
        title: "Vacancy risk",
        description: "Vacancy, rental default and sustainable lettability.",
      },
      {
        title: "Regulatory risks",
        description: "Energy requirements, tenancy law and other legal frameworks.",
      },
    ],
    sectionQuestionsLabel: "Questions",
    sectionQuestionsHeadline: "Typical questions",
    questionCards: [
      "Is the property overpriced?",
      "How high is the vacancy risk?",
      "Which renovation costs may arise?",
      "How do rising interest rates affect the investment?",
      "Which location risks exist?",
      "Is the investment sustainable in the long term?",
    ],
    sectionProcessLabel: "Process",
    sectionProcessHeadline: "What is included in the risk analysis?",
    processSteps: [
      { title: "Understand objectives", description: "Individual goals and framework conditions." },
      { title: "Analyse the property", description: "Condition, location and property-specific features." },
      { title: "Identify risks", description: "Systematic identification of relevant risk factors." },
      { title: "Evaluate scenarios", description: "Assessment of opportunities and uncertainties." },
      {
        title: "Develop decision support",
        description: "Traceable summary for decision-making.",
      },
    ],
    sectionOverviewHeadline: "Potential risks at a glance",
    overviewCards: [
      { title: "Vacancy", description: "Risk of unlet space and loss of income." },
      { title: "Rental default", description: "Loss of rental income and credit risks." },
      { title: "Renovation requirements", description: "Necessary investment in building fabric and systems." },
      { title: "Market changes", description: "Fluctuations in prices, demand and interest rates." },
      { title: "Financing risks", description: "Burden from interest, repayment and capital structure." },
      {
        title: "Regulatory and energy requirements",
        description: "Regulatory obligations and modernisation duties.",
      },
    ],
    sectionDiffLabel: "Perspective",
    sectionDiffHeadline: "The immowap difference",
    diffCards: [
      {
        title: "Standard approach",
        description: "Traditional analyses often focus only on purchase price and returns.",
      },
      {
        title: "Holistic perspective",
        description:
          "immowap considers market factors, the property itself, financing and personal objectives.",
      },
      {
        title: "Individual decision support",
        description:
          "No one-size-fits-all recommendations but objective and transparent analyses.",
      },
    ],
    ctaHeadline: "Recognize risks early",
    ctaText:
      "A property should not only offer opportunities but also fit your long-term objectives. A structured risk analysis improves transparency and supports well-founded decisions.",
    ctaBtn: "Start analysis",
  },
} as const;

export function RisikoanalysePage({ locale }: RisikoanalysePageProps) {
  const c = copy[locale];
  const contactHref = getRoute(locale, "contact");
  const dashboardHref = getRoute(locale, "dashboard");
  const solutionsHref = getRoute(locale, "solutions");

  return (
    <>
      <nav
        aria-label={locale === "de" ? "Brotkrumen-Navigation" : "Breadcrumb"}
        className="border-b border-warm-gray/30 bg-[#F7F5EF]"
      >
        <div className="mx-auto max-w-7xl px-6 py-4 md:px-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
            <li>
              <Link href={solutionsHref} className="transition-colors hover:text-brand-600">
                {c.breadcrumbSolutions}
              </Link>
            </li>
            <li aria-hidden="true" className="text-warm-gray">
              /
            </li>
            <li className="text-muted">{c.breadcrumbAnalyses}</li>
            <li aria-hidden="true" className="text-warm-gray">
              /
            </li>
            <li className="font-medium text-brand-800" aria-current="page">
              {c.breadcrumbCurrent}
            </li>
          </ol>
        </div>
      </nav>

      <SolutionHeroSection
        backgroundClassName="bg-[#F7F5EF]"
        label={c.heroLabel}
        headline={c.heroHeadline}
        primaryHref={dashboardHref}
        primaryLabel={c.heroBtnPrimary}
        secondaryHref={contactHref}
        secondaryLabel={c.heroBtnSecondary}
        imageSrc={HERO_IMAGE}
        imageAlt={
          locale === "de"
            ? "Professionelle Immobilienbesprechung mit Unterlagen und Analyse"
            : "Professional property consultation with documents and analysis"
        }
      >
        <p className="mt-8 text-xl font-medium leading-[1.6] text-brand-800">{c.heroSubheadline}</p>
        <p className="mt-6 text-lg leading-[1.8] text-muted">{c.heroText}</p>
      </SolutionHeroSection>

      {/* ─── WHY ──────────────────────────────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader label={c.sectionWhyLabel} headline={c.sectionWhyHeadline} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {c.whyCards.map((card) => (
            <article key={card.title} className={`${cardShellClass} h-full`}>
              <h3 className={cardTitleClass}>{card.title}</h3>
              <p className={cardTextClass}>{card.description}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ─── RISKS CONSIDERED ─────────────────────────────────────────────── */}
      <Section className="bg-[#F7F5EF] py-24 md:py-32">
        <SectionHeader
          label={c.sectionConsiderLabel}
          headline={c.sectionConsiderHeadline}
        />
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-[380px] overflow-hidden rounded-2xl sm:h-[520px] lg:sticky lg:top-28">
            <Image
              src={SECTION_IMAGE}
              alt={
                locale === "de"
                  ? "Immobilienunterlagen und Bewertungsdokumente auf dem Schreibtisch"
                  : "Property documents and valuation papers on a desk"
              }
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {c.considerCards.map((card) => (
              <article key={card.title} className={`${cardShellClass} h-full`}>
                <h3 className={cardTitleClass}>{card.title}</h3>
                <p className={cardTextClass}>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── TYPICAL QUESTIONS ────────────────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader
          label={c.sectionQuestionsLabel}
          headline={c.sectionQuestionsHeadline}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.questionCards.map((question) => (
            <div
              key={question}
              className="card-premium group flex min-h-[120px] items-center p-6 transition-all duration-300 hover:border-gold-500/25 md:p-8"
            >
              <p
                className={`${cardTitleClass} text-lg md:text-xl lg:text-[22px] transition-colors duration-300 group-hover:text-brand-600`}
              >
                {question}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── PROCESS ──────────────────────────────────────────────────────── */}
      <Section className="bg-[#F7F5EF] py-24 md:py-32">
        <SectionHeader label={c.sectionProcessLabel} headline={c.sectionProcessHeadline} />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {c.processSteps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col">
              <span className="text-label mb-4 block text-gold-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={`${cardTitleClass} mb-3`}>{step.title}</h3>
              <p className={cardTextClass}>{step.description}</p>
              {index < c.processSteps.length - 1 && (
                <div
                  className="absolute right-0 top-8 hidden h-px w-6 bg-warm-gray/60 lg:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ─── OVERVIEW ─────────────────────────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader headline={c.sectionOverviewHeadline} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.overviewCards.map((card) => (
            <article key={card.title} className={`${cardShellClass} h-full`}>
              <h3 className={cardTitleClass}>{card.title}</h3>
              <p className={cardTextClass}>{card.description}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ─── DIFFERENCE ───────────────────────────────────────────────────── */}
      <Section className="bg-[#F7F5EF] py-24 md:py-32">
        <SectionHeader label={c.sectionDiffLabel} headline={c.sectionDiffHeadline} />
        <div className="grid gap-6 lg:grid-cols-3">
          {c.diffCards.map((card) => (
            <article
              key={card.title}
              className={`${cardShellClass} min-h-[220px] h-full lg:min-h-[260px]`}
            >
              <h3 className={cardTitleClass}>{card.title}</h3>
              <p className={`${cardTextClass} mt-auto`}>{card.description}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-brand-800 px-6 pt-[140px] pb-[140px] text-white md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2 text-white">{c.ctaHeadline}</h2>
          <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-[1.8] text-white/85">{c.ctaText}</p>
          <div className="mt-12">
            <Button href={dashboardHref} className="sm:w-auto">
              {c.ctaBtn}
            </Button>
          </div>
        </div>
      </section>
      <div className="min-h-[100px] bg-[#F7F5EF]" aria-hidden="true" />
    </>
  );
}
