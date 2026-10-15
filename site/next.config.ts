import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  // Tailwind output is small (~8 KB gzip): inlining removes the render-blocking CSS
  // request, which Lighthouse showed delaying FCP/LCP on mobile (Step 8 QA).
  experimental: {
    inlineCss: true,
  },
  // AVIF first: ~30–40% lighter than WebP for the hero photo (LCP element on Home)
  images: {
    formats: ["image/avif", "image/webp"],
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
