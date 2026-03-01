import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // Static export for deployment
  images: { unoptimized: true },
  devIndicators: false,
};

export default nextConfig;
