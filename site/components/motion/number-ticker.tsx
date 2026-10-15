"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

/**
 * Number ticker — rebuilt from Magic UI's number-ticker without `motion`.
 *
 * Server HTML renders the FINAL value (Magic UI renders the start value, which would
 * read "0" with JS off). On the client it counts 0 → value once, when scrolled into
 * view. Width is reserved in `ch` so the count never shifts layout (CLS).
 */
export function NumberTicker({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const duration = 1200
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration)
        const eased = 1 - Math.pow(1 - p, 3)
        el.textContent = String(Math.round(value * eased))
        if (p < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    })
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return (
    <span
      ref={ref}
      className={cn("inline-block text-right tabular-nums", className)}
      style={{ minWidth: `${String(value).length}ch` }}
    >
      {value}
    </span>
  )
}
