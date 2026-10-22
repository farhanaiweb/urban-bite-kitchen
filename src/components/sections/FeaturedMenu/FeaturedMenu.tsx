import { Section, Container } from "@/components/ui";
import { DemoImage } from "@/components/ui/DemoImage";

type FeaturedCategory = {
  id: string;
  name: string;
  blurb: string;
};

export function FeaturedMenu() {
  const categories: FeaturedCategory[] = [
    { id: "burgers", name: "Burgers", blurb: "Smash burgers and house favourites" },
    { id: "chicken", name: "Crispy Chicken", blurb: "Crispy chicken, wings and tenders" },
    { id: "wraps", name: "Wraps & Loaded Fries", blurb: "Wraps and loaded fries" },
  ];

  return (
    <Section id="featured-menu" className="bg-cream-surface">
      <Container>
        <div className="mb-10 md:mb-12">
          <p className="text-deep-red text-sm font-medium tracking-widest uppercase mb-2">Featured menu</p>
          <h2 className="font-archivo font-extrabold text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-wider mb-4">
            Explore our categories
          </h2>
          <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-2xl">
            From smash burgers to loaded fries — pick your favourite and dive in.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl bg-black dark-surface min-h-[320px] md:min-h-[380px]"
            >
              <a
                href={`/menu?category=${category.id}`}
                className="absolute inset-0 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-surface focus-visible:ring-offset-2 focus-visible:ring-offset-deep-red"
              >
                <div className="absolute inset-0">
                  <DemoImage
                    filename={`category-${category.id}.jpg`}
                    alt={category.name}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    variant="dark"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
                </div>

                <div className="relative z-10 absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-archivo font-extrabold text-2xl md:text-3xl text-cream uppercase leading-tight mb-2">
                    {category.name}
                  </h3>
                  <p className="text-cream/90 text-sm leading-relaxed mb-4">
                    {category.blurb}
                  </p>
                  <span className="inline-flex items-center gap-1 text-cream hover:underline transition-colors">
                    View menu
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}