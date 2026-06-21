export type Locale = "de" | "en";

export const locales: Locale[] = ["de", "en"];
export const defaultLocale: Locale = "de";

export type RouteKey =
  | "home"
  | "solutions"
  | "knowledge"
  | "about"
  | "contact"
  | "dashboard"
  | "packages";

export const routes: Record<Locale, Record<RouteKey, string>> = {
  de: {
    home: "/de",
    solutions: "/de/loesungen",
    knowledge: "/de/wissen",
    about: "/de/ueber-uns",
    contact: "/de/kontakt",
    dashboard: "/de/dashboard",
    packages: "/de/pakete",
  },
  en: {
    home: "/en",
    solutions: "/en/solutions",
    knowledge: "/en/knowledge",
    about: "/en/about-us",
    contact: "/en/contact",
    dashboard: "/en/dashboard",
    packages: "/en/packages",
  },
};

export function getRoute(locale: Locale, key: RouteKey): string {
  return routes[locale][key];
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "de" ? "en" : "de";
}

export function getAlternatePath(pathname: string): string {
  const dePrefix = "/de";
  const enPrefix = "/en";

  if (pathname === dePrefix || pathname.startsWith(dePrefix + "/")) {
    const suffix = pathname.slice(dePrefix.length) || "";
    const enSuffix = deToEnPath(suffix);
    return enPrefix + enSuffix;
  }

  if (pathname === enPrefix || pathname.startsWith(enPrefix + "/")) {
    const suffix = pathname.slice(enPrefix.length) || "";
    const deSuffix = enToDePath(suffix);
    return dePrefix + deSuffix;
  }

  return routes.en.home;
}

const pathMapDeToEn: Record<string, string> = {
  "": "",
  "/loesungen": "/solutions",
  "/loesungen/eigennutzung": "/solutions/owner-occupation",
  "/loesungen/kapitalanlage": "/solutions/investment-property",
  "/loesungen/fix-flip": "/solutions/fix-flip",
  "/loesungen/sanierung-modernisierung": "/solutions/renovation-modernization",
  "/loesungen/mehrfamilienhaeuser": "/solutions/multi-family-properties",
  "/loesungen/gewerbeimmobilien": "/solutions/commercial-real-estate",
  "/loesungen/marktwertanalyse": "/solutions/market-value-analysis",
  "/loesungen/analysen/vergleichswertverfahren": "/solutions/analyses/sales-comparison-approach",
  "/loesungen/analysen/sachwertverfahren": "/solutions/analyses/cost-approach",
  "/loesungen/analysen/ertragswertverfahren": "/solutions/analyses/income-approach",
  "/loesungen/analysen/risikoanalyse": "/solutions/analyses/risk-analysis",
  "/loesungen/analysen/standortanalyse": "/solutions/analyses/location-analysis",
  "/loesungen/analysen/dokumentenanalyse": "/solutions/analyses/document-analysis",
  "/loesungen/analysen/individuelle-immobilienanalyse": "/solutions/analyses/individual-property-analysis",
  "/loesungen/vergleichswertverfahren": "/solutions/analyses/sales-comparison-approach",
  "/wissen": "/knowledge",
  "/wissen/immobilienwissen": "/knowledge/property-knowledge",
  "/wissen/immobilienwissen/immobilienbewertung":
    "/knowledge/property-knowledge/property-valuation",
  "/wissen/finanzierung/immobilienfinanzierung-in-deutschland-verstehen":
    "/knowledge/property-knowledge/property-financing",
  "/wissen/immobilienwissen/kaufprozess":
    "/knowledge/property-knowledge/buying-process",
  "/wissen/immobilienwissen/dokumente-verstehen":
    "/knowledge/property-knowledge/understanding-documents",
  "/wissen/immobilienwissen/eigentumswohnung-weg":
    "/knowledge/property-knowledge/condominiums-homeowners-associations",
  "/wissen/immobilienwissen/vermietung":
    "/knowledge/property-knowledge/renting-out-property",
  "/wissen/immobilienwissen/sanierung-modernisierung":
    "/knowledge/property-knowledge/renovation-modernization",
  "/wissen/immobilienwissen/steuern-rund-um-immobilien":
    "/knowledge/property-knowledge/property-taxes",
  "/wissen/immobilienwissen/immobilienstrategien":
    "/knowledge/property-knowledge/property-strategies",
  "/wissen/immobilienwissen/immobilienlexikon":
    "/knowledge/property-knowledge/real-estate-glossary",
  "/wissen/markt-trends": "/knowledge/market-trends",
  "/wissen/faq": "/knowledge/faq",
  "/ueber-uns": "/about-us",
  "/kontakt": "/contact",
  "/dashboard": "/dashboard",
  "/pakete": "/packages",
};

const pathMapEnToDe: Record<string, string> = Object.fromEntries(
  Object.entries(pathMapDeToEn).map(([de, en]) => [en, de]),
);

function deToEnPath(suffix: string): string {
  return pathMapDeToEn[suffix] ?? suffix;
}

function enToDePath(suffix: string): string {
  return pathMapEnToDe[suffix] ?? suffix;
}

export function getLocaleFromPath(pathname: string): Locale | null {
  if (pathname === "/de" || pathname.startsWith("/de/")) return "de";
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  return null;
}

export type NavItemKey = "home" | "solutions" | "knowledge" | "about" | "contact" | "dashboard";

export function isActiveRoute(pathname: string, href: string): boolean {
  if (href === "/de" || href === "/en") {
    return pathname === href;
  }
  return pathname === href || pathname.startsWith(href + "/");
}
