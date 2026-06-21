import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SolutionHeroSection } from "@/components/ui/SolutionHeroSection";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";

interface VergleichswertverfahrenPageProps {
  locale: Locale;
}

const HERO_IMAGE = "/images/vergleichswertverfahren/hero.jpg";
const SECTION3_IMAGE = "/images/vergleichswertverfahren/section3.jpg";

const copy = {
  de: {
    breadcrumbSolutions: "Lösungen",
    breadcrumbAnalyses: "Analysen",
    breadcrumbCurrent: "Vergleichswertverfahren",
    heroLabel: "Analysen",
    heroHeadline: "Vergleichswertverfahren verständlich erklärt",
    heroSubheadline:
      "Immobilienwerte auf Basis vergleichbarer Objekte nachvollziehbar einordnen.",
    heroBtnPrimary: "Analyse starten",
    heroBtnSecondary: "Anfrage senden",
    section1Headline: "Was ist das Vergleichswertverfahren?",
    section1Paragraphs: [
      "Das Vergleichswertverfahren ist eines von drei anerkannten Wertermittlungsverfahren in Deutschland. Grundlage sind tatsächlich erzielte Kaufpreise vergleichbarer Immobilien, die unter ähnlichen Marktbedingungen veräußert wurden. Aus diesen Referenzobjekten wird der Wert der zu bewertenden Immobilie abgeleitet.",
      "Innerhalb der Immobilienwertermittlungsverordnung (ImmoWertV) bildet das Vergleichswertverfahren die marktorientierte Variante der Wertermittlung. Es kommt vor allem dann zum Einsatz, wenn ausreichend geeignete Vergleichsdaten vorliegen und das Objekt sich mit anderen Transaktionen am Markt vergleichen lässt.",
      "Typische Einsatzgebiete sind Eigentumswohnungen, Einfamilienhäuser, Reihenhäuser und Baugrundstücke – also Objektarten, für die regelmäßig Kaufpreise dokumentiert werden. Der enge Marktbezug macht das Verfahren besonders nachvollziehbar: Der Wert orientiert sich an dem, was Käufer und Verkäufer in vergleichbaren Situationen tatsächlich vereinbart haben.",
      "Das Ergebnis der Anwendung ist der Verkehrswert – den Preis, der im gewöhnlichen Geschäftsverkehr unter Berücksichtigung der rechtlichen Gegebenheiten, der tatsächlichen Eigenschaften und der Lage des Grundstücks erzielbar wäre. Dabei werden Abweichungen zwischen Bewertungsobjekt und Vergleichsobjekten systematisch berücksichtigt und angepasst.",
    ],
    section2Label: "Einsatzgebiete",
    section2Headline: "Für welche Immobilien eignet sich das Verfahren?",
    propertyCards: [
      {
        title: "Eigentumswohnungen",
        description: "Marktpreise ähnlicher Wohnungen dienen als Grundlage.",
      },
      {
        title: "Einfamilienhäuser",
        description: "Vergleich mit ähnlichen Objekten hinsichtlich Lage und Ausstattung.",
      },
      {
        title: "Reihenhäuser",
        description: "Berücksichtigung marktüblicher Verkaufspreise.",
      },
      {
        title: "Baugrundstücke",
        description: "Ableitung von Werten über vergleichbare Grundstücke.",
      },
    ],
    section3Headline: "Welche Faktoren beeinflussen den Vergleichswert?",
    section3Factors: [
      "Lage",
      "Mikrolage",
      "Wohnfläche",
      "Grundstücksgröße",
      "Baujahr",
      "Ausstattung",
      "Modernisierungen",
      "Energieeffizienz",
    ],
    section4Label: "Ablauf",
    section4Headline: "Wie läuft die Bewertung ab?",
    processCards: [
      {
        title: "Vergleichsobjekte auswählen",
        description: "Geeignete Verkäufe werden identifiziert.",
      },
      {
        title: "Unterschiede analysieren",
        description: "Abweichungen werden berücksichtigt.",
      },
      {
        title: "Marktanpassung vornehmen",
        description: "Objekte werden vergleichbar gemacht.",
      },
      {
        title: "Verkehrswert ableiten",
        description: "Ein nachvollziehbarer Marktwert wird ermittelt.",
      },
    ],
    section5Label: "Vorteile",
    section5Headline: "Vorteile des Vergleichswertverfahrens",
    advantageCards: [
      {
        title: "Hohe Marktnähe",
        description: "Orientierung an realen Kaufpreisen.",
      },
      {
        title: "Transparenz",
        description: "Nachvollziehbare Wertermittlung.",
      },
      {
        title: "Besonders geeignet für Wohnimmobilien",
        description: "Vor allem bei Eigentumswohnungen und Einfamilienhäusern.",
      },
    ],
    section6Label: "Grenzen",
    section6Headline: "Grenzen des Vergleichswertverfahrens",
    limitationCards: [
      {
        title: "Wenige Vergleichsdaten",
        description: "Nicht in allen Regionen ausreichend verfügbar.",
      },
      {
        title: "Individuelle Besonderheiten",
        description: "Spezielle Objekte sind schwer vergleichbar.",
      },
      {
        title: "Marktschwankungen",
        description: "Preisänderungen beeinflussen die Aussagekraft.",
      },
    ],
    section7Label: "ImmoWertV",
    section7Headline: "Vergleichswertverfahren nach ImmoWertV",
    section7Paragraphs: [
      "Die ImmoWertV definiert den Rahmen für die Wertermittlung von Immobilien in Deutschland. Das Vergleichswertverfahren nimmt darin eine zentrale Rolle ein, wenn der Marktwert aus vergleichbaren Transaktionen abgeleitet werden soll. Die Verordnung legt fest, welche Vergleichsfaktoren zu berücksichtigen sind und wie Abweichungen zwischen Objekten zu behandeln sind.",
      "Entscheidend ist die Marktwertorientierung: Nicht individuelle Wunschvorstellungen, sondern das tatsächliche Marktgeschehen bildet die Grundlage. Lage, Größe, Zustand, Ausstattung und weitere Merkmale werden bei der Anpassung der Vergleichspreise systematisch einbezogen.",
      "Die Qualität der Vergleichsdaten bestimmt maßgeblich die Aussagekraft des Ergebnisses. Nur wenn ausreichend aktuelle und sachgerechte Referenzobjekte vorliegen, lässt sich ein belastbarer Verkehrswert ableiten. Deshalb gehört die sorgfältige Auswahl und Prüfung der Vergleichsobjekte zu den wichtigsten Schritten der Wertermittlung.",
      "Gerade weil das Verfahren auf nachvollziehbaren Marktdaten basiert, gilt es als transparent und gut verständlich – vorausgesetzt, die zugrunde liegenden Annahmen und Anpassungen werden klar dargestellt.",
    ],
    section8Label: "Anwendung",
    section8Headline: "Wann ist das Vergleichswertverfahren besonders sinnvoll?",
    useCaseCards: [
      { title: "Kauf einer Eigentumswohnung", href: null },
      { title: "Verkauf eines Einfamilienhauses", href: null },
      {
        title: "Marktwertanalyse",
        href: "/de/loesungen/marktwertanalyse",
      },
      { title: "Finanzierungsgespräche", href: null },
      { title: "Erbschaft oder Schenkung", href: null },
      { title: "Vermögensübersicht", href: null },
    ],
    immowapLabel: "immowap",
    immowapHeadline: "Strukturierte Marktbetrachtung statt Schätzungen",
    immowapText:
      "immowap betrachtet Immobilien nicht isoliert. Je nach Objekt, Lage und Zielsetzung können unterschiedliche Verfahren sinnvoll sein. Das Vergleichswertverfahren stellt insbesondere bei Wohnimmobilien eine wichtige Grundlage für die Einordnung marktgerechter Werte dar. Die Analyse erfolgt stets individuell und orientiert sich an den Rahmenbedingungen des jeweiligen Projekts.",
    immowapBtnPrimary: "Analyse starten",
    immowapBtnSecondary: "Anfrage senden",
  },
  en: {
    breadcrumbSolutions: "Solutions",
    breadcrumbAnalyses: "Analyses",
    breadcrumbCurrent: "Sales comparison approach",
    heroLabel: "Analyses",
    heroHeadline: "Sales Comparison Approach",
    heroSubheadline:
      "Understanding property values through comparable market transactions.",
    heroBtnPrimary: "Start Analysis",
    heroBtnSecondary: "Send Request",
    section1Headline: "What is the sales comparison approach?",
    section1Paragraphs: [
      "The sales comparison approach is one of three recognised property valuation methods in Germany. It is based on actual purchase prices of comparable properties sold under similar market conditions. From these reference transactions, the value of the property being assessed is derived.",
      "Under the Immobilienwertermittlungsverordnung (ImmoWertV), the sales comparison approach represents the market-oriented form of valuation. It is applied when sufficient suitable comparable data is available and the property can be compared with other market transactions.",
      "Typical areas of application include condominiums, detached houses, terraced houses and building plots – property types for which purchase prices are regularly documented. The close link to the market makes the method particularly traceable: value is oriented towards what buyers and sellers have actually agreed in comparable situations.",
      "The result is fair market value (Verkehrswert) – the price achievable in ordinary business dealings, taking into account legal circumstances, actual characteristics and location. Differences between the subject property and comparables are systematically identified and adjusted.",
    ],
    section2Label: "Areas of application",
    section2Headline: "Which properties is the approach suitable for?",
    propertyCards: [
      {
        title: "Condominiums",
        description: "Market prices of similar apartments serve as the basis.",
      },
      {
        title: "Detached houses",
        description: "Comparison with similar properties in terms of location and fittings.",
      },
      {
        title: "Terraced houses",
        description: "Consideration of prevailing market sale prices.",
      },
      {
        title: "Building plots",
        description: "Derivation of values through comparable land parcels.",
      },
    ],
    section3Headline: "Which factors influence the comparison value?",
    section3Factors: [
      "Location",
      "Micro-location",
      "Living area",
      "Plot size",
      "Year of construction",
      "Fittings",
      "Modernisation",
      "Energy efficiency",
    ],
    section4Label: "Process",
    section4Headline: "How does the valuation work?",
    processCards: [
      {
        title: "Select comparables",
        description: "Suitable sales are identified.",
      },
      {
        title: "Analyse differences",
        description: "Deviations are taken into account.",
      },
      {
        title: "Apply market adjustments",
        description: "Properties are made comparable.",
      },
      {
        title: "Derive fair market value",
        description: "A traceable market value is determined.",
      },
    ],
    section5Label: "Advantages",
    section5Headline: "Advantages of the sales comparison approach",
    advantageCards: [
      {
        title: "High market relevance",
        description: "Orientation towards actual purchase prices.",
      },
      {
        title: "Transparency",
        description: "Traceable valuation.",
      },
      {
        title: "Especially suitable for residential property",
        description: "Particularly for condominiums and detached houses.",
      },
    ],
    section6Label: "Limitations",
    section6Headline: "Limitations of the sales comparison approach",
    limitationCards: [
      {
        title: "Limited comparable data",
        description: "Not sufficiently available in all regions.",
      },
      {
        title: "Individual characteristics",
        description: "Special properties are difficult to compare.",
      },
      {
        title: "Market fluctuations",
        description: "Price changes affect reliability.",
      },
    ],
    section7Label: "ImmoWertV",
    section7Headline: "Sales comparison approach under ImmoWertV",
    section7Paragraphs: [
      "The ImmoWertV defines the framework for property valuation in Germany. The sales comparison approach plays a central role when market value is to be derived from comparable transactions. The regulation specifies which comparison factors must be considered and how differences between properties are to be treated.",
      "Market value orientation is decisive: not individual wishes, but actual market activity forms the basis. Location, size, condition, fittings and other characteristics are systematically included when adjusting comparable prices.",
      "The quality of comparable data largely determines the reliability of the result. Only when sufficient current and appropriate reference properties are available can a robust fair market value be derived. Careful selection and review of comparables is therefore one of the most important steps in valuation.",
      "Because the method is based on traceable market data, it is considered transparent and readily understandable – provided the underlying assumptions and adjustments are clearly presented.",
    ],
    section8Label: "Application",
    section8Headline: "When is the sales comparison approach particularly useful?",
    useCaseCards: [
      { title: "Buying a condominium", href: null },
      { title: "Selling a detached house", href: null },
      {
        title: "Market value analysis",
        href: "/en/solutions/market-value-analysis",
      },
      { title: "Financing discussions", href: null },
      { title: "Inheritance or gift", href: null },
      { title: "Asset overview", href: null },
    ],
    immowapLabel: "immowap",
    immowapHeadline: "Structured market assessment instead of estimates",
    immowapText:
      "immowap does not consider properties in isolation. Depending on the property, location and objectives, different methods may be appropriate. The sales comparison approach is particularly important for residential property as a basis for assessing market-appropriate values. Every analysis is individual and aligned with the conditions of the respective project.",
    immowapBtnPrimary: "Start Analysis",
    immowapBtnSecondary: "Send Request",
  },
} as const;

export function VergleichswertverfahrenPage({ locale }: VergleichswertverfahrenPageProps) {
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
              <Link
                href={solutionsHref}
                className="transition-colors hover:text-brand-600"
              >
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
        primaryHref={dashboardHref}
        primaryLabel={c.heroBtnPrimary}
        secondaryHref={contactHref}
        secondaryLabel={c.heroBtnSecondary}
        imageSrc={HERO_IMAGE}
        imageAlt={
          locale === "de"
            ? "Mehrfamilienhäuser und Eigentumswohnungen in europäischer Wohnumgebung"
            : "Multi-family buildings and condominiums in a European residential setting"
        }
      >
        <p className="mt-8 text-lg leading-[1.8] text-muted">{c.heroSubheadline}</p>
      </SolutionHeroSection>

      {/* ─── SECTION 1: Introduction ──────────────────────────────────────── */}
      <Section className="bg-[#F7F5EF] py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-h2 text-brand-800">{c.section1Headline}</h2>
          <div className="gold-rule mt-8" aria-hidden="true" />
          <div className="mt-8 space-y-6">
            {c.section1Paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-lg leading-[1.8] text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── SECTION 2: Property types ────────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader label={c.section2Label} headline={c.section2Headline} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {c.propertyCards.map((card) => (
            <Card key={card.title} as="article" className="h-full">
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── SECTION 3: Factors + image ───────────────────────────────────── */}
      <Section className="bg-[#F7F5EF] py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-h2 text-brand-800">{c.section3Headline}</h2>
            <div className="gold-rule mt-8" aria-hidden="true" />
            <ul className="mt-10 space-y-4" role="list">
              {c.section3Factors.map((factor) => (
                <li key={factor} className="flex items-baseline gap-4">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                  <span className="text-lg leading-[1.7] text-brand-800">{factor}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[380px] overflow-hidden rounded-3xl sm:h-[480px]">
            <Image
              src={SECTION3_IMAGE}
              alt={
                locale === "de"
                  ? "Ruhiger Wohnstraßenzug mit europäischer Architektur"
                  : "Quiet residential street with European architecture"
              }
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* ─── SECTION 4: Process ───────────────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader label={c.section4Label} headline={c.section4Headline} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {c.processCards.map((card, index) => (
            <article
              key={card.title}
              className="card-premium flex h-full flex-col gap-4 p-8"
            >
              <span className="text-label text-gold-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-h3 text-brand-800">{card.title}</h3>
              <p className="text-base leading-[1.8] text-muted">{card.description}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ─── SECTION 5: Advantages ────────────────────────────────────────── */}
      <Section className="bg-[#F7F5EF] py-24 md:py-32">
        <SectionHeader label={c.section5Label} headline={c.section5Headline} />
        <div className="grid gap-6 md:grid-cols-3">
          {c.advantageCards.map((card) => (
            <Card key={card.title} as="article" className="h-full">
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── SECTION 6: Limitations ───────────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader label={c.section6Label} headline={c.section6Headline} />
        <div className="grid gap-6 md:grid-cols-3">
          {c.limitationCards.map((card) => (
            <Card key={card.title} as="article" className="h-full">
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─── SECTION 7: ImmoWertV editorial ───────────────────────────────── */}
      <Section className="bg-[#F7F5EF] py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-label mb-4 text-gold-600">{c.section7Label}</p>
          <h2 className="text-h2 text-brand-800">{c.section7Headline}</h2>
          <div className="gold-rule mt-8" aria-hidden="true" />
          <div className="mt-10 space-y-6">
            {c.section7Paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-lg leading-[1.85] text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── SECTION 8: Use cases ─────────────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader label={c.section8Label} headline={c.section8Headline} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.useCaseCards.map((card) =>
            card.href ? (
              <Link
                key={card.title}
                href={card.href}
                className="card-premium group flex min-h-[120px] items-center justify-center p-8 text-center no-underline"
              >
                <span className="text-h3 text-brand-800 transition-colors duration-300 group-hover:text-brand-600">
                  {card.title}
                </span>
              </Link>
            ) : (
              <div
                key={card.title}
                className="card-premium flex min-h-[120px] items-center justify-center p-8 text-center"
              >
                <span className="text-h3 text-brand-800">{card.title}</span>
              </div>
            ),
          )}
        </div>
      </Section>

      {/* ─── immowap CTA ──────────────────────────────────────────────────── */}
      <section className="bg-brand-800 px-6 pt-[140px] pb-[140px] text-white md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-label mb-6 block text-gold-500">{c.immowapLabel}</p>
          <h2 className="text-h2 text-white">{c.immowapHeadline}</h2>
          <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-[1.8] text-white/85">
            {c.immowapText}
          </p>
          <div className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Button href={dashboardHref} className="sm:w-auto">
              {c.immowapBtnPrimary}
            </Button>
            <Button
              href={contactHref}
              variant="white"
              className="border-white/35 !text-brand-800 hover:!text-brand-800 sm:w-auto"
            >
              {c.immowapBtnSecondary}
            </Button>
          </div>
        </div>
      </section>
      <div className="min-h-[100px] bg-[#F7F5EF]" aria-hidden="true" />
    </>
  );
}
