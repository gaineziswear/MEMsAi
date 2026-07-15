import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enabled at the root level for Next.js 16
  reactCompiler: true, 

  experimental: {
    // Keep other experimental options here if you have any, otherwise leave it empty
  },
};

export default nextConfig;
