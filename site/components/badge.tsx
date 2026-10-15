import { cn } from "@/lib/utils"

// Technical badge — monospace label for data-like facts (USDOT, section index, language).
// Pattern observed in Refero/Andercore; rebuilt on R&M tokens.
export function TechBadge({
  children,
  className,
  boxed = false,
}: {
  children: React.ReactNode
  className?: string
  boxed?: boolean
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-muted-foreground uppercase",
        boxed && "rounded-sm border border-border px-2 py-1",
        className,
      )}
    >
      {children}
    </span>
  )
}
