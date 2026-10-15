import Link from "next/link"
import { ChevronRight, MessageSquareText, Phone } from "lucide-react"
import { TechBadge } from "@/components/badge"
import { Button } from "@/components/ui/button"
import { business, cta, trustItems } from "@/lib/site"
import type { Faq } from "@/lib/schema"
import { cn } from "@/lib/utils"

// ── Layout primitives ───────────────────────────────────────────────────────
export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4", className)}>{children}</div>
}

type Surface = "base" | "shade" | "light"
const surfaceClass: Record<Surface, string> = {
  base: "",
  shade: "surface-shade",
  light: "surface-light",
}

export function Section({
  surface = "base",
  id,
  className,
  children,
  labelledBy,
}: {
  surface?: Surface
  id?: string
  className?: string
  children: React.ReactNode
  labelledBy?: string
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(surfaceClass[surface], "py-16 md:py-24", className)}
    >
      <Container>{children}</Container>
    </section>
  )
}

/** Eyebrow badge + H2 + 2px red emphasis divider (Brandboard Block 6). */
export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  className,
}: {
  id: string
  eyebrow?: string
  title: string
  intro?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && <TechBadge>{eyebrow}</TechBadge>}
      <h2 id={id} className="mt-3 text-h2 tracking-tight">
        {title}
      </h2>
      <div aria-hidden="true" className="mt-5 h-0.5 w-12 bg-primary" />
      {intro && <div className="mt-6 text-body-lg text-muted-foreground">{intro}</div>}
    </div>
  )
}

// ── Calls to action ─────────────────────────────────────────────────────────
/** "Call Francisco: (805) 757-9015" — the number never breaks across lines. */
function CallLabel() {
  const [lead] = cta.call.label.split(business.phone.display)
  return (
    <span>
      {lead}
      <span className="whitespace-nowrap">{business.phone.display}</span>
    </span>
  )
}

export function CallButtons({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <Button size="cta" asChild>
        <a href={cta.call.href}>
          <Phone aria-hidden="true" />
          <CallLabel />
        </a>
      </Button>
      <Button
        size="cta"
        variant="ghost"
        asChild
        className="border border-white/15 bg-white/10 text-white hover:bg-white/20 hover:text-white"
      >
        <a href={cta.text.href}>
          <MessageSquareText aria-hidden="true" />
          {cta.text.label}
        </a>
      </Button>
    </div>
  )
}

/** Final CTA band — the one red section per page (Brandboard layout rules). */
export function FinalCta({ title }: { title: string }) {
  return (
    <section aria-labelledby="final-cta" className="bg-primary text-primary-foreground">
      <Container className="flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="final-cta" className="text-h2 tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-body-lg">
            <a href={business.phone.tel} className="font-semibold underline-offset-4 hover:underline">
              {business.phone.display}
            </a>{" "}
            · {business.spanishBadge}
          </p>
        </div>
        <Button size="cta" asChild className="bg-white text-primary hover:bg-white/90">
          <a href={cta.call.href}>
            <Phone aria-hidden="true" />
            <CallLabel />
          </a>
        </Button>
      </Container>
    </section>
  )
}

// ── Trust bar ───────────────────────────────────────────────────────────────
// Static, fully readable list. Motion (marquee / number ticker) is layered on top in
// Step 7 and must leave this markup readable with JS off.
export function TrustBar() {
  return (
    <section aria-label="Credentials" className="surface-shade border-y border-border">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 lg:justify-between">
          {trustItems.map((item) => (
            <li key={item.id} className="flex items-center gap-2 font-mono text-xs tracking-wider text-foreground/90 uppercase">
              <span aria-hidden="true" className="size-1.5 bg-primary" />
              {item.label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

// ── FAQ ─────────────────────────────────────────────────────────────────────
// Every answer is visible in the HTML (no accordion) — crawlers and answer engines
// read it, and the same array feeds FAQPage schema.
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <dl className="divide-y divide-border border-y border-border">
      {faqs.map((f) => (
        <div key={f.question} className="grid gap-2 py-6 md:grid-cols-[2fr_3fr] md:gap-8">
          <dt className="font-heading text-h4 font-semibold">{f.question}</dt>
          <dd className="text-muted-foreground">{f.answer}</dd>
        </div>
      ))}
    </dl>
  )
}

// ── Breadcrumbs (two levels: Home › Page) ───────────────────────────────────
export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 font-mono text-xs tracking-wider text-muted-foreground uppercase">
        <li>
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="size-3" />
        </li>
        <li aria-current="page" className="text-foreground/90">
          {current}
        </li>
      </ol>
    </nav>
  )
}

// ── Checklist ───────────────────────────────────────────────────────────────
export function CheckList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("grid gap-px border border-border bg-border sm:grid-cols-2", className)}>
      {items.map((item, i) => (
        <li key={item} className="flex gap-4 bg-background p-5">
          <span className="font-mono text-xs text-accent-highlight">{String(i + 1).padStart(2, "0")}</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
