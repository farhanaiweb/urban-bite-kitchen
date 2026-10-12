import { siteConfig } from "@/config/site";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="bg-cream-surface border border-border rounded-2xl p-6 md:p-8 shadow-sm">
        <h2 className="font-archivo font-bold text-2xl text-black mb-6">
          Contact details
        </h2>
        <div className="space-y-0 divide-y divide-border">
          <div className="flex items-start gap-4 py-4">
            <svg
              className="h-5 w-5 text-deep-red shrink-0 mt-0.5"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div>
              <p className="text-sm font-semibold uppercase text-text-muted">
                Phone
              </p>
              <p className="text-base text-black">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="hover:text-deep-red underline underline-offset-2"
                >
                  {siteConfig.phone}
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 py-4">
            <svg
              className="h-5 w-5 text-deep-red shrink-0 mt-0.5"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div>
              <p className="text-sm font-semibold uppercase text-text-muted">
                Email
              </p>
              <p className="text-base text-black">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-deep-red underline underline-offset-2"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 py-4">
            <svg
              className="h-5 w-5 text-deep-red shrink-0 mt-0.5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382A8 8 0 0 0 12 8c-2.76 0-5.27 1.31-6.732 3.382a1 1 0 0 0 .894 1.506A6 6 0 0 1 12 10c2.29 0 4.39 1.07 5.77 2.72a1 1 0 0 0 1.23-.472 6 6 0 0 1-1.194-4.394 1 1 0 0 0-.5-.866zM12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
            </svg>
            <div>
              <p className="text-sm font-semibold uppercase text-text-muted">
                WhatsApp
              </p>
              <p className="text-base text-black">
                <a
                  href={`https://wa.me/${siteConfig.whatsappDigits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-deep-red underline underline-offset-2"
                >
                  Chat on WhatsApp
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 py-4">
            <svg
              className="h-5 w-5 text-deep-red shrink-0 mt-0.5"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div>
              <p className="text-sm font-semibold uppercase text-text-muted">
                Address
              </p>
              <p className="text-base text-black">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-deep-red underline underline-offset-2"
                >
                  {siteConfig.address}
                </a>
              </p>
              <p className="text-sm text-deep-red underline underline-offset-1 mt-1">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cream-surface border border-border rounded-2xl p-6 md:p-8 shadow-sm mt-6">
        <h2 className="font-archivo font-bold text-2xl text-black mb-4">
          Opening hours
        </h2>
        <div className="space-y-0">
          {siteConfig.openingHours.structured.map((h) => (
            <div
              key={h.day}
              className="flex justify-between py-2 border-b border-border last:border-0"
            >
              <span className="text-sm text-black">{h.day}</span>
              <span className="text-sm text-text-muted whitespace-nowrap">
                {h.open}–{h.close}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}