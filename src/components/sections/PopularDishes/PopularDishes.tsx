import { Section, Container, Button } from "@/components/ui";
import { DemoImage } from "@/components/ui/DemoImage";
import { popularDishes } from "@/data/menu";
import { formatPrice } from "@/lib/format";

export function PopularDishes() {
  return (
    <Section id="popular-dishes">
      <Container>
        <h2 className="font-archivo font-extrabold text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-wider mb-12">
          Popular dishes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {popularDishes.map((dish) => (
            <div
              key={dish.id}
              className="group rounded-xl overflow-hidden bg-cream-surface shadow-sm hover:shadow-md transition-shadow hover:not-reduced-motion border border-border"
            >
              <div className="relative aspect-[4/3]">
                <DemoImage
                  filename={dish.image?.replace("/images/demo/", "") || `dish-${dish.id}.webp`}
                  alt={dish.name}
                  sizes="(max-width: 768px) 100vw, 25vw"
                  variant="light"
                />
              </div>
              <div className="p-5">
                <h3
                  className="font-archivo font-bold text-black text-lg uppercase leading-tight mb-3"
                >
                  {dish.name}
                </h3>
                <p
                  className="text-text-muted text-sm leading-relaxed mb-4"
                >
                  {dish.description}
                </p>
                <p className="text-deep-red font-bold text-lg">
                  {formatPrice(dish.price)}
                </p>

                <Button
                  variant="secondary"
                  size="sm"
                  as="a"
                  href="/menu"
                  className="inline-flex justify-center w-full mt-4"
                >
                  View menu
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}