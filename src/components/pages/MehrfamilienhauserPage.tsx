import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SolutionHeroSection } from "@/components/ui/SolutionHeroSection";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";

interface MehrfamilienhauserPageProps {
  locale: Locale;
}

const copy = {
  de: {
    heroLabel: "Für Ihre Ziele",
    heroHeadline: "Ihre Strategie. Kein Standard.",
    heroSubheadline:
      "Individuelle Strategie richtet sich an Nutzer, die keine pauschale Lösung suchen – sondern Vermögensaufbau, Portfolioentwicklung und langfristige Ziele im eigenen Tempo verfolgen.",
    heroBtnPrimary: "Analyse starten",
    heroBtnSecondary: "Anfrage senden",
    section1Headline: "Mehr als ein Objekttyp – ein persönlicher Weg.",
    section1Text:
      "Ob Fix & Hold, Kombination verschiedener Ansätze oder Optimierung bestehender Bestände: Entscheidend sind Ihre Ziele, Ihr Risikoprofil und Ihr Zeithorizont – nicht vorgegebene Produktlogiken.",
    section2Label: "Unsere Betrachtung",
    section2Headline: "Was wir berücksichtigen",
    considerationCards: [
      {
        title: "Vermögensaufbau",
        description:
          "Langfristige Entwicklung persönlichen Vermögens durch Immobilien – strukturiert und zielgerichtet.",
      },
      {
        title: "Finanzielle Unabhängigkeit",
        description:
          "Einordnung, wie Immobilienentscheidungen Einkommen, Sicherheit und Freiräume über die Zeit beeinflussen.",
      },
      {
        title: "Portfolioaufbau",
        description:
          "Schrittweiser Aufbau und Diversifikation eines Immobilienportfolios entlang individueller Prioritäten.",
      },
      {
        title: "Fix & Hold",
        description:
          "Bewertung langfristiger Haltestrategien mit Fokus auf Stabilität, Cashflow und Werthaltigkeit.",
      },
      {
        title: "Strategiekombination",
        description:
          "Verbindung unterschiedlicher Ansätze – etwa Eigennutzung, Kapitalanlage und gezielte Entwicklung.",
      },
      {
        title: "Bestandsoptimierung",
        description:
          "Analyse und Verbesserung bestehender Immobilien im Hinblick auf Ertrag, Substanz und langfristige Ziele.",
      },
    ],
    section3Headline: "Individuelle Analyse statt Standardempfehlung",
    section3Text:
      "Durch strukturierte Auswertungen lassen sich Chancen, Risiken und passende Strategieoptionen transparent darstellen – als Grundlage für fundierte Entscheidungen.",
    section3Btn: "Mehr über unsere Analysen",
    section4Label: "Analyse",
    section4Headline: "Relevante Analysen",
    cardLink: "Mehr erfahren",
    analysisCards: [
      {
        title: "Individuelle Immobilienanalyse",
        description: "Ganzheitliche Betrachtung im Kontext Ihrer persönlichen Ziele.",
        href: "/de/loesungen",
      },
      {
        title: "Risikoanalyse",
        description: "Frühzeitige Identifikation von Unsicherheiten entlang Ihrer Strategie.",
        href: "/de/loesungen",
      },
      {
        title: "Marktvergleich",
        description: "Einordnung von Objekten und Szenarien im aktuellen Marktumfeld.",
        href: "/de/loesungen",
      },
      {
        title: "Dokumentenanalyse",
        description: "Strukturierte Auswertung vorhandener Unterlagen und Bestandsinformationen.",
        href: "/de/loesungen",
      },
    ],
    section5Label: "Strategische Schwerpunkte",
    section5Headline: "Typische Ausrichtungen",
    strategyCards: [
      {
        title: "Langfristige Ziele",
        description:
          "Immobilienentscheidungen entlang persönlicher Lebens- und Vermögensplanung – nicht kurzfristiger Trends.",
        image: "/images/mehrfamilienhaeuser/strategie-1.jpg",
      },
      {
        title: "Portfolioaufbau",
        description:
          "Schrittweiser Aufbau eines stabilen Immobilienportfolios mit klarer Struktur und Diversifikation.",
        image: "/images/mehrfamilienhaeuser/strategie-2.jpg",
      },
      {
        title: "Fix & Hold",
        description:
          "Langfristiges Halten mit Fokus auf nachhaltige Erträge, Werthaltigkeit und strategischer Bestandsentwicklung.",
        image: "/images/mehrfamilienhaeuser/strategie-3.jpg",
      },
      {
        title: "Entscheidungsfindung",
        description:
          "Individuelle Analyse und transparente Abwägung – wenn keine Standardlösung passt.",
        image: "/images/mehrfamilienhaeuser/strategie-4.jpg",
      },
    ],
    section6Label: "Was uns unterscheidet",
    section6Headline: "Jede Strategie beginnt mit Ihren Zielen.",
    section6Text:
      "Ob Vermögensaufbau, finanzielle Unabhängigkeit oder Optimierung bestehender Immobilien – immowap betrachtet Entscheidungen immer im Zusammenhang mit Ihrem individuellen Kontext.",
    section6TextSecondary:
      "Es gibt keine Standardlösungen. Jede Analyse orientiert sich an Ihren Prioritäten, Ihrem Risikoprofil und Ihrem langfristigen Horizont.",
    section6ListLabel: "Jede Analyse basiert auf",
    section6Items: [
      "Individuellen Zielen",
      "Risikoprofil",
      "Langfristigen Prioritäten",
      "Bestehendem Portfolio",
    ],
    section7Headline: "Klarheit schafft bessere Entscheidungen.",
    principleCards: [
      {
        number: "01",
        title: "Persönliche Ausrichtung",
        description:
          "Fokus auf Ihre Ziele statt auf vorgefertigte Produktempfehlungen – nachvollziehbar und individuell.",
      },
      {
        number: "02",
        title: "Transparente Grundlagen",
        description:
          "Strukturierte Analysen und Szenarien statt pauschaler Einschätzungen – als Basis für Entscheidungen.",
      },
      {
        number: "03",
        title: "Langfristige Perspektive",
        description:
          "Betrachtung über einzelne Objekte hinaus – im Kontext Ihrer gesamten Immobilienstrategie.",
      },
    ],
    ctaLabel: "Nächster Schritt",
    ctaHeadline: "Strategie verstehen. Entscheidungen treffen.",
    ctaText:
      "Fundierte Analysen schaffen Transparenz über passende Strategieoptionen und unterstützen individuelle Entscheidungsfindung.",
    ctaBtnPrimary: "Analyse starten",
    ctaBtnSecondary: "Kontakt aufnehmen",
  },
  en: {
    heroLabel: "For your goals",
    heroHeadline: "Your strategy. No standard template.",
    heroSubheadline:
      "Individual strategy is for users who are not looking for a one-size-fits-all solution – but want to pursue wealth building, portfolio development and long-term goals at their own pace.",
    heroBtnPrimary: "Start analysis",
    heroBtnSecondary: "Send enquiry",
    section1Headline: "More than a property type – a personal path.",
    section1Text:
      "Whether fix & hold, combining different approaches or optimising existing stock: what matters are your goals, risk profile and time horizon – not predefined product logic.",
    section2Label: "Our assessment",
    section2Headline: "What we take into account",
    considerationCards: [
      {
        title: "Wealth building",
        description:
          "Long-term development of personal wealth through property – structured and goal-oriented.",
      },
      {
        title: "Financial independence",
        description:
          "Assessment of how property decisions affect income, security and flexibility over time.",
      },
      {
        title: "Portfolio building",
        description:
          "Step-by-step development and diversification of a property portfolio aligned with individual priorities.",
      },
      {
        title: "Fix & hold",
        description:
          "Evaluation of long-term retention strategies with a focus on stability, cash flow and value retention.",
      },
      {
        title: "Strategy combination",
        description:
          "Combining different approaches – such as owner-occupation, investment and targeted development.",
      },
      {
        title: "Stock optimisation",
        description:
          "Analysis and improvement of existing properties with regard to income, substance and long-term goals.",
      },
    ],
    section3Headline: "Individual analysis instead of standard recommendations",
    section3Text:
      "Structured evaluations make opportunities, risks and suitable strategy options transparent – as a basis for well-founded decisions.",
    section3Btn: "Learn more about our analyses",
    section4Label: "Analysis",
    section4Headline: "Relevant analyses",
    cardLink: "Learn more",
    analysisCards: [
      {
        title: "Individual property analysis",
        description: "Holistic assessment in the context of your personal goals.",
        href: "/en/solutions",
      },
      {
        title: "Risk analysis",
        description: "Early identification of uncertainties along your strategy.",
        href: "/en/solutions",
      },
      {
        title: "Market comparison",
        description: "Assessment of properties and scenarios in the current market environment.",
        href: "/en/solutions",
      },
      {
        title: "Document analysis",
        description: "Structured evaluation of available documents and portfolio information.",
        href: "/en/solutions",
      },
    ],
    section5Label: "Strategic focus areas",
    section5Headline: "Typical orientations",
    strategyCards: [
      {
        title: "Long-term goals",
        description:
          "Property decisions aligned with personal life and wealth planning – not short-term trends.",
        image: "/images/mehrfamilienhaeuser/strategie-1.jpg",
      },
      {
        title: "Portfolio building",
        description:
          "Step-by-step development of a stable property portfolio with clear structure and diversification.",
        image: "/images/mehrfamilienhaeuser/strategie-2.jpg",
      },
      {
        title: "Fix & hold",
        description:
          "Long-term retention with a focus on sustainable income, value retention and strategic stock development.",
        image: "/images/mehrfamilienhaeuser/strategie-3.jpg",
      },
      {
        title: "Decision-making",
        description:
          "Individual analysis and transparent weighing of options – when no standard solution fits.",
        image: "/images/mehrfamilienhaeuser/strategie-4.jpg",
      },
    ],
    section6Label: "What sets us apart",
    section6Headline: "Every strategy starts with your goals.",
    section6Text:
      "Whether wealth building, financial independence or optimising existing properties – immowap always considers decisions in relation to your individual context.",
    section6TextSecondary:
      "There are no standard solutions. Every analysis is based on your priorities, risk profile and long-term horizon.",
    section6ListLabel: "Every analysis is based on",
    section6Items: [
      "Individual goals",
      "Risk profile",
      "Long-term priorities",
      "Existing portfolio",
    ],
    section7Headline: "Clarity leads to better decisions.",
    principleCards: [
      {
        number: "01",
        title: "Personal orientation",
        description:
          "Focus on your goals instead of off-the-shelf product recommendations – traceable and individual.",
      },
      {
        number: "02",
        title: "Transparent foundations",
        description:
          "Structured analyses and scenarios instead of blanket assessments – as a basis for decisions.",
      },
      {
        number: "03",
        title: "Long-term perspective",
        description:
          "View beyond individual properties – in the context of your overall property strategy.",
      },
    ],
    ctaLabel: "Next step",
    ctaHeadline: "Understand strategy. Make decisions.",
    ctaText:
      "Well-founded analyses create transparency on suitable strategy options and support individual decision-making.",
    ctaBtnPrimary: "Start analysis",
    ctaBtnSecondary: "Get in touch",
  },
} as const;

export function MehrfamilienhauserPage({ locale }: MehrfamilienhauserPageProps) {
  const c = copy[locale];
  const contactHref = locale === "de" ? "/de/kontakt" : "/en/contact";
  const dashboardHref = locale === "de" ? "/de/dashboard" : "/en/dashboard";
  const solutionsHref = locale === "de" ? "/de/loesungen" : "/en/solutions";

  return (
    <>
      <SolutionHeroSection
        label={c.heroLabel}
        headline={c.heroHeadline}
        primaryHref={dashboardHref}
        primaryLabel={c.heroBtnPrimary}
        secondaryHref={contactHref}
        secondaryLabel={c.heroBtnSecondary}
        imageSrc="/images/mehrfamilienhaeuser/hero.jpg"
        imageAlt="Individual property strategy — long-term planning and personal goals"
        imageOverlayClassName="from-[#0F3D2E]/8"
      >
        <p className="mt-8 text-lg leading-[1.8] text-muted">{c.heroSubheadline}</p>
      </SolutionHeroSection>

      {/* ─── SECTION 1 ────────────────────────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-h2 text-brand-800">{c.section1Headline}</h2>
            <div className="gold-rule mt-8" aria-hidden="true" />
            <p className="mt-8 text-lg leading-[1.8] text-muted">{c.section1Text}</p>
          </div>
          <div className="relative h-[380px] overflow-hidden rounded-3xl sm:h-[480px]">
            <Image
              src="/images/mehrfamilienhaeuser/section1.jpg"
              alt="Long-term property ownership and professional investment perspective"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* ─── SECTION 2: Consideration cards ──────────────────────────────── */}
      <Section className="py-24 md:py-32">
        <SectionHeader label={c.section2Label} headline={c.section2Headline} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.considerationCards.map((card) => (
            <Card key={card.title} as="article">
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── SECTION 3 ────────────────────────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative h-[380px] overflow-hidden rounded-3xl sm:h-[480px]">
            <Image
              src="/images/mehrfamilienhaeuser/section3.jpg"
              alt="Premium workspace — reports, laptop, documents, institutional quality"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-h2 text-brand-800">{c.section3Headline}</h2>
            <div className="gold-rule mt-8" aria-hidden="true" />
            <p className="mt-8 text-lg leading-[1.8] text-muted">{c.section3Text}</p>
            <div className="mt-10">
              <Button href={solutionsHref} variant="secondary">
                {c.section3Btn}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── SECTION 4: Analysis cards ────────────────────────────────────── */}
      <Section className="py-24 md:py-32">
        <SectionHeader label={c.section4Label} headline={c.section4Headline} />
        <div className="grid gap-6 md:grid-cols-2">
          {c.analysisCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="card-premium group flex flex-col gap-5 no-underline"
            >
              <h3 className="text-h2 text-brand-800 transition-colors duration-300 group-hover:text-brand-600">
                {card.title}
              </h3>
              <p className="text-base leading-[1.8] text-muted">{card.description}</p>
              <span className="text-label mt-auto inline-flex items-center gap-2 text-gold-600 transition-all duration-300 group-hover:gap-3">
                {c.cardLink}
                <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ─── SECTION 5: Strategy cards ────────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader label={c.section5Label} headline={c.section5Headline} />
        <div className="grid gap-6 md:grid-cols-2">
          {c.strategyCards.map((card) => (
            <article
              key={card.title}
              className="group relative h-[380px] overflow-hidden rounded-3xl sm:h-[440px]"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0b2c21]/90 via-[#0b2c21]/30 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                <p className="mt-2 max-w-sm text-base leading-[1.7] text-white/75">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ─── SECTION 6: Differentiator ────────────────────────────────────── */}
      <section className="bg-brand-800 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-label mb-6 block text-gold-500">{c.section6Label}</p>
              <h2 className="text-h2 text-white">{c.section6Headline}</h2>
              <div className="gold-rule mt-8" aria-hidden="true" />
              <p className="mt-8 text-lg leading-[1.8] text-white/80">{c.section6Text}</p>
              <p className="mt-6 text-lg leading-[1.8] text-white/65">{c.section6TextSecondary}</p>
            </div>
            <div className="lg:pt-20">
              <p className="text-label mb-10 block text-gold-500">{c.section6ListLabel}</p>
              <ul className="space-y-7" role="list">
                {c.section6Items.map((item, i) => (
                  <li key={item} className="flex items-baseline gap-5">
                    <span className="text-label shrink-0 text-gold-500/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xl font-light text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: Principle cards ───────────────────────────────────── */}
      <Section className="py-24 md:py-32">
        <SectionHeader headline={c.section7Headline} />
        <div className="grid gap-8 md:grid-cols-3">
          {c.principleCards.map((card) => (
            <div key={card.title} className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span className="text-label text-gold-500/60">{card.number}</span>
                <div className="h-px flex-1 bg-warm-gray/50" aria-hidden="true" />
              </div>
              <h3 className="text-h3 text-brand-800">{card.title}</h3>
              <p className="text-base leading-[1.8] text-muted">{card.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <p className="text-label mb-6 block text-gold-600">{c.ctaLabel}</p>
          <h2 className="text-h2 text-brand-800">{c.ctaHeadline}</h2>
          <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
          <p className="mx-auto mt-8 max-w-xl text-lg leading-[1.8] text-muted">{c.ctaText}</p>
          <div className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Button href={dashboardHref} className="sm:w-auto">
              {c.ctaBtnPrimary}
            </Button>
            <Button href={contactHref} variant="secondary" className="sm:w-auto">
              {c.ctaBtnSecondary}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
