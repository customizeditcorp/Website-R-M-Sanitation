import type { MetadataRoute } from "next"
import { galleryIsLive } from "@/lib/images"
import { reviewsAreLive } from "@/lib/reviews"
import { absoluteUrl, publishedCities, services } from "@/lib/site"

// Only indexable pages: data-gated containers (gallery, reviews) join when they go live,
// unpublished cities never appear (anti-doorway).
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    ...services.map((s) => s.href),
    ...publishedCities.map((c) => c.href),
    "/about",
    "/contact",
    ...(galleryIsLive ? ["/gallery"] : []),
    ...(reviewsAreLive ? ["/reviews"] : []),
  ]
  return paths.map((p) => ({ url: absoluteUrl(p) }))
}
