import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SetHtmlLang } from "@/components/layout/SetHtmlLang";
import type { Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n";

interface LocaleLayoutShellProps {
  locale: Locale;
  children: React.ReactNode;
}

export function LocaleLayoutShell({ locale, children }: LocaleLayoutShellProps) {
  const t = getTranslations(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <SetHtmlLang locale={locale} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:shadow-[var(--shadow-md)]"
      >
        {locale === "de" ? "Zum Inhalt springen" : "Skip to content"}
      </a>
      <Header locale={locale} t={t} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer locale={locale} />
    </div>
  );
}
