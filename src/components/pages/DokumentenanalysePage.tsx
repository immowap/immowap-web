import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SolutionHeroSection } from "@/components/ui/SolutionHeroSection";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";

interface DokumentenanalysePageProps {
  locale: Locale;
}

const HERO_IMAGE = "/images/analysen/dokumentenanalyse-hero.jpg";
const SECTION_IMAGE = "/images/analysen/dokumentenanalyse-section.jpg";

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
    breadcrumbCurrent: "Dokumentenanalyse",
    heroLabel: "Analysen",
    heroHeadline: "Dokumentenanalyse für Immobilien",
    heroSubheadline: "Unterlagen verstehen und fundierte Entscheidungen treffen.",
    heroText:
      "Viele wichtige Informationen einer Immobilie befinden sich in den Unterlagen. Eine strukturierte Dokumentenanalyse hilft dabei, Chancen, Risiken und mögliche Besonderheiten frühzeitig zu erkennen.",
    heroBtnPrimary: "Dokumentenanalyse starten",
    heroBtnSecondary: "Kontakt aufnehmen",
    sectionWhyLabel: "Einordnung",
    sectionWhyHeadline: "Warum eine Dokumentenanalyse wichtig ist",
    whyCards: [
      {
        title: "Transparenz",
        description: "Wichtige Informationen werden nachvollziehbar.",
      },
      {
        title: "Risiken erkennen",
        description: "Besonderheiten können frühzeitig identifiziert werden.",
      },
      {
        title: "Bessere Entscheidungen",
        description: "Eine solide Grundlage für Kauf und Investition.",
      },
      {
        title: "Mehr Sicherheit",
        description: "Unterlagen werden strukturiert betrachtet.",
      },
    ],
    sectionConsiderLabel: "Unterlagen",
    sectionConsiderHeadline: "Welche Unterlagen berücksichtigt immowap?",
    considerCards: [
      {
        title: "Grundbuchauszug",
        description:
          "Eigentumsverhältnisse, Belastungen und eintragungsrelevante Besonderheiten im Bewertungskontext.",
      },
      {
        title: "Teilungserklärung",
        description: "Sondereigentum, Gemeinschaftseigentum und wohnungsspezifische Regelungen.",
      },
      {
        title: "Wirtschaftsplan",
        description: "Geplante Kosten, Hausgeld und wirtschaftliche Entwicklung der WEG.",
      },
      {
        title: "Hausgeldabrechnung",
        description: "Laufende Kosten, Abrechnungsergebnisse und Kostenentwicklung.",
      },
      {
        title: "Protokolle der Eigentümerversammlung",
        description: "Beschlüsse, geplante Maßnahmen und relevante Entwicklungen.",
      },
      {
        title: "Energieausweis",
        description: "Energetischer Zustand und mögliche Modernisierungsanforderungen.",
      },
    ],
    sectionQuestionsLabel: "Fragestellungen",
    sectionQuestionsHeadline: "Typische Fragestellungen",
    questionCards: [
      "Gibt es Besonderheiten im Grundbuch?",
      "Wie hoch sind die laufenden Kosten?",
      "Sind größere Maßnahmen geplant?",
      "Wie hoch ist die Instandhaltungsrücklage?",
      "Gibt es Hinweise auf Konflikte?",
      "Welche Informationen beeinflussen den Wert?",
    ],
    sectionProcessLabel: "Ablauf",
    sectionProcessHeadline: "Bestandteile einer Dokumentenanalyse",
    processSteps: [
      { title: "Unterlagen erfassen", description: "Relevante Dokumente systematisch zusammenstellen." },
      { title: "Inhalte strukturieren", description: "Informationen nach Themen und Bedeutung ordnen." },
      { title: "Besonderheiten identifizieren", description: "Auffälligkeiten und relevante Details erkennen." },
      { title: "Risiken und Chancen bewerten", description: "Einordnung im Zusammenhang mit Objekt und Zielen." },
      {
        title: "Entscheidungsgrundlagen ableiten",
        description: "Nachvollziehbare Zusammenfassung für die Entscheidung.",
      },
    ],
    sectionOverviewHeadline: "Wichtige Dokumente im Überblick",
    overviewCards: [
      {
        title: "Grundbuchauszug",
        description: "Eigentum, Belastungen und grundbuchliche Besonderheiten.",
      },
      {
        title: "Teilungserklärung",
        description: "Regelungen zu Sondereigentum und Gemeinschaftseigentum.",
      },
      {
        title: "Wirtschaftsplan",
        description: "Geplante Kosten und wirtschaftliche Perspektive der WEG.",
      },
      {
        title: "Hausgeldabrechnung",
        description: "Laufende Belastungen und Abrechnungsergebnisse.",
      },
      {
        title: "Versammlungsprotokolle",
        description: "Beschlüsse und geplante Maßnahmen der Eigentümergemeinschaft.",
      },
      {
        title: "Energieausweis",
        description: "Energetischer Zustand und mögliche Anforderungen.",
      },
    ],
    sectionMoreHeadline: "Mehr als nur Unterlagen",
    moreCards: [
      {
        title: "Dokumente richtig einordnen",
        description:
          "Nicht jede Information hat dieselbe Bedeutung. Die Zusammenhänge sind entscheidend.",
      },
      {
        title: "Ganzheitliche Betrachtung",
        description:
          "Dokumente werden nicht isoliert betrachtet, sondern im Zusammenhang mit Objekt, Lage und individuellen Zielen.",
      },
    ],
    sectionDiffLabel: "Perspektive",
    sectionDiffHeadline: "Der Unterschied von immowap",
    diffCards: [
      {
        title: "Standardbetrachtung",
        description: "Oft werden Unterlagen nur oberflächlich geprüft.",
      },
      {
        title: "Ganzheitliche Analyse",
        description: "immowap verbindet Dokumente, Objekt und individuelle Ziele.",
      },
      {
        title: "Nachvollziehbare Entscheidungsgrundlagen",
        description:
          "Keine pauschalen Aussagen, sondern strukturierte und nachvollziehbare Analysen.",
      },
    ],
    ctaHeadline: "Unterlagen besser verstehen",
    ctaText:
      "Gut aufbereitete Informationen schaffen Transparenz und unterstützen fundierte Entscheidungen rund um Immobilien.",
    ctaBtn: "Analyse starten",
  },
  en: {
    breadcrumbSolutions: "Solutions",
    breadcrumbAnalyses: "Analyses",
    breadcrumbCurrent: "Document analysis",
    heroLabel: "Analyses",
    heroHeadline: "Real Estate Document Analysis",
    heroSubheadline: "Understand documents and make informed decisions.",
    heroText:
      "Important information about a property is often hidden in the documents. A structured document analysis helps identify opportunities, risks and important details at an early stage.",
    heroBtnPrimary: "Start document analysis",
    heroBtnSecondary: "Contact us",
    sectionWhyLabel: "Context",
    sectionWhyHeadline: "Why document analysis matters",
    whyCards: [
      {
        title: "Transparency",
        description: "Important information becomes easier to understand.",
      },
      {
        title: "Identify risks",
        description: "Potential issues may be detected early.",
      },
      {
        title: "Better decisions",
        description: "Supports informed investment decisions.",
      },
      {
        title: "Greater confidence",
        description: "Documents are reviewed in a structured way.",
      },
    ],
    sectionConsiderLabel: "Documents",
    sectionConsiderHeadline: "Which documents does immowap consider?",
    considerCards: [
      {
        title: "Land register extract",
        description:
          "Ownership, encumbrances and registration-related details in the valuation context.",
      },
      {
        title: "Declaration of division",
        description: "Separate ownership, common property and unit-specific regulations.",
      },
      {
        title: "Business plan",
        description: "Planned costs, service charges and the economic outlook of the owners' association.",
      },
      {
        title: "Service charge statement",
        description: "Ongoing costs, settlement results and cost development.",
      },
      {
        title: "Owners' meeting minutes",
        description: "Resolutions, planned measures and relevant developments.",
      },
      {
        title: "Energy performance certificate",
        description: "Energy condition and potential modernisation requirements.",
      },
    ],
    sectionQuestionsLabel: "Questions",
    sectionQuestionsHeadline: "Typical questions",
    questionCards: [
      "Are there special entries in the land register?",
      "What are the ongoing costs?",
      "Are major renovations planned?",
      "How large is the reserve fund?",
      "Are there indications of disputes?",
      "Which information affects value?",
    ],
    sectionProcessLabel: "Process",
    sectionProcessHeadline: "Components of a document analysis",
    processSteps: [
      { title: "Collect documents", description: "Systematically gather relevant paperwork." },
      { title: "Structure information", description: "Organise content by topic and significance." },
      { title: "Identify key details", description: "Recognise notable points and relevant information." },
      { title: "Assess risks and opportunities", description: "Evaluate in context with the property and objectives." },
      {
        title: "Develop decision support",
        description: "Traceable summary for decision-making.",
      },
    ],
    sectionOverviewHeadline: "Important documents at a glance",
    overviewCards: [
      { title: "Land register extract", description: "Ownership, encumbrances and land register details." },
      { title: "Declaration of division", description: "Rules on separate and common ownership." },
      { title: "Business plan", description: "Planned costs and economic outlook of the association." },
      { title: "Service charge statement", description: "Ongoing charges and settlement results." },
      { title: "Meeting minutes", description: "Resolutions and planned measures of the owners' association." },
      { title: "Energy certificate", description: "Energy condition and potential requirements." },
    ],
    sectionMoreHeadline: "More than documents",
    moreCards: [
      {
        title: "Understanding context",
        description: "Not every piece of information has the same importance. Context matters.",
      },
      {
        title: "Holistic perspective",
        description:
          "Documents are evaluated together with the property, location and individual objectives.",
      },
    ],
    sectionDiffLabel: "Perspective",
    sectionDiffHeadline: "The immowap difference",
    diffCards: [
      {
        title: "Standard approach",
        description: "Traditional reviews are often limited to a basic check.",
      },
      {
        title: "Holistic analysis",
        description:
          "immowap combines documents, property characteristics and personal objectives.",
      },
      {
        title: "Transparent decision support",
        description:
          "No one-size-fits-all recommendations but objective and transparent assessments.",
      },
    ],
    ctaHeadline: "Understand property documents better",
    ctaText:
      "Well-structured information creates transparency and supports informed real estate decisions.",
    ctaBtn: "Start analysis",
  },
} as const;

export function DokumentenanalysePage({ locale }: DokumentenanalysePageProps) {
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
            ? "Immobilienunterlagen und Verträge auf einem Schreibtisch"
            : "Property documents and contracts on a desk"
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
                  ? "Professionelle Besprechung zur Prüfung von Immobilienunterlagen"
                  : "Professional meeting reviewing property documents"
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

      <Section className="bg-[#F7F5EF] py-24 md:py-32">
        <SectionHeader headline={c.sectionMoreHeadline} />
        <div className="grid gap-6 lg:grid-cols-2">
          {c.moreCards.map((card) => (
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
