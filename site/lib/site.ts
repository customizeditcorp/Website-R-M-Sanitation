/**
 * R&M Sanitation — single source of business data.
 *
 * Feeds the footer, trust bar, root metadata and every JSON-LD block. Change a fact
 * here and it propagates everywhere. Sources, in order of authority:
 *   - Website Build Plan v1.0 (05-Website) — decisions, SEO, schema
 *   - Business Brief v1.1 §1 (02-Brief-OFV) — canonical NAP and legal entities
 *
 * Anything not yet confirmed by the owner is typed as `Unconfirmed` and must never be
 * published as fact (global guardrail #5). Consumers check `confirmed` first.
 */

// ── Canonical host (guardrail #2) ────────────────────────────────────────────
// www vs apex decided in the Build Plan Decision Ledger. Canonical, OG, sitemap,
// robots and every schema url/@id derive from this one constant.
export const siteUrl = "https://www.rmsanitation.com" as const

export function absoluteUrl(path = "/") {
  return path === "/" ? siteUrl : `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`
}

// ── Confirmation status ──────────────────────────────────────────────────────
export type Unconfirmed<T> =
  | { confirmed: true; value: T }
  | { confirmed: false; workingAssumption?: T; note: string }

// ── Business ─────────────────────────────────────────────────────────────────
export const business = {
  id: `${siteUrl}/#business`,
  name: "R&M Sanitation",
  // Operating entity — carries USDOT, insurance and bond (Brief v1.1 copy warning #2)
  legalName: "R & M Quality Truck Body LLC",
  legalNameShort: "R & M QTB",
  // Not yet the operating entity — only mentioned as "in formation"
  legalNameInFormation: "R & M Sanitation LLC",

  owner: { name: "Francisco Ramirez", role: "Owner" },

  phone: {
    display: "(805) 757-9015",
    e164: "+18057579015",
    schema: "+1-805-757-9015",
    tel: "tel:+18057579015",
    sms: "sms:+18057579015",
  },
  // C3 operational account; no corporate email exists yet (Brief v1.1 §1)
  email: "rmsanititationservice@gmail.com",

  // Canonical NAP — Brief v1.1 §1, used verbatim everywhere for citation consistency
  address: {
    street: "1625 Laurel Ave, Suite B",
    city: "Lompoc",
    region: "CA",
    postalCode: "93436",
    country: "US",
  },
  geo: { latitude: 34.6391, longitude: -120.4579 },

  usdot: "451529",

  // Francisco's PERSONAL experience — never the entity's age (copy warning #1)
  experienceYears: 20,
  experienceLabel: "20+ Years of Field Experience",

  languages: ["English", "Spanish"],
  spanishBadge: "Hablamos español",

  serviceCounties: ["San Luis Obispo County", "Santa Barbara County"],
  serviceRegion: "Central Coast",

  insurance: {
    active: true,
    heldBy: "R & M Quality Truck Body LLC",
    carrier: {
      confirmed: false,
      note: "Carrier name + policy limits pending from Francisco (Brief v1.1 §1)",
    } as Unconfirmed<string>,
  },
  bond: {
    active: true,
    heldBy: "R & M Quality Truck Body LLC",
    surety: {
      confirmed: false,
      note: "Surety name + bond number pending from Francisco (Brief v1.1 §1)",
    } as Unconfirmed<string>,
  },

  // [TO CONFIRM] — kept out of schema and visible copy until Francisco confirms
  hours: {
    confirmed: false,
    workingAssumption: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "17:00",
      },
    ],
    note: "Working assumption Mon–Sat 7am–5pm (Build Plan §7/§10); confirm with Francisco",
  } as Unconfirmed<{ days: string[]; opens: string; closes: string }[]>,

  // Empty until real social profiles exist (Build Plan §7)
  sameAs: [] as string[],
  priceRange: "$$",
} as const

export const nap = {
  line: `${business.name} ${business.address.street}, ${business.address.city}, ${business.address.region} ${business.address.postalCode} ${business.phone.display}`,
  streetLine: business.address.street,
  cityLine: `${business.address.city}, ${business.address.region} ${business.address.postalCode}`,
}

// ── Calls to action (phone-first; the form is only a fallback) ──────────────
export const cta = {
  call: {
    label: `Call Francisco: ${business.phone.display}`,
    href: business.phone.tel,
  },
  text: {
    label: "Text for a Written Quote",
    href: business.phone.sms,
  },
} as const

// ── Trust bar (Build Plan §5, left to right) ────────────────────────────────
export const trustItems = [
  { id: "usdot", label: `USDOT ${business.usdot}` },
  { id: "experience", label: business.experienceLabel, count: business.experienceYears },
  { id: "insured-bonded", label: `Insured + Bonded (${business.legalNameShort})` },
  { id: "osha", label: "OSHA-Aware Service" },
  { id: "spanish", label: "Hablamos Español" },
  { id: "counties", label: "Serving SLO + Santa Barbara Counties" },
] as const

// Site-wide LocalBusiness areaServed — Build Plan §7, as written
const areaServedCities = [
  "Lompoc",
  "Santa Maria",
  "Santa Barbara",
  "San Luis Obispo",
  "Nipomo",
  "Guadalupe",
  "Paso Robles",
] as const
export const areaServed = areaServedCities

// ── Services (one dedicated page each — Build Plan §1, §6) ──────────────────
export type Service = {
  slug: string
  href: string
  name: string
  navLabel: string
  h1: string
  metaTitle: string
  metaDescription: string
  star?: boolean
  /** schema.org Service — Build Plan §7 */
  schema?: {
    serviceType: string
    name: string
    description: string
    areaServed: string[]
  }
}

export const services: Service[] = [
  {
    slug: "agricultural-portable",
    href: "/services/agricultural-portable",
    name: "Agricultural Portable Sanitation",
    navLabel: "Agricultural Portable",
    h1: "Agricultural Portable Sanitation for Central Coast Crews.",
    metaTitle: "Agricultural Portable Restrooms | Central Coast CA",
    metaDescription:
      "OSHA-compliant portable restrooms + service logs for farm crews across SLO and Santa Barbara. Written quote. Call Francisco direct.",
    star: true,
    schema: {
      serviceType: "Agricultural Portable Sanitation",
      name: "Agricultural Portable Sanitation for Central Coast Crews",
      description:
        "OSHA-compliant portable restrooms and hand-wash stations for farm crews, with written service logs for Cal/OSHA Field Sanitation compliance.",
      areaServed: ["Lompoc", "Santa Maria", "Guadalupe", "Santa Ynez Valley"],
    },
  },
  {
    slug: "portable-restrooms-events",
    href: "/services/portable-restrooms-events",
    name: "Portable Restrooms for Outdoor Events",
    navLabel: "Outdoor Events",
    h1: "Portable Restrooms for Outdoor Events on the Central Coast.",
    metaTitle: "Portable Restrooms for Outdoor Events | Central Coast",
    metaDescription:
      "Clean, on-time portable restrooms for farm weddings, festivals, and outdoor events across the Central Coast. Call (805) 757-9015.",
    // Derived from plan copy (BUILD-DECISIONS.md) — plan §7 only shows the ag example
    schema: {
      serviceType: "Portable Restrooms for Outdoor Events",
      name: "Portable Restrooms for Outdoor Events on the Central Coast",
      description:
        "Clean, on-time portable restrooms for farm weddings, festivals, and outdoor events across the Central Coast.",
      areaServed: [...areaServedCities],
    },
  },
  {
    slug: "septic-pumping",
    href: "/services/septic-pumping",
    name: "Septic Pumping",
    navLabel: "Septic Pumping",
    h1: "Residential and Commercial Septic Pumping on the Central Coast.",
    metaTitle: "Septic Pumping, Central Coast CA | R&M Sanitation",
    metaDescription:
      "Residential + commercial septic pumping with written estimates and photo service records. Same/next-day. Call (805) 757-9015.",
    // Derived from plan copy (BUILD-DECISIONS.md) — plan §7 only shows the ag example
    schema: {
      serviceType: "Septic Pumping",
      name: "Residential and Commercial Septic Pumping on the Central Coast",
      description:
        "Residential + commercial septic pumping with written estimates and photo service records.",
      areaServed: [...areaServedCities],
    },
  },
]

// ── Cities (data-gated — guardrail #3, anti-doorway) ────────────────────────
// `published: false` → no route, no sitemap entry, no internal link. Flip only when
// the city has a real local photo + real local context (Build Plan §1).
// Publishing a city = set `published: true`, add its intro to lib/content.ts
// (cityContent) and add app/areas/<slug>/page.tsx rendering <CityPage slug="…" />.
export type City = {
  slug: string
  href: string
  name: string
  published: boolean
  h1?: string
  metaTitle?: string
  metaDescription?: string
}

export const cities: City[] = [
  {
    slug: "lompoc",
    href: "/areas/lompoc",
    name: "Lompoc",
    published: true,
    h1: "Portable Sanitation and Septic in Lompoc.",
    metaTitle: "Portable Sanitation + Septic in Lompoc | R&M",
    metaDescription:
      "Lompoc-based portable sanitation and septic pumping. 20+ yrs on the Central Coast. Hablamos español. Call Francisco: (805) 757-9015.",
  },
  {
    slug: "santa-maria",
    href: "/areas/santa-maria",
    name: "Santa Maria",
    // Published on hyperlocal context without a local photo (approved by Luis 2026-10-14)
    published: true,
    h1: "Portable Sanitation and Septic in Santa Maria.",
    metaTitle: "Portable Sanitation + Septic in Santa Maria | R&M",
    metaDescription:
      "On-time portable restrooms and septic pumping for the Santa Maria corridor. Written quotes. Call Francisco: (805) 757-9015.",
  },
  { slug: "santa-barbara", href: "/areas/santa-barbara", name: "Santa Barbara", published: false },
  { slug: "san-luis-obispo", href: "/areas/san-luis-obispo", name: "San Luis Obispo", published: false },
  { slug: "santa-ynez-valley", href: "/areas/santa-ynez-valley", name: "Santa Ynez Valley", published: false },
  { slug: "nipomo", href: "/areas/nipomo", name: "Nipomo", published: false },
  { slug: "guadalupe", href: "/areas/guadalupe", name: "Guadalupe", published: false },
  { slug: "paso-robles", href: "/areas/paso-robles", name: "Paso Robles", published: false },
]

export const publishedCities = cities.filter((c) => c.published)

// ── Navigation ───────────────────────────────────────────────────────────────
export const mainNav = [
  { href: "/#services", label: "Services" },
  { href: "/#areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
] as const

// /legal/terms and /legal/privacy are in the plan's sitemap but have no text yet.
// Hidden until the client delivers the legal copy (BUILD-DECISIONS.md) — never invented.
// Restore: { href: "/legal/terms", label: "Terms" }, { href: "/legal/privacy", label: "Privacy" }
export const legalNav: { href: string; label: string }[] = []

// ── Home SEO (Build Plan §6) ─────────────────────────────────────────────────
export const homeSeo = {
  title: "R&M Sanitation | Portable + Septic, Central Coast CA",
  description:
    "Owner-run portable sanitation + septic pumping on the Central Coast. 20+ yrs. Francisco answers. Call (805) 757-9015. Hablamos español.",
} as const

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug)
}
