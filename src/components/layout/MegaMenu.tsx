"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { isActiveRoute } from "@/lib/i18n/config";
import { animationClasses } from "@/lib/design-system/tokens/animation";
import type { MenuColumn, MenuLink } from "@/lib/navigation/menus";

const linkClassName = cn(
  "block min-w-0 break-words rounded-lg px-2 py-1.5 -mx-2 text-body-sm leading-snug text-brand-800",
  "[overflow-wrap:anywhere] transition-colors hover:bg-brand-800/[0.04] hover:text-brand-600",
  animationClasses.focusRing,
);

const activeLinkClassName =
  "bg-gold-500/20 text-brand-800 font-medium";

interface MegaMenuProps {
  columns: MenuColumn[];
  open: boolean;
  pathname: string;
}

export function MegaMenu({ columns, open, pathname }: MegaMenuProps) {
  if (!open) return null;

  return (
    <div className="hidden lg:block">
      <div className="h-3" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="rounded-3xl border border-black/5 bg-cream px-8 py-10 shadow-[var(--shadow-hero)]">
          <div className="grid gap-10 md:grid-cols-3 [&>*]:min-w-0">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-label mb-6 text-gold-600">{column.title}</p>
                <ul className="space-y-1">
                  {column.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className={cn(
                          linkClassName,
                          isActiveRoute(pathname, item.href) && activeLinkClassName,
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
        </div>
      </div>
    </div>
  );
}

interface KnowledgeDropdownProps {
  items: MenuLink[];
  open: boolean;
}

export function KnowledgeDropdown({ items, open }: KnowledgeDropdownProps) {
  if (!open) return null;

  return (
    <div className="absolute left-0 top-full z-[var(--z-modal)] hidden lg:block">
      <div className="h-3" aria-hidden="true" />
      <div className="min-w-[280px] rounded-2xl border border-black/5 bg-cream px-6 py-6 shadow-[var(--shadow-hero)]">
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className={linkClassName}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface NavLinkProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  hasDropdown?: boolean;
  ariaExpanded?: boolean;
}

export function NavLink({
  href,
  active,
  children,
  onMouseEnter,
  onMouseLeave,
  onClick,
  hasDropdown,
  ariaExpanded,
}: NavLinkProps) {
  const baseStyles = cn(
    "rounded-xl px-4 py-2 text-body-sm font-medium transition-all duration-300",
    animationClasses.focusRing,
    active
      ? "bg-gold-500/25 text-brand-800"
      : "text-brand-800/85 hover:bg-black/[0.04] hover:text-brand-800",
  );

  if (hasDropdown) {
    return (
      <Link
        href={href}
        className={cn(baseStyles, "inline-flex items-center gap-1")}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        aria-expanded={ariaExpanded}
        aria-haspopup="true"
      >
        {children}
        <svg
          className="h-3.5 w-3.5 opacity-60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
    );
  }

  return (
    <Link href={href} className={baseStyles} onClick={onClick}>
      {children}
    </Link>
  );
}
