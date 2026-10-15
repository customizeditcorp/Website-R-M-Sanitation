import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
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
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
