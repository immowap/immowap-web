import Image from "next/image";
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
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import { propertyKnowledgeOverview, propertyKnowledgeUi } from "@/lib/i18n/property-knowledge";

const HERO_IMAGE = "/images/knowledge/steuern-rund-um-immobilien.jpg";
const READ_MINUTES = 10;

const SECTION_IMAGES = {
  grunderwerbsteuer: "/images/knowledge/steuern/grunderwerbsteuer.jpg",
  spekulationssteuer: "/images/knowledge/steuern/spekulationssteuer.jpg",
  afa: "/images/knowledge/steuern/afa.jpg",
  vermietung: "/images/knowledge/steuern/vermietung.jpg",
  erbschaftsteuer: "/images/knowledge/steuern/erbschaftsteuer.jpg",
  schenkungsteuer: "/images/knowledge/steuern/schenkungsteuer.jpg",
  grundstueckshandel: "/images/knowledge/steuern/grundstueckshandel.jpg",
} as const;

const copy = {
  de: {
    metaTitle: "Steuern rund um Immobilien | immowap",
    metaDescription:
      "Steuerliche Aspekte von Immobilien in Deutschland verständlich erklärt. Informationen zu Grunderwerbsteuer, Spekulationssteuer, AfA, Vermietung, Erbschaftsteuer, Schenkungsteuer und gewerblichem Grundstückshandel.",
    heroImageAlt:
      "Steuern rund um Immobilien – Steuerunterlagen und Finanzplanung",
    heroTitle: "Steuern rund um Immobilien",
    heroSubtitle:
      "Steuerliche Aspekte von Immobilien in Deutschland verständlich erklärt.",
    articleTitle: "Steuern rund um Immobilien",
    articleSubtitle:
      "Steuerliche Aspekte von Immobilien in Deutschland verständlich erklärt",
    intro:
      "Immobilien sind nicht nur eine Form der Vermögensbildung, sondern auch eng mit steuerlichen Fragen verbunden. Bereits beim Kauf einer Immobilie entstehen steuerliche Verpflichtungen, und auch während der Haltedauer oder beim Verkauf spielen unterschiedliche Steuerarten eine wichtige Rolle. Wer die wichtigsten Regelungen kennt, kann Fehlentscheidungen vermeiden und steuerliche Gestaltungsmöglichkeiten besser nutzen.",
    articleSections: [
      {
        id: "grunderwerbsteuer-artikel",
        title: "Grunderwerbsteuer – die Steuer beim Immobilienkauf",
        paragraphs: [
          "Beim Erwerb einer Immobilie fällt in Deutschland grundsätzlich Grunderwerbsteuer an. Sie wird auf den Kaufpreis berechnet und gehört zu den Kaufnebenkosten. Die Höhe richtet sich nach dem Bundesland, in dem sich die Immobilie befindet.",
          "Je nach Bundesland liegt der Steuersatz derzeit zwischen 3,5 und 6,5 Prozent. Die Steuer wird nach Abschluss des Kaufvertrags durch das Finanzamt festgesetzt. Erst nach Zahlung der Grunderwerbsteuer kann die Eigentumsumschreibung im Grundbuch erfolgen.",
          "Da die Grunderwerbsteuer nicht übersehen werden sollte, ist sie bereits bei der Finanzierungsplanung zu berücksichtigen.",
        ],
      },
      {
        id: "spekulationssteuer-artikel",
        title:
          "Spekulationssteuer – wann Gewinne beim Verkauf steuerpflichtig sind",
        paragraphs: [
          "Nicht jeder Immobilienverkauf ist steuerfrei. Werden Immobilien innerhalb bestimmter Fristen verkauft, kann auf den Gewinn Spekulationssteuer anfallen.",
          "Bei vermieteten Immobilien gilt grundsätzlich eine Spekulationsfrist von zehn Jahren. Liegen zwischen Kauf und Verkauf weniger als zehn Jahre, muss der erzielte Gewinn in der Regel versteuert werden.",
          "Für selbst genutzte Immobilien bestehen Ausnahmen. Wurde die Immobilie im Jahr des Verkaufs sowie in den beiden vorangegangenen Kalenderjahren selbst bewohnt, kann der Verkauf auch innerhalb der Zehnjahresfrist steuerfrei sein.",
          "Vor einem geplanten Verkauf sollte daher immer geprüft werden, ob eine Steuerpflicht besteht und welche Auswirkungen sich auf den tatsächlichen Gewinn ergeben.",
        ],
      },
      {
        id: "afa-artikel",
        title: "Abschreibung (AfA) – steuerliche Berücksichtigung von Gebäuden",
        paragraphs: [
          "Bei vermieteten Immobilien können Gebäudekosten über viele Jahre steuerlich abgeschrieben werden. Diese sogenannte Absetzung für Abnutzung (AfA) dient dazu, den Wertverlust eines Gebäudes steuerlich zu berücksichtigen.",
          "Dabei ist zu beachten, dass nicht der gesamte Kaufpreis abgeschrieben werden kann. Der Anteil für das Grundstück bleibt unberücksichtigt, da Grund und Boden keiner Abnutzung unterliegen.",
          "Je nach Baujahr und Art der Immobilie gelten unterschiedliche Abschreibungssätze. Für viele Wohngebäude beträgt die lineare Abschreibung derzeit drei Prozent pro Jahr.",
          "Die AfA kann die steuerliche Belastung erheblich reduzieren und gehört zu den wichtigsten Instrumenten bei Kapitalanlagen.",
        ],
      },
      {
        id: "vermietung-artikel",
        title: "Vermietung und Einkommensteuer",
        paragraphs: [
          "Mieteinnahmen gehören zu den steuerpflichtigen Einkünften und müssen in der Einkommensteuererklärung angegeben werden.",
          "Versteuert wird jedoch nicht die gesamte Mieteinnahme, sondern lediglich der Überschuss aus Einnahmen und Ausgaben. Zu den abziehbaren Kosten zählen unter anderem:",
        ],
        list: [
          "Schuldzinsen aus Darlehen",
          "Abschreibungen (AfA)",
          "Verwaltungskosten",
          "Reparatur- und Instandhaltungskosten",
          "Versicherungen",
          "Nicht umlagefähige Nebenkosten",
          "Kosten für Steuerberater oder Hausverwaltung",
        ],
        afterList: [
          "Gerade bei fremdfinanzierten Immobilien kann die steuerliche Belastung dadurch deutlich geringer ausfallen als häufig angenommen.",
        ],
      },
      {
        id: "erbschaftsteuer-artikel",
        title: "Erbschaftsteuer bei Immobilien",
        paragraphs: [
          "Immobilien gehören zum Vermögen und können im Erbfall der Erbschaftsteuer unterliegen. Ob tatsächlich Steuern anfallen, hängt insbesondere vom Verwandtschaftsgrad und den geltenden Freibeträgen ab.",
          "Zwischen Ehepartnern und Kindern gelten vergleichsweise hohe Freibeträge. Darüber hinaus existieren besondere Regelungen für selbst genutztes Wohneigentum, die unter bestimmten Voraussetzungen eine vollständige Steuerbefreiung ermöglichen können.",
          "Da Immobilien häufig einen erheblichen Vermögenswert darstellen, sollte eine frühzeitige Nachfolgeplanung erfolgen.",
        ],
      },
      {
        id: "schenkungsteuer-artikel",
        title: "Schenkungsteuer – Vermögen zu Lebzeiten übertragen",
        paragraphs: [
          "Die Schenkungsteuer orientiert sich weitgehend an den Regeln der Erbschaftsteuer. Wer Immobilien bereits zu Lebzeiten an Kinder oder andere Angehörige überträgt, kann bestimmte Freibeträge nutzen.",
          "Besonders interessant ist, dass diese Freibeträge grundsätzlich alle zehn Jahre erneut zur Verfügung stehen. Dadurch können größere Vermögenswerte schrittweise übertragen werden.",
          "Bei der Übertragung von Immobilien sollten neben steuerlichen Aspekten auch Fragen zur Absicherung der bisherigen Eigentümer berücksichtigt werden, beispielsweise durch Wohnrechte oder Nießbrauchvereinbarungen.",
        ],
      },
      {
        id: "grundstueckshandel-artikel",
        title:
          "Gewerblicher Grundstückshandel – wann Immobilienverkäufe als gewerblich gelten",
        paragraphs: [
          "Nicht jede Immobilientransaktion wird steuerlich als private Vermögensverwaltung angesehen. Unter bestimmten Voraussetzungen kann das Finanzamt einen gewerblichen Grundstückshandel annehmen.",
          "Ein wichtiges Indiz ist die sogenannte Drei-Objekt-Grenze. Werden innerhalb von fünf Jahren mehr als drei Objekte gekauft, gebaut oder modernisiert und anschließend verkauft, kann dies als gewerbliche Tätigkeit eingestuft werden.",
          "Die Folgen können erheblich sein:",
        ],
        list: [
          "Gewinne unterliegen der Einkommensteuer.",
          "Zusätzlich kann Gewerbesteuer anfallen.",
          "Die Steuerfreiheit nach Ablauf der zehnjährigen Spekulationsfrist greift unter Umständen nicht.",
          "Umfangreiche Dokumentations- und Buchführungspflichten können entstehen.",
        ],
        afterList: [
          "Insbesondere bei Fix-&-Flip-Projekten oder einer hohen Anzahl von Immobilienverkäufen sollte die steuerliche Situation sorgfältig geprüft werden.",
        ],
      },
      {
        id: "planung-artikel",
        title: "Warum steuerliche Planung bei Immobilien wichtig ist",
        paragraphs: [
          "Steuerliche Fragen begleiten Immobilien während ihres gesamten Lebenszyklus – vom Kauf über die Vermietung bis hin zur Vererbung oder zum Verkauf. Viele Entscheidungen, die zunächst rein wirtschaftlich erscheinen, haben gleichzeitig erhebliche steuerliche Auswirkungen.",
          "Eine frühzeitige Analyse kann helfen, Risiken zu vermeiden und Gestaltungsmöglichkeiten besser auszuschöpfen. Gerade bei Kapitalanlagen, Mehrfamilienhäusern, Fix-&-Flip-Projekten oder umfangreichen Sanierungen lohnt sich eine individuelle Betrachtung, da die optimale Lösung von den persönlichen Zielen und der jeweiligen Situation abhängt.",
          "Wer Immobilien langfristig erfolgreich aufbauen und verwalten möchte, sollte steuerliche Aspekte daher nicht isoliert betrachten, sondern als festen Bestandteil jeder Investitionsentscheidung verstehen.",
        ],
      },
    ],
    topicOverviewLabel: "Themenüberblick",
    topicOverviewHeadline: "Steuerliche Aspekte im Überblick",
    topicSections: [
      {
        id: "grunderwerbsteuer",
        icon: "receipt",
        title: "Grunderwerbsteuer",
        topics: [
          "Bedeutung",
          "Höhe je Bundesland",
          "Kaufnebenkosten",
          "Auswirkungen auf die Finanzierung",
        ],
        imageAlt:
          "Steuerunterlagen und Formulare neben einem Taschenrechner auf einem Schreibtisch",
        description:
          "Beim Immobilienkauf fällt in Deutschland Grunderwerbsteuer an – ein zentraler Posten der Kaufnebenkosten, der je nach Bundesland zwischen 3,5 und 6,5 Prozent beträgt und bereits in der Finanzierungsplanung berücksichtigt werden sollte.",
      },
      {
        id: "spekulationssteuer",
        icon: "clock",
        title: "Spekulationssteuer",
        topics: [
          "Zehnjahresfrist",
          "Selbstgenutzte Immobilien",
          "Steuerfreie Veräußerung",
          "Berechnung des Gewinns",
        ],
        imageAlt:
          "Immobilienfinanzierung und Darlehensunterlagen auf einem Holztisch",
        description:
          "Verkäufe innerhalb bestimmter Fristen können steuerpflichtig sein. Bei vermieteten Objekten gilt die Zehnjahresfrist – für selbst genutzte Immobilien bestehen unter Voraussetzungen Ausnahmen.",
      },
      {
        id: "afa",
        icon: "building",
        title: "Abschreibung (AfA)",
        topics: [
          "Gebäudeanteil",
          "Lineare Abschreibung",
          "Bedeutung für Kapitalanleger",
          "Steuerliche Entlastung",
        ],
        imageAlt:
          "Dokumente, Berechnungen und Notizen zur Immobilienbewertung und Abschreibung",
        description:
          "Bei vermieteten Immobilien können Gebäudekosten über viele Jahre abgeschrieben werden. Der Grundstücksanteil bleibt dabei unberücksichtigt – die AfA ist ein zentrales Instrument für Kapitalanleger.",
      },
      {
        id: "vermietung-einkommensteuer",
        icon: "home",
        title: "Vermietung und Einkommensteuer",
        topics: [
          "Mieteinnahmen",
          "Werbungskosten",
          "Schuldzinsen",
          "Instandhaltung",
          "Verwaltungskosten",
          "Nicht umlagefähige Kosten",
        ],
        imageAlt:
          "Mehrfamilienhaus mit vermieteten Wohnungen in einer deutschen Stadt",
        description:
          "Mieteinnahmen sind steuerpflichtig – versteuert wird jedoch der Überschuss aus Einnahmen und abziehbaren Werbungskosten wie Schuldzinsen, AfA und Instandhaltung.",
      },
      {
        id: "erbschaftsteuer",
        icon: "users",
        title: "Erbschaftsteuer",
        topics: [
          "Freibeträge",
          "Ehepartner",
          "Kinder",
          "Selbstgenutztes Wohneigentum",
        ],
        imageAlt:
          "Schlüsselübergabe und Dokumente bei der Eigentumsübertragung einer Immobilie",
        description:
          "Immobilien können im Erbfall der Erbschaftsteuer unterliegen. Freibeträge und Sonderregelungen für selbst genutztes Wohneigentum können unter Voraussetzungen eine vollständige Steuerbefreiung ermöglichen.",
      },
      {
        id: "schenkungsteuer",
        icon: "gift",
        title: "Schenkungsteuer",
        topics: [
          "Übertragung zu Lebzeiten",
          "Freibeträge",
          "Zehnjahresregel",
          "Nießbrauch",
          "Wohnrechte",
        ],
        imageAlt: "Mehrfamilienhaus als Vermögenswert bei der Nachfolgeplanung",
        description:
          "Die Schenkungsteuer orientiert sich an den Regeln der Erbschaftsteuer. Freibeträge stehen grundsätzlich alle zehn Jahre erneut zur Verfügung – Wohnrechte und Nießbrauch sichern häufig die bisherigen Eigentümer ab.",
      },
      {
        id: "gewerblicher-grundstueckshandel",
        icon: "chart",
        title: "Gewerblicher Grundstückshandel",
        topics: [
          "Drei-Objekt-Grenze",
          "Fix & Flip",
          "Gewerbesteuer",
          "Risiken",
          "Private Vermögensverwaltung",
        ],
        imageAlt:
          "Wohngebäude in Deutschland – typische Immobilien bei häufigen Transaktionen",
        description:
          "Unter bestimmten Voraussetzungen kann das Finanzamt gewerblichen Grundstückshandel annehmen – mit erheblichen Folgen für Steuerpflicht, Gewerbesteuer und Buchführungspflichten.",
      },
    ],
    ctaLabel: "Steuern",
    ctaHeadline:
      "Steuerliche Entscheidungen sollten nicht isoliert betrachtet werden.",
    ctaText:
      "Immobilieninvestitionen werden nicht nur durch Kaufpreis und Finanzierung beeinflusst. Auch steuerliche Aspekte können erhebliche Auswirkungen auf Rendite, Liquidität und langfristige Strategien haben. Eine strukturierte Analyse hilft dabei, Chancen und Risiken besser einzuordnen und fundierte Entscheidungen zu treffen.",
  },
  en: {
    metaTitle: "Property Taxes | immowap",
    metaDescription:
      "Tax aspects of property in Germany explained clearly. Information on land transfer tax, speculation tax, depreciation, letting, inheritance tax, gift tax and commercial property trading.",
    heroImageAlt:
      "Property taxes – tax documents and financial planning",
    heroTitle: "Property Taxes",
    heroSubtitle:
      "Tax aspects of property in Germany explained in clear terms.",
    articleTitle: "Property Taxes",
    articleSubtitle:
      "Tax aspects of property in Germany explained in clear terms",
    intro:
      "Property is not only a form of wealth building but is also closely linked to tax questions. Tax obligations arise as soon as you buy a property, and different types of tax play an important role during the holding period and on sale. Knowing the key rules helps you avoid mistakes and make better use of tax planning options.",
    articleSections: [
      {
        id: "grunderwerbsteuer-artikel",
        title: "Land transfer tax – the tax on property purchase",
        paragraphs: [
          "When acquiring property in Germany, land transfer tax generally applies. It is calculated on the purchase price and forms part of the purchase ancillary costs. The rate depends on the federal state in which the property is located.",
          "Depending on the federal state, the tax rate is currently between 3.5 and 6.5 percent. The tax is assessed by the tax office after the purchase contract is concluded. Ownership can only be transferred in the land register after the land transfer tax has been paid.",
          "Because land transfer tax should not be overlooked, it must be taken into account in financing planning from the outset.",
        ],
      },
      {
        id: "spekulationssteuer-artikel",
        title: "Speculation tax – when sale profits are taxable",
        paragraphs: [
          "Not every property sale is tax-free. If property is sold within certain periods, speculation tax may apply to the profit.",
          "For rented property, a ten-year speculation period generally applies. If less than ten years pass between purchase and sale, the profit achieved usually has to be taxed.",
          "Exceptions exist for owner-occupied property. If the property was used by the owner in the year of sale and in the two preceding calendar years, the sale can be tax-free even within the ten-year period.",
          "Before a planned sale, you should always check whether tax is due and what impact this has on the actual profit.",
        ],
      },
      {
        id: "afa-artikel",
        title: "Depreciation (AfA) – tax treatment of buildings",
        paragraphs: [
          "For rented property, building costs can be depreciated for tax purposes over many years. This so-called depreciation for wear and tear (Absetzung für Abnutzung, AfA) reflects the loss in value of a building for tax purposes.",
          "Note that not the entire purchase price can be depreciated. The land portion is excluded because land and soil do not wear out.",
          "Different depreciation rates apply depending on year of construction and type of property. For many residential buildings, linear depreciation is currently three percent per year.",
          "AfA can significantly reduce the tax burden and is one of the most important instruments for buy-to-let investors.",
        ],
      },
      {
        id: "vermietung-artikel",
        title: "Letting and income tax",
        paragraphs: [
          "Rental income is taxable and must be declared in the income tax return.",
          "However, not the entire rental income is taxed, but only the surplus of income and deductible expenses. Deductible costs include:",
        ],
        list: [
          "Loan interest",
          "Depreciation (AfA)",
          "Administration costs",
          "Repair and maintenance costs",
          "Insurance",
          "Non-recoverable service charges",
          "Costs for tax adviser or property manager",
        ],
        afterList: [
          "Especially for leveraged property, the tax burden can be significantly lower than is often assumed.",
        ],
      },
      {
        id: "erbschaftsteuer-artikel",
        title: "Inheritance tax on property",
        paragraphs: [
          "Property forms part of your estate and may be subject to inheritance tax. Whether tax actually arises depends in particular on the degree of relationship and applicable allowances.",
          "Relatively high allowances apply between spouses and children. In addition, special rules for owner-occupied homes can, under certain conditions, allow full tax exemption.",
          "Because property often represents a considerable asset value, early succession planning is advisable.",
        ],
      },
      {
        id: "schenkungsteuer-artikel",
        title: "Gift tax – transferring assets during your lifetime",
        paragraphs: [
          "Gift tax is largely aligned with inheritance tax rules. Those who transfer property to children or other relatives during their lifetime can use certain allowances.",
          "These allowances are generally available again every ten years. Larger assets can therefore be transferred step by step.",
          "When transferring property, tax aspects should be considered alongside questions of security for the previous owners, for example through rights of residence or usufruct arrangements.",
        ],
      },
      {
        id: "grundstueckshandel-artikel",
        title:
          "Commercial property trading – when property sales are treated as commercial",
        paragraphs: [
          "Not every property transaction is treated as private asset management for tax purposes. Under certain conditions, the tax office may assume commercial property trading.",
          "An important indicator is the so-called three-property limit. If more than three properties are bought, built or modernised and then sold within five years, this may be classified as a commercial activity.",
          "The consequences can be significant:",
        ],
        list: [
          "Profits are subject to income tax.",
          "Trade tax may additionally apply.",
          "Tax exemption after the ten-year speculation period may not apply.",
          "Extensive documentation and bookkeeping obligations may arise.",
        ],
        afterList: [
          "Especially for fix-and-flip projects or a high number of property sales, the tax situation should be carefully reviewed.",
        ],
      },
      {
        id: "planung-artikel",
        title: "Why tax planning matters for property",
        paragraphs: [
          "Tax questions accompany property throughout its entire lifecycle – from purchase through letting to inheritance or sale. Many decisions that appear purely economic also have significant tax implications.",
          "Early analysis can help avoid risks and make better use of planning options. Especially for buy-to-let, multi-family homes, fix-and-flip projects or extensive refurbishment, an individual review is worthwhile because the optimal solution depends on personal goals and the specific situation.",
          "Those who want to build and manage property successfully in the long run should not view tax aspects in isolation but as a fixed part of every investment decision.",
        ],
      },
    ],
    topicOverviewLabel: "Topic overview",
    topicOverviewHeadline: "Tax aspects at a glance",
    topicSections: [
      {
        id: "grunderwerbsteuer",
        icon: "receipt",
        title: "Land transfer tax",
        topics: [
          "Significance",
          "Rate by federal state",
          "Purchase ancillary costs",
          "Impact on financing",
        ],
        imageAlt:
          "Tax documents and forms next to a calculator on a desk",
        description:
          "Land transfer tax applies when buying property in Germany – a key item among purchase ancillary costs, ranging from 3.5 to 6.5 percent depending on the federal state, and should be included in financing planning.",
      },
      {
        id: "spekulationssteuer",
        icon: "clock",
        title: "Speculation tax",
        topics: [
          "Ten-year period",
          "Owner-occupied property",
          "Tax-free disposal",
          "Calculating profit",
        ],
        imageAlt:
          "Property financing and loan documents on a wooden table",
        description:
          "Sales within certain periods can be taxable. The ten-year period applies to rented property – exceptions may apply for owner-occupied homes under certain conditions.",
      },
      {
        id: "afa",
        icon: "building",
        title: "Depreciation (AfA)",
        topics: [
          "Building portion",
          "Linear depreciation",
          "Importance for investors",
          "Tax relief",
        ],
        imageAlt:
          "Documents, calculations and notes on property valuation and depreciation",
        description:
          "For rented property, building costs can be depreciated over many years. The land portion is excluded – AfA is a central instrument for buy-to-let investors.",
      },
      {
        id: "vermietung-einkommensteuer",
        icon: "home",
        title: "Letting and income tax",
        topics: [
          "Rental income",
          "Deductible expenses",
          "Loan interest",
          "Maintenance",
          "Administration costs",
          "Non-recoverable costs",
        ],
        imageAlt:
          "Multi-family building with rented apartments in a German city",
        description:
          "Rental income is taxable – but tax is due only on the surplus of income and deductible expenses such as loan interest, AfA and maintenance.",
      },
      {
        id: "erbschaftsteuer",
        icon: "users",
        title: "Inheritance tax",
        topics: [
          "Allowances",
          "Spouses",
          "Children",
          "Owner-occupied home",
        ],
        imageAlt:
          "Key handover and documents when transferring ownership of a property",
        description:
          "Property may be subject to inheritance tax. Allowances and special rules for owner-occupied homes can, under conditions, allow full tax exemption.",
      },
      {
        id: "schenkungsteuer",
        icon: "gift",
        title: "Gift tax",
        topics: [
          "Lifetime transfer",
          "Allowances",
          "Ten-year rule",
          "Usufruct",
          "Rights of residence",
        ],
        imageAlt:
          "Multi-family building as an asset in succession planning",
        description:
          "Gift tax follows inheritance tax rules. Allowances are generally available again every ten years – rights of residence and usufruct often protect the previous owners.",
      },
      {
        id: "gewerblicher-grundstueckshandel",
        icon: "chart",
        title: "Commercial property trading",
        topics: [
          "Three-property limit",
          "Fix & flip",
          "Trade tax",
          "Risks",
          "Private asset management",
        ],
        imageAlt:
          "Residential building in Germany – typical property in frequent transactions",
        description:
          "Under certain conditions the tax office may assume commercial property trading – with significant consequences for tax liability, trade tax and bookkeeping obligations.",
      },
    ],
    ctaLabel: "Taxes",
    ctaHeadline: "Tax decisions should not be viewed in isolation.",
    ctaText:
      "Property investments are influenced not only by purchase price and financing. Tax aspects can also have a significant impact on yield, liquidity and long-term strategy. A structured analysis helps assess opportunities and risks and make informed decisions.",
  },
} as const;

type TopicSectionCopy = {
  id: string;
  icon: string;
  title: string;
  topics: readonly string[];
  imageAlt: string;
  description: string;
};

const topicSectionImages: Record<string, string> = {
  grunderwerbsteuer: SECTION_IMAGES.grunderwerbsteuer,
  spekulationssteuer: SECTION_IMAGES.spekulationssteuer,
  afa: SECTION_IMAGES.afa,
  "vermietung-einkommensteuer": SECTION_IMAGES.vermietung,
  erbschaftsteuer: SECTION_IMAGES.erbschaftsteuer,
  schenkungsteuer: SECTION_IMAGES.schenkungsteuer,
  "gewerblicher-grundstueckshandel": SECTION_IMAGES.grundstueckshandel,
};

function TopicIcon({ name }: { name: string }) {
  const className = "h-6 w-6 text-[#B9965B]";

  const paths: Record<string, string> = {
    receipt:
      "M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
    clock: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    building:
      "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
    home: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    users:
      "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
    gift: "M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z",
    chart:
      "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name] ?? paths.receipt} />
    </svg>
  );
}

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#D7D2C8]/60 bg-white shadow-[0_8px_40px_rgba(15,61,46,0.06)]">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        className="h-auto w-full object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  );
}

function TopicSection({
  section,
  reverse = false,
}: {
  section: TopicSectionCopy;
  reverse?: boolean;
}) {
  const image = topicSectionImages[section.id];

  return (
    <section
      id={section.id}
      className="scroll-mt-28 border-t border-[#D7D2C8]/50 py-16 md:py-20"
    >
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div className={reverse ? "lg:order-2" : undefined}>
          <div className="rounded-2xl border border-[#0F3D2E]/10 bg-white px-7 py-8 shadow-[0_4px_24px_rgba(15,61,46,0.06)] md:px-9 md:py-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#B9965B]/20 bg-[#B9965B]/8">
              <TopicIcon name={section.icon} />
            </div>
            <h2 className="mt-6 text-[1.375rem] font-semibold leading-snug text-[#0F3D2E] md:text-2xl">
              {section.title}
            </h2>
            <p className="mt-4 text-base leading-[1.85] text-[#1D1D1B]/72 md:text-[1.0625rem]">
              {section.description}
            </p>
            <ul className="mt-6 space-y-2.5">
              {section.topics.map((topic) => (
                <li
                  key={topic}
                  className="flex gap-3 text-sm font-medium leading-snug text-[#0F3D2E]/75 md:text-[0.9375rem]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-[#B9965B]/70"
                  />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={reverse ? "lg:order-1" : undefined}>
          <SectionImage src={image} alt={section.imageAlt} />
        </div>
      </div>
    </section>
  );
}

interface SteuernRundUmImmobilienPageProps {
  locale: Locale;
}

export function SteuernRundUmImmobilienPage({
  locale,
}: SteuernRundUmImmobilienPageProps) {
  const t = copy[locale];
  const ui = propertyKnowledgeUi[locale];
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
            <p className="text-label mb-6 block text-[#B9965B]">
              {ui.categoryShort}
            </p>
            <h1 className="text-h1 text-white">{t.heroTitle}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-[1.8] text-white/90">
              {t.heroSubtitle}
            </p>
            <PropertyKnowledgePageButtons locale={locale} onDark className="mt-10" />
          </div>
        </div>
      </section>

      <div className="bg-[#F7F5EF] py-16 md:py-20">
        <div className="mx-auto max-w-[850px] px-6 md:px-8">
          <PropertyKnowledgeBreadcrumb locale={locale} currentTitle={t.articleTitle} />

          <header className="mb-10">
            <CategoryBadge locale={locale} />
            <h2 className="text-[1.75rem] font-bold leading-tight tracking-tight text-[#0F3D2E] md:text-[2.125rem]">
              {t.articleTitle}
            </h2>
            <p className="mt-4 text-lg leading-[1.8] text-[#1D1D1B]/60">
              {t.articleSubtitle}
            </p>
            <div
              aria-hidden="true"
              className="mt-7 h-px w-16 rounded-full bg-[#B9965B]/55"
            />
            <ArticleMetaRow locale={locale} readMinutes={READ_MINUTES} />
          </header>

          <article>
            <ArticleP>{t.intro}</ArticleP>

            {t.articleSections.map((section) => (
              <div key={section.id}>
                <ArticleH2 id={section.id}>{section.title}</ArticleH2>
                {section.paragraphs.map((paragraph) => (
                  <ArticleP key={paragraph.slice(0, 40)}>{paragraph}</ArticleP>
                ))}
                {"list" in section && section.list ? (
                  <EditorialList items={section.list} />
                ) : null}
                {"afterList" in section && section.afterList
                  ? section.afterList.map((paragraph) => (
                      <ArticleP key={paragraph.slice(0, 40)}>{paragraph}</ArticleP>
                    ))
                  : null}
              </div>
            ))}
          </article>

          <PropertyKnowledgeBackLink locale={locale} overviewHref={overviewHref} />
        </div>
      </div>

      <Section className="bg-[#F7F5EF] py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-[850px] lg:max-w-none">
            <div className="mb-4 text-center lg:mb-8">
              <p className="text-label mb-4 block text-gold-600">
                {t.topicOverviewLabel}
              </p>
              <h2 className="text-h2 text-brand-800">{t.topicOverviewHeadline}</h2>
              <div className="gold-rule mx-auto mt-6" aria-hidden="true" />
            </div>

            {t.topicSections.map((section, index) => (
              <TopicSection
                key={section.id}
                section={section}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </Section>

      <section className="bg-[#0F3D2E] py-24 md:py-32">
        <div className="mx-auto max-w-[850px] px-6 text-center md:px-8">
          <p className="text-label mb-6 block text-[#B9965B]">{t.ctaLabel}</p>
          <h2 className="text-h2 text-white">{t.ctaHeadline}</h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-8 h-px w-10 rounded-full bg-[#B9965B]/60"
          />
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-[1.8] text-white/75">
            {t.ctaText}
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

export function getSteuernRundUmImmobilienMetadata(locale: Locale) {
  return {
    title: copy[locale].metaTitle,
    description: copy[locale].metaDescription,
  };
}
