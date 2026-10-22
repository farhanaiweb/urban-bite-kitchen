import { Section, Container, Button } from "@/components/ui";
import { formatPrice } from "@/lib/format";
import { DemoImage } from "@/components/ui/DemoImage";
import { offers } from "@/data/offers";

export function Offers() {
  return (
    <Section id="offers" className="bg-deep-red">
      <Container>
        <div className="mb-10 md:mb-12 text-center md:text-left">
          <p className="text-cream/70 text-sm font-medium uppercase tracking-widest mb-4">Special offers</p>
          <h2 className="font-archivo font-extrabold text-3xl md:text-4xl lg:text-5xl text-cream uppercase tracking-wider mb-6">
            Save on your favourites
          </h2>
          <p className="text-cream/80 text-base leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
            Great value meals for every appetite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="flex flex-col h-full rounded-lg overflow-hidden bg-cream-surface border border-border shadow-sm"
            >
              <div className="relative aspect-[16/9]">
                <DemoImage
                  filename={offer.image?.replace("/images/demo/", "") || offer.id + ".webp"}
                  alt={offer.title}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  variant="light"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-archivo font-medium text-black uppercase tracking-wider mb-2">
                  {offer.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                  {offer.description}
                </p>
                <p className="text-deep-red font-bold text-lg">
                  {formatPrice(offer.price)}
                </p>
                <p className="text-text-muted text-sm mt-2">
                  {offer.terms}
                </p>
                <div className="mt-auto">
                  <Button
                    variant={offer.ctaLink === "/reservations" ? "primary" : "secondary"}
                    size="md"
                    fullWidth
                    as="a"
                    href={offer.ctaLink as string}
                  >
                    {offer.ctaText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}