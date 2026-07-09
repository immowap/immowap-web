import { animationClasses } from "../tokens/animation";
import { radiusClasses } from "../tokens/radius";

export const formLabel = "mb-2.5 block text-body-sm font-medium text-brand-800";

export const formHelper = "mt-2 text-body-sm text-muted";

export const formFieldBase = [
  "w-full border border-warm-gray bg-surface px-5 py-4 text-body text-foreground",
  radiusClasses.md,
  "outline-none placeholder:text-foreground/40",
  "focus:outline-none focus-visible:border-gold-500/60 focus-visible:ring-2 focus-visible:ring-gold-500/15",
  "disabled:cursor-not-allowed disabled:opacity-[var(--opacity-disabled)] disabled:bg-cream",
  animationClasses.transitionFast,
].join(" ");

export const formSelect = [formFieldBase, "appearance-none"].join(" ");

export const formTextarea = [formFieldBase, "resize-y min-h-[140px]"].join(" ");

export const formCheckbox = [
  "mt-1 h-5 w-5 shrink-0 rounded border-warm-gray text-gold-500",
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/30",
].join(" ");

export const formRadio = formCheckbox;

export const formError = "mt-2 text-body-sm text-[var(--color-error)]";

export const formSuccess = "mt-2 text-body-sm text-brand-secondary";

export const formUploadZone = [
  "flex min-h-[56px] cursor-pointer items-center justify-center",
  "rounded-2xl border border-dashed border-warm-gray bg-cream/60",
  "px-5 py-4 text-body-sm font-medium text-brand-800",
  "transition-colors hover:border-gold-500/50 hover:bg-cream",
].join(" ");

export const formPanel = [
  "rounded-[28px] border border-black/[0.05] bg-surface p-8",
  "shadow-[var(--shadow-xl)] md:p-12",
].join(" ");
