import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Mail, MapPin, MessageSquareText, Phone } from "lucide-react"
import { TechBadge } from "@/components/badge"
import { JsonLd } from "@/components/json-ld"
import { Breadcrumbs, Container, Section, SectionHeading } from "@/components/sections"
import { contact } from "@/lib/content"
import { breadcrumbSchema } from "@/lib/schema"
import { business, cities, nap } from "@/lib/site"

const seo = {
  title: "Contact R&M Sanitation | Lompoc CA",
  description:
    "Call Francisco direct: (805) 757-9015. Text for a written quote. Hablamos español. Serving SLO + Santa Barbara counties.",
}

export const metadata: Metadata = {
  title: { absolute: seo.title },
  description: seo.description,
  alternates: { canonical: "/contact" },
  openGraph: { title: seo.title, description: seo.description, url: "/contact" },
}

const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${nap.streetLine}, ${nap.cityLine}`,
)}`

// Contact (plan §4): phone first, text second, email third. No form until a destination
// is decided; no hours until Francisco confirms them (BUILD-DECISIONS.md).
export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="contact-title" className="border-b border-border">
        <Container className="py-14 md:py-20">
          <Breadcrumbs current="Contact" />
          <h1 id="contact-title" className="mt-6 max-w-3xl text-h1 tracking-tight">
            {contact.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-foreground/85">{contact.body}</p>
          <TechBadge boxed className="mt-6">
            {business.spanishBadge}
          </TechBadge>

          <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border lg:grid-cols-[3fr_2fr]">
            <a
              href={business.phone.tel}
              className="group flex flex-col justify-between gap-10 bg-primary p-8 text-primary-foreground transition-colors hover:bg-primary-hover md:p-10"
            >
              <span className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase">
                <Phone aria-hidden="true" className="size-4" />
                Call Francisco
              </span>
              <span className="font-heading text-[clamp(2.5rem,7vw,4.5rem)] leading-none font-bold tracking-tight">
                {business.phone.display}
              </span>
              <span className="text-sm">Tap to call</span>
            </a>
            <div className="grid gap-px bg-border">
              <a
                href={business.phone.sms}
                className="flex flex-col gap-3 bg-card p-8 transition-colors hover:bg-background"
              >
                <span className="flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground uppercase">
                  <MessageSquareText aria-hidden="true" className="size-4" />
                  Text for a written quote
                </span>
                <span className="font-heading text-h3 font-bold">{business.phone.display}</span>
              </a>
              <a
                href={`mailto:${business.email}`}
                className="flex flex-col gap-3 bg-card p-8 transition-colors hover:bg-background"
              >
                <span className="flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground uppercase">
                  <Mail aria-hidden="true" className="size-4" />
                  Email
                </span>
                <span className="text-body-lg font-semibold break-all">{business.email}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Section surface="light" labelledBy="service-area">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="service-area" eyebrow="01" title="Service area" />
            <p className="mt-8 text-body-lg text-muted-foreground">
              {business.serviceCounties.join(" and ")}, from our {business.address.city} base.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-px border border-border bg-border">
              {cities.map((c) => (
                <li key={c.slug} className="bg-card">
                  {c.published ? (
                    <Link href={c.href} className="block p-4 font-semibold hover:text-primary">
                      {c.name}
                    </Link>
                  ) : (
                    <span className="block p-4 text-foreground/70">{c.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading id="visit" eyebrow="02" title="Our base" />
            <address className="mt-8 border border-border bg-card p-8 text-body-lg not-italic">
              <span className="font-heading text-h4 font-semibold">{business.name}</span>
              <br />
              {nap.streetLine}
              <br />
              {nap.cityLine}
              <br />
              <a href={business.phone.tel} className="font-semibold hover:text-primary">
                {business.phone.display}
              </a>
            </address>
            <a
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
            >
              <MapPin aria-hidden="true" className="size-4" />
              Get directions
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </Section>

      <JsonLd data={breadcrumbSchema({ name: "Contact", path: "/contact" })} />
    </>
  )
}
