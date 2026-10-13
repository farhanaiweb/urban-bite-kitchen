import { siteConfig } from "@/config/site";

export function ReservationForm() {
  const { openingHours } = siteConfig;

  return (
    <div className="bg-cream-surface border border-border rounded-2xl p-6 md:p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-black mb-6">Your details</h2>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-black mb-2"
            >
              Full name <span className="text-deep-red" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              autoComplete="name"
              required
              className="w-full min-w-0 rounded-lg border border-border bg-white px-4 py-3 text-base text-black placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-black mb-2"
            >
              Phone <span className="text-deep-red" aria-hidden="true">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
              required
              className="w-full min-w-0 rounded-lg border border-border bg-white px-4 py-3 text-base text-black placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              placeholder="0161 555 1234"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-black mb-2"
            >
              Email <span className="text-deep-red" aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              className="w-full min-w-0 rounded-lg border border-border bg-white px-4 py-3 text-base text-black placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="guests"
              className="block text-sm font-semibold text-black mb-2"
            >
              Number of guests <span className="text-deep-red" aria-hidden="true">*</span>
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              inputMode="numeric"
              min="1"
              required
              className="w-full min-w-0 rounded-lg border border-border bg-white px-4 py-3 text-base text-black placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              placeholder="2"
            />
            {/* TODO Phase 5: max/capacity decided in Phase 5 */}
          </div>

          <div>
            <label
              htmlFor="date"
              className="block text-sm font-semibold text-black mb-2"
            >
              Date <span className="text-deep-red" aria-hidden="true">*</span>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              className="w-full min-w-0 rounded-lg border border-border bg-white px-4 py-3 text-base text-black placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            />
          </div>

          <div>
            <label
              htmlFor="time"
              className="block text-sm font-semibold text-black mb-2"
            >
              Time <span className="text-deep-red" aria-hidden="true">*</span>
            </label>
            <input
              type="time"
              id="time"
              name="time"
              required
              className="w-full min-w-0 rounded-lg border border-border bg-white px-4 py-3 text-base text-black placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            />
          </div>
        </div>

        <p className="text-sm text-text-muted">
          {openingHours.display.monThu} • {openingHours.display.friSat} • {openingHours.display.sun}
        </p>

        <div>
          <label
            htmlFor="specialRequests"
            className="block text-sm font-semibold text-black mb-2"
          >
            Special requests
          </label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            rows={4}
            className="w-full min-w-0 rounded-lg border border-border bg-white px-4 py-3 text-base text-black placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream resize-none"
            placeholder="Allergies, high chair, celebration..."
          />
        </div>

        <button
          type="button"
          className="w-full md:w-auto inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-50 disabled:cursor-not-allowed bg-deep-red text-cream-surface hover:bg-deep-red-dark px-6 py-3 text-base"
        >
          Request reservation
        </button>

        <p className="text-sm text-text-muted text-center md:text-left">
          Demo form for portfolio purposes. Submitting is not connected yet.
        </p>

        {/* TODO Phase 5: connect to Supabase reservations table + Zod validation + confirmation email */}
      </form>
    </div>
  );
}