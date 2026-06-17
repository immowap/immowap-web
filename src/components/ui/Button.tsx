import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gold-500 text-brand-800 hover:bg-gold-600 border border-transparent",
  secondary:
    "bg-transparent text-foreground border border-warm-gray/80 hover:border-gold-500/60 hover:bg-white/40",
  ghost: "bg-transparent text-foreground hover:bg-black/5 border border-transparent",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const styles = cn(
    "inline-flex h-14 items-center justify-center rounded-full px-8 text-base font-medium transition-all duration-300",
    variantStyles[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
