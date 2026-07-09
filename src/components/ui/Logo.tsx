import Image from "next/image";
import Link from "next/link";
import { animationClasses } from "@/lib/design-system/tokens/animation";
import { cn } from "@/lib/utils";

type LogoVariant = "green" | "white";

const logoSources: Record<LogoVariant, string> = {
  green: "/logo-green.png",
  white: "/logo-white.png",
};

interface LogoProps {
  className?: string;
  variant?: LogoVariant;
  href?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

const sizeMap = {
  sm: { image: 32, text: "text-[1.125rem]" },
  md: { image: 40, text: "text-[1.25rem]" },
  lg: { image: 48, text: "text-[1.375rem]" },
};

export function Logo({
  className = "",
  variant = "green",
  href = "/",
  size = "md",
  onClick,
}: LogoProps) {
  const { image, text } = sizeMap[size];

  const content = (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src={logoSources[variant]}
        alt=""
        width={image}
        height={image}
        className="shrink-0 object-contain"
        style={{ height: image, width: "auto" }}
        priority
      />
      <span
        className={cn(
          "translate-y-[4px] font-semibold leading-none tracking-tight",
          text,
          variant === "green" ? "text-foreground" : "text-white",
        )}
      >
        immo<span className="text-gold-500">wap</span>
      </span>
    </span>
  );

  if (onClick) {
    return (
      <Link href={href} onClick={onClick} className={cn("inline-flex rounded-lg", animationClasses.focusRing)}>
        {content}
      </Link>
    );
  }

  return (
    <Link href={href} className={cn("inline-flex rounded-lg", animationClasses.focusRing)}>
      {content}
    </Link>
  );
}
