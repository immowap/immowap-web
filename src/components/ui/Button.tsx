import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  buttonBase,
  buttonLoadingSpinner,
  buttonSizes,
  buttonVariants,
} from "@/lib/design-system/classes/buttons";

type ButtonVariant = "primary" | "secondary" | "ghost" | "white" | "accent";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  size?: "default" | "compact";
  disabled?: boolean;
  loading?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
  size = "default",
  disabled = false,
  loading = false,
}: ButtonProps) {
  const styles = cn(
    buttonBase,
    buttonSizes[size],
    buttonVariants[variant],
    className,
  );

  const content = loading ? (
    <>
      <span className={buttonLoadingSpinner} aria-hidden="true" />
      <span className="sr-only">{children}</span>
    </>
  ) : (
    children
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(styles, (disabled || loading) && "pointer-events-none opacity-[var(--opacity-disabled)]")}
        aria-disabled={disabled || loading || undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={styles}
      aria-busy={loading || undefined}
    >
      {content}
    </button>
  );
}

export function PrimaryButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="primary" {...props} />;
}

export function SecondaryButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="secondary" {...props} />;
}

export function GhostButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="ghost" {...props} />;
}

export function AccentButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="accent" {...props} />;
}

export function SecondaryButtonOnDark({
  className,
  ...props
}: Omit<ButtonProps, "variant">) {
  return (
    <Button variant="secondary" className={cn(buttonVariants.secondaryOnDark, className)} {...props} />
  );
}
