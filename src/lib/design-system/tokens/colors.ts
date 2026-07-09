/** Official immowap brand palette + semantic colors */
export const colors = {
  brand: {
    primary: "#0F3D2E",
    secondary: "#1F7A4D",
    50: "#EEF3F0",
    100: "#D6E3DC",
    600: "#1F7A4D",
    800: "#0F3D2E",
    900: "#0B2C21",
  },
  gold: {
    500: "#B9965B",
    600: "#A3834F",
  },
  neutral: {
    background: "#F7F5EF",
    surface: "#FFFFFF",
    foreground: "#1D1D1B",
    warmGray: "#D7D2C8",
    muted: "#6B6A65",
  },
  semantic: {
    success: "#1F7A4D",
    warning: "#B9965B",
    info: "#0F3D2E",
    error: "#8C4A42",
    disabled: "#6B6A65",
    border: "#D7D2C8",
    surface: "#FFFFFF",
    hover: "#1F7A4D",
    focus: "#B9965B",
  },
} as const;

export type BrandColor = keyof typeof colors.brand;
export type SemanticColor = keyof typeof colors.semantic;
