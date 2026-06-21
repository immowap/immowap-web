import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SolutionHeroSection } from "@/components/ui/SolutionHeroSection";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";

interface FixFlipPageProps {
  locale: Locale;
}

const copy = {
  de: {
    heroLabel: "Für Ihre Ziele",
    heroHeadline: "Immobilienpotenziale erkennen. Werte entwickeln.",
    heroSubheadline:
      "Nicht jede Immobilie eignet sich für ein Fix & Flip Projekt. Entscheidend sind Kaufpreis, Sanierungsaufwand, Marktumfeld und die individuelle Strategie.",
    heroBtnPrimary: "Analyse starten",
    heroBtnSecondary: "Anfrage senden",
    section1Headline: "Mehr als nur günstig einkaufen.",
    section1Text:
      "Erfolgreiche Fix & Flip Projekte basieren auf deutlich mehr als einem attraktiven Kaufpreis. Lage, Zustand, Modernisierungskosten und Marktpotenzial sollten ganzheitlich betrachtet werden.",
    section2Label: "Unsere Betrachtung",
    section2Headline: "Was wir berücksichtigen",
    considerationCards: [
      {
        title: "Kaufpreis",
        description:
          "Realistischer Einstiegspreis als Grundlage – unter Berücksichtigung von Marktlage und Entwicklungspotenzial.",
      },
      {
        title: "Sanierungskosten",
        description:
          "Strukturierte Einschätzung des Modernisierungsaufwands – auf Basis von Zustand, Umfang und Marktstandards.",
      },
      {
        title: "Marktpotenzial",
        description:
          "Einordnung des Standorts und der Zielgruppe – für eine fundierte Einschätzung des erzielbaren Verkaufspreises.",
      },
      {
        title: "Zeitrahmen",
        description:
          "Realistischer Projektzeitraum von Ankauf über Modernisierung bis zum Verkauf – inklusive Puffer.",
      },
      {
        title: "Risiken",
        description:
          "Frühzeitige Identifikation von Kosten-, Zeit- und Marktrisiken für eine belastbare Entscheidungsgrundlage.",
      },
      {
        title: "Verkaufsperspektive",
        description:
          "Einschätzung der Nachfrage und der erzielbaren Erlöse nach abgeschlossener Modernisierung.",
      },
    ],
    section3Headline: "Struktur statt Spekulation",
    section3Text:
      "Durch strukturierte Analysen lassen sich Chancen und Risiken frühzeitig besser einschätzen. immowap verbindet Erfahrung, Daten und nachvollziehbare Entscheidungsgrundlagen.",
    section3Btn: "Mehr über unsere Analysen",
    section4Label: "Analyse",
    section4Headline: "Relevante Analysen",
    cardLink: "Mehr erfahren",
    analysisCards: [
      {
        title: "Marktwertanalyse",
        description: "Realistische Einordnung vor und nach der Modernisierung.",
        href: "/de/loesungen/marktwertanalyse",
      },
      {
        title: "Cashflow-Analyse",
        description: "Übersicht über Kosten, Liquidität und Wirtschaftlichkeit.",
        href: "/de/loesungen",
      },
      {
        title: "Risikoanalyse",
        description: "Frühzeitige Identifikation möglicher Unsicherheiten.",
        href: "/de/loesungen",
      },
      {
        title: "Individuelle Immobilienanalyse",
        description: "Ganzheitliche Betrachtung des Projekts und seiner Potenziale.",
        href: "/de/loesungen",
      },
    ],
    section5Label: "Projekttypen",
    section5Headline: "Für unterschiedliche Projekte",
    projectCards: [
      {
        title: "Eigentumswohnungen",
        description:
          "Attraktive Ausgangsobjekte mit klarem Modernisierungspotenzial und definierten Zielgruppen.",
        image: "/images/fix-flip/projekt-1.jpg",
      },
      {
        title: "Einfamilienhäuser",
        description:
          "Hoher Individualitätsgrad, breite Käufergruppe und oft unterschätztes Wertsteigerungspotenzial.",
        image: "/images/fix-flip/projekt-2.jpg",
      },
      {
        title: "Sanierungsobjekte",
        description:
          "Objekte mit erhöhtem Modernisierungsbedarf – und entsprechend großem Entwicklungspotenzial.",
        image: "/images/fix-flip/projekt-3.jpg",
      },
      {
        title: "Entwicklungsprojekte",
        description:
          "Komplexere Vorhaben mit strukturierter Planung, mehreren Gewerken und klarer Exit-Strategie.",
        image: "/images/fix-flip/projekt-4.jpg",
      },
    ],
    section6Label: "Was uns unterscheidet",
    section6Headline: "Jedes Projekt folgt eigenen Rahmenbedingungen.",
    section6Text:
      "Ob kurze Haltedauer, umfangreiche Modernisierung oder unterschiedliche Zielgruppen – immowap betrachtet jedes Vorhaben individuell und orientiert sich an den jeweiligen Zielen und Prioritäten.",
    section6TextSecondary:
      "Es gibt keine Standardlösungen. Jede Analyse orientiert sich am individuellen Kontext des Projekts.",
    section6ListLabel: "Jede Analyse basiert auf",
    section6Items: [
      "Individuellen Zielen",
      "Projektumfang",
      "Zeithorizont",
      "Risikoprofil",
    ],
    section7Headline: "Potenziale sichtbar machen.",
    principleCards: [
      {
        number: "01",
        title: "Wertsteigerung",
        description:
          "Fokus auf Entwicklungspotenziale und den nachhaltigen Mehrwert einer durchdachten Modernisierung.",
      },
      {
        number: "02",
        title: "Strukturierte Entscheidungen",
        description:
          "Fundierte Analysen statt Spekulation – nachvollziehbar, datenbasiert und auf das Projekt zugeschnitten.",
      },
      {
        number: "03",
        title: "Individuelle Strategien",
        description: "Jedes Projekt wird im jeweiligen Kontext betrachtet – ohne pauschale Annahmen.",
      },
    ],
    ctaLabel: "Nächster Schritt",
    ctaHeadline: "Potenziale sichtbar machen. Entscheidungen fundiert treffen.",
    ctaText:
      "Strukturierte Analysen schaffen Transparenz und unterstützen bei der Bewertung von Chancen und Risiken.",
    ctaBtnPrimary: "Analyse starten",
    ctaBtnSecondary: "Kontakt aufnehmen",
  },
  en: {
    heroLabel: "For your goals",
    heroHeadline: "Identify property potential. Create value.",
    heroSubheadline:
      "Not every property is suitable for a Fix & Flip project. The purchase price, renovation scope, market environment and individual strategy are decisive.",
    heroBtnPrimary: "Start analysis",
    heroBtnSecondary: "Send enquiry",
    section1Headline: "More than just buying cheap.",
    section1Text:
      "Successful Fix & Flip projects are based on considerably more than an attractive purchase price. Location, condition, renovation costs and market potential should be viewed holistically.",
    section2Label: "Our assessment",
    section2Headline: "What we take into account",
    considerationCards: [
      {
        title: "Purchase price",
        description:
          "A realistic entry price as the foundation — taking market conditions and development potential into account.",
      },
      {
        title: "Renovation costs",
        description:
          "Structured assessment of the modernisation scope — based on condition, extent and market standards.",
      },
      {
        title: "Market potential",
        description:
          "Assessment of the location and target group — for a well-founded estimate of the achievable sale price.",
      },
      {
        title: "Timeline",
        description:
          "Realistic project period from purchase through renovation to sale — including contingency.",
      },
      {
        title: "Risks",
        description:
          "Early identification of cost, time and market risks for a robust decision-making foundation.",
      },
      {
        title: "Sales perspective",
        description:
          "Assessment of demand and achievable proceeds after completion of modernisation.",
      },
    ],
    section3Headline: "Structure instead of speculation",
    section3Text:
      "Through structured analyses, opportunities and risks can be better assessed at an early stage. immowap combines experience, data and traceable decision-making foundations.",
    section3Btn: "Learn more about our analyses",
    section4Label: "Analysis",
    section4Headline: "Relevant analyses",
    cardLink: "Learn more",
    analysisCards: [
      {
        title: "Market value analysis",
        description: "Realistic assessment before and after modernisation.",
        href: "/en/solutions/market-value-analysis",
      },
      {
        title: "Cashflow analysis",
        description: "Overview of costs, liquidity and economic viability.",
        href: "/en/solutions",
      },
      {
        title: "Risk analysis",
        description: "Early identification of possible uncertainties.",
        href: "/en/solutions",
      },
      {
        title: "Individual property analysis",
        description: "Holistic consideration of the project and its potential.",
        href: "/en/solutions",
      },
    ],
    section5Label: "Project types",
    section5Headline: "For different projects",
    projectCards: [
      {
        title: "Owner-occupied apartments",
        description:
          "Attractive starting properties with clear modernisation potential and defined target groups.",
        image: "/images/fix-flip/projekt-1.jpg",
      },
      {
        title: "Single-family houses",
        description:
          "High individuality, broad buyer group and often underestimated value appreciation potential.",
        image: "/images/fix-flip/projekt-2.jpg",
      },
      {
        title: "Renovation properties",
        description:
          "Properties with increased need for modernisation — and correspondingly large development potential.",
        image: "/images/fix-flip/projekt-3.jpg",
      },
      {
        title: "Development projects",
        description:
          "More complex projects with structured planning, multiple trades and a clear exit strategy.",
        image: "/images/fix-flip/projekt-4.jpg",
      },
    ],
    section6Label: "What sets us apart",
    section6Headline: "Every project follows its own framework.",
    section6Text:
      "Whether short holding period, extensive modernisation or different target groups — immowap considers every project individually, oriented towards the respective goals and priorities.",
    section6TextSecondary:
      "There are no standard solutions. Every analysis is based on the individual context of the project.",
    section6ListLabel: "Every analysis is based on",
    section6Items: [
      "Individual goals",
      "Project scope",
      "Time horizon",
      "Risk profile",
    ],
    section7Headline: "Making potential visible.",
    principleCards: [
      {
        number: "01",
        title: "Value creation",
        description:
          "Focus on development potential and the sustainable added value of a well-conceived modernisation.",
      },
      {
        number: "02",
        title: "Structured decisions",
        description:
          "Well-founded analyses instead of speculation — traceable, data-based and tailored to the project.",
      },
      {
        number: "03",
        title: "Individual strategies",
        description:
          "Every project is considered in its respective context — without blanket assumptions.",
      },
    ],
    ctaLabel: "Next step",
    ctaHeadline: "Making potential visible. Making decisions well-founded.",
    ctaText:
      "Structured analyses create transparency and support the assessment of opportunities and risks.",
    ctaBtnPrimary: "Start analysis",
    ctaBtnSecondary: "Get in touch",
  },
} as const;

export function FixFlipPage({ locale }: FixFlipPageProps) {
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
        imageSrc="/images/fix-flip/hero.jpg"
        imageAlt="Architecture and development potential — Fix & Flip"
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
              src="/images/fix-flip/section1.jpg"
              alt="Transformation and development potential"
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
              src="/images/fix-flip/section3.jpg"
              alt="Structured workspace with architectural plans and analyses"
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
          {c.projectCards.map((card) => (
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
