import { menuCategories } from "@/data/menu";
import { formatPrice } from "@/lib/format";
import { Section, Container } from "@/components/ui";

export function MenuList() {
  return (
    <Section>
      <Container>
        <div className="space-y-8">
          <h1 className="font-archivo font-extrabold text-3xl md:text-4xl lg:text-5xl uppercase tracking-wider text-black mb-6">
            Our menu
          </h1>
          <p className="text-lg leading-relaxed text-text-muted max-w-2xl">
            Quality ingredients, bold flavours, and great value. All prices in GBP.
          </p>
          <p className="text-xs text-black/60 uppercase tracking-wider mt-2">
            Demo menu for portfolio purposes.
          </p>

          {/* Anchor link category bar */}
          <nav className="mb-6 overflow-x-auto">
            <div className="flex gap-3">
              {menuCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="whitespace-nowrap px-4 py-2 rounded-full border border-border bg-cream-surface text-sm font-semibold text-black hover:bg-deep-red hover:text-cream min-h-[44px] flex items-center justify-center"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Menu items by category */}
          <div className="space-y-12">
            {menuCategories.map((category) => (
              <div key={category.id} id={category.id} className="mb-8">
                <h2 className="font-archivo font-extrabold text-3xl md:text-4xl uppercase font-extrabold text-black scroll-mt-28">
                  {category.name}
                </h2>
                <p className="text-base text-black/60 mb-8">{category.description}</p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-cream-surface rounded-xl border border-border p-5"
                    >
                      <h3 className="font-archivo font-bold text-lg uppercase leading-tight tracking-normal text-black mb-3">
                        {item.name}
                      </h3>
                      <p className="text-sm text-text-muted mb-3">
                        {item.description}
                      </p>
                      <p className="text-base font-bold text-deep-red">
                        {formatPrice(item.price)}
                      </p>
                      {item.dietary && item.dietary.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {item.dietary.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs rounded bg-black/10 text-cream/80"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
</div>
            ))}
          </div>
        </div>
      </Container>

      {/* Full-width CTA band outside Container */}
      <div className="w-full bg-deep-red dark-surface-red py-14 text-center mt-16">
        <h2 className="font-archivo font-extrabold uppercase text-3xl md:text-4xl text-cream mb-4">
          Hungry? Book a table
        </h2>
        <p className="text-cream/90 mb-6">
          Reserve your table in under a minute.
        </p>
        <a
          href="/reservations"
          className="inline-flex items-center justify-center rounded-lg bg-cream-surface px-6 py-3 text-base font-medium text-black hover:bg-cream-surface/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-surface focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        >
          Book a Table
        </a>
      </div>
    </Section>
  );
}