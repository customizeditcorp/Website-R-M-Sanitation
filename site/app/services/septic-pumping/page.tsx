import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServicePage } from "@/components/service-page"
import { septic } from "@/lib/content"
import { photos } from "@/lib/images"
import { getService } from "@/lib/site"

const service = getService("septic-pumping")

export const metadata: Metadata = {
  title: { absolute: service?.metaTitle ?? "" },
  description: service?.metaDescription,
  alternates: { canonical: service?.href },
  openGraph: { title: service?.metaTitle, description: service?.metaDescription, url: service?.href },
}

export default function SepticPumpingPage() {
  if (!service) notFound()
  return (
    <ServicePage
      service={service}
      lead={septic.lead}
      heroImage={photos.septicLids}
      heroAspect="landscape"
      included={septic.included}
      howItWorks={septic.howItWorks}
      faqs={septic.faqs}
      gallery={[photos.truckRanch]}
      finalCta={septic.finalCta}
    />
  )
}
