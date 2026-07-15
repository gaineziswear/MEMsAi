import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Move reactCompiler to the root level
  reactCompiler: true, 

  experimental: {
    // Remove "reactCompiler" from here
  },

  // 2. Remove the "eslint" block entirely from this file
};

export default nextConfig;
