import { PageHeader } from "@/components/ui/PageHeader";
import { ProductHeroVisual } from "@/components/illustrations/ProductHeroVisual";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n";
import { getAppAnalysisHref } from "@/lib/app/config";

interface HomeHeroProps {
  locale: Locale;
}

const heroLabel = {
  de: "KI-gestützte Immobilienintelligenz",
  en: "AI-powered real estate intelligence",
} as const;

const valuePills = {
  de: ["Strukturierte Analysen", "Nachvollziehbare Berichte", "Individuelle Perspektive"],
  en: ["Structured analyses", "Transparent reports", "Individual perspective"],
} as const;

export function HomeHero({ locale }: HomeHeroProps) {
  const t = getTranslations(locale);

  return (
    <PageHeader
      label={heroLabel[locale]}
      headline={t.home.hero.headline}
      subheadline={t.home.hero.subheadline}
      layout="split"
      visual={<ProductHeroVisual locale={locale} className="w-full" />}
      primaryHref={getAppAnalysisHref(locale)}
      primaryLabel={t.home.hero.ctaPrimary}
      secondaryHref={getRoute(locale, "solutions")}
      secondaryLabel={t.home.hero.ctaSecondary}
    >
      <ul className="mt-8 flex flex-wrap gap-2">
        {valuePills[locale].map((pill) => (
          <li
            key={pill}
            className="rounded-full border border-warm-gray/50 bg-surface/80 px-3.5 py-1.5 text-body-sm text-brand-800"
          >
            {pill}
          </li>
        ))}
      </ul>
      <p className="mt-10 whitespace-pre-line text-body-sm text-muted">{t.home.hero.tagline}</p>
    </PageHeader>
  );
}
