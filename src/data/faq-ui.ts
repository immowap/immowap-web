import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";

export const faqPageCopy = {
  de: {
    metaTitle: "Häufige Fragen | immowap",
    metaDescription:
      "Antworten auf 120 häufige Fragen zu Eigennutzung, Kapitalanlage, Fix & Flip, Projektentwicklung, Individueller Strategie und Gewerbeimmobilien.",
    heroLabel: "Wissen & Orientierung",
    heroTitle: "Häufige Fragen rund um Immobilienentscheidungen",
    heroSubtitle:
      "Antworten auf zentrale Fragen zu Eigennutzung, Kapitalanlage, Fix & Flip, Projektentwicklung, Individueller Strategie und Gewerbeimmobilien. Strukturiert, nachvollziehbar und auf das Wesentliche konzentriert.",
    statCategories: "Themenbereiche",
    statQuestions: "Fragen & Antworten",
    hintExpand:
      "Kategorie anklicken, um die Fragen zu öffnen. Antworten erscheinen nach Klick auf die jeweilige Frage.",
    hintMultipleOpen: (total: number) =>
      `Alle ${total} Fragen können gleichzeitig geöffnet werden.`,
    questionsInCategory: (count: number) =>
      `${count} Fragen in dieser Kategorie`,
    ctaLabel: "Weitergehende Unterstützung",
    ctaTitle: "Ihre Frage war nicht dabei?",
    ctaText:
      "Immobilienentscheidungen sind individuell. Wenn Ihre Situation eine persönliche Einschätzung erfordert, stehen wir Ihnen gerne zur Verfügung.",
    ctaPrimary: "Analyse starten",
    ctaSecondary: "Anfrage senden",
  },
  en: {
    metaTitle: "FAQ & Answers | immowap",
    metaDescription:
      "Answers to 120 common questions on owner occupation, investment property, fix & flip, project development, individual strategy and commercial real estate.",
    heroLabel: "Knowledge & guidance",
    heroTitle: "Frequently asked questions about property decisions",
    heroSubtitle:
      "Answers to key questions on owner occupation, investment property, fix & flip, project development, individual strategy and commercial real estate. Structured, clear and focused on what matters.",
    statCategories: "Topic areas",
    statQuestions: "Questions & answers",
    hintExpand:
      "Click a category to open its questions. Answers appear when you click on each question.",
    hintMultipleOpen: (total: number) =>
      `All ${total} questions can be open at the same time.`,
    questionsInCategory: (count: number) =>
      `${count} questions in this category`,
    ctaLabel: "Further support",
    ctaTitle: "Your question wasn't listed?",
    ctaText:
      "Property decisions are personal. If your situation calls for individual assessment, we are happy to help.",
    ctaPrimary: "Start analysis",
    ctaSecondary: "Send enquiry",
  },
} as const;

export function getFaqCtaLinks(locale: Locale) {
  return {
    dashboard: getRoute(locale, "dashboard"),
    contact: getRoute(locale, "contact"),
  };
}
