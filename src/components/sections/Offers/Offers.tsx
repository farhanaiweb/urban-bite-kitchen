import { Button, Container } from "@/components/ui";
import { formatPrice } from "@/lib/format";
import { DemoImage } from "@/components/ui/DemoImage";
import { offers } from "@/data/offers";

export function Offers() {
  return (
    <section
      id="offers"
      className="relative bg-deep-red py-12 md:py-16 lg:py-24 overflow-hidden"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <p
              className="text-cream/70 text-sm font-medium uppercase tracking-widest mb-4"
            >
              Special offers
            </p>
            <h2
              className="font-archivo font-extrabold text-3xl md:text-4xl lg:text-5xl text-cream uppercase tracking-wider mb-6"
            >
              Save on your favourites
            </h2>
            <p
              className="text-cream/80 text-base leading-relaxed mb-8 max-w-xl"
            >
              Great value meals for every appetite.
            </p>
          </div>

          <div className="lg:order-2 space-y-6">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="group rounded-lg overflow-hidden bg-cream-surface border border-border shadow-sm"
              >
                <div className="relative aspect-[4/3]">
                  <DemoImage
                    filename={offer.image?.replace("/images/demo/", "") || offer.id + ".webp"}
                    alt={offer.title}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    variant="light"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="font-archivo font-medium text-black uppercase tracking-wider mb-2"
                  >
                    {offer.title}
                  </h3>
                  <p
                    className="text-text-muted text-sm leading-relaxed mb-4"
                  >
                    {offer.description}
                  </p>
                  <p className="text-deep-red font-bold text-lg">
                    {formatPrice(offer.price)}
                  </p>
                  <p
                    className="text-text-muted/60 text-xs mt-2"
                  >
                    {offer.terms}
                  </p>
                  <div className="mt-4">
                    <Button
                      variant={offer.ctaLink === "/reservations" ? "on-dark" : "secondary"}
                      size="sm"
                      as="a"
                      href={offer.ctaLink as string}
                      className="w-auto px-4"
                    >
                      {offer.ctaText}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}