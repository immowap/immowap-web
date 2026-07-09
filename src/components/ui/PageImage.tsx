import Image from "next/image";
import { cn } from "@/lib/utils";

/** Standard page hero image — identical proportions across all top-level pages */
export const pageImageClassName =
  "relative aspect-[4/5] w-full max-w-[430px] overflow-hidden rounded-[32px] shadow-[var(--shadow-hero)] lg:max-w-[473px]";

export const pageImageWideClassName =
  "relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-[32px] shadow-[var(--shadow-hero)]";

type PageImageVariant = "portrait" | "wide";

interface PageImageProps {
  src: string;
  alt: string;
  variant?: PageImageVariant;
  priority?: boolean;
  className?: string;
}

const variantClassNames: Record<PageImageVariant, string> = {
  portrait: pageImageClassName,
  wide: pageImageWideClassName,
};

export function PageImage({
  src,
  alt,
  variant = "portrait",
  priority = true,
  className,
}: PageImageProps) {
  return (
    <div className={cn(variantClassNames[variant], className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className="object-cover object-center"
        sizes={
          variant === "wide"
            ? "(max-width: 1024px) 100vw, 560px"
            : "(max-width: 1024px) 100vw, 473px"
        }
      />
    </div>
  );
}
