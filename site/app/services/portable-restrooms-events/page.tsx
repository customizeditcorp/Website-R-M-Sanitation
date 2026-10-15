import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServicePage } from "@/components/service-page"
import { events } from "@/lib/content"
import { photos } from "@/lib/images"
import { getService } from "@/lib/site"

const service = getService("portable-restrooms-events")

export const metadata: Metadata = {
  title: { absolute: service?.metaTitle ?? "" },
  description: service?.metaDescription,
  alternates: { canonical: service?.href },
  openGraph: { title: service?.metaTitle, description: service?.metaDescription, url: service?.href },
}

export default function PortableRestroomsEventsPage() {
  if (!service) notFound()
  return (
    <ServicePage
      service={service}
      lead={events.lead}
      // Placement-map banner (…-truck-01) carries "(808)" decals — excluded until retouched
      heroImage={photos.standardUnit}
      included={events.included}
      note={{ id: "honest-fit", title: "Honest fit", body: events.honestFit }}
      faqs={events.faqs}
      gallery={[photos.interiorToilet, photos.interiorUrinal]}
      finalCta={events.finalCta}
    />
  )
}
