import type { Locale } from "./config";

export type LegalPageId =
  | "impressum"
  | "datenschutz"
  | "agb"
  | "widerruf"
  | "cookies";

export interface LegalSection {
  title: string;
  paragraphs: string[];
}

export interface LegalPageContent {
  title: string;
  intro: string;
  placeholderNote: string;
  sections: LegalSection[];
}

export const legalPagesCopy: Record<LegalPageId, Record<Locale, LegalPageContent>> = {
  impressum: {
    de: {
      title: "Impressum",
      intro:
        "Angaben gemäß § 5 TMG und § 18 MStV. Die vollständigen Impressumsdaten werden an dieser Stelle in Kürze ergänzt.",
      placeholderNote:
        "Diese Seite dient als Platzhalter. Die endgültigen Unternehmensangaben werden vor dem produktiven Einsatz veröffentlicht.",
      sections: [
        {
          title: "Anbieter",
          paragraphs: [
            "immowap",
            "info@immowap.de",
            "0800 1400944",
          ],
        },
        {
          title: "Verantwortlich für den Inhalt",
          paragraphs: [
            "Die verantwortliche Person wird in der finalen Fassung des Impressums benannt.",
          ],
        },
      ],
    },
    en: {
      title: "Imprint",
      intro:
        "Information pursuant to German telemedia law (TMG). Complete imprint details will be published here shortly.",
      placeholderNote:
        "This page is a placeholder. Final company information will be published before go-live.",
      sections: [
        {
          title: "Provider",
          paragraphs: ["immowap", "info@immowap.de", "0800 1400944"],
        },
        {
          title: "Responsible for content",
          paragraphs: [
            "The responsible person will be named in the final version of the imprint.",
          ],
        },
      ],
    },
  },
  datenschutz: {
    de: {
      title: "Datenschutz",
      intro:
        "Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. immowap verarbeitet Daten im Rahmen digitaler Analysen, Berichte und Serviceleistungen verantwortungsvoll und transparent.",
      placeholderNote:
        "Die vollständige Datenschutzerklärung wird an dieser Stelle in Kürze veröffentlicht.",
      sections: [
        {
          title: "Grundsätze",
          paragraphs: [
            "Personenbezogene Daten werden nur verarbeitet, soweit dies für die Bereitstellung unserer Leistungen erforderlich ist oder eine Rechtsgrundlage besteht.",
            "Details zu Verantwortlichem, Zwecken, Speicherdauer, Rechtsgrundlagen und Ihren Rechten folgen in der finalen Datenschutzerklärung.",
          ],
        },
        {
          title: "Kontakt zum Datenschutz",
          paragraphs: [
            "Bei Fragen zum Datenschutz erreichen Sie uns unter info@immowap.de.",
          ],
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      intro:
        "Protecting your personal data matters to us. immowap processes data responsibly and transparently in the context of digital analyses, reports and services.",
      placeholderNote:
        "The complete privacy policy will be published here shortly.",
      sections: [
        {
          title: "Principles",
          paragraphs: [
            "Personal data is processed only to the extent necessary to provide our services or where a legal basis exists.",
            "Details on the controller, purposes, retention periods, legal bases and your rights will follow in the final privacy policy.",
          ],
        },
        {
          title: "Privacy contact",
          paragraphs: ["For privacy enquiries, please contact info@immowap.de."],
        },
      ],
    },
  },
  agb: {
    de: {
      title: "Allgemeine Geschäftsbedingungen",
      intro:
        "Die AGB regeln die Nutzung der digitalen Dienstleistungen, Analysen und PDF-Berichte von immowap.",
      placeholderNote:
        "Die vollständigen Allgemeinen Geschäftsbedingungen werden an dieser Stelle in Kürze veröffentlicht.",
      sections: [
        {
          title: "Leistungsgegenstand",
          paragraphs: [
            "immowap bietet digitale Immobilienanalysen, Auswertungen und Berichte an. Der konkrete Leistungsumfang richtet sich nach dem gewählten Paket bzw. der individuellen Vereinbarung.",
          ],
        },
        {
          title: "Vertragsschluss und Nutzung",
          paragraphs: [
            "Regelungen zu Vertragsschluss, Laufzeit, Preisen, Verfügbarkeit und Haftung werden in der finalen Fassung der AGB dargestellt.",
          ],
        },
      ],
    },
    en: {
      title: "Terms and Conditions",
      intro:
        "These terms govern the use of immowap's digital services, analyses and PDF reports.",
      placeholderNote:
        "The complete terms and conditions will be published here shortly.",
      sections: [
        {
          title: "Scope of services",
          paragraphs: [
            "immowap provides digital property analyses, evaluations and reports. The specific scope of services depends on the selected package or individual agreement.",
          ],
        },
        {
          title: "Contract and use",
          paragraphs: [
            "Provisions on contract formation, term, pricing, availability and liability will be set out in the final version of the terms.",
          ],
        },
      ],
    },
  },
  widerruf: {
    de: {
      title: "Widerrufsbelehrung",
      intro:
        "Verbrauchern steht bei Fernabsatzverträgen grundsätzlich ein gesetzliches Widerrufsrecht zu. Die nachfolgenden Hinweise werden in der finalen Fassung vollständig dargestellt.",
      placeholderNote:
        "Die vollständige Widerrufsbelehrung inklusive Muster-Widerrufsformular wird an dieser Stelle in Kürze veröffentlicht.",
      sections: [
        {
          title: "Widerrufsrecht",
          paragraphs: [
            "Sofern Sie Verbraucher sind, können Sie Ihre Vertragserklärung innerhalb der gesetzlichen Frist ohne Angabe von Gründen widerrufen.",
            "Frist, Ausübung des Widerrufs und Folgen des Widerrufs werden in der endgültigen Widerrufsbelehrung konkretisiert.",
          ],
        },
        {
          title: "Digitale Inhalte",
          paragraphs: [
            "Besondere Regelungen können für digital bereitgestellte Analysen und Berichte gelten, sofern die Leistung bereits vollständig erbracht wurde.",
          ],
        },
      ],
    },
    en: {
      title: "Right of Withdrawal",
      intro:
        "Consumers generally have a statutory right of withdrawal for distance contracts. The following information will be set out in full in the final version.",
      placeholderNote:
        "The complete cancellation policy including a model withdrawal form will be published here shortly.",
      sections: [
        {
          title: "Withdrawal right",
          paragraphs: [
            "If you are a consumer, you may withdraw from your contract within the statutory period without giving reasons.",
            "Period, exercise of withdrawal and consequences will be specified in the final cancellation policy.",
          ],
        },
        {
          title: "Digital content",
          paragraphs: [
            "Special rules may apply to digitally delivered analyses and reports if the service has already been fully provided.",
          ],
        },
      ],
    },
  },
  cookies: {
    de: {
      title: "Cookie-Einstellungen",
      intro:
        "immowap setzt Cookies und vergleichbare Technologien ein, soweit dies für den Betrieb der Website, Analysen und Servicefunktionen erforderlich ist.",
      placeholderNote:
        "Ein Cookie-Einstellungs-Center wird an dieser Stelle in Kürze bereitgestellt. Bis dahin finden Sie hier eine Übersicht der geplanten Kategorien.",
      sections: [
        {
          title: "Notwendige Cookies",
          paragraphs: [
            "Diese Cookies sind für grundlegende Funktionen der Website erforderlich, etwa für Sicherheit, Sprachauswahl und Session-Verwaltung.",
          ],
        },
        {
          title: "Statistik und Komfort",
          paragraphs: [
            "Optionale Cookies für Statistik, Komfortfunktionen oder Marketing werden erst nach Ihrer Einwilligung gesetzt. Die Auswahl können Sie hier demnächst individuell vornehmen.",
          ],
        },
      ],
    },
    en: {
      title: "Cookie Settings",
      intro:
        "immowap uses cookies and similar technologies where necessary for website operation, analytics and service functions.",
      placeholderNote:
        "A cookie settings centre will be provided here shortly. Until then, you will find an overview of the planned categories below.",
      sections: [
        {
          title: "Essential cookies",
          paragraphs: [
            "These cookies are required for basic website functions such as security, language selection and session management.",
          ],
        },
        {
          title: "Statistics and comfort",
          paragraphs: [
            "Optional cookies for statistics, comfort features or marketing are only set after your consent. You will soon be able to manage your preferences here.",
          ],
        },
      ],
    },
  },
};

export function getLegalPageContent(pageId: LegalPageId, locale: Locale): LegalPageContent {
  return legalPagesCopy[pageId][locale];
}
