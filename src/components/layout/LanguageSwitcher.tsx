"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAlternatePath } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  locale: Locale;
  className?: string;
}

export function LanguageSwitcher({ locale, className }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const dePath = locale === "de" ? pathname : getAlternatePath(pathname);
  const enPath = locale === "en" ? pathname : getAlternatePath(pathname);

  return (
    <div className={cn("flex items-center gap-1 text-sm font-medium", className)}>
      <Link
        href={dePath}
        className={cn(
          "rounded-full px-3 py-1.5 transition-colors",
          locale === "de"
            ? "bg-[#B9965B]/20 text-[#0F3D2E]"
            : "text-[#0F3D2E]/70 hover:text-[#0F3D2E]",
        )}
        aria-current={locale === "de" ? "true" : undefined}
      >
        DE
      </Link>
      <span className="text-[#0F3D2E]/30">|</span>
      <Link
        href={enPath}
        className={cn(
          "rounded-full px-3 py-1.5 transition-colors",
          locale === "en"
            ? "bg-[#B9965B]/20 text-[#0F3D2E]"
            : "text-[#0F3D2E]/70 hover:text-[#0F3D2E]",
        )}
        aria-current={locale === "en" ? "true" : undefined}
      >
        EN
      </Link>
    </div>
  );
}
