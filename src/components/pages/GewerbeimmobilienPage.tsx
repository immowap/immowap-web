import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";

interface GewerbeimmobilienPageProps {
  locale: Locale;
}

const copy = {
  de: {
    heroLabel: "Für Ihre Ziele",
    heroHeadline: "Gewerbeimmobilien strategisch betrachten.",
    heroSubheadline:
      "Gewerbeimmobilien stellen besondere Anforderungen. Standort, Nutzungskonzepte, wirtschaftliche Rahmenbedingungen und langfristige Perspektiven sollten ganzheitlich betrachtet werden.",
    heroBtnPrimary: "Analyse starten",
    heroBtnSecondary: "Anfrage senden",
    section1Headline: "Gewerbeimmobilien erfordern eine andere Perspektive.",
    section1Text:
      "Anders als Wohnimmobilien werden Gewerbeimmobilien von zahlreichen Faktoren beeinflusst. Nutzung, Flexibilität und wirtschaftliche Potenziale spielen dabei eine zentrale Rolle.",
    section2Label: "Unsere Betrachtung",
    section2Headline: "Was wir berücksichtigen",
    considerationCards: [
      {
        title: "Nutzungskonzepte",
        description:
          "Beurteilung bestehender und möglicher Nutzungskonzepte im Hinblick auf Nachfrage und Wirtschaftlichkeit.",
      },
      {
        title: "Standortqualität",
        description:
          "Einordnung des Mikrostandorts nach gewerberelevanten Kriterien: Sichtbarkeit, Erreichbarkeit, Umfeld.",
      },
      {
        title: "Ertragspotenzial",
        description:
          "Analyse der erzielbaren Mieterträge und langfristiger wirtschaftlicher Perspektiven im Marktkontext.",
      },
      {
        title: "Marktumfeld",
        description:
          "Strukturierte Einschätzung der Nachfragesituation, Wettbewerbsumgebung und Marktentwicklung.",
      },
      {
        title: "Risiken",
        description:
          "Frühzeitige Identifikation von Leerstandsrisiken, Marktveränderungen und strukturellen Unsicherheiten.",
      },
      {
        title: "Langfristige Perspektiven",
        description:
          "Betrachtung des Objekts als strategischen Vermögenswert – über aktuelle Nutzung und Erträge hinaus.",
      },
    ],
    section3Headline: "Strukturierte Entscheidungsgrundlagen",
    section3Text:
      "Durch strukturierte Analysen lassen sich wirtschaftliche Potenziale, Chancen und Risiken besser einordnen. immowap verbindet Erfahrung, Transparenz und nachvollziehbare Entscheidungsgrundlagen.",
    section3Btn: "Mehr über unsere Analysen",
    section4Label: "Analyse",
    section4Headline: "Relevante Analysen",
    cardLink: "Mehr erfahren",
    analysisCards: [
      {
        title: "Marktwertanalyse",
        description: "Einordnung der Immobilie im aktuellen Marktumfeld.",
        href: "/de/loesungen",
      },
      {
        title: "Renditeanalyse",
        description: "Bewertung wirtschaftlicher Perspektiven und Ertragspotenziale.",
        href: "/de/loesungen",
      },
      {
        title: "Risikoanalyse",
        description: "Frühzeitige Identifikation möglicher Unsicherheiten.",
        href: "/de/loesungen",
      },
      {
        title: "Individuelle Immobilienanalyse",
        description: "Berücksichtigung spezifischer Anforderungen und Zielsetzungen.",
        href: "/de/loesungen",
      },
    ],
    section5Label: "Objektarten",
    section5Headline: "Für unterschiedliche Immobilienarten",
    typeCards: [
      {
        title: "Büroimmobilien",
        description:
          "Klassische und moderne Büroflächen – bewertet nach Lage, Flexibilität und Nachfrageperspektive.",
        image: "/images/gewerbeimmobilien/typ-1.jpg",
      },
      {
        title: "Einzelhandelsflächen",
        description:
          "Retail- und Handelsobjekte mit Fokus auf Passantenfrequenz, Sortimentskonzept und Marktlage.",
        image: "/images/gewerbeimmobilien/typ-2.jpg",
      },
      {
        title: "Ärztehäuser und Gesundheitsimmobilien",
        description:
          "Spezialisierte Gesundheitsimmobilien mit stabiler Nachfrage und klarem Nutzungskonzept.",
        image: "/images/gewerbeimmobilien/typ-3.jpg",
      },
      {
        title: "Lager- und Logistikflächen",
        description:
          "Gewerbliche Nutzflächen mit Fokus auf Infrastruktur, Anbindung und operativer Wirtschaftlichkeit.",
        image: "/images/gewerbeimmobilien/typ-4.jpg",
      },
      {
        title: "Mischobjekte",
        description:
          "Gemischt genutzte Objekte mit mehreren Einkommensquellen und individuellem Entwicklungspotenzial.",
        image: "/images/gewerbeimmobilien/typ-5.jpg",
      },
      {
        title: "Spezialimmobilien",
        description:
          "Objekte mit besonderer Zweckbestimmung – individuell bewertet nach Nutzungskonzept und Marktumfeld.",
        image: "/images/gewerbeimmobilien/typ-6.jpg",
      },
    ],
    section6Label: "Was uns unterscheidet",
    section6Headline: "Jede Gewerbeimmobilie folgt eigenen Rahmenbedingungen.",
    section6Text:
      "Ob langfristige Vermietung, Eigennutzung oder strategische Investitionen – immowap betrachtet jede Immobilie im Zusammenhang mit ihren individuellen Anforderungen und Perspektiven.",
    section6TextSecondary:
      "Es gibt keine Standardlösungen. Jede Analyse orientiert sich am individuellen Kontext der Immobilie und ihrer Nutzung.",
    section6ListLabel: "Jede Analyse basiert auf",
    section6Items: [
      "Individuellen Zielen",
      "Nutzungskonzepten",
      "Geschäftlichen Anforderungen",
      "Langfristigen Prioritäten",
    ],
    section7Headline: "Langfristige Entscheidungen benötigen Klarheit.",
    principleCards: [
      {
        number: "01",
        title: "Transparenz",
        description:
          "Strukturierte Grundlagen für fundierte Entscheidungen – nachvollziehbar und auf das Objekt zugeschnitten.",
      },
      {
        number: "02",
        title: "Perspektive",
        description:
          "Fokus auf nachhaltige Entwicklungen und wirtschaftliche Potenziale jenseits kurzfristiger Einschätzungen.",
      },
      {
        number: "03",
        title: "Individualität",
        description:
          "Keine Standardlösungen, sondern eine Betrachtung im jeweiligen Kontext der Immobilie und ihrer Nutzung.",
      },
    ],
    ctaLabel: "Nächster Schritt",
    ctaHeadline: "Komplexität verstehen. Potenziale erkennen.",
    ctaText:
      "Fundierte Analysen schaffen Transparenz und unterstützen bei strategischen Entscheidungen.",
    ctaBtnPrimary: "Analyse starten",
    ctaBtnSecondary: "Kontakt aufnehmen",
  },
  en: {
    heroLabel: "For your goals",
    heroHeadline: "Commercial real estate viewed strategically.",
    heroSubheadline:
      "Commercial real estate places special demands. Location, usage concepts, economic framework conditions and long-term perspectives should all be considered holistically.",
    heroBtnPrimary: "Start analysis",
    heroBtnSecondary: "Send enquiry",
    section1Headline: "Commercial real estate requires a different perspective.",
    section1Text:
      "Unlike residential properties, commercial real estate is influenced by numerous factors. Usage, flexibility and economic potential play a central role.",
    section2Label: "Our assessment",
    section2Headline: "What we take into account",
    considerationCards: [
      {
        title: "Usage concepts",
        description:
          "Assessment of existing and possible usage concepts with regard to demand and economic viability.",
      },
      {
        title: "Location quality",
        description:
          "Classification of the micro-location by commercially relevant criteria: visibility, accessibility, environment.",
      },
      {
        title: "Yield potential",
        description:
          "Analysis of achievable rental income and long-term economic perspectives in the market context.",
      },
      {
        title: "Market environment",
        description:
          "Structured assessment of the demand situation, competitive environment and market development.",
      },
      {
        title: "Risks",
        description:
          "Early identification of vacancy risks, market changes and structural uncertainties.",
      },
      {
        title: "Long-term perspectives",
        description:
          "Consideration of the property as a strategic asset — beyond current usage and returns.",
      },
    ],
    section3Headline: "Structured decision foundations",
    section3Text:
      "Through structured analyses, economic potential, opportunities and risks can be better assessed. immowap combines experience, transparency and traceable decision-making foundations.",
    section3Btn: "Learn more about our analyses",
    section4Label: "Analysis",
    section4Headline: "Relevant analyses",
    cardLink: "Learn more",
    analysisCards: [
      {
        title: "Market value analysis",
        description: "Assessment of the property in the current market environment.",
        href: "/en/solutions",
      },
      {
        title: "Return analysis",
        description: "Evaluation of economic perspectives and yield potential.",
        href: "/en/solutions",
      },
      {
        title: "Risk analysis",
        description: "Early identification of possible uncertainties.",
        href: "/en/solutions",
      },
      {
        title: "Individual property analysis",
        description: "Consideration of specific requirements and objectives.",
        href: "/en/solutions",
      },
    ],
    section5Label: "Property types",
    section5Headline: "For different property types",
    typeCards: [
      {
        title: "Office properties",
        description:
          "Classic and modern office space — evaluated by location, flexibility and demand perspective.",
        image: "/images/gewerbeimmobilien/typ-1.jpg",
      },
      {
        title: "Retail space",
        description:
          "Retail and commercial properties with a focus on footfall, product mix and market conditions.",
        image: "/images/gewerbeimmobilien/typ-2.jpg",
      },
      {
        title: "Medical & healthcare properties",
        description:
          "Specialised healthcare properties with stable demand and a clear usage concept.",
        image: "/images/gewerbeimmobilien/typ-3.jpg",
      },
      {
        title: "Warehouse & logistics space",
        description:
          "Commercial usable space with a focus on infrastructure, connectivity and operational viability.",
        image: "/images/gewerbeimmobilien/typ-4.jpg",
      },
      {
        title: "Mixed-use properties",
        description:
          "Mixed-use properties with multiple income streams and individual development potential.",
        image: "/images/gewerbeimmobilien/typ-5.jpg",
      },
      {
        title: "Special-purpose properties",
        description:
          "Properties with a special purpose — individually evaluated by usage concept and market environment.",
        image: "/images/gewerbeimmobilien/typ-6.jpg",
      },
    ],
    section6Label: "What sets us apart",
    section6Headline: "Every commercial property follows its own framework.",
    section6Text:
      "Whether long-term letting, owner-occupation or strategic investment — immowap considers every property in relation to its individual requirements and perspectives.",
    section6TextSecondary:
      "There are no standard solutions. Every analysis is based on the individual context of the property and its use.",
    section6ListLabel: "Every analysis is based on",
    section6Items: [
      "Individual goals",
      "Usage concepts",
      "Business requirements",
      "Long-term priorities",
    ],
    section7Headline: "Long-term decisions require clarity.",
    principleCards: [
      {
        number: "01",
        title: "Transparency",
        description:
          "Structured foundations for well-founded decisions — traceable and tailored to the property.",
      },
      {
        number: "02",
        title: "Perspective",
        description:
          "Focus on sustainable developments and economic potential beyond short-term assessments.",
      },
      {
        number: "03",
        title: "Individuality",
        description:
          "No standard solutions — instead, a consideration in the respective context of the property and its use.",
      },
    ],
    ctaLabel: "Next step",
    ctaHeadline: "Understanding complexity. Recognising potential.",
    ctaText:
      "Well-founded analyses create transparency and support strategic decisions.",
    ctaBtnPrimary: "Start analysis",
    ctaBtnSecondary: "Get in touch",
  },
} as const;

export function GewerbeimmobilienPage({ locale }: GewerbeimmobilienPageProps) {
  const c = copy[locale];
  const contactHref = locale === "de" ? "/de/kontakt" : "/en/contact";
  const dashboardHref = locale === "de" ? "/de/dashboard" : "/en/dashboard";
  const solutionsHref = locale === "de" ? "/de/loesungen" : "/en/solutions";

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="overflow-hidden bg-cream">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid items-center gap-12 py-20 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-2 lg:gap-16 lg:py-0">
            <div className="lg:py-28">
              <p className="text-label mb-6 block text-gold-600">{c.heroLabel}</p>
              <h1 className="text-h1 text-brand-800">{c.heroHeadline}</h1>
              <div className="gold-rule mt-8" aria-hidden="true" />
              <p className="mt-8 max-w-lg text-lg leading-[1.8] text-muted">
                {c.heroSubheadline}
              </p>
              <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                <Button href={dashboardHref}>{c.heroBtnPrimary}</Button>
                <Button href={contactHref} variant="secondary">
                  {c.heroBtnSecondary}
                </Button>
              </div>
            </div>
            <div className="relative h-[420px] overflow-hidden rounded-3xl sm:h-[540px] lg:h-[calc(100svh-8rem)] lg:rounded-[2rem]">
              <Image
                src="/images/gewerbeimmobilien/hero.jpg"
                alt="Modern European office building — commercial real estate viewed strategically"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-bl from-[#0F3D2E]/10 to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

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
              src="/images/gewerbeimmobilien/section1.jpg"
              alt="Professional, strategic, executive — commercial property perspective"
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
              src="/images/gewerbeimmobilien/section3.jpg"
              alt="Corporate Advisory Workspace — laptop, reports, premium"
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

      {/* ─── SECTION 5: Property type cards (6) ──────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader label={c.section5Label} headline={c.section5Headline} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.typeCards.map((card) => (
            <article
              key={card.title}
              className="group relative h-[320px] overflow-hidden rounded-3xl sm:h-[360px]"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0b2c21]/90 via-[#0b2c21]/30 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-[1.7] text-white/70">
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
