import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/icons/Icon";
import { cn } from "@/lib/utils";

type CalloutVariant =
  | "definition"
  | "important"
  | "tip"
  | "example"
  | "warning"
  | "legal"
  | "best-practice";

interface EditorialCalloutProps {
  variant: CalloutVariant;
  title?: string;
  children: ReactNode;
  className?: string;
}

const config: Record<
  CalloutVariant,
  { icon: IconName; label: { de: string; en: string }; className: string }
> = {
  definition: {
    icon: "reports",
    label: { de: "Definition", en: "Definition" },
    className: "border-warm-gray/50 bg-surface",
  },
  important: {
    icon: "strategy",
    label: { de: "Wichtig", en: "Important" },
    className: "border-gold-500/30 bg-gold-500/5",
  },
  tip: {
    icon: "ai-analysis",
    label: { de: "Tipp", en: "Tip" },
    className: "border-brand-secondary/25 bg-brand-secondary/5",
  },
  example: {
    icon: "documents",
    label: { de: "Beispiel", en: "Example" },
    className: "border-warm-gray/50 bg-cream",
  },
  warning: {
    icon: "risk",
    label: { de: "Hinweis", en: "Notice" },
    className: "border-amber-300/50 bg-amber-50",
  },
  legal: {
    icon: "reports",
    label: { de: "Rechtlicher Hinweis", en: "Legal note" },
    className: "border-warm-gray/60 bg-surface",
  },
  "best-practice": {
    icon: "chart",
    label: { de: "Best Practice", en: "Best practice" },
    className: "border-brand-secondary/20 bg-brand-secondary/5",
  },
};

interface EditorialCalloutWithLocale extends EditorialCalloutProps {
  locale?: "de" | "en";
}

export function EditorialCallout({
  variant,
  title,
  children,
  className,
  locale = "de",
}: EditorialCalloutWithLocale) {
  const c = config[variant];
  const defaultTitle = c.label[locale];

  return (
    <aside
      className={cn(
        "my-8 rounded-2xl border px-6 py-5 md:px-7 md:py-6",
        c.className,
        className,
      )}
      role="note"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-800/6 text-brand-800">
          <Icon name={c.icon} size={16} />
        </span>
        <p className="text-label text-gold-600">{title ?? defaultTitle}</p>
      </div>
      <div className="text-body-sm leading-relaxed text-muted [&_p+p]:mt-3">{children}</div>
    </aside>
  );
}

export function QuoteBlock({
  children,
  attribution,
  className,
}: {
  children: ReactNode;
  attribution?: string;
  className?: string;
}) {
  return (
    <blockquote
      className={cn(
        "my-10 border-l-2 border-gold-500/50 pl-6 md:pl-8",
        className,
      )}
    >
      <p className="text-lg font-light italic leading-relaxed text-brand-800 md:text-xl">
        {children}
      </p>
      {attribution ? (
        <footer className="mt-4 text-body-sm text-muted">— {attribution}</footer>
      ) : null}
    </blockquote>
  );
}

interface KeyTakeawaysProps {
  title: string;
  items: readonly string[];
  className?: string;
}

export function KeyTakeaways({ title, items, className }: KeyTakeawaysProps) {
  return (
    <aside
      className={cn(
        "my-12 rounded-[28px] border border-gold-500/25 bg-gold-500/5 p-6 md:p-8",
        className,
      )}
      aria-label={title}
    >
      <h2 className="text-h4 text-brand-800">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-body-sm leading-relaxed text-muted">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
