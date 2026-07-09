import { getAppUrl } from "@/lib/app-url";
import type { Locale } from "@/lib/i18n/config";

/**
 * Website vs. app separation
 *
 * Public marketing site (immowap.de):
 *   Pages, content, SEO, contact, knowledge, solutions
 *
 * App / dashboard (app.immowap.de):
 *   Login, dashboard, analyses, document upload, reports, project management
 */
export const PUBLIC_SITE_ORIGIN = "https://immowap.de";

export function getAppDashboardHref(locale: Locale = "de"): string {
  return getAppUrl(locale === "en" ? "/dashboard?lang=en" : "/dashboard");
}

export function getAppAnalysisHref(locale: Locale = "de"): string {
  return getAppUrl(locale === "en" ? "/analyse?lang=en" : "/analyse");
}

export function getAppLoginHref(locale: Locale = "de"): string {
  return getAppUrl(locale === "en" ? "/login?lang=en" : "/login");
}

export function getAppRegisterHref(locale: Locale = "de"): string {
  return getAppUrl(locale === "en" ? "/register?lang=en" : "/register");
}

export function resolveDashboardLocale(lang: string | undefined): Locale {
  return lang === "en" ? "en" : "de";
}
