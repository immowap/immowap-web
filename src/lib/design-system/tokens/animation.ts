export const animation = {
  duration: {
    fast: "150ms",
    default: "300ms",
    slow: "500ms",
  },
  easing: {
    default: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;

export const animationClasses = {
  transition: "transition-all duration-300 ease-out",
  transitionSlow: "transition-all duration-500 ease-out",
  transitionFast: "transition-all duration-150 ease-out",
  hoverLift: "hover-lift",
  hoverScale: "hover:scale-[1.02] transition-transform duration-300 ease-out",
  focusRing: "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/40 focus-visible:ring-offset-2",
} as const;
