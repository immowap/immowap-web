/** Spacing scale in pixels — use via CSS variables or Tailwind spacing */
export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
} as const;

/** Semantic layout spacing (Tailwind class strings) */
export const layoutSpacing = {
  sectionY: "py-20 md:py-28",
  sectionYLarge: "py-24 md:py-32",
  sectionYHero: "py-20 md:py-28 lg:py-32",
  sectionYCTA: "py-24 md:py-32 lg:py-36",
  sectionHeaderMb: "mb-12 md:mb-16",
  sectionGap: "gap-8",
  cardGap: "gap-4",
  containerX: "px-6 md:px-8",
  pageBottom: "pb-16 md:pb-24",
  stackSm: "space-y-4",
  stackMd: "space-y-6",
  stackLg: "space-y-8",
} as const;
