"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { animationClasses } from "@/lib/design-system/tokens/animation";
import type { Locale } from "@/lib/i18n/config";
import { getRoute, isActiveRoute } from "@/lib/i18n/config";
import type { Translations } from "@/lib/i18n";
import { getKnowledgeMenu, getSolutionsMenu } from "@/lib/navigation/menus";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MegaMenu, KnowledgeDropdown, NavLink } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  locale: Locale;
  t: Translations;
}

export function Header({ locale, t }: HeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [knowledgeOpen, setKnowledgeOpen] = useState(false);

  const solutionsMenu = getSolutionsMenu(locale);
  const knowledgeMenu = getKnowledgeMenu(locale);
  const solutionsCloseTimer = useRef<number | null>(null);
  const knowledgeCloseTimer = useRef<number | null>(null);

  const openSolutions = () => {
    if (solutionsCloseTimer.current) {
      window.clearTimeout(solutionsCloseTimer.current);
    }
    setSolutionsOpen(true);
    setKnowledgeOpen(false);
  };

  const scheduleCloseSolutions = () => {
    solutionsCloseTimer.current = window.setTimeout(() => {
      setSolutionsOpen(false);
    }, 120);
  };

  const openKnowledge = () => {
    if (knowledgeCloseTimer.current) {
      window.clearTimeout(knowledgeCloseTimer.current);
    }
    setKnowledgeOpen(true);
    setSolutionsOpen(false);
  };

  const scheduleCloseKnowledge = () => {
    knowledgeCloseTimer.current = window.setTimeout(() => {
      setKnowledgeOpen(false);
    }, 120);
  };

  useEffect(() => {
    return () => {
      if (solutionsCloseTimer.current) {
        window.clearTimeout(solutionsCloseTimer.current);
      }
      if (knowledgeCloseTimer.current) {
        window.clearTimeout(knowledgeCloseTimer.current);
      }
    };
  }, []);

  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;
    setMobileOpen(false);
    setSolutionsOpen(false);
    setKnowledgeOpen(false);
  }, [pathname]);

  const mainNav = [
    { key: "home" as const, label: t.nav.home, dropdown: false },
    { key: "solutions" as const, label: t.nav.solutions, dropdown: "solutions" as const },
    { key: "knowledge" as const, label: t.nav.knowledge, dropdown: "knowledge" as const },
    { key: "about" as const, label: t.nav.about, dropdown: false },
    { key: "contact" as const, label: t.nav.contact, dropdown: false },
    { key: "dashboard" as const, label: t.nav.dashboard, dropdown: false },
  ];

  return (
    <>
      <header className="sticky top-0 z-[var(--z-header)] w-full shrink-0 border-b border-black/[0.06] bg-cream shadow-[var(--shadow-sm)]">
        <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 md:px-8">
          <Logo href={getRoute(locale, "home")} variant="green" size="md" />

          <nav className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => {
              const href = getRoute(locale, item.key);
              const active = isActiveRoute(pathname, href);

              if (item.dropdown === "solutions") {
                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={openSolutions}
                    onMouseLeave={scheduleCloseSolutions}
                  >
                    <NavLink href={href} active={active} hasDropdown ariaExpanded={solutionsOpen}>
                      {item.label}
                    </NavLink>
                  </div>
                );
              }

              if (item.dropdown === "knowledge") {
                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={openKnowledge}
                    onMouseLeave={scheduleCloseKnowledge}
                  >
                    <NavLink href={href} active={active} hasDropdown ariaExpanded={knowledgeOpen}>
                      {item.label}
                    </NavLink>
                    <KnowledgeDropdown items={knowledgeMenu} open={knowledgeOpen} />
                  </div>
                );
              }

              return (
                <NavLink key={item.key} href={href} active={active}>
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <LanguageSwitcher locale={locale} />
            <Link
              href={getRoute(locale, "packages")}
              className={cn(
                "text-body-sm font-medium text-brand-800/85 transition-colors hover:text-brand-800",
                animationClasses.focusRing,
                "rounded-lg",
              )}
            >
              {t.nav.packages}
            </Link>
            <Button
              href={getRoute(locale, "dashboard")}
              size="compact"
            >
              {t.nav.startAnalysis}
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "rounded-xl p-2 text-brand-800 lg:hidden",
              animationClasses.focusRing,
            )}
            onClick={() => setMobileOpen(true)}
            aria-label={locale === "de" ? "Menü öffnen" : "Open menu"}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {solutionsOpen && (
          <div
            className="absolute inset-x-0 top-full z-[var(--z-modal)] hidden lg:block"
            onMouseEnter={openSolutions}
            onMouseLeave={scheduleCloseSolutions}
          >
            <MegaMenu columns={solutionsMenu} open={solutionsOpen} pathname={pathname} />
          </div>
        )}
      </header>

      <MobileMenu
        locale={locale}
        t={t}
        pathname={pathname}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        solutionsMenu={solutionsMenu}
        knowledgeMenu={knowledgeMenu}
      />
    </>
  );
}
