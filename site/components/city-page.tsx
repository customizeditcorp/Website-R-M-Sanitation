import { GridBackdrop } from "@/components/badge"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { JsonLd } from "@/components/json-ld"
import {
  Breadcrumbs,
  CallButtons,
  Container,
  FinalCta,
  Section,
  SectionHeading,
} from "@/components/sections"
import { cityContent, home } from "@/lib/content"
import { focus, isPortrait, photos, type Photo } from "@/lib/images"
import { breadcrumbSchema } from "@/lib/schema"
import { cn } from "@/lib/utils"
import { business, getCity, nap, services } from "@/lib/site"

// City template (plan §4): Hero + hyperlocal intro → services in [City] →
// local proof + NAP ("Serving [City] from our Lompoc base") → final CTA.
//
// Each published city gets its own static folder (app/areas/<slug>/page.tsx) that
// renders this template. A city without a folder has no route and returns a real 404 —
// a dynamic [city] route under Cache Components streamed a 200 + noindex instead.

// Real R&M work photo per city. Alt text never claims a location the photo
// can't prove (no GPS on any file — placement-map.md).
const cityPhoto: Record<string, Photo> = {
  lompoc: photos.truckRanch,
  // Bilingual hand-wash station: ag-crew context, no old "Quality Truck Body" decal
  "santa-maria": photos.agTrailerHandWash,
}

function resolve(slug: string) {
  const city = getCity(slug)
  const content = cityContent[slug]
  if (!city?.published || !content) return null
  return { city, content }
}

export function cityMetadata(slug: string): Metadata {
  const found = resolve(slug)
  if (!found) return {}
  const { city } = found
  return {
    title: { absolute: city.metaTitle ?? city.name },
    description: city.metaDescription,
    alternates: { canonical: city.href },
    openGraph: { title: city.metaTitle, description: city.metaDescription, url: city.href },
  }
}

export function CityPage({ slug }: { slug: string }) {
  const found = resolve(slug)
  if (!found) notFound()
  const { city, content } = found
  const photo = cityPhoto[city.slug]

  return (
    <>
      <section aria-labelledby="city-title" className="relative isolate overflow-hidden border-b border-border">
        <GridBackdrop />
        <Container className="py-14 md:py-20">
          <Breadcrumbs current={city.name} />
          <h1 id="city-title" className="mt-6 max-w-4xl text-h1 tracking-tight">
            {city.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-body-lg text-foreground/85">{content.intro}</p>
          <CallButtons className="mt-8" />
        </Container>
      </section>

      <Section labelledBy="city-services">
        <SectionHeading id="city-services" eyebrow="01" title={`Services available in ${city.name}`} />
        <ul className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug} className="rm-corners bg-background">
              <Link
                href={s.href}
                className="group flex h-full items-center justify-between gap-4 p-6 hover:text-accent-highlight"
              >
                <span className="font-heading text-h4 font-semibold">{s.name}</span>
                <ArrowRight
                  aria-hidden="true"
                  className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section surface="light" labelledBy="city-base">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              id="city-base"
              eyebrow="02"
              title={`Serving ${city.name} from our ${business.address.city} base`}
            />
            <address className="rm-corners mt-8 border border-border bg-card p-8 text-body-lg not-italic">
              <span className="font-heading text-h4 font-semibold">{business.name}</span>
              <br />
              {nap.streetLine}
              <br />
              {nap.cityLine}
              <br />
              <a href={business.phone.tel}
                className="inline-flex min-h-11 items-center font-semibold hover:text-primary">
                {business.phone.display}
              </a>
            </address>
          </div>
          {photo && (
            <div
              className={cn(
                "relative w-full overflow-hidden",
                // A portrait photo in a 16:9 box kept only 42% of the image
                isPortrait(photo) ? "mx-auto aspect-[4/5] max-w-sm" : "aspect-video",
              )}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={isPortrait(photo) ? "(min-width: 640px) 384px, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
                className="object-cover"
                style={focus(photo)}
              />
            </div>
          )}
        </div>
      </Section>

      <FinalCta title={home.finalCta} />

      <JsonLd data={breadcrumbSchema({ name: city.name, path: city.href })} />
    </>
  )
}
