import { cn } from "@/lib/utils";
import { formTextarea } from "@/lib/design-system/classes/forms";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export function Textarea({ className, error, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        formTextarea,
        error && "border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]/15",
        className,
      )}
      {...props}
    />
  );
}
