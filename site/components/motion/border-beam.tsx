import type { CSSProperties } from "react"

/**
 * Border beam — rebuilt from Magic UI's border-beam as pure CSS (no `motion`, no JS):
 * a conic gradient rotating on the compositor, masked to the card border.
 * Brand red per Brandboard Block 8. Parent needs `position: relative`.
 * Decorative only: hidden from assistive tech, frozen under prefers-reduced-motion.
 */
export function BorderBeam({ duration = 8, width = 2 }: { duration?: number; width?: number }) {
  return (
    <div
      aria-hidden="true"
      className="rm-beam-frame"
      style={{ "--beam-width": `${width}px` } as CSSProperties}
    >
      <div
        className="rm-beam"
        style={{ "--beam-duration": `${duration}s` } as CSSProperties}
      />
    </div>
  )
}
