import Image from "next/image";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import {
  propertyKnowledgeOverview,
  propertyKnowledgeUi,
} from "@/lib/i18n/property-knowledge";
import {
  ArticleH2,
  ArticleH3,
  ArticleMetaRow,
  ArticleP,
  CategoryBadge,
  PropertyKnowledgeBackLink,
  PropertyKnowledgeBreadcrumb,
  PropertyKnowledgePageButtons,
} from "@/components/property-knowledge/ArticleUi";

const IMAGE_BASE = "/images/wissen/eigentumswohnung-weg";
const HERO_IMAGE = "/images/knowledge/eigentumswohnung-weg.jpg";

const copy = {
  de: {
    breadcrumbTitle: "Eigentumswohnung & WEG",
    readMinutes: 8,
    hero: {
      title: "Eigentumswohnung & WEG",
      intro:
        "Eigentumswohnungen und die Wohnungseigentümergemeinschaft besser verstehen.",
      imageAlt: "Eigentumswohnung und WEG – Wohngebäude in Deutschland",
    },
    introSection: {
      label: "Einordnung",
      heading: "Mehr als nur die eigenen vier Wände",
      p1: "Beim Kauf einer Eigentumswohnung erwirbt man nicht nur Wohnraum, sondern wird Teil einer Wohnungseigentümergemeinschaft. Damit entstehen Rechte und Verpflichtungen, die beim Erwerb eines Einfamilienhauses nicht in gleicher Form bestehen.",
      p2: "Hausgeld, Rücklagen, Sonderumlagen und gemeinschaftliche Entscheidungen prägen die langfristige Wirtschaftlichkeit einer Wohnung. Wer die WEG versteht, kann Kosten und Verantwortungen frühzeitig realistisch einschätzen.",
      imageAlt: "Helle Eigentumswohnung mit Blick auf europäische Wohnarchitektur",
    },
    article: {
      headerTitle: "Eigentumswohnung & WEG",
      headerSubtitle:
        "Eigentumswohnungen und die Wohnungseigentümergemeinschaft verstehen",
      p1: "Der Kauf einer Eigentumswohnung unterscheidet sich in vielen Punkten vom Erwerb eines Einfamilienhauses. Wer eine Wohnung kauft, erwirbt nicht nur die eigenen vier Wände, sondern wird gleichzeitig Teil einer Wohnungseigentümergemeinschaft (WEG). Damit entstehen Rechte, aber auch Verpflichtungen gegenüber den anderen Eigentümern.",
      p2: "Um spätere Überraschungen zu vermeiden, sollten Käufer die wichtigsten Begriffe und Zusammenhänge kennen.",
      sections: {
        weg: {
          heading: "Was bedeutet Wohnungseigentümergemeinschaft (WEG)?",
          p1: "Alle Eigentümer eines Mehrfamilienhauses bilden gemeinsam die Wohnungseigentümergemeinschaft. Sie verwalten das Gebäude gemeinschaftlich und treffen Entscheidungen über Instandhaltung, Modernisierungen oder die Verwendung gemeinsamer Rücklagen.",
          p2: "Viele Themen können daher nicht allein entschieden werden. Zahlreiche Maßnahmen müssen durch Mehrheitsbeschlüsse der Eigentümergemeinschaft beschlossen werden.",
        },
        hausgeld: {
          heading: "Hausgeld – laufende Kosten einer Eigentumswohnung",
          p1: "Neben der monatlichen Darlehensrate fällt bei einer Eigentumswohnung das sogenannte Hausgeld an. Dieses wird an die Hausverwaltung gezahlt und dient dazu, die laufenden Kosten des Gebäudes zu decken.",
          p2: "Zum Hausgeld gehören unter anderem Kosten für die Hausverwaltung, Gebäudeversicherung, Reinigung des Treppenhauses, Gartenpflege, Müllentsorgung, Allgemeinstrom sowie Heiz- und Wasserkosten – je nach Abrechnungsmodell. Beiträge zur Instandhaltungsrücklage sind ebenfalls enthalten.",
          p3: "Ein Teil der Kosten kann bei vermieteten Wohnungen auf den Mieter umgelegt werden. Andere Positionen müssen dauerhaft vom Eigentümer getragen werden. Ein besonders niedriges Hausgeld wirkt auf den ersten Blick attraktiv. Entscheidend ist jedoch, ob ausreichend Geld für die zukünftige Instandhaltung des Gebäudes eingeplant wird.",
        },
        ruecklage: {
          heading: "Instandhaltungsrücklage – Vorsorge für zukünftige Reparaturen",
          p1: "Jedes Gebäude benötigt im Laufe der Zeit Reparaturen und Modernisierungen. Deshalb bilden viele Wohnungseigentümergemeinschaften eine Instandhaltungsrücklage. Aus dieser Reserve können Dachsanierungen, Fassadenarbeiten, Heizungserneuerungen, Fensteraustausch, Aufzugmodernisierungen oder Sanierungen von Tiefgarage und Keller finanziert werden.",
          p2: "Eine angemessene Rücklage erhöht die finanzielle Stabilität der Gemeinschaft. Fehlen ausreichende Reserven, können größere Maßnahmen zu zusätzlichen Belastungen für die Eigentümer führen. Beim Kauf einer Eigentumswohnung lohnt sich daher ein Blick auf die Höhe der vorhandenen Rücklagen und die geplanten Maßnahmen der nächsten Jahre.",
        },
        sonderumlagen: {
          heading: "Sonderumlagen – wenn zusätzliche Zahlungen erforderlich werden",
          p1: "Nicht immer reichen die vorhandenen Rücklagen aus. Stehen größere Sanierungen an oder treten unerwartete Schäden auf, kann die Eigentümergemeinschaft eine Sonderumlage beschließen. Dabei müssen die Eigentümer zusätzliche Beträge leisten, die je nach Miteigentumsanteil unterschiedlich hoch ausfallen können.",
          p2: "Sonderumlagen entstehen häufig bei Dach- und Fassadensanierungen, Heizungserneuerungen, Feuchtigkeitsschäden, Aufzugmodernisierungen oder Brandschutzmaßnahmen. Vor dem Kauf sollten deshalb die Protokolle der Eigentümerversammlungen sorgfältig geprüft werden. Dort finden sich häufig Hinweise auf geplante Investitionen oder bereits diskutierte Sanierungen.",
        },
        eigentum: {
          heading: "Gemeinschaftseigentum und Sondereigentum",
          p1: "Ein wichtiger Bestandteil des Wohnungseigentumsrechts ist die Unterscheidung zwischen Gemeinschaftseigentum und Sondereigentum.",
          gemeinschaftHeading: "Gemeinschaftseigentum",
          gemeinschaftP:
            "Zum Gemeinschaftseigentum gehören alle Bereiche, die mehreren Eigentümern gemeinsam dienen – etwa Dach, Fassade, Treppenhaus, Aufzug, Kellerbereiche, Heizungsanlage und Außenanlagen. Für Instandhaltung und Reparaturen ist grundsätzlich die Eigentümergemeinschaft verantwortlich.",
          sondereigentumHeading: "Sondereigentum",
          sondereigentumP:
            "Das Sondereigentum umfasst dagegen die Bereiche, die ausschließlich dem jeweiligen Wohnungseigentümer gehören, etwa Wohnräume, Bodenbeläge, Innentüren, Tapeten, Sanitäranlagen und Einbauküchen. Der Eigentümer entscheidet innerhalb seines Sondereigentums grundsätzlich selbst über Renovierungen und Modernisierungen.",
          p2: "Die genaue Abgrenzung ergibt sich aus der Teilungserklärung und sollte vor dem Kauf sorgfältig geprüft werden.",
        },
        hausverwaltung: {
          heading: "Die Aufgaben der Hausverwaltung",
          p1: "In vielen Wohnungseigentümergemeinschaften übernimmt eine professionelle Hausverwaltung die organisatorischen und kaufmännischen Aufgaben. Dazu gehören die Erstellung des Wirtschaftsplans, Verwaltung der Rücklagen, Organisation von Reparaturen, Durchführung der Eigentümerversammlungen, Umsetzung gefasster Beschlüsse, Erstellung der Hausgeldabrechnung sowie die Kommunikation mit Dienstleistern und Eigentümern.",
          p2: "Eine gut organisierte Hausverwaltung kann wesentlich zum Werterhalt der Immobilie beitragen. Gleichzeitig lohnt sich ein Blick auf die Qualität der Verwaltung, da diese einen erheblichen Einfluss auf die langfristige Entwicklung des Gebäudes hat.",
        },
        beschluesse: {
          heading: "Beschlüsse der Eigentümerversammlung",
          p1: "Mindestens einmal jährlich findet in der Regel eine Eigentümerversammlung statt. Dort werden wichtige Entscheidungen für das Gebäude getroffen – etwa zur Genehmigung des Wirtschaftsplans, Festlegung des Hausgeldes, Durchführung von Sanierungen, Bildung oder Verwendung von Rücklagen, Bestellung der Hausverwaltung, Modernisierungsmaßnahmen und Sonderumlagen.",
          p2: "Die gefassten Beschlüsse sind für alle Eigentümer verbindlich. Deshalb sollten Kaufinteressenten die Protokolle vergangener Eigentümerversammlungen genau prüfen. Sie geben oft wertvolle Hinweise auf bestehende Konflikte, anstehende Investitionen oder den allgemeinen Zustand der Gemeinschaft.",
        },
        unterlagen: {
          heading: "Warum die Unterlagen einer WEG besonders wichtig sind",
          p1: "Beim Kauf einer Eigentumswohnung reicht die Besichtigung allein nicht aus. Ebenso wichtig sind die Unterlagen der Wohnungseigentümergemeinschaft – insbesondere Teilungserklärung, Wirtschaftsplan, Hausgeldabrechnungen, Protokolle der Eigentümerversammlungen, Nachweis der Instandhaltungsrücklage, Angaben zu geplanten Sanierungen sowie Informationen zur Hausverwaltung.",
          p2: "Diese Dokumente ermöglichen eine deutlich bessere Einschätzung der finanziellen Situation und möglicher zukünftiger Kosten.",
        },
        fazit: {
          heading: "Fazit",
          p1: "Eine Eigentumswohnung bietet viele Vorteile und stellt sowohl für Eigennutzer als auch für Kapitalanleger eine interessante Option dar. Gleichzeitig sollten Käufer berücksichtigen, dass sie Teil einer Gemeinschaft werden und bestimmte Entscheidungen gemeinsam getroffen werden.",
          p2: "Nicht nur der Kaufpreis entscheidet über die Wirtschaftlichkeit einer Wohnung. Hausgeld, Rücklagen, mögliche Sonderumlagen sowie die Qualität der Verwaltung und die Beschlüsse der Eigentümergemeinschaft können langfristig einen erheblichen Einfluss auf Kosten und Wertentwicklung haben.",
          p3: "Wer die Unterlagen der WEG sorgfältig analysiert und mögliche Risiken frühzeitig erkennt, schafft eine deutlich bessere Grundlage für eine langfristig erfolgreiche Immobilienentscheidung.",
        },
      },
    },
    topicCards: {
      label: "Grundbegriffe",
      heading: "Die wichtigsten Themen im Überblick",
      cards: [
        {
          title: "Hausgeld",
          description:
            "Monatliche Beiträge für Verwaltung, Versicherung, Instandhaltung und Rücklagen – ein zentraler Kostenfaktor jeder Eigentumswohnung.",
        },
        {
          title: "Instandhaltungsrücklage",
          description:
            "Gemeinsame Reserve für Dach, Fassade, Heizung und größere Sanierungen. Ihre Höhe sagt viel über die finanzielle Stabilität der WEG aus.",
        },
        {
          title: "Sonderumlagen",
          description:
            "Zusätzliche Zahlungen, wenn Rücklagen für anstehende Maßnahmen nicht ausreichen – häufig ein Indikator für kommende Belastungen.",
        },
        {
          title: "Gemeinschaftseigentum",
          description:
            "Dach, Fassade, Treppenhaus und technische Anlagen gehören allen Eigentümern gemeinsam und werden gemeinschaftlich finanziert.",
        },
        {
          title: "Sondereigentum",
          description:
            "Wohnräume und ausgewählte Einbauten im Inneren der Wohnung – hier trifft der Eigentümer in der Regel eigenständige Entscheidungen.",
        },
        {
          title: "Hausverwaltung",
          description:
            "Organisiert Wirtschaftsplan, Abrechnungen, Versammlungen und die Umsetzung von Beschlüssen – oft entscheidend für den Werterhalt.",
        },
      ],
    },
    insightCards: {
      label: "Praxis",
      heading: "Worauf Käufer besonders achten sollten",
      cards: [
        {
          icon: "document" as const,
          title: "Teilungserklärung",
          description:
            "Regelt die Abgrenzung zwischen Gemeinschafts- und Sondereigentum sowie Nutzungsrechte und Kostenverteilung.",
        },
        {
          icon: "receipt" as const,
          title: "Hausgeldabrechnungen",
          description:
            "Zeigen die tatsächlichen laufenden Kosten und geben Hinweise auf die wirtschaftliche Lage der Gemeinschaft.",
        },
        {
          icon: "chat" as const,
          title: "Protokolle der Eigentümerversammlungen",
          description:
            "Enthalten Beschlüsse zu Sanierungen, Sonderumlagen, Konflikten und geplanten Investitionen.",
        },
        {
          icon: "bank" as const,
          title: "Höhe der Rücklagen",
          description:
            "Eine ausreichende Instandhaltungsrücklage reduziert das Risiko unerwarteter Sonderzahlungen.",
        },
      ],
    },
    immowapSection: {
      label: "immowap",
      heading: "Fundierte Entscheidungen beginnen mit Klarheit.",
      p1: "Beim Kauf einer Eigentumswohnung spielen nicht nur Lage und Kaufpreis eine Rolle. Ebenso wichtig sind die finanzielle Situation der Wohnungseigentümergemeinschaft, bestehende Rücklagen, mögliche Sonderumlagen und die Qualität der Verwaltung.",
      p2: "immowap betrachtet Immobilien nicht isoliert, sondern analysiert Objekte entsprechend der individuellen Ziele und Rahmenbedingungen. Dadurch können Chancen und Risiken besser eingeordnet und Entscheidungen fundierter getroffen werden.",
    },
    bottomCta: {
      label: "Eigentumswohnung & WEG",
      heading: "Mehr Transparenz für bessere Entscheidungen.",
      text: "Strukturierte Analysen helfen dabei, Chancen und Risiken frühzeitig zu erkennen.",
    },
  },
  en: {
    breadcrumbTitle: "Condominiums & Homeowners Associations",
    readMinutes: 8,
    hero: {
      title: "Condominiums & Homeowners Associations",
      intro:
        "Understanding condominiums and homeowners associations more clearly.",
      imageAlt: "Condominium and homeowners association – residential building in Germany",
    },
    introSection: {
      label: "Context",
      heading: "More than just your own four walls",
      p1: "When buying a condominium, you acquire not only living space but also become part of a homeowners association. This creates rights and obligations that do not exist in the same form when buying a detached house.",
      p2: "Service charges, reserves, special assessments and communal decisions shape the long-term affordability of a unit. Understanding the homeowners association helps assess costs and responsibilities realistically at an early stage.",
      imageAlt: "Bright condominium with a view of European residential architecture",
    },
    article: {
      headerTitle: "Condominiums & Homeowners Associations",
      headerSubtitle: "Understanding condominiums and homeowners associations",
      p1: "Buying a condominium differs in many respects from acquiring a detached house. When you buy a unit, you acquire not only your own four walls but simultaneously become part of a homeowners association (WEG). This creates rights but also obligations towards the other owners.",
      p2: "To avoid surprises later on, buyers should know the most important terms and connections.",
      sections: {
        weg: {
          heading: "What does a homeowners association (WEG) mean?",
          p1: "All owners of a multi-family building together form the homeowners association. They manage the building jointly and make decisions on maintenance, modernisation or the use of shared reserves.",
          p2: "Many matters therefore cannot be decided individually. Numerous measures must be approved by majority resolutions of the owners' association.",
        },
        hausgeld: {
          heading: "Service charges – ongoing costs of a condominium",
          p1: "In addition to the monthly loan payment, condominium owners pay so-called service charges (Hausgeld). These are paid to the property management and serve to cover the building's ongoing costs.",
          p2: "Service charges include, among other things, costs for property management, building insurance, stairwell cleaning, garden maintenance, waste disposal, general electricity and heating and water costs – depending on the billing model. Contributions to the maintenance reserve are also included.",
          p3: "Part of the costs can be passed on to tenants for rented units. Other items must be borne permanently by the owner. Particularly low service charges may seem attractive at first glance. What matters, however, is whether sufficient funds are planned for future building maintenance.",
        },
        ruecklage: {
          heading: "Maintenance reserve – provision for future repairs",
          p1: "Every building requires repairs and modernisation over time. That is why many homeowners associations build up a maintenance reserve. From this reserve, roof renovations, façade work, heating upgrades, window replacement, lift modernisation or refurbishment of underground car parks and cellars can be financed.",
          p2: "An adequate reserve increases the financial stability of the community. If reserves are insufficient, larger measures can lead to additional burdens for owners. When buying a condominium, it is therefore worth checking the level of existing reserves and planned measures for the coming years.",
        },
        sonderumlagen: {
          heading: "Special assessments – when additional payments are required",
          p1: "Existing reserves are not always sufficient. When major renovations are due or unexpected damage occurs, the owners' association may approve a special assessment. Owners must then pay additional amounts, which can vary depending on their co-ownership share.",
          p2: "Special assessments often arise for roof and façade renovations, heating upgrades, moisture damage, lift modernisation or fire protection measures. Before purchase, the minutes of owners' meetings should therefore be reviewed carefully. They often contain indications of planned investments or renovations already under discussion.",
        },
        eigentum: {
          heading: "Common property and special property",
          p1: "An important part of condominium law is the distinction between common property and special property.",
          gemeinschaftHeading: "Common property",
          gemeinschaftP:
            "Common property includes all areas that serve several owners jointly – such as the roof, façade, stairwell, lift, cellar areas, heating system and outdoor facilities. The owners' association is generally responsible for maintenance and repairs.",
          sondereigentumHeading: "Special property",
          sondereigentumP:
            "Special property, by contrast, comprises the areas that belong exclusively to the respective unit owner, such as living rooms, flooring, interior doors, wallpaper, sanitary installations and fitted kitchens. Within their special property, the owner generally decides independently on renovations and modernisation.",
          p2: "The precise demarcation follows from the declaration of division and should be reviewed carefully before purchase.",
        },
        hausverwaltung: {
          heading: "The tasks of property management",
          p1: "In many homeowners associations, professional property management handles organisational and commercial tasks. These include preparing the budget plan, managing reserves, organising repairs, holding owners' meetings, implementing resolutions, preparing service charge statements and communicating with service providers and owners.",
          p2: "Well-organised property management can contribute significantly to preserving the value of the property. It is also worth assessing the quality of management, as it has a considerable influence on the building's long-term development.",
        },
        beschluesse: {
          heading: "Resolutions of the owners' meeting",
          p1: "As a rule, an owners' meeting takes place at least once a year. Important decisions for the building are made there – such as approval of the budget plan, setting service charges, carrying out renovations, forming or using reserves, appointing property management, modernisation measures and special assessments.",
          p2: "The resolutions passed are binding for all owners. Prospective buyers should therefore examine the minutes of past owners' meetings closely. They often provide valuable indications of existing conflicts, upcoming investments or the general condition of the community.",
        },
        unterlagen: {
          heading: "Why the documents of a WEG are particularly important",
          p1: "When buying a condominium, a viewing alone is not enough. Equally important are the documents of the homeowners association – in particular the declaration of division, budget plan, service charge statements, owners' meeting minutes, proof of the maintenance reserve, information on planned renovations and details of property management.",
          p2: "These documents enable a much better assessment of the financial situation and possible future costs.",
        },
        fazit: {
          heading: "Conclusion",
          p1: "A condominium offers many advantages and is an interesting option for both owner-occupiers and investors. At the same time, buyers should bear in mind that they become part of a community and that certain decisions are made jointly.",
          p2: "Not only the purchase price determines the affordability of a unit. Service charges, reserves, possible special assessments as well as the quality of management and the resolutions of the owners' association can have a significant long-term impact on costs and value development.",
          p3: "Those who analyse the WEG documents carefully and identify potential risks early create a much better foundation for a successful long-term property decision.",
        },
      },
    },
    topicCards: {
      label: "Key terms",
      heading: "The most important topics at a glance",
      cards: [
        {
          title: "Service charges",
          description:
            "Monthly contributions for management, insurance, maintenance and reserves – a central cost factor for every condominium.",
        },
        {
          title: "Maintenance reserve",
          description:
            "Shared reserve for roof, façade, heating and major renovations. Its level says a lot about the financial stability of the WEG.",
        },
        {
          title: "Special assessments",
          description:
            "Additional payments when reserves are insufficient for upcoming measures – often an indicator of future burdens.",
        },
        {
          title: "Common property",
          description:
            "Roof, façade, stairwell and technical systems belong jointly to all owners and are financed communally.",
        },
        {
          title: "Special property",
          description:
            "Living spaces and selected fittings inside the unit – here the owner generally makes independent decisions.",
        },
        {
          title: "Property management",
          description:
            "Organises budget plans, statements, meetings and implementation of resolutions – often decisive for preserving value.",
        },
      ],
    },
    insightCards: {
      label: "Practice",
      heading: "What buyers should pay particular attention to",
      cards: [
        {
          icon: "document" as const,
          title: "Declaration of division",
          description:
            "Governs the demarcation between common and special property as well as usage rights and cost allocation.",
        },
        {
          icon: "receipt" as const,
          title: "Service charge statements",
          description:
            "Show actual ongoing costs and provide indications of the community's financial situation.",
        },
        {
          icon: "chat" as const,
          title: "Owners' meeting minutes",
          description:
            "Contain resolutions on renovations, special assessments, conflicts and planned investments.",
        },
        {
          icon: "bank" as const,
          title: "Level of reserves",
          description:
            "An adequate maintenance reserve reduces the risk of unexpected special payments.",
        },
      ],
    },
    immowapSection: {
      label: "immowap",
      heading: "Well-informed decisions start with clarity.",
      p1: "When buying a condominium, location and purchase price are not the only factors. Equally important are the financial situation of the homeowners association, existing reserves, possible special assessments and the quality of management.",
      p2: "immowap does not view properties in isolation but analyses them according to individual goals and circumstances. This enables opportunities and risks to be assessed more clearly and decisions to be made on a more informed basis.",
    },
    bottomCta: {
      label: "Condominiums & Homeowners Associations",
      heading: "More transparency for better decisions.",
      text: "Structured analyses help identify opportunities and risks early on.",
    },
  },
} as const;

function InsightIcon({ name }: { name: string }) {
  const className = "h-5 w-5 text-[#B9965B]";

  if (name === "document") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    );
  }

  if (name === "receipt") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    );
  }

  if (name === "chat") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    );
  }

  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  );
}

interface EigentumswohnungWegPageProps {
  locale: Locale;
}

export function EigentumswohnungWegPage({ locale }: EigentumswohnungWegPageProps) {
  const t = copy[locale];
  const ui = propertyKnowledgeUi[locale];
  const overviewHref = propertyKnowledgeOverview[locale].href;
  const sec = t.article.sections;

  return (
    <>
      <section className="relative min-h-[calc(100svh-5rem)] w-full overflow-hidden">
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src={HERO_IMAGE}
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

      <Section variant="muted" className="py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-label mb-6 block text-gold-600">{t.introSection.label}</p>
            <h2 className="text-h2 text-brand-800">{t.introSection.heading}</h2>
            <div className="gold-rule mt-8" aria-hidden="true" />
            <p className="mt-8 text-lg leading-[1.8] text-muted">{t.introSection.p1}</p>
            <p className="mt-6 text-lg leading-[1.8] text-muted">{t.introSection.p2}</p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[#D7D2C8]/60 shadow-[0_8px_40px_rgba(15,61,46,0.06)]">
            <Image
              src={`${IMAGE_BASE}/intro.jpg`}
              alt={t.introSection.imageAlt}
              width={1400}
              height={1050}
              className="h-auto w-full object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      <div className="bg-[#F7F5EF] py-16 md:py-20">
        <div className="mx-auto max-w-[850px] px-6 md:px-8">
          <PropertyKnowledgeBreadcrumb locale={locale} currentTitle={t.breadcrumbTitle} />

          <header className="mb-10">
            <CategoryBadge locale={locale} />
            <h2 className="text-[1.75rem] font-bold leading-tight tracking-tight text-[#0F3D2E] md:text-[2.125rem]">
              {t.article.headerTitle}
            </h2>
            <p className="mt-4 text-lg leading-[1.8] text-[#1D1D1B]/60">
              {t.article.headerSubtitle}
            </p>
            <div
              aria-hidden="true"
              className="mt-7 h-px w-16 rounded-full bg-[#B9965B]/55"
            />
            <ArticleMetaRow locale={locale} readMinutes={t.readMinutes} />
          </header>

          <article>
            <ArticleP>{t.article.p1}</ArticleP>
            <ArticleP>{t.article.p2}</ArticleP>

            <ArticleH2 id="weg">{sec.weg.heading}</ArticleH2>
            <ArticleP>{sec.weg.p1}</ArticleP>
            <ArticleP>{sec.weg.p2}</ArticleP>

            <ArticleH2 id="hausgeld">{sec.hausgeld.heading}</ArticleH2>
            <ArticleP>{sec.hausgeld.p1}</ArticleP>
            <ArticleP>{sec.hausgeld.p2}</ArticleP>
            <ArticleP>{sec.hausgeld.p3}</ArticleP>

            <ArticleH2 id="ruecklage">{sec.ruecklage.heading}</ArticleH2>
            <ArticleP>{sec.ruecklage.p1}</ArticleP>
            <ArticleP>{sec.ruecklage.p2}</ArticleP>

            <ArticleH2 id="sonderumlagen">{sec.sonderumlagen.heading}</ArticleH2>
            <ArticleP>{sec.sonderumlagen.p1}</ArticleP>
            <ArticleP>{sec.sonderumlagen.p2}</ArticleP>

            <ArticleH2 id="eigentum">{sec.eigentum.heading}</ArticleH2>
            <ArticleP>{sec.eigentum.p1}</ArticleP>

            <ArticleH3>{sec.eigentum.gemeinschaftHeading}</ArticleH3>
            <ArticleP>{sec.eigentum.gemeinschaftP}</ArticleP>

            <ArticleH3>{sec.eigentum.sondereigentumHeading}</ArticleH3>
            <ArticleP>{sec.eigentum.sondereigentumP}</ArticleP>
            <ArticleP>{sec.eigentum.p2}</ArticleP>

            <ArticleH2 id="hausverwaltung">{sec.hausverwaltung.heading}</ArticleH2>
            <ArticleP>{sec.hausverwaltung.p1}</ArticleP>
            <ArticleP>{sec.hausverwaltung.p2}</ArticleP>

            <ArticleH2 id="beschluesse">{sec.beschluesse.heading}</ArticleH2>
            <ArticleP>{sec.beschluesse.p1}</ArticleP>
            <ArticleP>{sec.beschluesse.p2}</ArticleP>

            <ArticleH2 id="unterlagen">{sec.unterlagen.heading}</ArticleH2>
            <ArticleP>{sec.unterlagen.p1}</ArticleP>
            <ArticleP>{sec.unterlagen.p2}</ArticleP>

            <ArticleH2 id="fazit">{sec.fazit.heading}</ArticleH2>
            <ArticleP>{sec.fazit.p1}</ArticleP>
            <ArticleP>{sec.fazit.p2}</ArticleP>
            <ArticleP>{sec.fazit.p3}</ArticleP>
          </article>

          <PropertyKnowledgeBackLink locale={locale} overviewHref={overviewHref} />
        </div>
      </div>

      <Section className="bg-[#F7F5EF] py-16 md:py-24">
        <div className="mx-auto max-w-[850px]">
          <p className="text-label mb-4 block text-gold-600">{t.topicCards.label}</p>
          <h2 className="text-h2 text-brand-800">{t.topicCards.heading}</h2>
          <div className="gold-rule mt-6" aria-hidden="true" />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.topicCards.cards.map((card) => (
              <Card
                key={card.title}
                className="h-full border-[#D7D2C8]/80 bg-white shadow-[0_4px_20px_rgba(15,61,46,0.05)]"
              >
                <CardTitle className="text-lg">{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="muted" className="py-24 md:py-32">
        <div className="mx-auto max-w-[850px]">
          <p className="text-label mb-4 block text-gold-600">{t.insightCards.label}</p>
          <h2 className="text-h2 text-brand-800">{t.insightCards.heading}</h2>
          <div className="gold-rule mt-6" aria-hidden="true" />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {t.insightCards.cards.map((card) => (
              <Card
                key={card.title}
                className="h-full border-[#D7D2C8]/80 bg-white shadow-[0_4px_20px_rgba(15,61,46,0.05)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B9965B]/10">
                  <InsightIcon name={card.icon} />
                </div>
                <CardTitle className="text-lg">{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[#F7F5EF] py-24 md:py-32">
        <div className="mx-auto max-w-[850px] text-center">
          <p className="text-label mb-4 block text-gold-600">{t.immowapSection.label}</p>
          <h2 className="text-h2 text-brand-800">{t.immowapSection.heading}</h2>
          <div className="gold-rule mx-auto mt-6" aria-hidden="true" />
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-[1.8] text-muted">
            {t.immowapSection.p1}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.8] text-muted">
            {t.immowapSection.p2}
          </p>
          <PropertyKnowledgePageButtons locale={locale} className="mt-10 justify-center" />
        </div>
      </Section>

      <section className="bg-[#0F3D2E] py-24 md:py-32">
        <div className="mx-auto max-w-[850px] px-6 text-center md:px-8">
          <p className="text-label mb-6 block text-[#B9965B]">{t.bottomCta.label}</p>
          <h2 className="text-h2 text-white">{t.bottomCta.heading}</h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-8 h-px w-10 rounded-full bg-[#B9965B]/60"
          />
          <p className="mx-auto mt-8 max-w-xl text-lg leading-[1.8] text-white/75">
            {t.bottomCta.text}
          </p>
          <PropertyKnowledgePageButtons locale={locale} onDark className="mt-12 justify-center" />
        </div>
      </section>

      <div className="h-20 bg-cream md:h-[100px]" aria-hidden="true" />
    </>
  );
}
