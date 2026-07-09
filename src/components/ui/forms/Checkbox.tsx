import { cn } from "@/lib/utils";
import { formCheckbox } from "@/lib/design-system/classes/forms";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

export function Checkbox({ label, className, id, ...props }: CheckboxProps) {
  const input = (
    <input type="checkbox" id={id} className={cn(formCheckbox, className)} {...props} />
  );

  if (!label) return input;

  return (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-3">
      {input}
      <span className="min-w-0 flex-1 break-words text-body-sm leading-relaxed text-foreground/80 [overflow-wrap:anywhere]">
        {label}
      </span>
    </label>
  );
}
