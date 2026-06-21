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
    heroHeadline: "Mehrfamilienhäuser mit Weitblick betrachten.",
    heroSubheadline:
      "Mehrfamilienhäuser erfordern eine strukturierte Betrachtung. Neben Lage und Ertrag spielen Entwicklungspotenziale, Risiken und langfristige Perspektiven eine entscheidende Rolle.",
    heroBtnPrimary: "Analyse starten",
    heroBtnSecondary: "Anfrage senden",
    section1Headline: "Komplexität schafft Chancen.",
    section1Text:
      "Mehrfamilienhäuser bieten vielfältige Möglichkeiten, erfordern jedoch eine ganzheitliche Betrachtung. Wirtschaftlichkeit, Zustand, Potenziale und individuelle Ziele sollten gemeinsam bewertet werden.",
    section2Label: "Unsere Betrachtung",
    section2Headline: "Was wir berücksichtigen",
    considerationCards: [
      {
        title: "Mietstruktur",
        description:
          "Analyse der bestehenden Mietverhältnisse, Leerstandsquoten und nachhaltiger Ertragsstabilität.",
      },
      {
        title: "Ertragspotenzial",
        description:
          "Einordnung langfristiger Ertragsperspektiven auf Basis von Lage, Nachfrage und Marktentwicklung.",
      },
      {
        title: "Zustand der Immobilie",
        description:
          "Strukturierte Bestandsaufnahme von Substanz, Modernisierungsbedarf und technischem Zustand.",
      },
      {
        title: "Entwicklungsmöglichkeiten",
        description:
          "Beurteilung von Aufstockungs-, Umbau- oder Optimierungspotenzialen im jeweiligen Kontext.",
      },
      {
        title: "Risiken",
        description:
          "Frühzeitige Identifikation von Markt-, Miet- und Bewirtschaftungsrisiken für eine belastbare Entscheidung.",
      },
      {
        title: "Langfristige Perspektiven",
        description:
          "Betrachtung der Immobilie als langfristigen Vermögenswert – über aktuelle Erträge hinaus.",
      },
    ],
    section3Headline: "Strukturierte Analysen für fundierte Entscheidungen",
    section3Text:
      "Durch datenbasierte Analysen und strukturierte Auswertungen lassen sich Chancen und Risiken besser einordnen. immowap verbindet Erfahrung, Transparenz und nachvollziehbare Entscheidungsgrundlagen.",
    section3Btn: "Mehr über unsere Analysen",
    section4Label: "Analyse",
    section4Headline: "Relevante Analysen",
    cardLink: "Mehr erfahren",
    analysisCards: [
      {
        title: "Renditeanalyse",
        description: "Langfristige Ertragsperspektiven und Wirtschaftlichkeit.",
        href: "/de/loesungen",
      },
      {
        title: "Cashflow-Analyse",
        description: "Übersicht über Einnahmen, Kosten und Liquidität.",
        href: "/de/loesungen",
      },
      {
        title: "Risikoanalyse",
        description: "Frühzeitige Identifikation möglicher Unsicherheiten.",
        href: "/de/loesungen",
      },
      {
        title: "Marktvergleich",
        description: "Einordnung im aktuellen Marktumfeld.",
        href: "/de/loesungen",
      },
    ],
    section5Label: "Investitionsstrategien",
    section5Headline: "Für unterschiedliche Strategien",
    strategyCards: [
      {
        title: "Langfristige Bestandshaltung",
        description:
          "Stabile Erträge und Werterhalt über Generationen – mit strukturierter Bewirtschaftungsstrategie.",
        image: "/images/mehrfamilienhaeuser/strategie-1.jpg",
      },
      {
        title: "Wertsteigerung",
        description:
          "Gezielte Entwicklungsmaßnahmen zur nachhaltigen Steigerung von Substanz und Ertragskraft.",
        image: "/images/mehrfamilienhaeuser/strategie-2.jpg",
      },
      {
        title: "Portfolioaufbau",
        description:
          "Strukturierter Aufbau eines stabilen Immobilienportfolios mit langfristiger Diversifikation.",
        image: "/images/mehrfamilienhaeuser/strategie-3.jpg",
      },
      {
        title: "Generationenvermögen",
        description:
          "Mehrfamilienhäuser als Teil einer generationsübergreifenden Vermögensstrategie.",
        image: "/images/mehrfamilienhaeuser/strategie-4.jpg",
      },
    ],
    section6Label: "Was uns unterscheidet",
    section6Headline: "Jedes Mehrfamilienhaus erzählt eine eigene Geschichte.",
    section6Text:
      "Ob langfristiger Vermögensaufbau, Optimierung bestehender Bestände oder strategische Erweiterungen – immowap betrachtet Immobilien immer im Zusammenhang mit den individuellen Zielen und Prioritäten.",
    section6TextSecondary:
      "Es gibt keine Standardlösungen. Jede Analyse orientiert sich am individuellen Kontext des Eigentümers und seiner Strategie.",
    section6ListLabel: "Jede Analyse basiert auf",
    section6Items: [
      "Individuellen Zielen",
      "Investitionsstrategie",
      "Risikoprofil",
      "Langfristigen Prioritäten",
    ],
    section7Headline: "Langfristige Werte entstehen nicht zufällig.",
    principleCards: [
      {
        number: "01",
        title: "Nachhaltige Erträge",
        description:
          "Fokus auf Stabilität und langfristige Perspektiven – jenseits kurzfristiger Optimierung.",
      },
      {
        number: "02",
        title: "Transparente Entscheidungsgrundlagen",
        description:
          "Strukturierte Analysen statt pauschaler Einschätzungen – nachvollziehbar und individuell.",
      },
      {
        number: "03",
        title: "Individuelle Betrachtung",
        description: "Jede Immobilie und jede Strategie werden im jeweiligen Kontext bewertet.",
      },
    ],
    ctaLabel: "Nächster Schritt",
    ctaHeadline: "Substanz verstehen. Perspektiven erkennen.",
    ctaText:
      "Fundierte Analysen schaffen Transparenz und unterstützen bei langfristigen Entscheidungen.",
    ctaBtnPrimary: "Analyse starten",
    ctaBtnSecondary: "Kontakt aufnehmen",
  },
  en: {
    heroLabel: "For your goals",
    heroHeadline: "Viewing multi-family properties with foresight.",
    heroSubheadline:
      "Multi-family properties require structured consideration. Beyond location and yield, development potential, risks and long-term perspectives play a decisive role.",
    heroBtnPrimary: "Start analysis",
    heroBtnSecondary: "Send enquiry",
    section1Headline: "Complexity creates opportunity.",
    section1Text:
      "Multi-family properties offer diverse possibilities but require a holistic assessment. Economic viability, condition, potential and individual goals should be evaluated together.",
    section2Label: "Our assessment",
    section2Headline: "What we take into account",
    considerationCards: [
      {
        title: "Rental structure",
        description:
          "Analysis of existing tenancies, vacancy rates and sustainable income stability.",
      },
      {
        title: "Yield potential",
        description:
          "Assessment of long-term yield perspectives based on location, demand and market development.",
      },
      {
        title: "Property condition",
        description:
          "Structured assessment of substance, modernisation needs and technical condition.",
      },
      {
        title: "Development possibilities",
        description:
          "Assessment of extension, conversion or optimisation potential in the respective context.",
      },
      {
        title: "Risks",
        description:
          "Early identification of market, rental and management risks for a robust decision.",
      },
      {
        title: "Long-term perspectives",
        description:
          "Consideration of the property as a long-term asset — beyond current returns.",
      },
    ],
    section3Headline: "Structured analyses for well-founded decisions",
    section3Text:
      "Through data-based analyses and structured evaluations, opportunities and risks can be better assessed. immowap combines experience, transparency and traceable decision-making foundations.",
    section3Btn: "Learn more about our analyses",
    section4Label: "Analysis",
    section4Headline: "Relevant analyses",
    cardLink: "Learn more",
    analysisCards: [
      {
        title: "Return analysis",
        description: "Long-term yield perspectives and economic viability.",
        href: "/en/solutions",
      },
      {
        title: "Cashflow analysis",
        description: "Overview of income, costs and liquidity.",
        href: "/en/solutions",
      },
      {
        title: "Risk analysis",
        description: "Early identification of possible uncertainties.",
        href: "/en/solutions",
      },
      {
        title: "Market comparison",
        description: "Assessment in the current market environment.",
        href: "/en/solutions",
      },
    ],
    section5Label: "Investment strategies",
    section5Headline: "For different strategies",
    strategyCards: [
      {
        title: "Long-term portfolio retention",
        description:
          "Stable returns and value preservation across generations — with a structured management strategy.",
        image: "/images/mehrfamilienhaeuser/strategie-1.jpg",
      },
      {
        title: "Value appreciation",
        description:
          "Targeted development measures for sustainable enhancement of substance and earning power.",
        image: "/images/mehrfamilienhaeuser/strategie-2.jpg",
      },
      {
        title: "Portfolio building",
        description:
          "Structured development of a stable property portfolio with long-term diversification.",
        image: "/images/mehrfamilienhaeuser/strategie-3.jpg",
      },
      {
        title: "Generational wealth",
        description:
          "Multi-family properties as part of a cross-generational wealth strategy.",
        image: "/images/mehrfamilienhaeuser/strategie-4.jpg",
      },
    ],
    section6Label: "What sets us apart",
    section6Headline: "Every multi-family property tells its own story.",
    section6Text:
      "Whether long-term wealth accumulation, optimisation of existing stock or strategic expansion — immowap always considers properties in relation to individual goals and priorities.",
    section6TextSecondary:
      "There are no standard solutions. Every analysis is based on the individual context of the owner and their strategy.",
    section6ListLabel: "Every analysis is based on",
    section6Items: [
      "Individual goals",
      "Investment strategy",
      "Risk profile",
      "Long-term priorities",
    ],
    section7Headline: "Long-term value does not arise by chance.",
    principleCards: [
      {
        number: "01",
        title: "Sustainable returns",
        description:
          "Focus on stability and long-term perspectives — beyond short-term optimisation.",
      },
      {
        number: "02",
        title: "Transparent decision foundations",
        description:
          "Structured analyses instead of blanket assessments — traceable and individual.",
      },
      {
        number: "03",
        title: "Individual assessment",
        description:
          "Every property and every strategy is evaluated in its respective context.",
      },
    ],
    ctaLabel: "Next step",
    ctaHeadline: "Understanding substance. Recognising perspectives.",
    ctaText:
      "Well-founded analyses create transparency and support long-term decisions.",
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
        imageAlt="Elegant European multi-family building — timeless architecture"
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
