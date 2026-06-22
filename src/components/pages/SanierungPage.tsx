import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SolutionHeroSection } from "@/components/ui/SolutionHeroSection";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";

interface SanierungPageProps {
  locale: Locale;
}

const copy = {
  de: {
    heroLabel: "Für Ihre Ziele",
    heroHeadline: "Projekte entwickeln. Potenziale realisieren.",
    heroSubheadline:
      "Projektentwicklung verbindet Grundstücke, Neubau, Umbau und Nachverdichtung mit klaren wirtschaftlichen Zielen – von der ersten Idee bis zur Exit-Strategie.",
    heroBtnPrimary: "Analyse starten",
    heroBtnSecondary: "Anfrage senden",
    section1Headline: "Vom Grundstück bis zur Entscheidung.",
    section1Text:
      "Ob Neubau, Aufteilung, Umbau oder Bauträgerprojekt: Entscheidend sind Standort, Genehmigungslage, Wirtschaftlichkeit und ein realistischer Exit. Diese Faktoren sollten strukturiert zusammen betrachtet werden.",
    section2Label: "Unsere Betrachtung",
    section2Headline: "Was wir berücksichtigen",
    considerationCards: [
      {
        title: "Grundstücke",
        description:
          "Bewertung von Lage, Bebauungsplan, Erschließung und Entwicklungsfähigkeit als Basis jeder Projektentscheidung.",
      },
      {
        title: "Neubau & Umbau",
        description:
          "Einordnung von Baukonzept, Kostenrahmen, Zeitplan und technischen Anforderungen im jeweiligen Marktkontext.",
      },
      {
        title: "Aufteilung & Nachverdichtung",
        description:
          "Prüfung von Teilungs- und Verdichtungspotenzialen – rechtlich, baulich und wirtschaftlich.",
      },
      {
        title: "Bauträgerprojekte",
        description:
          "Strukturierte Betrachtung von Projektstruktur, Risikoverteilung, Vertrieb und Finanzierung im Bauträgerkontext.",
      },
      {
        title: "Wirtschaftlichkeit",
        description:
          "Realistische Kalkulation von Kosten, Erträgen, Rendite und Sensitivitäten für belastbare Entscheidungen.",
      },
      {
        title: "Exit-Strategien",
        description:
          "Frühzeitige Klärung, ob Verkauf, Bestandshaltung oder Teilveräußerung zum Projektziel passt.",
      },
    ],
    section3Headline: "Strukturierte Projektentscheidungen statt Bauchgefühl",
    section3Text:
      "Durch ganzheitliche Analysen lassen sich Chancen, Risiken und wirtschaftliche Potenziale frühzeitig erkennen – bevor Kapital gebunden wird.",
    section3Btn: "Mehr über unsere Analysen",
    section4Label: "Analyse",
    section4Headline: "Relevante Analysen",
    cardLink: "Mehr erfahren",
    analysisCards: [
      {
        title: "Marktwertanalyse",
        description: "Einordnung von Grundstück, Bestand und geplantem Ergebnis im Marktumfeld.",
        href: "/de/loesungen/marktwertanalyse",
      },
      {
        title: "Risikoanalyse",
        description: "Identifikation baulicher, regulatorischer und wirtschaftlicher Projektunsicherheiten.",
        href: "/de/loesungen",
      },
      {
        title: "Dokumentenanalyse",
        description: "Auswertung von Bebauungsplan, Gutachten, Kalkulationen und Vertragsunterlagen.",
        href: "/de/loesungen",
      },
      {
        title: "Individuelle Immobilienanalyse",
        description: "Projektspezifische Bewertung entlang Ihrer Ziele und Exit-Strategie.",
        href: "/de/loesungen",
      },
    ],
    section5Label: "Projekttypen",
    section5Headline: "Typische Entwicklungsvorhaben",
    vorhabenCards: [
      {
        title: "Neubau",
        description:
          "Neue Wohn- oder Nutzflächen auf entwickelten Grundstücken – mit Fokus auf Markt, Kosten und Vermarktbarkeit.",
        image: "/images/sanierung/vorhaben-1.jpg",
      },
      {
        title: "Aufteilung",
        description:
          "Aufteilung bestehender Gebäude in Einheiten – als strategischer Hebel für Verkauf oder langfristigen Bestand.",
        image: "/images/sanierung/vorhaben-2.jpg",
      },
      {
        title: "Nachverdichtung",
        description:
          "Zusätzliche Flächen durch Aufstockung, Anbau oder Umnutzung – unter Berücksichtigung von Genehmigung und Wirtschaftlichkeit.",
        image: "/images/sanierung/vorhaben-3.jpg",
      },
      {
        title: "Verkauf oder Bestand",
        description:
          "Abwägung zwischen sofortigem Verkauf, Halten im Portfolio und gestaffelter Exit-Strategie.",
        image: "/images/sanierung/vorhaben-4.jpg",
      },
    ],
    section6Label: "Was uns unterscheidet",
    section6Headline: "Jedes Projekt verfolgt ein anderes Ziel.",
    section6Text:
      "Ob Bauträgerprojekt, Bestandsentwicklung oder individuelle Grundstücksentwicklung – immowap betrachtet jedes Vorhaben im Zusammenhang mit Wirtschaftlichkeit, Risiko und persönlicher Strategie.",
    section6TextSecondary:
      "Es gibt keine Standardlösung. Jede Analyse orientiert sich am konkreten Projekt, den Rahmenbedingungen und der geplanten Exit-Strategie.",
    section6ListLabel: "Jede Analyse basiert auf",
    section6Items: [
      "Projektziel und Exit",
      "Standort und Genehmigungslage",
      "Wirtschaftlichkeit und Potenziale",
      "Individuellen Rahmenbedingungen",
    ],
    section7Headline: "Potenziale erkennen. Entscheidungen fundieren.",
    principleCards: [
      {
        number: "01",
        title: "Wirtschaftlichkeit zuerst",
        description:
          "Fokus auf realistische Kalkulation, Sensitivitäten und nachvollziehbare Renditeperspektiven.",
      },
      {
        number: "02",
        title: "Strukturierte Projektplanung",
        description:
          "Ganzheitliche Betrachtung von Grundstück, Bauprojekt, Finanzierung und Exit – statt isolierter Einzelentscheidungen.",
      },
      {
        number: "03",
        title: "Individuelle Einordnung",
        description:
          "Jedes Vorhaben wird im jeweiligen Markt- und Projektkontext bewertet – transparent und nachvollziehbar.",
      },
    ],
    ctaLabel: "Nächster Schritt",
    ctaHeadline: "Potenziale erkennen. Entscheidungen fundieren.",
    ctaText:
      "Strukturierte Analysen schaffen Transparenz über Wirtschaftlichkeit, Risiken und realistische Exit-Optionen.",
    ctaBtnPrimary: "Analyse starten",
    ctaBtnSecondary: "Kontakt aufnehmen",
  },
  en: {
    heroLabel: "For your goals",
    heroHeadline: "Develop projects. Realise potential.",
    heroSubheadline:
      "Project development connects land, new build, conversion and densification with clear economic goals – from the first idea to the exit strategy.",
    heroBtnPrimary: "Start analysis",
    heroBtnSecondary: "Send enquiry",
    section1Headline: "From land to decision.",
    section1Text:
      "Whether new build, subdivision, conversion or developer project: location, planning status, economic viability and a realistic exit are decisive. These factors should be assessed together in a structured way.",
    section2Label: "Our assessment",
    section2Headline: "What we take into account",
    considerationCards: [
      {
        title: "Land",
        description:
          "Assessment of location, zoning, infrastructure and development potential as the basis of every project decision.",
      },
      {
        title: "New build & conversion",
        description:
          "Classification of building concept, cost framework, timeline and technical requirements in the relevant market context.",
      },
      {
        title: "Subdivision & densification",
        description:
          "Review of subdivision and densification potential – legally, structurally and economically.",
      },
      {
        title: "Developer projects",
        description:
          "Structured review of project structure, risk allocation, sales and financing in a developer context.",
      },
      {
        title: "Economic viability",
        description:
          "Realistic calculation of costs, income, returns and sensitivities for robust decisions.",
      },
      {
        title: "Exit strategies",
        description:
          "Early clarification of whether sale, retention or partial disposal fits the project goal.",
      },
    ],
    section3Headline: "Structured project decisions instead of gut feeling",
    section3Text:
      "Holistic analyses help identify opportunities, risks and economic potential early – before capital is committed.",
    section3Btn: "Learn more about our analyses",
    section4Label: "Analysis",
    section4Headline: "Relevant analyses",
    cardLink: "Learn more",
    analysisCards: [
      {
        title: "Market value analysis",
        description: "Assessment of land, existing stock and planned outcome in the market environment.",
        href: "/en/solutions/market-value-analysis",
      },
      {
        title: "Risk analysis",
        description: "Identification of structural, regulatory and economic project uncertainties.",
        href: "/en/solutions",
      },
      {
        title: "Document analysis",
        description: "Review of zoning plans, surveys, calculations and contract documents.",
        href: "/en/solutions",
      },
      {
        title: "Individual property analysis",
        description: "Project-specific assessment aligned with your goals and exit strategy.",
        href: "/en/solutions",
      },
    ],
    section5Label: "Project types",
    section5Headline: "Typical development projects",
    vorhabenCards: [
      {
        title: "New build",
        description:
          "New residential or commercial space on developed land – with a focus on market, costs and marketability.",
        image: "/images/sanierung/vorhaben-1.jpg",
      },
      {
        title: "Subdivision",
        description:
          "Splitting existing buildings into units – as a strategic lever for sale or long-term retention.",
        image: "/images/sanierung/vorhaben-2.jpg",
      },
      {
        title: "Densification",
        description:
          "Additional space through extensions, roof additions or change of use – considering permits and viability.",
        image: "/images/sanierung/vorhaben-3.jpg",
      },
      {
        title: "Sale or retention",
        description:
          "Weighing immediate sale, portfolio retention and a phased exit strategy.",
        image: "/images/sanierung/vorhaben-4.jpg",
      },
    ],
    section6Label: "What sets us apart",
    section6Headline: "Every project pursues a different goal.",
    section6Text:
      "Whether a developer project, stock development or individual land development – immowap considers every venture in relation to viability, risk and personal strategy.",
    section6TextSecondary:
      "There is no standard solution. Every analysis is based on the specific project, framework conditions and planned exit strategy.",
    section6ListLabel: "Every analysis is based on",
    section6Items: [
      "Project goal and exit",
      "Location and planning status",
      "Viability and potential",
      "Individual framework conditions",
    ],
    section7Headline: "Recognise potential. Make informed decisions.",
    principleCards: [
      {
        number: "01",
        title: "Viability first",
        description:
          "Focus on realistic calculation, sensitivities and traceable return perspectives.",
      },
      {
        number: "02",
        title: "Structured project planning",
        description:
          "Holistic view of land, build, financing and exit – instead of isolated individual decisions.",
      },
      {
        number: "03",
        title: "Individual assessment",
        description:
          "Every project is evaluated in its market and project context – transparently and traceably.",
      },
    ],
    ctaLabel: "Next step",
    ctaHeadline: "Recognise potential. Make informed decisions.",
    ctaText:
      "Structured analyses create transparency on viability, risks and realistic exit options.",
    ctaBtnPrimary: "Start analysis",
    ctaBtnSecondary: "Get in touch",
  },
} as const;

export function SanierungPage({ locale }: SanierungPageProps) {
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
        imageSrc="/images/sanierung/hero.jpg"
        imageAlt="Architecture and project development — land, new build and conversion"
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
              src="/images/sanierung/section1.jpg"
              alt="Refinement and quality-oriented development of existing properties"
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
              src="/images/sanierung/section3.jpg"
              alt="Architecture workspace with drawings and analyses"
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

      {/* ─── SECTION 5: Project cards ─────────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader label={c.section5Label} headline={c.section5Headline} />
        <div className="grid gap-6 md:grid-cols-2">
          {c.vorhabenCards.map((card) => (
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
