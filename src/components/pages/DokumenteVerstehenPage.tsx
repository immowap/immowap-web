import type { ReactNode } from "react";
import { ProductVisual } from "@/components/illustrations/ProductVisual";
import { ArticleLayout } from "@/components/editorial/ArticleLayout";
import type { Locale } from "@/lib/i18n/config";
import {
  propertyKnowledgeOverview,
  propertyKnowledgeUi,
} from "@/lib/i18n/property-knowledge";
import {
  ArticleH2,
  ArticleP,
  EditorialList,
} from "@/components/property-knowledge/ArticleUi";

const copy = {
  de: {
    breadcrumbTitle: "Dokumente verstehen",
    readMinutes: 9,
    hero: {
      title: "Dokumente verstehen",
      subtitle: "Welche Unterlagen vor dem Kauf wichtig sind",
      intro:
        "Wer eine Immobilie kauft, sollte nicht nur auf Lage und Preis achten. Viele wichtige Informationen befinden sich in den Unterlagen. Eine sorgfältige Dokumentenprüfung hilft dabei, Risiken frühzeitig zu erkennen und fundierte Entscheidungen zu treffen.",
      imageAlt:
        "Unterlagen, Grundrisse und Notizblock auf einem Schreibtisch – Dokumentenprüfung vor dem Immobilienkauf",
    },
    intro: {
      p1: "Der Kauf einer Immobilie ist nicht nur eine finanzielle Entscheidung, sondern auch eine rechtliche und technische Verpflichtung, die langfristige Auswirkungen haben kann. Viele Risiken lassen sich bereits vor dem Kauf erkennen – vorausgesetzt, die relevanten Unterlagen werden sorgfältig geprüft.",
      p2: "Insbesondere bei Eigentumswohnungen und vermieteten Immobilien liefern Dokumente wichtige Informationen über den tatsächlichen Zustand, bestehende Verpflichtungen und mögliche zukünftige Kosten. Wer diese Unterlagen richtig versteht, kann fundiertere Entscheidungen treffen und unangenehme Überraschungen vermeiden.",
    },
    sections: {
      dokumentenpruefung: {
        heading: "Warum die Prüfung von Unterlagen so wichtig ist",
        p1: "Auf den ersten Blick kann eine Immobilie einen sehr guten Eindruck hinterlassen. Hinter einer attraktiven Fassade können sich jedoch rechtliche Einschränkungen, Sanierungsbedarf oder finanzielle Belastungen verbergen.",
        listIntro: "Eine sorgfältige Dokumentenprüfung hilft dabei,",
        list: [
          "Risiken frühzeitig zu erkennen,",
          "zukünftige Kosten besser einzuschätzen,",
          "den Kaufpreis realistischer zu bewerten,",
          "und Fehlentscheidungen zu vermeiden.",
        ],
        p2: "Gerade bei komplexeren Objekten ist eine strukturierte Analyse häufig sinnvoll.",
        imageAlt: "Person prüft Immobilienunterlagen mit handschriftlichen Notizen",
      },
      grundbuchauszug: {
        heading: "Grundbuchauszug – Wer ist Eigentümer und welche Rechte bestehen?",
        p1: "Der Grundbuchauszug gehört zu den wichtigsten Dokumenten beim Immobilienkauf. Er gibt Auskunft darüber, wem die Immobilie gehört und welche Belastungen eingetragen sind.",
        listIntro: "Besonders relevant sind:",
        list: [
          "Eigentumsverhältnisse",
          "Grundschulden und Hypotheken",
          "Wegerechte oder Wohnrechte",
          "Dienstbarkeiten",
          "Erbbaurechte",
        ],
        p2: "Nicht jede Eintragung stellt ein Problem dar. Dennoch sollten alle Belastungen vor dem Kauf verstanden und bewertet werden.",
        imageAlt:
          "Historische Grundbuchunterlagen und amtliche Dokumente auf einem Holztisch",
      },
      teilungserklaerung: {
        heading:
          "Teilungserklärung – Die rechtliche Grundlage einer Eigentumswohnung",
        p1: "Beim Kauf einer Eigentumswohnung spielt die Teilungserklärung eine zentrale Rolle. Sie regelt das Verhältnis zwischen den einzelnen Wohnungseigentümern und definiert die Rechte und Pflichten innerhalb der Gemeinschaft.",
        listIntro: "Wichtige Inhalte sind:",
        list: [
          "Aufteilung von Sonder- und Gemeinschaftseigentum",
          "Stimmrechte der Eigentümer",
          "Nutzungsmöglichkeiten",
          "Sondernutzungsrechte für Garten, Stellplatz oder Keller",
          "Kostenverteilung innerhalb der Eigentümergemeinschaft",
        ],
        p2: "Viele spätere Konflikte entstehen, weil Käufer die Teilungserklärung vor dem Erwerb nicht ausreichend geprüft haben.",
        imageAlt: "Architektonische Grundrisse und markierte Eigentumsgrenzen",
      },
      wirtschaftsplan: {
        heading: "Wirtschaftsplan – Welche laufenden Kosten entstehen?",
        p1: "Der Wirtschaftsplan zeigt, welche Einnahmen und Ausgaben für die Wohnungseigentümergemeinschaft erwartet werden.",
        listIntro: "Daraus ergeben sich unter anderem:",
        list: [
          "monatliches Hausgeld,",
          "Zuführungen zur Instandhaltungsrücklage,",
          "Betriebskosten,",
          "Verwaltungsaufwendungen,",
          "und geplante Ausgaben für die gemeinschaftlichen Bereiche.",
        ],
        p2: "Ein niedriger Betrag ist nicht automatisch positiv. Zu geringe Rücklagen können später zu hohen Sonderumlagen führen.",
        hausgeldHeading: "Hausgeldabrechnung – Ein Blick auf die tatsächlichen Kosten",
        hausgeldP1:
          "Während der Wirtschaftsplan die zukünftigen Kosten schätzt, zeigt die Hausgeldabrechnung die tatsächlichen Ausgaben der vergangenen Jahre.",
        hausgeldListIntro: "Sie gibt Hinweise auf:",
        hausgeldList: [
          "die Höhe der laufenden Kosten,",
          "den Verbrauch von Heizung und Wasser,",
          "Rücklagenentwicklung,",
          "mögliche Nachzahlungen,",
          "und die wirtschaftliche Situation der Eigentümergemeinschaft.",
        ],
        hausgeldP2:
          "Mehrere Jahre sollten miteinander verglichen werden, um außergewöhnliche Entwicklungen erkennen zu können.",
        imageAlt:
          "Gedruckte Abrechnungen, Taschenrechner und handschriftliche Berechnungen",
      },
      protokolle: {
        heading:
          "Protokolle der Eigentümerversammlung – Oft unterschätzt, aber sehr aufschlussreich",
        p1: "Die Protokolle der Eigentümerversammlungen gehören zu den aussagekräftigsten Unterlagen.",
        listIntro: "Sie enthalten Informationen über:",
        list: [
          "beschlossene Sanierungsmaßnahmen,",
          "Streitigkeiten innerhalb der Gemeinschaft,",
          "geplante Investitionen,",
          "Sonderumlagen,",
          "Probleme mit der Verwaltung,",
          "sowie Schäden am Gebäude.",
        ],
        p2: "Besonders die Protokolle der letzten drei bis fünf Jahre können wichtige Hinweise auf zukünftige Kosten liefern.",
        imageAlt: "Protokolle, Notizen und Besprechungsunterlagen auf einem Tisch",
      },
      energieausweis: {
        heading: "Energieausweis – Wie energieeffizient ist die Immobilie?",
        p1: "Der Energieausweis informiert über den energetischen Zustand eines Gebäudes.",
        listIntro: "Er enthält unter anderem Angaben zu:",
        list: [
          "Energieeffizienzklasse,",
          "Energieverbrauch oder Energiebedarf,",
          "Baujahr,",
          "Heizungsart,",
          "sowie Modernisierungsempfehlungen.",
        ],
        p2: "Angesichts steigender Energiekosten und neuer gesetzlicher Anforderungen gewinnt dieses Dokument zunehmend an Bedeutung.",
        p3: "Ein schlechter energetischer Zustand kann zukünftige Investitionen erforderlich machen und die laufenden Kosten erhöhen.",
        imageAlt: "Energieausweis mit Effizienzklassen neben Gebäudeunterlagen",
      },
      mietvertraege: {
        heading: "Mietverträge – Besonders wichtig bei Kapitalanlagen",
        p1: "Beim Kauf vermieteter Immobilien sollten sämtliche Mietverträge sorgfältig geprüft werden.",
        listIntro: "Entscheidend sind unter anderem:",
        list: [
          "Höhe der aktuellen Miete,",
          "Nebenkostenregelungen,",
          "Laufzeiten,",
          "Staffelmieten oder Indexmieten,",
          "Kündigungsfristen,",
          "sowie besondere Vereinbarungen.",
        ],
        p2: "Die tatsächlichen Mieteinnahmen haben einen direkten Einfluss auf die Rendite und die Finanzierungsmöglichkeiten.",
        imageAlt: "Mietvertragsunterlagen mit Schlüsseln und Füllfederhalter",
      },
      baulasten: {
        heading: "Baulastenverzeichnis – Versteckte Einschränkungen erkennen",
        p1: "Das Baulastenverzeichnis wird häufig übersehen, kann jedoch erhebliche Auswirkungen auf die Nutzung einer Immobilie haben.",
        listIntro: "Dort können beispielsweise eingetragen sein:",
        list: [
          "Abstandsflächen,",
          "Wegerechte,",
          "Stellplatzverpflichtungen,",
          "oder andere öffentlich-rechtliche Verpflichtungen.",
        ],
        p2: "Solche Eintragungen sind nicht im Grundbuch enthalten und sollten daher zusätzlich geprüft werden.",
        imageAlt: "Katasterkarten und kommunale Bauakten in amtlicher Atmosphäre",
      },
      haeufigeFehler: {
        heading: "Häufige Fehler bei der Dokumentenprüfung",
        p1: "Viele Käufer konzentrieren sich ausschließlich auf Lage und Kaufpreis und unterschätzen die Bedeutung der Unterlagen.",
        listIntro: "Zu den häufigsten Fehlern gehören:",
        list: [
          "fehlende Prüfung der Eigentümerversammlungsprotokolle,",
          "unzureichende Analyse der Teilungserklärung,",
          "Vernachlässigung des energetischen Zustands,",
          "keine Überprüfung bestehender Mietverträge,",
          "sowie das Ignorieren möglicher Baulasten.",
        ],
        p2: "Diese Fehler können später hohe Kosten verursachen.",
        imageAlt: "Unterlagen mit Markierungen und handschriftlichen Anmerkungen",
      },
      professionelleAnalyse: {
        heading: "Wann eine professionelle Analyse sinnvoll ist",
        p1: "Je komplexer eine Immobilie ist, desto wichtiger wird eine strukturierte Dokumentenprüfung. Insbesondere bei Eigentumswohnungen, Mehrfamilienhäusern oder Kapitalanlagen reicht ein oberflächlicher Blick auf die Unterlagen häufig nicht aus.",
        p2: "Eine fundierte Analyse berücksichtigt nicht nur einzelne Dokumente, sondern bewertet deren Zusammenspiel und die möglichen Auswirkungen auf Wert, Kosten und Risiken.",
        p3: "Bei immowap werden Dokumente nicht isoliert betrachtet. Je nach Zielsetzung – Eigennutzung, Kapitalanlage oder langfristige Strategie – erfolgt eine individuelle Analyse, um Chancen und potenzielle Risiken frühzeitig sichtbar zu machen.",
        imageAlt: "Gedruckte Berichte, Grundrisse und analytische Notizen",
      },
    },
    fazit: {
      heading: "Fazit",
      p1: "Der Immobilienkauf endet nicht bei der Besichtigung. Erst die sorgfältige Prüfung der Unterlagen ermöglicht eine realistische Einschätzung des Objekts. Grundbuchauszug, Teilungserklärung, Wirtschaftsplan, Hausgeldabrechnung, Protokolle der Eigentümerversammlung, Energieausweis, Mietverträge und das Baulastenverzeichnis liefern wertvolle Informationen, die für eine sichere Kaufentscheidung unverzichtbar sind.",
      p2: "Wer diese Dokumente versteht, schafft die Grundlage für eine langfristig erfolgreiche Immobilienentscheidung.",
    },
    cta: {
      label: "Dokumente verstehen",
      heading: "Fundierte Entscheidungen beginnen mit vollständigen Informationen.",
      text: "Die Prüfung wichtiger Unterlagen gehört zu den entscheidenden Schritten vor dem Immobilienkauf. Strukturierte Analysen helfen dabei, Chancen, Risiken und zukünftige Kosten besser einzuordnen.",
    },
  },
  en: {
    breadcrumbTitle: "Understanding Documents",
    readMinutes: 9,
    hero: {
      title: "Understanding Documents",
      subtitle: "Which documents matter before purchase",
      intro:
        "When buying property, location and price are not the only factors that matter. Much of the critical information is contained in the documents. A careful document review helps identify risks early and supports well-informed decisions.",
      imageAlt:
        "Documents, floor plans and notepad on a desk – document review before a property purchase",
    },
    intro: {
      p1: "Buying property is not only a financial decision but also a legal and technical commitment that can have long-term consequences. Many risks can be identified before purchase – provided the relevant documents are reviewed carefully.",
      p2: "Especially for condominiums and rented properties, documents provide important information about the actual condition, existing obligations and potential future costs. Understanding these documents enables more informed decisions and helps avoid unpleasant surprises.",
    },
    sections: {
      dokumentenpruefung: {
        heading: "Why reviewing documents is so important",
        p1: "At first glance, a property may make a very good impression. However, behind an attractive façade there may be legal restrictions, renovation needs or financial burdens.",
        listIntro: "A careful document review helps to",
        list: [
          "identify risks early,",
          "better estimate future costs,",
          "assess the purchase price more realistically,",
          "and avoid poor decisions.",
        ],
        p2: "For more complex properties in particular, a structured analysis is often advisable.",
        imageAlt: "Person reviewing property documents with handwritten notes",
      },
      grundbuchauszug: {
        heading: "Land register extract – Who owns the property and what rights exist?",
        p1: "The land register extract is one of the most important documents when buying property. It shows who owns the property and which encumbrances are registered.",
        listIntro: "Particularly relevant are:",
        list: [
          "ownership details",
          "land charges and mortgages",
          "rights of way or residential rights",
          "easements",
          "hereditary building rights",
        ],
        p2: "Not every entry is a problem. Nevertheless, all encumbrances should be understood and assessed before purchase.",
        imageAlt: "Historic land register documents and official papers on a wooden table",
      },
      teilungserklaerung: {
        heading:
          "Declaration of division – The legal basis of a condominium",
        p1: "When buying a condominium, the declaration of division plays a central role. It governs the relationship between individual unit owners and defines rights and obligations within the community.",
        listIntro: "Important contents include:",
        list: [
          "division of special and common property",
          "owners' voting rights",
          "permitted uses",
          "special usage rights for garden, parking space or cellar",
          "cost allocation within the owners' association",
        ],
        p2: "Many later conflicts arise because buyers did not review the declaration of division sufficiently before acquisition.",
        imageAlt: "Architectural floor plans with marked property boundaries",
      },
      wirtschaftsplan: {
        heading: "Budget plan – What ongoing costs arise?",
        p1: "The budget plan shows the income and expenditure expected for the condominium owners' association.",
        listIntro: "This includes, among other things:",
        list: [
          "monthly service charges,",
          "contributions to the maintenance reserve,",
          "operating costs,",
          "administration expenses,",
          "and planned expenditure for common areas.",
        ],
        p2: "A low amount is not automatically positive. Insufficient reserves can later lead to high special assessments.",
        hausgeldHeading: "Service charge statement – A look at actual costs",
        hausgeldP1:
          "While the budget plan estimates future costs, the service charge statement shows the actual expenditure of previous years.",
        hausgeldListIntro: "It provides indications of:",
        hausgeldList: [
          "the level of ongoing costs,",
          "heating and water consumption,",
          "reserve development,",
          "possible additional payments,",
          "and the financial situation of the owners' association.",
        ],
        hausgeldP2:
          "Several years should be compared to identify unusual developments.",
        imageAlt: "Printed statements, calculator and handwritten calculations",
      },
      protokolle: {
        heading:
          "Owners' meeting minutes – Often underestimated, but very revealing",
        p1: "The minutes of owners' meetings are among the most informative documents.",
        listIntro: "They contain information about:",
        list: [
          "approved renovation measures,",
          "disputes within the community,",
          "planned investments,",
          "special assessments,",
          "problems with the management,",
          "as well as damage to the building.",
        ],
        p2: "In particular, the minutes of the last three to five years can provide important indications of future costs.",
        imageAlt: "Minutes, notes and meeting documents on a table",
      },
      energieausweis: {
        heading: "Energy certificate – How energy-efficient is the property?",
        p1: "The energy certificate provides information about the energy performance of a building.",
        listIntro: "It includes, among other things, details on:",
        list: [
          "energy efficiency class,",
          "energy consumption or energy demand,",
          "year of construction,",
          "heating type,",
          "as well as modernisation recommendations.",
        ],
        p2: "Given rising energy costs and new legal requirements, this document is becoming increasingly important.",
        p3: "Poor energy performance may require future investment and increase running costs.",
        imageAlt: "Energy certificate with efficiency classes alongside building documents",
      },
      mietvertraege: {
        heading: "Tenancy agreements – Especially important for investment properties",
        p1: "When buying rented properties, all tenancy agreements should be reviewed carefully.",
        listIntro: "Key factors include:",
        list: [
          "current rent level,",
          "service charge arrangements,",
          "contract terms,",
          "graduated or index-linked rents,",
          "notice periods,",
          "as well as special agreements.",
        ],
        p2: "Actual rental income has a direct impact on yield and financing options.",
        imageAlt: "Tenancy documents with keys and fountain pen",
      },
      baulasten: {
        heading: "Building encumbrances register – Recognising hidden restrictions",
        p1: "The building encumbrances register is often overlooked, yet it can have significant effects on the use of a property.",
        listIntro: "Entries may include, for example:",
        list: [
          "setback areas,",
          "rights of way,",
          "parking obligations,",
          "or other public-law obligations.",
        ],
        p2: "Such entries are not contained in the land register and should therefore be reviewed separately.",
        imageAlt: "Cadastral maps and municipal building records in an official setting",
      },
      haeufigeFehler: {
        heading: "Common mistakes in document review",
        p1: "Many buyers focus exclusively on location and purchase price and underestimate the importance of the documents.",
        listIntro: "Among the most common mistakes are:",
        list: [
          "failing to review owners' meeting minutes,",
          "insufficient analysis of the declaration of division,",
          "neglecting the energy performance,",
          "not checking existing tenancy agreements,",
          "and ignoring possible building encumbrances.",
        ],
        p2: "These mistakes can lead to high costs later on.",
        imageAlt: "Documents with markings and handwritten annotations",
      },
      professionelleAnalyse: {
        heading: "When a professional analysis makes sense",
        p1: "The more complex a property is, the more important a structured document review becomes. For condominiums, multi-family buildings or investment properties in particular, a superficial look at the documents is often not enough.",
        p2: "A thorough analysis considers not only individual documents but also how they interact and their potential impact on value, costs and risks.",
        p3: "At immowap, documents are not viewed in isolation. Depending on the objective – owner-occupation, investment or long-term strategy – an individual analysis is carried out to make opportunities and potential risks visible early on.",
        imageAlt: "Printed reports, floor plans and analytical notes",
      },
    },
    fazit: {
      heading: "Conclusion",
      p1: "The property purchase does not end with the viewing. Only a careful review of the documents enables a realistic assessment of the property. Land register extract, declaration of division, budget plan, service charge statement, owners' meeting minutes, energy certificate, tenancy agreements and the building encumbrances register provide valuable information that is essential for a secure purchase decision.",
      p2: "Understanding these documents creates the foundation for a successful long-term property decision.",
    },
    cta: {
      label: "Understanding Documents",
      heading: "Well-informed decisions start with complete information.",
      text: "Reviewing important documents is one of the decisive steps before buying property. Structured analyses help to better assess opportunities, risks and future costs.",
    },
  },
} as const;

function EditorialSplitSection({
  reverse = false,
  children,
}: {
  reverse?: boolean;
  children: ReactNode;
}) {
  const visual = (
    <div className="flex justify-center lg:justify-end">
      <ProductVisual variant="documents" className="max-w-full" />
    </div>
  );

  return (
    <div className="not-prose my-16 border-t border-border/50 pt-16 md:pt-20">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        {reverse ? (
          <>
            {visual}
            <div>{children}</div>
          </>
        ) : (
          <>
            <div>{children}</div>
            {visual}
          </>
        )}
      </div>
    </div>
  );
}

interface DokumenteVerstehenPageProps {
  locale: Locale;
}

export function DokumenteVerstehenPage({ locale }: DokumenteVerstehenPageProps) {
  const t = copy[locale];
  const ui = propertyKnowledgeUi[locale];
  const s = t.sections;

  return (
    <ArticleLayout
      locale={locale}
      breadcrumbTitle={t.breadcrumbTitle}
      heroLabel={ui.categoryShort}
      heroHeadline={t.hero.title}
      heroSubheadline={t.hero.intro}
      articleSubtitle={t.hero.subtitle}
      readMinutes={t.readMinutes}
      introduction={
        <>
          <ArticleP>{t.intro.p1}</ArticleP>
          <ArticleP>{t.intro.p2}</ArticleP>
        </>
      }
      backLinkHref={propertyKnowledgeOverview[locale].href}
      relatedExcludeId="dokumente-verstehen"
    >
      <EditorialSplitSection>
        <ArticleH2 id="dokumentenpruefung">{s.dokumentenpruefung.heading}</ArticleH2>
        <ArticleP>{s.dokumentenpruefung.p1}</ArticleP>
        <ArticleP>{s.dokumentenpruefung.listIntro}</ArticleP>
        <EditorialList items={s.dokumentenpruefung.list} />
        <ArticleP>{s.dokumentenpruefung.p2}</ArticleP>
      </EditorialSplitSection>

      <EditorialSplitSection reverse>
        <ArticleH2 id="grundbuchauszug">{s.grundbuchauszug.heading}</ArticleH2>
        <ArticleP>{s.grundbuchauszug.p1}</ArticleP>
        <ArticleP>{s.grundbuchauszug.listIntro}</ArticleP>
        <EditorialList items={s.grundbuchauszug.list} />
        <ArticleP>{s.grundbuchauszug.p2}</ArticleP>
      </EditorialSplitSection>

      <EditorialSplitSection>
        <ArticleH2 id="teilungserklaerung">{s.teilungserklaerung.heading}</ArticleH2>
        <ArticleP>{s.teilungserklaerung.p1}</ArticleP>
        <ArticleP>{s.teilungserklaerung.listIntro}</ArticleP>
        <EditorialList items={s.teilungserklaerung.list} />
        <ArticleP>{s.teilungserklaerung.p2}</ArticleP>
      </EditorialSplitSection>

      <EditorialSplitSection reverse>
        <ArticleH2 id="wirtschaftsplan">{s.wirtschaftsplan.heading}</ArticleH2>
        <ArticleP>{s.wirtschaftsplan.p1}</ArticleP>
        <ArticleP>{s.wirtschaftsplan.listIntro}</ArticleP>
        <EditorialList items={s.wirtschaftsplan.list} />
        <ArticleP>{s.wirtschaftsplan.p2}</ArticleP>

        <ArticleH2 id="hausgeld">{s.wirtschaftsplan.hausgeldHeading}</ArticleH2>
        <ArticleP>{s.wirtschaftsplan.hausgeldP1}</ArticleP>
        <ArticleP>{s.wirtschaftsplan.hausgeldListIntro}</ArticleP>
        <EditorialList items={s.wirtschaftsplan.hausgeldList} />
        <ArticleP>{s.wirtschaftsplan.hausgeldP2}</ArticleP>
      </EditorialSplitSection>

      <EditorialSplitSection>
        <ArticleH2 id="protokolle">{s.protokolle.heading}</ArticleH2>
        <ArticleP>{s.protokolle.p1}</ArticleP>
        <ArticleP>{s.protokolle.listIntro}</ArticleP>
        <EditorialList items={s.protokolle.list} />
        <ArticleP>{s.protokolle.p2}</ArticleP>
      </EditorialSplitSection>

      <EditorialSplitSection reverse>
        <ArticleH2 id="energieausweis">{s.energieausweis.heading}</ArticleH2>
        <ArticleP>{s.energieausweis.p1}</ArticleP>
        <ArticleP>{s.energieausweis.listIntro}</ArticleP>
        <EditorialList items={s.energieausweis.list} />
        <ArticleP>{s.energieausweis.p2}</ArticleP>
        <ArticleP>{s.energieausweis.p3}</ArticleP>
      </EditorialSplitSection>

      <EditorialSplitSection>
        <ArticleH2 id="mietvertraege">{s.mietvertraege.heading}</ArticleH2>
        <ArticleP>{s.mietvertraege.p1}</ArticleP>
        <ArticleP>{s.mietvertraege.listIntro}</ArticleP>
        <EditorialList items={s.mietvertraege.list} />
        <ArticleP>{s.mietvertraege.p2}</ArticleP>
      </EditorialSplitSection>

      <EditorialSplitSection reverse>
        <ArticleH2 id="baulasten">{s.baulasten.heading}</ArticleH2>
        <ArticleP>{s.baulasten.p1}</ArticleP>
        <ArticleP>{s.baulasten.listIntro}</ArticleP>
        <EditorialList items={s.baulasten.list} />
        <ArticleP>{s.baulasten.p2}</ArticleP>
      </EditorialSplitSection>

      <EditorialSplitSection>
        <ArticleH2 id="haeufige-fehler">{s.haeufigeFehler.heading}</ArticleH2>
        <ArticleP>{s.haeufigeFehler.p1}</ArticleP>
        <ArticleP>{s.haeufigeFehler.listIntro}</ArticleP>
        <EditorialList items={s.haeufigeFehler.list} />
        <ArticleP>{s.haeufigeFehler.p2}</ArticleP>
      </EditorialSplitSection>

      <EditorialSplitSection reverse>
        <ArticleH2 id="professionelle-analyse">{s.professionelleAnalyse.heading}</ArticleH2>
        <ArticleP>{s.professionelleAnalyse.p1}</ArticleP>
        <ArticleP>{s.professionelleAnalyse.p2}</ArticleP>
        <ArticleP>{s.professionelleAnalyse.p3}</ArticleP>
      </EditorialSplitSection>

      <ArticleH2 id="fazit">{t.fazit.heading}</ArticleH2>
      <ArticleP>{t.fazit.p1}</ArticleP>
      <ArticleP>{t.fazit.p2}</ArticleP>
    </ArticleLayout>
  );
}
