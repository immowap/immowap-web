import { Section } from "@/components/ui/Section";
import {
  ArticleH2,
  ArticleP,
} from "@/components/property-knowledge/ArticleUi";
import { ArticleLayout } from "@/components/editorial/ArticleLayout";
import type { Locale } from "@/lib/i18n/config";
import { propertyKnowledgeOverview } from "@/lib/i18n/property-knowledge";

interface VermietungPageProps {
  locale: Locale;
}

export const vermietungCopy = {
  de: {
    metaTitle: "Immobilien erfolgreich vermieten | immowap",
    metaDescription:
      "Grundlagen für Vermieter und Investoren: Mietvertrag, Nebenkosten, Mietrendite, Mietpreisbremse, Mieterhöhung, Leerstand und Auswahl geeigneter Mieter.",
    breadcrumbTitle: "Vermietung",
    heroImageAlt:
      "Immobilien erfolgreich vermieten – Mehrfamilienhaus als Kapitalanlage",
    heroLabel: "Wissen · Immobilienwissen",
    heroHeadline: "Immobilien erfolgreich vermieten",
    heroSubheadline:
      "Eine erfolgreiche Vermietung basiert nicht nur auf der Miethöhe. Mietvertrag, Rendite, Leerstandsrisiken und die Auswahl geeigneter Mieter spielen eine wichtige Rolle für langfristig stabile Erträge.",
    articleTitle:
      "Immobilien erfolgreich vermieten – Worauf Vermieter achten sollten",
    readMinutes: 8,
    introP1:
      "Die Vermietung einer Immobilie stellt für viele Eigentümer eine langfristige Einnahmequelle dar und kann einen wichtigen Beitrag zum Vermögensaufbau leisten. Damit ein Mietverhältnis dauerhaft erfolgreich verläuft, sind jedoch verschiedene wirtschaftliche und rechtliche Aspekte zu berücksichtigen. Eine gute Vorbereitung hilft dabei, Risiken zu reduzieren und die Immobilie nachhaltig rentabel zu bewirtschaften.",
    sectionMietvertrag: "Mietvertrag",
    sectionMietvertragP1:
      "Der Mietvertrag regelt die Rechte und Pflichten von Vermieter und Mieter und bildet die Basis für ein geordnetes Mietverhältnis. Darin werden unter anderem die Miethöhe, die Nebenkosten, die Kaution, Kündigungsfristen sowie weitere Vereinbarungen festgelegt.",
    sectionMietvertragP2:
      "Ein verständlich formulierter und rechtssicherer Vertrag schafft Klarheit für beide Seiten und kann spätere Auseinandersetzungen vermeiden. Gerade bei besonderen Vereinbarungen sollte auf eine sorgfältige Vertragsgestaltung geachtet werden.",
    sectionNebenkosten: "Nebenkosten",
    sectionNebenkostenP1:
      "Neben der eigentlichen Miete spielen die Nebenkosten eine wichtige Rolle. Zu den umlagefähigen Kosten gehören beispielsweise die Heizkosten, die Wasserversorgung, die Müllentsorgung, Versicherungen oder die Kosten für den Hausmeister.",
    sectionNebenkostenP2:
      "Nicht alle Ausgaben dürfen auf den Mieter umgelegt werden. Reparaturen, Verwaltungskosten oder Rücklagen für Instandhaltungen sind grundsätzlich vom Eigentümer zu tragen.",
    sectionNebenkostenP3:
      "Eine nachvollziehbare Nebenkostenabrechnung schafft Transparenz und trägt zu einem vertrauensvollen Mietverhältnis bei.",
    sectionMietrendite: "Mietrendite",
    sectionMietrenditeP1:
      "Für Eigentümer und Kapitalanleger ist die Mietrendite eine wichtige Kennzahl. Sie gibt Aufschluss darüber, wie sich die jährlichen Mieteinnahmen im Verhältnis zum eingesetzten Kapital entwickeln.",
    sectionMietrenditeP2:
      "Bei der Bewertung einer Immobilie sollte jedoch nicht ausschließlich auf die Rendite geachtet werden. Ebenso wichtig sind die Lage, der Zustand des Gebäudes, mögliche Instandhaltungskosten sowie die langfristige Entwicklung des regionalen Wohnungsmarktes.",
    sectionMietrenditeP3:
      "Eine ausgewogene Betrachtung aller Faktoren ermöglicht eine realistische Einschätzung der Wirtschaftlichkeit.",
    sectionMietpreisbremse: "Mietpreisbremse",
    sectionMietpreisbremseP1:
      "In vielen Städten und Regionen Deutschlands gelten Regelungen zur Mietpreisbremse. Sie sollen verhindern, dass die Mieten bei einer Neuvermietung übermäßig ansteigen.",
    sectionMietpreisbremseP2:
      "Unter bestimmten Voraussetzungen darf die vereinbarte Miete die ortsübliche Vergleichsmiete nur in begrenztem Umfang überschreiten. Für Neubauten oder umfassend modernisierte Wohnungen gelten teilweise besondere Regelungen.",
    sectionMietpreisbremseP3:
      "Vor einer Neuvermietung empfiehlt es sich daher, die jeweils geltenden Bestimmungen sorgfältig zu prüfen.",
    sectionMieterhoehung: "Mieterhöhung",
    sectionMieterhoehungP1:
      "Auch während eines bestehenden Mietverhältnisses können unter bestimmten Voraussetzungen Mieterhöhungen vorgenommen werden. Eine Anpassung kann beispielsweise aufgrund der ortsüblichen Vergleichsmiete, durch eine vereinbarte Staffelmiete, über eine Indexmiete oder nach bestimmten Modernisierungsmaßnahmen erfolgen.",
    sectionMieterhoehungP2:
      "Dabei müssen gesetzliche Fristen und Obergrenzen eingehalten werden. Eine sorgfältige Vorgehensweise hilft, Konflikte mit Mietern zu vermeiden.",
    sectionLeerstand: "Leerstand",
    sectionLeerstandP1:
      "Ein längerer Leerstand gehört zu den größten wirtschaftlichen Risiken bei vermieteten Immobilien. Während dieser Zeit entstehen weiterhin laufende Kosten, ohne dass entsprechende Mieteinnahmen erzielt werden.",
    sectionLeerstandP2:
      "Häufige Ursachen für Leerstände sind eine zu hoch angesetzte Miete, ein unzureichender Zustand der Immobilie, fehlende Modernisierungen oder eine schwache Nachfrage am Standort.",
    sectionLeerstandP3:
      "Eine marktgerechte Vermietung und ein gepflegter Zustand der Immobilie erhöhen die Chancen auf eine schnelle Wiedervermietung.",
    sectionMieterauswahl: "Auswahl geeigneter Mieter",
    sectionMieterauswahlP1:
      "Die Auswahl eines passenden Mieters ist für den langfristigen Erfolg einer Vermietung von großer Bedeutung. Neben einem persönlichen Eindruck sollten auch objektive Kriterien berücksichtigt werden.",
    sectionMieterauswahlP2:
      "Dazu zählen unter anderem Einkommensnachweise, eine Schufa-Auskunft, eine Selbstauskunft sowie gegebenenfalls Nachweise über frühere Mietverhältnisse.",
    sectionMieterauswahlP3:
      "Eine sorgfältige Prüfung kann helfen, Mietausfälle und spätere Schwierigkeiten zu vermeiden.",
    sectionRechtePflichten: "Rechte und Pflichten von Vermietern",
    sectionRechtePflichtenP1:
      "Vermieter sind verpflichtet, die Wohnung in einem vertragsgemäßen Zustand bereitzustellen und notwendige Instandhaltungsmaßnahmen durchzuführen. Ebenso müssen sie eine ordnungsgemäße Nebenkostenabrechnung erstellen und die gesetzlichen Vorschriften beachten.",
    sectionRechtePflichtenP2:
      "Gleichzeitig haben Vermieter Anspruch auf die vereinbarte Miete und können unter bestimmten Voraussetzungen Mieterhöhungen oder Kündigungen aussprechen.",
    sectionRechtePflichtenP3:
      "Ein ausgewogenes Verhältnis zwischen Rechten und Pflichten bildet die Grundlage für ein dauerhaft funktionierendes Mietverhältnis.",
    fazitTitle: "Fazit",
    fazitP1:
      "Eine erfolgreiche Vermietung erfordert mehr als die Festlegung einer angemessenen Miete. Ein rechtssicherer Mietvertrag, eine korrekte Nebenkostenabrechnung, die Auswahl geeigneter Mieter und die Einhaltung gesetzlicher Vorgaben tragen wesentlich dazu bei, langfristig stabile Mieteinnahmen zu erzielen.",
    fazitP2:
      "Wer seine Immobilie sorgfältig verwaltet und wirtschaftliche sowie rechtliche Aspekte gleichermaßen berücksichtigt, schafft gute Voraussetzungen für eine nachhaltige und erfolgreiche Vermietung.",
    infoLabel: "Einordnung",
    infoHeadline: "Vermietung ganzheitlich betrachten",
    infoP1:
      "Eine Immobilie sollte nicht ausschließlich anhand der aktuellen Miete beurteilt werden. Faktoren wie Mietrendite, nicht umlagefähige Kosten, Leerstandsrisiken, Instandhaltungsbedarf und die langfristige Entwicklung des Standorts beeinflussen die Wirtschaftlichkeit erheblich.",
    infoP2:
      "immowap betrachtet Immobilien nicht isoliert, sondern orientiert sich an den individuellen Zielen und Rahmenbedingungen der Eigentümer und Investoren.",
    ctaLabel: "Vermietung",
    ctaHeadline: "Fundierte Entscheidungen beginnen mit Klarheit.",
    ctaText:
      "Strukturierte Analysen helfen dabei, Chancen und Risiken besser einzuordnen und Immobilien langfristig erfolgreich zu bewirtschaften.",
  },
  en: {
    metaTitle: "Renting Out Property Successfully | immowap",
    metaDescription:
      "Fundamentals for landlords and investors: tenancy agreement, service charges, rental yield, rent cap, rent increases, vacancy and selecting suitable tenants.",
    breadcrumbTitle: "Renting Out Property",
    heroImageAlt:
      "Renting out property successfully — multi-family house as buy-to-let investment",
    heroLabel: "Knowledge · Property Knowledge",
    heroHeadline: "Renting Out Property Successfully",
    heroSubheadline:
      "Successful letting is not only about the rent level. Tenancy agreement, yield, vacancy risks and selecting suitable tenants play an important role in long-term stable returns.",
    articleTitle:
      "Renting Out Property Successfully – What Landlords Should Consider",
    readMinutes: 8,
    introP1:
      "Letting a property represents a long-term source of income for many owners and can make an important contribution to wealth accumulation. For a tenancy to succeed in the long term, however, various economic and legal aspects must be considered. Good preparation helps reduce risks and manage the property sustainably and profitably.",
    sectionMietvertrag: "Tenancy agreement",
    sectionMietvertragP1:
      "The tenancy agreement governs the rights and obligations of landlord and tenant and forms the basis for an orderly tenancy. It sets out among other things the rent level, service charges, deposit, notice periods and further arrangements.",
    sectionMietvertragP2:
      "A clearly worded and legally secure contract creates clarity for both sides and can avoid later disputes. Particular care should be taken with contract design where special arrangements apply.",
    sectionNebenkosten: "Service charges",
    sectionNebenkostenP1:
      "In addition to the rent itself, service charges play an important role. Allocatable costs include for example heating costs, water supply, waste disposal, insurance or caretaker costs.",
    sectionNebenkostenP2:
      "Not all expenses may be passed on to the tenant. Repairs, administration costs or reserves for maintenance are generally borne by the owner.",
    sectionNebenkostenP3:
      "A transparent service charge statement creates clarity and contributes to a trusting tenancy.",
    sectionMietrendite: "Rental yield",
    sectionMietrenditeP1:
      "For owners and buy-to-let investors, rental yield is an important metric. It shows how annual rental income develops in relation to capital invested.",
    sectionMietrenditeP2:
      "When assessing a property, however, yield should not be the sole focus. Location, building condition, possible maintenance costs and long-term development of the regional housing market are equally important.",
    sectionMietrenditeP3:
      "A balanced assessment of all factors enables a realistic evaluation of economic viability.",
    sectionMietpreisbremse: "Rent cap",
    sectionMietpreisbremseP1:
      "In many cities and regions of Germany, rent cap regulations apply. They are intended to prevent rents from rising excessively when re-letting.",
    sectionMietpreisbremseP2:
      "Under certain conditions, the agreed rent may exceed the local comparative rent only to a limited extent. Special rules partly apply for new builds or comprehensively modernised apartments.",
    sectionMietpreisbremseP3:
      "Before re-letting, it is therefore advisable to review the applicable provisions carefully.",
    sectionMieterhoehung: "Rent increase",
    sectionMieterhoehungP1:
      "Even during an existing tenancy, rent increases may be made under certain conditions. An adjustment can for example be based on the local comparative rent, through an agreed stepped rent, via index-linked rent or after certain modernisation measures.",
    sectionMieterhoehungP2:
      "Statutory notice periods and upper limits must be observed. A careful approach helps avoid conflicts with tenants.",
    sectionLeerstand: "Vacancy",
    sectionLeerstandP1:
      "Longer vacancy is one of the greatest economic risks with rented properties. During this time, ongoing costs continue to arise without corresponding rental income being generated.",
    sectionLeerstandP2:
      "Common causes of vacancy include rent set too high, inadequate property condition, lack of modernisation or weak demand at the location.",
    sectionLeerstandP3:
      "Market-appropriate letting and a well-maintained property increase the chances of quick re-letting.",
    sectionMieterauswahl: "Selecting suitable tenants",
    sectionMieterauswahlP1:
      "Selecting a suitable tenant is of great importance for the long-term success of a letting. In addition to a personal impression, objective criteria should also be considered.",
    sectionMieterauswahlP2:
      "These include among others proof of income, a Schufa credit report, a self-declaration and where applicable references from previous tenancies.",
    sectionMieterauswahlP3:
      "Careful review can help avoid rent defaults and later difficulties.",
    sectionRechtePflichten: "Rights and obligations of landlords",
    sectionRechtePflichtenP1:
      "Landlords are obliged to provide the apartment in a condition consistent with the contract and to carry out necessary maintenance measures. They must also prepare a proper service charge statement and observe statutory provisions.",
    sectionRechtePflichtenP2:
      "At the same time, landlords are entitled to the agreed rent and may, under certain conditions, increase rent or give notice.",
    sectionRechtePflichtenP3:
      "A balanced relationship between rights and obligations forms the basis for a tenancy that functions in the long term.",
    fazitTitle: "Conclusion",
    fazitP1:
      "Successful letting requires more than setting an appropriate rent. A legally secure tenancy agreement, correct service charge accounting, selecting suitable tenants and complying with statutory requirements contribute significantly to achieving stable rental income in the long term.",
    fazitP2:
      "Anyone who manages their property carefully and considers economic and legal aspects equally creates good conditions for sustainable and successful letting.",
    infoLabel: "Context",
    infoHeadline: "Considering letting holistically",
    infoP1:
      "A property should not be assessed solely on the basis of current rent. Factors such as rental yield, non-allocatable costs, vacancy risks, maintenance needs and long-term development of the location have a considerable influence on economic viability.",
    infoP2:
      "immowap does not consider properties in isolation, but aligns with the individual goals and circumstances of owners and investors.",
    ctaLabel: "Renting Out Property",
    ctaHeadline: "Well-founded decisions begin with clarity.",
    ctaText:
      "Structured analyses help to better assess opportunities and risks and manage properties successfully in the long term.",
  },
} as const;

export function VermietungPage({ locale }: VermietungPageProps) {
  const c = vermietungCopy[locale];

  return (
    <ArticleLayout
      locale={locale}
      breadcrumbTitle={c.breadcrumbTitle}
      heroLabel={c.heroLabel}
      heroHeadline={c.heroHeadline}
      heroSubheadline={c.heroSubheadline}
      articleTitle={c.articleTitle}
      readMinutes={c.readMinutes}
      introduction={<ArticleP>{c.introP1}</ArticleP>}
      backLinkHref={propertyKnowledgeOverview[locale].href}
      relatedExcludeId="vermietung"
      afterArticle={
        <Section variant="muted" className="py-24 md:py-32">
          <div className="mx-auto max-w-[850px] text-center">
            <p className="text-label mb-6 block text-gold-600">{c.infoLabel}</p>
            <h2 className="text-h2 text-brand-800">{c.infoHeadline}</h2>
            <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-[1.8] text-muted">
              {c.infoP1}
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.8] text-muted">
              {c.infoP2}
            </p>
          </div>
        </Section>
      }
    >
      <ArticleH2 id="mietvertrag">{c.sectionMietvertrag}</ArticleH2>
      <ArticleP>{c.sectionMietvertragP1}</ArticleP>
      <ArticleP>{c.sectionMietvertragP2}</ArticleP>

      <ArticleH2 id="nebenkosten">{c.sectionNebenkosten}</ArticleH2>
      <ArticleP>{c.sectionNebenkostenP1}</ArticleP>
      <ArticleP>{c.sectionNebenkostenP2}</ArticleP>
      <ArticleP>{c.sectionNebenkostenP3}</ArticleP>

      <ArticleH2 id="mietrendite">{c.sectionMietrendite}</ArticleH2>
      <ArticleP>{c.sectionMietrenditeP1}</ArticleP>
      <ArticleP>{c.sectionMietrenditeP2}</ArticleP>
      <ArticleP>{c.sectionMietrenditeP3}</ArticleP>

      <ArticleH2 id="mietpreisbremse">{c.sectionMietpreisbremse}</ArticleH2>
      <ArticleP>{c.sectionMietpreisbremseP1}</ArticleP>
      <ArticleP>{c.sectionMietpreisbremseP2}</ArticleP>
      <ArticleP>{c.sectionMietpreisbremseP3}</ArticleP>

      <ArticleH2 id="mieterhoehung">{c.sectionMieterhoehung}</ArticleH2>
      <ArticleP>{c.sectionMieterhoehungP1}</ArticleP>
      <ArticleP>{c.sectionMieterhoehungP2}</ArticleP>

      <ArticleH2 id="leerstand">{c.sectionLeerstand}</ArticleH2>
      <ArticleP>{c.sectionLeerstandP1}</ArticleP>
      <ArticleP>{c.sectionLeerstandP2}</ArticleP>
      <ArticleP>{c.sectionLeerstandP3}</ArticleP>

      <ArticleH2 id="mieterauswahl">{c.sectionMieterauswahl}</ArticleH2>
      <ArticleP>{c.sectionMieterauswahlP1}</ArticleP>
      <ArticleP>{c.sectionMieterauswahlP2}</ArticleP>
      <ArticleP>{c.sectionMieterauswahlP3}</ArticleP>

      <ArticleH2 id="rechte-pflichten">{c.sectionRechtePflichten}</ArticleH2>
      <ArticleP>{c.sectionRechtePflichtenP1}</ArticleP>
      <ArticleP>{c.sectionRechtePflichtenP2}</ArticleP>
      <ArticleP>{c.sectionRechtePflichtenP3}</ArticleP>

      <ArticleH2 id="fazit">{c.fazitTitle}</ArticleH2>
      <ArticleP>{c.fazitP1}</ArticleP>
      <ArticleP>{c.fazitP2}</ArticleP>
    </ArticleLayout>
  );
}
