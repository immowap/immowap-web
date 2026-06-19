import type { Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n";

export interface MenuLink {
  label: string;
  href: string;
}

export interface MenuColumn {
  title: string;
  items: MenuLink[];
}

export function getSolutionsMenu(locale: Locale): MenuColumn[] {
  const t = getTranslations(locale);

  return [
    t.solutionsMenu.goals,
    t.solutionsMenu.analyses,
    t.solutionsMenu.tools,
  ].map((column) => ({
    title: column.title,
    items: column.items.map((item) => ({ label: item.label, href: item.href })),
  }));
}

export function getKnowledgeMenu(locale: Locale): MenuLink[] {
  const t = getTranslations(locale);

  return t.knowledgeMenu.items.map((item) => ({
    label: item.label,
    href: item.href,
  }));
}

export const solutionsMenuColumns = ["goals", "analyses", "tools"] as const;
