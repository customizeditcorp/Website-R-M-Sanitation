/**
 * Photo registry — every content photo on the site, with its real alt text.
 *
 * Source: 04-Fotos/web-ready/image-alt-map.json (alt copied verbatim).
 * Excluded until retouched: every photo flagged in that map for decals that read
 * "(808)" instead of "(805)" — portable-restrooms-hand-wash-station-truck-01/-02,
 * portable-hand-wash-station-gray-01/-02 and vacuum-pump-truck-white-01.
 */
export type Photo = {
  src: string
  width: number
  height: number
  alt: string
  /** CSS object-position: keeps the subject in frame when a box crops the photo */
  position?: string
}

function photo(
  file: string,
  width: number,
  height: number,
  alt: string,
  position?: string,
): Photo {
  return { src: `/images/${file}`, width, height, alt, position }
}

export const isPortrait = (p: Photo) => p.height > p.width

/** Inline style for <Image fill>: crops toward the photo's subject instead of dead center */
export const focus = (p: Photo) => (p.position ? { objectPosition: p.position } : undefined)

export const photos = {
  truckRanch: photo(
    "septic-pumping-vacuum-truck-ranch-01.jpg",
    2400,
    1350,
    "R&M Sanitation vacuum pump truck parked on a grassy ranch property",
    "30% 50%", // truck sits left of center
  ),
  septicLids: photo(
    "septic-pumping-tank-lids-uncovered-ranch-01.jpg",
    2000,
    1125,
    "Septic tank lids dug out on a ranch while the R&M vacuum truck pumps the tank through a suction hose",
  ),
  agTrailerUnit: photo(
    "agricultural-restroom-trailer-tan-unit-01.jpg",
    1200,
    1600,
    "Portable restroom mounted on a field sanitation trailer, with a women's sign and step platform",
    "50% 45%",
  ),
  agTrailerSinks: photo(
    "agricultural-restroom-trailer-hand-wash-sinks-01.jpg",
    1200,
    1600,
    "Hand-washing sinks mounted on the side of a field sanitation restroom trailer",
  ),
  agTrailerHandWash: photo(
    "agricultural-restroom-trailer-hand-wash-station-01.jpg",
    1200,
    1600,
    "Trailer hand-wash station with soap and paper towel dispensers and a bilingual do-not-drink-water sign",
    "50% 30%", // keep the bilingual sign and SOAP/JABÓN dispenser in frame
  ),
  standardUnit: photo(
    "portable-restroom-tan-standard-unit-01.jpg",
    1200,
    1600,
    "Standard tan and gray portable restroom with R&M decal",
    "50% 40%",
  ),
  interiorToilet: photo(
    "portable-restroom-interior-toilet-01.jpg",
    1600,
    1200,
    "Clean interior of a standard portable restroom showing the toilet seat",
    "45% 50%", // seat sits low and left of center
  ),
  interiorUrinal: photo(
    "portable-restroom-interior-urinal-01.jpg",
    1600,
    1200,
    "Interior of a standard portable restroom with urinal and toilet",
  ),
} as const

// ── /gallery (data-gated container) ─────────────────────────────────────────
// Plan §1: the gallery page publishes when ≥20 real photos exist. Add photos here;
// the page switches from placeholder to grid (and becomes indexable) on its own.
export const GALLERY_MIN_PHOTOS = 20

export const galleryPhotos: Photo[] = [
  photos.agTrailerUnit,
  photos.agTrailerHandWash,
  photos.agTrailerSinks,
  photos.standardUnit,
  photos.interiorToilet,
  photos.interiorUrinal,
  photos.septicLids,
  photos.truckRanch,
]

export const galleryIsLive = galleryPhotos.length >= GALLERY_MIN_PHOTOS
