import { cn } from "@/lib/utils";
import { getGridClass, type GridColumns } from "@/lib/design-system/classes/grid";

interface GridProps {
  children: React.ReactNode;
  columns?: GridColumns;
  className?: string;
}

export function Grid({ children, columns = 3, className }: GridProps) {
  return <div className={cn(getGridClass(columns), className)}>{children}</div>;
}
