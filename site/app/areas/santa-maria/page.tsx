import { CityPage, cityMetadata } from "@/components/city-page"

export const metadata = cityMetadata("santa-maria")

export default function SantaMariaPage() {
  return <CityPage slug="santa-maria" />
}
