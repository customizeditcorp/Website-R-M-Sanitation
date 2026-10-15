import Link from "next/link"
import { TechBadge } from "@/components/badge"
import { LogoReversed } from "@/components/logo"
import { business, legalNav, nap, publishedCities, services } from "@/lib/site"

// Footer carries both names (brand + operating entity) and USDOT on every page.
// No CSLB (not applicable). Hours stay out until Francisco confirms them.
export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <LogoReversed />
          <address className="text-sm leading-relaxed text-muted-foreground not-italic">
            {business.name}
            <br />
            {nap.streetLine}
            <br />
            {nap.cityLine}
            <br />
            <a href={business.phone.tel} className="text-foreground hover:underline">
              {business.phone.display}
            </a>
          </address>
          <TechBadge boxed>{business.spanishBadge}</TechBadge>
        </div>

        <FooterColumn title="Services">
          {services.map((s) => (
            <FooterLink key={s.href} href={s.href}>
              {s.name}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Areas">
          {publishedCities.map((c) => (
            <FooterLink key={c.href} href={c.href}>
              {c.name}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Company">
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/gallery">Gallery</FooterLink>
          <FooterLink href="/reviews">Reviews</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <li>
            <a
              href={`mailto:${business.email}`}
              className="text-sm break-all text-muted-foreground hover:text-foreground"
            >
              {business.email}
            </a>
          </li>
        </FooterColumn>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            {business.name} operates under {business.legalName}.{" "}
            <span className="font-mono tracking-wider">USDOT {business.usdot}</span> · Insured
            and bonded.
          </p>
          {legalNav.length > 0 && (
            <ul className="flex gap-4">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
        {title}
      </h2>
      <ul className="mt-4 space-y-2">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-foreground/85 hover:text-foreground">
        {children}
      </Link>
    </li>
  )
}
