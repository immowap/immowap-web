import { AnalysisSolutionLayout, type AnalysisSolutionCopy } from "@/components/solutions/AnalysisSolutionLayout";
import type { Locale } from "@/lib/i18n/config";

interface DokumentenanalysePageProps {
  locale: Locale;
}

const copy = {
  de: {
    breadcrumbCurrent: "Dokumentenanalyse",
    heroLabel: "Analysen",
    heroHeadline: "Dokumentenanalyse für Immobilien",
    heroSubheadline: "Unterlagen verstehen und fundierte Entscheidungen treffen.",
    heroText:
      "Viele wichtige Informationen einer Immobilie befinden sich in den Unterlagen. Eine strukturierte Dokumentenanalyse hilft dabei, Chancen, Risiken und mögliche Besonderheiten frühzeitig zu erkennen.",
    heroBtnPrimary: "Dokumentenanalyse starten",
    heroBtnSecondary: "Kontakt aufnehmen",
    sectionWhyLabel: "Einordnung",
    sectionWhyHeadline: "Warum eine Dokumentenanalyse wichtig ist",
    whyCards: [
      {
        title: "Transparenz",
        description: "Wichtige Informationen werden nachvollziehbar.",
      },
      {
        title: "Risiken erkennen",
        description: "Besonderheiten können frühzeitig identifiziert werden.",
      },
      {
        title: "Bessere Entscheidungen",
        description: "Eine solide Grundlage für Kauf und Investition.",
      },
      {
        title: "Mehr Sicherheit",
        description: "Unterlagen werden strukturiert betrachtet.",
      },
    ],
    sectionConsiderLabel: "Unterlagen",
    sectionConsiderHeadline: "Welche Unterlagen berücksichtigt immowap?",
    considerCards: [
      {
        title: "Grundbuchauszug",
        description:
          "Eigentumsverhältnisse, Belastungen und eintragungsrelevante Besonderheiten im Bewertungskontext.",
      },
      {
        title: "Teilungserklärung",
        description: "Sondereigentum, Gemeinschaftseigentum und wohnungsspezifische Regelungen.",
      },
      {
        title: "Wirtschaftsplan",
        description: "Geplante Kosten, Hausgeld und wirtschaftliche Entwicklung der WEG.",
      },
      {
        title: "Hausgeldabrechnung",
        description: "Laufende Kosten, Abrechnungsergebnisse und Kostenentwicklung.",
      },
      {
        title: "Protokolle der Eigentümerversammlung",
        description: "Beschlüsse, geplante Maßnahmen und relevante Entwicklungen.",
      },
      {
        title: "Energieausweis",
        description: "Energetischer Zustand und mögliche Modernisierungsanforderungen.",
      },
    ],
    sectionQuestionsLabel: "Fragestellungen",
    sectionQuestionsHeadline: "Typische Fragestellungen",
    questionCards: [
      "Gibt es Besonderheiten im Grundbuch?",
      "Wie hoch sind die laufenden Kosten?",
      "Sind größere Maßnahmen geplant?",
      "Wie hoch ist die Instandhaltungsrücklage?",
      "Gibt es Hinweise auf Konflikte?",
      "Welche Informationen beeinflussen den Wert?",
    ],
    sectionProcessLabel: "Ablauf",
    sectionProcessHeadline: "Bestandteile einer Dokumentenanalyse",
    processSteps: [
      { title: "Unterlagen erfassen", description: "Relevante Dokumente systematisch zusammenstellen." },
      { title: "Inhalte strukturieren", description: "Informationen nach Themen und Bedeutung ordnen." },
      { title: "Besonderheiten identifizieren", description: "Auffälligkeiten und relevante Details erkennen." },
      { title: "Risiken und Chancen bewerten", description: "Einordnung im Zusammenhang mit Objekt und Zielen." },
      {
        title: "Entscheidungsgrundlagen ableiten",
        description: "Nachvollziehbare Zusammenfassung für die Entscheidung.",
      },
    ],
    sectionOverviewHeadline: "Wichtige Dokumente im Überblick",
    overviewCards: [
      {
        title: "Grundbuchauszug",
        description: "Eigentum, Belastungen und grundbuchliche Besonderheiten.",
      },
      {
        title: "Teilungserklärung",
        description: "Regelungen zu Sondereigentum und Gemeinschaftseigentum.",
      },
      {
        title: "Wirtschaftsplan",
        description: "Geplante Kosten und wirtschaftliche Perspektive der WEG.",
      },
      {
        title: "Hausgeldabrechnung",
        description: "Laufende Belastungen und Abrechnungsergebnisse.",
      },
      {
        title: "Versammlungsprotokolle",
        description: "Beschlüsse und geplante Maßnahmen der Eigentümergemeinschaft.",
      },
      {
        title: "Energieausweis",
        description: "Energetischer Zustand und mögliche Anforderungen.",
      },
    ],
    sectionDiffLabel: "Perspektive",
    sectionDiffHeadline: "Der Unterschied von immowap",
    diffCards: [
      {
        title: "Standardbetrachtung",
        description: "Oft werden Unterlagen nur oberflächlich geprüft.",
      },
      {
        title: "Ganzheitliche Analyse",
        description: "immowap verbindet Dokumente, Objekt und individuelle Ziele.",
      },
      {
        title: "Nachvollziehbare Entscheidungsgrundlagen",
        description:
          "Keine pauschalen Aussagen, sondern strukturierte und nachvollziehbare Analysen.",
      },
    ],
  },
  en: {
    breadcrumbCurrent: "Document analysis",
    heroLabel: "Analyses",
    heroHeadline: "Real Estate Document Analysis",
    heroSubheadline: "Understand documents and make informed decisions.",
    heroText:
      "Important information about a property is often hidden in the documents. A structured document analysis helps identify opportunities, risks and important details at an early stage.",
    heroBtnPrimary: "Start document analysis",
    heroBtnSecondary: "Contact us",
    sectionWhyLabel: "Context",
    sectionWhyHeadline: "Why document analysis matters",
    whyCards: [
      {
        title: "Transparency",
        description: "Important information becomes easier to understand.",
      },
      {
        title: "Identify risks",
        description: "Potential issues may be detected early.",
      },
      {
        title: "Better decisions",
        description: "Supports informed investment decisions.",
      },
      {
        title: "Greater confidence",
        description: "Documents are reviewed in a structured way.",
      },
    ],
    sectionConsiderLabel: "Documents",
    sectionConsiderHeadline: "Which documents does immowap consider?",
    considerCards: [
      {
        title: "Land register extract",
        description:
          "Ownership, encumbrances and registration-related details in the valuation context.",
      },
      {
        title: "Declaration of division",
        description: "Separate ownership, common property and unit-specific regulations.",
      },
      {
        title: "Business plan",
        description: "Planned costs, service charges and the economic outlook of the owners' association.",
      },
      {
        title: "Service charge statement",
        description: "Ongoing costs, settlement results and cost development.",
      },
      {
        title: "Owners' meeting minutes",
        description: "Resolutions, planned measures and relevant developments.",
      },
      {
        title: "Energy performance certificate",
        description: "Energy condition and potential modernisation requirements.",
      },
    ],
    sectionQuestionsLabel: "Questions",
    sectionQuestionsHeadline: "Typical questions",
    questionCards: [
      "Are there special entries in the land register?",
      "What are the ongoing costs?",
      "Are major renovations planned?",
      "How large is the reserve fund?",
      "Are there indications of disputes?",
      "Which information affects value?",
    ],
    sectionProcessLabel: "Process",
    sectionProcessHeadline: "Components of a document analysis",
    processSteps: [
      { title: "Collect documents", description: "Systematically gather relevant paperwork." },
      { title: "Structure information", description: "Organise content by topic and significance." },
      { title: "Identify key details", description: "Recognise notable points and relevant information." },
      { title: "Assess risks and opportunities", description: "Evaluate in context with the property and objectives." },
      {
        title: "Develop decision support",
        description: "Traceable summary for decision-making.",
      },
    ],
    sectionOverviewHeadline: "Important documents at a glance",
    overviewCards: [
      { title: "Land register extract", description: "Ownership, encumbrances and land register details." },
      { title: "Declaration of division", description: "Rules on separate and common ownership." },
      { title: "Business plan", description: "Planned costs and economic outlook of the association." },
      { title: "Service charge statement", description: "Ongoing charges and settlement results." },
      { title: "Meeting minutes", description: "Resolutions and planned measures of the owners' association." },
      { title: "Energy certificate", description: "Energy condition and potential requirements." },
    ],
    sectionDiffLabel: "Perspective",
    sectionDiffHeadline: "The immowap difference",
    diffCards: [
      {
        title: "Standard approach",
        description: "Traditional reviews are often limited to a basic check.",
      },
      {
        title: "Holistic analysis",
        description:
          "immowap combines documents, property characteristics and personal objectives.",
      },
      {
        title: "Transparent decision support",
        description:
          "No one-size-fits-all recommendations but objective and transparent assessments.",
      },
    ],
  },
} as const satisfies Record<Locale, AnalysisSolutionCopy>;

export function DokumentenanalysePage({ locale }: DokumentenanalysePageProps) {
  return (
    <AnalysisSolutionLayout
      locale={locale}
      pageKey="dokumentenanalyse"
      visual="documents"
      c={copy[locale]}
    />
  );
}
