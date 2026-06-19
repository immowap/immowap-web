import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import {
  getRelatedArticles,
  propertyKnowledgeOverview,
  propertyKnowledgeUi,
} from "@/lib/i18n/property-knowledge";
import {
  ArticleH2,
  ArticleMetaRow,
  ArticleP,
  CategoryBadge,
  EditorialList,
  PropertyKnowledgeBackLink,
  PropertyKnowledgeBreadcrumb,
  PropertyKnowledgePageButtons,
} from "@/components/property-knowledge/ArticleUi";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";

const HERO_IMAGE = "/images/wissen/immobilienlexikon-hero.jpg";

const copy = {
  de: {
    breadcrumbTitle: "Immobilienlexikon",
    heroAriaLabel:
      "Immobilienlexikon – Unterlagen, Grundrisse und Notizblock auf einem Schreibtisch",
    heroLabel: "Wissen · Immobilienwissen",
    heroTitle: "Immobilienlexikon",
    heroSubheadline:
      "Die wichtigsten Begriffe rund um Immobilien einfach und verständlich erklärt.",
    pageTitle: "Immobilienlexikon – Die wichtigsten Begriffe einfach erklärt",
    pageSubtitle: "Die wichtigsten Begriffe einfach erklärt",
    readMinutes: 8,
    intro:
      "Wer sich mit Immobilien beschäftigt, stößt schnell auf zahlreiche Fachbegriffe. Gerade beim Kauf, bei der Finanzierung oder bei der Vermietung ist es wichtig, die wichtigsten Begriffe zu verstehen. Dieses Immobilienlexikon erklärt häufig verwendete Begriffe einfach und verständlich und hilft dabei, Zusammenhänge besser einzuordnen.",
    afa: {
      title: "AfA (Absetzung für Abnutzung)",
      paragraphs: [
        "Die Abkürzung AfA steht für „Absetzung für Abnutzung“. Dabei handelt es sich um die steuerliche Abschreibung einer Immobilie.",
        "Vermieter können den Gebäudeanteil über viele Jahre steuerlich geltend machen und dadurch ihre Steuerlast reduzieren. Das Grundstück selbst kann nicht abgeschrieben werden.",
        "Die Höhe der AfA richtet sich unter anderem nach dem Baujahr der Immobilie und den jeweils geltenden gesetzlichen Vorschriften.",
      ],
    },
    cashflow: {
      title: "Cashflow",
      intro: [
        "Der Cashflow beschreibt den monatlichen oder jährlichen Überschuss beziehungsweise Fehlbetrag einer Immobilie.",
        "Er ergibt sich aus:",
        "Mieteinnahmen minus",
      ],
      items: [
        "Darlehensrate",
        "nicht umlagefähige Nebenkosten",
        "Instandhaltungskosten",
        "Verwaltungskosten",
        "Rücklagen",
      ],
      outro:
        "Ein positiver Cashflow bedeutet, dass die Immobilie mehr Einnahmen als Ausgaben erzeugt. Ein negativer Cashflow bedeutet dagegen, dass zusätzliche Eigenmittel erforderlich sind.",
    },
    mietrendite: {
      title: "Mietrendite",
      paragraphs: [
        "Die Mietrendite zeigt, wie rentabel eine vermietete Immobilie ist.",
        "Eine einfache Berechnung lautet:",
        "Jahresnettokaltmiete ÷ Kaufpreis × 100",
        "Je höher die Mietrendite, desto attraktiver kann eine Kapitalanlage sein. Allerdings sollten auch Instandhaltungskosten, Leerstand und Finanzierungskosten berücksichtigt werden.",
      ],
    },
    kaufpreisfaktor: {
      title: "Kaufpreisfaktor",
      paragraphs: [
        "Der Kaufpreisfaktor beschreibt das Verhältnis zwischen Kaufpreis und Jahresnettokaltmiete.",
        "Berechnung:",
        "Kaufpreis ÷ Jahresnettokaltmiete",
        "Ein Faktor von 20 bedeutet beispielsweise, dass theoretisch zwanzig Jahresmieten benötigt werden, um den Kaufpreis zu erwirtschaften.",
        "Je nach Standort und Objektart gelten unterschiedliche Faktoren als marktüblich.",
      ],
    },
    grundschuld: {
      title: "Grundschuld",
      paragraphs: [
        "Die Grundschuld ist eine Sicherheit für die Bank und wird im Grundbuch eingetragen.",
        "Falls ein Darlehen nicht zurückgezahlt wird, kann die Bank ihre Forderung über die Immobilie absichern.",
        "Die Grundschuld bleibt häufig auch nach vollständiger Rückzahlung bestehen und kann für spätere Finanzierungen erneut verwendet werden.",
      ],
    },
    niessbrauch: {
      title: "Nießbrauch",
      intro: [
        "Ein Nießbrauchrecht ermöglicht es einer Person, eine Immobilie zu nutzen oder Mieteinnahmen zu erhalten, obwohl sie nicht Eigentümer ist.",
        "Nießbrauch spielt insbesondere bei:",
      ],
      items: ["Schenkungen", "Erbschaften", "vorweggenommener Vermögensübertragung"],
      outro: [
        "eine wichtige Rolle.",
        "Ein bestehender Nießbrauch kann den Wert einer Immobilie beeinflussen.",
      ],
    },
    beleihungsauslauf: {
      title: "Beleihungsauslauf",
      paragraphs: [
        "Der Beleihungsauslauf beschreibt das Verhältnis zwischen Darlehenssumme und Beleihungswert einer Immobilie.",
        "Beispiel:",
        "Darlehen: 320.000 Euro",
        "Beleihungswert: 400.000 Euro",
        "Beleihungsauslauf: 80 Prozent",
        "Je niedriger dieser Wert ist, desto bessere Finanzierungskonditionen bieten Banken häufig an.",
      ],
    },
    wohnflaeche: {
      title: "Wohnfläche",
      intro: ["Die Wohnfläche umfasst alle Räume, die dauerhaft zum Wohnen genutzt werden können.", "Dazu gehören unter anderem:"],
      items: ["Wohnzimmer", "Schlafzimmer", "Küche", "Badezimmer", "Flure"],
      outro: [
        "Keller, Heizungsräume oder Garagen zählen in der Regel nicht vollständig zur Wohnfläche.",
        "Eine korrekte Wohnflächenberechnung ist sowohl für Kaufpreis als auch für Miete von großer Bedeutung.",
      ],
    },
    teilungserklaerung: {
      title: "Teilungserklärung",
      intro: [
        "Die Teilungserklärung ist ein wichtiges Dokument bei Eigentumswohnungen.",
        "Sie regelt unter anderem:",
      ],
      items: [
        "Gemeinschaftseigentum",
        "Sondereigentum",
        "Miteigentumsanteile",
        "Sondernutzungsrechte",
        "Stimmrechte innerhalb der Eigentümergemeinschaft",
      ],
      outro:
        "Vor dem Kauf einer Eigentumswohnung sollte die Teilungserklärung sorgfältig geprüft werden.",
    },
    sondernutzungsrecht: {
      title: "Sondernutzungsrecht",
      intro: [
        "Ein Sondernutzungsrecht erlaubt es einem Eigentümer, bestimmte gemeinschaftliche Flächen exklusiv zu nutzen.",
        "Typische Beispiele sind:",
      ],
      items: ["Gartenflächen", "Stellplätze", "Dachterrassen", "Kellerräume"],
      outro:
        "Ob ein Sondernutzungsrecht besteht, ergibt sich aus der Teilungserklärung oder aus dem Grundbuch.",
    },
    maklerprovision: {
      title: "Maklerprovision",
      paragraphs: [
        "Die Maklerprovision ist die Vergütung für die Vermittlung einer Immobilie.",
        "Seit der gesetzlichen Neuregelung werden die Kosten bei vielen Wohnimmobilien zwischen Käufer und Verkäufer geteilt.",
        "Die Höhe der Provision variiert je nach Bundesland und Vereinbarung.",
      ],
    },
    hausgeld: {
      title: "Hausgeld",
      intro: [
        "Das Hausgeld wird bei Eigentumswohnungen monatlich an die Hausverwaltung gezahlt.",
        "Es dient zur Deckung laufender Kosten wie:",
      ],
      items: [
        "Gebäudereinigung",
        "Versicherungen",
        "Hausmeister",
        "Verwaltungskosten",
        "Instandhaltungsrücklage",
      ],
      outro:
        "Nicht alle Bestandteile des Hausgelds können später auf einen Mieter umgelegt werden.",
    },
    ertragswert: {
      title: "Ertragswert",
      intro: [
        "Der Ertragswert ist ein Bewertungsverfahren für vermietete Immobilien.",
        "Im Mittelpunkt stehen die zukünftig erzielbaren Mieteinnahmen.",
        "Das Verfahren wird insbesondere angewendet bei:",
      ],
      items: ["Mehrfamilienhäusern", "Gewerbeimmobilien", "Kapitalanlagen"],
      outro:
        "Der Ertragswert spielt auch bei der Bewertung durch Banken eine wichtige Rolle.",
    },
    verkehrswert: {
      title: "Verkehrswert",
      intro: [
        "Der Verkehrswert wird häufig auch als Marktwert bezeichnet.",
        "Er beschreibt den Preis, der unter normalen Marktbedingungen voraussichtlich erzielt werden kann.",
        "Bei der Ermittlung werden verschiedene Faktoren berücksichtigt:",
      ],
      items: ["Lage", "Zustand", "Größe", "Ausstattung", "Angebot und Nachfrage"],
      outro:
        "Ein professionelles Gutachten oder eine detaillierte Analyse kann helfen, den realistischen Verkehrswert einer Immobilie besser einzuschätzen.",
    },
    spekulationssteuer: {
      title: "Spekulationssteuer",
      intro: [
        "Die Spekulationssteuer kann anfallen, wenn eine Immobilie innerhalb von zehn Jahren nach dem Erwerb wieder verkauft wird.",
        "Eine wichtige Ausnahme besteht, wenn die Immobilie:",
      ],
      items: [
        "im Jahr des Verkaufs und",
        "in den beiden vorhergehenden Kalenderjahren",
      ],
      outro: [
        "selbst zu Wohnzwecken genutzt wurde.",
        "Ob tatsächlich Steuern anfallen, hängt immer von der individuellen Situation ab. Eine steuerliche Beratung kann deshalb sinnvoll sein.",
      ],
    },
    fazit: {
      title: "Fazit",
      paragraphs: [
        "Das Verständnis der wichtigsten Immobilienbegriffe erleichtert viele Entscheidungen rund um Kauf, Finanzierung, Vermietung und Verkauf. Wer die Bedeutung von Kennzahlen und rechtlichen Begriffen kennt, kann Risiken besser einschätzen und Immobilien fundierter bewerten.",
        "Ein solides Grundwissen ersetzt zwar keine individuelle Analyse, bildet jedoch die Grundlage für langfristig erfolgreiche Entscheidungen im Immobilienbereich.",
      ],
    },
    related: {
      label: "Weiterführende Themen",
      headline: "Vertiefen Sie Ihr Immobilienwissen",
      description:
        "Ergänzende Artikel zu Bewertung, Finanzierung, Kauf, Vermietung, Steuern und Strategien.",
    },
    cta: {
      label: "Immobilienlexikon",
      headline: "Fundierte Entscheidungen beginnen mit Klarheit.",
      description:
        "Strukturierte Analysen helfen dabei, Chancen und Risiken besser einzuordnen.",
    },
  },
  en: {
    breadcrumbTitle: "Real Estate Glossary",
    heroAriaLabel:
      "Real estate glossary – documents, floor plans and notepad on a desk",
    heroLabel: "Knowledge · Property Knowledge",
    heroTitle: "Real Estate Glossary",
    heroSubheadline:
      "The most important property terms explained simply and clearly.",
    pageTitle: "Real Estate Glossary – Key terms explained simply",
    pageSubtitle: "The most important terms explained simply",
    readMinutes: 8,
    intro:
      "Anyone dealing with property quickly encounters numerous technical terms. When buying, financing or letting, it is important to understand the key concepts. This glossary explains commonly used terms in plain language and helps you better understand the context.",
    afa: {
      title: "Depreciation (Absetzung für Abnutzung – AfA)",
      paragraphs: [
        "AfA stands for Absetzung für Abnutzung (depreciation for wear and tear). It refers to the tax depreciation of a building.",
        "Landlords can claim the building portion over many years for tax purposes and thereby reduce their tax burden. The land itself cannot be depreciated.",
        "The amount of depreciation depends, among other things, on the year of construction and the applicable legal provisions.",
      ],
    },
    cashflow: {
      title: "Cash flow",
      intro: [
        "Cash flow describes the monthly or annual surplus or shortfall of a property.",
        "It is calculated as:",
        "Rental income minus",
      ],
      items: [
        "Loan instalment",
        "Non-recoverable service charges",
        "Maintenance costs",
        "Management costs",
        "Reserves",
      ],
      outro:
        "Positive cash flow means the property generates more income than expenses. Negative cash flow means additional equity is required.",
    },
    mietrendite: {
      title: "Rental yield",
      paragraphs: [
        "Rental yield shows how profitable a rented property is.",
        "A simple calculation is:",
        "Annual net cold rent ÷ purchase price × 100",
        "The higher the rental yield, the more attractive a buy-to-let investment may appear. However, maintenance costs, vacancy and financing costs should also be considered.",
      ],
    },
    kaufpreisfaktor: {
      title: "Price-to-rent ratio",
      paragraphs: [
        "The price-to-rent ratio describes the relationship between purchase price and annual net cold rent.",
        "Calculation:",
        "Purchase price ÷ annual net cold rent",
        "A ratio of 20 means, for example, that twenty years of rent would theoretically be needed to earn back the purchase price.",
        "Different ratios are considered market-standard depending on location and property type.",
      ],
    },
    grundschuld: {
      title: "Land charge (Grundschuld)",
      paragraphs: [
        "A land charge is security for the bank and is registered in the land register.",
        "If a loan is not repaid, the bank can secure its claim against the property.",
        "The land charge often remains even after full repayment and can be reused for later financing.",
      ],
    },
    niessbrauch: {
      title: "Usufruct (Nießbrauch)",
      intro: [
        "A usufruct right allows a person to use a property or receive rental income even though they are not the owner.",
        "Usufruct plays an important role especially in:",
      ],
      items: ["Gifts", "Inheritances", "Anticipated transfer of assets"],
      outro: [
        "such situations.",
        "An existing usufruct can affect the value of a property.",
      ],
    },
    beleihungsauslauf: {
      title: "Loan-to-value ratio",
      paragraphs: [
        "The loan-to-value ratio describes the relationship between the loan amount and the lending value of a property.",
        "Example:",
        "Loan: €320,000",
        "Lending value: €400,000",
        "Loan-to-value ratio: 80 percent",
        "The lower this value, the better financing terms banks often offer.",
      ],
    },
    wohnflaeche: {
      title: "Living area",
      intro: [
        "Living area includes all rooms that can be permanently used for residential purposes.",
        "This includes, among others:",
      ],
      items: ["Living room", "Bedroom", "Kitchen", "Bathroom", "Hallways"],
      outro: [
        "Cellars, boiler rooms or garages are generally not fully counted as living area.",
        "Correct calculation of living area is important for both purchase price and rent.",
      ],
    },
    teilungserklaerung: {
      title: "Declaration of division (Teilungserklärung)",
      intro: [
        "The declaration of division is an important document for condominiums.",
        "It regulates, among other things:",
      ],
      items: [
        "Common property",
        "Separate property",
        "Co-ownership shares",
        "Special use rights",
        "Voting rights within the owners' association",
      ],
      outro:
        "Before buying a condominium, the declaration of division should be carefully reviewed.",
    },
    sondernutzungsrecht: {
      title: "Special use right (Sondernutzungsrecht)",
      intro: [
        "A special use right allows an owner to exclusively use certain common areas.",
        "Typical examples include:",
      ],
      items: ["Garden areas", "Parking spaces", "Roof terraces", "Cellar rooms"],
      outro:
        "Whether a special use right exists is determined by the declaration of division or the land register.",
    },
    maklerprovision: {
      title: "Estate agent commission",
      paragraphs: [
        "The estate agent commission is the fee for brokering a property.",
        "Since the legal reform, costs for many residential properties are shared between buyer and seller.",
        "The amount of commission varies by federal state and agreement.",
      ],
    },
    hausgeld: {
      title: "Service charge (Hausgeld)",
      intro: [
        "Service charges for condominiums are paid monthly to the property management.",
        "They cover ongoing costs such as:",
      ],
      items: [
        "Building cleaning",
        "Insurance",
        "Caretaker",
        "Management costs",
        "Maintenance reserve",
      ],
      outro:
        "Not all components of service charges can later be passed on to a tenant.",
    },
    ertragswert: {
      title: "Income value (Ertragswert)",
      intro: [
        "Income value is a valuation method for rented properties.",
        "The focus is on future achievable rental income.",
        "The method is applied especially to:",
      ],
      items: ["Multi-family homes", "Commercial property", "Buy-to-let investments"],
      outro:
        "Income value also plays an important role in bank valuations.",
    },
    verkehrswert: {
      title: "Fair market value (Verkehrswert)",
      intro: [
        "Fair market value is often also referred to as market value.",
        "It describes the price that can likely be achieved under normal market conditions.",
        "Various factors are considered in the assessment:",
      ],
      items: ["Location", "Condition", "Size", "Fittings", "Supply and demand"],
      outro:
        "A professional appraisal or detailed analysis can help better assess the realistic fair market value of a property.",
    },
    spekulationssteuer: {
      title: "Speculation tax",
      intro: [
        "Speculation tax may apply if a property is sold again within ten years of acquisition.",
        "An important exception applies if the property was:",
      ],
      items: [
        "used for residential purposes in the year of sale and",
        "in the two preceding calendar years",
      ],
      outro: [
        "for personal use.",
        "Whether tax actually applies always depends on the individual situation. Tax advice can therefore be useful.",
      ],
    },
    fazit: {
      title: "Conclusion",
      paragraphs: [
        "Understanding the most important property terms makes many decisions around buying, financing, letting and selling easier. Those who know the meaning of key figures and legal terms can assess risks better and evaluate property more thoroughly.",
        "Solid basic knowledge does not replace individual analysis but forms the foundation for long-term successful decisions in property.",
      ],
    },
    related: {
      label: "Further topics",
      headline: "Deepen your property knowledge",
      description:
        "Supplementary articles on valuation, financing, purchase, letting, taxes and strategies.",
    },
    cta: {
      label: "Real Estate Glossary",
      headline: "Well-founded decisions start with clarity.",
      description:
        "Structured analyses help assess opportunities and risks more clearly.",
    },
  },
} as const;

function RelatedArticleCard({
  locale,
  title,
  description,
  href,
}: {
  locale: Locale;
  title: string;
  description: string;
  href: string;
}) {
  const ui = propertyKnowledgeUi[locale];

  return (
    <Link href={href} className="group block no-underline">
      <Card className="h-full border-[#D7D2C8]/80 bg-white shadow-[0_4px_20px_rgba(15,61,46,0.05)] transition-colors duration-300 hover:border-[#B9965B]/35">
        <p className="text-label text-gold-600">{ui.relatedLabel}</p>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <span className="text-label mt-auto inline-flex items-center gap-2 text-gold-600 transition-all duration-300 group-hover:gap-3">
          {ui.mehrErfahren}
          <span aria-hidden="true">→</span>
        </span>
      </Card>
    </Link>
  );
}

export function ImmobilienlexikonPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const overviewHref = propertyKnowledgeOverview[locale].href;
  const relatedArticles = getRelatedArticles(locale, "immobilienlexikon");

  return (
    <>
      <section
        className="relative min-h-[calc(100svh-5rem)] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        aria-label={t.heroAriaLabel}
      >
        <div
          className="absolute inset-0 z-[1]"
          style={{ backgroundColor: "rgba(15, 61, 46, 0.60)" }}
          aria-hidden="true"
        />
        <div className="relative z-[2] mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl items-center px-6 pb-20 pt-16 md:px-8 md:pb-24 md:pt-20">
          <div className="max-w-3xl">
            <p className="text-label mb-6 block text-[#B9965B]">{t.heroLabel}</p>
            <h1 className="text-h1 text-white">{t.heroTitle}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-[1.8] text-white/90">
              {t.heroSubheadline}
            </p>
            <PropertyKnowledgePageButtons locale={locale} onDark className="mt-10" />
          </div>
        </div>
      </section>

      <div className="bg-[#F7F5EF] py-16 md:py-20">
        <div className="mx-auto max-w-[850px] px-6 md:px-8">
          <PropertyKnowledgeBreadcrumb locale={locale} currentTitle={t.breadcrumbTitle} />

          <header className="mb-10">
            <CategoryBadge locale={locale} />
            <h2 className="text-[1.75rem] font-bold leading-tight tracking-tight text-[#0F3D2E] md:text-[2.125rem]">
              {t.pageTitle}
            </h2>
            <p className="mt-4 text-lg leading-[1.8] text-[#1D1D1B]/60">{t.pageSubtitle}</p>
            <div
              aria-hidden="true"
              className="mt-7 h-px w-16 rounded-full bg-[#B9965B]/55"
            />
            <ArticleMetaRow locale={locale} readMinutes={t.readMinutes} />
          </header>

          <article>
            <ArticleP>{t.intro}</ArticleP>

            <ArticleH2 id="afa">{t.afa.title}</ArticleH2>
            {t.afa.paragraphs.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}

            <ArticleH2 id="cashflow">{t.cashflow.title}</ArticleH2>
            {t.cashflow.intro.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}
            <EditorialList items={t.cashflow.items} />
            <ArticleP>{t.cashflow.outro}</ArticleP>

            <ArticleH2 id="mietrendite">{t.mietrendite.title}</ArticleH2>
            {t.mietrendite.paragraphs.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}

            <ArticleH2 id="kaufpreisfaktor">{t.kaufpreisfaktor.title}</ArticleH2>
            {t.kaufpreisfaktor.paragraphs.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}

            <ArticleH2 id="grundschuld">{t.grundschuld.title}</ArticleH2>
            {t.grundschuld.paragraphs.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}

            <ArticleH2 id="niessbrauch">{t.niessbrauch.title}</ArticleH2>
            {t.niessbrauch.intro.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}
            <EditorialList items={t.niessbrauch.items} />
            {t.niessbrauch.outro.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}

            <ArticleH2 id="beleihungsauslauf">{t.beleihungsauslauf.title}</ArticleH2>
            {t.beleihungsauslauf.paragraphs.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}

            <ArticleH2 id="wohnflaeche">{t.wohnflaeche.title}</ArticleH2>
            {t.wohnflaeche.intro.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}
            <EditorialList items={t.wohnflaeche.items} />
            {t.wohnflaeche.outro.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}

            <ArticleH2 id="teilungserklaerung">{t.teilungserklaerung.title}</ArticleH2>
            {t.teilungserklaerung.intro.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}
            <EditorialList items={t.teilungserklaerung.items} />
            <ArticleP>{t.teilungserklaerung.outro}</ArticleP>

            <ArticleH2 id="sondernutzungsrecht">{t.sondernutzungsrecht.title}</ArticleH2>
            {t.sondernutzungsrecht.intro.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}
            <EditorialList items={t.sondernutzungsrecht.items} />
            <ArticleP>{t.sondernutzungsrecht.outro}</ArticleP>

            <ArticleH2 id="maklerprovision">{t.maklerprovision.title}</ArticleH2>
            {t.maklerprovision.paragraphs.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}

            <ArticleH2 id="hausgeld">{t.hausgeld.title}</ArticleH2>
            {t.hausgeld.intro.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}
            <EditorialList items={t.hausgeld.items} />
            <ArticleP>{t.hausgeld.outro}</ArticleP>

            <ArticleH2 id="ertragswert">{t.ertragswert.title}</ArticleH2>
            {t.ertragswert.intro.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}
            <EditorialList items={t.ertragswert.items} />
            <ArticleP>{t.ertragswert.outro}</ArticleP>

            <ArticleH2 id="verkehrswert">{t.verkehrswert.title}</ArticleH2>
            {t.verkehrswert.intro.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}
            <EditorialList items={t.verkehrswert.items} />
            <ArticleP>{t.verkehrswert.outro}</ArticleP>

            <ArticleH2 id="spekulationssteuer">{t.spekulationssteuer.title}</ArticleH2>
            {t.spekulationssteuer.intro.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}
            <EditorialList items={t.spekulationssteuer.items} />
            {t.spekulationssteuer.outro.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}

            <ArticleH2 id="fazit">{t.fazit.title}</ArticleH2>
            {t.fazit.paragraphs.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}
          </article>

          <PropertyKnowledgeBackLink locale={locale} overviewHref={overviewHref} />
        </div>
      </div>

      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader
          label={t.related.label}
          headline={t.related.headline}
          description={t.related.description}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedArticles.map((article) => (
            <RelatedArticleCard
              key={article.href}
              locale={locale}
              title={article.title}
              description={article.description}
              href={article.href}
            />
          ))}
        </div>
      </Section>

      <section className="bg-[#0F3D2E] py-24 md:py-32">
        <div className="mx-auto max-w-[850px] px-6 text-center md:px-8">
          <p className="text-label mb-6 block text-[#B9965B]">{t.cta.label}</p>
          <h2 className="text-h2 text-white">{t.cta.headline}</h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-8 h-px w-10 rounded-full bg-[#B9965B]/60"
          />
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-[1.8] text-white/75">
            {t.cta.description}
          </p>
          <PropertyKnowledgePageButtons
            locale={locale}
            onDark
            className="mt-12 justify-center"
          />
        </div>
      </section>

      <div className="min-h-[120px] bg-cream" aria-hidden="true" />
    </>
  );
}
