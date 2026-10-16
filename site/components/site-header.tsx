import Link from "next/link"
import { ChevronDown, Menu, Phone } from "lucide-react"
import { TechBadge } from "@/components/badge"
import { LogoColor } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { business, mainNav } from "@/lib/site"

// Sticky dark header with the phone always one tap away (plan §4, QA: tap-to-call on
// every mobile header). Everything here works with JS off: the services submenu opens on
// hover/focus via CSS, and the mobile menu is a native <details>.
// Every control is at least 44px tall (tap-target rule).
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-2 px-4 sm:gap-3 lg:h-20">
        <Link href="/" aria-label="R&M Sanitation — home" className="shrink-0">
          <LogoColor />
        </Link>

        <nav aria-label="Main" className="ml-6 hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) =>
              item.children ? (
                <li key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center gap-1 rounded-sm px-3 text-sm text-foreground/80 transition-colors group-focus-within:text-foreground hover:text-foreground"
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden="true"
                      className="size-3.5 transition-transform group-focus-within:rotate-180 group-hover:rotate-180"
                    />
                  </Link>
                  {/* Opens on hover or keyboard focus; `invisible` keeps it out of the tab
                      order until then. Links are in the HTML for crawlers either way. */}
                  <div className="invisible absolute top-full left-0 z-50 pt-2 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="w-72 border border-border bg-card p-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="flex min-h-11 items-center px-3 text-sm text-foreground/90 hover:bg-background hover:text-foreground focus-visible:bg-background"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center rounded-sm px-3 text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          {/* Spanish badge stays visible at every width (plan §4 header) */}
          <span className="text-[13px] leading-tight font-semibold text-foreground/90 md:hidden">
            {business.spanishBadge}
          </span>
          <TechBadge boxed className="hidden md:inline-flex">
            {business.spanishBadge}
          </TechBadge>

          {/* Mobile: compact 44px call button (the full number lives in the bottom call
              bar). md+: full "Call (805) 757-9015" button. */}
          <Button asChild className="size-11 p-0 text-sm font-semibold md:h-11 md:w-auto md:px-4">
            <a href={business.phone.tel} aria-label={`Call R&M Sanitation at ${business.phone.display}`}>
              <Phone aria-hidden="true" />
              <span className="hidden md:inline">
                Call <span className="whitespace-nowrap">{business.phone.display}</span>
              </span>
            </a>
          </Button>

          <details className="group relative lg:hidden">
            <summary
              className="flex size-11 cursor-pointer list-none items-center justify-center rounded-sm border border-border [&::-webkit-details-marker]:hidden"
              aria-label="Open menu"
            >
              <Menu aria-hidden="true" className="size-5" />
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 mt-2 w-72 border border-border bg-card p-2"
            >
              <ul>
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex min-h-12 items-center px-3 text-base text-foreground/90 hover:bg-background"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul className="mb-1 border-l border-border ml-3">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="flex min-h-11 items-center px-3 text-sm text-foreground/80 hover:bg-background hover:text-foreground"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
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
