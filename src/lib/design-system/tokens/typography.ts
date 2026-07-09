export const typography = {
  fontFamily: {
    sans: "var(--font-inter), system-ui, sans-serif",
  },
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  scale: {
    display: { size: "clamp(2.75rem, 6vw, 4rem)", lineHeight: 1.1, weight: 700, tracking: "-0.025em" },
    h1: { size: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: 1.15, weight: 700, tracking: "-0.02em" },
    h2: { size: "clamp(1.875rem, 4vw, 2.75rem)", lineHeight: 1.2, weight: 700, tracking: "-0.02em" },
    h3: { size: "clamp(1.375rem, 2.5vw, 1.875rem)", lineHeight: 1.35, weight: 600, tracking: "-0.015em" },
    h4: { size: "clamp(1.125rem, 2vw, 1.375rem)", lineHeight: 1.4, weight: 600, tracking: "-0.01em" },
    bodyLg: { size: "1.125rem", lineHeight: 1.8, weight: 400, tracking: "0" },
    body: { size: "1rem", lineHeight: 1.8, weight: 400, tracking: "0" },
    bodySm: { size: "0.875rem", lineHeight: 1.7, weight: 400, tracking: "0" },
    caption: { size: "0.8125rem", lineHeight: 1.5, weight: 400, tracking: "0.01em" },
    button: { size: "1rem", lineHeight: 1, weight: 500, tracking: "0" },
    label: { size: "0.8125rem", lineHeight: 1.4, weight: 500, tracking: "0.18em" },
  },
} as const;

/** Tailwind utility class names for typography */
export const typographyClasses = {
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
  bodyLg: "text-body-lg",
  body: "text-body",
  bodySm: "text-body-sm",
  caption: "text-caption",
  button: "text-button",
  label: "text-label",
} as const;
