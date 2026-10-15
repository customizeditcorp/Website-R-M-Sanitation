import type { Metadata } from "next"
import Image from "next/image"
import { ContainerHero } from "@/components/container-page"
import { JsonLd } from "@/components/json-ld"
import { Container, FinalCta } from "@/components/sections"
import { galleryPage, home } from "@/lib/content"
import { galleryIsLive, galleryPhotos } from "@/lib/images"
import { breadcrumbSchema } from "@/lib/schema"

// Container until GALLERY_MIN_PHOTOS real photos exist (plan §1): honest placeholder,
// kept out of the index so it never ships as a thin page.
export const metadata: Metadata = {
  title: { absolute: galleryPage.seo.title },
  description: galleryPage.seo.description,
  alternates: { canonical: "/gallery" },
  robots: galleryIsLive ? undefined : { index: false, follow: true },
}

export default function GalleryPage() {
  return (
    <>
      <ContainerHero
        crumb="Gallery"
        title={galleryPage.h1}
        placeholder={galleryIsLive ? undefined : galleryPage.placeholder}
      />
      {galleryIsLive && (
        <Container className="py-16">
          <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
            {galleryPhotos.map((p) => (
              <li key={p.src} className="relative aspect-square overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </Container>
      )}
      <FinalCta title={home.finalCta} />
      <JsonLd data={breadcrumbSchema({ name: "Gallery", path: "/gallery" })} />
    </>
  )
}
