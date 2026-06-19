import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";
import {
  getPropertyKnowledgeBreadcrumb,
  propertyKnowledgeUi,
} from "@/lib/i18n/property-knowledge";

const anfrageButtonClass =
  "w-full border border-transparent bg-[#0F3D2E] text-white hover:bg-[#1F7A4D] hover:text-white sm:w-auto";

const anfrageButtonOnDarkClass =
  "w-full border border-white/15 bg-[#0F3D2E] text-white shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:border-white/25 hover:bg-[#1F7A4D] hover:text-white sm:w-auto";

export function PropertyKnowledgeBreadcrumb({
  locale,
  currentTitle,
}: {
  locale: Locale;
  currentTitle: string;
}) {
  const crumbs = getPropertyKnowledgeBreadcrumb(locale, currentTitle);

  return (
    <nav aria-label="Breadcrumb" className="mb-12">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#1D1D1B]/45">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          if (isLast || !crumb.href) {
            return (
              <li key={crumb.label} aria-current="page" className="font-medium text-[#0F3D2E]/80">
                {crumb.label}
              </li>
            );
          }
          return (
            <li key={crumb.href} className="flex items-center gap-2">
              <Link
                href={crumb.href}
                className="transition-colors duration-200 hover:text-[#0F3D2E]"
              >
                {crumb.label}
              </Link>
              <span aria-hidden="true" className="text-[#D7D2C8]">
                →
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function PropertyKnowledgeBackLink({
  locale,
  overviewHref,
}: {
  locale: Locale;
  overviewHref: string;
}) {
  const ui = propertyKnowledgeUi[locale];
  return (
    <div className="mt-16 border-t border-[#D7D2C8]/60 pt-10">
      <Link
        href={overviewHref}
        className="inline-flex items-center gap-2 text-sm font-medium text-[#0F3D2E]/60 transition-colors duration-200 hover:text-[#0F3D2E]"
      >
        <span aria-hidden="true">←</span>
        {ui.backToAll}
      </Link>
    </div>
  );
}

export function PropertyKnowledgePageButtons({
  locale,
  onDark = false,
  className,
}: {
  locale: Locale;
  onDark?: boolean;
  className?: string;
}) {
  const ui = propertyKnowledgeUi[locale];
  const dashboardHref = getRoute(locale, "dashboard");
  const contactHref = getRoute(locale, "contact");

  return (
    <div
      className={cn(
        "flex flex-col items-stretch justify-center gap-5 sm:flex-row sm:items-center sm:gap-6",
        className,
      )}
    >
      <Button
        href={dashboardHref}
        className={cn(
          "sm:w-auto",
          onDark &&
            "border-transparent bg-[#C8A45D] text-white shadow-[0_4px_16px_rgba(200,164,93,0.35)] hover:bg-[#B9965B]",
        )}
      >
        {ui.analyseStarten}
      </Button>
      <Button
        href={contactHref}
        className={onDark ? anfrageButtonOnDarkClass : anfrageButtonClass}
      >
        {ui.anfrageSenden}
      </Button>
    </div>
  );
}

export function ArticleH2({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="mb-5 mt-14 flex scroll-mt-28 items-start gap-3 text-[1.375rem] font-semibold leading-snug text-[#0F3D2E] md:text-2xl"
    >
      <span
        aria-hidden="true"
        className="mt-[0.35em] inline-block h-[0.9em] w-0.5 shrink-0 rounded-full bg-[#B9965B]/55"
      />
      {children}
    </h2>
  );
}

export function ArticleH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 mt-10 text-[1.125rem] font-semibold text-[#0F3D2E] md:text-xl">
      {children}
    </h3>
  );
}

export function ArticleP({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-base leading-[1.85] text-[#1D1D1B]/72 md:text-[1.0625rem]">
      {children}
    </p>
  );
}

export function EditorialList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-5 space-y-2.5 pl-1">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-base leading-[1.85] text-[#1D1D1B]/72 md:text-[1.0625rem]"
        >
          <span
            aria-hidden="true"
            className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-[#B9965B]/70"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ArticleMetaRow({
  locale,
  readMinutes,
}: {
  locale: Locale;
  readMinutes: number;
}) {
  const ui = propertyKnowledgeUi[locale];
  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-[#1D1D1B]/45">
      <span>{ui.date}</span>
      <span aria-hidden="true" className="text-[#D7D2C8]">
        ·
      </span>
      <span>{ui.readTime(readMinutes)}</span>
    </div>
  );
}

export function CategoryBadge({ locale }: { locale: Locale }) {
  const ui = propertyKnowledgeUi[locale];
  return (
    <span className="mb-5 inline-block rounded-full border border-[#B9965B]/30 bg-[#B9965B]/8 px-3.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#B9965B]">
      {ui.category}
    </span>
  );
}
