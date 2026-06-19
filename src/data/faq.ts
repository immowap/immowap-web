import type { Locale } from "@/lib/i18n/config";
import type { FAQCategory } from "./faq-types";
import { faqCategoriesDe } from "./faq-de";
import { faqCategoriesEn } from "./faq-en";

export function getFaqCategories(locale: Locale): FAQCategory[] {
  return locale === "de" ? faqCategoriesDe : faqCategoriesEn;
}

export type { FAQCategory, FAQItem } from "./faq-types";
