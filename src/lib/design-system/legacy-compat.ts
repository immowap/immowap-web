/** Backward-compatible re-exports for existing imports */
import { colors as palette } from "./tokens/colors";
import { layoutSpacing } from "./tokens/spacing";
import { radiusClasses } from "./tokens/radius";
import { animationClasses } from "./tokens/animation";
import { iconTokens } from "./tokens/icons";

export const colors = {
  primary: palette.brand.primary,
  secondary: palette.brand.secondary,
  gold: palette.gold[500],
  goldHover: palette.gold[600],
  background: palette.neutral.background,
  surface: palette.neutral.surface,
  foreground: palette.neutral.foreground,
  warmGray: palette.neutral.warmGray,
  muted: palette.neutral.muted,
  brand900: palette.brand[900],
};

export const spacing = layoutSpacing;

export const radius = {
  card: radiusClasses.xl,
  heroVisual: radiusClasses["2xl"],
  button: radiusClasses.full,
};

export const transition = {
  default: animationClasses.transition,
  slow: animationClasses.transitionSlow,
};

export const icon = {
  strokeWidth: iconTokens.strokeWidth,
  size: iconTokens.size.md,
  sizeSm: iconTokens.size.sm,
  sizeLg: iconTokens.size.lg,
};
