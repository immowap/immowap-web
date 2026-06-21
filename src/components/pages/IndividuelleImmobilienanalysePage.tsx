import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SolutionHeroSection } from "@/components/ui/SolutionHeroSection";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";

interface IndividuelleImmobilienanalysePageProps {
  locale: Locale;
}

const HERO_IMAGE = "/images/analysen/individuelle-immobilienanalyse-hero.jpg";
const SECTION_IMAGE = "/images/analysen/individuelle-immobilienanalyse-section.jpg";
const PHILOSOPHY_IMAGE = "/images/analysen/individuelle-immobilienanalyse-philosophy.jpg";

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
    breadcrumbCurrent: "Individuelle Immobilienanalyse",
    heroLabel: "Analysen",
    heroHeadline: "Individuelle Immobilienanalyse",
    heroSubheadline: "Jede Immobilie. Jede Situation. Jede Entscheidung ist einzigartig.",
    heroText:
      "Standardlösungen werden komplexen Immobilienentscheidungen häufig nicht gerecht. Eine individuelle Immobilienanalyse berücksichtigt nicht nur die Immobilie selbst, sondern auch persönliche Ziele, finanzielle Rahmenbedingungen und langfristige Strategien.",
    heroBtnPrimary: "Analyse starten",
    heroBtnSecondary: "Kontakt aufnehmen",
    sectionWhyLabel: "Einordnung",
    sectionWhyHeadline: "Warum individuelle Analysen wichtig sind",
    whyCards: [
      {
        title: "Persönliche Ziele",
        description: "Eigennutzung, Kapitalanlage oder langfristiger Vermögensaufbau.",
      },
      {
        title: "Individuelle Rahmenbedingungen",
        description: "Finanzierung, Eigenkapital und Zeithorizont.",
      },
      {
        title: "Ganzheitliche Betrachtung",
        description: "Objekt, Markt, Lage und Risiken werden gemeinsam betrachtet.",
      },
      {
        title: "Bessere Entscheidungen",
        description: "Fundierte Entscheidungsgrundlagen statt pauschaler Aussagen.",
      },
    ],
    sectionConsiderLabel: "Perspektive",
    sectionConsiderHeadline: "Was berücksichtigt immowap?",
    considerCards: [
      {
        title: "Persönliche Ziele",
        description: "Eigennutzung, Kapitalanlage oder langfristige Vermögensstrategie.",
      },
      {
        title: "Finanzielle Situation",
        description: "Eigenkapital, Finanzierung und langfristige Tragfähigkeit.",
      },
      {
        title: "Marktumfeld",
        description: "Angebot, Nachfrage und Marktentwicklung im Bewertungskontext.",
      },
      {
        title: "Standort und Lage",
        description: "Makro- und Mikrolage als zentrale Wertfaktoren nach ImmoWertV.",
      },
      {
        title: "Risiken und Chancen",
        description: "Objekt-, Markt- und finanzierungsbezogene Unsicherheiten.",
      },
      {
        title: "Langfristige Strategie",
        description: "Zeithorizont, Nutzungsplanung und persönliche Prioritäten.",
      },
    ],
    sectionQuestionsLabel: "Fragestellungen",
    sectionQuestionsHeadline: "Typische Fragestellungen",
    questionCards: [
      "Passt die Immobilie zu meinen Zielen?",
      "Ist die Finanzierung langfristig tragfähig?",
      "Welche Risiken bestehen?",
      "Ist die Immobilie überbewertet?",
      "Welche Strategie ist sinnvoll?",
      "Wie entwickelt sich die Immobilie langfristig?",
    ],
    sectionProcessLabel: "Ablauf",
    sectionProcessHeadline: "Der Analyseprozess",
    processSteps: [
      { title: "Ziele verstehen", description: "Individuelle Zielsetzung und Prioritäten." },
      { title: "Rahmenbedingungen analysieren", description: "Finanzierung, Zeithorizont und persönliche Situation." },
      { title: "Objekt und Markt bewerten", description: "Immobilie, Lage und Marktumfeld im Bewertungskontext." },
      { title: "Risiken und Chancen einordnen", description: "Stärken, Schwächen und Unsicherheiten." },
      {
        title: "Individuelle Entscheidungsgrundlagen ableiten",
        description: "Nachvollziehbare Zusammenfassung für die persönliche Entscheidung.",
      },
    ],
    sectionAudienceHeadline: "Für wen eignet sich die Analyse?",
    audienceCards: [
      { title: "Eigennutzer", description: "Entscheidungen zur Eigennutzung und langfristigen Bindung." },
      { title: "Kapitalanleger", description: "Rendite, Risiko und langfristige Perspektive." },
      { title: "Fix-&-Flip-Projekte", description: "Kurzfristige Strategien mit klarer Wirtschaftlichkeit." },
      { title: "Sanierungsobjekte", description: "Zustand, Investitionsbedarf und Wertpotenzial." },
      { title: "Mehrfamilienhäuser", description: "Komplexe Objekte mit mehreren Nutzungseinheiten." },
      { title: "Gewerbeimmobilien", description: "Nutzungsspezifische Bewertung und Marktlogik." },
    ],
    sectionPhilosophyHeadline: "immowap denkt nicht in Standards",
    philosophyParagraphs: [
      "Zwei Menschen können dieselbe Immobilie betrachten und zu völlig unterschiedlichen Entscheidungen gelangen.",
      "Was für den einen eine attraktive Kapitalanlage ist, kann für den anderen aufgrund seiner Ziele, seines Zeithorizonts oder seiner Finanzierung ungeeignet sein.",
      "Deshalb betrachtet immowap Immobilien nicht isoliert, sondern immer im Zusammenhang mit der jeweiligen Situation.",
    ],
    sectionDiffLabel: "Perspektive",
    sectionDiffHeadline: "Der Unterschied von immowap",
    diffCards: [
      {
        title: "Standardlösungen",
        description: "Viele Bewertungen orientieren sich ausschließlich an Durchschnittswerten.",
      },
      {
        title: "Ganzheitliche Betrachtung",
        description:
          "immowap verbindet Markt, Objekt, Finanzierung, Risiken und individuelle Ziele.",
      },
      {
        title: "Nachvollziehbare Entscheidungsgrundlagen",
        description: "Keine pauschalen Empfehlungen, sondern nachvollziehbare Analysen.",
      },
    ],
    ctaHeadline: "Jede Immobilie verdient eine individuelle Betrachtung",
    ctaText:
      "Immobilienentscheidungen sollten nicht auf allgemeinen Annahmen beruhen. Eine individuelle Analyse schafft Transparenz und unterstützt fundierte Entscheidungen.",
    ctaBtn: "Analyse starten",
  },
  en: {
    breadcrumbSolutions: "Solutions",
    breadcrumbAnalyses: "Analyses",
    breadcrumbCurrent: "Individual property analysis",
    heroLabel: "Analyses",
    heroHeadline: "Individual Real Estate Analysis",
    heroSubheadline: "Every property. Every situation. Every decision is unique.",
    heroText:
      "Complex real estate decisions require more than standard solutions. An individual analysis considers not only the property itself but also personal objectives, financial circumstances and long-term strategies.",
    heroBtnPrimary: "Start analysis",
    heroBtnSecondary: "Contact us",
    sectionWhyLabel: "Context",
    sectionWhyHeadline: "Why individual analysis matters",
    whyCards: [
      {
        title: "Personal objectives",
        description: "Owner-occupation, investment or long-term wealth creation.",
      },
      {
        title: "Individual circumstances",
        description: "Financing, equity and investment horizon.",
      },
      {
        title: "Holistic perspective",
        description: "Property, market, location and risks are evaluated together.",
      },
      {
        title: "Better decisions",
        description: "Structured analysis instead of one-size-fits-all recommendations.",
      },
    ],
    sectionConsiderLabel: "Perspective",
    sectionConsiderHeadline: "What does immowap consider?",
    considerCards: [
      {
        title: "Personal objectives",
        description: "Owner-occupation, investment or long-term wealth strategy.",
      },
      {
        title: "Financial situation",
        description: "Equity, financing and long-term affordability.",
      },
      {
        title: "Market environment",
        description: "Supply, demand and market development in the valuation context.",
      },
      {
        title: "Location factors",
        description: "Macro and micro location as key value drivers under ImmoWertV principles.",
      },
      {
        title: "Risks and opportunities",
        description: "Property-, market- and financing-related uncertainties.",
      },
      {
        title: "Long-term strategy",
        description: "Time horizon, intended use and personal priorities.",
      },
    ],
    sectionQuestionsLabel: "Questions",
    sectionQuestionsHeadline: "Typical questions",
    questionCards: [
      "Does the property fit my objectives?",
      "Is the financing sustainable?",
      "What risks should be considered?",
      "Is the property overpriced?",
      "Which strategy may be appropriate?",
      "How could the property evolve over time?",
    ],
    sectionProcessLabel: "Process",
    sectionProcessHeadline: "The analysis process",
    processSteps: [
      { title: "Understand objectives", description: "Individual goals and priorities." },
      { title: "Analyse individual circumstances", description: "Financing, time horizon and personal situation." },
      { title: "Evaluate property and market", description: "Property, location and market in the valuation context." },
      { title: "Assess risks and opportunities", description: "Strengths, weaknesses and uncertainties." },
      {
        title: "Develop individual decision support",
        description: "Traceable summary for personal decision-making.",
      },
    ],
    sectionAudienceHeadline: "Who is this analysis for?",
    audienceCards: [
      { title: "Owner-occupiers", description: "Decisions on owner-occupation and long-term commitment." },
      { title: "Investors", description: "Returns, risk and long-term perspective." },
      { title: "Fix & flip projects", description: "Short-term strategies with clear economics." },
      { title: "Renovation projects", description: "Condition, investment needs and value potential." },
      { title: "Multi-family properties", description: "Complex assets with multiple units." },
      { title: "Commercial real estate", description: "Use-specific valuation and market logic." },
    ],
    sectionPhilosophyHeadline: "immowap does not believe in standard solutions",
    philosophyParagraphs: [
      "Two people may evaluate the same property and arrive at completely different conclusions.",
      "What may represent an attractive investment for one person could be unsuitable for another because of different objectives, financing structures or time horizons.",
      "For this reason, immowap evaluates properties in the context of each individual situation.",
    ],
    sectionDiffLabel: "Perspective",
    sectionDiffHeadline: "The immowap difference",
    diffCards: [
      {
        title: "Standard solutions",
        description: "Many analyses rely only on average assumptions.",
      },
      {
        title: "Holistic perspective",
        description:
          "immowap combines market conditions, property characteristics, financing, risks and personal objectives.",
      },
      {
        title: "Transparent decision support",
        description: "No one-size-fits-all recommendations but transparent and objective assessments.",
      },
    ],
    ctaHeadline: "Every property deserves an individual perspective",
    ctaText:
      "Real estate decisions should not rely on general assumptions. Individual analyses create transparency and support informed decisions.",
    ctaBtn: "Start analysis",
  },
} as const;

export function IndividuelleImmobilienanalysePage({
  locale,
}: IndividuelleImmobilienanalysePageProps) {
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
            ? "Individuelle Immobilienberatung mit Unterlagen und Planung"
            : "Individual property consultation with documents and planning"
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
                  ? "Beratungsgespräch zur individuellen Immobilienanalyse"
                  : "Consultation on individual property analysis"
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
        <SectionHeader headline={c.sectionAudienceHeadline} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.audienceCards.map((card) => (
            <article key={card.title} className={`${cardShellClass} h-full`}>
              <h3 className={cardTitleClass}>{card.title}</h3>
              <p className={cardTextClass}>{card.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-[#F7F5EF] py-24 md:py-32">
        <SectionHeader headline={c.sectionPhilosophyHeadline} />
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-[380px] overflow-hidden rounded-2xl sm:h-[520px]">
            <Image
              src={PHILOSOPHY_IMAGE}
              alt={
                locale === "de"
                  ? "Zwei Personen besprechen individuelle Immobilienentscheidungen"
                  : "Two people discussing individual property decisions"
              }
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col gap-6">
            {c.philosophyParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-[1.8] text-muted">
                {paragraph}
              </p>
            ))}
          </div>
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
