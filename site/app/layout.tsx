import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
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

// Site-wide metadata (metadataBase, title template, OG) moves to lib/site.ts in Step 2.
export const metadata: Metadata = {
  title: "R&M Sanitation",
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
