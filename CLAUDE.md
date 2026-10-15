# R&M Sanitation Services — Project CLAUDE.md

## Business

- Brand: R&M Sanitation

- Legal entity (operating): R & M Quality Truck Body LLC (R & M QTB)

- Legal entity (in formation): R & M Sanitation LLC

- Owner: Francisco Ramirez

- Address: 1625 Laurel Ave Suite B, Lompoc, CA 93436

- Phone: (805) 757-9015

- Site language: English

- Hablamos español (team is bilingual; site is EN only at launch)

## Architecture pattern

Silo service + city (adapted for 3 service lines + 10 cities)

## Lever (from Value Offer v1.0, Component 0)

- Primary: Risk/Trust — the vendor's failure becomes the FLC/grower's OSHA citation

- Secondary: Craft — Francisco personally runs every account (owner-run service posture, no claimed proprietary method)

- Visual anchor researched in Refero: Andercore — industrial trade, dark control panel, sharp red accent

## Business differentiators (must survive to copy)

1. Francisco personally answers the phone — no menu, no dispatcher

2. Written service schedule — miss a cycle, you don't pay it

3. Service logs on request — hand them to OSHA/DIR

4. 3 modern service trucks of different capacities (rural road access)

5. 20+ years of PERSONAL experience (never "20 years in business")

6. USDOT 451529 active, insured + bonded under R & M QTB

## Hard copy warnings

- NEVER say "20 years in business" or "established 2004" — it's Francisco's personal experience, not the entity's

- Footer MUST show both "R&M Sanitation" (brand) and "R & M Quality Truck Body LLC" (operating entity)

- NEVER mention CSLB license — not applicable, septic is pumping-only, portable + events don't need it

- The septic install/repair partner is operational, NOT disclosed on the site — present end-to-end as R&M

- Site language is English (audience is anglo per owner); "Hablamos español" is a visible BADGE, not a translated site

- NO luxury event trailers — R&M carries standard units only. Position events as outdoor/farm weddings/festivals, never wine-country premium

## Design constraints

- Palette: brand red #be1622, white #ffffff, near-black #0a0a0a, slate #64748B, cream #f8f8f8 — see brandboard Block 8

- Dark-first layout (fondo primario #0a0a0a) — intentional divergence from brandboard default, authorized by Refero research

- Typography: Barlow (headings) + Inter (body + CTA)

- Radius: 4px buttons, 0–8px content cards (echoes logo plate)

- Phone-first CTA on every page — form is fallback for Jessica/Linda personas, never primary for Hector

## Where the content lives

- /02-Brief-OFV/ — Brief, Buyer Persona, Value Offer (never override; cite as source)

- /03-Brandboard/ — Brandboard v1.0 + logo variants (reversed-white.svg for dark footer; icon-square.svg for favicon source)

- /04-Fotos/02-procesadas/ — field + truck + Francisco photos (processed by Cowork)

- /05-Website/ — THIS build plan + sitemap + copy + SEO + schema

- /06-Entregables/ — final export, launch checklist, NAP document

## Hard guardrails (from c3-website-build)

1. Server-rendered output — copy, alt, JSON-LD in initial HTML (verify with JS disabled)

2. One canonical host: www.rmsanitation.com — fix in lib/site.ts

3. Anti-doorway — city pages only when real content exists

4. Verifiable claims only — no invented testimonials, review counts, or ratings

5. Legal: USDOT 451529 in footer (not CSLB — not applicable)

6. No cross-client visual collision — handled (only sanitation client in pipeline)
