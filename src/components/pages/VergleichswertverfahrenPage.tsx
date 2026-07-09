import Link from "next/link";
import { SolutionBreadcrumb } from "@/components/solutions/SolutionBreadcrumb";
import { SolutionPageHero } from "@/components/solutions/SolutionPageHero";
import { SolutionProcessSteps } from "@/components/solutions/SolutionProcessSteps";
import { RelatedSolutionsSection } from "@/components/solutions/RelatedSolutionsSection";
import { ProductSplitSection } from "@/components/ui/ProductSplitSection";
import { InformationCard } from "@/components/ui/cards";
import { PageBottomSpacer } from "@/components/ui/PageBottomSpacer";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";

interface VergleichswertverfahrenPageProps {
  locale: Locale;
}

const copy = {
  de: {
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

  return (
    <>
      <SolutionBreadcrumb
        locale={locale}
        category="analyses"
        currentTitle={c.breadcrumbCurrent}
      />

      <SolutionPageHero
        label={c.heroLabel}
        headline={c.heroHeadline}
        primaryHref={dashboardHref}
        primaryLabel={c.heroBtnPrimary}
        secondaryHref={contactHref}
        secondaryLabel={c.heroBtnSecondary}
        visual="valuation"
        backgroundClassName="bg-surface"
      >
        <p className="mt-8 text-lg leading-[1.8] text-muted">{c.heroSubheadline}</p>
      </SolutionPageHero>

      {/* ─── SECTION 1: Introduction ──────────────────────────────────────── */}
      <Section>
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
      <Section variant="muted">
        <SectionHeader label={c.section2Label} headline={c.section2Headline} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {c.propertyCards.map((card) => (
            <InformationCard
              key={card.title}
              title={card.title}
              description={card.description}
              className="h-full"
            />
          ))}
        </div>
      </Section>

      {/* ─── SECTION 3: Factors + image ───────────────────────────────────── */}
      <Section>
        <ProductSplitSection
          headline={c.section3Headline}
          text={
            <ul className="space-y-4" role="list">
              {c.section3Factors.map((factor) => (
                <li key={factor} className="flex items-baseline gap-4">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                  <span className="text-lg leading-[1.7] text-brand-800">{factor}</span>
                </li>
              ))}
            </ul>
          }
          visual="valuation"
        />
      </Section>

      {/* ─── SECTION 4: Process ───────────────────────────────────────────── */}
      <SolutionProcessSteps
        label={c.section4Label}
        headline={c.section4Headline}
        steps={c.processCards}
      />

      {/* ─── SECTION 5: Advantages ────────────────────────────────────────── */}
      <Section>
        <SectionHeader label={c.section5Label} headline={c.section5Headline} />
        <div className="grid gap-6 md:grid-cols-3">
          {c.advantageCards.map((card) => (
            <InformationCard
              key={card.title}
              title={card.title}
              description={card.description}
              className="h-full"
            />
          ))}
        </div>
      </Section>

      {/* ─── SECTION 6: Limitations ───────────────────────────────────────── */}
      <Section variant="muted">
        <SectionHeader label={c.section6Label} headline={c.section6Headline} />
        <div className="grid gap-6 md:grid-cols-3">
          {c.limitationCards.map((card) => (
            <InformationCard
              key={card.title}
              title={card.title}
              description={card.description}
              className="h-full"
            />
          ))}
        </div>
      </Section>

      {/* ─── SECTION 7: ImmoWertV editorial ───────────────────────────────── */}
      <Section>
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
      <Section variant="muted">
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

      <RelatedSolutionsSection locale={locale} pageKey="vergleichswertverfahren" />

      <PageBottomSpacer />
    </>
  );
}
