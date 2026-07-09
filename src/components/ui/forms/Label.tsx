import { cn } from "@/lib/utils";
import { formLabel } from "@/lib/design-system/classes/forms";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  optional?: boolean;
  optionalText?: string;
}

export function Label({
  children,
  optional,
  optionalText = "optional",
  className,
  ...props
}: LabelProps) {
  return (
    <label className={cn(formLabel, className)} {...props}>
      {children}
      {optional ? (
        <span className="font-normal text-foreground/50"> ({optionalText})</span>
      ) : null}
    </label>
  );
}
