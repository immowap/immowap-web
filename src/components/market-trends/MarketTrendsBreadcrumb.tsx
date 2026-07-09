import { Breadcrumb } from "@/components/ui/Breadcrumb";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";
import { getMarketTrendsHref } from "@/lib/i18n/market-trends-categories";

interface MarketTrendsBreadcrumbProps {
  locale: Locale;
  currentTitle: string;
}

export function MarketTrendsBreadcrumb({ locale, currentTitle }: MarketTrendsBreadcrumbProps) {
  const knowledgeLabel = locale === "de" ? "Wissen" : "Knowledge";
  const marketTrendsLabel = locale === "de" ? "Markt & Trends" : "Market & Trends";

  return (
    <Breadcrumb
      variant="bar"
      ariaLabel={locale === "de" ? "Brotkrumen-Navigation" : "Breadcrumb"}
      items={[
        { label: knowledgeLabel, href: getRoute(locale, "knowledge") },
        { label: marketTrendsLabel, href: getMarketTrendsHref(locale) },
        { label: currentTitle },
      ]}
    />
  );
}
