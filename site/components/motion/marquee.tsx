"use client"

import { cn } from "@/lib/utils"
import { useMotionAllowed } from "@/components/motion/use-reduced-motion"

/**
 * Marquee — rebuilt from Magic UI's marquee.
 *
 * Magic UI repeats the content N times in the HTML. Here the server renders ONE list
 * in a single row (readable, scrollable, no JS needed). After hydration, if motion is
 * allowed, aria-hidden copies are added and the row starts scrolling. Same height in
 * both states, so the swap causes no layout shift. Pauses on hover/focus.
 */
export function Marquee({
  children,
  label,
  copies = 3,
  className,
}: {
  children: React.ReactNode
  label: string
  copies?: number
  className?: string
}) {
  const animate = useMotionAllowed()
  const track = cn(
    "flex shrink-0 items-center gap-(--gap) pr-(--gap)",
    animate && "animate-rm-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]",
  )

  return (
    <div
      className={cn(
        "group flex [--gap:2.5rem]",
        animate ? "overflow-hidden" : "overflow-x-auto [scrollbar-width:none]",
        className,
      )}
    >
      <ul aria-label={label} className={track}>
        {children}
      </ul>
      {animate &&
        Array.from({ length: copies - 1 }, (_, i) => (
          <ul key={i} aria-hidden="true" className={track}>
            {children}
          </ul>
        ))}
    </div>
  )
}
