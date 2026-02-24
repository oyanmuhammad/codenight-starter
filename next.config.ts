import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // Allow additional origins to access the dev server (development only) For runtime CORS on /api/* routes, see proxy.ts
  allowedDevOrigins: [
    "localhost",
    "localhost:3000",
    "127.0.0.1",
    "127.0.0.1:3000",
    // You can add more specific patterns as needed
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.ufs.sh",
        pathname: "/f/*",
      },
    ],
  },
};

export default nextConfig;
