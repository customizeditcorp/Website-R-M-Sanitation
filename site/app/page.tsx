import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cta, nap, trustItems } from "@/lib/site";

// Step 1 scaffolding check only — replaced by the real Home in Step 3.
// Exercises every token layer so the build proves fonts, colors and surfaces resolve.
export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-5xl px-4 py-24">
        <p className="font-mono text-sm tracking-wide text-muted-foreground uppercase">
          Scaffolding — Step 1
        </p>
        <h1 className="mt-4 text-h1">R&amp;M Sanitation</h1>
        <p className="mt-4 max-w-2xl text-body-lg text-muted-foreground">
          Next.js App Router, Tailwind v4 and shadcn tokens wired to the
          Brandboard v1.0 palette. Barlow for headings, Inter for body.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="cta" asChild>
            <a href={cta.call.href}>
              <Phone aria-hidden="true" />
              {cta.call.label}
            </a>
          </Button>
          <Button size="cta" variant="outline" asChild>
            <a href={cta.text.href}>{cta.text.label}</a>
          </Button>
        </div>
      </section>
      <section className="surface-shade">
        <div className="mx-auto w-full max-w-5xl px-4 py-12">
          <h2 className="text-h2">Dark-shade band</h2>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted-foreground uppercase">
            {trustItems.map((item) => (
              <li key={item.id}>{item.label}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="surface-light">
        <div className="mx-auto w-full max-w-5xl px-4 py-12">
          <h2 className="text-h2">Light surface</h2>
          <p className="mt-2 text-muted-foreground">{nap.line}</p>
        </div>
      </section>
    </main>
  );
}
