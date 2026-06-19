import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import {
  propertyKnowledgeOverview,
  propertyKnowledgeUi,
} from "@/lib/i18n/property-knowledge";
import {
  ArticleMetaRow,
  ArticleP,
  CategoryBadge,
  EditorialList,
  PropertyKnowledgeBackLink,
  PropertyKnowledgeBreadcrumb,
  PropertyKnowledgePageButtons,
} from "@/components/property-knowledge/ArticleUi";

const IMAGES = {
  hero: "/images/knowledge/sanierung-modernisierung.jpg",
  dach: "/images/wissen/dachsanierung-modernisierung.jpg",
} as const;

const copy = {
  de: {
    breadcrumbTitle: "Sanierung & Modernisierung",
    readMinutes: 9,
    hero: {
      title: "Sanierung & Modernisierung",
      intro:
        "Renovieren, modernisieren oder sanieren? Maßnahmen richtig verstehen und den langfristigen Wert einer Immobilie gezielt verbessern.",
      imageAlt: "Sanierung und Modernisierung – Wohnimmobilie in Deutschland",
    },
    header: {
      title: "Sanierung & Modernisierung – Renovieren, modernisieren oder sanieren?",
    },
    intro: {
      p1: "Der Kauf einer Immobilie ist häufig nur der erste Schritt. Viele Gebäude benötigen im Laufe der Jahre Maßnahmen zur Instandhaltung, Erneuerung oder energetischen Verbesserung. Dabei tauchen regelmäßig Begriffe wie Renovierung, Modernisierung oder Sanierung auf. Obwohl diese Begriffe oft gleichbedeutend verwendet werden, unterscheiden sie sich sowohl im Umfang als auch in ihren Auswirkungen auf Wert, Wohnqualität und Energieeffizienz einer Immobilie.",
      p2: "Eine sorgfältige Planung hilft dabei, notwendige Maßnahmen sinnvoll zu priorisieren und gleichzeitig langfristig den Wert der Immobilie zu erhalten oder sogar zu steigern.",
    },
    unterschiede: {
      heading: "Unterschiede zwischen Renovierung und Sanierung",
      p1: "Zwischen Renovierung, Modernisierung und Sanierung bestehen deutliche Unterschiede.",
      cards: [
        {
          title: "Renovierung",
          description:
            "Eine Renovierung umfasst in erster Linie kosmetische Maßnahmen. Dazu gehören beispielsweise das Streichen von Wänden, das Verlegen neuer Bodenbeläge oder der Austausch von Türen. Ziel ist es, das Erscheinungsbild der Immobilie zu verbessern, ohne die Bausubstanz wesentlich zu verändern.",
        },
        {
          title: "Modernisierung",
          description:
            "Unter Modernisierung versteht man Maßnahmen, die den Wohnkomfort erhöhen oder den Energieverbrauch reduzieren. Dazu zählen etwa neue Fenster, eine moderne Heizungsanlage oder die Installation einer besseren Wärmedämmung.",
        },
        {
          title: "Sanierung",
          description:
            "Eine Sanierung geht deutlich weiter. Sie wird notwendig, wenn Schäden an der Bausubstanz vorhanden sind oder technische Anlagen nicht mehr den aktuellen Anforderungen entsprechen. Feuchtigkeitsschäden, marode Leitungen oder ein sanierungsbedürftiges Dach sind typische Beispiele. Bei umfangreichen Arbeiten spricht man häufig von einer Kernsanierung.",
        },
      ],
    },
    dach: {
      heading: "Das Dach als wichtiger Bestandteil der Gebäudehülle",
      p1: "Das Dach schützt die gesamte Immobilie vor Witterungseinflüssen. Gleichzeitig hat es einen erheblichen Einfluss auf die Energieeffizienz.",
      p2: "Bei älteren Gebäuden können beschädigte Dachziegel, undichte Stellen oder eine unzureichende Dämmung zu hohen Wärmeverlusten führen. In vielen Fällen lohnt sich eine Dachsanierung, insbesondere wenn gleichzeitig eine energetische Verbesserung vorgenommen wird.",
      p3: "Neben der Erhaltung der Bausubstanz kann ein modernes Dach den Wohnkomfort erhöhen und langfristig den Marktwert der Immobilie verbessern.",
      imageAlt:
        "Dachsanierung an einer europäischen Wohnimmobilie mit Handwerkern bei der Arbeit",
    },
    fenster: {
      heading: "Fenster und ihre Bedeutung für die Energieeffizienz",
      p1: "Veraltete Fenster gehören zu den häufigsten Ursachen für Wärmeverluste. Einfachverglasungen oder ältere Isolierfenster entsprechen häufig nicht mehr dem heutigen Standard.",
      listIntro: "Moderne Fenster bieten mehrere Vorteile:",
      list: [
        "geringere Heizkosten,",
        "verbesserter Schallschutz,",
        "höherer Wohnkomfort,",
        "bessere Energieeffizienz,",
        "Wertsteigerung der Immobilie.",
      ],
      p2: "Insbesondere bei älteren Häusern kann der Austausch der Fenster einen wichtigen Beitrag zur energetischen Modernisierung leisten.",
    },
    heizung: {
      heading: "Die Heizungsanlage als zentraler Kostenfaktor",
      p1: "Die Heizungsanlage beeinflusst sowohl die laufenden Betriebskosten als auch die zukünftige Attraktivität einer Immobilie.",
      p2: "Ältere Öl- oder Gasheizungen verursachen häufig höhere Energiekosten und können mittelfristig einen Modernisierungsbedarf auslösen. Moderne Systeme wie Wärmepumpen, Hybridheizungen oder effiziente Brennwerttechnik bieten oftmals Einsparpotenziale und verbessern die Energieeffizienz des Gebäudes.",
      p3: "Vor einer Entscheidung sollten jedoch die individuellen Gegebenheiten der Immobilie sorgfältig analysiert werden, da nicht jede Heiztechnik für jedes Gebäude gleichermaßen geeignet ist.",
    },
    daemmung: {
      heading: "Dämmung reduziert langfristig Energiekosten",
      p1: "Eine gute Wärmedämmung trägt wesentlich zur Energieeinsparung bei. Besonders betroffen sind:",
      cards: [
        { title: "Dach", description: "Dachflächen" },
        { title: "Fassade", description: "Außenfassaden" },
        { title: "Kellerdecke", description: "Kellerdecken" },
        { title: "Oberste Geschossdecke", description: "oberste Geschossdecken" },
      ],
      p2: "Eine fachgerechte Dämmung kann den Energieverbrauch erheblich senken und gleichzeitig das Raumklima verbessern. Gerade im Zusammenhang mit steigenden Energiekosten gewinnt dieser Bereich zunehmend an Bedeutung.",
    },
    elektrik: {
      heading: "Elektrik – häufig unterschätzt",
      p1: "Bei vielen älteren Immobilien entspricht die elektrische Anlage nicht mehr den heutigen Anforderungen. Veraltete Leitungen, fehlende Sicherungen oder eine zu geringe Anzahl an Stromkreisen können Sicherheitsrisiken darstellen.",
      listIntro: "Eine Modernisierung der Elektrik bietet mehrere Vorteile:",
      list: [
        "höhere Sicherheit,",
        "Anpassung an moderne Haushaltsgeräte,",
        "Vorbereitung für Photovoltaik oder Wallboxen,",
        "langfristige Werterhaltung.",
      ],
      p2: "Insbesondere bei Gebäuden aus den 1950er- bis 1970er-Jahren sollte die Elektroinstallation sorgfältig überprüft werden.",
    },
    foerderprogramme: {
      heading: "Förderprogramme für Modernisierungsmaßnahmen",
      p1: "Zur Unterstützung energetischer Maßnahmen stehen verschiedene Fördermöglichkeiten zur Verfügung. Ziel dieser Programme ist es, Eigentümer bei Investitionen in Energieeffizienz und Klimaschutz finanziell zu entlasten.",
      listIntro: "Gefördert werden unter anderem:",
      cards: [
        { title: "Energetische Maßnahmen", description: "energetische Komplettsanierungen" },
        { title: "Heizung", description: "Heizungsmodernisierungen" },
        { title: "Fenster", description: "Fensteraustausch" },
        { title: "Dämmung", description: "Dämmmaßnahmen" },
        {
          title: "Erneuerbare Energien",
          description: "Maßnahmen zur Nutzung erneuerbarer Energien",
        },
      ],
      p2: "Je nach Projekt kommen Zuschüsse oder zinsgünstige Darlehen infrage.",
    },
    kfw: {
      label: "Förderung",
      heading: "KfW-Förderung",
      p1: "Die Kreditanstalt für Wiederaufbau (KfW) gehört zu den wichtigsten Förderinstitutionen in Deutschland. Sie unterstützt Eigentümer bei zahlreichen Sanierungs- und Modernisierungsmaßnahmen.",
      listIntro: "Besonders interessant sind Programme für:",
      list: [
        "energieeffiziente Sanierungen,",
        "den Einbau moderner Heizsysteme,",
        "Einzelmaßnahmen zur Verbesserung der Energieeffizienz,",
        "umfassende Sanierungen zum Effizienzhaus.",
      ],
      p2: "Da sich Förderbedingungen regelmäßig ändern, sollte vor Beginn der Maßnahmen geprüft werden, welche Programme aktuell verfügbar sind.",
    },
    wertsteigerung: {
      heading: "Wertsteigerung durch Modernisierung",
      p1: "Nicht jede Investition führt automatisch zu einer höheren Rendite. Einige Maßnahmen haben jedoch einen besonders positiven Einfluss auf den Immobilienwert.",
      listIntro: "Dazu zählen insbesondere:",
      cards: [
        { title: "Dachsanierung", description: "Dachsanierungen" },
        { title: "Neue Fenster", description: "hochwertige Fenster" },
        { title: "Moderne Heiztechnik", description: "moderne Heizungsanlagen" },
        { title: "Elektrik", description: "zeitgemäße Elektroinstallationen" },
        { title: "Badsanierung", description: "Badsanierungen und hochwertige Innenausstattungen" },
        { title: "Energetische Sanierung", description: "energetische Sanierungen" },
      ],
      p2: "Neben der Wertsteigerung verbessern diese Maßnahmen häufig auch die Vermietbarkeit und die langfristige Attraktivität der Immobilie.",
    },
    fazit: {
      heading: "Fazit",
      p1: "Renovierung, Modernisierung und Sanierung verfolgen unterschiedliche Ziele und sollten nicht miteinander verwechselt werden. Während Renovierungen hauptsächlich der optischen Aufwertung dienen, tragen Modernisierungen und Sanierungen wesentlich zur Werterhaltung, Energieeffizienz und Zukunftsfähigkeit einer Immobilie bei.",
      p2: "Eine sorgfältige Analyse des Gebäudezustands sowie eine wirtschaftliche Betrachtung der geplanten Maßnahmen sind entscheidend, um Investitionen sinnvoll zu priorisieren. Gerade bei größeren Projekten kann eine individuelle Bewertung helfen, Chancen und Risiken besser einzuschätzen und langfristig fundierte Entscheidungen zu treffen. Im Rahmen einer strukturierten Immobilienanalyse betrachtet immowap Modernisierungs- und Sanierungsmaßnahmen nicht isoliert, sondern immer im Zusammenhang mit dem jeweiligen Objekt, den finanziellen Möglichkeiten und den persönlichen Zielen des Eigentümers.",
    },
    cta: {
      heading: "Langfristige Entscheidungen beginnen mit einer fundierten Analyse.",
      text: "Nicht jede Modernisierungsmaßnahme führt automatisch zu einer Wertsteigerung. Eine strukturierte Betrachtung hilft dabei, Investitionen sinnvoll zu priorisieren und Chancen sowie Risiken besser einzuordnen.",
    },
  },
  en: {
    breadcrumbTitle: "Renovation & Modernization",
    readMinutes: 9,
    hero: {
      title: "Renovation & Modernization",
      intro:
        "Renovate, modernise or refurbish? Understand the measures correctly and improve the long-term value of a property in a targeted way.",
      imageAlt: "Renovation and modernization – residential property in Germany",
    },
    header: {
      title: "Renovation & Modernization – Renovate, modernise or refurbish?",
    },
    intro: {
      p1: "Buying a property is often only the first step. Many buildings require maintenance, renewal or energy improvements over the years. Terms such as renovation, modernisation or refurbishment appear regularly. Although these terms are often used interchangeably, they differ both in scope and in their impact on value, living quality and energy efficiency.",
      p2: "Careful planning helps prioritise necessary measures sensibly while preserving or even increasing the property's value over the long term.",
    },
    unterschiede: {
      heading: "Differences between renovation and refurbishment",
      p1: "There are clear differences between renovation, modernisation and refurbishment.",
      cards: [
        {
          title: "Renovation",
          description:
            "Renovation primarily comprises cosmetic measures. These include, for example, painting walls, laying new flooring or replacing doors. The aim is to improve the property's appearance without substantially altering the building fabric.",
        },
        {
          title: "Modernisation",
          description:
            "Modernisation refers to measures that increase living comfort or reduce energy consumption. Examples include new windows, a modern heating system or improved thermal insulation.",
        },
        {
          title: "Refurbishment",
          description:
            "Refurbishment goes significantly further. It becomes necessary when there is damage to the building fabric or technical systems no longer meet current requirements. Moisture damage, deteriorating pipework or a roof in need of refurbishment are typical examples. Extensive work is often referred to as a full core refurbishment.",
        },
      ],
    },
    dach: {
      heading: "The roof as an important part of the building envelope",
      p1: "The roof protects the entire property from the weather. At the same time, it has a significant impact on energy efficiency.",
      p2: "In older buildings, damaged roof tiles, leaks or insufficient insulation can lead to high heat loss. In many cases, roof refurbishment is worthwhile, especially when combined with energy improvements.",
      p3: "In addition to preserving the building fabric, a modern roof can increase living comfort and improve the property's market value over the long term.",
      imageAlt:
        "Roof refurbishment on a European residential property with craftsmen at work",
    },
    fenster: {
      heading: "Windows and their importance for energy efficiency",
      p1: "Outdated windows are among the most common causes of heat loss. Single glazing or older insulated windows often no longer meet today's standards.",
      listIntro: "Modern windows offer several advantages:",
      list: [
        "lower heating costs,",
        "improved sound insulation,",
        "greater living comfort,",
        "better energy efficiency,",
        "increase in property value.",
      ],
      p2: "Especially in older houses, replacing windows can make an important contribution to energy modernisation.",
    },
    heizung: {
      heading: "The heating system as a central cost factor",
      p1: "The heating system affects both running operating costs and the future attractiveness of a property.",
      p2: "Older oil or gas heating systems often cause higher energy costs and can create a need for modernisation in the medium term. Modern systems such as heat pumps, hybrid heating or efficient condensing technology often offer savings potential and improve the building's energy efficiency.",
      p3: "Before deciding, however, the individual circumstances of the property should be analysed carefully, as not every heating technology is equally suitable for every building.",
    },
    daemmung: {
      heading: "Insulation reduces energy costs over the long term",
      p1: "Good thermal insulation contributes significantly to energy savings. The following areas are particularly affected:",
      cards: [
        { title: "Roof", description: "roof surfaces" },
        { title: "Façade", description: "external façades" },
        { title: "Basement ceiling", description: "basement ceilings" },
        { title: "Top floor ceiling", description: "top floor ceilings" },
      ],
      p2: "Professional insulation can significantly reduce energy consumption while improving indoor comfort. Especially in the context of rising energy costs, this area is becoming increasingly important.",
    },
    elektrik: {
      heading: "Electrical systems – often underestimated",
      p1: "In many older properties, the electrical installation no longer meets today's requirements. Outdated wiring, missing fuses or too few circuits can pose safety risks.",
      listIntro: "Modernising the electrical system offers several advantages:",
      list: [
        "greater safety,",
        "adaptation to modern household appliances,",
        "preparation for photovoltaics or wallboxes,",
        "long-term preservation of value.",
      ],
      p2: "Especially in buildings from the 1950s to 1970s, the electrical installation should be reviewed carefully.",
    },
    foerderprogramme: {
      heading: "Funding programmes for modernisation measures",
      p1: "Various funding options are available to support energy measures. The aim of these programmes is to relieve owners financially when investing in energy efficiency and climate protection.",
      listIntro: "Funding is available, among other things, for:",
      cards: [
        { title: "Energy measures", description: "comprehensive energy refurbishments" },
        { title: "Heating", description: "heating modernisation" },
        { title: "Windows", description: "window replacement" },
        { title: "Insulation", description: "insulation measures" },
        { title: "Renewable energy", description: "measures using renewable energy" },
      ],
      p2: "Depending on the project, grants or low-interest loans may be available.",
    },
    kfw: {
      label: "Funding",
      heading: "KfW funding",
      p1: "KfW (Kreditanstalt für Wiederaufbau) is one of the most important funding institutions in Germany. It supports owners with numerous refurbishment and modernisation measures.",
      listIntro: "Programmes of particular interest include:",
      list: [
        "energy-efficient refurbishments,",
        "installation of modern heating systems,",
        "individual measures to improve energy efficiency,",
        "comprehensive refurbishments to efficient house standard.",
      ],
      p2: "As funding conditions change regularly, it should be checked before work begins which programmes are currently available.",
    },
    wertsteigerung: {
      heading: "Value increase through modernisation",
      p1: "Not every investment automatically leads to a higher return. However, some measures have a particularly positive impact on property value.",
      listIntro: "These include in particular:",
      cards: [
        { title: "Roof refurbishment", description: "roof refurbishments" },
        { title: "New windows", description: "high-quality windows" },
        { title: "Modern heating technology", description: "modern heating systems" },
        { title: "Electrical systems", description: "contemporary electrical installations" },
        { title: "Bathroom refurbishment", description: "bathroom refurbishments and high-quality interior fittings" },
        { title: "Energy refurbishment", description: "energy refurbishments" },
      ],
      p2: "In addition to increasing value, these measures often also improve lettability and the property's long-term attractiveness.",
    },
    fazit: {
      heading: "Conclusion",
      p1: "Renovation, modernisation and refurbishment pursue different goals and should not be confused with one another. While renovations mainly serve visual improvement, modernisation and refurbishment contribute significantly to preserving value, energy efficiency and future viability.",
      p2: "A careful analysis of the building's condition and an economic assessment of planned measures are crucial for prioritising investments sensibly. Especially for larger projects, an individual evaluation can help assess opportunities and risks more clearly and make well-informed long-term decisions. As part of a structured property analysis, immowap considers modernisation and refurbishment measures not in isolation but always in connection with the respective property, financial possibilities and the owner's personal goals.",
    },
    cta: {
      heading: "Long-term decisions start with a thorough analysis.",
      text: "Not every modernisation measure automatically leads to an increase in value. A structured assessment helps prioritise investments sensibly and better evaluate opportunities and risks.",
    },
  },
} as const;

function SectionImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#D7D2C8]/60 bg-white shadow-[0_8px_40px_rgba(15,61,46,0.06)]">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={900}
        priority={priority}
        className="h-auto w-full object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  );
}

function WindowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 text-[#B9965B]"
      aria-hidden="true"
    >
      <path d="M3 7.5V18a1.5 1.5 0 001.5 1.5h15A1.5 1.5 0 0021 18V7.5M3 7.5l9-4.5 9 4.5M3 7.5h18M12 3v16.5" />
    </svg>
  );
}

interface SanierungModernisierungPageProps {
  locale: Locale;
}

export function SanierungModernisierungPage({ locale }: SanierungModernisierungPageProps) {
  const t = copy[locale];
  const ui = propertyKnowledgeUi[locale];
  const overviewHref = propertyKnowledgeOverview[locale].href;

  return (
    <>
      <section className="relative min-h-[calc(100svh-5rem)] w-full overflow-hidden">
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src={IMAGES.hero}
            alt={t.hero.imageAlt}
            width={2400}
            height={1350}
            priority
            className="h-full w-full object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0F3D2E]/90 from-0% via-[#0F3D2E]/60 via-[50%] to-[#0F3D2E]/40 to-[100%] max-md:via-[#0F3D2E]/70"
          aria-hidden="true"
        />
        <div className="relative z-[2] mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl items-center px-6 pb-20 pt-16 md:px-8 md:pb-24 md:pt-20">
          <div className="max-w-3xl">
            <p className="text-label mb-6 block text-[#B9965B]">{ui.categoryShort}</p>
            <h1 className="text-h1 text-white">{t.hero.title}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-[1.8] text-white/90">{t.hero.intro}</p>
            <PropertyKnowledgePageButtons locale={locale} onDark className="mt-10" />
          </div>
        </div>
      </section>

      <div className="bg-[#F7F5EF] py-16 md:py-24">
        <div className="mx-auto max-w-[850px] px-6 md:px-8">
          <PropertyKnowledgeBreadcrumb locale={locale} currentTitle={t.breadcrumbTitle} />

          <header className="mb-10">
            <CategoryBadge locale={locale} />
            <h2 className="text-[1.75rem] font-bold leading-tight tracking-tight text-[#0F3D2E] md:text-[2.125rem]">
              {t.header.title}
            </h2>
            <div
              aria-hidden="true"
              className="mt-7 h-px w-16 rounded-full bg-[#B9965B]/55"
            />
            <ArticleMetaRow locale={locale} readMinutes={t.readMinutes} />
          </header>

          <article>
            <ArticleP>{t.intro.p1}</ArticleP>
            <ArticleP>{t.intro.p2}</ArticleP>
          </article>
        </div>
      </div>

      <Section className="bg-[#F7F5EF] py-16 md:py-24">
        <div className="mx-auto max-w-[850px]">
          <h2
            id="unterschiede"
            className="mb-5 flex scroll-mt-28 items-start gap-3 text-[1.375rem] font-semibold leading-snug text-[#0F3D2E] md:text-2xl"
          >
            <span
              aria-hidden="true"
              className="mt-[0.35em] inline-block h-[0.9em] w-0.5 shrink-0 rounded-full bg-[#B9965B]/55"
            />
            {t.unterschiede.heading}
          </h2>
          <ArticleP>{t.unterschiede.p1}</ArticleP>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {t.unterschiede.cards.map((card) => (
              <Card
                key={card.title}
                className="h-full border-[#D7D2C8]/80 bg-white shadow-[0_4px_20px_rgba(15,61,46,0.05)]"
              >
                <CardTitle className="text-lg">{card.title}</CardTitle>
                <CardDescription className="text-[#1D1D1B]/72">
                  {card.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="muted" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionImage src={IMAGES.dach} alt={t.dach.imageAlt} />
            <div>
              <h2
                id="dach"
                className="mb-5 flex scroll-mt-28 items-start gap-3 text-[1.375rem] font-semibold leading-snug text-[#0F3D2E] md:text-2xl"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.35em] inline-block h-[0.9em] w-0.5 shrink-0 rounded-full bg-[#B9965B]/55"
                />
                {t.dach.heading}
              </h2>
              <ArticleP>{t.dach.p1}</ArticleP>
              <ArticleP>{t.dach.p2}</ArticleP>
              <ArticleP>{t.dach.p3}</ArticleP>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-[#F7F5EF] py-16 md:py-24">
        <div className="mx-auto max-w-[850px]">
          <h2
            id="fenster"
            className="mb-5 flex scroll-mt-28 items-start gap-3 text-[1.375rem] font-semibold leading-snug text-[#0F3D2E] md:text-2xl"
          >
            <span
              aria-hidden="true"
              className="mt-[0.35em] inline-block h-[0.9em] w-0.5 shrink-0 rounded-full bg-[#B9965B]/55"
            />
            {t.fenster.heading}
          </h2>
          <div className="mt-8 grid items-start gap-8 md:grid-cols-[auto_1fr] md:gap-10">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#B9965B]/20 bg-[#B9965B]/8">
              <WindowIcon />
            </div>
            <div>
              <p className="text-base leading-[1.85] text-[#1D1D1B]/72 md:text-[1.0625rem]">
                {t.fenster.p1}
              </p>
              <ArticleP>{t.fenster.listIntro}</ArticleP>
              <EditorialList items={t.fenster.list} />
              <ArticleP>{t.fenster.p2}</ArticleP>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="muted" className="py-16 md:py-24">
        <div className="mx-auto max-w-[850px]">
          <h2
            id="heizung"
            className="mb-5 flex scroll-mt-28 items-start gap-3 text-[1.375rem] font-semibold leading-snug text-[#0F3D2E] md:text-2xl"
          >
            <span
              aria-hidden="true"
              className="mt-[0.35em] inline-block h-[0.9em] w-0.5 shrink-0 rounded-full bg-[#B9965B]/55"
            />
            {t.heizung.heading}
          </h2>
          <div className="mt-8 rounded-2xl border border-[#0F3D2E]/12 bg-white px-7 py-8 shadow-[0_4px_24px_rgba(15,61,46,0.06)] md:px-10 md:py-10">
            <p className="text-base leading-[1.85] text-[#1D1D1B]/72 md:text-[1.0625rem]">
              {t.heizung.p1}
            </p>
            <ArticleP>{t.heizung.p2}</ArticleP>
            <ArticleP>{t.heizung.p3}</ArticleP>
          </div>
        </div>
      </Section>

      <Section className="bg-[#F7F5EF] py-16 md:py-24">
        <div className="mx-auto max-w-[850px]">
          <h2
            id="daemmung"
            className="mb-5 flex scroll-mt-28 items-start gap-3 text-[1.375rem] font-semibold leading-snug text-[#0F3D2E] md:text-2xl"
          >
            <span
              aria-hidden="true"
              className="mt-[0.35em] inline-block h-[0.9em] w-0.5 shrink-0 rounded-full bg-[#B9965B]/55"
            />
            {t.daemmung.heading}
          </h2>
          <ArticleP>{t.daemmung.p1}</ArticleP>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {t.daemmung.cards.map((card) => (
              <Card
                key={card.title}
                className="h-full border-[#D7D2C8]/80 bg-white shadow-[0_4px_20px_rgba(15,61,46,0.05)]"
              >
                <CardTitle className="text-lg">{card.title}</CardTitle>
                <CardDescription className="text-[#1D1D1B]/72">
                  {card.description}
                </CardDescription>
              </Card>
            ))}
          </div>
          <ArticleP>{t.daemmung.p2}</ArticleP>
        </div>
      </Section>

      <Section variant="muted" className="py-16 md:py-24">
        <div className="mx-auto max-w-[850px]">
          <h2
            id="elektrik"
            className="mb-5 flex scroll-mt-28 items-start gap-3 text-[1.375rem] font-semibold leading-snug text-[#0F3D2E] md:text-2xl"
          >
            <span
              aria-hidden="true"
              className="mt-[0.35em] inline-block h-[0.9em] w-0.5 shrink-0 rounded-full bg-[#B9965B]/55"
            />
            {t.elektrik.heading}
          </h2>
          <ArticleP>{t.elektrik.p1}</ArticleP>
          <ArticleP>{t.elektrik.listIntro}</ArticleP>
          <EditorialList items={t.elektrik.list} />
          <ArticleP>{t.elektrik.p2}</ArticleP>
        </div>
      </Section>

      <Section className="bg-[#F7F5EF] py-16 md:py-24">
        <div className="mx-auto max-w-[850px]">
          <h2
            id="foerderprogramme"
            className="mb-5 flex scroll-mt-28 items-start gap-3 text-[1.375rem] font-semibold leading-snug text-[#0F3D2E] md:text-2xl"
          >
            <span
              aria-hidden="true"
              className="mt-[0.35em] inline-block h-[0.9em] w-0.5 shrink-0 rounded-full bg-[#B9965B]/55"
            />
            {t.foerderprogramme.heading}
          </h2>
          <ArticleP>{t.foerderprogramme.p1}</ArticleP>
          <ArticleP>{t.foerderprogramme.listIntro}</ArticleP>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.foerderprogramme.cards.map((card) => (
              <Card
                key={card.title}
                className={cn(
                  "h-full border-[#D7D2C8]/80 bg-white shadow-[0_4px_20px_rgba(15,61,46,0.05)]",
                  card.title === "Erneuerbare Energien" && "sm:col-span-2 lg:col-span-1",
                  card.title === "Renewable energy" && "sm:col-span-2 lg:col-span-1",
                )}
              >
                <CardTitle className="text-lg">{card.title}</CardTitle>
                <CardDescription className="text-[#1D1D1B]/72">
                  {card.description}
                </CardDescription>
              </Card>
            ))}
          </div>
          <ArticleP>{t.foerderprogramme.p2}</ArticleP>
        </div>
      </Section>

      <Section variant="muted" className="py-16 md:py-24">
        <div className="mx-auto max-w-[850px]">
          <div className="rounded-2xl border border-[#B9965B]/25 bg-white px-7 py-8 shadow-[0_8px_32px_rgba(185,150,91,0.08)] ring-1 ring-[#B9965B]/10 md:px-10 md:py-12">
            <p className="text-label mb-4 block text-gold-600">{t.kfw.label}</p>
            <h2
              id="kfw"
              className="mb-5 flex scroll-mt-28 items-start gap-3 text-[1.375rem] font-semibold leading-snug text-[#0F3D2E] md:text-2xl"
            >
              <span
                aria-hidden="true"
                className="mt-[0.35em] inline-block h-[0.9em] w-0.5 shrink-0 rounded-full bg-[#B9965B]/55"
              />
              {t.kfw.heading}
            </h2>
            <p className="text-base leading-[1.85] text-[#1D1D1B]/72 md:text-[1.0625rem]">
              {t.kfw.p1}
            </p>
            <ArticleP>{t.kfw.listIntro}</ArticleP>
            <EditorialList items={t.kfw.list} />
            <ArticleP>{t.kfw.p2}</ArticleP>
          </div>
        </div>
      </Section>

      <Section className="bg-[#F7F5EF] py-16 md:py-24">
        <div className="mx-auto max-w-[850px]">
          <h2
            id="wertsteigerung"
            className="mb-5 flex scroll-mt-28 items-start gap-3 text-[1.375rem] font-semibold leading-snug text-[#0F3D2E] md:text-2xl"
          >
            <span
              aria-hidden="true"
              className="mt-[0.35em] inline-block h-[0.9em] w-0.5 shrink-0 rounded-full bg-[#B9965B]/55"
            />
            {t.wertsteigerung.heading}
          </h2>
          <ArticleP>{t.wertsteigerung.p1}</ArticleP>
          <ArticleP>{t.wertsteigerung.listIntro}</ArticleP>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.wertsteigerung.cards.map((card) => (
              <Card
                key={card.title}
                className="h-full border-[#D7D2C8]/80 bg-white shadow-[0_4px_20px_rgba(15,61,46,0.05)]"
              >
                <CardTitle className="text-lg">{card.title}</CardTitle>
                <CardDescription className="text-[#1D1D1B]/72">
                  {card.description}
                </CardDescription>
              </Card>
            ))}
          </div>
          <ArticleP>{t.wertsteigerung.p2}</ArticleP>
        </div>
      </Section>

      <Section variant="muted" className="py-16 md:py-24">
        <div className="mx-auto max-w-[850px]">
          <h2
            id="fazit"
            className="mb-5 flex scroll-mt-28 items-start gap-3 text-[1.375rem] font-semibold leading-snug text-[#0F3D2E] md:text-2xl"
          >
            <span
              aria-hidden="true"
              className="mt-[0.35em] inline-block h-[0.9em] w-0.5 shrink-0 rounded-full bg-[#B9965B]/55"
            />
            {t.fazit.heading}
          </h2>
          <ArticleP>{t.fazit.p1}</ArticleP>
          <ArticleP>{t.fazit.p2}</ArticleP>

          <PropertyKnowledgeBackLink locale={locale} overviewHref={overviewHref} />
        </div>
      </Section>

      <section className="bg-[#F7F5EF] py-24 md:py-32">
        <div className="mx-auto max-w-[850px] px-6 text-center md:px-8">
          <h2 className="text-h2 text-brand-800">{t.cta.heading}</h2>
          <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-[1.8] text-muted">{t.cta.text}</p>
          <PropertyKnowledgePageButtons locale={locale} className="mt-12 justify-center" />
        </div>
      </section>

      <div className="h-20 bg-cream md:h-[100px]" aria-hidden="true" />
    </>
  );
}
