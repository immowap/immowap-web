import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SolutionHeroSection } from "@/components/ui/SolutionHeroSection";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";

interface KapitalanlagePageProps {
  locale: Locale;
}

const copy = {
  de: {
    heroLabel: "Für Ihre Ziele",
    heroHeadline: "Kapitalanlagen mit Struktur und Perspektive.",
    heroSubheadline:
      "Nicht jede Immobilie ist automatisch eine gute Investition. immowap unterstützt dabei, Chancen, Risiken und langfristige Perspektiven fundiert einzuordnen.",
    heroBtnPrimary: "Analyse starten",
    heroBtnSecondary: "Anfrage senden",
    section1Headline: "Nicht jede Rendite erzählt die ganze Geschichte.",
    section1Text:
      "Neben der Rendite spielen Lage, Entwicklungspotenzial, Risiken und persönliche Ziele eine entscheidende Rolle. Eine strukturierte Betrachtung hilft dabei, langfristige Chancen besser einzuordnen.",
    section2Label: "Unsere Betrachtung",
    section2Headline: "Was wir berücksichtigen",
    considerationCards: [
      {
        title: "Renditepotenzial",
        description:
          "Einordnung der erwarteten Rendite im Marktkontext – realistisch, nachvollziehbar und auf Ihre Ziele abgestimmt.",
      },
      {
        title: "Cashflow",
        description:
          "Übersicht über Einnahmen, laufende Kosten und Liquidität – für eine solide Entscheidungsgrundlage.",
      },
      {
        title: "Standortqualität",
        description:
          "Bewertung der Lage nach investmentrelevanten Kriterien: Entwicklungspotenzial, Nachfrage, Infrastruktur.",
      },
      {
        title: "Risiken",
        description:
          "Frühzeitige Identifikation von Markt-, Objekt- und Finanzierungsrisiken für eine belastbare Entscheidung.",
      },
      {
        title: "Wertentwicklung",
        description:
          "Einschätzung der langfristigen Wertentwicklung auf Basis von Marktdaten und Standortanalysen.",
      },
      {
        title: "Finanzierung",
        description:
          "Strukturierung und Beurteilung der Finanzierung im Hinblick auf Tragbarkeit und langfristige Stabilität.",
      },
    ],
    section3Headline: "Daten statt Bauchgefühl",
    section3Text:
      "immowap verbindet praktische Erfahrung mit datenbasierten Analysen und strukturierten Auswertungen. Dadurch entstehen nachvollziehbare Entscheidungsgrundlagen für langfristige Investitionen.",
    section3Btn: "Mehr über unsere Analysen",
    section4Label: "Analyse",
    section4Headline: "Relevante Analysen",
    cardLink: "Mehr erfahren",
    analysisCards: [
      {
        title: "Renditeanalyse",
        description: "Analyse langfristiger Ertragsperspektiven und Wirtschaftlichkeit.",
        href: "/de/loesungen",
      },
      {
        title: "Cashflow-Analyse",
        description: "Übersicht über Einnahmen, Kosten und Liquidität.",
        href: "/de/loesungen",
      },
      {
        title: "Marktvergleich",
        description: "Vergleich mit ähnlichen Immobilien und Marktsegmenten.",
        href: "/de/loesungen",
      },
      {
        title: "Risikoanalyse",
        description: "Frühzeitige Identifikation möglicher Risiken und Unsicherheiten.",
        href: "/de/loesungen",
      },
    ],
    section5Label: "Investitionsstrategien",
    section5Headline: "Für unterschiedliche Strategien",
    strategyCards: [
      {
        title: "Langfristige Kapitalanlage",
        description:
          "Immobilien als strategische Vermögenskomponente mit langfristigem Wertsteigerungspotenzial.",
        image: "/images/kapitalanlage/strategie-1.jpg",
      },
      {
        title: "Vermietete Immobilien",
        description:
          "Laufende Erträge durch strukturierte Beurteilung von Mietnachfrage und Cashflow.",
        image: "/images/kapitalanlage/strategie-2.jpg",
      },
      {
        title: "Portfolioaufbau",
        description:
          "Diversifikation und strukturierter Aufbau eines nachhaltigen Immobilienportfolios.",
        image: "/images/kapitalanlage/strategie-3.jpg",
      },
      {
        title: "Vermögenssicherung",
        description:
          "Immobilien als stabile Komponente zur langfristigen Sicherung und Erhaltung von Vermögen.",
        image: "/images/kapitalanlage/strategie-4.jpg",
      },
    ],
    section6Label: "Was uns unterscheidet",
    section6Headline: "Jeder Investor verfolgt andere Ziele.",
    section6Text:
      "Ob laufender Cashflow, langfristiger Vermögensaufbau oder strategische Diversifikation – immowap betrachtet Immobilien immer im Zusammenhang mit den individuellen Erwartungen und Prioritäten.",
    section6TextSecondary:
      "Es gibt keine Standardlösungen. Jede Analyse orientiert sich am individuellen Kontext des Investors.",
    section6ListLabel: "Jede Analyse basiert auf",
    section6Items: [
      "Individuellen Zielen",
      "Risikobereitschaft",
      "Anlagehorizont",
      "Persönlichen Prioritäten",
    ],
    section7Headline: "Langfristige Werte entstehen nicht zufällig.",
    principleCards: [
      {
        number: "01",
        title: "Nachhaltige Erträge",
        description:
          "Fokus auf Stabilität und langfristige Perspektiven statt kurzfristiger Optimierung.",
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
    ctaHeadline: "Fundierte Entscheidungen beginnen mit Klarheit.",
    ctaText:
      "Strukturierte Analysen helfen dabei, Chancen und Risiken besser einzuordnen und langfristige Perspektiven zu bewerten.",
    ctaBtnPrimary: "Analyse starten",
    ctaBtnSecondary: "Kontakt aufnehmen",
  },
  en: {
    heroLabel: "For your goals",
    heroHeadline: "Investment properties with structure and perspective.",
    heroSubheadline:
      "Not every property is automatically a good investment. immowap helps to assess opportunities, risks and long-term perspectives in a well-founded way.",
    heroBtnPrimary: "Start analysis",
    heroBtnSecondary: "Send enquiry",
    section1Headline: "Not every yield tells the whole story.",
    section1Text:
      "Beyond yield, location, development potential, risks and personal goals play a decisive role. A structured assessment helps to better classify long-term opportunities.",
    section2Label: "Our assessment",
    section2Headline: "What we take into account",
    considerationCards: [
      {
        title: "Yield potential",
        description:
          "Assessment of the expected yield in the market context — realistic, traceable and aligned with your goals.",
      },
      {
        title: "Cashflow",
        description:
          "Overview of income, ongoing costs and liquidity — for a solid decision-making foundation.",
      },
      {
        title: "Location quality",
        description:
          "Evaluation of the location by investment-relevant criteria: development potential, demand, infrastructure.",
      },
      {
        title: "Risks",
        description:
          "Early identification of market, property and financing risks for a robust decision.",
      },
      {
        title: "Value development",
        description:
          "Assessment of long-term value appreciation based on market data and location analyses.",
      },
      {
        title: "Financing",
        description:
          "Structuring and assessment of financing with regard to affordability and long-term stability.",
      },
    ],
    section3Headline: "Data instead of gut feeling",
    section3Text:
      "immowap combines practical experience with data-based analyses and structured evaluations. This produces traceable decision-making foundations for long-term investments.",
    section3Btn: "Learn more about our analyses",
    section4Label: "Analysis",
    section4Headline: "Relevant analyses",
    cardLink: "Learn more",
    analysisCards: [
      {
        title: "Return analysis",
        description: "Analysis of long-term yield perspectives and economic viability.",
        href: "/en/solutions",
      },
      {
        title: "Cashflow analysis",
        description: "Overview of income, costs and liquidity.",
        href: "/en/solutions",
      },
      {
        title: "Market comparison",
        description: "Comparison with similar properties and market segments.",
        href: "/en/solutions",
      },
      {
        title: "Risk analysis",
        description: "Early identification of possible risks and uncertainties.",
        href: "/en/solutions",
      },
    ],
    section5Label: "Investment strategies",
    section5Headline: "For different strategies",
    strategyCards: [
      {
        title: "Long-term investment",
        description:
          "Properties as a strategic wealth component with long-term value appreciation potential.",
        image: "/images/kapitalanlage/strategie-1.jpg",
      },
      {
        title: "Rented properties",
        description:
          "Ongoing returns through structured assessment of rental demand and cashflow.",
        image: "/images/kapitalanlage/strategie-2.jpg",
      },
      {
        title: "Portfolio building",
        description:
          "Diversification and structured development of a sustainable property portfolio.",
        image: "/images/kapitalanlage/strategie-3.jpg",
      },
      {
        title: "Wealth preservation",
        description:
          "Properties as a stable component for the long-term safeguarding and preservation of wealth.",
        image: "/images/kapitalanlage/strategie-4.jpg",
      },
    ],
    section6Label: "What sets us apart",
    section6Headline: "Every investor pursues different goals.",
    section6Text:
      "Whether ongoing cashflow, long-term wealth accumulation or strategic diversification — immowap always considers properties in relation to individual expectations and priorities.",
    section6TextSecondary:
      "There are no standard solutions. Every analysis is based on the individual context of the investor.",
    section6ListLabel: "Every analysis is based on",
    section6Items: [
      "Individual goals",
      "Risk tolerance",
      "Investment horizon",
      "Personal priorities",
    ],
    section7Headline: "Long-term value does not arise by chance.",
    principleCards: [
      {
        number: "01",
        title: "Sustainable returns",
        description:
          "Focus on stability and long-term perspectives instead of short-term optimisation.",
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
    ctaHeadline: "Well-founded decisions begin with clarity.",
    ctaText:
      "Structured analyses help to assess opportunities and risks more effectively and evaluate long-term perspectives.",
    ctaBtnPrimary: "Start analysis",
    ctaBtnSecondary: "Get in touch",
  },
} as const;

export function KapitalanlagePage({ locale }: KapitalanlagePageProps) {
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
        imageSrc="/images/kapitalanlage/hero.jpg"
        imageAlt="Elegant European building — premium investment property"
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
              src="/images/kapitalanlage/section1.jpg"
              alt="Professional investment perspective — long-term wealth creation"
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
              src="/images/kapitalanlage/section3.jpg"
              alt="Premium workspace — laptop, reports, documents, Private Banking atmosphere"
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
