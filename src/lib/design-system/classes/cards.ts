import { layoutSpacing } from "../tokens/spacing";
import { animationClasses } from "../tokens/animation";

export const cardBase = [
  "card-premium flex flex-col",
  layoutSpacing.cardGap,
  animationClasses.transition,
].join(" ");

export const cardInteractive = [cardBase, "card-premium--interactive"].join(" ");

export const cardTitle =
  "text-h3 text-brand-800 break-words [overflow-wrap:anywhere] hyphens-auto";
export const cardSubtitle =
  "text-body-sm text-muted break-words [overflow-wrap:anywhere] hyphens-auto";
export const cardDescription =
  "text-body leading-[1.8] text-muted break-words [overflow-wrap:anywhere] hyphens-auto";
