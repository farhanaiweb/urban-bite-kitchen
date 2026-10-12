import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui";

export function Footer() {
  const currentYear = 2026; // Updated manually each year

  return (
    <footer className="bg-black dark-surface text-cream" role="contentinfo">
      <Container maxWidth="xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-12 md:py-16">
          <div className="lg:col-span-1">
            <p className="font-archivo font-extrabold text-xl md:text-2xl uppercase leading-tight mb-4">
              Urban Bite
              <span className="text-deep-red"> Kitchen</span>
            </p>
            <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
              Burgers, chicken and bold flavour in Manchester.
            </p>
          </div>

          <nav aria-label="Quick links">
            <h2 className="font-bold text-base md:text-lg uppercase text-cream mb-4">
              Quick links
            </h2>
            <ul className="space-y-3">
              <li><Link href="/" className="text-cream/80 hover:text-cream transition-colors text-sm">Home</Link></li>
              <li><Link href="/menu" className="text-cream/80 hover:text-cream transition-colors text-sm">Menu</Link></li>
              <li><Link href="/reservations" className="text-cream/80 hover:text-cream transition-colors text-sm">Reservations</Link></li>
              <li><Link href="/contact" className="text-cream/80 hover:text-cream transition-colors text-sm">Contact</Link></li>
            </ul>
          </nav>

          <address className="not-italic" aria-label="Contact information">
            <h2 className="font-bold text-base md:text-lg uppercase text-cream mb-4">
              Contact
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-cream/80 hover:text-cream transition-colors flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-cream/80 hover:text-cream transition-colors flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${siteConfig.whatsappDigits}`} target="_blank" rel="noopener noreferrer" className="text-cream/80 hover:text-cream transition-colors flex items-center gap-2" aria-label="Chat on WhatsApp">
                  <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.325-1.666-1.512-.199-.208-.26-.286-.26-.376 0-.088.077-.187.233-.351.174-.185.539-.62.84-1.073.298-.452.314-.514.34-.587.03-.08.011-.157-.086-.25-.1-.1-.252-.249-.47-.42-.22-.17-.498-.374-.735-.616-.265-.27-.428-.495-.463-.686-.033-.181.006-.282.075-.347.075-.07.183-.184.347-.36.163-.176.39-.403.62-.686.237-.292.573-.775.66-1.02.06-.16.05-.229-.007-.32-.08-.14-.208-.29-.4-.42-.2-.14-.432-.327-.66-.533-.228-.2-.548-.53-.874-.757-.22-.15-.523-.376-.577-.428-.05-.054-.124-.085-.207-.085h-.677c-.618 0-1.202.467-1.202 1.237 0 .555.247 1.053.658 1.416.435.386.862.82 1.242 1.315.382.498.69 1.08.888 1.48.19.387.247.58.298.723.05.14.06.282-.01.407-.08.13-.224.306-.45.517-.227.21-.533.475-.898.857-.365.382-.705.827-.96 1.12-.255.29-.576.59-.81.896-.234.306-.376.572-.447.762-.07.188-.098.28-.12.363-.022.084-.037.172-.037.364 0 .39.41.813 1.205 1.044.57.17 1.036.113 1.308-.098.19-.144.433-.38.75-.732.364-.403.76-.89 1.05-1.294.27-.376.503-.768.697-1.108.193-.339.26-.51.26-.62 0-.11-.03-.21-.075-.303z" /></svg>
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`} target="_blank" rel="noopener noreferrer" className="text-cream/80 hover:text-cream transition-colors flex items-start gap-2" aria-label="View on Google Maps">
                  <svg className="h-4 w-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  <span className="leading-relaxed">{siteConfig.address}</span>
                </a>
              </li>
            </ul>
          </address>

          <div aria-label="Opening hours">
            <h2 className="font-bold text-base md:text-lg uppercase text-cream mb-4">
              Opening hours
            </h2>
            <div className="space-y-3 text-sm">
              {siteConfig.openingHours.structured.map((h) => (
                <p key={h.day} className="flex justify-between gap-4 text-cream">
                  <span className="font-medium capitalize">{h.day}</span>
                  <span className="whitespace-nowrap">{h.open}–{h.close}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-6">
              {Object.entries(siteConfig.social).map(([key, social]) => (
                <a
                  key={key}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-cream/60 hover:text-cream transition-colors"
                >
                  {key === "instagram" && (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.51" /></svg>
                  )}
                  {key === "facebook" && (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.992 3.881 11.028 9.222 11.887v-8.296H7.925v-3.081h1.297V9.45c0-1.286.377-2.162 2.318-2.162 1.137 0 1.746.08 1.988.116v2.27h-1.355c-1.064 0-1.271.507-1.271 1.251V12h2.173l-.282 3.081h-1.891v8.296c5.341-.859 9.222-5.895 9.222-11.887z" /></svg>
                  )}
                </a>
              ))}
            </div>
            <p className="text-cream/70 text-sm text-center md:text-right">
              © {currentYear} Urban Bite Kitchen. Demo website for portfolio purposes.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}