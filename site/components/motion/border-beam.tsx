import type { CSSProperties } from "react"

/**
 * Border beam — rebuilt from Magic UI's border-beam as pure CSS (no `motion`, no JS).
 * Brand red per Brandboard Block 8. Parent needs `position: relative`.
 * Decorative only: hidden from assistive tech, frozen under prefers-reduced-motion.
 */
export function BorderBeam({
  size = 96,
  duration = 8,
  width = 2,
}: {
  size?: number
  duration?: number
  width?: number
}) {
  return (
    <div
      aria-hidden="true"
      className="rm-beam-frame"
      style={{ "--beam-width": `${width}px` } as CSSProperties}
    >
      <div
        className="rm-beam"
        style={{ "--beam-size": `${size}px`, "--beam-duration": `${duration}s` } as CSSProperties}
      />
    </div>
  )
}
