export const radius = {
  sm: "8px",
  md: "16px",
  lg: "20px",
  xl: "28px",
  "2xl": "32px",
  full: "9999px",
} as const;

/** Tailwind class mappings */
export const radiusClasses = {
  sm: "rounded-lg",
  md: "rounded-2xl",
  lg: "rounded-[20px]",
  xl: "rounded-[28px]",
  "2xl": "rounded-[32px]",
  full: "rounded-full",
} as const;
