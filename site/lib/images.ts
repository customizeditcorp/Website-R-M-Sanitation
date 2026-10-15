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
}

function photo(file: string, width: number, height: number, alt: string): Photo {
  return { src: `/images/${file}`, width, height, alt }
}

export const photos = {
  truckRanch: photo(
    "septic-pumping-vacuum-truck-ranch-01.jpg",
    2400,
    1350,
    "R&M Sanitation vacuum pump truck parked on a grassy ranch property",
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
  ),
  standardUnit: photo(
    "portable-restroom-tan-standard-unit-01.jpg",
    1200,
    1600,
    "Standard tan and gray portable restroom with R&M decal",
  ),
  interiorToilet: photo(
    "portable-restroom-interior-toilet-01.jpg",
    1600,
    1200,
    "Clean interior of a standard portable restroom showing the toilet seat",
  ),
  interiorUrinal: photo(
    "portable-restroom-interior-urinal-01.jpg",
    1600,
    1200,
    "Interior of a standard portable restroom with urinal and toilet",
  ),
} as const
