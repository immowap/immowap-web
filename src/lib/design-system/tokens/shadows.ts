export const shadows = {
  sm: "0 2px 8px rgba(29, 29, 27, 0.04)",
  md: "0 4px 24px rgba(29, 29, 27, 0.04)",
  lg: "0 12px 32px rgba(15, 61, 46, 0.06)",
  xl: "0 20px 48px rgba(15, 61, 46, 0.08)",
  hero: "0 24px 64px rgba(15, 61, 46, 0.14)",
  float: "0 16px 40px rgba(15, 61, 46, 0.1)",
  hover: "0 20px 48px rgba(15, 61, 46, 0.08)",
} as const;

export const shadowClasses = {
  sm: "shadow-[var(--shadow-sm)]",
  md: "shadow-[var(--shadow-md)]",
  lg: "shadow-[var(--shadow-lg)]",
  xl: "shadow-[var(--shadow-xl)]",
  hero: "shadow-[var(--shadow-hero)]",
  float: "shadow-[var(--shadow-float)]",
  hover: "hover:shadow-[var(--shadow-hover)]",
} as const;
