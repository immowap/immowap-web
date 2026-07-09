import type { Locale } from "@/lib/i18n/config";
import type { IconName } from "@/components/ui/icons/Icon";
import { getSolutionHref, type SolutionPageKey } from "./routes";

export interface RelatedSolutionItem {
  key: SolutionPageKey;
  href: string;
  title: string;
  description: string;
  icon: IconName;
}

const labels: Record<
  Locale,
  Record<SolutionPageKey, { title: string; description: string; icon: IconName }>
> = {
  de: {
    eigennutzung: {
      title: "Eigennutzung",
      description: "Individuelle Betrachtung für Wohnimmobilien im Eigenbestand.",
      icon: "building",
    },
    kapitalanlage: {
      title: "Kapitalanlage",
      description: "Renditeorientierte Analysen für Investitionsentscheidungen.",
      icon: "investment",
    },
    "fix-flip": {
      title: "Fix & Flip",
      description: "Projekte mit klarer Exit-Strategie und Wertsteigerungspotenzial.",
      icon: "renovation",
    },
    sanierung: {
      title: "Projektentwicklung",
      description: "Grundstücke, Neubau, Umbau und Nachverdichtung – von der Idee bis zur Exit-Strategie.",
      icon: "renovation",
    },
    mehrfamilienhaeuser: {
      title: "Individuelle Strategie",
      description: "Maßgeschneiderte Betrachtung für Vermögensaufbau, Portfolio und langfristige Ziele.",
      icon: "strategy",
    },
    gewerbeimmobilien: {
      title: "Gewerbeimmobilien",
      description: "Analysen für gewerbliche Nutzungen und Spezialobjekte.",
      icon: "building",
    },
    marktwertanalyse: {
      title: "Marktwertanalyse",
      description: "Fundierte Wertermittlung im Marktkontext.",
      icon: "market-value",
    },
    vergleichswertverfahren: {
      title: "Vergleichswertverfahren",
      description: "Marktorientierte Bewertung anhand vergleichbarer Objekte.",
      icon: "chart",
    },
    sachwertverfahren: {
      title: "Sachwertverfahren",
      description: "Substanz- und kostenbasierte Wertermittlung.",
      icon: "strategy",
    },
    ertragswertverfahren: {
      title: "Ertragswertverfahren",
      description: "Rendite- und Cashflow-orientierte Bewertung.",
      icon: "cashflow",
    },
    risikoanalyse: {
      title: "Risikoanalyse",
      description: "Frühzeitige Identifikation relevanter Risikofaktoren.",
      icon: "risk",
    },
    standortanalyse: {
      title: "Standortanalyse",
      description: "Lagequalität und Entwicklungspotenzial im Kontext.",
      icon: "location",
    },
    dokumentenanalyse: {
      title: "Dokumentenanalyse",
      description: "Strukturierte Auswertung von Exposés und Unterlagen.",
      icon: "documents",
    },
    "individuelle-immobilienanalyse": {
      title: "Individuelle Immobilienanalyse",
      description: "Ganzheitliche Betrachtung im individuellen Entscheidungskontext.",
      icon: "ai-analysis",
    },
    dashboard: {
      title: "Dashboard",
      description: "Zentrale Übersicht für Analysen und Entscheidungen.",
      icon: "chart",
    },
    "ki-assistent": {
      title: "KI-Assistent",
      description: "KI-gestützte Einordnung und Antworten auf Ihre Fragen.",
      icon: "ai-analysis",
    },
    "pdf-berichte": {
      title: "PDF-Berichte",
      description: "Nachvollziehbare Berichte für Entscheidungen und Gespräche.",
      icon: "reports",
    },
    "dokumenten-upload": {
      title: "Dokumenten-Upload",
      description: "Unterlagen strukturiert erfassen und auswerten.",
      icon: "documents",
    },
    vergleichsanalysen: {
      title: "Vergleichsanalysen",
      description: "Objekte und Szenarien systematisch gegenüberstellen.",
      icon: "chart",
    },
    projektmanagement: {
      title: "Projektmanagement",
      description: "Vorhaben und Meilensteine im Überblick behalten.",
      icon: "strategy",
    },
    portfoliouebersicht: {
      title: "Portfolioübersicht",
      description: "Bestände und Perspektiven in einer Ansicht.",
      icon: "investment",
    },
  },
  en: {
    eigennutzung: {
      title: "Owner occupation",
      description: "Individual assessment for owner-occupied residential property.",
      icon: "building",
    },
    kapitalanlage: {
      title: "Investment property",
      description: "Return-oriented analyses for investment decisions.",
      icon: "investment",
    },
    "fix-flip": {
      title: "Fix & Flip",
      description: "Projects with a clear exit strategy and value-add potential.",
      icon: "renovation",
    },
    sanierung: {
      title: "Project development",
      description: "Land, new build, conversion and densification — from concept to exit strategy.",
      icon: "renovation",
    },
    mehrfamilienhaeuser: {
      title: "Individual strategy",
      description: "Tailored assessment for wealth building, portfolio development and long-term goals.",
      icon: "strategy",
    },
    gewerbeimmobilien: {
      title: "Commercial real estate",
      description: "Analyses for commercial uses and special properties.",
      icon: "building",
    },
    marktwertanalyse: {
      title: "Market value analysis",
      description: "Well-founded valuation in market context.",
      icon: "market-value",
    },
    vergleichswertverfahren: {
      title: "Sales comparison approach",
      description: "Market-oriented valuation based on comparable properties.",
      icon: "chart",
    },
    sachwertverfahren: {
      title: "Cost approach",
      description: "Substance and cost-based valuation.",
      icon: "strategy",
    },
    ertragswertverfahren: {
      title: "Income approach",
      description: "Return and cashflow-oriented valuation.",
      icon: "cashflow",
    },
    risikoanalyse: {
      title: "Risk analysis",
      description: "Early identification of relevant risk factors.",
      icon: "risk",
    },
    standortanalyse: {
      title: "Location analysis",
      description: "Location quality and development potential in context.",
      icon: "location",
    },
    dokumentenanalyse: {
      title: "Document analysis",
      description: "Structured evaluation of listings and documents.",
      icon: "documents",
    },
    "individuelle-immobilienanalyse": {
      title: "Individual property analysis",
      description: "Holistic assessment in your individual decision context.",
      icon: "ai-analysis",
    },
    dashboard: {
      title: "Dashboard",
      description: "Central overview for analyses and decisions.",
      icon: "chart",
    },
    "ki-assistent": {
      title: "AI assistant",
      description: "AI-powered context and answers to your questions.",
      icon: "ai-analysis",
    },
    "pdf-berichte": {
      title: "PDF reports",
      description: "Traceable reports for decisions and discussions.",
      icon: "reports",
    },
    "dokumenten-upload": {
      title: "Document upload",
      description: "Capture and evaluate documents in a structured way.",
      icon: "documents",
    },
    vergleichsanalysen: {
      title: "Comparison analyses",
      description: "Systematically compare properties and scenarios.",
      icon: "chart",
    },
    projektmanagement: {
      title: "Project management",
      description: "Keep projects and milestones in view.",
      icon: "strategy",
    },
    portfoliouebersicht: {
      title: "Portfolio overview",
      description: "Holdings and perspectives in one view.",
      icon: "investment",
    },
  },
};

/** Related solution keys per page */
const relatedMap: Record<SolutionPageKey, SolutionPageKey[]> = {
  eigennutzung: ["marktwertanalyse", "standortanalyse", "dokumentenanalyse"],
  kapitalanlage: ["ertragswertverfahren", "risikoanalyse", "standortanalyse"],
  "fix-flip": ["marktwertanalyse", "risikoanalyse", "vergleichswertverfahren"],
  sanierung: ["sachwertverfahren", "dokumentenanalyse", "risikoanalyse"],
  mehrfamilienhaeuser: ["ertragswertverfahren", "risikoanalyse", "portfoliouebersicht"],
  gewerbeimmobilien: ["ertragswertverfahren", "standortanalyse", "risikoanalyse"],
  marktwertanalyse: ["vergleichswertverfahren", "standortanalyse", "dokumentenanalyse"],
  vergleichswertverfahren: ["marktwertanalyse", "standortanalyse", "individuelle-immobilienanalyse"],
  sachwertverfahren: ["marktwertanalyse", "sanierung", "dokumentenanalyse"],
  ertragswertverfahren: ["kapitalanlage", "risikoanalyse", "mehrfamilienhaeuser"],
  risikoanalyse: ["kapitalanlage", "marktwertanalyse", "standortanalyse"],
  standortanalyse: ["marktwertanalyse", "eigennutzung", "gewerbeimmobilien"],
  dokumentenanalyse: ["individuelle-immobilienanalyse", "marktwertanalyse", "ki-assistent"],
  "individuelle-immobilienanalyse": ["dokumentenanalyse", "marktwertanalyse", "dashboard"],
  dashboard: ["individuelle-immobilienanalyse", "pdf-berichte", "vergleichsanalysen"],
  "ki-assistent": ["dokumentenanalyse", "dashboard", "individuelle-immobilienanalyse"],
  "pdf-berichte": ["dashboard", "marktwertanalyse", "individuelle-immobilienanalyse"],
  "dokumenten-upload": ["dokumentenanalyse", "ki-assistent", "dashboard"],
  vergleichsanalysen: ["marktwertanalyse", "vergleichswertverfahren", "dashboard"],
  projektmanagement: ["fix-flip", "sanierung", "dashboard"],
  portfoliouebersicht: ["kapitalanlage", "mehrfamilienhaeuser", "dashboard"],
};

export function getRelatedSolutions(
  locale: Locale,
  pageKey: SolutionPageKey,
): RelatedSolutionItem[] {
  const keys = relatedMap[pageKey] ?? [];
  return keys.map((key) => ({
    key,
    href: getSolutionHref(locale, key),
    ...labels[locale][key],
  }));
}
