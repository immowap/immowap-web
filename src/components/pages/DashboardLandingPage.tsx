import { AppDashboardLanguageSwitcher } from "@/components/app/AppDashboardLanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Section } from "@/components/ui/Section";
import { dashboardCopy } from "@/lib/app/dashboard-copy";
import { getAppDashboardHref } from "@/lib/app/config";
import { getRoute } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/config";

interface DashboardLandingPageProps {
  locale: Locale;
}

export function DashboardLandingPage({ locale }: DashboardLandingPageProps) {
  const copy = dashboardCopy[locale];
  const dashboardHref = getAppDashboardHref(locale);
  const websiteHref = getRoute(locale, "home");

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F5EF]">
      <header className="border-b border-black/[0.06] bg-[#F7F5EF] shadow-[0_1px_3px_rgba(15,61,46,0.06)]">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 md:px-8">
          <Logo href={websiteHref} variant="green" size="md" />
          <AppDashboardLanguageSwitcher locale={locale} />
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <Section variant="muted" className="flex flex-1 items-center py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-label mb-4 text-gold-600">immowap</p>
            <h1 className="text-h1 text-brand-800">{copy.headline}</h1>
            <div className="gold-rule mx-auto mt-8" />
            <p className="mt-8 text-lg leading-[1.8] text-muted">{copy.text}</p>
            <div className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
              <Button href={dashboardHref} className="w-full sm:w-auto">
                {copy.startAnalysis}
              </Button>
              <Button href={websiteHref} variant="secondary" className="w-full sm:w-auto">
                {copy.backToWebsite}
              </Button>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
