import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { animationClasses } from "@/lib/design-system/tokens/animation";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** `bar` adds a subtle bottom border for hub/article pages */
  variant?: "inline" | "bar";
  className?: string;
  /** Override aria-label (defaults to "Breadcrumb") */
  ariaLabel?: string;
}

export function Breadcrumb({
  items,
  variant = "inline",
  className,
  ariaLabel = "Breadcrumb",
}: BreadcrumbProps) {
  if (items.length === 0) return null;

  const nav = (
    <nav aria-label={ariaLabel} className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-body-sm text-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          if (isLast || !item.href) {
            return (
              <li
                key={`${item.label}-${index}`}
                aria-current="page"
                className="min-w-0 break-words font-medium text-brand-800 [overflow-wrap:anywhere]"
              >
                {item.label}
              </li>
            );
          }

          return (
            <li key={item.href} className="flex items-center gap-2">
              <Link
                href={item.href}
                className={cn(
                  "break-words transition-colors duration-300 hover:text-brand-secondary",
                  animationClasses.focusRing,
                  "rounded-sm",
                )}
              >
                {item.label}
              </Link>
              <span aria-hidden="true" className="text-warm-gray">
                /
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );

  if (variant === "bar") {
    return (
      <div className="border-b border-warm-gray/30 bg-cream">
        <Container className="py-4">{nav}</Container>
      </div>
    );
  }

  return nav;
}
