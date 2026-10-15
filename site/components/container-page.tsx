import { Breadcrumbs, Container } from "@/components/sections"
import { business } from "@/lib/site"

/** Hero + honest placeholder shared by the data-gated /gallery and /reviews pages. */
export function ContainerHero({
  crumb,
  title,
  placeholder,
  children,
}: {
  crumb: string
  title: string
  placeholder?: string
  children?: React.ReactNode
}) {
  return (
    <section aria-labelledby="container-title" className="border-b border-border">
      <Container className="py-14 md:py-20">
        <Breadcrumbs current={crumb} />
        <h1 id="container-title" className="mt-6 max-w-3xl text-h1 tracking-tight">
          {title}
        </h1>
        {placeholder && (
          <p className="mt-6 max-w-2xl text-body-lg text-foreground/85">
            {placeholder}{" "}
            <a href={business.phone.tel} className="font-semibold whitespace-nowrap hover:underline">
              {business.phone.display}
            </a>
            .
          </p>
        )}
        {children}
      </Container>
    </section>
  )
}
