import { cn } from "@/lib/utils";
import { formError, formHelper, formSuccess } from "@/lib/design-system/classes/forms";

interface FormMessageProps {
  children: React.ReactNode;
  variant?: "helper" | "error" | "success";
  className?: string;
  id?: string;
}

export function FormMessage({
  children,
  variant = "helper",
  className,
  id,
}: FormMessageProps) {
  const styles = {
    helper: formHelper,
    error: formError,
    success: formSuccess,
  };

  return (
    <p id={id} className={cn(styles[variant], className)} role={variant === "error" ? "alert" : undefined}>
      {children}
    </p>
  );
}

interface FormFieldProps {
  children: React.ReactNode;
  className?: string;
}

export function FormField({ children, className }: FormFieldProps) {
  return <div className={cn("w-full", className)}>{children}</div>;
}
