import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
  eslint: {
    dirs: ["app", "components", "lib", "types"],
  },
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;