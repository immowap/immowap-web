"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAlternatePath } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/config";
import { animationClasses } from "@/lib/design-system/tokens/animation";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  locale: Locale;
  className?: string;
}

export function LanguageSwitcher({ locale, className }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const dePath = locale === "de" ? pathname : getAlternatePath(pathname);
  const enPath = locale === "en" ? pathname : getAlternatePath(pathname);

  const linkClass = (active: boolean) =>
    cn(
      "rounded-full px-3 py-1.5 transition-colors",
      animationClasses.focusRing,
      active
        ? "bg-gold-500/20 text-brand-800"
        : "text-brand-800/70 hover:text-brand-800",
    );

  return (
    <div className={cn("flex items-center gap-1 text-body-sm font-medium", className)}>
      <Link
        href={dePath}
        className={linkClass(locale === "de")}
        aria-current={locale === "de" ? "true" : undefined}
      >
        DE
      </Link>
      <span className="text-brand-800/30" aria-hidden="true">
        |
      </span>
      <Link
        href={enPath}
        className={linkClass(locale === "en")}
        aria-current={locale === "en" ? "true" : undefined}
      >
        EN
      </Link>
    </div>
  );
}
