import Link from "next/link";
import { AnalysisCard } from "@/components/ui/cards";
import type { IconName } from "@/components/ui/icons/Icon";
import { ProductVisual } from "@/components/illustrations/ProductVisual";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n";

interface HomeCapabilitiesSectionProps {
  locale: Locale;
}

const analysisIcons: IconName[] = [
  "market-value",
  "location",
  "investment",
  "cashflow",
  "risk",
  "chart",
  "strategy",
  "documents",
];

const toolIcons: IconName[] = [
  "ai-analysis",
  "reports",
  "documents",
  "chart",
  "strategy",
  "search",
];

const sectionCopy = {
  de: {
    productLabel: "Das Produkt",
    productHeadline: "Analysen, Tools und Berichte in einer Plattform",
    productDescription:
      "Vom Dashboard über KI-gestützte Auswertungen bis zum fertigen PDF-Bericht — alles strukturiert und nachvollziehbar.",
    explore: "Lösungen entdecken",
  },
  en: {
    productLabel: "The product",
    productHeadline: "Analyses, tools and reports in one platform",
    productDescription:
      "From dashboard to AI-powered evaluation to finished PDF reports — everything structured and transparent.",
    explore: "Explore solutions",
  },
} as const;

/** Merged analyses + tools — product-first presentation */
export function HomeCapabilitiesSection({ locale }: HomeCapabilitiesSectionProps) {
  const t = getTranslations(locale);
  const copy = sectionCopy[locale];

  return (
    <Section variant="muted">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <SectionHeader
            label={copy.productLabel}
            headline={copy.productHeadline}
            description={copy.productDescription}
            className="mb-10 md:mb-12"
          />

          <div className="space-y-10">
            <div>
              <p className="text-label mb-4 text-gold-600">{t.home.analyses.label}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {t.home.analyses.cards.map((title, index) => (
                  <AnalysisCard
                    key={title}
                    title={title}
                    icon={analysisIcons[index % analysisIcons.length]}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="text-label mb-4 text-gold-600">{t.home.tools.label}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {t.home.tools.cards.map((title, index) => (
                  <AnalysisCard
                    key={title}
                    title={title}
                    icon={toolIcons[index % toolIcons.length]}
                  />
                ))}
              </div>
            </div>
          </div>

          <Link
            href={getRoute(locale, "solutions")}
            className="text-label mt-10 inline-flex items-center gap-2 text-gold-600 transition-all duration-300 hover:gap-3"
          >
            {copy.explore}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <ProductVisual variant="dashboard" className="max-w-full" />
        </div>
      </div>
    </Section>
  );
}
