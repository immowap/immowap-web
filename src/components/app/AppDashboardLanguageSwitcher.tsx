"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getAppDashboardHref } from "@/lib/app/config";
import { cn } from "@/lib/utils";

interface AppDashboardLanguageSwitcherProps {
  locale: Locale;
  className?: string;
}

export function AppDashboardLanguageSwitcher({
  locale,
  className,
}: AppDashboardLanguageSwitcherProps) {
  const deHref = getAppDashboardHref("de");
  const enHref = getAppDashboardHref("en");

  return (
    <div className={cn("flex items-center gap-1 text-sm font-medium", className)}>
      <Link
        href={deHref}
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
        href={enHref}
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
