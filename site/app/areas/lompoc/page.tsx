import { CityPage, cityMetadata } from "@/components/city-page"

export const metadata = cityMetadata("lompoc")

export default function LompocPage() {
  return <CityPage slug="lompoc" />
}
