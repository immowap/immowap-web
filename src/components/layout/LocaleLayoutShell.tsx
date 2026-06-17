import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
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
      <Header locale={locale} t={t} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
