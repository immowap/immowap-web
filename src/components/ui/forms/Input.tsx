import { cn } from "@/lib/utils";
import { formFieldBase } from "@/lib/design-system/classes/forms";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function Input({ className, error, ...props }: InputProps) {
  return (
    <input
      className={cn(
        formFieldBase,
        error && "border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]/15",
        className,
      )}
      {...props}
    />
  );
}
