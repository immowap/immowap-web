import Image from "next/image";
import Link from "next/link";
import {
  ArticleH2,
  ArticleMetaRow,
  ArticleP,
  PropertyKnowledgeBackLink,
  PropertyKnowledgeBreadcrumb,
  PropertyKnowledgePageButtons,
} from "@/components/property-knowledge/ArticleUi";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import {
  getRelatedArticles,
  propertyKnowledgeArticles,
  propertyKnowledgeOverview,
  propertyKnowledgeUi,
} from "@/lib/i18n/property-knowledge";

const HERO_IMAGE = "/images/knowledge/finanzierung.jpg";
const INTRO_IMAGE = "/images/knowledge/finanzierung-intro.jpg";
const READ_MINUTES = 8;

const copy = {
  de: {
    metaTitle: "Immobilienfinanzierung in Deutschland verstehen | immowap",
    metaDescription:
      "Grundlagen der Immobilienfinanzierung: Eigenkapital, Kaufnebenkosten, Annuitätendarlehen, Zinsbindung, Tilgung, Anschlussfinanzierung, Bonität und Schufa.",
    heroLabel: "Wissen · Finanzierung",
    heroTitle: "Immobilienfinanzierung in Deutschland verstehen",
    heroSubtitle:
      "Eigenkapital, Darlehen, Zinsbindung und Bonität – die wichtigsten Grundlagen für eine langfristig tragfähige Immobilienfinanzierung.",
    heroImageAlt:
      "Immobilienfinanzierung in Deutschland – Finanzplanung und Darlehen",
    introLabel: "Einordnung",
    introHeadline: "Finanzierung als Grundlage jeder Kaufentscheidung",
    introP1:
      "Die Finanzierung gehört zu den wichtigsten Aspekten jedes Immobilienkaufs. Wer die Grundlagen versteht, kann Angebote realistischer einordnen und teure Fehlentscheidungen vermeiden.",
    introP2:
      "Denn entscheidend ist selten allein der Kaufpreis, sondern das Zusammenspiel aus Eigenkapital, Nebenkosten, monatlicher Rate, Zinsbindung und der Einschätzung der Bank.",
    introImageAlt:
      "Unterlagen, Taschenrechner und Notizblock auf einem Schreibtisch",
    topicsLabel: "Themenübersicht",
    topicsHeadline: "Die wichtigsten Bausteine im Überblick",
    topicsDescription:
      "Kompakte Orientierung zu den zentralen Aspekten einer Immobilienfinanzierung – von Eigenkapital bis Bonität.",
    topicLink: "Zum Abschnitt",
    badge: "Finanzierung",
    articleTitle: "Immobilienfinanzierung in Deutschland verstehen",
    topics: [
      {
        id: "eigenkapital",
        title: "Eigenkapital",
        description:
          "Warum Eigenkapital die Ausgangslage prägt und welche Beträge sinnvoll sind.",
      },
      {
        id: "kaufnebenkosten",
        title: "Kaufnebenkosten",
        description:
          "Grunderwerbsteuer, Notar, Grundbuch und Maklerkosten realistisch einplanen.",
      },
      {
        id: "annuitaetendarlehen",
        title: "Annuitätendarlehen",
        description:
          "Gleichbleibende Rate, Zins- und Tilgungsanteil sowie Planbarkeit.",
      },
      {
        id: "zinsbindung",
        title: "Zinsbindung",
        description:
          "Typische Laufzeiten, Sicherheit und Einfluss auf die monatliche Belastung.",
      },
      {
        id: "tilgung",
        title: "Tilgung",
        description: "Tilgungssätze, Restschuld und langfristige Zinsbelastung.",
      },
      {
        id: "anschlussfinanzierung",
        title: "Anschlussfinanzierung",
        description:
          "Restschuld, Refinanzierung und Forward-Darlehen rechtzeitig vorbereiten.",
      },
      {
        id: "sondertilgung",
        title: "Sondertilgung",
        description:
          "Flexibilität nutzen, Zinsen senken und die Laufzeit verkürzen.",
      },
      {
        id: "wie-banken-rechnen",
        title: "Wie Banken rechnen",
        description:
          "Einkommen, Haushaltsrechnung, Sicherheitsmargen und Mietannahmen.",
      },
      {
        id: "bonitaet-und-schufa",
        title: "Bonität und Schufa",
        description:
          "Kreditwürdigkeit, Schufa-Einträge und Auswirkungen auf Konditionen.",
      },
    ],
    article: {
      intro: [
        "Der Kauf einer Immobilie beginnt selten mit der Besichtigung. In Wirklichkeit beginnt er viel früher: mit der Frage, was finanziell tragfähig ist. Viele Käufer schauen zuerst auf den Kaufpreis, doch entscheidend ist am Ende die gesamte Finanzierung. Dazu gehören Eigenkapital, Kaufnebenkosten, monatliche Rate, Zinsbindung, Tilgung und die Einschätzung der Bank.",
        "Wer diese Punkte versteht, kann Angebote realistischer einordnen und vermeidet Entscheidungen, die auf den ersten Blick passend wirken, langfristig aber zu eng kalkuliert sind.",
      ],
      sections: [
        {
          id: "eigenkapital",
          title: "Eigenkapital: mehr als nur ein Startbetrag",
          paragraphs: [
            "Eigenkapital ist der Teil des Kaufpreises, den Käufer aus eigenen Mitteln bezahlen. Dazu können Ersparnisse, Wertpapiere oder anderes verfügbares Vermögen gehören.",
            "In der Praxis ist Eigenkapital aus zwei Gründen wichtig. Erstens reduziert es den Kreditbetrag. Zweitens zeigt es der Bank, dass der Käufer selbst finanziell beteiligt ist. Das kann sich positiv auf die Finanzierungskonditionen auswirken.",
            "Mindestens die Kaufnebenkosten sollten möglichst aus eigenen Mitteln bezahlt werden. Wer zusätzlich einen Teil des Kaufpreises selbst finanziert, hat meist eine stabilere Ausgangslage.",
          ],
        },
        {
          id: "kaufnebenkosten",
          title: "Kaufnebenkosten: der häufig unterschätzte Teil",
          paragraphs: [
            "Beim Immobilienkauf entstehen neben dem Kaufpreis weitere Kosten. Dazu zählen vor allem Grunderwerbsteuer, Notar- und Grundbuchkosten sowie gegebenenfalls Maklerprovision.",
            "Diese Kosten können je nach Bundesland und Situation einen erheblichen Betrag ausmachen. Gerade Käufer, die nur den Kaufpreis betrachten, unterschätzen diesen Punkt leicht.",
            "Wichtig ist: Kaufnebenkosten erhöhen nicht direkt den Wert der Immobilie. Deshalb finanzieren Banken sie oft nur eingeschränkt oder zu ungünstigeren Bedingungen. Eine realistische Planung sollte diese Kosten von Anfang an berücksichtigen.",
          ],
        },
        {
          id: "annuitaetendarlehen",
          title: "Annuitätendarlehen: warum die Rate gleich bleibt",
          paragraphs: [
            "Die häufigste Finanzierungsform in Deutschland ist das Annuitätendarlehen. Dabei zahlt der Käufer jeden Monat eine gleichbleibende Rate.",
            "Diese Rate besteht aus Zins und Tilgung. Am Anfang ist der Zinsanteil höher, weil die Restschuld noch groß ist. Mit der Zeit sinkt die Restschuld, dadurch verringert sich der Zinsanteil und der Tilgungsanteil steigt.",
            "Für Käufer ist diese Struktur gut planbar, weil die monatliche Belastung während der Zinsbindung gleich bleibt.",
          ],
        },
        {
          id: "zinsbindung",
          title: "Zinsbindung: Sicherheit oder Flexibilität?",
          paragraphs: [
            "Die Zinsbindung legt fest, wie lange der vereinbarte Zinssatz gilt. Typische Zeiträume sind zehn, fünfzehn oder zwanzig Jahre.",
            "Eine lange Zinsbindung bietet Sicherheit. Der Käufer weiß über viele Jahre, welche Rate zu zahlen ist. Das ist besonders wichtig, wenn das Einkommen knapp kalkuliert ist oder steigende Zinsen ein Risiko darstellen würden.",
            "Eine kürzere Zinsbindung kann anfangs günstiger sein, bringt aber mehr Unsicherheit mit sich. Wenn die Zinsen später steigen, kann die Anschlussfinanzierung deutlich teurer werden.",
          ],
        },
        {
          id: "tilgung",
          title: "Tilgung: nicht nur auf die Rate schauen",
          paragraphs: [
            "Die Tilgung ist der Teil der monatlichen Zahlung, mit dem das Darlehen zurückgezahlt wird. Eine niedrige Tilgung macht die Rate zunächst günstiger, verlängert aber die Laufzeit.",
            "Eine höhere Tilgung führt dagegen schneller zu weniger Restschuld. Dadurch sinkt auch das Risiko bei einer späteren Anschlussfinanzierung.",
            "Gerade bei Immobilien zur Eigennutzung ist es sinnvoll, nicht nur die niedrigste Monatsrate zu suchen. Wichtiger ist die Frage, ob die Finanzierung langfristig zur Lebensplanung passt.",
          ],
        },
        {
          id: "anschlussfinanzierung",
          title: "Anschlussfinanzierung: frühzeitig vorbereiten",
          paragraphs: [
            "Nach Ablauf der Zinsbindung ist das Darlehen oft noch nicht vollständig zurückgezahlt. Für die verbleibende Restschuld braucht der Käufer eine Anschlussfinanzierung.",
            "Diese Phase wird häufig unterschätzt. Wer erst kurz vor Ablauf der Zinsbindung vergleicht, hat weniger Handlungsspielraum. Sinnvoll ist es, sich rechtzeitig mit den möglichen Optionen zu beschäftigen.",
            "Dazu gehören die Verlängerung bei der bisherigen Bank, der Wechsel zu einem anderen Kreditgeber oder ein Forward-Darlehen, mit dem sich zukünftige Zinsen frühzeitig sichern lassen.",
          ],
        },
        {
          id: "sondertilgung",
          title: "Sondertilgung: Spielraum für schnellere Entschuldung",
          paragraphs: [
            "Eine Sondertilgung erlaubt zusätzliche Rückzahlungen außerhalb der normalen Monatsrate. Viele Kreditverträge sehen dafür jährliche Höchstbeträge vor.",
            "Diese Möglichkeit kann wertvoll sein, wenn später zusätzliches Geld verfügbar wird, zum Beispiel durch Bonuszahlungen, Erbschaften oder höhere Einnahmen.",
            "Sondertilgungen reduzieren die Restschuld und können die gesamte Zinsbelastung senken. Deshalb sollte diese Option bei der Vertragsgestaltung nicht übersehen werden.",
          ],
        },
        {
          id: "wie-banken-rechnen",
          title: "Wie Banken rechnen",
          paragraphs: [
            "Banken betrachten eine Finanzierung anders als viele Käufer. Sie prüfen nicht nur, ob die aktuelle Rate bezahlbar erscheint, sondern ob die Finanzierung auch unter konservativen Annahmen tragfähig bleibt.",
            "Dabei spielen Einkommen, bestehende Verpflichtungen, Eigenkapital, Haushaltsgröße, Lebenshaltungskosten, berufliche Stabilität und die Immobilie selbst eine Rolle.",
            "Bei vermieteten Immobilien rechnen Banken häufig nicht mit der vollständigen Mieteinnahme. Sie berücksichtigen Abschläge, mögliche Leerstände und Bewirtschaftungskosten. Dadurch kann die Bank zu einer anderen Einschätzung kommen als der Käufer selbst.",
          ],
        },
        {
          id: "bonitaet-und-schufa",
          title: "Bonität und Schufa",
          paragraphs: [
            "Die Bonität beschreibt, wie kreditwürdig eine Person aus Sicht der Bank ist. Ein wichtiger Bestandteil ist die Schufa-Auskunft.",
            "Dort können unter anderem bestehende Kredite, Kreditkarten, Girokonten und frühere Zahlungsstörungen eine Rolle spielen. Eine saubere Zahlungshistorie verbessert die Ausgangslage für eine Finanzierung.",
            "Negative Einträge können dagegen dazu führen, dass eine Bank den Antrag ablehnt oder nur zu schlechteren Konditionen finanziert.",
          ],
        },
        {
          id: "individuelle-analyse",
          title: "Wann eine individuelle Analyse sinnvoll ist",
          paragraphs: [
            "Eine Immobilienfinanzierung sollte nicht isoliert betrachtet werden. Der Kaufpreis allein sagt wenig darüber aus, ob ein Vorhaben wirklich tragfähig ist.",
            "Entscheidend ist das Zusammenspiel aus Eigenkapital, monatlicher Belastung, Tilgung, Zinsbindung, Restschuld und persönlicher Lebenssituation. Bei Kapitalanlagen kommen zusätzlich Mietrendite, Cashflow, Leerstandsrisiko und steuerliche Aspekte hinzu.",
            "immowap kann dabei unterstützen, diese Punkte strukturiert einzuordnen. Je nach Zielsetzung lassen sich unterschiedliche Szenarien betrachten, etwa bei Eigennutzung, Kapitalanlage, Projektentwicklung oder individueller Strategie.",
          ],
        },
        {
          id: "fazit",
          title: "Fazit",
          paragraphs: [
            "Eine gute Immobilienfinanzierung ist nicht automatisch die Finanzierung mit dem niedrigsten Zinssatz. Entscheidend ist, ob sie langfristig tragfähig, verständlich und passend zur persönlichen Situation ist.",
            "Wer Eigenkapital, Kaufnebenkosten, Tilgung, Zinsbindung und Anschlussfinanzierung realistisch bewertet, trifft bessere Entscheidungen. Gerade bei größeren Investitionen lohnt es sich, nicht nur die monatliche Rate zu betrachten, sondern das gesamte Finanzierungskonzept.",
          ],
        },
      ],
    },
    infoBoxLabel: "Einordnung",
    infoBoxTitle: "Jede Finanzierung ist individuell",
    infoBoxP1:
      "Die optimale Finanzierungsstruktur hängt nicht allein vom Kaufpreis ab. Einkommen, Eigenkapital, Tilgungsstrategie, Zinsbindung und langfristige Ziele sind gleichermaßen relevant.",
    infoBoxP2:
      "immowap unterstützt dabei, diese Faktoren strukturiert zu analysieren und unterschiedliche Szenarien auf Basis individueller Zielsetzungen einzuordnen.",
    relatedLabel: "Weiterlesen",
    relatedHeadline: "Verwandte Artikel",
    relatedDescription:
      "Ergänzende Themen rund um Kauf, Unterlagen, WEG und strategische Entscheidungen.",
  },
  en: {
    metaTitle: "Understanding Property Financing in Germany | immowap",
    metaDescription:
      "Fundamentals of property financing: equity, purchase ancillary costs, annuity loans, fixed interest periods, repayment, follow-up financing, creditworthiness and Schufa.",
    heroLabel: "Knowledge · Financing",
    heroTitle: "Understanding Property Financing in Germany",
    heroSubtitle:
      "Equity, loans, fixed interest periods and creditworthiness – the key foundations for sustainable property financing.",
    heroImageAlt:
      "Property financing in Germany – financial planning and mortgages",
    introLabel: "Context",
    introHeadline: "Financing as the foundation of every purchase decision",
    introP1:
      "Financing is one of the most important aspects of any property purchase. Understanding the fundamentals helps you assess offers more realistically and avoid costly mistakes.",
    introP2:
      "What matters is rarely the purchase price alone, but the interplay of equity, ancillary costs, monthly payment, fixed interest period and the bank's assessment.",
    introImageAlt:
      "Documents, calculator and notepad on a desk",
    topicsLabel: "Topic overview",
    topicsHeadline: "The key building blocks at a glance",
    topicsDescription:
      "A concise overview of the central aspects of property financing – from equity to creditworthiness.",
    topicLink: "Go to section",
    badge: "Financing",
    articleTitle: "Understanding Property Financing in Germany",
    topics: [
      {
        id: "eigenkapital",
        title: "Equity",
        description:
          "Why equity shapes your starting position and which amounts make sense.",
      },
      {
        id: "kaufnebenkosten",
        title: "Purchase ancillary costs",
        description:
          "Realistically planning land transfer tax, notary, land registry and agent fees.",
      },
      {
        id: "annuitaetendarlehen",
        title: "Annuity loan",
        description:
          "Fixed monthly payment, interest and repayment portions, and predictability.",
      },
      {
        id: "zinsbindung",
        title: "Fixed interest period",
        description:
          "Typical terms, security and impact on monthly burden.",
      },
      {
        id: "tilgung",
        title: "Repayment",
        description:
          "Repayment rates, remaining debt and long-term interest burden.",
      },
      {
        id: "anschlussfinanzierung",
        title: "Follow-up financing",
        description:
          "Prepare remaining debt, refinancing and forward loans in good time.",
      },
      {
        id: "sondertilgung",
        title: "Special repayment",
        description:
          "Use flexibility to reduce interest and shorten the term.",
      },
      {
        id: "wie-banken-rechnen",
        title: "How banks calculate",
        description:
          "Income, household budget, safety margins and rental assumptions.",
      },
      {
        id: "bonitaet-und-schufa",
        title: "Creditworthiness and Schufa",
        description:
          "Creditworthiness, Schufa entries and their impact on loan terms.",
      },
    ],
    article: {
      intro: [
        "Buying a property rarely starts with a viewing. In reality it starts much earlier: with the question of what is financially viable. Many buyers look first at the purchase price, but what ultimately matters is the overall financing. This includes equity, purchase ancillary costs, monthly payment, fixed interest period, repayment and the bank's assessment.",
        "Understanding these points helps you assess offers more realistically and avoid decisions that seem suitable at first glance but are too tightly calculated in the long run.",
      ],
      sections: [
        {
          id: "eigenkapital",
          title: "Equity: more than just a starting amount",
          paragraphs: [
            "Equity is the portion of the purchase price that buyers pay from their own funds. This can include savings, securities or other available assets.",
            "In practice, equity matters for two reasons. First, it reduces the loan amount. Second, it shows the bank that the buyer has a financial stake. This can have a positive effect on financing terms.",
            "At minimum, purchase ancillary costs should ideally be paid from own funds. Buyers who also finance part of the purchase price themselves usually start from a more stable position.",
          ],
        },
        {
          id: "kaufnebenkosten",
          title: "Purchase ancillary costs: the often underestimated part",
          paragraphs: [
            "When buying property, costs arise in addition to the purchase price. These include mainly land transfer tax, notary and land registry costs, and possibly agent commission.",
            "Depending on the federal state and situation, these costs can amount to a considerable sum. Buyers who focus only on the purchase price often underestimate this point.",
            "Important: purchase ancillary costs do not directly increase the value of the property. Banks therefore often finance them only to a limited extent or on less favourable terms. Realistic planning should account for these costs from the outset.",
          ],
        },
        {
          id: "annuitaetendarlehen",
          title: "Annuity loan: why the payment stays the same",
          paragraphs: [
            "The most common form of financing in Germany is the annuity loan. The buyer pays the same monthly instalment every month.",
            "This payment consists of interest and repayment. At the start, the interest portion is higher because the remaining debt is still large. Over time the remaining debt falls, the interest portion decreases and the repayment portion rises.",
            "For buyers this structure is easy to plan because the monthly burden stays the same during the fixed interest period.",
          ],
        },
        {
          id: "zinsbindung",
          title: "Fixed interest period: security or flexibility?",
          paragraphs: [
            "The fixed interest period determines how long the agreed interest rate applies. Typical periods are ten, fifteen or twenty years.",
            "A long fixed interest period offers security. The buyer knows for many years what payment is due. This is especially important when income is tightly calculated or rising interest rates would pose a risk.",
            "A shorter fixed interest period may initially be cheaper but brings more uncertainty. If interest rates rise later, follow-up financing can become significantly more expensive.",
          ],
        },
        {
          id: "tilgung",
          title: "Repayment: look beyond the monthly payment",
          paragraphs: [
            "Repayment is the portion of the monthly payment used to pay back the loan. A low repayment makes the payment cheaper at first but extends the term.",
            "A higher repayment reduces remaining debt more quickly. This also lowers the risk when follow-up financing becomes due later.",
            "Especially for owner-occupied property, it makes sense not to seek only the lowest monthly payment. What matters is whether the financing fits your long-term life plans.",
          ],
        },
        {
          id: "anschlussfinanzierung",
          title: "Follow-up financing: prepare early",
          paragraphs: [
            "After the fixed interest period ends, the loan is often not fully repaid. For the remaining debt, the buyer needs follow-up financing.",
            "This phase is frequently underestimated. Those who compare options only shortly before the fixed period ends have less room to manoeuvre. It makes sense to look into the available options in good time.",
            "These include extending with the current bank, switching to another lender, or a forward loan to secure future interest rates early.",
          ],
        },
        {
          id: "sondertilgung",
          title: "Special repayment: scope for faster debt reduction",
          paragraphs: [
            "Special repayment allows additional payments outside the regular monthly instalment. Many loan contracts provide annual maximum amounts for this.",
            "This option can be valuable when additional money becomes available later, for example through bonuses, inheritances or higher income.",
            "Special repayments reduce remaining debt and can lower total interest costs. This option should therefore not be overlooked when structuring the contract.",
          ],
        },
        {
          id: "wie-banken-rechnen",
          title: "How banks calculate",
          paragraphs: [
            "Banks view financing differently from many buyers. They check not only whether the current payment seems affordable, but whether the financing remains viable under conservative assumptions.",
            "Income, existing obligations, equity, household size, living costs, job stability and the property itself all play a role.",
            "For rented property, banks often do not count the full rental income. They allow for deductions, possible vacancies and operating costs. The bank may therefore reach a different assessment from the buyer.",
          ],
        },
        {
          id: "bonitaet-und-schufa",
          title: "Creditworthiness and Schufa",
          paragraphs: [
            "Creditworthiness describes how creditworthy a person is from the bank's perspective. An important part is the Schufa credit report.",
            "This can include existing loans, credit cards, current accounts and past payment defaults. A clean payment history improves the starting position for financing.",
            "Negative entries can lead to the bank rejecting the application or offering financing only on worse terms.",
          ],
        },
        {
          id: "individuelle-analyse",
          title: "When an individual analysis makes sense",
          paragraphs: [
            "Property financing should not be viewed in isolation. The purchase price alone says little about whether a project is truly viable.",
            "What matters is the interplay of equity, monthly burden, repayment, fixed interest period, remaining debt and personal circumstances. For investment property, rental yield, cash flow, vacancy risk and tax aspects are added.",
            "immowap can help structure these points. Depending on your goals, different scenarios can be considered, for example owner-occupation, buy-to-let, refurbishment or multi-family homes.",
          ],
        },
        {
          id: "fazit",
          title: "Conclusion",
          paragraphs: [
            "Good property financing is not automatically the financing with the lowest interest rate. What matters is whether it is sustainable, understandable and suited to your personal situation in the long run.",
            "Those who realistically assess equity, purchase ancillary costs, repayment, fixed interest period and follow-up financing make better decisions. For larger investments it is worth looking not only at the monthly payment but at the entire financing concept.",
          ],
        },
      ],
    },
    infoBoxLabel: "Context",
    infoBoxTitle: "Every financing arrangement is individual",
    infoBoxP1:
      "The optimal financing structure depends not on the purchase price alone. Income, equity, repayment strategy, fixed interest period and long-term goals are equally relevant.",
    infoBoxP2:
      "immowap helps analyse these factors in a structured way and assess different scenarios based on individual objectives.",
    relatedLabel: "Read more",
    relatedHeadline: "Related articles",
    relatedDescription:
      "Complementary topics on buying, documents, homeowners associations and strategic decisions.",
  },
} as const;

function TopicCard({
  title,
  description,
  href,
  linkLabel,
}: {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <Link href={href} className="group block no-underline">
      <article className="flex h-full flex-col gap-3 rounded-2xl border border-[#D7D2C8]/80 bg-white px-6 py-5 transition-colors duration-300 hover:border-[#B9965B]/35">
        <h3 className="text-lg font-semibold text-[#0F3D2E] transition-colors duration-300 group-hover:text-brand-600">
          {title}
        </h3>
        <p className="flex-1 text-sm leading-[1.75] text-[#1D1D1B]/60">
          {description}
        </p>
        <span className="text-label inline-flex items-center gap-2 text-gold-600 transition-all duration-300 group-hover:gap-3">
          {linkLabel}
          <span aria-hidden="true">→</span>
        </span>
      </article>
    </Link>
  );
}

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
      <Card className="h-full border-[#D7D2C8]/80 bg-white shadow-none transition-colors duration-300 hover:border-[#B9965B]/35">
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

interface ImmobilienfinanzierungPageProps {
  locale: Locale;
}

export function ImmobilienfinanzierungPage({
  locale,
}: ImmobilienfinanzierungPageProps) {
  const t = copy[locale];
  const overviewHref = propertyKnowledgeOverview[locale].href;

  const relatedArticles = getRelatedArticles(locale, "finanzierung").map(
    ({ title, href }) => {
      const article = propertyKnowledgeArticles.find(
        (a) => a[locale].href === href,
      )!;
      return {
        title,
        href,
        description: article[locale].description,
      };
    },
  );

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
              {t.heroSubtitle}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PropertyKnowledgePageButtons locale={locale} onDark />
            </div>
          </div>
        </div>
      </section>

      <Section variant="muted" className="py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-label mb-6 block text-gold-600">{t.introLabel}</p>
            <h2 className="text-h2 text-brand-800">{t.introHeadline}</h2>
            <div className="gold-rule mt-8" aria-hidden="true" />
            <p className="mt-8 text-lg leading-[1.8] text-muted">{t.introP1}</p>
            <p className="mt-6 text-lg leading-[1.8] text-muted">{t.introP2}</p>
          </div>

          <div className="relative h-[360px] overflow-hidden rounded-3xl sm:h-[440px] lg:h-[520px]">
            <Image
              src={INTRO_IMAGE}
              alt={t.introImageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F3D2E]/15 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </Section>

      <Section className="py-24 md:py-32">
        <SectionHeader
          label={t.topicsLabel}
          headline={t.topicsHeadline}
          description={t.topicsDescription}
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.topics.map((topic) => (
            <TopicCard
              key={topic.id}
              title={topic.title}
              description={topic.description}
              href={`#${topic.id}`}
              linkLabel={t.topicLink}
            />
          ))}
        </div>
      </Section>

      <Section variant="muted" className="py-24 md:py-32">
        <div className="mx-auto max-w-[850px]">
          <PropertyKnowledgeBreadcrumb locale={locale} currentTitle={t.articleTitle} />

          <header className="mb-10">
            <span className="mb-5 inline-block rounded-full border border-[#B9965B]/30 bg-[#B9965B]/8 px-3.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#B9965B]">
              {t.badge}
            </span>
            <h2 className="text-[1.75rem] font-bold leading-tight tracking-tight text-[#0F3D2E] md:text-[2.125rem]">
              {t.articleTitle}
            </h2>
            <div
              aria-hidden="true"
              className="mt-7 h-px w-16 rounded-full bg-[#B9965B]/55"
            />
            <ArticleMetaRow locale={locale} readMinutes={READ_MINUTES} />
          </header>

          <article>
            {t.article.intro.map((paragraph) => (
              <ArticleP key={paragraph.slice(0, 40)}>{paragraph}</ArticleP>
            ))}

            {t.article.sections.map((section) => (
              <div key={section.id}>
                <ArticleH2 id={section.id}>{section.title}</ArticleH2>
                {section.paragraphs.map((paragraph) => (
                  <ArticleP key={paragraph.slice(0, 40)}>{paragraph}</ArticleP>
                ))}
              </div>
            ))}
          </article>

          <PropertyKnowledgeBackLink locale={locale} overviewHref={overviewHref} />
        </div>
      </Section>

      <Section className="py-24 md:py-32">
        <div className="mx-auto max-w-[850px]">
          <Card className="border-[#D7D2C8]/80 bg-white px-8 py-10 shadow-[0_4px_24px_rgba(15,61,46,0.05)] md:px-12 md:py-12">
            <p className="text-label mb-4 block text-gold-600">{t.infoBoxLabel}</p>
            <CardTitle className="text-h2 text-brand-800">{t.infoBoxTitle}</CardTitle>
            <div className="gold-rule mt-6" aria-hidden="true" />
            <CardDescription className="mt-6 text-lg">{t.infoBoxP1}</CardDescription>
            <CardDescription className="mt-4 text-lg">{t.infoBoxP2}</CardDescription>
          </Card>
        </div>
      </Section>

      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader
          label={t.relatedLabel}
          headline={t.relatedHeadline}
          description={t.relatedDescription}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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

      <div className="min-h-[100px] bg-cream" aria-hidden="true" />
    </>
  );
}

export function getImmobilienfinanzierungMetadata(locale: Locale) {
  return {
    title: copy[locale].metaTitle,
    description: copy[locale].metaDescription,
  };
}
