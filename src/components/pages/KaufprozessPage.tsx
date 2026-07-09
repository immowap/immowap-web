import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { ArticleLayout } from "@/components/editorial/ArticleLayout";
import {
  ArticleH2,
  ArticleH3,
  ArticleP,
  EditorialList,
} from "@/components/property-knowledge/ArticleUi";
import type { Locale } from "@/lib/i18n/config";
import { propertyKnowledgeOverview } from "@/lib/i18n/property-knowledge";

interface KaufprozessPageProps {
  locale: Locale;
}

export const kaufprozessCopy = {
  de: {
    metaTitle: "Der Immobilienkauf Schritt für Schritt | immowap",
    metaDescription:
      "Kaufprozess einer Immobilie in Deutschland: Immobiliensuche, Besichtigung, Finanzierung, Kaufvertrag, Notar, Grundbuch und Übergabe – strukturiert erklärt.",
    breadcrumbTitle: "Kaufprozess",
    heroImageAlt:
      "Der Immobilienkauf Schritt für Schritt – Wohnimmobilie in Deutschland",
    heroLabel: "Wissen · Immobilienwissen",
    heroHeadline: "Der Immobilienkauf Schritt für Schritt",
    heroSubheadline:
      "Von der Immobiliensuche bis zur Übergabe – welche Schritte beim Immobilienkauf in Deutschland wichtig sind und worauf Käufer besonders achten sollten.",
    articleTitle: "Der Immobilienkauf Schritt für Schritt",
    articleSubtitle: "So läuft der Kauf einer Immobilie in Deutschland ab",
    readMinutes: 7,
    tocLabel: "Inhaltsverzeichnis",
    tocItems: [
      { id: "immobiliensuche", label: "Immobiliensuche" },
      { id: "besichtigung", label: "Besichtigung" },
      { id: "preisverhandlung", label: "Preisverhandlung" },
      { id: "finanzierung", label: "Finanzierung" },
      { id: "kaufvertrag", label: "Kaufvertrag" },
      { id: "notartermin", label: "Notartermin" },
      { id: "grundbuch", label: "Grundbuch" },
      { id: "uebergabe", label: "Übergabe" },
      { id: "haeufige-fehler", label: "Häufige Fehler beim Kauf" },
    ],
    introP1:
      "Der Kauf einer Immobilie gehört zu den wichtigsten finanziellen Entscheidungen im Leben. Dabei geht es nicht nur um den Kaufpreis, sondern auch um zahlreiche rechtliche, technische und wirtschaftliche Aspekte. Wer den Kaufprozess versteht und strukturiert vorgeht, kann Risiken reduzieren und fundiertere Entscheidungen treffen.",
    introP2:
      "Im Folgenden erfahren Sie, welche Schritte beim Immobilienkauf in Deutschland typischerweise aufeinander folgen und worauf besonders zu achten ist.",
    sectionImmobiliensuche: "Die passende Immobilie finden",
    sectionImmobiliensucheP1:
      "Am Anfang steht die Suche nach einer Immobilie, die zu den eigenen Zielen und finanziellen Möglichkeiten passt. Dabei spielen verschiedene Faktoren eine Rolle. Neben dem Kaufpreis sind insbesondere die Lage, die Größe, der Zustand, die Infrastruktur und die langfristigen Entwicklungsmöglichkeiten entscheidend.",
    sectionImmobiliensucheP2:
      "Nicht jede Immobilie, die auf den ersten Blick attraktiv erscheint, eignet sich auch für die individuellen Bedürfnisse. Deshalb empfiehlt es sich, bereits vor Beginn der Suche ein realistisches Budget festzulegen und die eigenen Prioritäten klar zu definieren.",
    sectionBesichtigung: "Die Besichtigung sorgfältig vorbereiten",
    sectionBesichtigungP1:
      "Eine Besichtigung dient nicht nur dazu, einen ersten Eindruck zu gewinnen. Sie bietet die Möglichkeit, den baulichen Zustand und mögliche Risiken besser einzuschätzen.",
    sectionBesichtigungP2:
      "Besondere Aufmerksamkeit sollten Käufer unter anderem folgenden Punkten widmen:",
    besichtigungList: [
      "Zustand von Dach und Fassade",
      "Fenster und Dämmung",
      "Heizungsanlage",
      "Feuchtigkeit oder Schimmel",
      "Elektrische Installationen",
      "Keller und Gemeinschaftsflächen",
      "Umgebung und Infrastruktur",
    ],
    sectionBesichtigungP3:
      "Bei Eigentumswohnungen sollten zusätzlich Protokolle der Eigentümerversammlungen, die Höhe der Instandhaltungsrücklage sowie das Hausgeld überprüft werden.",
    sectionPreisverhandlung: "Preisverhandlung – mehr als nur Feilschen",
    sectionPreisverhandlungP1:
      "Der angebotene Kaufpreis entspricht nicht immer dem tatsächlichen Marktwert einer Immobilie. Deshalb lohnt es sich, Vergleichsobjekte, den Zustand des Gebäudes und eventuell notwendige Sanierungen in die Verhandlungen einzubeziehen.",
    sectionPreisverhandlungP2:
      "Eine sachliche und gut vorbereitete Preisverhandlung kann dazu beitragen, einen angemessenen Kaufpreis zu erzielen. Gerade in Regionen mit geringer Nachfrage besteht häufig Verhandlungsspielraum.",
    sectionFinanzierung: "Die Finanzierung rechtzeitig planen",
    sectionFinanzierungP1:
      "Noch bevor ein Kaufvertrag unterschrieben wird, sollte die Finanzierung geklärt sein. Banken berücksichtigen dabei unter anderem:",
    finanzierungList: [
      "Eigenkapital",
      "Monatliches Einkommen",
      "Laufende Verpflichtungen",
      "Bonität und Schufa",
      "Alter und Beschäftigungssituation",
    ],
    sectionFinanzierungP2:
      "Neben dem Kaufpreis müssen auch die Kaufnebenkosten einkalkuliert werden. Dazu gehören insbesondere die Grunderwerbsteuer, Notarkosten sowie gegebenenfalls die Maklerprovision.",
    sectionFinanzierungP3:
      "Eine solide Finanzierung schafft Planungssicherheit und verhindert spätere finanzielle Belastungen.",
    sectionKaufvertrag: "Der Kaufvertrag",
    sectionKaufvertragP1:
      "Sobald sich Käufer und Verkäufer geeinigt haben, erstellt der Notar einen Kaufvertragsentwurf. Dieser sollte sorgfältig gelesen und verstanden werden.",
    sectionKaufvertragP2: "Im Kaufvertrag werden unter anderem folgende Punkte geregelt:",
    kaufvertragList: [
      "Kaufpreis",
      "Zahlungsmodalitäten",
      "Übergabetermin",
      "Rechte und Pflichten der Vertragsparteien",
      "Eventuelle Mängel oder Besonderheiten",
      "Mitverkaufte Gegenstände",
    ],
    sectionKaufvertragP3:
      "Da ein Immobilienkauf langfristige Auswirkungen hat, sollte ausreichend Zeit für die Prüfung des Vertrags eingeplant werden.",
    sectionNotartermin: "Der Notartermin",
    sectionNotarterminP1:
      "In Deutschland kann eine Immobilie nur durch notarielle Beurkundung rechtswirksam verkauft werden.",
    sectionNotarterminP2:
      "Beim Notartermin erläutert der Notar den Kaufvertrag und beantwortet offene Fragen. Erst mit der Unterzeichnung durch beide Parteien kommt der Kaufvertrag zustande.",
    sectionNotarterminP3:
      "Der Notar übernimmt anschließend verschiedene Aufgaben, darunter die Eintragung der Auflassungsvormerkung und die Vorbereitung des Eigentumsübergangs.",
    sectionGrundbuch: "Die Eintragung ins Grundbuch",
    sectionGrundbuchP1:
      "Nach der Kaufpreiszahlung erfolgt die Umschreibung im Grundbuch. Erst mit dieser Eintragung wird der Käufer rechtlich zum Eigentümer der Immobilie.",
    sectionGrundbuchP2:
      "Bis zur endgültigen Eintragung können mehrere Wochen oder sogar Monate vergehen. Der Notar begleitet diesen Prozess und stellt sicher, dass alle Voraussetzungen erfüllt sind.",
    sectionUebergabe: "Die Übergabe der Immobilie",
    sectionUebergabeP1:
      "Nach Abschluss aller Formalitäten erfolgt die Übergabe. Dabei sollte ein Übergabeprotokoll erstellt werden.",
    sectionUebergabeP2: "Dieses dokumentiert beispielsweise:",
    uebergabeList: [
      "Zählerstände für Strom, Wasser und Gas",
      "Übergebene Schlüssel",
      "Vorhandene Mängel",
      "Übernommene Einrichtungsgegenstände",
    ],
    sectionUebergabeP3:
      "Eine sorgfältige Dokumentation hilft dabei, spätere Unklarheiten zu vermeiden.",
    sectionFehler: "Häufige Fehler beim Immobilienkauf",
    sectionFehlerP1:
      "Viele Probleme entstehen nicht durch den Kauf selbst, sondern durch mangelnde Vorbereitung. Zu den häufigsten Fehlern gehören:",
    fehlerEigenkapital: "Zu wenig Eigenkapital",
    fehlerEigenkapitalP:
      "Wer sämtliche Reserven für den Kauf einsetzt, verfügt später häufig nicht mehr über ausreichende finanzielle Spielräume.",
    fehlerKaufpreis: "Nur auf den Kaufpreis achten",
    fehlerKaufpreisP:
      "Sanierungskosten, Hausgeld oder zukünftige Instandhaltungen werden oft unterschätzt.",
    fehlerUnterlagen: "Unterlagen nicht prüfen",
    fehlerUnterlagenP:
      "Teilungserklärung, Energieausweis, Grundbuchauszug oder Protokolle der Eigentümerversammlungen liefern wichtige Informationen und sollten nicht unbeachtet bleiben.",
    fehlerEmotion: "Emotionale Entscheidungen treffen",
    fehlerEmotionP:
      "Eine Immobilie sollte nicht ausschließlich aufgrund von Emotionen gekauft werden. Langfristige finanzielle Aspekte sind ebenso wichtig.",
    fehlerRisiken: "Risiken unterschätzen",
    fehlerRisikenP:
      "Versteckte Mängel oder zukünftige Modernisierungen können erhebliche Kosten verursachen.",
    fazitTitle: "Fazit",
    fazitP1:
      "Ein Immobilienkauf besteht aus weit mehr als der Suche nach einem passenden Objekt. Von der Finanzierung über den Kaufvertrag bis hin zur Grundbucheintragung sind zahlreiche Schritte zu beachten.",
    fazitP2:
      "Wer den Kaufprozess versteht und sich ausreichend Zeit für die Prüfung aller Unterlagen nimmt, kann Risiken reduzieren und eine langfristig tragfähige Entscheidung treffen.",
    fazitP3:
      "Gerade bei komplexen Fragestellungen kann eine individuelle Analyse helfen, Chancen und mögliche Risiken frühzeitig zu erkennen und die Immobilie im Zusammenhang mit den persönlichen Zielen und Rahmenbedingungen besser einzuordnen.",
    underestimateLabel: "Einordnung",
    underestimateHeadline: "Was Käufer häufig unterschätzen",
    underestimateCards: [
      {
        title: "Nebenkosten richtig einplanen",
        description:
          "Nicht nur der Kaufpreis entscheidet. Auch Grunderwerbsteuer, Notarkosten und weitere Kaufnebenkosten sollten berücksichtigt werden.",
      },
      {
        title: "Unterlagen sorgfältig prüfen",
        description:
          "Grundbuchauszug, Energieausweis und weitere Dokumente liefern wichtige Informationen über die Immobilie.",
      },
      {
        title: "Langfristig denken",
        description:
          "Eine Immobilie sollte nicht nur zu den aktuellen Bedürfnissen, sondern auch zu den langfristigen Zielen passen.",
      },
    ],
    perspectiveLabel: "Perspektive",
    perspectiveHeadline: "Immobilienkauf strukturiert betrachten",
    perspectiveSubheadline: "Jede Immobilie ist anders.",
    perspectiveText:
      "Der Kauf einer Immobilie umfasst zahlreiche wirtschaftliche, technische und rechtliche Aspekte. Neben dem Kaufpreis spielen auch Lage, Zustand, Unterlagen und langfristige Entwicklungen eine wichtige Rolle. Eine strukturierte Betrachtung hilft dabei, Chancen und Risiken besser einzuordnen und fundierte Entscheidungen zu treffen.",
    sectionImageAlt: "Elegantes europäisches Wohnhaus in einer ruhigen Wohngegend",
    ctaLabel: "Kaufprozess",
    ctaHeadline: "Fundierte Entscheidungen beginnen mit Klarheit.",
    ctaText:
      "Eine strukturierte Analyse hilft dabei, Chancen und Risiken frühzeitig zu erkennen und Immobilienentscheidungen auf eine solide Grundlage zu stellen.",
  },
  en: {
    metaTitle: "The Property Purchase Step by Step | immowap",
    metaDescription:
      "Property purchase process in Germany: property search, viewing, financing, purchase contract, notary, land register and handover — explained in a structured way.",
    breadcrumbTitle: "Buying Process",
    heroImageAlt:
      "The property purchase step by step — residential property in Germany",
    heroLabel: "Knowledge · Property Knowledge",
    heroHeadline: "The Property Purchase Step by Step",
    heroSubheadline:
      "From property search to handover — the important steps when buying property in Germany and what buyers should pay particular attention to.",
    articleTitle: "The Property Purchase Step by Step",
    articleSubtitle: "How buying a property in Germany works",
    readMinutes: 7,
    tocLabel: "Table of contents",
    tocItems: [
      { id: "immobiliensuche", label: "Property search" },
      { id: "besichtigung", label: "Viewing" },
      { id: "preisverhandlung", label: "Price negotiation" },
      { id: "finanzierung", label: "Financing" },
      { id: "kaufvertrag", label: "Purchase contract" },
      { id: "notartermin", label: "Notary appointment" },
      { id: "grundbuch", label: "Land register" },
      { id: "uebergabe", label: "Handover" },
      { id: "haeufige-fehler", label: "Common purchase mistakes" },
    ],
    introP1:
      "Buying a property is one of the most important financial decisions in life. It is not only about the purchase price, but also about numerous legal, technical and economic aspects. Anyone who understands the purchase process and proceeds in a structured way can reduce risks and make better-founded decisions.",
    introP2:
      "Below you will learn which steps typically follow one another when buying property in Germany and what to pay particular attention to.",
    sectionImmobiliensuche: "Finding the right property",
    sectionImmobiliensucheP1:
      "The process begins with searching for a property that fits your goals and financial means. Various factors play a role. In addition to the purchase price, location, size, condition, infrastructure and long-term development potential are particularly decisive.",
    sectionImmobiliensucheP2:
      "Not every property that appears attractive at first glance is also suitable for individual needs. It is therefore advisable to set a realistic budget and define your priorities clearly before starting the search.",
    sectionBesichtigung: "Preparing for the viewing carefully",
    sectionBesichtigungP1:
      "A viewing is not only about gaining a first impression. It offers the opportunity to better assess the building condition and possible risks.",
    sectionBesichtigungP2:
      "Buyers should pay particular attention to the following points, among others:",
    besichtigungList: [
      "Condition of roof and facade",
      "Windows and insulation",
      "Heating system",
      "Damp or mould",
      "Electrical installations",
      "Basement and communal areas",
      "Surroundings and infrastructure",
    ],
    sectionBesichtigungP3:
      "For condominiums, minutes of owners' meetings, the level of maintenance reserves and service charges should also be reviewed.",
    sectionPreisverhandlung: "Price negotiation — more than just haggling",
    sectionPreisverhandlungP1:
      "The offered purchase price does not always correspond to the actual market value of a property. It is therefore worth including comparable properties, the condition of the building and any necessary renovations in negotiations.",
    sectionPreisverhandlungP2:
      "A factual and well-prepared price negotiation can help achieve an appropriate purchase price. Especially in regions with low demand, there is often room for negotiation.",
    sectionFinanzierung: "Planning financing in good time",
    sectionFinanzierungP1:
      "Financing should be clarified before a purchase contract is signed. Banks take into account the following, among other things:",
    finanzierungList: [
      "Equity",
      "Monthly income",
      "Ongoing obligations",
      "Creditworthiness and Schufa",
      "Age and employment situation",
    ],
    sectionFinanzierungP2:
      "In addition to the purchase price, ancillary purchase costs must also be factored in. These include in particular real estate transfer tax, notary costs and, where applicable, estate agent commission.",
    sectionFinanzierungP3:
      "Solid financing creates planning certainty and prevents later financial strain.",
    sectionKaufvertrag: "The purchase contract",
    sectionKaufvertragP1:
      "Once buyer and seller have agreed, the notary draws up a draft purchase contract. This should be read and understood carefully.",
    sectionKaufvertragP2: "The purchase contract regulates the following points, among others:",
    kaufvertragList: [
      "Purchase price",
      "Payment terms",
      "Handover date",
      "Rights and obligations of the contracting parties",
      "Any defects or special features",
      "Items sold with the property",
    ],
    sectionKaufvertragP3:
      "Since a property purchase has long-term effects, sufficient time should be planned for reviewing the contract.",
    sectionNotartermin: "The notary appointment",
    sectionNotarterminP1:
      "In Germany, a property can only be sold effectively through notarial certification.",
    sectionNotarterminP2:
      "At the notary appointment, the notary explains the purchase contract and answers open questions. The purchase contract only comes into effect when both parties sign.",
    sectionNotarterminP3:
      "The notary then takes on various tasks, including registering the priority notice of conveyance and preparing the transfer of ownership.",
    sectionGrundbuch: "Entry in the land register",
    sectionGrundbuchP1:
      "After payment of the purchase price, the property is re-registered in the land register. Only with this entry does the buyer legally become the owner of the property.",
    sectionGrundbuchP2:
      "Several weeks or even months may pass before final registration. The notary accompanies this process and ensures that all requirements are met.",
    sectionUebergabe: "Handover of the property",
    sectionUebergabeP1:
      "After completion of all formalities, the handover takes place. A handover protocol should be prepared.",
    sectionUebergabeP2: "This documents, for example:",
    uebergabeList: [
      "Meter readings for electricity, water and gas",
      "Keys handed over",
      "Existing defects",
      "Fixtures and fittings taken over",
    ],
    sectionUebergabeP3:
      "Careful documentation helps avoid later uncertainties.",
    sectionFehler: "Common mistakes when buying property",
    sectionFehlerP1:
      "Many problems do not arise from the purchase itself, but from inadequate preparation. The most common mistakes include:",
    fehlerEigenkapital: "Too little equity",
    fehlerEigenkapitalP:
      "Anyone who uses all reserves for the purchase often no longer has sufficient financial flexibility later.",
    fehlerKaufpreis: "Focusing only on the purchase price",
    fehlerKaufpreisP:
      "Renovation costs, service charges or future maintenance are often underestimated.",
    fehlerUnterlagen: "Not reviewing documents",
    fehlerUnterlagenP:
      "Declaration of division, energy certificate, land register extract or minutes of owners' meetings provide important information and should not be overlooked.",
    fehlerEmotion: "Making emotional decisions",
    fehlerEmotionP:
      "A property should not be bought solely on the basis of emotions. Long-term financial aspects are equally important.",
    fehlerRisiken: "Underestimating risks",
    fehlerRisikenP:
      "Hidden defects or future modernisation can cause considerable costs.",
    fazitTitle: "Conclusion",
    fazitP1:
      "Buying a property involves far more than searching for a suitable object. From financing and the purchase contract to land register entry, numerous steps must be observed.",
    fazitP2:
      "Anyone who understands the purchase process and takes sufficient time to review all documents can reduce risks and make a long-term viable decision.",
    fazitP3:
      "Especially for complex questions, an individual analysis can help identify opportunities and possible risks early and better assess the property in relation to personal goals and circumstances.",
    underestimateLabel: "Context",
    underestimateHeadline: "What buyers often underestimate",
    underestimateCards: [
      {
        title: "Planning ancillary costs correctly",
        description:
          "It is not only the purchase price that matters. Real estate transfer tax, notary costs and other ancillary purchase costs should also be taken into account.",
      },
      {
        title: "Reviewing documents carefully",
        description:
          "Land register extract, energy certificate and other documents provide important information about the property.",
      },
      {
        title: "Thinking long term",
        description:
          "A property should fit not only current needs but also long-term goals.",
      },
    ],
    perspectiveLabel: "Perspective",
    perspectiveHeadline: "Considering the property purchase in a structured way",
    perspectiveSubheadline: "Every property is different.",
    perspectiveText:
      "Buying a property encompasses numerous economic, technical and legal aspects. In addition to the purchase price, location, condition, documents and long-term developments also play an important role. A structured assessment helps to better classify opportunities and risks and make well-founded decisions.",
    sectionImageAlt: "Elegant European residential house in a quiet residential area",
    ctaLabel: "Buying Process",
    ctaHeadline: "Well-founded decisions begin with clarity.",
    ctaText:
      "A structured analysis helps to identify opportunities and risks early and place property decisions on a solid foundation.",
  },
} as const;

export function KaufprozessPage({ locale }: KaufprozessPageProps) {
  const c = kaufprozessCopy[locale];

  return (
    <ArticleLayout
      locale={locale}
      breadcrumbTitle={c.breadcrumbTitle}
      heroLabel={c.heroLabel}
      heroHeadline={c.heroHeadline}
      heroSubheadline={c.heroSubheadline}
      articleTitle={c.articleTitle}
      articleSubtitle={c.articleSubtitle}
      readMinutes={c.readMinutes}
      tocLabel={c.tocLabel}
      tocItems={c.tocItems}
      introduction={
        <>
          <ArticleP>{c.introP1}</ArticleP>
          <ArticleP>{c.introP2}</ArticleP>
        </>
      }
      backLinkHref={propertyKnowledgeOverview[locale].href}
      relatedExcludeId="kaufprozess"
      afterArticle={
        <>
          <Section className="py-16 md:py-24">
            <div className="mx-auto max-w-[800px]">
              <p className="text-label mb-4 block text-gold-600">{c.underestimateLabel}</p>
              <h2 className="text-h2 text-brand-800">{c.underestimateHeadline}</h2>
              <div className="gold-rule mt-6" aria-hidden="true" />
              <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
                {c.underestimateCards.map((card) => (
                  <Card key={card.title} className="h-full bg-white shadow-none">
                    <CardTitle className="text-lg">{card.title}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                  </Card>
                ))}
              </div>
            </div>
          </Section>

          <Section variant="muted" className="py-24 md:py-32">
            <div className="mx-auto max-w-[850px]">
              <p className="text-label mb-6 block text-gold-600">{c.perspectiveLabel}</p>
              <h2 className="text-h2 text-brand-800">{c.perspectiveHeadline}</h2>
              <div className="gold-rule mt-8" aria-hidden="true" />
              <h3 className="mt-8 text-xl font-semibold text-brand-800">
                {c.perspectiveSubheadline}
              </h3>
              <p className="mt-6 text-lg leading-[1.8] text-muted">{c.perspectiveText}</p>
            </div>
          </Section>
        </>
      }
    >
      <ArticleH2 id="immobiliensuche">{c.sectionImmobiliensuche}</ArticleH2>
      <ArticleP>{c.sectionImmobiliensucheP1}</ArticleP>
      <ArticleP>{c.sectionImmobiliensucheP2}</ArticleP>

      <ArticleH2 id="besichtigung">{c.sectionBesichtigung}</ArticleH2>
      <ArticleP>{c.sectionBesichtigungP1}</ArticleP>
      <ArticleP>{c.sectionBesichtigungP2}</ArticleP>
      <EditorialList items={c.besichtigungList} />
      <ArticleP>{c.sectionBesichtigungP3}</ArticleP>

      <ArticleH2 id="preisverhandlung">{c.sectionPreisverhandlung}</ArticleH2>
      <ArticleP>{c.sectionPreisverhandlungP1}</ArticleP>
      <ArticleP>{c.sectionPreisverhandlungP2}</ArticleP>

      <ArticleH2 id="finanzierung">{c.sectionFinanzierung}</ArticleH2>
      <ArticleP>{c.sectionFinanzierungP1}</ArticleP>
      <EditorialList items={c.finanzierungList} />
      <ArticleP>{c.sectionFinanzierungP2}</ArticleP>
      <ArticleP>{c.sectionFinanzierungP3}</ArticleP>

      <ArticleH2 id="kaufvertrag">{c.sectionKaufvertrag}</ArticleH2>
      <ArticleP>{c.sectionKaufvertragP1}</ArticleP>
      <ArticleP>{c.sectionKaufvertragP2}</ArticleP>
      <EditorialList items={c.kaufvertragList} />
      <ArticleP>{c.sectionKaufvertragP3}</ArticleP>

      <ArticleH2 id="notartermin">{c.sectionNotartermin}</ArticleH2>
      <ArticleP>{c.sectionNotarterminP1}</ArticleP>
      <ArticleP>{c.sectionNotarterminP2}</ArticleP>
      <ArticleP>{c.sectionNotarterminP3}</ArticleP>

      <ArticleH2 id="grundbuch">{c.sectionGrundbuch}</ArticleH2>
      <ArticleP>{c.sectionGrundbuchP1}</ArticleP>
      <ArticleP>{c.sectionGrundbuchP2}</ArticleP>

      <ArticleH2 id="uebergabe">{c.sectionUebergabe}</ArticleH2>
      <ArticleP>{c.sectionUebergabeP1}</ArticleP>
      <ArticleP>{c.sectionUebergabeP2}</ArticleP>
      <EditorialList items={c.uebergabeList} />
      <ArticleP>{c.sectionUebergabeP3}</ArticleP>

      <ArticleH2 id="haeufige-fehler">{c.sectionFehler}</ArticleH2>
      <ArticleP>{c.sectionFehlerP1}</ArticleP>

      <ArticleH3>{c.fehlerEigenkapital}</ArticleH3>
      <ArticleP>{c.fehlerEigenkapitalP}</ArticleP>

      <ArticleH3>{c.fehlerKaufpreis}</ArticleH3>
      <ArticleP>{c.fehlerKaufpreisP}</ArticleP>

      <ArticleH3>{c.fehlerUnterlagen}</ArticleH3>
      <ArticleP>{c.fehlerUnterlagenP}</ArticleP>

      <ArticleH3>{c.fehlerEmotion}</ArticleH3>
      <ArticleP>{c.fehlerEmotionP}</ArticleP>

      <ArticleH3>{c.fehlerRisiken}</ArticleH3>
      <ArticleP>{c.fehlerRisikenP}</ArticleP>

      <ArticleH2 id="fazit">{c.fazitTitle}</ArticleH2>
      <ArticleP>{c.fazitP1}</ArticleP>
      <ArticleP>{c.fazitP2}</ArticleP>
      <ArticleP>{c.fazitP3}</ArticleP>
    </ArticleLayout>
  );
}
