// import { siteConfig } from "@/config/site";

export function ContactForm() {
  return (
    <div className="bg-cream-surface border border-border rounded-2xl shadow-sm p-6 md:p-8">
      <h2 className="text-2xl font-bold text-black mb-4">
        Send us a message
      </h2>
      <p className="text-base text-text-muted mb-6">
        We&rsquo;ll get back to you within 24 hours. For urgent inquiries, please call us directly.
      </p>
      
      <form>
        <div className="space-y-4">
          <div>
            <label htmlFor="full-name" className="block text-sm font-semibold text-black mb-1">
              Full name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              autoComplete="name"
              required
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-black placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 min-h-[44px]"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-black mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-black placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 min-h-[44px]"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-black mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-black placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 min-h-[44px]"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-black mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-black placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 min-h-[44px]"
            />
          </div>
        </div>
        
        <div className="mt-6">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg bg-deep-red px-6 py-3 text-base font-medium text-black hover:bg-deep-red-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            Send message
          </button>
          
          {/* TODO: connect in Phase 5 (Supabase contact_messages + Zod + email) */}
        </div>
      </form>
    </div>
  );
}