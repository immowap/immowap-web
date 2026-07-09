import { CTASection } from "@/components/ui/CTASection";
import { HomeCapabilitiesSection } from "@/components/home/HomeCapabilitiesSection";
import { HomeGoalsSection } from "@/components/home/HomeGoalsSection";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeKnowledgeStrip } from "@/components/home/HomeKnowledgeStrip";
import { HomeProcessSection } from "@/components/home/HomeProcessSection";
import { HomeValueSection } from "@/components/home/HomeValueSection";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n";

interface HomePageProps {
  locale: Locale;
}

/**
 * Homepage narrative:
 * 1. Hero — what immowap is (product-first)
 * 2. Value — who we are, why trust us
 * 3. Process — how we work (workflow + methodology)
 * 4. Capabilities — product analyses & tools
 * 5. Goals — who it's for
 * 6. Knowledge — what happens next
 * 7. CTA — meaningful closing action
 */
export function HomePage({ locale }: HomePageProps) {
  const t = getTranslations(locale);

  return (
    <>
      <HomeHero locale={locale} />
      <HomeValueSection locale={locale} />
      <HomeProcessSection locale={locale} />
      <HomeCapabilitiesSection locale={locale} />
      <HomeGoalsSection locale={locale} />
      <HomeKnowledgeStrip locale={locale} />
      <CTASection
        headline={t.home.cta.headline}
        text={t.home.cta.text}
        primaryLabel={t.home.cta.ctaPrimary}
        primaryHref={getRoute(locale, "dashboard")}
        secondaryLabel={t.home.cta.ctaSecondary}
        secondaryHref={getRoute(locale, "contact")}
      />
    </>
  );
}
