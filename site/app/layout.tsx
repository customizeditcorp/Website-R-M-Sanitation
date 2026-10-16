import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { localBusinessSchema } from "@/lib/schema";
import { business, homeSeo, siteUrl } from "@/lib/site";
import "./globals.css";

// Brandboard Block 4 — Barlow 600/700 for headings, Inter (variable) for body + CTAs.
// next/font self-hosts both: no request to Google at runtime, no layout shift.
const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Root metadata — canonical host comes from lib/site.ts (guardrail #2).
// Plan §6 title tags are complete strings per page, so there is no title template.
// Each page sets its own title, description and `alternates.canonical`.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: homeSeo.title,
  description: homeSeo.description,
  applicationName: business.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: business.name,
    url: siteUrl,
    title: homeSeo.title,
    description: homeSeo.description,
  },
  formatDetection: { telephone: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${inter.variable} h-full antialiased`}
    >
      {/* Bottom padding reserves the mobile call bar (≈65px) so it never covers the footer */}
      <body className="flex min-h-full flex-col pb-[calc(4.25rem+env(safe-area-inset-bottom))] md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>
        <SiteFooter />
        <MobileCallBar />
        {/* Site-wide LocalBusiness (plan §7; invalid SepticSystemService subtype dropped) */}
        <JsonLd data={localBusinessSchema()} />
      </body>
    </html>
  );
}
