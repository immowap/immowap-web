import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-xl bg-warm-gray/40",
        className,
      )}
      aria-hidden="true"
    />
  );
}

export function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("space-y-3", className)} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn("h-4", i === lines - 1 ? "w-2/3" : "w-full")}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-warm-gray/30 bg-surface p-6 md:p-8",
        className,
      )}
      aria-hidden="true"
    >
      <Skeleton className="h-6 w-1/3" />
      <SkeletonText lines={3} className="mt-6" />
    </div>
  );
}

export function LoadingSpinner({ className, label = "Loading" }: { className?: string; label?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)} role="status">
      <span
        className="h-8 w-8 animate-spin rounded-full border-2 border-warm-gray/40 border-t-brand-secondary"
        aria-hidden="true"
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

export function LoadingOverlay({ label = "Loading" }: { label?: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center rounded-[inherit] bg-surface/80 backdrop-blur-sm">
      <LoadingSpinner label={label} />
    </div>
  );
}
