import type { Metadata } from "next"
import { ContainerHero } from "@/components/container-page"
import { JsonLd } from "@/components/json-ld"
import { Container, FinalCta } from "@/components/sections"
import { home, reviewsPage } from "@/lib/content"
import { reviews, reviewsAreLive } from "@/lib/reviews"
import { breadcrumbSchema } from "@/lib/schema"

// Container until REVIEWS_MIN real exported reviews exist (plan §1/§7). No Review or
// AggregateRating schema until then — and never with invented reviews.
export const metadata: Metadata = {
  title: { absolute: reviewsPage.seo.title },
  description: reviewsPage.seo.description,
  alternates: { canonical: "/reviews" },
  robots: reviewsAreLive ? undefined : { index: false, follow: true },
}

export default function ReviewsPage() {
  return (
    <>
      <ContainerHero
        crumb="Reviews"
        title={reviewsPage.h1}
        placeholder={reviewsAreLive ? undefined : reviewsPage.placeholder}
      />
      {reviewsAreLive && (
        <Container className="py-16">
          <ul className="grid gap-px border border-border bg-border md:grid-cols-2">
            {reviews.map((r) => (
              <li key={`${r.author}-${r.date}`} className="bg-background p-6">
                <blockquote>{r.text}</blockquote>
                <p className="mt-4 text-sm text-muted-foreground">
                  — {r.author}, {r.source}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      )}
      <FinalCta title={home.finalCta} />
      <JsonLd data={breadcrumbSchema({ name: "Reviews", path: "/reviews" })} />
    </>
  )
}
