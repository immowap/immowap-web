import { animationClasses } from "../tokens/animation";

export const buttonBase = [
  "inline-flex items-center justify-center text-center font-medium",
  "min-w-0 max-w-full whitespace-normal",
  "disabled:pointer-events-none disabled:opacity-[var(--opacity-disabled)]",
].join(" ");

export const buttonSizes = {
  default: "h-14 px-8 text-button rounded-full",
  compact: "h-11 px-6 text-body-sm rounded-full",
} as const;

export const buttonVariants = {
  primary: [
    "bg-gold-500 text-brand-800 border border-transparent",
    "hover:bg-gold-600 hover:shadow-[var(--shadow-float)]",
    animationClasses.focusRing,
    animationClasses.transition,
  ].join(" "),
  secondary: [
    "bg-transparent text-foreground border border-warm-gray/80",
    "hover:border-gold-500/60 hover:bg-white/40",
    animationClasses.focusRing,
    animationClasses.transition,
  ].join(" "),
  ghost: [
    "bg-transparent text-foreground border border-transparent",
    "hover:bg-black/5",
    animationClasses.focusRing,
    animationClasses.transition,
  ].join(" "),
  white: [
    "bg-surface text-foreground border border-white/35",
    "hover:bg-white/90 hover:border-white/60",
    animationClasses.focusRing,
    animationClasses.transition,
  ].join(" "),
  accent: [
    "bg-brand-800 text-white border border-transparent",
    "hover:bg-brand-secondary hover:shadow-[var(--shadow-float)]",
    animationClasses.focusRing,
    animationClasses.transition,
  ].join(" "),
  secondaryOnDark: [
    "bg-transparent text-white border border-white/30",
    "hover:border-gold-500/60 hover:bg-white/10",
    animationClasses.focusRing,
    animationClasses.transition,
  ].join(" "),
} as const;

export const buttonLoadingSpinner =
  "inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent";
