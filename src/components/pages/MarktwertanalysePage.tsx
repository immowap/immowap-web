import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SolutionHeroSection } from "@/components/ui/SolutionHeroSection";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { CTASection } from "@/components/ui/CTASection";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FAQQuestionAccordion } from "@/components/faq/FAQQuestionAccordion";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";

interface MarktwertanalysePageProps {
  locale: Locale;
}

const HERO_IMAGE = "/images/marktwertanalyse/hero.jpg";

const marktwertanalyseFAQ = {
  de: [
    {
      question: "Wie unterscheidet sich Marktwert und Angebotspreis?",
      answer:
        "Der Angebotspreis ist die vom Verkäufer oder Makler ausgeschriebene Summe. Der Marktwert orientiert sich an objektiven Wertermittlungsgrundsätzen und vergleichbaren Transaktionen.\n\nBeide Werte können auseinanderliegen, wenn der Verkäufer optimistisch kalkuliert, Sanierungsbedarf unterschätzt wird oder die Lage anders eingeschätzt wird als vom Markt.",
    },
    {
      question: "Welche Unterlagen sind wichtig?",
      answer:
        "Für eine fundierte Marktwertanalyse sind unter anderem Grundriss, Wohnflächenberechnung, Energieausweis, Baujahr, Modernisierungsnachweise und bei Eigentumswohnungen Wirtschaftsplan sowie Protokolle der Eigentümerversammlung hilfreich.\n\nJe vollständiger die Unterlagen, desto präziser lässt sich der Wert im Kontext von Lage, Zustand und Vergleichsdaten einordnen.",
    },
    {
      question: "Kann eine Renovierung den Wert erhöhen?",
      answer:
        "Gezielte Modernisierungen können den Marktwert steigern, insbesondere bei energetischer Sanierung, Bad- oder Küchenerneuerung oder verbessertem Grundriss.\n\nNicht jede Maßnahme amortisiert sich vollständig. Entscheidend ist, ob die Investition im jeweiligen Marktsegment nachgefragt wird und ob der Mehrwert den Aufwand übersteigt.",
    },
    {
      question: "Wie wichtig ist die Lage?",
      answer:
        "Lage und Mikrolage gehören zu den wichtigsten wertbeeinflussenden Faktoren. Infrastruktur, Nachbarschaft, Verkehrsanbindung und regionale Nachfrage wirken unmittelbar auf den erzielbaren Preis.\n\nSelbst innerhalb eines Stadtteils können erhebliche Unterschiede bestehen. Deshalb wird die Lage in einer Marktwertanalyse immer differenziert betrachtet.",
    },
    {
      question: "Welche Rolle spielt die Energieeffizienz?",
      answer:
        "Die Energieeffizienzklasse beeinflusst laufende Betriebskosten und die Attraktivität für Käufer oder Mieter. Schlechtere Werte können Abschläge erfordern, während moderne Standards den Wert stützen können.\n\nIm Rahmen einer Marktwertanalyse fließt der energetische Zustand daher neben Baujahr, Ausstattung und Vergleichsdaten in die Gesamtbewertung ein.",
    },
    {
      question: "Wann sollte eine Marktwertanalyse durchgeführt werden?",
      answer:
        "Eine Marktwertanalyse ist sinnvoll vor dem Kauf oder Verkauf, bei Erbschaft, Scheidung, Finanzierung oder wenn der tatsächliche Wert einer Immobilie für Vermögensentscheidungen relevant ist.\n\nJe früher eine strukturierte Einordnung erfolgt, desto besser lassen sich Chancen, Risiken und nächste Schritte fundiert bewerten.",
    },
  ],
  en: [
    {
      question: "What is the difference between market value and asking price?",
      answer:
        "The asking price is the amount listed by the seller or agent. Market value is based on objective valuation principles and comparable transactions.\n\nThe two figures can diverge when the seller is optimistic, refurbishment needs are underestimated or location is assessed differently from the market.",
    },
    {
      question: "Which documents are important?",
      answer:
        "For a well-founded market value analysis, floor plans, living area calculations, energy performance certificates, year of construction, evidence of modernisation and, for condominiums, service charge statements and owners' meeting minutes are helpful.\n\nThe more complete the documentation, the more precisely value can be assessed in the context of location, condition and comparable data.",
    },
    {
      question: "Can renovation increase value?",
      answer:
        "Targeted modernisation can raise market value, especially for energy upgrades, bathroom or kitchen renewal or an improved layout.\n\nNot every measure pays for itself fully. What matters is whether the investment is in demand in that market segment and whether the added value exceeds the cost.",
    },
    {
      question: "How important is location?",
      answer:
        "Location and micro-location are among the most important value drivers. Infrastructure, neighbourhood, transport links and regional demand directly affect achievable price.\n\nEven within one district, differences can be substantial. That is why location is always assessed in detail in a market value analysis.",
    },
    {
      question: "What role does energy efficiency play?",
      answer:
        "The energy efficiency rating affects running costs and attractiveness to buyers or tenants. Poor ratings can require discounts, while modern standards can support value.\n\nIn a market value analysis, energy performance is therefore considered alongside year of construction, fittings and comparable data.",
    },
    {
      question: "When should a market value analysis be carried out?",
      answer:
        "A market value analysis makes sense before buying or selling, in inheritance or divorce, for financing or when the actual value of a property matters for wealth decisions.\n\nThe earlier a structured assessment takes place, the better opportunities, risks and next steps can be evaluated.",
    },
  ],
};

const copy = {
  de: {
    heroLabel: "Analysen",
    heroHeadline: "Marktwertanalyse für Immobilien",
    heroSubheadline:
      "Den Marktwert einer Immobilie besser verstehen – auf Basis von Lage, Zustand, Vergleichsdaten und individueller Ausgangssituation.",
    heroBtnPrimary: "Analyse starten",
    heroBtnSecondary: "Anfrage senden",
    section1Headline: "Warum ist eine Marktwertanalyse wichtig?",
    section1Intro:
      "Viele Eigentümer und Kaufinteressenten stellen sich die Frage:",
    section1Cards: [
      {
        title: "Ist der Kaufpreis angemessen?",
        description:
          "Der ausgeschriebene Preis spiegelt nicht immer den tatsächlich erzielbaren Wert wider. Eine strukturierte Einordnung schafft Klarheit vor der Entscheidung.",
      },
      {
        title: "Wie hoch ist der tatsächliche Marktwert?",
        description:
          "Der Marktwert orientiert sich an Vergleichsdaten, Objektmerkmalen und aktuellen Marktverhältnissen – nicht an individuellen Wunschvorstellungen.",
      },
      {
        title: "Welche Faktoren beeinflussen den Wert?",
        description:
          "Lage, Zustand, Ausstattung, Baujahr und Vergleichsobjekte wirken zusammen. Eine fundierte Analyse betrachtet diese Faktoren im Zusammenhang.",
      },
      {
        title: "Angebotspreis und Marktwert im Vergleich",
        description:
          "Zwischen ausgeschriebenem Preis und realistischem Marktwert kann eine Lücke bestehen. Wer beide Werte kennt, trifft bessere Kauf- und Verkaufsentscheidungen.",
      },
    ],
    section2Label: "Wertfaktoren",
    section2Headline: "Was beeinflusst den Marktwert?",
    factorCards: [
      {
        icon: "location" as const,
        title: "Lage & Mikrolage",
        description: "Nachbarschaft, Infrastruktur, Nachfrage.",
      },
      {
        icon: "layout" as const,
        title: "Wohnfläche und Grundriss",
        description: "Größe und Nutzbarkeit.",
      },
      {
        icon: "condition" as const,
        title: "Zustand der Immobilie",
        description: "Modernisierung und Instandhaltung.",
      },
      {
        icon: "year" as const,
        title: "Baujahr und Ausstattung",
        description: "Qualität und Standard.",
      },
      {
        icon: "comparison" as const,
        title: "Vergleichbare Immobilien",
        description: "Vergleichswerte ähnlicher Objekte.",
      },
      {
        icon: "market" as const,
        title: "Angebot und Nachfrage",
        description: "Marktentwicklung und regionale Unterschiede.",
      },
    ],
    section3Label: "ImmoWertV",
    section3Headline: "Bewertungsverfahren nach ImmoWertV",
    section3Intro:
      "In Deutschland orientiert sich die Wertermittlung an anerkannten Verfahren. Die Immobilienwertermittlungsverordnung (ImmoWertV) definiert drei grundlegende Methoden – je nach Objektart und Datenlage.",
    methodCards: [
      {
        variant: "accent" as const,
        title: "Vergleichswertverfahren",
        description:
          "Besonders häufig bei Eigentumswohnungen und Einfamilienhäusern. Grundlage sind Kaufpreise vergleichbarer Objekte unter ähnlichen Marktbedingungen.",
      },
      {
        variant: "muted" as const,
        title: "Ertragswertverfahren",
        description:
          "Relevant bei vermieteten Immobilien und Kapitalanlagen. Im Mittelpunkt stehen nachhaltig erzielbare Erträge, Bewirtschaftungskosten und Restnutzungsdauer.",
      },
      {
        variant: "outline" as const,
        title: "Sachwertverfahren",
        description:
          "Geeignet bei selbstgenutzten oder besonderen Objekten. Bodenwert und Herstellungskosten der baulichen Anlagen werden unter Berücksichtigung von Alterswertminderungen ermittelt.",
      },
    ],
    section4Label: "Häufige Fragen",
    section4Headline: "Häufige Fragen zur Marktwertanalyse",
    section4Description:
      "Antworten auf zentrale Fragen zu Marktwert, Unterlagen, Modernisierung und dem richtigen Zeitpunkt für eine Wertermittlung.",
    section5Label: "Suchbegriffe",
    section5Headline: "Besonders häufig gesucht",
    seoTerms: [
      "Marktwert Wohnung berechnen",
      "Haus bewerten lassen",
      "Verkehrswert verstehen",
      "Immobilienwert pro Quadratmeter",
      "Marktwert vor Verkauf",
      "Marktwert vor Kauf",
      "Immobilienbewertung Deutschland",
      "Wertsteigerung durch Modernisierung",
    ],
    section6Label: "Anwendungsfälle",
    section6Headline: "Wann kann immowap unterstützen?",
    useCaseCards: [
      {
        title: "Kaufentscheidung",
        description:
          "Realistische Einordnung des Angebotspreises vor dem Kauf – für mehr Sicherheit bei der Preisverhandlung.",
      },
      {
        title: "Verkaufsvorbereitung",
        description:
          "Fundierte Wertbasis vor der Vermarktung, damit Preisvorstellungen und Marktrealität zusammenpassen.",
      },
      {
        title: "Kapitalanlage",
        description:
          "Marktwert im Kontext von Ertrag, Lage und Entwicklungspotenzial – für eine belastbare Investitionsentscheidung.",
      },
      {
        title: "Erbschaft",
        description:
          "Transparente Wertermittlung bei Nachlassfragen, wenn mehrere Beteiligte eine gemeinsame Grundlage benötigen.",
      },
      {
        title: "Scheidung",
        description:
          "Objektive Einordnung des Immobilienwerts als Grundlage für faire Vermögensaufteilung.",
      },
      {
        title: "Vermögensübersicht",
        description:
          "Aktuelle Marktwerte für die Gesamtbetrachtung des Immobilienvermögens und strategische Planung.",
      },
    ],
    section7Label: "Ablauf",
    section7Headline: "So läuft eine Analyse ab",
    processSteps: [
      "Informationen erfassen",
      "Objekt analysieren",
      "Markt und Vergleichswerte betrachten",
      "Strukturierte Entscheidungsgrundlage erhalten",
    ],
    ctaHeadline: "Fundierte Entscheidungen beginnen mit Klarheit.",
    ctaText:
      "Strukturierte Analysen helfen dabei, Chancen und Risiken besser einzuordnen.",
    ctaBtnPrimary: "Analyse starten",
    ctaBtnSecondary: "Anfrage senden",
  },
  en: {
    heroLabel: "Analyses",
    heroHeadline: "Property Market Value Analysis",
    heroSubheadline:
      "Understand the market value of a property based on location, condition, comparable properties and individual circumstances.",
    heroBtnPrimary: "Start Analysis",
    heroBtnSecondary: "Send Request",
    section1Headline: "Why is a market value analysis important?",
    section1Intro: "Many owners and prospective buyers ask themselves:",
    section1Cards: [
      {
        title: "Is the asking price realistic?",
        description:
          "The listed price does not always reflect achievable value. A structured assessment creates clarity before you decide.",
      },
      {
        title: "What is the actual market value?",
        description:
          "Market value is based on comparable data, property characteristics and current market conditions – not on individual wishes.",
      },
      {
        title: "Which factors influence value?",
        description:
          "Location, condition, fittings, year of construction and comparables work together. A sound analysis considers them in context.",
      },
      {
        title: "Asking price versus market value",
        description:
          "There can be a gap between the listed price and realistic market value. Knowing both supports better buying and selling decisions.",
      },
    ],
    section2Label: "Value drivers",
    section2Headline: "What influences market value?",
    factorCards: [
      {
        icon: "location" as const,
        title: "Location & micro-location",
        description: "Neighbourhood, infrastructure, demand.",
      },
      {
        icon: "layout" as const,
        title: "Living area and layout",
        description: "Size and usability.",
      },
      {
        icon: "condition" as const,
        title: "Property condition",
        description: "Modernisation and maintenance.",
      },
      {
        icon: "year" as const,
        title: "Year of construction and fittings",
        description: "Quality and standard.",
      },
      {
        icon: "comparison" as const,
        title: "Comparable properties",
        description: "Values of similar objects.",
      },
      {
        icon: "market" as const,
        title: "Supply and demand",
        description: "Market development and regional differences.",
      },
    ],
    section3Label: "ImmoWertV",
    section3Headline: "Valuation methods under ImmoWertV",
    section3Intro:
      "In Germany, property valuation follows recognised methods. The Immobilienwertermittlungsverordnung (ImmoWertV) defines three fundamental approaches – depending on property type and available data.",
    methodCards: [
      {
        variant: "accent" as const,
        title: "Comparison approach",
        description:
          "Especially common for condominiums and detached houses. Based on purchase prices of comparable properties under similar market conditions.",
      },
      {
        variant: "muted" as const,
        title: "Income approach",
        description:
          "Relevant for rented properties and investments. Focus on sustainable income, operating costs and remaining useful life.",
      },
      {
        variant: "outline" as const,
        title: "Cost approach",
        description:
          "Suitable for owner-occupied or special properties. Land value and construction costs are determined, taking age-related depreciation into account.",
      },
    ],
    section4Label: "FAQ",
    section4Headline: "Frequently asked questions about market value analysis",
    section4Description:
      "Answers to key questions on market value, documents, modernisation and the right time for a valuation.",
    section5Label: "Search terms",
    section5Headline: "Frequently searched",
    seoTerms: [
      "Apartment valuation",
      "House value analysis",
      "Understanding market value",
      "Price per square metre",
      "Value before selling",
      "Value before buying",
      "Property valuation Germany",
      "Value increase through renovation",
    ],
    section6Label: "Use cases",
    section6Headline: "When can immowap help?",
    useCaseCards: [
      {
        title: "Buying decision",
        description:
          "Realistic assessment of the asking price before purchase – for greater confidence in price negotiations.",
      },
      {
        title: "Preparing for sale",
        description:
          "A sound value basis before marketing, so price expectations and market reality align.",
      },
      {
        title: "Investment properties",
        description:
          "Market value in the context of yield, location and development potential – for a robust investment decision.",
      },
      {
        title: "Inheritance",
        description:
          "Transparent valuation for estate matters when several parties need a shared basis.",
      },
      {
        title: "Divorce",
        description:
          "Objective assessment of property value as a basis for fair division of assets.",
      },
      {
        title: "Asset overview",
        description:
          "Current market values for an overall view of property wealth and strategic planning.",
      },
    ],
    section7Label: "Process",
    section7Headline: "How an analysis works",
    processSteps: [
      "Capture information",
      "Analyse the property",
      "Review market and comparables",
      "Receive a structured decision basis",
    ],
    ctaHeadline: "Better decisions start with clarity.",
    ctaText:
      "Structured analyses help to understand opportunities and risks more effectively.",
    ctaBtnPrimary: "Start Analysis",
    ctaBtnSecondary: "Send Request",
  },
} as const;

type FactorIconName = (typeof copy.de.factorCards)[number]["icon"];

function FactorIcon({ name }: { name: FactorIconName }) {
  const className = "h-6 w-6 text-gold-600";

  switch (name) {
    case "location":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      );
    case "layout":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25A2.25 2.25 0 0 1 13.5 8.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
        </svg>
      );
    case "condition":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437Zm6.615 8.206a15.63 15.63 0 0 1-3.478-3.478m3.478 3.478a15.63 15.63 0 0 0 3.478-3.478m0 0 .001-.001a15.63 15.63 0 0 0-3.478-3.478m3.478 3.478 3.478-3.478" />
        </svg>
      );
    case "year":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v16.5h2.25" />
        </svg>
      );
    case "comparison":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      );
    case "market":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
        </svg>
      );
  }
}

function MethodCard({
  variant,
  title,
  description,
}: {
  variant: "accent" | "muted" | "outline";
  title: string;
  description: string;
}) {
  if (variant === "accent") {
    return (
      <article className="relative overflow-hidden rounded-3xl bg-brand-800 p-8 md:p-10">
        <div className="gold-rule mb-6" aria-hidden="true" />
        <h3 className="text-h3 text-white">{title}</h3>
        <p className="mt-4 text-base leading-[1.8] text-white/75">{description}</p>
      </article>
    );
  }

  if (variant === "muted") {
    return (
      <article className="rounded-3xl border border-warm-gray/40 bg-[#F7F5EF] p-8 md:p-10">
        <span className="text-label mb-4 block text-gold-600">ImmoWertV</span>
        <h3 className="text-h3 text-brand-800">{title}</h3>
        <p className="mt-4 text-base leading-[1.8] text-muted">{description}</p>
      </article>
    );
  }

  return (
    <article className="rounded-3xl border-2 border-gold-500/30 bg-cream p-8 md:p-10 shadow-[0_4px_24px_rgba(15,61,46,0.04)]">
      <h3 className="text-h3 text-brand-800">{title}</h3>
      <div className="gold-rule mt-4 w-12" aria-hidden="true" />
      <p className="mt-4 text-base leading-[1.8] text-muted">{description}</p>
    </article>
  );
}

export function MarktwertanalysePage({ locale }: MarktwertanalysePageProps) {
  const c = copy[locale];
  const faqItems = marktwertanalyseFAQ[locale];
  const contactHref = getRoute(locale, "contact");
  const dashboardHref = getRoute(locale, "dashboard");

  return (
    <>
      <SolutionHeroSection
        label={c.heroLabel}
        headline={c.heroHeadline}
        primaryHref={dashboardHref}
        primaryLabel={c.heroBtnPrimary}
        secondaryHref={contactHref}
        secondaryLabel={c.heroBtnSecondary}
        imageSrc={HERO_IMAGE}
        imageAlt={
          locale === "de"
            ? "Immobilienberatung mit Unterlagen und Marktanalyse am Schreibtisch"
            : "Property consultation with documents and market analysis at a desk"
        }
      >
        <p className="mt-8 text-lg leading-[1.8] text-muted">{c.heroSubheadline}</p>
      </SolutionHeroSection>

      {/* ─── SECTION 1: Why important ───────────────────────────────────── */}
      <Section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2 text-brand-800">{c.section1Headline}</h2>
          <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
          <p className="mt-8 text-lg leading-[1.8] text-muted">{c.section1Intro}</p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {c.section1Cards.map((card) => (
            <Card key={card.title} as="article" className="h-full">
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── SECTION 2: Value factors ───────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader label={c.section2Label} headline={c.section2Headline} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.factorCards.map((card) => (
            <Card key={card.title} as="article" className="h-full">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/10">
                <FactorIcon name={card.icon} />
              </div>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── SECTION 3: ImmoWertV methods ────────────────────────────────── */}
      <Section className="py-24 md:py-32">
        <SectionHeader
          label={c.section3Label}
          headline={c.section3Headline}
          description={c.section3Intro}
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {c.methodCards.map((card) => (
            <MethodCard
              key={card.title}
              variant={card.variant}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Section>

      {/* ─── SECTION 4: FAQ ───────────────────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            label={c.section4Label}
            headline={c.section4Headline}
            description={c.section4Description}
          />
          <div className="rounded-2xl border border-[#D7D2C8] bg-cream shadow-[0_4px_24px_rgba(15,61,46,0.06)]">
            <div className="px-8 py-6 md:px-10 md:py-8">
              {faqItems.map((item, i) => (
                <FAQQuestionAccordion key={item.question} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ─── SECTION 5: SEO terms ─────────────────────────────────────────── */}
      <Section className="py-24 md:py-32">
        <SectionHeader label={c.section5Label} headline={c.section5Headline} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.seoTerms.map((term) => (
            <div
              key={term}
              className="card-premium flex min-h-[88px] items-center justify-center px-6 py-5 text-center"
            >
              <span className="text-base font-medium leading-snug text-brand-800">{term}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── SECTION 6: Use cases ─────────────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader label={c.section6Label} headline={c.section6Headline} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.useCaseCards.map((card) => (
            <Card key={card.title} as="article" className="h-full">
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── SECTION 7: Process timeline ──────────────────────────────────── */}
      <Section className="py-24 md:py-32">
        <SectionHeader label={c.section7Label} headline={c.section7Headline} />
        <div className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {c.processSteps.map((step, index) => (
            <div key={step} className="relative">
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-500/40 bg-cream text-label text-gold-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index < c.processSteps.length - 1 && (
                  <div
                    className="hidden h-px flex-1 bg-warm-gray/60 lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="text-h3 text-brand-800">{step}</h3>
              {index < c.processSteps.length - 1 && (
                <div
                  className="absolute left-6 top-12 hidden h-[calc(100%+2.5rem)] w-px -translate-x-1/2 bg-warm-gray/40 lg:hidden"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <CTASection
        headline={c.ctaHeadline}
        text={c.ctaText}
        primaryLabel={c.ctaBtnPrimary}
        primaryHref={dashboardHref}
        secondaryLabel={c.ctaBtnSecondary}
        secondaryHref={contactHref}
      />
    </>
  );
}