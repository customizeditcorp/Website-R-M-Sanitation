import Link from "next/link"
import { Menu, Phone } from "lucide-react"
import { TechBadge } from "@/components/badge"
import { LogoColor } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { business, mainNav } from "@/lib/site"

// Sticky dark header with the phone always one tap away (plan §4, QA: tap-to-call on
// every mobile header). The mobile menu is a native <details> so it works with JS off.
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-4 px-4 lg:h-20">
        <Link href="/" aria-label="R&M Sanitation — home" className="shrink-0">
          <LogoColor />
        </Link>

        <nav aria-label="Main" className="ml-6 hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-sm px-3 py-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <TechBadge boxed className="hidden md:inline-flex">
            {business.spanishBadge}
          </TechBadge>
          <Button asChild className="h-10 px-4 text-sm font-semibold">
            <a href={business.phone.tel}>
              <Phone aria-hidden="true" />
              <span className="sr-only sm:not-sr-only">Call </span>
              {business.phone.display}
            </a>
          </Button>

          <details className="group relative lg:hidden">
            <summary
              className="flex size-10 cursor-pointer list-none items-center justify-center rounded-sm border border-border [&::-webkit-details-marker]:hidden"
              aria-label="Open menu"
            >
              <Menu aria-hidden="true" className="size-5" />
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 mt-2 w-64 border border-border bg-card p-2"
            >
              <ul>
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-3 py-3 text-base text-foreground/90 hover:bg-background"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="border-t border-border px-3 py-3">
                <TechBadge>{business.spanishBadge}</TechBadge>
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}
