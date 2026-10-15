import type { MetadataRoute } from "next"
import { absoluteUrl } from "@/lib/site"

// Crawlable on the canonical host. Staging (*.vercel.app) is kept out of the index by
// the X-Robots-Tag header in next.config.ts, not here — robots.txt is built once and
// can't tell hosts apart.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  }
}
