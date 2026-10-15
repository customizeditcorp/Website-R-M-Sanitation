/**
 * Page copy — Website Build Plan v1.0 §5, verbatim unless marked EDIT.
 * Every EDIT is either a decision logged in BUILD-DECISIONS.md or a sentence removed
 * because Value Offer v1.0 marks the underlying commitment [TO CONFIRM] (guardrail #5).
 */
import type { Faq } from "@/lib/schema"

// ── Home ────────────────────────────────────────────────────────────────────
export const home = {
  h1: "On time, every cycle. Francisco answers the phone.",
  subhead:
    "Portable sanitation for Central Coast ag crews, outdoor events, and residential septic — serviced by Francisco's team since Day One. Three modern trucks. Over twenty years in the field. One phone number.",
  quote: {
    text: "When you call this number, you get me. Not an office.",
    author: "Francisco Ramirez",
    role: "Owner",
  },
  protect: {
    title: "How We Protect Your Operation",
    cards: [
      {
        title: "A written service schedule, in advance.",
        body: "You know the day. You know the time window. Miss a cycle on us? You don't pay that cycle.",
      },
      {
        title: "Service logs on request.",
        body: "Date-stamped, unit-by-unit records. Hand them to a Cal/OSHA inspector or your grower contact without a search.",
      },
      {
        title: "Direct line to the owner.",
        body: "No phone menu. No dispatcher. During harvest peak, Francisco picks up the phone — in English or Spanish — day or night.",
      },
    ],
  },
  why: {
    title: "Why R&M",
    body: [
      "Francisco Ramirez has been in sanitation on the Central Coast for over twenty years. The R&M Sanitation brand is new. The hands running your account aren't.",
      "R&M operates under R & M Quality Truck Body LLC — the operating entity that carries the active USDOT, insurance, and bond — with three modern service trucks sized for different ranch access profiles. Owner-run. Direct. Deliverable.",
    ],
  },
  trucks: {
    title: "Three Modern Service Trucks",
    items: [
      { label: "Truck 01", title: "Equipped for rural access" },
      { label: "Truck 02", title: "Pumping capacity for commercial septic" },
      { label: "Truck 03", title: "Weekly service routes for ag season" },
    ],
  },
  services: {
    title: "Services",
    // Card lines from plan §6 meta descriptions, without the CTA tail
    blurbs: {
      "agricultural-portable":
        "OSHA-compliant portable restrooms + service logs for farm crews across SLO and Santa Barbara.",
      "portable-restrooms-events":
        "Clean, on-time portable restrooms for farm weddings, festivals, and outdoor events across the Central Coast.",
      "septic-pumping":
        "Residential + commercial septic pumping with written estimates and photo service records.",
    } as Record<string, string>,
  },
  gallery: { title: "Field work on the Central Coast", link: "View all photos" },
  // Placeholder copy rendered in app/page.tsx with the phone as a tap-to-call link
  reviews: { title: "Reviews" },
  areas: { title: "Areas Served" },
  finalCta: "Need units on-site this week? Call Francisco directly.",
}

// ── /services/agricultural-portable ─────────────────────────────────────────
export const agricultural = {
  // EDIT: dropped "...a written quote in under an hour during business days" — the
  // 1-hour quote turnaround is [TO CONFIRM] in Value Offer Component 8.
  lead: "If your field crew needs OSHA-compliant restrooms and hand-wash stations, R&M delivers on-site, services on your schedule, and documents every service — so your DIR file stays clean and your crew keeps picking. One phone call to Francisco gets you a written quote.",
  included: [
    "Pre-season walk-through of the ranch to confirm road access and unit placements",
    "Written service agreement specifying unit count, locations, service days, and billing cycle",
    "Scheduled weekly service via one of three modern R&M trucks (sized for different access profiles)",
    "Driver photographs each unit on-site at delivery and texts the photo to you",
    "Service logs on request — date-stamped, unit-by-unit",
    "Written quote before units ship — final invoice matches",
    "Monthly or per-cycle invoicing aligned to grower piece-rate accounting",
    "Direct line to Francisco for crisis response",
    "Same-day emergency response during May–October peak",
    "Mid-season crew expansion: 48–72 hours from text to units on the ground",
  ],
  // EDIT: "you get Francisco or a Spanish-speaking dispatcher" → Francisco only
  // (BUILD-DECISIONS.md, dispatcher copy).
  howItWorks:
    "When you call, you get Francisco — in English or Spanish — not a menu, not voicemail. We schedule a walk-through of the ranch before season to confirm which roads our trucks can handle and where units go for crew access and OSHA compliance (one toilet per twenty workers, within a five-minute walk, serviced regularly). We send you a written quote with unit count, service days, weekly price, and billing cycle. Once you approve, delivery happens in the window — the driver photographs each unit on-site and texts you the photo. Every scheduled service after that happens on the day the agreement says.",
  why: [
    "Trucks sized for rural road access, not just the ranch gate",
    "Francisco grew up driving these roads — walk-through before season tells you up front if we can service a block",
    "Service logs part of the agreement, not an upcharge",
    "Spanish-first response during peak",
  ],
  faqs: [
    {
      question: "What if a service is missed?",
      answer: "You don't pay for that cycle. In writing, up front.",
    },
    {
      question: "How fast can you get units on-site for a new crew mid-season?",
      answer:
        "Forty-eight to seventy-two hours from the text message during peak season for existing accounts.",
    },
    {
      question: "My ranch road doesn't fit most service trucks. Will yours?",
      answer:
        "Three different truck capacities. We walk the ranch with you before season starts — if we can't service a spot, we tell you up front, not day-of.",
    },
    {
      question: "Can I get documentation for a Cal/OSHA Field Sanitation inspection?",
      answer: "Yes. Service logs are available on request, with dates, times, and unit locations.",
    },
    {
      question: "Does the office speak Spanish?",
      // EDIT: dispatcher removed (BUILD-DECISIONS.md).
      answer: "You get Francisco — in English or Spanish — not a call-center menu.",
    },
    {
      question: "What are the billing cycles?",
      // EDIT: dropped "Zelle, ACH, check, or card at no surcharge." — payment terms are a
      // working position pending Francisco's confirmation (Value Offer Component 4).
      answer: "Weekly or monthly, aligned to how you bill your grower.",
    },
  ] satisfies Faq[],
  finalCta: "Need units on-site this week? Call Francisco directly.",
}

// ── /services/portable-restrooms-events ─────────────────────────────────────
// Positioned for budget outdoor events — standard units only, never luxury trailers
// (project CLAUDE.md copy warning; Persona v1.1 "Jessica").
export const events = {
  lead: "Farm weddings, festivals, community events, outdoor corporate gatherings. R&M delivers clean, stocked standard portable restrooms, sets them up two to three hours before guests arrive, and picks up after the event. One phone call gets you a per-event price with no surprises.",
  included: [
    "Standard portable restroom units — clean, stocked, delivered before guests arrive",
    "Delivery and pickup within the event window",
    "Single-point contact for the day of the event",
    "Written quote per event with a deposit-based booking",
    "Hand-wash stations available on request",
    "Spanish or English coordination",
  ],
  honestFit:
    "R&M carries standard units — not luxury trailers, not standalone flushing units. If your event budget calls for a premium wine-country restroom trailer, we're not the right fit, and we'll tell you up front. For budget-conscious outdoor events where clean, on-time delivery and reliable service are what matter, we're exactly the right call.",
  faqs: [
    {
      question: "How far in advance should I book?",
      answer: "Two to eight weeks ahead is typical. Minimum two weeks for new accounts.",
    },
    {
      question: "Do you deliver before guests arrive?",
      answer: "Yes. Standard delivery window is two to three hours before your event starts.",
    },
    {
      question: "Do you have luxury trailers?",
      answer:
        "No. R&M carries standard units only. If you need a premium restroom trailer for a wine-country wedding, we'll point you to a provider who specializes in that.",
    },
    {
      question: "Do you provide hand-wash stations?",
      answer: "Yes, on request. Priced separately.",
    },
    {
      question: "How do you handle delivery on uneven venue terrain?",
      answer:
        "Walk-through with the venue coordinator before the event. If a spot isn't accessible for our trucks, we tell you up front.",
    },
  ] satisfies Faq[],
  finalCta: "Need units on-site this week? Call Francisco directly.",
}

// ── /services/septic-pumping ────────────────────────────────────────────────
// End-to-end as R&M — the install/repair partner is never named (copy warning).
export const septic = {
  lead: "Toilet draining slow, odor in the yard, or a scheduled pre-sale inspection flagged your tank? R&M pumps septic tanks across SLO and Santa Barbara counties, provides a written estimate before work begins, and gives you a one-page service record with tank photos and a next-service-due date. Call Francisco for a same-day or next-day appointment.",
  included: [
    "Scheduled or same-day pumping, depending on urgency",
    "Written estimate before work begins",
    "One-page service record at completion (tank photos, condition notes, next-service-due date)",
    "Preventive maintenance reminders at three-to-five-year intervals",
    "End-to-end coverage: if the tank requires work beyond pumping, R&M handles it. One vendor, one invoice, one point of accountability.",
  ],
  howItWorks:
    "Call Francisco. We schedule same-day or next-day. The truck arrives in the window. The technician walks the site, locates the tank, and gives you a written estimate before any work starts. We pump the tank, document the condition in a one-page service record with photos, and leave you with a next-service-due date so you don't have to remember. If the tank needs more than pumping, we handle that too.",
  faqs: [
    {
      question: "How much does a septic pump cost?",
      answer:
        "Depends on tank size and access. You get a written estimate before any work starts — final invoice matches.",
    },
    {
      question: "How often should I pump my tank?",
      answer:
        "Every three to five years is typical for a household of four. We leave you with a next-service-due date after every service.",
    },
    {
      question: "What if my tank needs more than pumping?",
      answer:
        "We handle it. One vendor, one invoice, one point of accountability — you don't get sent off to another company to figure it out alone.",
    },
    {
      question: "Do you give estimates over the phone?",
      answer:
        "We give you a price range on the phone. The written estimate happens on-site, before work starts.",
    },
    {
      question: "Will you leave my yard clean?",
      answer:
        "Yes. We leave the area the way we found it, with the lid properly sealed and no truck ruts across the lawn when conditions allow.",
    },
  ] satisfies Faq[],
  // Plan §5 septic lead, closing sentence
  finalCta: "Call Francisco for a same-day or next-day appointment.",
}

// ── /areas/[city] ───────────────────────────────────────────────────────────
// Only published cities render (lib/site.ts). Intros are hyperlocal and unique per
// city — never a template with the name swapped (guardrail #3, anti-doorway).
export const cityContent: Record<string, { intro: string }> = {
  lompoc: {
    // EDIT: "1625 Laurel Avenue" → Brief v1.1 canonical "1625 Laurel Ave" (NAP decision);
    // dropped "within the hour" — 1-hour quote turnaround is [TO CONFIRM].
    intro:
      "Lompoc is R&M's home base. Our shop sits at 1625 Laurel Ave, Suite B, and our three trucks run routes across the Santa Ynez Valley, Guadalupe, and the Lompoc flower fields daily. For agricultural crews during peak season, outdoor events on rural properties, and residential septic across Lompoc — one phone call to Francisco gets you a written quote.",
  },
  "santa-maria": {
    // Written by Claude from plan §5 note + Value Offer Component 7; approved by Luis
    // 2026-10-14. Published without a local photo (BUILD-DECISIONS.md).
    intro:
      "Santa Maria sits in the Central Coast's strawberry and broccoli corridor, where a missed service in peak season lands on the crew and on the grower's file. From our Lompoc base, R&M serves Santa Maria Valley ranches with OSHA-compliant restrooms and hand-wash stations on a written weekly schedule, with service logs on request for a Cal/OSHA inspection. For strawberry season, book four to eight weeks out — late February to March for the April–July peak. Farm weddings, outdoor events, and residential septic across Santa Maria work the same way: one call to Francisco, one written quote.",
  },
}

// ── /about ──────────────────────────────────────────────────────────────────
// Plan §5 copy, verbatim. No "The Francisco Way" label: the method label is
// [TO CONFIRM] (Value Offer Component 2, plan §11) — story only, no named method.
export const about = {
  h1: "20+ years in sanitation on the Central Coast.",
  story:
    "Francisco Ramirez has been in sanitation on the Central Coast for over twenty years. He runs R&M Sanitation personally — he answers the phone, he walks the ranch before season, he dispatches the trucks, and he picks up the crisis call during harvest peak. No menu. No dispatcher. No voicemail.",
  entity:
    "R&M Sanitation operates under R & M Quality Truck Body LLC — the operating entity that carries the active USDOT 451529 registration, the commercial insurance, and the surety bond. R & M Sanitation LLC is in formation and will become the operating entity once the transition closes.",
  trucks:
    "Three modern service trucks of different capacities run from our Lompoc base across SLO and Santa Barbara counties. The trucks are sized intentionally — big enough to handle commercial septic and ag season volume, small enough to reach the back blocks of rural ranches.",
  closing: "That's it. Francisco, the trucks, the number. On time, every cycle.",
  seo: {
    title: "About R&M Sanitation | Francisco Ramirez, Owner",
    description:
      "20+ years in sanitation on the Central Coast. Owner-run. Three modern trucks. Operating under R & M Quality Truck Body LLC.",
  },
}

// ── /gallery + /reviews containers ──────────────────────────────────────────
export const galleryPage = {
  h1: "Field work on the Central Coast",
  // Placeholder written by Claude, modeled on the plan's approved reviews placeholder
  placeholder:
    "Photos from R&M jobs across the Central Coast are posted here as the season's work is documented. Meanwhile, call Francisco directly:",
  seo: {
    title: "Gallery | R&M Sanitation",
    description:
      "Field photos of R&M Sanitation units, trailers and trucks across the Central Coast.",
  },
}

export const reviewsPage = {
  h1: "Reviews",
  // Plan §4 reviews placeholder, verbatim (phone rendered as a tap-to-call link)
  placeholder: "Reviews coming as the first season closes. Meanwhile, call Francisco directly:",
  seo: {
    title: "Reviews | R&M Sanitation",
    description: "Customer reviews of R&M Sanitation, owner-run portable sanitation and septic on the Central Coast.",
  },
}

// ── /contact ────────────────────────────────────────────────────────────────
export const contact = {
  h1: "The fastest way to reach us is by phone.",
  // EDIT: plan body ("Francisco or a Spanish-speaking dispatcher within two rings …
  // callback within the hour") rests on the dispatcher decision and on the [TO CONFIRM]
  // response-time commitment. Rebuilt from differentiator #1 until Francisco confirms.
  body: "Call and you get Francisco — in English or Spanish. No menu, no dispatcher.",
  finalCta: "Need units on-site this week? Call Francisco directly.",
}
