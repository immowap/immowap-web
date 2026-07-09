import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/icons/Icon";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  title: string;
  description: string;
  href: string;
  icon?: IconName;
  category?: string;
  readMinutes?: number;
  linkLabel?: string;
  className?: string;
}

export function ArticleCard({
  title,
  description,
  href,
  icon = "reports",
  category,
  readMinutes,
  linkLabel = "Read article",
  className,
}: ArticleCardProps) {
  return (
    <Link href={href} className={cn("group block no-underline", className)}>
      <article className="flex h-full flex-col rounded-[28px] border border-warm-gray/30 bg-surface p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-gold-500/25 hover:shadow-[var(--shadow-hover)] md:p-8">
        <div className="flex items-start justify-between gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-800/6 text-brand-800 transition-colors duration-300 group-hover:bg-brand-800 group-hover:text-white">
            <Icon name={icon} size={20} />
          </span>
          {category ? (
            <span className="text-label shrink-0 text-gold-600">{category}</span>
          ) : null}
        </div>
        <h3 className="mt-5 text-h4 text-brand-800 transition-colors duration-300 group-hover:text-brand-secondary">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-body-sm leading-relaxed text-muted">{description}</p>
        <div className="mt-6 flex items-center justify-between gap-4">
          {readMinutes ? (
            <span className="text-body-sm text-muted">{readMinutes} min</span>
          ) : (
            <span />
          )}
          <span className="text-label inline-flex items-center gap-2 text-gold-600 transition-all duration-300 group-hover:gap-3">
            {linkLabel}
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </article>
    </Link>
  );
}
