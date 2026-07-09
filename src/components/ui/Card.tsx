import { cn } from "@/lib/utils";
import {
  cardBase,
  cardDescription,
  cardInteractive,
  cardSubtitle,
  cardTitle,
} from "@/lib/design-system/classes/cards";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article";
  interactive?: boolean;
}

export function Card({ children, className, as: Tag = "div", interactive = false }: CardProps) {
  return (
    <Tag className={cn(interactive ? cardInteractive : cardBase, className)}>
      {children}
    </Tag>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return <h3 className={cn(cardTitle, className)}>{children}</h3>;
}

interface CardSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardSubtitle({ children, className }: CardSubtitleProps) {
  return <p className={cn(cardSubtitle, className)}>{children}</p>;
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return <p className={cn(cardDescription, className)}>{children}</p>;
}
