import Image from "next/image"
import { JsonLd } from "@/components/json-ld"
import {
  Breadcrumbs,
  CallButtons,
  CheckList,
  Container,
  FaqList,
  FinalCta,
  Section,
  SectionHeading,
} from "@/components/sections"
import type { Photo } from "@/lib/images"
import { breadcrumbSchema, faqSchema, serviceSchema, type Faq } from "@/lib/schema"
import type { Service } from "@/lib/site"
import { cn } from "@/lib/utils"

// Service page template (plan §4): Hero → What's included → How it works →
// Why R&M for [service] → FAQ → Gallery strip → Final CTA.
export function ServicePage({
  service,
  lead,
  heroImage,
  included,
  howItWorks,
  why,
  extra,
  faqs,
  gallery,
  finalCta,
}: {
  service: Service
  lead: string
  heroImage: Photo
  included: string[]
  howItWorks?: string
  why?: { title: string; items: string[] }
  extra?: React.ReactNode
  faqs: Faq[]
  gallery: Photo[]
  finalCta: string
}) {
  let n = 0
  const idx = () => String(++n).padStart(2, "0")

  return (
    <>
      <section aria-labelledby="service-title" className="border-b border-border">
        <Container className="grid grid-cols-1 gap-12 py-14 md:py-20 lg:grid-cols-[3fr_2fr] lg:items-center">
          <div>
            <Breadcrumbs current={service.name} />
            <h1 id="service-title" className="mt-6 text-h1 tracking-tight">
              {service.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-foreground/85">{lead}</p>
            <CallButtons className="mt-8" />
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden lg:aspect-[3/4]">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <Section labelledBy="included">
        <SectionHeading id="included" eyebrow={idx()} title="What's included" />
        <CheckList items={included} className="mt-12" />
      </Section>

      {howItWorks && (
        <Section surface="shade" labelledBy="how">
          <SectionHeading id="how" eyebrow={idx()} title="How it works" />
          <p className="mt-8 max-w-3xl text-body-lg text-muted-foreground">{howItWorks}</p>
        </Section>
      )}

      {why && (
        <Section labelledBy="why-service">
          <SectionHeading id="why-service" eyebrow={idx()} title={why.title} />
          <ul className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
            {why.items.map((item) => (
              <li key={item} className="flex gap-4 bg-background p-6">
                <span aria-hidden="true" className="mt-2 size-2 shrink-0 bg-primary" />
                <span className="text-body-lg">{item}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {extra}

      <Section surface="shade" labelledBy="faq">
        <SectionHeading id="faq" eyebrow={idx()} title="Frequently asked questions" />
        <div className="mt-12">
          <FaqList faqs={faqs} />
        </div>
      </Section>

      {gallery.length > 0 && (
        <Section labelledBy="service-gallery">
          <SectionHeading id="service-gallery" eyebrow={idx()} title="In the field" />
          <ul className={cn("mt-12 grid grid-cols-2 gap-2", gallery.length >= 3 && "md:grid-cols-3")}>
            {gallery.map((p) => (
              <li key={p.src} className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </Section>
      )}

      <FinalCta title={finalCta} />

      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema({ name: service.name, path: service.href })} />
    </>
  )
}
