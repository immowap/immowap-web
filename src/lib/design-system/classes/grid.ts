import { layoutSpacing } from "../tokens/spacing";

export const gridCols = {
  1: "grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
  5: "md:grid-cols-2 lg:grid-cols-5",
} as const;

export type GridColumns = keyof typeof gridCols;

export const gridBase = ["grid [&>*]:min-w-0", layoutSpacing.sectionGap].join(" ");

export function getGridClass(columns: GridColumns = 3): string {
  return `${gridBase} ${gridCols[columns]}`;
}
