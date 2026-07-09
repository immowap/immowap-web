import { Icon, type IconName } from "@/components/ui/icons/Icon";
import { cn } from "@/lib/utils";

interface AnalyticsCardHeaderProps {
  icon?: IconName;
  label?: string;
  metric?: string;
  trend?: string;
  className?: string;
}

export function AnalyticsCardHeader({
  icon = "chart",
  label = "Marktdaten",
  metric = "+2,4%",
  trend = "12 Monate",
  className,
}: AnalyticsCardHeaderProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-brand-50 via-cream to-white p-6 sm:p-8",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.25]"
        viewBox="0 0 400 250"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="analytics-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#0F3D2E" strokeWidth="0.5" opacity="0.15" />
          </pattern>
        </defs>
        <rect width="400" height="250" fill="url(#analytics-grid)" />
        <path
          d="M20 200 L80 160 L140 175 L200 130 L260 145 L320 90 L380 110"
          fill="none"
          stroke="#1F7A4D"
          strokeWidth="2"
          opacity="0.5"
        />
      </svg>

      <div className="relative flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-800/8 text-brand-800">
          <Icon name={icon} size={20} />
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
          {trend}
        </span>
      </div>

      <div className="relative">
        <p className="text-label text-gold-600">{label}</p>
        <p className="mt-1 text-3xl font-semibold tracking-tight text-brand-800">{metric}</p>
      </div>

      <div className="relative flex h-12 items-end gap-1">
        {[30, 45, 38, 55, 48, 62, 58, 72, 68, 80].map((h, i) => (
          <div
            key={i}
            className={cn(
              "flex-1 rounded-sm",
              i >= 8 ? "bg-gold-500/80" : "bg-brand-secondary/40",
            )}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}
