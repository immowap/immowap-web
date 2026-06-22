import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";
import { getMarketTrendsHref } from "@/lib/i18n/market-trends-categories";

interface MarketTrendsBreadcrumbProps {
  locale: Locale;
  currentTitle: string;
}

export function MarketTrendsBreadcrumb({ locale, currentTitle }: MarketTrendsBreadcrumbProps) {
  const knowledgeHref = getRoute(locale, "knowledge");
  const marketTrendsHref = getMarketTrendsHref(locale);
  const knowledgeLabel = locale === "de" ? "Wissen" : "Knowledge";
  const marketTrendsLabel = locale === "de" ? "Markt & Trends" : "Market & Trends";

  return (
    <nav
      aria-label={locale === "de" ? "Brotkrumen-Navigation" : "Breadcrumb"}
      className="border-b border-warm-gray/30 bg-[#F7F5EF]"
    >
      <div className="mx-auto max-w-7xl px-6 py-4 md:px-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
          <li>
            <Link href={knowledgeHref} className="transition-colors hover:text-brand-600">
              {knowledgeLabel}
            </Link>
          </li>
          <li aria-hidden="true" className="text-warm-gray">
            /
          </li>
          <li>
            <Link href={marketTrendsHref} className="transition-colors hover:text-brand-600">
              {marketTrendsLabel}
            </Link>
          </li>
          <li aria-hidden="true" className="text-warm-gray">
            /
          </li>
          <li className="font-medium text-brand-800" aria-current="page">
            {currentTitle}
          </li>
        </ol>
      </div>
    </nav>
  );
}
