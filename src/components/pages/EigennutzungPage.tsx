import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";

interface EigennutzungPageProps {
  locale: Locale;
}

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85";
const SECTION1_IMAGE =
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=85";
const SECTION3_IMAGE =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85";

const considerationCards = [
  {
    title: "Persönliche Ziele",
    description:
      "Was wünschen Sie sich von Ihrer Immobilie? Ruhe, Nähe zur Familie, mehr Raum – individuelle Ziele bestimmen die Analyse.",
  },
  {
    title: "Familiengröße und Lebenssituation",
    description:
      "Aktuelle und zukünftige Haushaltsgröße sowie Lebensphasen fließen in die Bewertung mit ein.",
  },
  {
    title: "Finanzielle Belastbarkeit",
    description:
      "Kaufpreis, Nebenkosten, Finanzierungsstruktur und monatliche Belastung werden realistisch eingeordnet.",
  },
  {
    title: "Lage und Infrastruktur",
    description:
      "Nahversorgung, Schulen, Anbindung und Quartiersentwicklung beeinflussen die langfristige Wohnqualität.",
  },
  {
    title: "Zukunftsperspektiven",
    description:
      "Wie verändert sich Ihre Lebenssituation in 5, 10 oder 20 Jahren? Die Analyse berücksichtigt Ihre langfristige Perspektive.",
  },
  {
    title: "Chancen und Risiken",
    description:
      "Objektive Einschätzung von Potenzialen und Risiken – ohne Schönfärberei, mit klarem Fokus auf Ihre Situation.",
  },
];

const analysisCards = [
  {
    title: "Marktwertanalyse",
    description:
      "Einordnung des Kaufpreises im aktuellen Marktkontext – für eine realistische Beurteilung des Angebots.",
    href: "/de/loesungen",
  },
  {
    title: "Standortanalyse",
    description:
      "Bewertung der Lage nach wohnrelevanten Kriterien: Infrastruktur, Quartiersentwicklung, Anbindung.",
    href: "/de/loesungen",
  },
  {
    title: "Risikoanalyse",
    description:
      "Strukturierte Einschätzung von Risiken – baulich, finanziell und im Hinblick auf Ihre persönliche Situation.",
    href: "/de/loesungen",
  },
  {
    title: "Individuelle Immobilienanalyse",
    description:
      "Umfassende Betrachtung einer konkreten Immobilie im Kontext Ihrer individuellen Ziele und Rahmenbedingungen.",
    href: "/de/loesungen",
  },
];

const lifeSituationCards = [
  {
    title: "Erstimmobilie",
    description:
      "Der Schritt in die erste eigene Immobilie – strukturiert und fundiert begleitet.",
    image: "/images/eigennutzung/erstimmobilie.jpg",
  },
  {
    title: "Familien mit Kindern",
    description:
      "Mehr Raum, sichere Lage, langfristige Stabilität – Prioritäten, die wirklich zählen.",
    image: "/images/eigennutzung/familien.jpg",
  },
  {
    title: "Altersgerechtes Wohnen",
    description:
      "Komfort, Barrierefreiheit und die richtigen Rahmenbedingungen für die nächste Lebensphase.",
    image: "/images/eigennutzung/altersgerecht.jpg",
  },
  {
    title: "Langfristige Wohnplanung",
    description: "Immobilienentscheidungen, die heute passen und morgen Bestand haben.",
    image: "/images/eigennutzung/langfristig.jpg",
  },
];

export function EigennutzungPage({ locale }: EigennutzungPageProps) {
  const contactHref = locale === "de" ? "/de/kontakt" : "/en/contact";
  const dashboardHref = locale === "de" ? "/de/dashboard" : "/en/dashboard";
  const solutionsHref = locale === "de" ? "/de/loesungen" : "/en/solutions";

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="overflow-hidden bg-cream">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid items-center gap-12 py-20 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-2 lg:gap-16 lg:py-0">
            {/* Left – text */}
            <div className="lg:py-28">
              <p className="text-label mb-6 block text-gold-600">Für Ihre Ziele</p>
              <h1 className="text-h1 text-brand-800">
                Immobilienentscheidungen für die Eigennutzung. Individuell betrachtet.
              </h1>
              <div className="gold-rule mt-8" aria-hidden="true" />
              <p className="mt-8 max-w-lg text-lg leading-[1.8] text-muted">
                Jede Lebenssituation ist unterschiedlich. Deshalb analysiert immowap Immobilien
                nicht nach einem starren Schema, sondern im Kontext Ihrer persönlichen Ziele,
                Prioritäten und Rahmenbedingungen.
              </p>
              <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                <Button href={dashboardHref}>Analyse starten</Button>
                <Button href={contactHref} variant="secondary">
                  Anfrage senden
                </Button>
              </div>
            </div>

            {/* Right – image */}
            <div className="relative h-[420px] overflow-hidden rounded-3xl sm:h-[540px] lg:h-[calc(100svh-8rem)] lg:rounded-[2rem]">
              <Image
                src={HERO_IMAGE}
                alt="Warmes europäisches Wohninterieur mit natürlichem Licht"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle warmth veil */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-bl from-[#B9965B]/8 to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 1: Individuelle Betrachtung ─────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left – text */}
          <div>
            <h2 className="text-h2 text-brand-800">
              Nicht jede passende Immobilie ist für jeden Menschen die richtige Entscheidung.
            </h2>
            <div className="gold-rule mt-8" aria-hidden="true" />
            <p className="mt-8 text-lg leading-[1.8] text-muted">
              Eine Immobilie kann auf dem Papier attraktiv erscheinen und dennoch nicht zu den
              individuellen Bedürfnissen, der finanziellen Situation oder den langfristigen Plänen
              passen. Deshalb betrachten wir Immobilien immer im Zusammenhang mit den Menschen,
              die sie nutzen möchten.
            </p>
          </div>

          {/* Right – image */}
          <div className="relative h-[380px] overflow-hidden rounded-3xl sm:h-[480px]">
            <Image
              src={SECTION1_IMAGE}
              alt="Gemütliches Wohnambiente – Komfort, Lifestyle, Zuhause"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* ─── SECTION 2: Was wir berücksichtigen ──────────────────────────── */}
      <Section className="py-24 md:py-32">
        <SectionHeader label="Unsere Betrachtung" headline="Was wir berücksichtigen" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {considerationCards.map((card) => (
            <Card key={card.title} as="article">
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── SECTION 3: Strukturierte Betrachtung ────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left – image */}
          <div className="relative h-[380px] overflow-hidden rounded-3xl sm:h-[480px]">
            <Image
              src={SECTION3_IMAGE}
              alt="Ruhiger Arbeitsbereich mit Laptop, Unterlagen, Kaffee und natürlichem Licht"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right – text */}
          <div>
            <h2 className="text-h2 text-brand-800">
              Strukturierte Betrachtung statt pauschaler Empfehlungen
            </h2>
            <div className="gold-rule mt-8" aria-hidden="true" />
            <p className="mt-8 text-lg leading-[1.8] text-muted">
              immowap kombiniert praktische Erfahrung mit datenbasierten Analysen und
              KI-gestützten Auswertungen. Dadurch entstehen nachvollziehbare
              Entscheidungsgrundlagen, die sich an Ihrer individuellen Situation orientieren.
            </p>
            <div className="mt-10">
              <Button href={solutionsHref} variant="secondary">
                Mehr über unsere Analysen
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── SECTION 4: Mögliche Analysen ────────────────────────────────── */}
      <Section className="py-24 md:py-32">
        <SectionHeader label="Analyse" headline="Mögliche Analysen" />
        <div className="grid gap-6 md:grid-cols-2">
          {analysisCards.map((card) => (
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
                Mehr erfahren
                <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ─── SECTION 5: Lebenssituationen ────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader
          label="Menschen & Situationen"
          headline="Für unterschiedliche Lebenssituationen"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {lifeSituationCards.map((card) => (
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
                className="absolute inset-0 bg-gradient-to-t from-[#0b2c21]/85 via-[#0b2c21]/25 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                <p className="mt-2 max-w-sm text-base leading-[1.7] text-white/80">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ─── SECTION 6: Differentiator (dark green) ─────────────────────── */}
      <section className="bg-brand-800 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left */}
            <div>
              <p className="text-label mb-6 block text-gold-500">Was uns unterscheidet</p>
              <h2 className="text-h2 text-white">
                Die richtige Immobilie beginnt mit der richtigen Perspektive.
              </h2>
              <div className="gold-rule mt-8" aria-hidden="true" />
              <p className="mt-8 text-lg leading-[1.8] text-white/80">
                Fundierte Entscheidungen entstehen dann, wenn persönliche Ziele und objektive
                Analysen zusammengeführt werden.
              </p>
              <p className="mt-6 text-lg leading-[1.8] text-white/65">
                Wir betrachten nicht jede Immobilie auf dieselbe Weise. Jede Analyse orientiert
                sich an den individuellen Gegebenheiten des Menschen, der sie nutzen möchte.
              </p>
            </div>

            {/* Right */}
            <div className="lg:pt-20">
              <p className="text-label mb-10 block text-gold-500">Jede Analyse basiert auf</p>
              <ul className="space-y-7" role="list">
                {[
                  "Individuellen Zielen",
                  "Persönlichen Prioritäten",
                  "Lebensverhältnissen",
                  "Erwartungen",
                ].map((item, i) => (
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

      {/* ─── FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <p className="text-label mb-6 block text-gold-600">Nächster Schritt</p>
          <h2 className="text-h2 text-brand-800">Mit Klarheit entscheiden.</h2>
          <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
          <p className="mx-auto mt-8 max-w-xl text-lg leading-[1.8] text-muted">
            Strukturierte Analysen helfen dabei, Immobilienentscheidungen besser einzuordnen und
            individuelle Ziele langfristig zu unterstützen.
          </p>
          <div className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Button href={dashboardHref} className="sm:w-auto">
              Analyse starten
            </Button>
            <Button href={contactHref} variant="secondary" className="sm:w-auto">
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
