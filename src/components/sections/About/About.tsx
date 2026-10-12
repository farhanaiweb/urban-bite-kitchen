import { Section, Container, Button } from "@/components/ui";
import { DemoImage } from "@/components/ui/DemoImage";

export function About() {
  return (
    <Section id="about">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          <div className="lg:order-2 lg:w-1/2 flex-shrink-0 aspect-[4/5] rounded-xl overflow-hidden shadow-lg relative">
            <DemoImage
              filename="about.webp"
              alt="A burger and fries"
              sizes="(max-width: 1024px) 100vw, 50vw"
              variant="light"
            />
          </div>

          <div className="lg:order-1 lg:w-1/2">
            <p className="text-deep-red text-sm font-medium tracking-widest uppercase mb-2">About us</p>
            <h2 className="font-archivo font-extrabold uppercase leading-[1.05] text-3xl md:text-4xl lg:text-5xl text-black mb-6">
              Burgers, chicken and bold flavour in Manchester
            </h2>
            <p className="text-text-muted text-base leading-relaxed mb-8">
              Urban Bite Kitchen is a modern fast-food kitchen on Wilmslow Road, Manchester. We cook burgers, crispy chicken, wraps and loaded fries with straightforward ingredients and bold flavour. Come in to dine, grab a takeaway, or book a table for the group.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-deep-red flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <line x1="15" y1="9" x2="21" y2="15" stroke="currentColor" strokeWidth="2" />
                </svg>
                <div>
                  <p className="font-medium text-black">Dine-in</p>
                  <p className="text-text-muted text-sm">Eat with us</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-deep-red flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="2" y="6" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                  <line x1="6" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="2" />
                </svg>
                <div>
                  <p className="font-medium text-black">Takeaway</p>
                  <p className="text-text-muted text-sm">Grab and go</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-deep-red flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2v4M12 8v4M12 14v4" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="18" r="2" fill="currentColor" />
                </svg>
                <div>
                  <p className="font-medium text-black">Table reservations</p>
                  <p className="text-text-muted text-sm">Book a table</p>
                </div>
              </div>
            </div>

            <Button variant="primary" size="lg" as="a" href="/reservations">
              Book a Table
            </Button>
          </div>
        </div>

        {/* Decorative watermark */}
        <p className="mt-12 text-text-muted text-xs font-medium text-center opacity-20" aria-hidden="true">ABOUT</p>
      </Container>
    </Section>
  );
}