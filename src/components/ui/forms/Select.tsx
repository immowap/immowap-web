import { cn } from "@/lib/utils";
import { formSelect } from "@/lib/design-system/classes/forms";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export function Select({ className, error, children, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        formSelect,
        error && "border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]/15",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
