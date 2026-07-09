import Link from "next/link";
import { cn } from "@/lib/utils";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button, AccentButton } from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";
import {
  getPropertyKnowledgeBreadcrumb,
  propertyKnowledgeUi,
} from "@/lib/i18n/property-knowledge";

export function PropertyKnowledgeBreadcrumb({
  locale,
  currentTitle,
}: {
  locale: Locale;
  currentTitle: string;
}) {
  const crumbs = getPropertyKnowledgeBreadcrumb(locale, currentTitle);

  return (
    <Breadcrumb
      className="mb-12"
      items={crumbs.map((crumb) => ({
        label: crumb.label,
        href: crumb.href ?? undefined,
      }))}
    />
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
    <div className="mt-16 border-t border-warm-gray/60 pt-10">
      <Link
        href={overviewHref}
        className="inline-flex items-center gap-2 text-sm font-medium text-brand-800/60 transition-colors duration-300 hover:text-brand-800"
      >
        <span aria-hidden="true">←</span>
        {ui.backToAll}
      </Link>
    </div>
  );
}

export function PropertyKnowledgePageButtons({
  locale,
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
      <Button href={dashboardHref} className="sm:w-auto">
        {ui.analyseStarten}
      </Button>
      <AccentButton href={contactHref} className="sm:w-auto">
        {ui.anfrageSenden}
      </AccentButton>
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
      className="mb-5 mt-14 flex scroll-mt-28 items-start gap-3 text-[1.375rem] font-semibold leading-snug text-brand-800 md:text-2xl"
    >
      <span
        aria-hidden="true"
        className="mt-[0.35em] inline-block h-[0.9em] w-0.5 shrink-0 rounded-full bg-gold-500/55"
      />
      {children}
    </h2>
  );
}

export function ArticleH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 mt-10 text-[1.125rem] font-semibold text-brand-800 md:text-xl">
      {children}
    </h3>
  );
}

export function ArticleP({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-base leading-[1.85] text-foreground/72 md:text-[1.0625rem]">
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
          className="flex gap-3 text-base leading-[1.85] text-foreground/72 md:text-[1.0625rem]"
        >
          <span
            aria-hidden="true"
            className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-gold-500/70"
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
    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-foreground/45">
      <span>{ui.date}</span>
      <span aria-hidden="true" className="text-warm-gray">
        ·
      </span>
      <span>{ui.readTime(readMinutes)}</span>
    </div>
  );
}

export function CategoryBadge({ locale }: { locale: Locale }) {
  const ui = propertyKnowledgeUi[locale];
  return (
    <span className="mb-5 inline-block rounded-full border border-gold-500/30 bg-gold-500/8 px-3.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-gold-500">
      {ui.category}
    </span>
  );
}
