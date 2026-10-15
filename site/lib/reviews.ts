/**
 * Reviews (data-gated container).
 *
 * Plan §1/§7: /reviews fills when ≥10 real, exported reviews exist. Never invent
 * reviews, counts or ratings (guardrail #4). Review / AggregateRating schema is only
 * allowed once this list is real and above the threshold.
 */
export type Review = {
  author: string
  text: string
  rating: number
  date: string // ISO
  source: "Google" | "Other"
}

export const REVIEWS_MIN = 10

export const reviews: Review[] = []

export const reviewsAreLive = reviews.length >= REVIEWS_MIN
