import { Section, Container, Button } from "@/components/ui";
import { DemoImage } from "@/components/ui/DemoImage";
import { popularDishes } from "@/data/menu";
import { formatPrice } from "@/lib/format";

export function PopularDishes() {
  return (
    <Section id="popular-dishes">
      <Container>
        <div className="mb-10 md:mb-12">
          <p className="text-deep-red text-sm font-medium tracking-widest uppercase mb-2">Popular dishes</p>
          <h2 className="font-archivo font-extrabold text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-wider mb-4">
            Our most-loved dishes
          </h2>
          <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-2xl">
            The dishes our guests keep coming back for.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {popularDishes.map((dish) => (
            <div
              key={dish.id}
              className="flex flex-col h-full group rounded-xl overflow-hidden bg-cream-surface shadow-sm hover:shadow-md transition-shadow hover:not-reduced-motion border border-border"
            >
              <div className="relative aspect-[4/3]">
                <DemoImage
                  filename={dish.image?.replace("/images/demo/", "") || `dish-${dish.id}.webp`}
                  alt={dish.name}
                  sizes="(max-width: 768px) 100vw, 25vw"
                  variant="light"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-archivo font-bold text-black text-lg uppercase leading-tight mb-3 min-h-[3rem]">
                  {dish.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                  {dish.description}
                </p>
                <div className="mt-auto space-y-3">
                  <p className="text-deep-red font-bold text-lg">
                    {formatPrice(dish.price)}
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    as="a"
                    href="/menu"
                    className="w-full"
                  >
                    View menu
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