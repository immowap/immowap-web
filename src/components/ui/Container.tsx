import { cn } from "@/lib/utils";
import { containerClasses } from "@/lib/design-system/tokens/containers";

type ContainerVariant = "page" | "content" | "article" | "narrow" | "wide" | "dashboard";

interface ContainerProps {
  children: React.ReactNode;
  variant?: ContainerVariant;
  className?: string;
  as?: "div" | "section" | "main";
}

export function Container({
  children,
  variant = "page",
  className,
  as: Tag = "div",
}: ContainerProps) {
  return <Tag className={cn(containerClasses[variant], className)}>{children}</Tag>;
}
