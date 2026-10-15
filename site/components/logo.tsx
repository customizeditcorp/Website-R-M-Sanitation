import Image from "next/image"
import { cn } from "@/lib/utils"

// Logo source: 03-Brandboard. SVGs are served as-is (`unoptimized` per image, never global).
// The full-color lockup has black letterforms, so on the dark frame it sits on a white
// plate — an approved background in Brandboard Block 2 — instead of being recolored.
export function LogoColor({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex rounded-sm bg-white px-2 py-1", className)}>
      <Image
        src="/brand/rm-logo-color.svg"
        alt="R&M Sanitation"
        width={1669}
        height={1080}
        unoptimized
        loading="eager"
        className="h-9 w-auto"
      />
    </span>
  )
}

export function LogoReversed({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/rm-logo-reversed-white.svg"
      alt="R&M Sanitation"
      width={1669}
      height={1080}
      unoptimized
      className={cn("h-14 w-auto", className)}
    />
  )
}
