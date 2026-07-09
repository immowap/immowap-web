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

interface ErtragswertverfahrenPageProps {
  locale: Locale;
}

const cardTitleClass =
  "text-xl md:text-[22px] lg:text-[26px] font-semibold leading-[1.3] text-brand-800 break-words [overflow-wrap:anywhere] hyphens-auto";
const cardShellClass =
  "card-premium flex min-h-0 flex-col gap-4 overflow-visible p-6 md:p-8 lg:p-10";

const copy = {
  de: {
    breadcrumbCurrent: "Ertragswertverfahren",
    heroLabel: "Analysen",
    heroHeadline: "Ertragswertverfahren",
    heroSubheadline:
      "Wertermittlung von Renditeimmobilien nach den Grundsätzen der ImmoWertV.",
    heroText:
      "Das Ertragswertverfahren gehört zu den wichtigsten Verfahren der Immobilienbewertung. Es wird insbesondere bei vermieteten Immobilien, Mehrfamilienhäusern und Kapitalanlagen angewendet und orientiert sich an den nachhaltig erzielbaren Erträgen.",
    heroBtnPrimary: "Analyse starten",
    heroBtnSecondary: "Anfrage senden",
    sectionApplyLabel: "Einsatz",
    sectionApplyHeadline: "Wann wird das Ertragswertverfahren angewendet?",
    applyCards: [
      { title: "Eigentumswohnungen als Kapitalanlage", description: "" },
      { title: "Mehrfamilienhäuser", description: "" },
      { title: "Wohn- und Geschäftshäuser", description: "" },
      { title: "Gewerbeimmobilien", description: "" },
    ],
    sectionBasicsLabel: "Grundlagen",
    sectionBasicsHeadline: "Grundlagen des Ertragswertverfahrens",
    basicsCards: [
      { title: "Jahresrohertrag", description: "Nachhaltig erzielbare Mieteinnahmen pro Jahr." },
      { title: "Bewirtschaftungskosten", description: "Laufende Kosten der Immobilienbewirtschaftung." },
      { title: "Reinertrag", description: "Jahresrohertrag abzüglich Bewirtschaftungskosten." },
      { title: "Bodenwert", description: "Wert des Grundstücks, verzinst gesondert." },
      { title: "Liegenschaftszins", description: "Marktüblicher Zinssatz für die Kapitalisierung." },
      { title: "Restnutzungsdauer", description: "Verbleibende wirtschaftliche Nutzungsdauer des Gebäudes." },
    ],
    sectionProcessLabel: "Ablauf",
    sectionProcessHeadline: "Wie funktioniert das Verfahren?",
    processSteps: [
      { title: "Ermittlung der Mieteinnahmen", description: "" },
      { title: "Abzug der Bewirtschaftungskosten", description: "" },
      { title: "Berechnung des Reinertrags", description: "" },
      { title: "Berücksichtigung des Bodenwertes", description: "" },
      { title: "Kapitalisierung des Gebäudeertrags", description: "" },
      { title: "Ermittlung des Ertragswertes", description: "" },
    ],
    sectionFactorsHeadline: "Welche Faktoren beeinflussen den Ertragswert?",
    factors: [
      "Lage",
      "Mietniveau",
      "Leerstand",
      "Objektzustand",
      "Restnutzungsdauer",
      "Modernisierungsbedarf",
      "Marktsituation",
      "Zinsniveau",
    ],
    immowertvLabel: "ImmoWertV",
    immowertvHeadline: "Ertragswertverfahren nach ImmoWertV",
    immowertvParagraphs: [
      "Die Immobilienwertermittlungsverordnung (ImmoWertV) definiert den Rahmen für die Ertragswertermittlung in Deutschland. Im Mittelpunkt stehen nachhaltig erzielbare Erträge – nicht kurzfristige Sonderfaktoren oder individuelle Erwartungen.",
      "Der Liegenschaftszins spiegelt das marktübliche Verhältnis von Ertrag und Kapital wider. Die Restnutzungsdauer beschreibt, wie lange das Gebäude wirtschaftlich genutzt werden kann. Beide Größen beeinflussen die Kapitalisierung des Reinertrags maßgeblich.",
      "Eine Marktanpassung kann erforderlich sein, wenn der rechnerische Ertragswert vom aktuellen Marktgeschehen abweicht. So entsteht eine Einordnung, die sowohl die Ertragskraft als auch die Marktverhältnisse berücksichtigt.",
    ],
    sectionAdvantagesLabel: "Vorteile",
    sectionAdvantagesHeadline: "Vorteile des Ertragswertverfahrens",
    advantageCards: [
      { title: "Nachvollziehbare Struktur", description: "Klare Schritte von Rohertrag bis Ertragswert." },
      { title: "Geeignet für Renditeobjekte", description: "Besonders bei vermieteten Immobilien und Kapitalanlagen." },
      { title: "Orientierung an tatsächlichen Erträgen", description: "Fokus auf nachhaltig erzielbare Mieteinnahmen." },
      {
        title: "Berücksichtigung langfristiger Entwicklungen",
        description: "Restnutzungsdauer und Marktfaktoren fließen ein.",
      },
    ],
    sectionCompareLabel: "Verfahren",
    sectionCompareHeadline: "Vergleich der Bewertungsverfahren",
    compareCards: [
      {
        title: "Vergleichswertverfahren",
        description: "Geeignet für Eigentumswohnungen und Einfamilienhäuser.",
        href: "/de/loesungen/analysen/vergleichswertverfahren",
      },
      {
        title: "Ertragswertverfahren",
        description: "Geeignet für Kapitalanlagen und vermietete Immobilien.",
        href: null,
      },
      {
        title: "Sachwertverfahren",
        description: "Geeignet für eigengenutzte oder besondere Objekte.",
        href: "/de/loesungen/analysen/sachwertverfahren",
      },
    ],
    sectionSupportLabel: "immowap",
    sectionSupportHeadline: "Wie unterstützt immowap?",
    supportCards: [
      { title: "Strukturierte Analyse", description: "Systematische Einordnung der Ertragsfaktoren." },
      { title: "Individuelle Betrachtung", description: "Berücksichtigung von Objekt, Lage und Zielsetzung." },
      {
        title: "Berücksichtigung von Chancen und Risiken",
        description: "Ausgewogene Sicht auf Ertragspotenzial und Unsicherheiten.",
      },
      {
        title: "Nachvollziehbare Entscheidungsgrundlagen",
        description: "Transparente Herleitung statt pauschaler Einschätzungen.",
      },
    ],
    sectionAudienceLabel: "Zielgruppe",
    sectionAudienceHeadline: "Für wen eignet sich diese Analyse?",
    audienceCards: [
      "Kapitalanleger",
      "Eigentümer",
      "Käufer",
      "Mehrfamilienhaus-Investoren",
      "Gewerbeimmobilien-Investoren",
    ],
    ctaHeadline: "Fundierte Entscheidungen beginnen mit einer strukturierten Analyse.",
    ctaText:
      "Das Ertragswertverfahren hilft dabei, die Ertragskraft einer Immobilie besser einzuordnen und Entscheidungen auf eine nachvollziehbare Grundlage zu stellen.",
    ctaBtnPrimary: "Analyse starten",
    ctaBtnSecondary: "Anfrage senden",
  },
  en: {
    breadcrumbCurrent: "Income approach",
    heroLabel: "Analyses",
    heroHeadline: "Income Approach",
    heroSubheadline:
      "Valuation of investment properties based on the principles of ImmoWertV.",
    heroText:
      "The income approach is one of the most important property valuation methods. It is applied especially to rented properties, multi-family buildings and investments, and is based on sustainably achievable income.",
    heroBtnPrimary: "Start analysis",
    heroBtnSecondary: "Send request",
    sectionApplyLabel: "Application",
    sectionApplyHeadline: "When is the income approach applied?",
    applyCards: [
      { title: "Condominiums as investments", description: "" },
      { title: "Multi-family buildings", description: "" },
      { title: "Residential and commercial buildings", description: "" },
      { title: "Commercial properties", description: "" },
    ],
    sectionBasicsLabel: "Fundamentals",
    sectionBasicsHeadline: "Fundamentals of the income approach",
    basicsCards: [
      { title: "Annual gross income", description: "Sustainably achievable rental income per year." },
      { title: "Operating costs", description: "Ongoing costs of property management." },
      { title: "Net income", description: "Annual gross income minus operating costs." },
      { title: "Land value", description: "Value of the land, capitalised separately." },
      { title: "Property yield", description: "Market rate for capitalisation." },
      { title: "Remaining useful life", description: "Remaining economic life of the building." },
    ],
    sectionProcessLabel: "Process",
    sectionProcessHeadline: "How does the method work?",
    processSteps: [
      { title: "Determine rental income", description: "" },
      { title: "Deduct operating costs", description: "" },
      { title: "Calculate net income", description: "" },
      { title: "Consider land value", description: "" },
      { title: "Capitalise building income", description: "" },
      { title: "Determine income value", description: "" },
    ],
    sectionFactorsHeadline: "Which factors influence income value?",
    factors: [
      "Location",
      "Rent level",
      "Vacancy",
      "Property condition",
      "Remaining useful life",
      "Modernisation needs",
      "Market situation",
      "Interest rate level",
    ],
    immowertvLabel: "ImmoWertV",
    immowertvHeadline: "Income approach under ImmoWertV",
    immowertvParagraphs: [
      "The Immobilienwertermittlungsverordnung (ImmoWertV) defines the framework for income-based valuation in Germany. The focus is on sustainably achievable income – not short-term special factors or individual expectations.",
      "The property yield reflects the market relationship between income and capital. Remaining useful life describes how long the building can be used economically. Both factors significantly influence the capitalisation of net income.",
      "Market adjustment may be required when the calculated income value differs from current market activity. This produces an assessment that considers both earning capacity and market conditions.",
    ],
    sectionAdvantagesLabel: "Advantages",
    sectionAdvantagesHeadline: "Advantages of the income approach",
    advantageCards: [
      { title: "Traceable structure", description: "Clear steps from gross income to income value." },
      { title: "Suitable for yield properties", description: "Especially for rented properties and investments." },
      { title: "Orientation towards actual income", description: "Focus on sustainably achievable rental income." },
      {
        title: "Consideration of long-term developments",
        description: "Remaining useful life and market factors are included.",
      },
    ],
    sectionCompareLabel: "Methods",
    sectionCompareHeadline: "Comparison of valuation methods",
    compareCards: [
      {
        title: "Sales comparison approach",
        description: "Suitable for condominiums and detached houses.",
        href: "/en/solutions/analyses/sales-comparison-approach",
      },
      {
        title: "Income approach",
        description: "Suitable for investments and rented properties.",
        href: null,
      },
      {
        title: "Cost approach",
        description: "Suitable for owner-occupied or special properties.",
        href: "/en/solutions/analyses/cost-approach",
      },
    ],
    sectionSupportLabel: "immowap",
    sectionSupportHeadline: "How does immowap support?",
    supportCards: [
      { title: "Structured analysis", description: "Systematic assessment of income factors." },
      { title: "Individual assessment", description: "Consideration of property, location and objectives." },
      {
        title: "Consideration of opportunities and risks",
        description: "Balanced view of yield potential and uncertainties.",
      },
      {
        title: "Traceable decision foundations",
        description: "Transparent derivation instead of blanket estimates.",
      },
    ],
    sectionAudienceLabel: "Audience",
    sectionAudienceHeadline: "Who is this analysis suitable for?",
    audienceCards: [
      "Investors",
      "Owners",
      "Buyers",
      "Multi-family property investors",
      "Commercial property investors",
    ],
    ctaHeadline: "Well-founded decisions begin with a structured analysis.",
    ctaText:
      "The income approach helps to better assess a property's earning capacity and base decisions on a traceable foundation.",
    ctaBtnPrimary: "Start analysis",
    ctaBtnSecondary: "Send request",
  },
} as const;

export function ErtragswertverfahrenPage({ locale }: ErtragswertverfahrenPageProps) {
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
        visual="cashflow"
        backgroundClassName="bg-surface"
      >
        <p className="mt-8 text-xl font-medium leading-[1.6] text-brand-800">{c.heroSubheadline}</p>
        <p className="mt-6 text-lg leading-[1.8] text-muted">{c.heroText}</p>
      </SolutionPageHero>

      {/* ─── WHEN APPLIED ─────────────────────────────────────────────────── */}
      <Section variant="muted">
        <SectionHeader label={c.sectionApplyLabel} headline={c.sectionApplyHeadline} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {c.applyCards.map((card) => (
            <article key={card.title} className={cardShellClass}>
              <h3 className={cardTitleClass}>{card.title}</h3>
            </article>
          ))}
        </div>
      </Section>

      {/* ─── BASICS ───────────────────────────────────────────────────────── */}
      <Section>
        <SectionHeader label={c.sectionBasicsLabel} headline={c.sectionBasicsHeadline} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.basicsCards.map((card) => (
            <InformationCard
              key={card.title}
              title={card.title}
              description={card.description}
              className="h-full"
            />
          ))}
        </div>
      </Section>

      {/* ─── PROCESS ──────────────────────────────────────────────────────── */}
      <SolutionProcessSteps
        label={c.sectionProcessLabel}
        headline={c.sectionProcessHeadline}
        steps={c.processSteps}
      />

      {/* ─── FACTORS ──────────────────────────────────────────────────────── */}
      <Section>
        <SectionHeader headline={c.sectionFactorsHeadline} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.factors.map((factor) => (
            <article
              key={factor}
              className={`${cardShellClass} min-h-[100px] items-center justify-center text-center`}
            >
              <span className={`${cardTitleClass} text-lg md:text-xl lg:text-[22px]`}>
                {factor}
              </span>
            </article>
          ))}
        </div>
      </Section>

      {/* ─── IMMOWERTV ────────────────────────────────────────────────────── */}
      <Section variant="muted">
        <p className="text-label mb-8 text-gold-600">{c.immowertvLabel}</p>
        <ProductSplitSection
          headline={c.immowertvHeadline}
          text={
            <div className="space-y-6">
              {c.immowertvParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-lg leading-[1.85] text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          }
          visual="cashflow"
        />
      </Section>

      {/* ─── ADVANTAGES ───────────────────────────────────────────────────── */}
      <Section>
        <SectionHeader
          label={c.sectionAdvantagesLabel}
          headline={c.sectionAdvantagesHeadline}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

      {/* ─── COMPARISON ───────────────────────────────────────────────────── */}
      <Section variant="muted">
        <SectionHeader label={c.sectionCompareLabel} headline={c.sectionCompareHeadline} />
        <div className="grid gap-6 lg:grid-cols-3">
          {c.compareCards.map((card) => {
            const content = (
              <>
                <h3 className={cardTitleClass}>{card.title}</h3>
                <p className="text-[15px] md:text-base leading-[1.4] text-muted break-words [overflow-wrap:anywhere] hyphens-auto">
                  {card.description}
                </p>
              </>
            );

            if (card.href) {
              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className={`${cardShellClass} h-full no-underline transition-colors hover:border-gold-500/25`}
                >
                  {content}
                </Link>
              );
            }

            return (
              <article
                key={card.title}
                className={`${cardShellClass} h-full border-gold-500/20 bg-cream`}
              >
                {content}
              </article>
            );
          })}
        </div>
      </Section>

      {/* ─── IMMOWAP SUPPORT ──────────────────────────────────────────────── */}
      <Section>
        <SectionHeader label={c.sectionSupportLabel} headline={c.sectionSupportHeadline} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {c.supportCards.map((card) => (
            <InformationCard
              key={card.title}
              title={card.title}
              description={card.description}
              className="h-full"
            />
          ))}
        </div>
      </Section>

      {/* ─── AUDIENCE ─────────────────────────────────────────────────────── */}
      <Section variant="muted">
        <SectionHeader label={c.sectionAudienceLabel} headline={c.sectionAudienceHeadline} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.audienceCards.map((title) => (
            <article
              key={title}
              className={`${cardShellClass} min-h-[120px] items-center justify-center text-center`}
            >
              <h3 className={`${cardTitleClass} text-lg md:text-xl lg:text-[22px]`}>{title}</h3>
            </article>
          ))}
        </div>
      </Section>

      <RelatedSolutionsSection locale={locale} pageKey="ertragswertverfahren" />

      <PageBottomSpacer />
    </>
  );
}
