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

// ── /contact ────────────────────────────────────────────────────────────────
export const contact = {
  h1: "The fastest way to reach us is by phone.",
  // EDIT: plan body ("Francisco or a Spanish-speaking dispatcher within two rings …
  // callback within the hour") rests on the dispatcher decision and on the [TO CONFIRM]
  // response-time commitment. Rebuilt from differentiator #1 until Francisco confirms.
  body: "Call and you get Francisco — in English or Spanish. No menu, no dispatcher.",
  finalCta: "Need units on-site this week? Call Francisco directly.",
}
