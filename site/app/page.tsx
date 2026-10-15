import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { TechBadge } from "@/components/badge"
import {
  CallButtons,
  Container,
  FinalCta,
  Section,
  SectionHeading,
  TrustBar,
} from "@/components/sections"
import { home } from "@/lib/content"
import { galleryIsLive, photos, type Photo } from "@/lib/images"
import { business, cities, homeSeo, services } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: { absolute: homeSeo.title },
  description: homeSeo.description,
  alternates: { canonical: "/" },
}

const serviceImages: Record<string, Photo> = {
  "agricultural-portable": photos.agTrailerUnit,
  "portable-restrooms-events": photos.standardUnit,
  "septic-pumping": photos.septicLids,
}

const galleryStrip = [
  photos.agTrailerSinks,
  photos.interiorToilet,
  photos.interiorUrinal,
  photos.agTrailerHandWash,
]

// Section order follows the Risk/Trust lever (plan Decision Ledger):
// trust bar → how we protect → why R&M → trucks → services → gallery → reviews → areas → CTA
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      <Section labelledBy="protect">
        <SectionHeading id="protect" eyebrow="01" title={home.protect.title} />
        <ol className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
          {home.protect.cards.map((card, i) => (
            <li key={card.title} className="bg-background p-8">
              <TechBadge className="text-accent-highlight">{String(i + 1).padStart(2, "0")}</TechBadge>
              <h3 className="mt-4 text-h4 font-semibold">{card.title}</h3>
              <p className="mt-3 text-muted-foreground">{card.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section surface="shade" labelledBy="why">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden lg:order-last">
            <Image
              src={photos.agTrailerHandWash.src}
              alt={photos.agTrailerHandWash.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading id="why" eyebrow="02" title={home.why.title} />
            <div className="mt-8 space-y-5 text-body-lg text-muted-foreground">
              {home.why.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <dl className="mt-10 grid grid-cols-3 border-y border-border">
              <Stat value={`${business.experienceYears}+`} label="Years of field experience" />
              <Stat value="3" label="Modern service trucks" />
              <Stat value={business.usdot} label="USDOT" mono />
            </dl>
          </div>
        </div>
      </Section>

      <Section labelledBy="trucks">
        <SectionHeading id="trucks" eyebrow="03" title={home.trucks.title} />
        <ul className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
          {home.trucks.items.map((truck) => (
            <li key={truck.label} className="bg-background p-8">
              <TechBadge>{truck.label}</TechBadge>
              <p className="mt-4 font-heading text-h3 font-semibold">{truck.title}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section surface="shade" id="services" labelledBy="services-title">
        <SectionHeading id="services-title" eyebrow="04" title={home.services.title} />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const img = serviceImages[service.slug]
            return (
              <li key={service.slug}>
                <Link
                  href={service.href}
                  className={cn(
                    "group flex h-full flex-col border bg-background transition-colors hover:border-primary",
                    service.star ? "border-primary" : "border-border",
                  )}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-h4 font-semibold">{service.name}</h3>
                    <p className="mt-3 flex-1 text-muted-foreground">
                      {home.services.blurbs[service.slug]}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-highlight">
                      See {service.navLabel.toLowerCase()}
                      <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </Section>

      <Section labelledBy="gallery">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading id="gallery" eyebrow="05" title={home.gallery.title} />
          {/* Linked only once the gallery page has real content (plan §1, ≥20 photos) */}
          {galleryIsLive && (
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-highlight hover:underline"
            >
              {home.gallery.link}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          )}
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-4">
          {galleryStrip.map((p) => (
            <li key={p.src} className="relative aspect-square overflow-hidden">
              <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
            </li>
          ))}
        </ul>
      </Section>

      <Section surface="shade" labelledBy="reviews">
        <SectionHeading id="reviews" eyebrow="06" title={home.reviews.title} />
        <p className="mt-8 max-w-2xl text-body-lg text-muted-foreground">
          Reviews coming as the first season closes. Meanwhile, call Francisco directly:{" "}
          <a href={business.phone.tel} className="font-semibold text-foreground hover:underline">
            {business.phone.display}
          </a>
          .
        </p>
      </Section>

      <Section surface="light" id="areas" labelledBy="areas-title">
        <SectionHeading
          id="areas-title"
          eyebrow="07"
          title={home.areas.title}
        />
        {/* Only cities with a real page are links (anti-doorway, guardrail #3) */}
        <ul className="mt-10 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
          {cities.map((c) => (
            <li key={c.slug} className="bg-card">
              {c.published ? (
                <Link
                  href={c.href}
                  className="flex items-center justify-between p-5 font-heading text-h4 font-semibold hover:text-primary"
                >
                  {c.name}
                  <ArrowRight aria-hidden="true" className="size-4 text-primary" />
                </Link>
              ) : (
                <span className="block p-5 font-heading text-h4 font-semibold text-foreground/70">
                  {c.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </Section>

      <FinalCta title={home.finalCta} />
    </>
  )
}

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <Image
        src={photos.truckRanch.src}
        alt={photos.truckRanch.alt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      {/* Scrim ≥ 50% over photos with text (Brandboard Block 2) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-background/50"
      />
      <Container className="grid grid-cols-1 gap-10 py-20 md:py-28 lg:grid-cols-[3fr_2fr] lg:items-end">
        <div>
          <TechBadge boxed>Lompoc, CA · Central Coast</TechBadge>
          <h1 id="hero-title" className="mt-6 max-w-3xl text-h1 tracking-tight">
            {home.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-foreground/85">{home.subhead}</p>
          <figure className="mt-8 max-w-xl border-l-2 border-primary pl-5">
            <blockquote className="font-heading text-h4 font-semibold">
              &ldquo;{home.quote.text}&rdquo;
            </blockquote>
            <figcaption className="mt-2 text-sm text-muted-foreground">
              — {home.quote.author}, {home.quote.role}
            </figcaption>
          </figure>
        </div>

        <div className="border border-border bg-background/85 p-6 backdrop-blur md:p-8">
          <TechBadge>Direct line · {business.spanishBadge}</TechBadge>
          <p className="mt-4 font-heading text-h4 font-semibold">Call Francisco</p>
          <a
            href={business.phone.tel}
            className="mt-1 flex items-center gap-3 font-heading text-h2 font-bold tracking-tight hover:text-accent-highlight"
          >
            <Phone aria-hidden="true" className="size-7 text-primary" />
            {business.phone.display}
          </a>
          <CallButtons className="mt-6 [&>a]:w-full" />
        </div>
      </Container>
    </section>
  )
}

function Stat({ value, label, mono = false }: { value: string; label: string; mono?: boolean }) {
  return (
    <div className="py-5 pr-4">
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className={cn("mt-1 text-h3 font-bold", mono ? "font-mono text-h4" : "font-heading")}>
        {value}
      </dd>
    </div>
  )
}
