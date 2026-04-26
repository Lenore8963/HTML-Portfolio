import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "openhousing.ca" },
      { protocol: "https", hostname: "thinkpol.ca" },
      { protocol: "https", hostname: "ricochet.media" },
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "miro.medium.com" },
      { protocol: "https", hostname: "img.caixin.com" },
      { protocol: "https", hostname: "image.thepaper.cn" },
      { protocol: "http", hostname: "image.thepaper.cn" },
    ],
  },
};

export default nextConfig;
