import { MessageSquareText, Phone } from "lucide-react"
import { business } from "@/lib/site"

// Phone-first on mobile: Call and Text stay under the thumb on every page.
// Plain links, no JS — works with scripts off. Hidden from md up, where the header
// carries the full call button. The body reserves its height (app/layout.tsx).
export function MobileCallBar() {
  return (
    <div
      role="region"
      aria-label="Call or text R&M Sanitation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur supports-[backdrop-filter]:bg-background/85 md:hidden"
    >
      <div className="grid grid-cols-[1fr_auto] gap-2 p-2">
        <a
          href={business.phone.tel}
          className="flex min-h-12 items-center justify-center gap-2 rounded-sm bg-primary px-4 font-semibold text-primary-foreground active:bg-primary-hover"
        >
          <Phone aria-hidden="true" className="size-5" />
          <span>
            Call <span className="whitespace-nowrap">{business.phone.display}</span>
          </span>
        </a>
        <a
          href={business.phone.sms}
          className="flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/15 bg-white/10 px-4 font-semibold text-white active:bg-white/20"
        >
          <MessageSquareText aria-hidden="true" className="size-5" />
          Text
        </a>
      </div>
    </div>
  )
}
