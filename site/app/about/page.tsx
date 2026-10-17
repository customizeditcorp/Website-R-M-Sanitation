import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { GridBackdrop, TechBadge } from "@/components/badge"
import { JsonLd } from "@/components/json-ld"
import {
  Breadcrumbs,
  Container,
  FinalCta,
  Section,
  SectionHeading,
} from "@/components/sections"
import { about, home } from "@/lib/content"
import { focus, photos } from "@/lib/images"
import { breadcrumbSchema } from "@/lib/schema"
import { business, cities } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: about.seo.title },
  description: about.seo.description,
  alternates: { canonical: "/about" },
  openGraph: { title: about.seo.title, description: about.seo.description, url: "/about" },
}

// About (plan §4): hero + story → the 3 trucks → the operating entity → service area → CTA.
// Francisco's field portrait doesn't exist yet (placement-map) — no stand-in photo of a
// person; the hero carries his own words instead.
export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-title" className="relative isolate overflow-hidden border-b border-border">
        <GridBackdrop />
        <Container className="grid grid-cols-1 gap-12 py-14 md:py-20 lg:grid-cols-[3fr_2fr] lg:items-end">
          <div>
            <Breadcrumbs current="About" />
            <h1 id="about-title" className="mt-6 max-w-3xl text-h1 tracking-tight">
              {about.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-foreground/85">{about.story}</p>
          </div>
          <figure className="border-l-2 border-primary pl-6">
            <blockquote className="font-heading text-h3 font-semibold">
              &ldquo;{home.quote.text}&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm text-muted-foreground">
              — {home.quote.author}, {home.quote.role}
            </figcaption>
          </figure>
        </Container>
      </section>

      <Section labelledBy="about-trucks">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="about-trucks" eyebrow="01" title="The 3 trucks" />
            <p className="mt-8 text-body-lg text-muted-foreground">{about.trucks}</p>
            <ul className="mt-8 grid gap-px border border-border bg-border">
              {home.trucks.items.map((t) => (
                <li key={t.label} className="flex items-baseline gap-4 bg-background p-5">
                  <TechBadge>{t.label}</TechBadge>
                  <span className="font-heading text-h4 font-semibold">{t.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={photos.truckRanch.src}
              alt={photos.truckRanch.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              style={focus(photos.truckRanch)}
            />
          </div>
        </div>
      </Section>

      <Section surface="shade" labelledBy="about-entity">
        <SectionHeading id="about-entity" eyebrow="02" title="The operating entity" />
        <p className="mt-8 max-w-3xl text-body-lg text-muted-foreground">{about.entity}</p>
        <dl className="mt-10 grid max-w-3xl grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
          <div className="bg-background p-5">
            <dt className="text-xs text-muted-foreground">Brand</dt>
            <dd className="mt-1 font-semibold">{business.name}</dd>
          </div>
          <div className="bg-background p-5">
            <dt className="text-xs text-muted-foreground">Operating entity</dt>
            <dd className="mt-1 font-semibold">{business.legalName}</dd>
          </div>
          <div className="bg-background p-5">
            <dt className="text-xs text-muted-foreground">USDOT</dt>
            <dd className="mt-1 font-mono font-semibold">{business.usdot}</dd>
          </div>
        </dl>
      </Section>

      <Section surface="light" labelledBy="about-area">
        <SectionHeading id="about-area" eyebrow="03" title="Service area" />
        <p className="mt-8 text-body-lg text-muted-foreground">
          {business.serviceCounties.join(" and ")}, from our {business.address.city} base.
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
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
      </Section>

      <Section labelledBy="about-closing">
        <p id="about-closing" className="max-w-3xl font-heading text-h2 font-bold tracking-tight">
          {about.closing}
        </p>
      </Section>

      <FinalCta title={home.finalCta} />

      <JsonLd data={breadcrumbSchema({ name: "About", path: "/about" })} />
    </>
  )
}
