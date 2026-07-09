import {
  ArticleH2,
  ArticleH3,
  ArticleP,
} from "@/components/property-knowledge/ArticleUi";
import { ArticleLayout } from "@/components/editorial/ArticleLayout";
import type { Locale } from "@/lib/i18n/config";
import { propertyKnowledgeOverview, propertyKnowledgeUi } from "@/lib/i18n/property-knowledge";

interface ImmobilienbewertungPageProps {
  locale: Locale;
}

export const immobilienbewertungCopy = {
  de: {
    metaTitle:
      "Immobilienbewertung – Den Wert einer Immobilie richtig verstehen | immowap",
    metaDescription:
      "Fundiertes Wissen zur Immobilienbewertung: Verkehrswert nach ImmoWertV, Vergleichs-, Ertrags- und Sachwertverfahren sowie häufige Fehler bei der Wertermittlung.",
    breadcrumbTitle: "Immobilienbewertung",
    title: "Immobilienbewertung – Den Wert einer Immobilie richtig verstehen",
    readMinutes: 5,
    section1Title: "Warum die Immobilienbewertung mehr ist als ein Quadratmeterpreis",
    section1P1:
      "Wer eine Immobilie kaufen, verkaufen oder langfristig halten möchte, steht früher oder später vor der Frage, welchen Wert das Objekt tatsächlich hat. Die Antwort darauf ist häufig komplexer, als es auf den ersten Blick erscheint. Denn weder der Angebotspreis noch ein durchschnittlicher Quadratmeterpreis reichen aus, um den tatsächlichen Wert einer Immobilie zuverlässig zu bestimmen.",
    section1P2:
      "In Deutschland erfolgt die Wertermittlung nach anerkannten Grundsätzen. Eine wichtige Grundlage bildet dabei die Immobilienwertermittlungsverordnung (ImmoWertV), die die Verfahren und Rahmenbedingungen für die Ermittlung des Verkehrswertes regelt.",
    section2Title: "Marktwert und Verkehrswert",
    section2P1:
      "Die Begriffe Marktwert und Verkehrswert werden im Alltag oft synonym verwendet. Nach § 194 BauGB beschreibt der Verkehrswert den Preis, der zum Zeitpunkt der Wertermittlung im gewöhnlichen Geschäftsverkehr unter Berücksichtigung der rechtlichen Gegebenheiten, der tatsächlichen Eigenschaften, der sonstigen Beschaffenheit sowie der Lage des Grundstücks ohne ungewöhnliche oder persönliche Verhältnisse erzielt werden könnte.",
    section2P2:
      "Damit wird deutlich, dass sich der Verkehrswert nicht an individuellen Wunschvorstellungen orientiert, sondern an den allgemeinen Marktverhältnissen.",
    section2P3:
      "Nicht jeder Verkaufspreis entspricht automatisch dem Verkehrswert. Besondere Umstände oder emotionale Faktoren können dazu führen, dass tatsächlich höhere oder niedrigere Preise erzielt werden.",
    section3Title: "Die drei Wertermittlungsverfahren nach ImmoWertV",
    section3Intro:
      "Die ImmoWertV sieht grundsätzlich drei Verfahren vor, die je nach Art und Nutzung der Immobilie zur Anwendung kommen können. Welches Verfahren im Einzelfall geeignet ist, hängt unter anderem von der Objektart und der Datenlage ab.",
    vergleichTitle: "Vergleichswertverfahren",
    vergleichP1:
      "Das Vergleichswertverfahren wird insbesondere bei Eigentumswohnungen, Einfamilienhäusern und Baugrundstücken angewendet. Grundlage sind Kaufpreise vergleichbarer Objekte, die unter ähnlichen Marktbedingungen veräußert wurden.",
    vergleichP2:
      "Ziel ist es, aus tatsächlich realisierten Kaufpreisen Rückschlüsse auf den Wert der zu bewertenden Immobilie zu ziehen. Voraussetzung hierfür sind ausreichend geeignete Vergleichsdaten.",
    vergleichP3:
      "Gerade bei Standardobjekten liefert dieses Verfahren häufig besonders marktorientierte Ergebnisse.",
    ertragTitle: "Ertragswertverfahren",
    ertragP1:
      "Bei vermieteten Immobilien steht die nachhaltige Ertragsfähigkeit im Vordergrund. Deshalb kommt das Ertragswertverfahren vor allem bei Mehrfamilienhäusern, Wohn- und Geschäftshäusern sowie Gewerbeimmobilien zum Einsatz.",
    ertragP2:
      "Berücksichtigt werden unter anderem die nachhaltig erzielbaren Erträge, die Bewirtschaftungskosten, der Bodenwert sowie die Restnutzungsdauer des Gebäudes.",
    ertragP3:
      "Für Kapitalanleger ist das Ertragswertverfahren häufig von besonderer Bedeutung, da neben dem Substanzwert vor allem die wirtschaftliche Leistungsfähigkeit der Immobilie betrachtet wird.",
    sachTitle: "Sachwertverfahren",
    sachP1:
      "Wenn weder ausreichende Vergleichsdaten noch die Erzielung nachhaltiger Erträge im Vordergrund stehen, kann das Sachwertverfahren angewendet werden.",
    sachP2:
      "Dabei werden zunächst der Bodenwert und die Herstellungskosten der baulichen Anlagen ermittelt. Anschließend werden Alterswertminderungen und weitere wertbeeinflussende Faktoren berücksichtigt.",
    sachP3:
      "Das Sachwertverfahren wird häufig bei selbstgenutzten Einfamilienhäusern oder individuell gestalteten Immobilien angewendet.",
    section4Title: "Kaufpreis pro Quadratmeter als Orientierung",
    section4P1:
      "Der Quadratmeterpreis gehört zu den bekanntesten Kennzahlen auf dem Immobilienmarkt. Dennoch sollte er lediglich als erste Orientierung verstanden werden.",
    section4P2:
      "Zwei Immobilien mit identischer Wohnfläche können trotz gleichem Quadratmeterpreis einen deutlich unterschiedlichen Verkehrswert aufweisen. Baujahr, Modernisierungsstand, Energieeffizienz, Grundriss oder die Qualität der Lage haben einen erheblichen Einfluss auf die Werthaltigkeit einer Immobilie.",
    section4P3:
      "Eine fundierte Wertermittlung berücksichtigt daher stets deutlich mehr als nur den Preis pro Quadratmeter.",
    section5Title: "Lage und Mikrolage",
    section5P1:
      "Die Lage gehört zu den wichtigsten wertbeeinflussenden Merkmalen einer Immobilie. Dabei wird nicht nur die Region oder die Stadt betrachtet, sondern auch die sogenannte Mikrolage.",
    section5P2:
      "Infrastruktur, Verkehrsanbindung, Einkaufsmöglichkeiten, Schulen, Freizeitangebote sowie die zukünftige Entwicklung des Umfeldes können sich unmittelbar auf die Attraktivität und damit auf den Wert einer Immobilie auswirken.",
    section5P3:
      "Selbst innerhalb eines Stadtteils können sich erhebliche Unterschiede ergeben. Deshalb wird die Lage im Rahmen einer professionellen Analyse differenziert betrachtet.",
    section6Title: "Häufige Fehler bei der Immobilienbewertung",
    section6P1:
      "In der Praxis kommt es immer wieder zu Fehleinschätzungen. Häufig werden Angebotspreise aus Immobilienportalen mit tatsächlichen Marktwerten verwechselt.",
    section6P2:
      "Ebenso werden notwendige Modernisierungen, energetische Anforderungen oder die Qualität der Mikrolage nicht immer ausreichend berücksichtigt.",
    section6P3:
      "Auch emotionale Faktoren führen nicht selten dazu, dass Eigentümer ihre Immobilie höher bewerten, als es die Marktsituation rechtfertigt.",
    section6P4:
      "Eine belastbare Wertermittlung setzt deshalb eine strukturierte Betrachtung aller wertrelevanten Faktoren voraus.",
    section7Title: "Wann eine professionelle Analyse sinnvoll ist",
    section7P1:
      "Nicht jede Immobilie lässt sich anhand allgemeiner Kennzahlen oder Online-Rechner zuverlässig bewerten. Insbesondere bei Kapitalanlagen, Mehrfamilienhäusern, Gewerbeimmobilien oder Objekten mit besonderem Sanierungsbedarf kann eine vertiefte Analyse sinnvoll sein.",
    section7P2:
      "Auch vor einem Kauf oder Verkauf, im Rahmen einer Erbschaft oder bei strategischen Investitionsentscheidungen ist eine fundierte Bewertung häufig eine wichtige Grundlage.",
    section7P3:
      "immowap orientiert sich bei der Analyse an den anerkannten Grundsätzen der ImmoWertV und betrachtet Immobilien nicht isoliert. Je nach Zielsetzung werden zusätzlich Faktoren wie Mikrolage, Rendite, Risiken, Finanzierung oder zukünftige Entwicklungspotenziale berücksichtigt. Dadurch entsteht eine individuelle Entscheidungsgrundlage, die sich an den jeweiligen Anforderungen und Zielen orientiert.",
    fazitTitle: "Fazit",
    fazitP1:
      "Eine Immobilienbewertung besteht aus weit mehr als der Ermittlung eines durchschnittlichen Quadratmeterpreises. Die ImmoWertV stellt hierfür einen anerkannten Rahmen zur Verfügung und definiert die wesentlichen Verfahren der Wertermittlung.",
    fazitP2:
      "Welche Methode im Einzelfall geeignet ist, hängt von der Art der Immobilie und ihrer Nutzung ab. Wer nachhaltige Entscheidungen treffen möchte, sollte deshalb den Wert einer Immobilie ganzheitlich betrachten und sich nicht ausschließlich auf einzelne Kennzahlen verlassen.",
    ctaLabel: "Immobilienbewertung",
    ctaHeadline: "Sie möchten den Wert einer Immobilie fundiert einordnen?",
    ctaText:
      "Je nach Zielsetzung können neben dem Marktwert auch Faktoren wie Lage, Rendite, Risiken oder Entwicklungspotenziale berücksichtigt werden.",
    ctaBtnPrimary: "Analyse starten",
    ctaBtnSecondary: "Anfrage senden",
  },
  en: {
    metaTitle: "Property Valuation – Understanding Property Value Correctly | immowap",
    metaDescription:
      "In-depth knowledge on property valuation: fair market value under ImmoWertV, comparison, income and cost approaches, and common errors in property appraisal.",
    breadcrumbTitle: "Property Valuation",
    title: "Property Valuation – Understanding Property Value Correctly",
    readMinutes: 5,
    section1Title: "Why property valuation is more than a price per square metre",
    section1P1:
      "Anyone who wants to buy, sell or hold a property long term will sooner or later face the question of what the property is actually worth. The answer is often more complex than it first appears. Neither the asking price nor an average price per square metre is sufficient to reliably determine the true value of a property.",
    section1P2:
      "In Germany, property valuation follows recognised principles. An important basis is the Immobilienwertermittlungsverordnung (ImmoWertV), which governs the methods and framework conditions for determining fair market value.",
    section2Title: "Market value and fair market value",
    section2P1:
      "The terms market value and fair market value (Verkehrswert) are often used interchangeably in everyday language. Under Section 194 of the German Building Code (BauGB), fair market value describes the price that could be achieved at the time of valuation in ordinary business dealings, taking into account legal circumstances, actual characteristics, other qualities and the location of the land, without unusual or personal circumstances.",
    section2P2:
      "This makes clear that fair market value is not oriented towards individual wishes, but towards general market conditions.",
    section2P3:
      "Not every sale price automatically corresponds to fair market value. Special circumstances or emotional factors can lead to higher or lower prices actually being achieved.",
    section3Title: "The three valuation methods under ImmoWertV",
    section3Intro:
      "The ImmoWertV provides for three basic methods that may be applied depending on the type and use of the property. Which method is suitable in an individual case depends among other things on the property type and the available data.",
    vergleichTitle: "Comparison approach",
    vergleichP1:
      "The comparison approach is used in particular for condominiums, detached houses and building plots. It is based on purchase prices of comparable properties sold under similar market conditions.",
    vergleichP2:
      "The aim is to draw conclusions about the value of the property being appraised from prices actually achieved. This requires sufficient suitable comparable data.",
    vergleichP3:
      "Especially for standard properties, this method often delivers particularly market-oriented results.",
    ertragTitle: "Income approach",
    ertragP1:
      "For rented properties, sustainable earning capacity is the focus. The income approach is therefore used mainly for multi-family houses, mixed residential and commercial buildings, and commercial properties.",
    ertragP2:
      "Factors taken into account include sustainably achievable income, operating costs, land value and the remaining useful life of the building.",
    ertragP3:
      "For buy-to-let investors, the income approach is often particularly important, as it considers not only asset value but above all the economic performance of the property.",
    sachTitle: "Cost approach",
    sachP1:
      "When neither sufficient comparable data nor sustainable income generation is the focus, the cost approach may be applied.",
    sachP2:
      "Land value and the construction costs of the building structures are determined first. Age-related depreciation and other value-influencing factors are then taken into account.",
    sachP3:
      "The cost approach is often used for owner-occupied detached houses or individually designed properties.",
    section4Title: "Purchase price per square metre as a guide",
    section4P1:
      "Price per square metre is one of the best-known metrics on the property market. Nevertheless, it should be understood only as an initial guide.",
    section4P2:
      "Two properties with identical living space can have significantly different fair market values despite the same price per square metre. Year of construction, modernisation status, energy efficiency, floor plan or location quality have a considerable influence on a property's value retention.",
    section4P3:
      "A well-founded valuation therefore always considers far more than price per square metre alone.",
    section5Title: "Location and micro-location",
    section5P1:
      "Location is one of the most important value-influencing characteristics of a property. This considers not only the region or city, but also the so-called micro-location.",
    section5P2:
      "Infrastructure, transport links, shopping facilities, schools, leisure options and future development of the surroundings can have a direct impact on attractiveness and thus on property value.",
    section5P3:
      "Even within a district, significant differences can arise. That is why location is assessed in differentiated terms as part of a professional analysis.",
    section6Title: "Common errors in property valuation",
    section6P1:
      "Misjudgements occur again and again in practice. Asking prices from property portals are often confused with actual market values.",
    section6P2:
      "Necessary modernisation, energy requirements or micro-location quality are also not always sufficiently taken into account.",
    section6P3:
      "Emotional factors also frequently lead owners to value their property higher than the market situation justifies.",
    section6P4:
      "A reliable valuation therefore requires a structured assessment of all value-relevant factors.",
    section7Title: "When a professional analysis makes sense",
    section7P1:
      "Not every property can be reliably valued using general metrics or online calculators. In particular for buy-to-let investments, multi-family houses, commercial properties or properties with special renovation needs, an in-depth analysis may be worthwhile.",
    section7P2:
      "A well-founded valuation is also often an important basis before a purchase or sale, in the context of an inheritance or for strategic investment decisions.",
    section7P3:
      "immowap aligns its analysis with the recognised principles of the ImmoWertV and does not consider properties in isolation. Depending on objectives, additional factors such as micro-location, yield, risks, financing or future development potential are taken into account. This produces an individual decision-making foundation oriented towards the respective requirements and goals.",
    fazitTitle: "Conclusion",
    fazitP1:
      "Property valuation involves far more than determining an average price per square metre. The ImmoWertV provides a recognised framework and defines the essential valuation methods.",
    fazitP2:
      "Which method is suitable in an individual case depends on the type of property and its use. Anyone who wants to make sustainable decisions should therefore consider property value holistically and not rely exclusively on individual metrics.",
    ctaLabel: "Property Valuation",
    ctaHeadline: "Would you like to assess a property's value on a well-founded basis?",
    ctaText:
      "Depending on your objectives, factors such as location, yield, risks or development potential can be considered alongside market value.",
    ctaBtnPrimary: "Start analysis",
    ctaBtnSecondary: "Send enquiry",
  },
} as const;

export function ImmobilienbewertungPage({ locale }: ImmobilienbewertungPageProps) {
  const c = immobilienbewertungCopy[locale];
  const ui = propertyKnowledgeUi[locale];

  return (
    <ArticleLayout
      locale={locale}
      breadcrumbTitle={c.breadcrumbTitle}
      heroLabel={ui.categoryShort}
      heroHeadline={c.title}
      readMinutes={c.readMinutes}
      backLinkHref={propertyKnowledgeOverview[locale].href}
      relatedExcludeId="immobilienbewertung"
    >
      <ArticleH2>{c.section1Title}</ArticleH2>
      <ArticleP>{c.section1P1}</ArticleP>
      <ArticleP>{c.section1P2}</ArticleP>

      <ArticleH2>{c.section2Title}</ArticleH2>
      <ArticleP>{c.section2P1}</ArticleP>
      <ArticleP>{c.section2P2}</ArticleP>
      <ArticleP>{c.section2P3}</ArticleP>

      <ArticleH2>{c.section3Title}</ArticleH2>
      <ArticleP>{c.section3Intro}</ArticleP>

      <ArticleH3>{c.vergleichTitle}</ArticleH3>
      <ArticleP>{c.vergleichP1}</ArticleP>
      <ArticleP>{c.vergleichP2}</ArticleP>
      <ArticleP>{c.vergleichP3}</ArticleP>

      <ArticleH3>{c.ertragTitle}</ArticleH3>
      <ArticleP>{c.ertragP1}</ArticleP>
      <ArticleP>{c.ertragP2}</ArticleP>
      <ArticleP>{c.ertragP3}</ArticleP>

      <ArticleH3>{c.sachTitle}</ArticleH3>
      <ArticleP>{c.sachP1}</ArticleP>
      <ArticleP>{c.sachP2}</ArticleP>
      <ArticleP>{c.sachP3}</ArticleP>

      <ArticleH2>{c.section4Title}</ArticleH2>
      <ArticleP>{c.section4P1}</ArticleP>
      <ArticleP>{c.section4P2}</ArticleP>
      <ArticleP>{c.section4P3}</ArticleP>

      <ArticleH2>{c.section5Title}</ArticleH2>
      <ArticleP>{c.section5P1}</ArticleP>
      <ArticleP>{c.section5P2}</ArticleP>
      <ArticleP>{c.section5P3}</ArticleP>

      <ArticleH2>{c.section6Title}</ArticleH2>
      <ArticleP>{c.section6P1}</ArticleP>
      <ArticleP>{c.section6P2}</ArticleP>
      <ArticleP>{c.section6P3}</ArticleP>
      <ArticleP>{c.section6P4}</ArticleP>

      <ArticleH2>{c.section7Title}</ArticleH2>
      <ArticleP>{c.section7P1}</ArticleP>
      <ArticleP>{c.section7P2}</ArticleP>
      <ArticleP>{c.section7P3}</ArticleP>

      <ArticleH2>{c.fazitTitle}</ArticleH2>
      <ArticleP>{c.fazitP1}</ArticleP>
      <ArticleP>{c.fazitP2}</ArticleP>
    </ArticleLayout>
  );
}
