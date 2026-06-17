"use client";

import Image from "next/image";
import { useState } from "react";
import { images } from "@/lib/images";

interface HeroBackgroundProps {
  className?: string;
}

export function HeroBackground({ className = "object-cover object-center" }: HeroBackgroundProps) {
  const [src, setSrc] = useState(images.hero);

  return (
    <Image
      src={src}
      alt=""
      fill
      priority
      sizes="100vw"
      className={className}
      onError={() => {
        if (src !== images.heroFallback) {
          setSrc(images.heroFallback);
        }
      }}
    />
  );
}
