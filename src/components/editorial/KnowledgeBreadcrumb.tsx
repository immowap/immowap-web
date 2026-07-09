import { Breadcrumb } from "@/components/ui/Breadcrumb";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";

type KnowledgeCategory = "property-knowledge" | "market-trends" | "faq";

interface KnowledgeBreadcrumbProps {
  locale: Locale;
  category?: KnowledgeCategory;
  currentTitle: string;
}

const categoryLabels = {
  de: {
    "property-knowledge": "Immobilienwissen",
    "market-trends": "Markt & Trends",
    faq: "FAQ",
  },
  en: {
    "property-knowledge": "Property Knowledge",
    "market-trends": "Market & Trends",
    faq: "FAQ",
  },
} as const;

export function KnowledgeBreadcrumb({
  locale,
  category,
  currentTitle,
}: KnowledgeBreadcrumbProps) {
  const knowledgeLabel = locale === "de" ? "Wissen" : "Knowledge";

  const items = [
    { label: knowledgeLabel, href: getRoute(locale, "knowledge") },
    ...(category
      ? [
          {
            label: categoryLabels[locale][category],
            href:
              category === "property-knowledge"
                ? locale === "de"
                  ? "/de/wissen/immobilienwissen"
                  : "/en/knowledge/property-knowledge"
                : category === "market-trends"
                  ? locale === "de"
                    ? "/de/wissen/markt-trends"
                    : "/en/knowledge/market-trends"
                  : locale === "de"
                    ? "/de/wissen/faq"
                    : "/en/knowledge/faq",
          },
        ]
      : []),
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
