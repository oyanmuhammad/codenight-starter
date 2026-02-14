import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [new URL("https://*.ufs.sh/f/**")],
  },
};

export default nextConfig;
