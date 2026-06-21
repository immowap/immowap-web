import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SolutionHeroSection } from "@/components/ui/SolutionHeroSection";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";

interface StandortanalysePageProps {
  locale: Locale;
}

const HERO_IMAGE = "/images/analysen/standortanalyse-hero.jpg";
const SECTION_IMAGE = "/images/analysen/standortanalyse-section.jpg";

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
    breadcrumbCurrent: "Standortanalyse",
    heroLabel: "Analysen",
    heroHeadline: "Standortanalyse für Immobilien",
    heroSubheadline: "Lage verstehen und Potenziale frühzeitig erkennen.",
    heroText:
      "Die Lage zählt zu den wichtigsten Einflussfaktoren einer Immobilie. Eine fundierte Standortanalyse hilft dabei, Chancen, Risiken und langfristige Entwicklungen besser einzuschätzen.",
    heroBtnPrimary: "Standortanalyse starten",
    heroBtnSecondary: "Kontakt aufnehmen",
    sectionWhyLabel: "Einordnung",
    sectionWhyHeadline: "Warum die Lage entscheidend ist",
    whyCards: [
      {
        title: "Makrolage",
        description: "Regionale Wirtschafts- und Bevölkerungsentwicklung.",
      },
      {
        title: "Mikrolage",
        description: "Direktes Umfeld und Nachbarschaft.",
      },
      {
        title: "Infrastruktur",
        description: "Verkehrsanbindung, Schulen und Versorgung.",
      },
      {
        title: "Zukunftspotenzial",
        description: "Langfristige Entwicklungsmöglichkeiten.",
      },
    ],
    sectionConsiderLabel: "Standortfaktoren",
    sectionConsiderHeadline: "Welche Faktoren berücksichtigt immowap?",
    considerCards: [
      {
        title: "Makrolage",
        description:
          "Regionale Rahmenbedingungen, Wirtschaftsstruktur und demografische Entwicklung im Bewertungskontext.",
      },
      {
        title: "Mikrolage",
        description: "Unmittelbares Umfeld, Nachbarschaftsqualität und objektspezifische Lagevorteile.",
      },
      {
        title: "Verkehrsanbindung",
        description: "Erreichbarkeit, ÖPNV, Straßenanbindung und Mobilitätsinfrastruktur.",
      },
      {
        title: "Demografische Entwicklung",
        description: "Bevölkerungsentwicklung, Haushaltsstruktur und regionale Nachfrage.",
      },
      {
        title: "Arbeitsmarkt und Wirtschaft",
        description: "Beschäftigung, Wirtschaftskraft und regionale Wettbewerbsfähigkeit.",
      },
      {
        title: "Entwicklungspotenziale",
        description: "Städtebauliche Planung, Infrastrukturprojekte und langfristige Perspektiven.",
      },
    ],
    sectionQuestionsLabel: "Fragestellungen",
    sectionQuestionsHeadline: "Typische Fragestellungen",
    questionCards: [
      "Ist die Lage langfristig attraktiv?",
      "Wie entwickelt sich die Region?",
      "Welche Infrastruktur ist vorhanden?",
      "Besteht ein Vermietungspotenzial?",
      "Welche Risiken bestehen?",
      "Wie beeinflusst die Lage den Wert?",
    ],
    sectionProcessLabel: "Ablauf",
    sectionProcessHeadline: "Bestandteile einer Standortanalyse",
    processSteps: [
      { title: "Region verstehen", description: "Makrolage und regionale Rahmenbedingungen." },
      { title: "Mikrolage analysieren", description: "Unmittelbares Umfeld und Nachbarschaft." },
      { title: "Marktdaten bewerten", description: "Nachfrage, Angebot und Marktentwicklung." },
      { title: "Chancen und Risiken einordnen", description: "Standortbezogene Stärken und Unsicherheiten." },
      {
        title: "Entscheidungsgrundlagen ableiten",
        description: "Nachvollziehbare Zusammenfassung für die Entscheidung.",
      },
    ],
    sectionDriversHeadline: "Einflussfaktoren auf den Standort",
    driverCards: [
      {
        title: "Bevölkerungsentwicklung",
        description: "Demografischer Wandel und regionale Bevölkerungsdynamik.",
      },
      {
        title: "Wirtschaftskraft",
        description: "Regionale Wirtschaftsstruktur und Kaufkraft.",
      },
      {
        title: "Verkehrsanbindung",
        description: "Erreichbarkeit und Mobilitätsinfrastruktur.",
      },
      {
        title: "Bildungseinrichtungen",
        description: "Schulen, Kitas und Bildungsangebote in der Nähe.",
      },
      {
        title: "Freizeit und Nahversorgung",
        description: "Einkaufsmöglichkeiten, Grünflächen und Freizeitangebote.",
      },
      {
        title: "Städtebauliche Entwicklung",
        description: "Planung, Infrastrukturprojekte und städtebauliche Perspektiven.",
      },
    ],
    sectionMacroMicroHeadline: "Makrolage und Mikrolage",
    macroMicroCards: [
      {
        title: "Makrolage",
        description:
          "Regionale Rahmenbedingungen, Wirtschaft, Arbeitsmarkt und Bevölkerungsentwicklung.",
      },
      {
        title: "Mikrolage",
        description:
          "Das direkte Umfeld beeinflusst Lebensqualität, Nachfrage und Wertentwicklung.",
      },
    ],
    sectionDiffLabel: "Perspektive",
    sectionDiffHeadline: "Der Unterschied von immowap",
    diffCards: [
      {
        title: "Standardbetrachtung",
        description: "Oft wird die Lage nur oberflächlich bewertet.",
      },
      {
        title: "Ganzheitliche Analyse",
        description: "immowap verbindet Markt, Lage und individuelle Ziele.",
      },
      {
        title: "Nachvollziehbare Entscheidungsgrundlagen",
        description: "Keine pauschalen Aussagen, sondern objektive Analysen.",
      },
    ],
    ctaHeadline: "Standorte besser verstehen",
    ctaText:
      "Die Lage beeinflusst Marktwert, Nachfrage und langfristige Perspektiven. Eine strukturierte Standortanalyse schafft Transparenz und unterstützt fundierte Entscheidungen.",
    ctaBtn: "Analyse starten",
  },
  en: {
    breadcrumbSolutions: "Solutions",
    breadcrumbAnalyses: "Analyses",
    breadcrumbCurrent: "Location analysis",
    heroLabel: "Analyses",
    heroHeadline: "Real Estate Location Analysis",
    heroSubheadline: "Understand locations and identify long-term potential.",
    heroText:
      "Location is one of the most important factors affecting real estate value. A structured location analysis helps assess opportunities, risks and future developments.",
    heroBtnPrimary: "Start location analysis",
    heroBtnSecondary: "Contact us",
    sectionWhyLabel: "Context",
    sectionWhyHeadline: "Why location matters",
    whyCards: [
      {
        title: "Macro location",
        description: "Regional economic and demographic trends.",
      },
      {
        title: "Micro location",
        description: "Immediate surroundings and neighborhood quality.",
      },
      {
        title: "Infrastructure",
        description: "Transport links, schools and daily amenities.",
      },
      {
        title: "Future potential",
        description: "Long-term development prospects.",
      },
    ],
    sectionConsiderLabel: "Location factors",
    sectionConsiderHeadline: "Which factors does immowap consider?",
    considerCards: [
      {
        title: "Macro location",
        description:
          "Regional framework conditions, economic structure and demographic development in the valuation context.",
      },
      {
        title: "Micro location",
        description: "Immediate surroundings, neighborhood quality and property-specific location advantages.",
      },
      {
        title: "Accessibility",
        description: "Reachability, public transport, road links and mobility infrastructure.",
      },
      {
        title: "Demographic trends",
        description: "Population development, household structure and regional demand.",
      },
      {
        title: "Employment and economy",
        description: "Employment, economic strength and regional competitiveness.",
      },
      {
        title: "Future development potential",
        description: "Urban planning, infrastructure projects and long-term prospects.",
      },
    ],
    sectionQuestionsLabel: "Questions",
    sectionQuestionsHeadline: "Typical questions",
    questionCards: [
      "Is the location attractive in the long term?",
      "How is the region developing?",
      "What infrastructure is available?",
      "Is there strong rental demand?",
      "What risks should be considered?",
      "How does location affect value?",
    ],
    sectionProcessLabel: "Process",
    sectionProcessHeadline: "Components of a location analysis",
    processSteps: [
      { title: "Understand the region", description: "Macro location and regional framework conditions." },
      { title: "Analyse the micro location", description: "Immediate surroundings and neighborhood." },
      { title: "Evaluate market data", description: "Demand, supply and market development." },
      { title: "Assess opportunities and risks", description: "Location-specific strengths and uncertainties." },
      {
        title: "Develop decision support",
        description: "Traceable summary for decision-making.",
      },
    ],
    sectionDriversHeadline: "Location drivers",
    driverCards: [
      { title: "Population growth", description: "Demographic change and regional population dynamics." },
      { title: "Economic strength", description: "Regional economic structure and purchasing power." },
      { title: "Transportation", description: "Accessibility and mobility infrastructure." },
      { title: "Educational facilities", description: "Schools, childcare and educational offerings nearby." },
      { title: "Leisure and amenities", description: "Retail, green spaces and leisure opportunities." },
      { title: "Urban development", description: "Planning, infrastructure projects and urban perspectives." },
    ],
    sectionMacroMicroHeadline: "Macro and micro location",
    macroMicroCards: [
      {
        title: "Macro location",
        description:
          "Macro location reflects economic conditions, employment and demographic trends.",
      },
      {
        title: "Micro location",
        description:
          "Micro location affects quality of life, demand and long-term value.",
      },
    ],
    sectionDiffLabel: "Perspective",
    sectionDiffHeadline: "The immowap difference",
    diffCards: [
      {
        title: "Standard approach",
        description: "Traditional approaches often focus on simplified location assessments.",
      },
      {
        title: "Holistic analysis",
        description:
          "immowap combines market factors, location quality and personal objectives.",
      },
      {
        title: "Transparent decision support",
        description:
          "No one-size-fits-all recommendations but transparent and objective assessments.",
      },
    ],
    ctaHeadline: "Understand locations better",
    ctaText:
      "Location affects value, demand and long-term prospects. A structured location analysis provides transparency and supports informed decisions.",
    ctaBtn: "Start analysis",
  },
} as const;

export function StandortanalysePage({ locale }: StandortanalysePageProps) {
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
            ? "Europäisches Wohnquartier mit Wohngebäuden und begrünter Straße"
            : "European residential neighborhood with apartment buildings and tree-lined street"
        }
      >
        <p className="mt-8 text-xl font-medium leading-[1.6] text-brand-800">{c.heroSubheadline}</p>
        <p className="mt-6 text-lg leading-[1.8] text-muted">{c.heroText}</p>
      </SolutionHeroSection>

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

      <Section className="bg-[#F7F5EF] py-24 md:py-32">
        <SectionHeader label={c.sectionConsiderLabel} headline={c.sectionConsiderHeadline} />
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-[380px] overflow-hidden rounded-2xl sm:h-[520px] lg:sticky lg:top-28">
            <Image
              src={SECTION_IMAGE}
              alt={
                locale === "de"
                  ? "Städtisches Wohnquartier mit ÖPNV-Anbindung und Nahversorgung"
                  : "Urban residential quarter with public transport and local amenities"
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

      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader label={c.sectionQuestionsLabel} headline={c.sectionQuestionsHeadline} />
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

      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader headline={c.sectionDriversHeadline} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.driverCards.map((card) => (
            <article key={card.title} className={`${cardShellClass} h-full`}>
              <h3 className={cardTitleClass}>{card.title}</h3>
              <p className={cardTextClass}>{card.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-[#F7F5EF] py-24 md:py-32">
        <SectionHeader headline={c.sectionMacroMicroHeadline} />
        <div className="grid gap-6 lg:grid-cols-2">
          {c.macroMicroCards.map((card) => (
            <article
              key={card.title}
              className={`${cardShellClass} min-h-[220px] h-full lg:min-h-[280px]`}
            >
              <h3 className={cardTitleClass}>{card.title}</h3>
              <p className={`${cardTextClass} mt-auto`}>{card.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="muted" className="py-24 md:py-32">
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
