import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";
import { iconTokens } from "@/lib/design-system/tokens/icons";

/** Edit this list to add, remove, or update social networks. Set `enabled: false` to hide. */
const SOCIAL_NETWORKS = [
  {
    id: "linkedin",
    href: "https://www.linkedin.com/company/immowap",
    enabled: true,
  },
  {
    id: "youtube",
    href: "https://www.youtube.com/@immowap",
    enabled: true,
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/immowap",
    enabled: true,
  },
  {
    id: "x",
    href: "https://x.com/immowap",
    enabled: false,
  },
] as const;

type SocialNetworkId = (typeof SOCIAL_NETWORKS)[number]["id"];

const LABELS: Record<
  Locale,
  Record<SocialNetworkId, string> & { group: string }
> = {
  de: {
    group: "immowap in sozialen Medien",
    linkedin: "immowap auf LinkedIn",
    youtube: "immowap auf YouTube",
    instagram: "immowap auf Instagram",
    x: "immowap auf X",
  },
  en: {
    group: "immowap on social media",
    linkedin: "immowap on LinkedIn",
    youtube: "immowap on YouTube",
    instagram: "immowap on Instagram",
    x: "immowap on X",
  },
};

const ICONS: Record<SocialNetworkId, React.ReactNode> = {
  linkedin: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-12h4v1.7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9v12M6 6.01V6" />
    </>
  ),
  youtube: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.25 6.75h-4.5A2.25 2.25 0 007.5 9v6a2.25 2.25 0 002.25 2.25h4.5A2.25 2.25 0 0016.5 15V9a2.25 2.25 0 00-2.25-2.25z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 12.75l4.5-2.25-4.5-2.25v4.5z" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.25" />
      <path strokeLinecap="round" d="M16.25 7.75h.01" />
    </>
  ),
  x: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
    </>
  ),
};

interface SocialLinksProps {
  locale: Locale;
  /** `onDark` for footer; `default` for light backgrounds */
  variant?: "default" | "onDark";
  /** Optional visible label above the icon row */
  showLabel?: boolean;
  className?: string;
}

const variantStyles = {
  default: {
    link: "border-warm-gray/50 bg-surface text-muted hover:border-brand-secondary/40 hover:text-brand-secondary hover:bg-brand-secondary/5",
    focus: "focus-visible:ring-brand-secondary focus-visible:ring-offset-cream",
  },
  onDark: {
    link: "border-white/15 bg-white/5 text-white/65 hover:border-brand-secondary/50 hover:text-brand-secondary hover:bg-white/10",
    focus: "focus-visible:ring-brand-secondary focus-visible:ring-offset-brand-800",
  },
};

export function SocialLinks({
  locale,
  variant = "default",
  showLabel = false,
  className,
}: SocialLinksProps) {
  const labels = LABELS[locale];
  const styles = variantStyles[variant];
  const networks = SOCIAL_NETWORKS.filter((network) => network.enabled);

  if (networks.length === 0) return null;

  return (
    <nav aria-label={labels.group} className={className}>
      {showLabel ? (
        <p className="text-label mb-4 text-gold-600">{labels.group}</p>
      ) : null}
      <ul className="flex flex-wrap items-center gap-3">
        {networks.map((network) => (
          <li key={network.id}>
            <a
              href={network.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={labels[network.id]}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                styles.link,
                styles.focus,
              )}
            >
              <svg
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={iconTokens.strokeWidth}
                aria-hidden="true"
              >
                {ICONS[network.id]}
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
