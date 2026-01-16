import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel için standalone output gerekmiyor ama Docker build için gerekli
  output: "standalone",
};

export default nextConfig;
