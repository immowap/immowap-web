import { Breadcrumb } from "@/components/ui/Breadcrumb";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";

interface SolutionBreadcrumbProps {
  locale: Locale;
  /** Middle segment label, e.g. "Analysen" */
  category?: "analyses" | "tools";
  currentTitle: string;
}

const categoryLabels = {
  de: { analyses: "Analysen", tools: "Tools" },
  en: { analyses: "Analyses", tools: "Tools" },
} as const;

export function SolutionBreadcrumb({
  locale,
  category,
  currentTitle,
}: SolutionBreadcrumbProps) {
  const solutionsLabel = locale === "de" ? "Lösungen" : "Solutions";
  const labels = categoryLabels[locale];
  const cat = category !== undefined ? labels[category] : undefined;

  const items = [
    { label: solutionsLabel, href: getRoute(locale, "solutions") },
    ...(cat ? [{ label: cat }] : []),
    { label: currentTitle },
  ];

  return (
    <Breadcrumb
      variant="bar"
      ariaLabel={locale === "de" ? "Brotkrumen-Navigation" : "Breadcrumb"}
      items={items}
    />
  );
}
