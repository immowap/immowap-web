import type { Locale } from "./config";
import { de, type DeTranslations } from "./translations/de";
import { en } from "./translations/en";

export type Translations = DeTranslations;

const dictionaries: Record<Locale, Translations> = { de, en };

export function getTranslations(locale: Locale): Translations {
  return dictionaries[locale];
}
