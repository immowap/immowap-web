"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { cn } from "@/lib/utils";
import { animationClasses } from "@/lib/design-system/tokens/animation";
import type { Locale } from "@/lib/i18n/config";
import { getRoute, isActiveRoute } from "@/lib/i18n/config";
import type { Translations } from "@/lib/i18n";
import type { MenuColumn, MenuLink } from "@/lib/navigation/menus";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface MobileMenuProps {
  locale: Locale;
  t: Translations;
  pathname: string;
  open: boolean;
  onClose: () => void;
  solutionsMenu: MenuColumn[];
  knowledgeMenu: MenuLink[];
}

export function MobileMenu({
  locale,
  t,
  pathname,
  open,
  onClose,
  solutionsMenu,
  knowledgeMenu,
}: MobileMenuProps) {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [knowledgeOpen, setKnowledgeOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const staticNavItems = [
    { key: "about" as const, label: t.nav.about },
    { key: "contact" as const, label: t.nav.contact },
    { key: "dashboard" as const, label: t.nav.dashboard },
  ];

  const itemLinkClass = cn(
    "block min-w-0 break-words rounded-lg px-4 py-2.5 text-body-sm text-brand-800/90",
    "[overflow-wrap:anywhere] transition-colors hover:bg-black/5",
    animationClasses.focusRing,
  );

  const navItemClass = cn(
    "block min-w-0 break-words rounded-xl px-4 py-3 text-base font-medium",
    "[overflow-wrap:anywhere] transition-colors",
    animationClasses.focusRing,
  );

  return (
    <div className="fixed inset-0 z-[var(--z-modal)] lg:hidden">
      <button
        type="button"
        className={cn("absolute inset-0 bg-brand-900/40 backdrop-blur-sm", animationClasses.focusRing)}
        onClick={onClose}
        aria-label="Close menu"
      />
      <div
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label={locale === "de" ? "Menü" : "Menu"}
      >
        <div className="flex items-center justify-between border-b border-warm-gray/40 px-6 py-5">
          <Logo href={getRoute(locale, "home")} size="sm" onClick={onClose} />
          <button
            type="button"
            onClick={onClose}
            className={cn(
              "rounded-full p-2 text-brand-800 hover:bg-black/5",
              animationClasses.focusRing,
            )}
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <div className="mb-6">
            <LanguageSwitcher locale={locale} />
          </div>

          <ul className="space-y-1">
            <li>
              <Link
                href={getRoute(locale, "home")}
                onClick={onClose}
                className={cn(
                  navItemClass,
                  isActiveRoute(pathname, getRoute(locale, "home"))
                    ? "bg-gold-500/25 text-brand-800"
                    : "text-brand-800 hover:bg-black/5",
                )}
              >
                {t.nav.home}
              </Link>
            </li>

            <li>
              <button
                type="button"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className={cn(
                  "flex w-full min-w-0 items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-brand-800 hover:bg-black/5",
                  animationClasses.focusRing,
                  isActiveRoute(pathname, getRoute(locale, "solutions")) &&
                    "bg-gold-500/25",
                )}
              >
                {t.nav.solutions}
                <svg
                  className={cn("h-4 w-4 transition-transform", solutionsOpen && "rotate-180")}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {solutionsOpen && (
                <div className="mt-1 space-y-5 border-l border-warm-gray/50 pl-4">
                  {solutionsMenu.map((section) => (
                    <div key={section.title}>
                      <p className="text-label mb-2 px-2 text-gold-600">{section.title}</p>
                      <ul className="space-y-0.5">
                        {section.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              onClick={onClose}
                              className={cn(
                                itemLinkClass,
                                isActiveRoute(pathname, item.href) &&
                                  "bg-gold-500/20 font-medium text-brand-800",
                              )}
                              aria-current={
                                isActiveRoute(pathname, item.href) ? "page" : undefined
                              }
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>

            <li>
              <button
                type="button"
                onClick={() => setKnowledgeOpen(!knowledgeOpen)}
                className={cn(
                  "flex w-full min-w-0 items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-brand-800 hover:bg-black/5",
                  animationClasses.focusRing,
                  isActiveRoute(pathname, getRoute(locale, "knowledge")) &&
                    "bg-gold-500/25",
                )}
              >
                {t.nav.knowledge}
                <svg
                  className={cn("h-4 w-4 transition-transform", knowledgeOpen && "rotate-180")}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {knowledgeOpen && (
                <ul className="mt-1 space-y-0.5 border-l border-warm-gray/50 pl-4">
                  {knowledgeMenu.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} onClick={onClose} className={itemLinkClass}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {staticNavItems.map((item) => (
              <li key={item.key}>
                <Link
                  href={getRoute(locale, item.key)}
                  onClick={onClose}
                  className={cn(
                    navItemClass,
                    isActiveRoute(pathname, getRoute(locale, item.key))
                      ? "bg-gold-500/25 text-brand-800"
                      : "text-brand-800 hover:bg-black/5",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-warm-gray/40 px-6 py-6">
          <SecondaryButton href={getRoute(locale, "packages")} className="w-full">
            {t.nav.packages}
          </SecondaryButton>
          <PrimaryButton href={getRoute(locale, "dashboard")} className="w-full">
            {t.nav.startAnalysis}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
