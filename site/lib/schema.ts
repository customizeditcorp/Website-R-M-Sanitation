/**
 * JSON-LD builders — every value comes from lib/site.ts so schema, footer and trust
 * bar can never disagree. Rendered server-side by <JsonLd /> (guardrail #1).
 *
 * Deliberately absent: AggregateRating / Review (no real review export exists),
 * openingHoursSpecification (hours are [TO CONFIRM]).
 */
import {
  absoluteUrl,
  areaServed,
  business,
  siteUrl,
  type Service,
} from "@/lib/site"

const context = "https://schema.org"

const city = (name: string) => ({ "@type": "City", name })

export function localBusinessSchema() {
  return {
    "@context": context,
    // Plan §7 adds "SepticSystemService" — not a schema.org type (404 on schema.org,
    // absent from the vocabulary). No real subtype fits portable sanitation + septic
    // pumping, so plain LocalBusiness (BUILD-DECISIONS.md).
    "@type": "LocalBusiness",
    "@id": business.id,
    name: business.name,
    legalName: business.legalName,
    url: siteUrl,
    telephone: business.phone.schema,
    email: business.email,
    image: absoluteUrl("/opengraph-image.jpg"),
    logo: absoluteUrl("/brand/rm-logo-color.svg"),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: areaServed.map(city),
    ...(business.hours.confirmed
      ? {
          openingHoursSpecification: business.hours.value.map((h) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: h.days,
            opens: h.opens,
            closes: h.closes,
          })),
        }
      : {}),
    identifier: [{ "@type": "PropertyValue", name: "USDOT", value: business.usdot }],
    knowsLanguage: business.languages,
    sameAs: business.sameAs,
    priceRange: business.priceRange,
  }
}

export function serviceSchema(service: Service) {
  if (!service.schema) return null
  return {
    "@context": context,
    "@type": "Service",
    serviceType: service.schema.serviceType,
    name: service.schema.name,
    description: service.schema.description,
    url: absoluteUrl(service.href),
    provider: { "@id": business.id },
    areaServed: service.schema.areaServed.map(city),
  }
}

export type Faq = { question: string; answer: string }

/** Text must match the visible FAQ — pass the same array the page renders. */
export function faqSchema(faqs: Faq[]) {
  return {
    "@context": context,
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }
}

/** Two levels: Home › Page (BUILD-DECISIONS.md — no /services hub). */
export function breadcrumbSchema(page: { name: string; path: string }) {
  return {
    "@context": context,
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: page.name, item: absoluteUrl(page.path) },
    ],
  }
}
