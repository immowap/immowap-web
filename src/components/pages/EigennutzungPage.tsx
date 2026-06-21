import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SolutionHeroSection } from "@/components/ui/SolutionHeroSection";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FAQQuestionAccordion } from "@/components/faq/FAQQuestionAccordion";
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

const eigennutzungFAQ = [
  {
    question: "Ist Kaufen für die Eigennutzung besser als Mieten?",
    answer:
      "Eine allgemeingültige Antwort gibt es nicht. Ob Kaufen oder Mieten sinnvoller ist, hängt von der persönlichen Situation, dem verfügbaren Eigenkapital, der beruflichen Planung und den langfristigen Lebenszielen ab.\n\nEin Immobilienkauf kann besonders dann sinnvoll sein, wenn die Immobilie über viele Jahre selbst genutzt werden soll und die monatliche Belastung dauerhaft tragbar bleibt. Mieten bietet dagegen mehr Flexibilität und kann bei absehbaren Veränderungen im Beruf oder Privatleben die bessere Lösung sein.",
  },
  {
    question: "Wie viel Eigenkapital wird für den Immobilienkauf benötigt?",
    answer:
      "Empfehlenswert ist, zumindest die Kaufnebenkosten aus eigenen Mitteln zu finanzieren. Dazu zählen insbesondere Grunderwerbsteuer, Notar- und Grundbuchkosten sowie gegebenenfalls Maklerkosten.\n\nEin Eigenkapitalanteil von 20 bis 30 Prozent kann häufig zu besseren Finanzierungskonditionen beitragen und sorgt in vielen Fällen für mehr finanzielle Sicherheit.",
  },
  {
    question: "Wie viel Darlehen gewährt mir die Bank?",
    answer:
      "Die Höhe des Darlehens richtet sich unter anderem nach Einkommen, Eigenkapital, Alter, Bonität, bestehenden Verpflichtungen und dem Wert der Immobilie.\n\nNeben dem Kaufpreis prüfen Banken vor allem, ob die monatliche Rate langfristig tragbar ist. Daher spielt die persönliche Haushaltsrechnung eine wichtige Rolle.",
  },
  {
    question: "Wie hoch sollte die monatliche Belastung maximal sein?",
    answer:
      "Als grobe Orientierung gilt, dass die monatliche Belastung dauerhaft in einem gesunden Verhältnis zum Nettoeinkommen stehen sollte.\n\nViele Banken und Finanzierungsberater betrachten eine Belastung von etwa 30 bis 40 Prozent des monatlichen Nettoeinkommens als vertretbar. Gleichzeitig sollten ausreichend Reserven für Lebenshaltungskosten, Instandhaltung und unerwartete Ausgaben verbleiben.",
  },
  {
    question: "Wie hoch sind die Kaufnebenkosten?",
    answer:
      "Die Kaufnebenkosten liegen je nach Bundesland und individueller Situation häufig zwischen etwa 10 und 15 Prozent des Kaufpreises.\n\nDazu gehören Grunderwerbsteuer, Notar- und Grundbuchkosten sowie gegebenenfalls Maklerprovisionen. Diese Kosten sollten frühzeitig in die Finanzierungsplanung einbezogen werden.",
  },
  {
    question: "Ist der angebotene Kaufpreis angemessen?",
    answer:
      "Der Angebotspreis entspricht nicht immer dem tatsächlichen Marktwert. Lage, Baujahr, Zustand, Energieeffizienz, notwendige Modernisierungen und vergleichbare Immobilien spielen dabei eine wichtige Rolle.\n\nBei immowap wird eine Immobilie nicht nur anhand allgemeiner Marktdaten betrachtet. Auch individuelle Ziele, etwa langfristiges Wohnen oder zukünftige Familienplanung, fließen in die Bewertung ein.",
  },
  {
    question: "Wie wird der tatsächliche Wert einer Immobilie ermittelt?",
    answer:
      "Zur Wertermittlung kommen je nach Objekt unterschiedliche Verfahren zum Einsatz, beispielsweise das Vergleichswertverfahren, das Sachwertverfahren oder das Ertragswertverfahren.\n\nDarüber hinaus beeinflussen Zustand, Modernisierungen, Mikrolage und energetische Eigenschaften den Wert. Eine fundierte Einschätzung berücksichtigt daher immer mehrere Faktoren und nicht nur einzelne Kennzahlen.",
  },
  {
    question: "Wie hoch ist der Quadratmeterpreis in dieser Lage?",
    answer:
      "Der Quadratmeterpreis wird von vielen Faktoren beeinflusst. Neben Stadt und Stadtteil spielen Baujahr, Ausstattung, Energieeffizienz, Etage, Balkon, Stellplatz und der allgemeine Zustand eine Rolle.\n\nSelbst innerhalb derselben Straße können deutliche Unterschiede bestehen. Deshalb sollte der Quadratmeterpreis immer im Zusammenhang mit dem konkreten Objekt betrachtet werden.",
  },
  {
    question: "Welche Unterlagen sollten vor dem Kauf geprüft werden?",
    answer:
      "Vor dem Kauf sollten unter anderem der Grundbuchauszug, die Teilungserklärung, der Wirtschaftsplan, Hausgeldabrechnungen, Protokolle der Eigentümerversammlungen, der Energieausweis sowie vorhandene Bauunterlagen geprüft werden.\n\nEine strukturierte Auswertung dieser Unterlagen hilft dabei, mögliche Risiken oder zukünftige Kosten frühzeitig zu erkennen. immowap unterstützt dabei, die Informationen übersichtlich einzuordnen.",
  },
  {
    question: "Wie wichtig ist der Energieausweis?",
    answer:
      "Der Energieausweis gibt Hinweise auf den energetischen Zustand einer Immobilie und kann Rückschlüsse auf künftige Heizkosten und möglichen Modernisierungsbedarf zulassen.\n\nEine ungünstige Energieklasse bedeutet nicht automatisch, dass eine Immobilie ungeeignet ist. Sie kann jedoch ein Hinweis darauf sein, dass in Zukunft Investitionen erforderlich werden.",
  },
  {
    question: "Was ist im Hausgeld enthalten?",
    answer:
      "Das Hausgeld umfasst typischerweise Kosten für Heizung, Wasser, Gebäudeversicherung, Hausverwaltung, Reinigung, Gartenpflege oder den Aufzug. Außerdem werden häufig Beiträge zur Instandhaltungsrücklage erhoben.\n\nFür Käufer ist besonders wichtig zu wissen, welche Kosten dauerhaft selbst getragen werden müssen und ob das Hausgeld zum Zustand des Gebäudes passt.",
  },
  {
    question: "Ist die Instandhaltungsrücklage ausreichend?",
    answer:
      "Eine angemessene Instandhaltungsrücklage kann helfen, größere Maßnahmen wie Dachsanierungen, Fassadenarbeiten oder den Austausch der Heizungsanlage zu finanzieren.\n\nIst die Rücklage zu niedrig, können Sonderumlagen notwendig werden. Deshalb sollte sie immer im Zusammenhang mit Alter, Zustand und Größe des Gebäudes betrachtet werden.",
  },
  {
    question: "Was verraten die Protokolle der Eigentümerversammlungen?",
    answer:
      "Die Protokolle enthalten oft wertvolle Informationen über geplante Sanierungen, Diskussionen innerhalb der Eigentümergemeinschaft oder mögliche finanzielle Belastungen.\n\nGerade bei älteren Gebäuden können sie wichtige Hinweise auf zukünftige Kosten geben. Eine sorgfältige Auswertung kann unangenehme Überraschungen vermeiden.",
  },
  {
    question: "Besteht ein größerer Sanierungsbedarf?",
    answer:
      "Sanierungsbedarf kann beispielsweise bei Dach, Fassade, Fenstern, Heizung, Leitungen oder der Elektrik bestehen. Vor allem ältere Gebäude sollten genauer untersucht werden.\n\nNeben dem technischen Zustand ist auch entscheidend, welche Maßnahmen für die eigene Nutzung tatsächlich sinnvoll und notwendig sind.",
  },
  {
    question: "Wohnung oder Haus – was ist besser?",
    answer:
      "Eine Eigentumswohnung erfordert häufig weniger Kapital und bringt meist einen geringeren Verwaltungsaufwand mit sich.\n\nEin Haus bietet dagegen mehr Privatsphäre, größere Gestaltungsfreiheit und oft zusätzliche Flächen. Welche Lösung besser geeignet ist, hängt von Budget, Lebensstil und langfristigen Plänen ab.",
  },
  {
    question: "Welche Lage eignet sich langfristig zum Wohnen?",
    answer:
      "Eine gute Wohnlage zeichnet sich unter anderem durch eine funktionierende Infrastruktur, Einkaufsmöglichkeiten, Schulen, medizinische Versorgung und eine gute Verkehrsanbindung aus.\n\nEbenso wichtig ist jedoch die Frage, ob die Umgebung zu den eigenen Bedürfnissen und Lebensgewohnheiten passt.",
  },
  {
    question: "Ist der Kauf einer älteren Immobilie sinnvoll?",
    answer:
      "Auch ältere Immobilien können attraktiv sein, wenn Zustand und notwendige Investitionen realistisch eingeschätzt werden.\n\nBesondere Aufmerksamkeit verdienen dabei Heizung, Fenster, Elektrik, Leitungen und die energetische Qualität des Gebäudes. Ein niedriger Kaufpreis allein macht eine Immobilie noch nicht automatisch zu einem guten Angebot.",
  },
  {
    question: "Welche Risiken bestehen beim Kauf zur Eigennutzung?",
    answer:
      "Zu den häufigsten Risiken gehören ein zu hoher Kaufpreis, versteckte Mängel, unerwartete Sanierungskosten oder Veränderungen der persönlichen Lebenssituation.\n\nDeshalb sollte eine Immobilie nicht isoliert betrachtet werden. Neben dem Objekt selbst spielen auch Finanzierung, Zukunftspläne und individuelle Rahmenbedingungen eine wichtige Rolle.",
  },
  {
    question: "Worauf sollte ich achten, wenn ich später wieder verkaufen möchte?",
    answer:
      "Für die Wiederverkaufbarkeit sind Faktoren wie Lage, Zustand, Energieeffizienz, Balkon oder Terrasse, Stellplatz und die laufenden Kosten von Bedeutung.\n\nIdealerweise sollte eine Immobilie nicht nur den eigenen Bedürfnissen entsprechen, sondern auch für zukünftige Käufer attraktiv bleiben.",
  },
  {
    question: "Passt die Immobilie zu meinen Bedürfnissen und meinem Lebensstil?",
    answer:
      "Diese Frage ist häufig wichtiger als einzelne Kennzahlen oder Marktwerte.\n\nFamiliengröße, Arbeitsweg, Homeoffice, zukünftige Veränderungen und persönliche Vorstellungen vom Wohnen sollten in die Entscheidung einfließen.\n\nBei immowap steht deshalb nicht allein die Immobilie im Mittelpunkt, sondern vor allem die Menschen, die sie langfristig nutzen möchten. Ziel ist eine Betrachtung, die sowohl die Immobilie als auch die individuelle Lebenssituation berücksichtigt.",
  },
];

const copy = {
  de: {
    heroLabel: "Für Ihre Ziele",
    heroHeadline: "Immobilienentscheidungen für die Eigennutzung. Individuell betrachtet.",
    heroSubheadline:
      "Jede Lebenssituation ist unterschiedlich. Deshalb analysiert immowap Immobilien nicht nach einem starren Schema, sondern im Kontext Ihrer persönlichen Ziele, Prioritäten und Rahmenbedingungen.",
    heroBtnPrimary: "Analyse starten",
    heroBtnSecondary: "Anfrage senden",
    section1Headline:
      "Nicht jede passende Immobilie ist für jeden Menschen die richtige Entscheidung.",
    section1Text:
      "Eine Immobilie kann auf dem Papier attraktiv erscheinen und dennoch nicht zu den individuellen Bedürfnissen, der finanziellen Situation oder den langfristigen Plänen passen. Deshalb betrachten wir Immobilien immer im Zusammenhang mit den Menschen, die sie nutzen möchten.",
    section2Label: "Unsere Betrachtung",
    section2Headline: "Was wir berücksichtigen",
    considerationCards: [
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
    ],
    section3Headline: "Strukturierte Betrachtung statt pauschaler Empfehlungen",
    section3Text:
      "immowap kombiniert praktische Erfahrung mit datenbasierten Analysen und KI-gestützten Auswertungen. Dadurch entstehen nachvollziehbare Entscheidungsgrundlagen, die sich an Ihrer individuellen Situation orientieren.",
    section3Btn: "Mehr über unsere Analysen",
    section4Label: "Analyse",
    section4Headline: "Mögliche Analysen",
    cardLink: "Mehr erfahren",
    analysisCards: [
      {
        title: "Marktwertanalyse",
        description:
          "Einordnung des Kaufpreises im aktuellen Marktkontext – für eine realistische Beurteilung des Angebots.",
        href: "/de/loesungen/marktwertanalyse",
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
    ],
    section5Label: "Menschen & Situationen",
    section5Headline: "Für unterschiedliche Lebenssituationen",
    lifeSituationCards: [
      {
        title: "Erstimmobilie",
        description: "Der Schritt in die erste eigene Immobilie – strukturiert und fundiert begleitet.",
        image: "/images/eigennutzung/erstimmobilie.jpg",
      },
      {
        title: "Familien mit Kindern",
        description: "Mehr Raum, sichere Lage, langfristige Stabilität – Prioritäten, die wirklich zählen.",
        image: "/images/eigennutzung/familien.jpg",
      },
      {
        title: "Altersgerechtes Wohnen",
        description: "Komfort, Barrierefreiheit und die richtigen Rahmenbedingungen für die nächste Lebensphase.",
        image: "/images/eigennutzung/altersgerecht.jpg",
      },
      {
        title: "Langfristige Wohnplanung",
        description: "Immobilienentscheidungen, die heute passen und morgen Bestand haben.",
        image: "/images/eigennutzung/langfristig.jpg",
      },
    ],
    section6Label: "Was uns unterscheidet",
    section6Headline: "Die richtige Immobilie beginnt mit der richtigen Perspektive.",
    section6Text:
      "Fundierte Entscheidungen entstehen dann, wenn persönliche Ziele und objektive Analysen zusammengeführt werden.",
    section6TextSecondary:
      "Wir betrachten nicht jede Immobilie auf dieselbe Weise. Jede Analyse orientiert sich an den individuellen Gegebenheiten des Menschen, der sie nutzen möchte.",
    section6ListLabel: "Jede Analyse basiert auf",
    section6Items: [
      "Individuellen Zielen",
      "Persönlichen Prioritäten",
      "Lebensverhältnissen",
      "Erwartungen",
    ],
    ctaLabel: "Nächster Schritt",
    ctaHeadline: "Mit Klarheit entscheiden.",
    ctaText:
      "Strukturierte Analysen helfen dabei, Immobilienentscheidungen besser einzuordnen und individuelle Ziele langfristig zu unterstützen.",
    ctaBtnPrimary: "Analyse starten",
    ctaBtnSecondary: "Kontakt aufnehmen",
  },
  en: {
    heroLabel: "For your goals",
    heroHeadline: "Property decisions for owner-occupation. Considered individually.",
    heroSubheadline:
      "Every life situation is different. That is why immowap does not evaluate properties according to a rigid framework, but in the context of your personal goals, priorities and circumstances.",
    heroBtnPrimary: "Start analysis",
    heroBtnSecondary: "Send enquiry",
    section1Headline:
      "Not every suitable property is the right decision for everyone.",
    section1Text:
      "A property may appear attractive on paper and yet not match individual needs, the financial situation or long-term plans. That is why we always consider properties in relation to the people who wish to use them.",
    section2Label: "Our assessment",
    section2Headline: "What we take into account",
    considerationCards: [
      {
        title: "Personal goals",
        description:
          "What do you want from your property? Peace, proximity to family, more space — individual goals shape the analysis.",
      },
      {
        title: "Family size & life situation",
        description:
          "Current and future household size as well as life stages are factored into the assessment.",
      },
      {
        title: "Financial capacity",
        description:
          "Purchase price, ancillary costs, financing structure and monthly outgoings are assessed realistically.",
      },
      {
        title: "Location & infrastructure",
        description:
          "Local amenities, schools, transport links and neighbourhood development influence long-term quality of life.",
      },
      {
        title: "Future perspectives",
        description:
          "How will your life situation change in 5, 10 or 20 years? The analysis takes your long-term perspective into account.",
      },
      {
        title: "Opportunities & risks",
        description:
          "Objective assessment of potential and risks — without sugarcoating, with a clear focus on your situation.",
      },
    ],
    section3Headline: "Structured assessment instead of blanket recommendations",
    section3Text:
      "immowap combines practical experience with data-based analyses and AI-supported evaluations. This produces traceable decision-making foundations aligned with your individual situation.",
    section3Btn: "Learn more about our analyses",
    section4Label: "Analysis",
    section4Headline: "Possible analyses",
    cardLink: "Learn more",
    analysisCards: [
      {
        title: "Market value analysis",
        description:
          "Assessment of the purchase price in the current market context — for a realistic evaluation of the offer.",
        href: "/en/solutions/market-value-analysis",
      },
      {
        title: "Location analysis",
        description:
          "Evaluation of the location according to residential criteria: infrastructure, neighbourhood development, transport links.",
        href: "/en/solutions",
      },
      {
        title: "Risk analysis",
        description:
          "Structured assessment of risks — structural, financial and with regard to your personal situation.",
        href: "/en/solutions",
      },
      {
        title: "Individual property analysis",
        description:
          "Comprehensive consideration of a specific property in the context of your individual goals and circumstances.",
        href: "/en/solutions",
      },
    ],
    section5Label: "People & situations",
    section5Headline: "For different life situations",
    lifeSituationCards: [
      {
        title: "First home buyers",
        description: "The step into your first property — structured and well-founded.",
        image: "/images/eigennutzung/erstimmobilie.jpg",
      },
      {
        title: "Families with children",
        description: "More space, a safe location, long-term stability — priorities that truly matter.",
        image: "/images/eigennutzung/familien.jpg",
      },
      {
        title: "Age-appropriate living",
        description: "Comfort, accessibility and the right conditions for the next phase of life.",
        image: "/images/eigennutzung/altersgerecht.jpg",
      },
      {
        title: "Long-term residential planning",
        description: "Property decisions that fit today and stand the test of time.",
        image: "/images/eigennutzung/langfristig.jpg",
      },
    ],
    section6Label: "What sets us apart",
    section6Headline: "The right property starts with the right perspective.",
    section6Text:
      "Well-founded decisions emerge when personal goals and objective analyses are brought together.",
    section6TextSecondary:
      "We do not evaluate every property in the same way. Every analysis is based on the individual circumstances of the person who wishes to use it.",
    section6ListLabel: "Every analysis is based on",
    section6Items: [
      "Individual goals",
      "Personal priorities",
      "Life circumstances",
      "Expectations",
    ],
    ctaLabel: "Next step",
    ctaHeadline: "Decide with clarity.",
    ctaText:
      "Structured analyses help to assess property decisions better and support individual goals in the long term.",
    ctaBtnPrimary: "Start analysis",
    ctaBtnSecondary: "Get in touch",
  },
} as const;

export function EigennutzungPage({ locale }: EigennutzungPageProps) {
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
        imageSrc={HERO_IMAGE}
        imageAlt="Warm European residential interior with natural light"
        imageOverlayClassName="from-[#B9965B]/8"
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
              src={SECTION1_IMAGE}
              alt="Comfortable living atmosphere — comfort, lifestyle, home"
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
              src={SECTION3_IMAGE}
              alt="Calm premium workspace with laptop, documents, coffee and natural light"
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

      {/* ─── SECTION 5: Life situation cards ─────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader label={c.section5Label} headline={c.section5Headline} />
        <div className="grid gap-6 md:grid-cols-2">
          {c.lifeSituationCards.map((card) => (
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

      {/* ─── FAQ ─────────────────────────────────────────────────────────── */}
      {locale === "de" && (
        <Section className="py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              label="Häufige Fragen"
              headline="Häufige Fragen zur Eigennutzung"
              description="Antworten auf die wichtigsten Fragen rund um Kauf, Finanzierung, Bewertung und persönliche Nutzung einer Immobilie."
            />
            <div className="rounded-2xl border border-[#D7D2C8] bg-[#F7F5EF] shadow-[0_4px_24px_rgba(15,61,46,0.06)]">
              <div className="px-8 py-6 md:px-10 md:py-8">
                {eigennutzungFAQ.map((item, i) => (
                  <FAQQuestionAccordion key={i} item={item} index={i} />
                ))}
              </div>
            </div>
          </div>
        </Section>
      )}

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
