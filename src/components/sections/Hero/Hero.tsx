import { HeroImage } from "./HeroImage";
import { Button } from "@/components/ui";

// Noise texture as inline SVG
const noiseTexture = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDMiLz48L3N2Zz4=";

export function Hero() {
  return (
    <section
      className="relative w-full bg-black overflow-hidden dark-surface"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-deep-red/10 to-transparent" aria-hidden="true" />
      <div className={`absolute inset-0 bg-[url(${noiseTexture})] opacity-30`} aria-hidden="true" />

       <div className="relative mx-auto max-w-[80rem] px-6 py-10 md:py-12 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative z-10 max-w-xl animate-fade-in-up">
             <p className="text-cream-surface/70 text-sm font-medium tracking-widest uppercase mb-4 animate-fade-in-up delay-100">
               Manchester&apos;s Modern Kitchen
             </p>
            <h1
              id="hero-heading"
              className="font-archivo font-extrabold uppercase leading-[1.05] text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 animate-fade-in-up delay-200 text-cream"
            >
              Big Flavour.<br />
              <span className="text-deep-red-light">Made Fresh.</span>
            </h1>
            <p className="text-cream-surface/80 text-base md:text-lg leading-relaxed mb-8 max-w-md animate-fade-in-up delay-300">
              {/* TODO: Replace with client-approved copy */}
              Hand-crafted burgers, loaded fries, and thick shakes.
              Quality ingredients, bold combinations, zero compromises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
              <Button variant="primary" size="lg" as="a" href="/reservations">
                Book a Table
              </Button>
              <Button variant="on-dark" size="lg" as="a" href="/menu">
                View Menu
              </Button>
            </div>
          </div>

          <div className="relative z-10 min-w-0 animate-fade-in delay-500">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}