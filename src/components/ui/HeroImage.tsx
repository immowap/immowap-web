import { PageImage, pageImageClassName } from "@/components/ui/PageImage";

/** @deprecated Use pageImageClassName from PageImage */
export const heroImageClassName = pageImageClassName;

interface HeroImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

/** @deprecated Use PageImage — kept for backward compatibility */
export function HeroImage(props: HeroImageProps) {
  return <PageImage {...props} />;
}

/** Shared grid shell for split page headers */
export const pageHeroGridClassName =
  "grid min-w-0 items-center gap-12 py-20 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-0 [&>*]:min-w-0";

export const pageHeroTextClassName = "min-w-0 max-w-3xl lg:py-28";

export const pageHeroMediaClassName = "flex min-w-0 w-full justify-center lg:justify-end";
