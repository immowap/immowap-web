import { cn } from "@/lib/utils";

type AlertVariant = "error" | "warning" | "success" | "info";

interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<AlertVariant, string> = {
  error: "border-red-200 bg-red-50 text-red-900",
  warning: "border-amber-200 bg-amber-50 text-amber-950",
  success: "border-brand-secondary/30 bg-brand-secondary/8 text-brand-800",
  info: "border-warm-gray/50 bg-surface text-brand-800",
};

const roleMap: Record<AlertVariant, "alert" | "status"> = {
  error: "alert",
  warning: "alert",
  success: "status",
  info: "status",
};

export function Alert({
  variant = "info",
  title,
  children,
  className,
}: AlertProps) {
  return (
    <div
      role={roleMap[variant]}
      className={cn(
        "rounded-2xl border px-5 py-4 text-body-sm leading-relaxed",
        variantStyles[variant],
        className,
      )}
    >
      {title ? <p className="mb-1 font-medium">{title}</p> : null}
      {children}
    </div>
  );
}

export function ErrorAlert(props: Omit<AlertProps, "variant">) {
  return <Alert variant="error" {...props} />;
}

export function WarningAlert(props: Omit<AlertProps, "variant">) {
  return <Alert variant="warning" {...props} />;
}

export function SuccessAlert(props: Omit<AlertProps, "variant">) {
  return <Alert variant="success" {...props} />;
}

export function InfoAlert(props: Omit<AlertProps, "variant">) {
  return <Alert variant="info" {...props} />;
}
