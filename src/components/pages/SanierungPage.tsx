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
    heroHeadline: "Bestehende Immobilien weiterdenken.",
    heroSubheadline:
      "Modernisierung und Sanierung bedeuten mehr als reine Baumaßnahmen. Entscheidend sind individuelle Ziele, technische Anforderungen und langfristige Perspektiven.",
    heroBtnPrimary: "Analyse starten",
    heroBtnSecondary: "Anfrage senden",
    section1Headline: "Potenziale erkennen und gezielt entwickeln.",
    section1Text:
      "Jede Immobilie besitzt unterschiedliche Entwicklungsmöglichkeiten. Umfang, Wirtschaftlichkeit und Zielsetzung sollten strukturiert betrachtet werden, bevor Entscheidungen getroffen werden.",
    section2Label: "Unsere Betrachtung",
    section2Headline: "Was wir berücksichtigen",
    considerationCards: [
      {
        title: "Zustand der Immobilie",
        description:
          "Strukturierte Bestandsaufnahme als Ausgangspunkt – technisch, energetisch und baulich.",
      },
      {
        title: "Modernisierungspotenzial",
        description:
          "Einschätzung der realistischen Entwicklungsmöglichkeiten in Relation zu Aufwand und Zielsetzung.",
      },
      {
        title: "Investitionsvolumen",
        description:
          "Planung und Einordnung des Kostenrahmens für eine wirtschaftlich tragfähige Entscheidung.",
      },
      {
        title: "Energieeffizienz",
        description:
          "Berücksichtigung energetischer Anforderungen, Fördermöglichkeiten und langfristiger Betriebskosten.",
      },
      {
        title: "Langfristige Wertentwicklung",
        description:
          "Einschätzung des Wertsteigerungspotenzials durch gezielte Maßnahmen im Marktkontext.",
      },
      {
        title: "Chancen und Risiken",
        description:
          "Ganzheitliche Betrachtung von Potenzialen und möglichen Unsicherheiten vor Entscheidungsbeginn.",
      },
    ],
    section3Headline: "Strukturierte Entscheidungen statt Einzelmaßnahmen",
    section3Text:
      "Durch eine ganzheitliche Betrachtung lassen sich Maßnahmen besser priorisieren und langfristige Ziele gezielt verfolgen.",
    section3Btn: "Mehr über unsere Analysen",
    section4Label: "Analyse",
    section4Headline: "Relevante Analysen",
    cardLink: "Mehr erfahren",
    analysisCards: [
      {
        title: "Marktwertanalyse",
        description: "Bewertung der Immobilie vor und nach geplanten Maßnahmen.",
        href: "/de/loesungen/marktwertanalyse",
      },
      {
        title: "Risikoanalyse",
        description: "Identifikation möglicher technischer und wirtschaftlicher Risiken.",
        href: "/de/loesungen",
      },
      {
        title: "Dokumentenanalyse",
        description: "Strukturierte Auswertung vorhandener Unterlagen.",
        href: "/de/loesungen",
      },
      {
        title: "Individuelle Immobilienanalyse",
        description: "Berücksichtigung der jeweiligen Zielsetzung und Rahmenbedingungen.",
        href: "/de/loesungen",
      },
    ],
    section5Label: "Vorhabentypen",
    section5Headline: "Für unterschiedliche Vorhaben",
    vorhabenCards: [
      {
        title: "Energetische Sanierung",
        description:
          "Gezielte Maßnahmen zur Verbesserung der Energieeffizienz und Senkung langfristiger Betriebskosten.",
        image: "/images/sanierung/vorhaben-1.jpg",
      },
      {
        title: "Modernisierung von Wohnungen",
        description:
          "Aufwertung des Wohnraums durch durchdachte Maßnahmen mit klarem Qualitäts- und Wertanspruch.",
        image: "/images/sanierung/vorhaben-2.jpg",
      },
      {
        title: "Wertsteigerung bestehender Immobilien",
        description:
          "Strukturierte Entwicklung des Bestandsobjekts für nachhaltige Wertsteigerung im Marktkontext.",
        image: "/images/sanierung/vorhaben-3.jpg",
      },
      {
        title: "Langfristige Bestandshaltung",
        description:
          "Erhalt und Optimierung bestehender Immobilien mit Fokus auf Qualität und Langlebigkeit.",
        image: "/images/sanierung/vorhaben-4.jpg",
      },
    ],
    section6Label: "Was uns unterscheidet",
    section6Headline: "Nicht jede Modernisierung verfolgt dasselbe Ziel.",
    section6Text:
      "Ob Eigennutzung, Kapitalanlage oder langfristiger Werterhalt – immowap betrachtet jede Maßnahme im Zusammenhang mit den individuellen Erwartungen und Prioritäten.",
    section6TextSecondary:
      "Es gibt keine Standardlösungen. Jede Analyse orientiert sich am individuellen Kontext der Immobilie und ihrer Nutzung.",
    section6ListLabel: "Jede Analyse basiert auf",
    section6Items: [
      "Individuellen Zielen",
      "Technischen Anforderungen",
      "Budgetprioritäten",
      "Langfristigen Erwartungen",
    ],
    section7Headline: "Bestehende Werte weiterentwickeln.",
    principleCards: [
      {
        number: "01",
        title: "Nachhaltigkeit",
        description:
          "Fokus auf langfristige Perspektiven und Energieeffizienz – Maßnahmen mit dauerhaftem Mehrwert.",
      },
      {
        number: "02",
        title: "Strukturierte Planung",
        description:
          "Ganzheitliche Entscheidungen statt isolierter Einzelmaßnahmen – koordiniert und zielorientiert.",
      },
      {
        number: "03",
        title: "Individuelle Betrachtung",
        description:
          "Jede Immobilie wird im jeweiligen Kontext bewertet – ohne pauschale Empfehlungen.",
      },
    ],
    ctaLabel: "Nächster Schritt",
    ctaHeadline: "Bestehende Werte weiterentwickeln.",
    ctaText:
      "Strukturierte Analysen unterstützen dabei, Potenziale besser zu erkennen und Entscheidungen fundiert zu treffen.",
    ctaBtnPrimary: "Analyse starten",
    ctaBtnSecondary: "Kontakt aufnehmen",
  },
  en: {
    heroLabel: "For your goals",
    heroHeadline: "Rethinking existing properties.",
    heroSubheadline:
      "Modernisation and renovation mean more than mere construction measures. Individual goals, technical requirements and long-term perspectives are decisive.",
    heroBtnPrimary: "Start analysis",
    heroBtnSecondary: "Send enquiry",
    section1Headline: "Identifying potential and developing it in a targeted way.",
    section1Text:
      "Every property has different development possibilities. Scope, economic viability and objectives should be considered in a structured way before decisions are made.",
    section2Label: "Our assessment",
    section2Headline: "What we take into account",
    considerationCards: [
      {
        title: "Property condition",
        description:
          "Structured condition assessment as a starting point — technical, energy-related and structural.",
      },
      {
        title: "Modernisation potential",
        description:
          "Assessment of realistic development possibilities in relation to effort and objectives.",
      },
      {
        title: "Investment volume",
        description:
          "Planning and classification of the cost framework for an economically viable decision.",
      },
      {
        title: "Energy efficiency",
        description:
          "Consideration of energy requirements, funding opportunities and long-term operating costs.",
      },
      {
        title: "Long-term value development",
        description:
          "Assessment of value appreciation potential through targeted measures in the market context.",
      },
      {
        title: "Opportunities & risks",
        description:
          "Holistic view of potential and possible uncertainties before decision-making begins.",
      },
    ],
    section3Headline: "Structured decisions instead of isolated measures",
    section3Text:
      "Through a holistic approach, measures can be better prioritised and long-term goals pursued in a targeted manner.",
    section3Btn: "Learn more about our analyses",
    section4Label: "Analysis",
    section4Headline: "Relevant analyses",
    cardLink: "Learn more",
    analysisCards: [
      {
        title: "Market value analysis",
        description: "Assessment of the property before and after planned measures.",
        href: "/en/solutions/market-value-analysis",
      },
      {
        title: "Risk analysis",
        description: "Identification of possible technical and economic risks.",
        href: "/en/solutions",
      },
      {
        title: "Document analysis",
        description: "Structured evaluation of available documentation.",
        href: "/en/solutions",
      },
      {
        title: "Individual property analysis",
        description: "Consideration of the respective objectives and framework conditions.",
        href: "/en/solutions",
      },
    ],
    section5Label: "Project types",
    section5Headline: "For different projects",
    vorhabenCards: [
      {
        title: "Energy renovation",
        description:
          "Targeted measures to improve energy efficiency and reduce long-term operating costs.",
        image: "/images/sanierung/vorhaben-1.jpg",
      },
      {
        title: "Apartment modernisation",
        description:
          "Upgrading living space through well-conceived measures with a clear quality and value ambition.",
        image: "/images/sanierung/vorhaben-2.jpg",
      },
      {
        title: "Value enhancement of existing properties",
        description:
          "Structured development of existing stock for sustainable value appreciation in the market context.",
        image: "/images/sanierung/vorhaben-3.jpg",
      },
      {
        title: "Long-term portfolio retention",
        description:
          "Maintenance and optimisation of existing properties with a focus on quality and longevity.",
        image: "/images/sanierung/vorhaben-4.jpg",
      },
    ],
    section6Label: "What sets us apart",
    section6Headline: "Not every modernisation pursues the same goal.",
    section6Text:
      "Whether owner-occupation, investment or long-term value preservation — immowap considers every measure in relation to individual expectations and priorities.",
    section6TextSecondary:
      "There are no standard solutions. Every analysis is based on the individual context of the property and its use.",
    section6ListLabel: "Every analysis is based on",
    section6Items: [
      "Individual goals",
      "Technical requirements",
      "Budget priorities",
      "Long-term expectations",
    ],
    section7Headline: "Developing existing values further.",
    principleCards: [
      {
        number: "01",
        title: "Sustainability",
        description:
          "Focus on long-term perspectives and energy efficiency — measures with lasting added value.",
      },
      {
        number: "02",
        title: "Structured planning",
        description:
          "Holistic decisions instead of isolated individual measures — coordinated and goal-oriented.",
      },
      {
        number: "03",
        title: "Individual assessment",
        description:
          "Every property is evaluated in its respective context — without blanket recommendations.",
      },
    ],
    ctaLabel: "Next step",
    ctaHeadline: "Developing existing values further.",
    ctaText:
      "Structured analyses support the better identification of potential and making well-founded decisions.",
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
        imageAlt="Elegant architecture and timeless interior — Renovation & Modernisation"
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
