import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SolutionHeroSection } from "@/components/ui/SolutionHeroSection";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";

interface SachwertverfahrenPageProps {
  locale: Locale;
}

const HERO_IMAGE = "/images/analysen/sachwertverfahren-hero.jpg";
const INTRO_IMAGE = "/images/analysen/sachwertverfahren-intro.jpg";

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
    breadcrumbCurrent: "Sachwertverfahren",
    heroLabel: "Analysen",
    heroHeadline: "Sachwertverfahren",
    heroSubheadline: "Den Substanzwert einer Immobilie strukturiert analysieren.",
    heroText:
      "Das Sachwertverfahren wird insbesondere bei selbstgenutzten Einfamilienhäusern, Zweifamilienhäusern und besonderen Objekten angewendet. Dabei stehen nicht die erzielbaren Mieteinnahmen, sondern die bauliche Substanz und der Bodenwert im Mittelpunkt.",
    heroBtn: "Analyse anfragen",
    introParagraphs: [
      "Das Sachwertverfahren gehört neben dem Vergleichswertverfahren und dem Ertragswertverfahren zu den wichtigsten Wertermittlungsverfahren in Deutschland.",
      "Die Grundlage bildet die Immobilienwertermittlungsverordnung (ImmoWertV). Dabei werden der Bodenwert sowie der Wert der baulichen Anlagen berücksichtigt. Zusätzlich fließen Alterswertminderung, Marktanpassungsfaktoren und objektspezifische Merkmale in die Bewertung ein.",
    ],
    sectionUseLabel: "Einsatz",
    sectionUseHeadline: "Wann kommt das Sachwertverfahren zum Einsatz?",
    useCases: [
      { icon: "house" as const, title: "Einfamilienhäuser" },
      { icon: "duplex" as const, title: "Zweifamilienhäuser" },
      { icon: "owner" as const, title: "Selbstgenutzte Immobilien" },
      { icon: "special" as const, title: "Besondere Objekte" },
      { icon: "data" as const, title: "Immobilien ohne ausreichende Vergleichsdaten" },
      { icon: "custom" as const, title: "Individuelle Wohnhäuser" },
    ],
    sectionComponentsLabel: "Bestandteile",
    sectionComponentsHeadline: "Bestandteile des Sachwertverfahrens",
    components: [
      {
        title: "Bodenwert",
        description: "Wert des Grundstücks auf Basis von Bodenrichtwerten.",
      },
      {
        title: "Herstellungskosten",
        description: "Ermittlung der Normalherstellungskosten des Gebäudes.",
      },
      {
        title: "Alterswertminderung",
        description: "Berücksichtigung von Alter und Zustand der Immobilie.",
      },
      {
        title: "Marktanpassung",
        description: "Anpassung an das aktuelle Marktgeschehen.",
      },
    ],
    sectionProcessLabel: "Ablauf",
    sectionProcessHeadline: "Ablauf der Analyse",
    processSteps: [
      { title: "Grundstück analysieren", description: "" },
      { title: "Gebäudesubstanz bewerten", description: "" },
      { title: "Marktfaktoren berücksichtigen", description: "" },
      { title: "Sachwert ableiten", description: "" },
    ],
    sectionFactorsHeadline: "Welche Faktoren beeinflussen den Sachwert?",
    factors: [
      "Grundstücksgröße",
      "Wohnfläche",
      "Baujahr",
      "Modernisierungen",
      "Bauqualität",
      "Zustand",
      "Mikrolage",
      "Marktanpassungsfaktor",
    ],
    immowertvHeadline: "ImmoWertV-Bezug",
    immowertvText:
      "Die Bewertung orientiert sich an den Grundsätzen der Immobilienwertermittlungsverordnung (ImmoWertV). Dabei werden Bodenwert, Herstellungskosten, Alterswertminderung und Marktanpassungsfaktoren berücksichtigt, um eine nachvollziehbare und marktgerechte Einschätzung zu ermöglichen.",
    sectionSuitableLabel: "Eignung",
    sectionSuitableHeadline: "Für welche Immobilien ist das Verfahren geeignet?",
    suitableCards: [
      {
        title: "Einfamilienhäuser",
        description:
          "Wenn bauliche Substanz und Bodenwert im Vordergrund stehen und das Objekt selbst genutzt wird.",
      },
      {
        title: "Selbstgenutzte Immobilien",
        description:
          "Wenn der Wert aus Herstellungskosten und Grundstückswert abgeleitet werden soll.",
      },
      {
        title: "Besondere Objekte",
        description:
          "Wenn Vergleichsdaten fehlen oder das Gebäude individuelle Merkmale aufweist.",
      },
    ],
    sectionWhyLabel: "immowap",
    sectionWhyHeadline: "Warum immowap?",
    whyCards: [
      {
        title: "Individuelle Betrachtung",
        description: "Jede Immobilie wird im Kontext von Lage, Zustand und Nutzung bewertet.",
      },
      {
        title: "ImmoWertV-orientierte Analyse",
        description: "Orientierung an anerkannten Wertermittlungsgrundsätzen in Deutschland.",
      },
      {
        title: "Transparente Herleitung",
        description: "Nachvollziehbare Schritte statt undifferenzierter Pauschalwerte.",
      },
      {
        title: "Strukturierte Entscheidungsgrundlagen",
        description: "Klare Einordnung von Substanzwert, Bodenwert und Marktfaktoren.",
      },
    ],
    sectionFaqLabel: "Fragen & Antworten",
    sectionFaqHeadline: "Häufige Fragen zum Sachwertverfahren",
    faqItems: [
      {
        question: "Was ist das Sachwertverfahren?",
        answer:
          "Das Sachwertverfahren ermittelt den Wert einer Immobilie aus Bodenwert und Wert der baulichen Anlagen, unter Berücksichtigung von Alterswertminderung und Marktanpassung. Es ist eines von drei anerkannten Verfahren nach ImmoWertV.",
      },
      {
        question: "Wann wird das Sachwertverfahren angewendet?",
        answer:
          "Vor allem bei selbstgenutzten Einfamilienhäusern, Zweifamilienhäusern und besonderen Objekten – wenn Vergleichsdaten fehlen oder Mieteinnahmen nicht im Mittelpunkt stehen.",
      },
      {
        question: "Welche Rolle spielt der Bodenwert?",
        answer:
          "Der Bodenwert bildet die Grundlage der Wertermittlung. Er wird häufig anhand von Bodenrichtwerten und der Grundstücksgröße ermittelt und zum Gebäudewert addiert.",
      },
      {
        question: "Wie wird die Alterswertminderung berücksichtigt?",
        answer:
          "Alter, Zustand und Modernisierungsstand fließen in die Abschreibung der Herstellungskosten ein. Je älter oder stärker abgenutzt ein Gebäude ist, desto höher fällt die Wertminderung aus.",
      },
      {
        question: "Was ist ein Marktanpassungsfaktor?",
        answer:
          "Der Marktanpassungsfaktor berücksichtigt, dass der rechnerische Sachwert vom tatsächlichen Marktgeschehen abweichen kann. Er passt das Ergebnis an die regionale Nachfrage und das aktuelle Preisniveau an.",
      },
      {
        question: "Ist das Sachwertverfahren für Einfamilienhäuser geeignet?",
        answer:
          "Ja. Gerade bei selbstgenutzten Einfamilienhäusern ist das Sachwertverfahren häufig das passende Verfahren, da bauliche Substanz und Bodenwert im Vordergrund stehen.",
      },
      {
        question: "Was ist der Unterschied zum Ertragswertverfahren?",
        answer:
          "Das Ertragswertverfahren orientiert sich an nachhaltig erzielbaren Mieteinnahmen. Das Sachwertverfahren betrachtet Bodenwert und bauliche Substanz – unabhängig von laufenden Erträgen.",
      },
      {
        question: "Welche Daten werden für die Berechnung benötigt?",
        answer:
          "Relevant sind unter anderem Grundstücksgröße, Wohnfläche, Baujahr, Bauqualität, Modernisierungen, Zustand, Lage sowie verfügbare Bodenrichtwerte und Marktanpassungsfaktoren.",
      },
    ],
    ctaHeadline: "Den Sachwert Ihrer Immobilie besser verstehen",
    ctaText:
      "Eine strukturierte Analyse kann helfen, die bauliche Substanz, den Bodenwert und die relevanten Einflussfaktoren nachvollziehbar einzuordnen.",
    ctaBtnPrimary: "Analyse starten",
    ctaBtnSecondary: "Kontakt aufnehmen",
  },
  en: {
    breadcrumbSolutions: "Solutions",
    breadcrumbAnalyses: "Analyses",
    breadcrumbCurrent: "Cost approach",
    heroLabel: "Analyses",
    heroHeadline: "Cost Approach",
    heroSubheadline: "Structured analysis of the intrinsic value of a property.",
    heroText:
      "The cost approach is mainly used for owner-occupied houses and special properties where construction costs and land value play a central role.",
    heroBtn: "Request analysis",
    introParagraphs: [
      "The cost approach is one of the three major valuation methods used in Germany.",
      "According to ImmoWertV, the valuation is based on land value, replacement costs and market adjustment factors.",
    ],
    sectionUseLabel: "Application",
    sectionUseHeadline: "When is the cost approach used?",
    useCases: [
      { icon: "house" as const, title: "Detached houses" },
      { icon: "duplex" as const, title: "Two-family houses" },
      { icon: "owner" as const, title: "Owner-occupied properties" },
      { icon: "special" as const, title: "Special properties" },
      { icon: "data" as const, title: "Properties without sufficient comparable data" },
      { icon: "custom" as const, title: "Individual residential buildings" },
    ],
    sectionComponentsLabel: "Components",
    sectionComponentsHeadline: "Components of the cost approach",
    components: [
      {
        title: "Land value",
        description: "Value of the plot based on official land value indicators.",
      },
      {
        title: "Replacement costs",
        description: "Determination of standard construction costs of the building.",
      },
      {
        title: "Depreciation",
        description: "Consideration of age and condition of the property.",
      },
      {
        title: "Market adjustment",
        description: "Adjustment to current market conditions.",
      },
    ],
    sectionProcessLabel: "Process",
    sectionProcessHeadline: "Analysis process",
    processSteps: [
      { title: "Analyse the plot", description: "" },
      { title: "Assess building substance", description: "" },
      { title: "Consider market factors", description: "" },
      { title: "Derive asset value", description: "" },
    ],
    sectionFactorsHeadline: "Which factors influence asset value?",
    factors: [
      "Plot size",
      "Living area",
      "Year of construction",
      "Modernisation",
      "Construction quality",
      "Condition",
      "Micro-location",
      "Market adjustment factor",
    ],
    immowertvHeadline: "ImmoWertV framework",
    immowertvText:
      "The valuation follows the principles of the German ImmoWertV framework and considers land value, replacement costs, depreciation and market adjustment factors.",
    sectionSuitableLabel: "Suitability",
    sectionSuitableHeadline: "Which properties is the approach suitable for?",
    suitableCards: [
      {
        title: "Detached houses",
        description:
          "When building substance and land value are central and the property is owner-occupied.",
      },
      {
        title: "Owner-occupied properties",
        description: "When value is derived from replacement costs and land value.",
      },
      {
        title: "Special properties",
        description: "When comparable data is lacking or the building has individual characteristics.",
      },
    ],
    sectionWhyLabel: "immowap",
    sectionWhyHeadline: "Why immowap?",
    whyCards: [
      {
        title: "Individual assessment",
        description: "Every property is evaluated in the context of location, condition and use.",
      },
      {
        title: "ImmoWertV-oriented analysis",
        description: "Based on recognised valuation principles in Germany.",
      },
      {
        title: "Transparent derivation",
        description: "Traceable steps instead of undifferentiated blanket values.",
      },
      {
        title: "Structured decision foundations",
        description: "Clear assessment of asset value, land value and market factors.",
      },
    ],
    sectionFaqLabel: "Questions & answers",
    sectionFaqHeadline: "Frequently asked questions about the cost approach",
    faqItems: [
      {
        question: "What is the cost approach?",
        answer:
          "The cost approach determines property value from land value and building value, taking depreciation and market adjustment into account. It is one of three recognised methods under ImmoWertV.",
      },
      {
        question: "When is the cost approach applied?",
        answer:
          "Mainly for owner-occupied detached and two-family houses and special properties – when comparable data is lacking or rental income is not the focus.",
      },
      {
        question: "What role does land value play?",
        answer:
          "Land value forms the basis of valuation. It is often derived from land value indicators and plot size and added to the building value.",
      },
      {
        question: "How is depreciation considered?",
        answer:
          "Age, condition and modernisation status feed into the depreciation of replacement costs. The older or more worn a building, the greater the value reduction.",
      },
      {
        question: "What is a market adjustment factor?",
        answer:
          "The market adjustment factor reflects that calculated asset value may differ from actual market activity. It aligns the result with regional demand and current price levels.",
      },
      {
        question: "Is the cost approach suitable for detached houses?",
        answer:
          "Yes. For owner-occupied detached houses, the cost approach is often appropriate because building substance and land value are central.",
      },
      {
        question: "What is the difference from the income approach?",
        answer:
          "The income approach is based on sustainable rental income. The cost approach considers land value and building substance – independent of ongoing yields.",
      },
      {
        question: "What data is needed for the calculation?",
        answer:
          "Relevant data includes plot size, living area, year of construction, construction quality, modernisation, condition, location, land value indicators and market adjustment factors.",
      },
    ],
    ctaHeadline: "Understand the intrinsic value of your property",
    ctaText:
      "A structured analysis helps to assess construction quality, land value and relevant market factors.",
    ctaBtnPrimary: "Start analysis",
    ctaBtnSecondary: "Contact us",
  },
} as const;

type UseCaseIcon = (typeof copy.de.useCases)[number]["icon"];

function UseCaseIcon({ name }: { name: UseCaseIcon }) {
  const className = "h-6 w-6 text-gold-600";

  switch (name) {
    case "house":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      );
    case "duplex":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.125c.621 0 1.125-.504 1.125-1.125V9.75M3.75 21h17.25M3.75 9.75V5.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125V9.75M12 9.75V5.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125V9.75" />
        </svg>
      );
    case "owner":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      );
    case "special":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      );
    case "data":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      );
    case "custom":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
      );
  }
}

export function SachwertverfahrenPage({ locale }: SachwertverfahrenPageProps) {
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
        primaryHref={contactHref}
        primaryLabel={c.heroBtn}
        imageSrc={HERO_IMAGE}
        imageAlt={
          locale === "de"
            ? "Modernes Einfamilienhaus mit hochwertiger Architektur"
            : "Modern detached house with high-quality architecture"
        }
      >
        <p className="mt-8 text-xl font-medium leading-[1.6] text-brand-800">{c.heroSubheadline}</p>
        <p className="mt-6 text-lg leading-[1.8] text-muted">{c.heroText}</p>
      </SolutionHeroSection>

      {/* ─── INTRODUCTION ─────────────────────────────────────────────────── */}
      <Section className="bg-[#F7F5EF] py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            {c.introParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-lg leading-[1.85] text-muted [&+p]:mt-6"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="relative h-[380px] overflow-hidden rounded-3xl sm:h-[480px]">
            <Image
              src={INTRO_IMAGE}
              alt={
                locale === "de"
                  ? "Europäische Wohnimmobilie in ruhiger Umgebung"
                  : "European residential property in a quiet setting"
              }
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* ─── USE CASES ────────────────────────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader label={c.sectionUseLabel} headline={c.sectionUseHeadline} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.useCases.map((item) => (
            <Card key={item.title} as="article" className="h-full">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/10">
                <UseCaseIcon name={item.icon} />
              </div>
              <CardTitle>{item.title}</CardTitle>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── COMPONENTS ───────────────────────────────────────────────────── */}
      <Section className="bg-[#F7F5EF] py-24 md:py-32">
        <SectionHeader
          label={c.sectionComponentsLabel}
          headline={c.sectionComponentsHeadline}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {c.components.map((item, index) => (
            <article key={item.title} className={`${cardShellClass} h-full`}>
              <span className="text-label text-gold-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={cardTitleClass}>{item.title}</h3>
              <p className={cardTextClass}>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ─── PROCESS ──────────────────────────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader label={c.sectionProcessLabel} headline={c.sectionProcessHeadline} />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {c.processSteps.map((step, index) => (
            <div key={step.title} className="relative">
              <span className="text-label mb-4 block text-gold-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-h3 text-brand-800">{step.title}</h3>
              {index < c.processSteps.length - 1 && (
                <div
                  className="absolute right-0 top-8 hidden h-px w-8 bg-warm-gray/60 lg:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ─── FACTORS ──────────────────────────────────────────────────────── */}
      <Section className="bg-[#F7F5EF] py-24 md:py-32">
        <SectionHeader headline={c.sectionFactorsHeadline} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.factors.map((factor) => (
            <div
              key={factor}
              className="card-premium flex min-h-[100px] items-center justify-center px-6 py-8 text-center"
            >
              <span className="text-base font-medium leading-snug text-brand-800">{factor}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── IMMOWERTV ────────────────────────────────────────────────────── */}
      <section className="bg-brand-800 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <p className="text-label mb-4 text-gold-500">ImmoWertV</p>
          <h2 className="text-h2 text-white">{c.immowertvHeadline}</h2>
          <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
          <p className="mx-auto mt-8 text-lg leading-[1.85] text-white/85">{c.immowertvText}</p>
        </div>
      </section>

      {/* ─── SUITABLE PROPERTIES ──────────────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader
          label={c.sectionSuitableLabel}
          headline={c.sectionSuitableHeadline}
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {c.suitableCards.map((card) => (
            <Card key={card.title} as="article" className="h-full p-2 md:p-4">
              <CardTitle className="text-h3">{card.title}</CardTitle>
              <CardDescription className="mt-4 text-base leading-[1.8]">
                {card.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── WHY IMMOWAP ──────────────────────────────────────────────────── */}
      <Section className="bg-[#F7F5EF] py-24 md:py-32">
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

      {/* ─── FAQ (cards, no accordion) ────────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader label={c.sectionFaqLabel} headline={c.sectionFaqHeadline} />
        <div className="grid gap-6 md:grid-cols-2">
          {c.faqItems.map((item) => (
            <Card key={item.question} as="article" className="h-full">
              <CardTitle className="text-xl">{item.question}</CardTitle>
              <CardDescription className="mt-4 text-base leading-[1.8]">
                {item.answer}
              </CardDescription>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-brand-800 px-6 pt-[140px] pb-[140px] text-white md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2 text-white">{c.ctaHeadline}</h2>
          <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-[1.8] text-white/85">{c.ctaText}</p>
          <div className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Button href={dashboardHref} className="sm:w-auto">
              {c.ctaBtnPrimary}
            </Button>
            <Button
              href={contactHref}
              variant="white"
              className="border-white/35 !text-brand-800 hover:!text-brand-800 sm:w-auto"
            >
              {c.ctaBtnSecondary}
            </Button>
          </div>
        </div>
      </section>
      <div className="min-h-[100px] bg-[#F7F5EF]" aria-hidden="true" />
    </>
  );
}
