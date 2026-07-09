import { cn } from "@/lib/utils";
import { iconTokens } from "@/lib/design-system/tokens/icons";

export type IconName =
  | "market-value"
  | "risk"
  | "investment"
  | "cashflow"
  | "location"
  | "documents"
  | "reports"
  | "ai-analysis"
  | "renovation"
  | "strategy"
  | "chart"
  | "building"
  | "map"
  | "search"
  | "check"
  | "phone"
  | "mail";

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

const PATHS: Record<IconName, React.ReactNode> = {
  "market-value": (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 7h4v4" />
    </>
  ),
  risk: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
      />
    </>
  ),
  investment: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M3 12h2m14 0h2M4.22 19.78l1.42-1.42M19.78 4.22l-1.42 1.42" />
    </>
  ),
  cashflow: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 15l5-5 5 5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 9l5 5 5-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16" />
    </>
  ),
  location: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z" />
      <circle cx="12" cy="11" r="2.5" />
    </>
  ),
  documents: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6M9 13h6M9 17h4" />
    </>
  ),
  reports: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6M12 17V7M15 17v-3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16M6 3h12l2 4H4l2-4z" />
    </>
  ),
  "ai-analysis": (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L8 21l4-1.25L16 21l-1.75-4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a5 5 0 015 5c0 2.5-2 4-5 7-3-3-5-4.5-5-7a5 5 0 015-5z" />
    </>
  ),
  renovation: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </>
  ),
  strategy: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h7" />
      <circle cx="18" cy="12" r="2" />
      <circle cx="15" cy="18" r="2" />
    </>
  ),
  chart: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V5M4 19h16" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 15l3-4 3 2 5-7" />
    </>
  ),
  building: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l7-4 7 4v14" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
    </>
  ),
  map: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-6-3V6l6 3 6-3 6 3v11l-6-3-6 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6v11M15 3v11" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 20l-3.5-3.5" />
    </>
  ),
  check: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  ),
  phone: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  ),
  mail: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  ),
};

export function Icon({ name, className, size = iconTokens.size.md }: IconProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={iconTokens.strokeWidth}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
