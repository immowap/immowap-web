import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/de/loesungen/vergleichswertverfahren",
        destination: "/de/loesungen/analysen/vergleichswertverfahren",
        permanent: true,
      },
      {
        source: "/en/solutions/sales-comparison-approach",
        destination: "/en/solutions/analyses/sales-comparison-approach",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
