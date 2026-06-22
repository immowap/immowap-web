import Image from "next/image";
import Link from "next/link";

interface MarketTrendsHubCardProps {
  href: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  linkLabel: string;
}

export function MarketTrendsHubCard({
  href,
  title,
  description,
  image,
  imageAlt,
  linkLabel,
}: MarketTrendsHubCardProps) {
  return (
    <Link href={href} className="group block h-full no-underline">
      <article className="card-premium flex h-full flex-col overflow-hidden border-[#B9965B]/20 transition-all duration-300 hover:border-gold-500/25 hover:shadow-[0_12px_40px_rgba(185,150,91,0.12)]">
        <div className="relative h-52 shrink-0 overflow-hidden sm:h-56">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
          <h2 className="text-h3 break-words text-brand-800 transition-colors duration-300 group-hover:text-brand-600 [overflow-wrap:anywhere] hyphens-auto">
            {title}
          </h2>
          <p className="flex-1 break-words text-base leading-[1.8] text-muted [overflow-wrap:anywhere] hyphens-auto">
            {description}
          </p>
          <span className="text-label mt-auto inline-flex items-center gap-2 text-gold-600 transition-all duration-300 group-hover:gap-3">
            {linkLabel}
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </article>
    </Link>
  );
}
