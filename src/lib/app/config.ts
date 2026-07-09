import type { Locale } from "@/lib/i18n/config";

/**
 * Website vs. app separation
 *
 * Public marketing site (immowap.de):
 *   Pages, content, SEO, contact, knowledge, solutions
 *
 * App / dashboard (app.immowap.de — future):
 *   Login, dashboard, analyses, document upload, reports, project management
 *
 * Interim setup: the app entry lives at `/dashboard` on the marketing deployment.
 * Later this route can be moved or connected to https://app.immowap.de without
 * redesigning the website — update FUTURE_APP_ORIGIN / deployment routing when
 * the app is split to its own subdomain.
 */
export const PUBLIC_SITE_ORIGIN = "https://immowap.de";
export const FUTURE_APP_ORIGIN = "https://app.immowap.de";
export const APP_DASHBOARD_PATH = "/dashboard";

export function getAppDashboardHref(locale: Locale = "de"): string {
  return locale === "en" ? `${APP_DASHBOARD_PATH}?lang=en` : APP_DASHBOARD_PATH;
}

export function resolveDashboardLocale(lang: string | undefined): Locale {
  return lang === "en" ? "en" : "de";
}
