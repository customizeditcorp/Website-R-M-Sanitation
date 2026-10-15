import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServicePage } from "@/components/service-page"
import { agricultural } from "@/lib/content"
import { photos } from "@/lib/images"
import { getService } from "@/lib/site"

const service = getService("agricultural-portable")

export const metadata: Metadata = {
  title: { absolute: service?.metaTitle ?? "" },
  description: service?.metaDescription,
  alternates: { canonical: service?.href },
  openGraph: { title: service?.metaTitle, description: service?.metaDescription, url: service?.href },
}

export default function AgriculturalPortablePage() {
  if (!service) notFound()
  return (
    <ServicePage
      service={service}
      lead={agricultural.lead}
      // Plan wants a 16:9 field-crew banner; that photo doesn't exist yet (placement-map)
      heroImage={photos.agTrailerUnit}
      included={agricultural.included}
      howItWorks={agricultural.howItWorks}
      why={{ title: "Why R&M for ag", items: agricultural.why }}
      faqs={agricultural.faqs}
      gallery={[photos.agTrailerHandWash, photos.agTrailerSinks]}
      finalCta={agricultural.finalCta}
    />
  )
}
