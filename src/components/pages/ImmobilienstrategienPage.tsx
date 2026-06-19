import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { propertyKnowledgeOverview } from "@/lib/i18n/property-knowledge";
import {
  ArticleH2,
  ArticleH3,
  ArticleMetaRow,
  ArticleP,
  CategoryBadge,
  EditorialList,
  PropertyKnowledgeBackLink,
  PropertyKnowledgeBreadcrumb,
  PropertyKnowledgePageButtons,
} from "@/components/property-knowledge/ArticleUi";

const HERO_IMAGE = "/images/knowledge/immobilienstrategien.jpg";

const copy = {
  de: {
    breadcrumbTitle: "Immobilienstrategien",
    heroImageAlt:
      "Immobilienstrategien – Planung und Investitionsentscheidungen im Immobilienbereich",
    heroLabel: "Wissen · Immobilienwissen",
    heroTitle: "Immobilienstrategien",
    heroSubheadline: "Welche Immobilienstrategie passt zu Ihren Zielen?",
    pageTitle:
      "Immobilienstrategien – Welche Immobilienstrategie passt zu Ihren Zielen?",
    readMinutes: 9,
    tocLabel: "Inhaltsverzeichnis",
    tocAriaLabel: "Inhaltsverzeichnis",
    toc: [
      { id: "einleitung", label: "Einleitung" },
      { id: "eigennutzung", label: "Eigennutzung" },
      { id: "kapitalanlage", label: "Kapitalanlage" },
      { id: "fix-flip", label: "Fix & Flip" },
      { id: "sanierung-modernisierung", label: "Sanierung & Modernisierung" },
      { id: "mehrfamilienhaeuser", label: "Mehrfamilienhäuser" },
      { id: "gewerbeimmobilien", label: "Gewerbeimmobilien" },
      { id: "chancen-risiken", label: "Chancen und Risiken" },
      { id: "langfristige-strategien", label: "Langfristige Strategien" },
      { id: "fazit", label: "Fazit" },
    ],
    intro: [
      "Der Immobilienmarkt bietet unterschiedliche Möglichkeiten, Vermögen aufzubauen, Wohnraum für den Eigenbedarf zu schaffen oder langfristige Einkommensquellen zu generieren. Eine allgemeingültige Strategie gibt es jedoch nicht. Welche Vorgehensweise sinnvoll ist, hängt von den persönlichen Zielen, den finanziellen Möglichkeiten, der Risikobereitschaft und dem zeitlichen Horizont ab.",
      "Wer Immobilien erfolgreich nutzen möchte, sollte deshalb zunächst die verschiedenen Strategien verstehen und deren Chancen und Risiken realistisch einschätzen.",
    ],
    eigennutzung: {
      title: "Eigennutzung – Wohnen im eigenen Zuhause",
      paragraphs: [
        "Für viele Menschen steht bei einer Immobilie nicht die Rendite, sondern die eigene Lebensqualität im Vordergrund. Die Eigennutzung bietet Unabhängigkeit von Mietsteigerungen und ermöglicht eine langfristige Planung.",
        "Besonders für Familien oder Personen mit einem stabilen Einkommen kann der Erwerb einer selbstgenutzten Immobilie sinnvoll sein. Gleichzeitig sollte berücksichtigt werden, dass Eigentum auch mit Verantwortung verbunden ist. Neben den Finanzierungskosten fallen laufende Ausgaben für Instandhaltung, Modernisierung und Nebenkosten an.",
        "Der Vorteil einer Eigennutzung liegt weniger in kurzfristigen Gewinnen als vielmehr in langfristiger Sicherheit und dem Aufbau von Vermögen.",
      ],
    },
    kapitalanlage: {
      title: "Kapitalanlage – Einnahmen durch Vermietung",
      intro: [
        "Eine vermietete Immobilie dient in erster Linie dem Vermögensaufbau und der Erzielung laufender Mieteinnahmen.",
        "Wichtige Kriterien bei einer Kapitalanlage sind:",
      ],
      criteria: [
        "Lage und Entwicklungspotenzial",
        "Mietrendite",
        "Kaufpreisfaktor",
        "Finanzierungskosten",
        "Zustand der Immobilie",
        "Höhe der nicht umlagefähigen Kosten",
        "Risiko von Leerständen",
      ],
      outro:
        "Eine erfolgreiche Kapitalanlage zeichnet sich nicht allein durch hohe Mieteinnahmen aus. Entscheidend ist, ob die Immobilie langfristig einen positiven Cashflow erzeugen und ihren Wert erhalten oder steigern kann.",
    },
    fixFlip: {
      title: "Fix & Flip – Kaufen, modernisieren und verkaufen",
      intro: [
        "Beim Fix & Flip wird eine Immobilie erworben, aufgewertet und anschließend mit Gewinn wieder verkauft.",
        "Typische Maßnahmen sind:",
      ],
      measures: [
        "Renovierung von Bad und Küche",
        "Erneuerung von Böden und Oberflächen",
        "Modernisierung der Haustechnik",
        "Energetische Verbesserungen",
        "Home Staging",
      ],
      outro: [
        "Diese Strategie kann attraktive Gewinne ermöglichen, setzt jedoch Erfahrung und eine sorgfältige Kalkulation voraus. Fehler bei den Sanierungskosten oder eine falsche Einschätzung des späteren Verkaufspreises können die Rendite erheblich beeinträchtigen.",
        "Auch steuerliche Aspekte und die sogenannte Drei-Objekt-Grenze sollten berücksichtigt werden.",
      ],
    },
    sanierung: {
      title: "Sanierung und Modernisierung als Strategie",
      intro: [
        "Nicht jede Investition besteht im Kauf und Verkauf einer Immobilie. Viele Eigentümer konzentrieren sich darauf, bestehende Objekte schrittweise zu modernisieren und dadurch den Wert langfristig zu steigern.",
        "Typische Maßnahmen sind:",
      ],
      measures: [
        "Austausch der Heizung",
        "Dämmung",
        "Neue Fenster",
        "Erneuerung der Elektrik",
        "Modernisierung von Bädern",
        "Energetische Sanierungen",
      ],
      outro: [
        "Eine gezielte Modernisierung kann nicht nur den Wohnkomfort verbessern, sondern auch die Vermietbarkeit erhöhen und den Marktwert steigern.",
        "Dabei sollte stets geprüft werden, welche Maßnahmen wirtschaftlich sinnvoll sind und welche Investitionen sich tatsächlich auszahlen.",
      ],
    },
    mehrfamilienhaeuser: {
      title: "Mehrfamilienhäuser – Skalierung und langfristiger Vermögensaufbau",
      intro: [
        "Mehrfamilienhäuser bieten Investoren die Möglichkeit, mehrere Wohneinheiten in einem Objekt zu bündeln.",
        "Zu den Vorteilen zählen:",
      ],
      advantages: [
        "Diversifizierung der Mieteinnahmen",
        "Geringeres Leerstandsrisiko",
        "Höhere Gesamterträge",
        "Langfristiger Vermögensaufbau",
      ],
      outro: [
        "Allerdings sind auch die Anforderungen höher. Neben größeren Investitionssummen spielen Themen wie Mietermanagement, Instandhaltung, Rücklagen und Finanzierung eine wichtige Rolle.",
        "Die Bewertung erfolgt häufig über das Ertragswertverfahren, bei dem die nachhaltig erzielbaren Mieteinnahmen im Mittelpunkt stehen.",
      ],
    },
    gewerbeimmobilien: {
      title: "Gewerbeimmobilien – Höhere Renditen mit höheren Risiken",
      intro: ["Gewerbeimmobilien umfassen beispielsweise:"],
      types: [
        "Büros",
        "Einzelhandelsflächen",
        "Lagerhallen",
        "Praxen",
        "Produktionsflächen",
      ],
      middle: [
        "Im Vergleich zu Wohnimmobilien können Gewerbeobjekte höhere Renditen bieten. Gleichzeitig ist das Risiko häufig größer.",
        "Entscheidend sind insbesondere:",
      ],
      criteria: [
        "Bonität des Mieters",
        "Restlaufzeit des Mietvertrags",
        "Standortqualität",
        "Drittverwendungsfähigkeit",
        "Markt- und Branchenentwicklung",
      ],
      outro:
        "Da Leerstände bei Gewerbeimmobilien teilweise länger andauern können, sollte eine ausreichende Sicherheitsreserve vorhanden sein.",
    },
    chancenRisiken: {
      title: "Chancen und Risiken verschiedener Strategien",
      intro:
        "Jede Immobilienstrategie bietet Möglichkeiten, ist jedoch auch mit Risiken verbunden.",
      chancenTitle: "Chancen",
      chancen: [
        "Langfristiger Vermögensaufbau",
        "Schutz vor Inflation",
        "Laufende Einnahmen durch Vermietung",
        "Wertsteigerungspotenziale",
        "Steuerliche Gestaltungsmöglichkeiten",
        "Diversifikation des Vermögens",
      ],
      risikenTitle: "Risiken",
      risiken: [
        "Steigende Finanzierungskosten",
        "Unerwartete Sanierungsausgaben",
        "Mietausfälle",
        "Leerstände",
        "Veränderungen am Immobilienmarkt",
        "Gesetzliche und steuerliche Änderungen",
        "Fehler bei der Objektbewertung",
      ],
      outro:
        "Wer Risiken frühzeitig erkennt und realistisch kalkuliert, kann viele Probleme vermeiden.",
    },
    langfristigeStrategien: {
      title: "Langfristige Strategien",
      intro: [
        "Immobilien entfalten ihre Stärken häufig über lange Zeiträume. Deshalb setzen viele Investoren auf nachhaltige und langfristige Konzepte.",
        "Dazu gehören beispielsweise:",
      ],
      buyAndHold: {
        title: "Buy and Hold",
        text: "Immobilien werden erworben und über viele Jahre gehalten. Ziel sind stabile Mieteinnahmen und Wertsteigerungen.",
      },
      portfolio: {
        title: "Schrittweiser Portfolioaufbau",
        text: "Beginn mit einer einzelnen Wohnung und späterer Ausbau zu mehreren Objekten oder Mehrfamilienhäusern.",
      },
      kombination: {
        title: "Kombination verschiedener Strategien",
        text: "Viele Eigentümer verbinden unterschiedliche Ansätze miteinander. Beispielsweise kann zunächst eine Eigentumswohnung zur Eigennutzung erworben und später eine Kapitalanlage oder ein Mehrfamilienhaus hinzugefügt werden.",
      },
      wertsteigerung: {
        title: "Wertsteigerung durch Modernisierung",
        text: "Durch gezielte Sanierungen können sowohl die Mieteinnahmen als auch der Marktwert langfristig verbessert werden.",
      },
    },
    fazit: {
      title: "Fazit",
      paragraphs: [
        "Die passende Immobilienstrategie hängt immer von den individuellen Zielen ab. Während für manche Menschen die Eigennutzung im Vordergrund steht, konzentrieren sich andere auf Kapitalanlagen, Fix & Flip oder den Aufbau größerer Bestände.",
        "Entscheidend ist, nicht einer allgemeinen Empfehlung zu folgen, sondern die Strategie an die eigene finanzielle Situation, den Zeithorizont und die persönliche Risikobereitschaft anzupassen. Wer Chancen und Risiken sorgfältig analysiert und langfristig denkt, schafft die Grundlage für nachhaltige Entscheidungen und einen erfolgreichen Vermögensaufbau mit Immobilien.",
      ],
    },
    cta: {
      label: "Immobilienstrategien",
      headline: "Die passende Strategie beginnt mit einer fundierten Analyse.",
      description:
        "Nicht jede Immobilie und nicht jede Strategie passt zu jedem Ziel. Eine strukturierte Betrachtung hilft dabei, Chancen und Risiken besser einzuordnen und langfristig fundierte Entscheidungen zu treffen.",
    },
  },
  en: {
    breadcrumbTitle: "Property Strategies",
    heroImageAlt:
      "Property strategies – planning and investment decisions in real estate",
    heroLabel: "Knowledge · Property Knowledge",
    heroTitle: "Property Strategies",
    heroSubheadline: "Which property strategy fits your goals?",
    pageTitle: "Property Strategies – Which strategy fits your goals?",
    readMinutes: 9,
    tocLabel: "Table of contents",
    tocAriaLabel: "Table of contents",
    toc: [
      { id: "einleitung", label: "Introduction" },
      { id: "eigennutzung", label: "Owner-occupation" },
      { id: "kapitalanlage", label: "Buy-to-let investment" },
      { id: "fix-flip", label: "Fix & flip" },
      { id: "sanierung-modernisierung", label: "Renovation & modernisation" },
      { id: "mehrfamilienhaeuser", label: "Multi-family homes" },
      { id: "gewerbeimmobilien", label: "Commercial property" },
      { id: "chancen-risiken", label: "Opportunities and risks" },
      { id: "langfristige-strategien", label: "Long-term strategies" },
      { id: "fazit", label: "Conclusion" },
    ],
    intro: [
      "The property market offers various ways to build wealth, create housing for personal use or generate long-term income. However, there is no one-size-fits-all strategy. Which approach makes sense depends on personal goals, financial means, risk tolerance and time horizon.",
      "Anyone who wants to use property successfully should first understand the different strategies and realistically assess their opportunities and risks.",
    ],
    eigennutzung: {
      title: "Owner-occupation – living in your own home",
      paragraphs: [
        "For many people, quality of life rather than return is the priority with a property. Owner-occupation offers independence from rent increases and enables long-term planning.",
        "Buying a home for personal use can make sense especially for families or people with stable income. At the same time, ownership also comes with responsibility. In addition to financing costs, there are ongoing expenses for maintenance, modernisation and service charges.",
        "The advantage of owner-occupation lies less in short-term gains and more in long-term security and wealth building.",
      ],
    },
    kapitalanlage: {
      title: "Buy-to-let investment – income through letting",
      intro: [
        "A rented property primarily serves wealth building and generating ongoing rental income.",
        "Important criteria for a buy-to-let investment include:",
      ],
      criteria: [
        "Location and development potential",
        "Rental yield",
        "Price-to-rent ratio",
        "Financing costs",
        "Condition of the property",
        "Level of non-recoverable costs",
        "Risk of vacancy",
      ],
      outro:
        "A successful buy-to-let investment is not defined by high rental income alone. What matters is whether the property can generate positive cash flow over the long term and maintain or increase its value.",
    },
    fixFlip: {
      title: "Fix & flip – buy, modernise and sell",
      intro: [
        "With fix & flip, a property is purchased, upgraded and then sold at a profit.",
        "Typical measures include:",
      ],
      measures: [
        "Renovating bathroom and kitchen",
        "Renewing floors and surfaces",
        "Modernising building services",
        "Energy improvements",
        "Home staging",
      ],
      outro: [
        "This strategy can offer attractive profits but requires experience and careful calculation. Errors in renovation costs or misjudging the eventual sale price can significantly reduce returns.",
        "Tax aspects and the so-called three-property threshold should also be considered.",
      ],
    },
    sanierung: {
      title: "Renovation and modernisation as a strategy",
      intro: [
        "Not every investment involves buying and selling a property. Many owners focus on gradually modernising existing assets to increase value over the long term.",
        "Typical measures include:",
      ],
      measures: [
        "Replacing the heating system",
        "Insulation",
        "New windows",
        "Electrical renewal",
        "Bathroom modernisation",
        "Energy-related refurbishment",
      ],
      outro: [
        "Targeted modernisation can not only improve living comfort but also increase lettability and market value.",
        "It should always be checked which measures make economic sense and which investments actually pay off.",
      ],
    },
    mehrfamilienhaeuser: {
      title: "Multi-family homes – scale and long-term wealth building",
      intro: [
        "Multi-family homes allow investors to bundle several residential units in one asset.",
        "Advantages include:",
      ],
      advantages: [
        "Diversification of rental income",
        "Lower vacancy risk",
        "Higher total returns",
        "Long-term wealth building",
      ],
      outro: [
        "However, requirements are also higher. In addition to larger investment sums, tenant management, maintenance, reserves and financing play an important role.",
        "Valuation is often based on the income approach, where sustainable achievable rental income is the focus.",
      ],
    },
    gewerbeimmobilien: {
      title: "Commercial property – higher returns with higher risks",
      intro: ["Commercial property includes, for example:"],
      types: [
        "Offices",
        "Retail space",
        "Warehouses",
        "Medical practices",
        "Production facilities",
      ],
      middle: [
        "Compared with residential property, commercial assets can offer higher yields. At the same time, risk is often greater.",
        "Key factors include:",
      ],
      criteria: [
        "Tenant creditworthiness",
        "Remaining lease term",
        "Location quality",
        "Alternative use potential",
        "Market and sector development",
      ],
      outro:
        "Since vacancies in commercial property can last longer in some cases, sufficient reserves should be available.",
    },
    chancenRisiken: {
      title: "Opportunities and risks of different strategies",
      intro:
        "Every property strategy offers opportunities but is also associated with risks.",
      chancenTitle: "Opportunities",
      chancen: [
        "Long-term wealth building",
        "Protection against inflation",
        "Ongoing income through letting",
        "Value appreciation potential",
        "Tax planning options",
        "Diversification of assets",
      ],
      risikenTitle: "Risks",
      risiken: [
        "Rising financing costs",
        "Unexpected renovation expenses",
        "Rent defaults",
        "Vacancies",
        "Changes in the property market",
        "Legal and tax changes",
        "Errors in property valuation",
      ],
      outro:
        "Those who identify risks early and calculate realistically can avoid many problems.",
    },
    langfristigeStrategien: {
      title: "Long-term strategies",
      intro: [
        "Property often shows its strengths over long periods. That is why many investors focus on sustainable, long-term concepts.",
        "These include, for example:",
      ],
      buyAndHold: {
        title: "Buy and hold",
        text: "Properties are acquired and held for many years. The aim is stable rental income and value appreciation.",
      },
      portfolio: {
        title: "Gradual portfolio building",
        text: "Starting with a single apartment and later expanding to several assets or multi-family homes.",
      },
      kombination: {
        title: "Combining different strategies",
        text: "Many owners combine different approaches. For example, a condominium may first be bought for owner-occupation and later supplemented with a buy-to-let investment or a multi-family home.",
      },
      wertsteigerung: {
        title: "Value appreciation through modernisation",
        text: "Targeted refurbishment can improve both rental income and market value over the long term.",
      },
    },
    fazit: {
      title: "Conclusion",
      paragraphs: [
        "The right property strategy always depends on individual goals. While owner-occupation is the priority for some, others focus on buy-to-let, fix & flip or building larger portfolios.",
        "What matters is not following a general recommendation but adapting the strategy to your own financial situation, time horizon and personal risk tolerance. Those who carefully analyse opportunities and risks and think long term create the foundation for sustainable decisions and successful wealth building with property.",
      ],
    },
    cta: {
      label: "Property Strategies",
      headline: "The right strategy starts with a thorough analysis.",
      description:
        "Not every property and not every strategy suits every goal. A structured review helps assess opportunities and risks more clearly and make well-founded long-term decisions.",
    },
  },
} as const;

function TableOfContents({
  locale,
}: {
  locale: Locale;
}) {
  const t = copy[locale];

  return (
    <nav
      aria-label={t.tocAriaLabel}
      className="mb-12 rounded-2xl border border-[#D7D2C8]/80 bg-white px-6 py-7 md:px-8 md:py-8"
    >
      <p className="text-label mb-5 block text-gold-600">{t.tocLabel}</p>
      <ol className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {t.toc.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="group flex items-baseline gap-3 text-sm leading-snug text-[#1D1D1B]/65 transition-colors duration-200 hover:text-[#0F3D2E] md:text-[0.9375rem]"
            >
              <span className="text-label shrink-0 text-[#B9965B]/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ImmobilienstrategienPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const overviewHref = propertyKnowledgeOverview[locale].href;

  return (
    <>
      <section className="relative min-h-[calc(100svh-5rem)] w-full overflow-hidden">
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src={HERO_IMAGE}
            alt={t.heroImageAlt}
            width={2400}
            height={1350}
            priority
            className="h-full w-full object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0F3D2E]/88 from-0% via-[#0F3D2E]/55 via-[50%] to-[#0F3D2E]/35 to-[100%] max-md:via-[#0F3D2E]/65"
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
            <div
              aria-hidden="true"
              className="mt-7 h-px w-16 rounded-full bg-[#B9965B]/55"
            />
            <ArticleMetaRow locale={locale} readMinutes={t.readMinutes} />
          </header>

          <TableOfContents locale={locale} />

          <article>
            <div id="einleitung" className="scroll-mt-28">
              {t.intro.map((paragraph) => (
                <ArticleP key={paragraph}>{paragraph}</ArticleP>
              ))}
            </div>

            <ArticleH2 id="eigennutzung">{t.eigennutzung.title}</ArticleH2>
            {t.eigennutzung.paragraphs.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}

            <ArticleH2 id="kapitalanlage">{t.kapitalanlage.title}</ArticleH2>
            {t.kapitalanlage.intro.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}
            <EditorialList items={t.kapitalanlage.criteria} />
            <ArticleP>{t.kapitalanlage.outro}</ArticleP>

            <ArticleH2 id="fix-flip">{t.fixFlip.title}</ArticleH2>
            {t.fixFlip.intro.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}
            <EditorialList items={t.fixFlip.measures} />
            {t.fixFlip.outro.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}

            <ArticleH2 id="sanierung-modernisierung">{t.sanierung.title}</ArticleH2>
            {t.sanierung.intro.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}
            <EditorialList items={t.sanierung.measures} />
            {t.sanierung.outro.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}

            <ArticleH2 id="mehrfamilienhaeuser">{t.mehrfamilienhaeuser.title}</ArticleH2>
            {t.mehrfamilienhaeuser.intro.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}
            <EditorialList items={t.mehrfamilienhaeuser.advantages} />
            {t.mehrfamilienhaeuser.outro.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}

            <ArticleH2 id="gewerbeimmobilien">{t.gewerbeimmobilien.title}</ArticleH2>
            {t.gewerbeimmobilien.intro.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}
            <EditorialList items={t.gewerbeimmobilien.types} />
            {t.gewerbeimmobilien.middle.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}
            <EditorialList items={t.gewerbeimmobilien.criteria} />
            <ArticleP>{t.gewerbeimmobilien.outro}</ArticleP>

            <ArticleH2 id="chancen-risiken">{t.chancenRisiken.title}</ArticleH2>
            <ArticleP>{t.chancenRisiken.intro}</ArticleP>
            <ArticleH3>{t.chancenRisiken.chancenTitle}</ArticleH3>
            <EditorialList items={t.chancenRisiken.chancen} />
            <ArticleH3>{t.chancenRisiken.risikenTitle}</ArticleH3>
            <EditorialList items={t.chancenRisiken.risiken} />
            <ArticleP>{t.chancenRisiken.outro}</ArticleP>

            <ArticleH2 id="langfristige-strategien">{t.langfristigeStrategien.title}</ArticleH2>
            {t.langfristigeStrategien.intro.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}
            <ArticleH3>{t.langfristigeStrategien.buyAndHold.title}</ArticleH3>
            <ArticleP>{t.langfristigeStrategien.buyAndHold.text}</ArticleP>
            <ArticleH3>{t.langfristigeStrategien.portfolio.title}</ArticleH3>
            <ArticleP>{t.langfristigeStrategien.portfolio.text}</ArticleP>
            <ArticleH3>{t.langfristigeStrategien.kombination.title}</ArticleH3>
            <ArticleP>{t.langfristigeStrategien.kombination.text}</ArticleP>
            <ArticleH3>{t.langfristigeStrategien.wertsteigerung.title}</ArticleH3>
            <ArticleP>{t.langfristigeStrategien.wertsteigerung.text}</ArticleP>

            <ArticleH2 id="fazit">{t.fazit.title}</ArticleH2>
            {t.fazit.paragraphs.map((paragraph) => (
              <ArticleP key={paragraph}>{paragraph}</ArticleP>
            ))}
          </article>

          <PropertyKnowledgeBackLink locale={locale} overviewHref={overviewHref} />
        </div>
      </div>

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

      <div className="h-20 bg-cream md:h-[100px]" aria-hidden="true" />
    </>
  );
}
