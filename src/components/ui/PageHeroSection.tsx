import { PageHeader } from "@/components/ui/PageHeader";

interface PageHeroSectionProps {
  label?: string;
  headline: string;
  subheadline?: string;
  imageSrc: string;
  imageAlt: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  children?: React.ReactNode;
  backgroundClassName?: string;
}

/** @deprecated Use PageHeader — kept for backward compatibility */
export function PageHeroSection(props: PageHeroSectionProps) {
  return <PageHeader layout="split" {...props} />;
}
