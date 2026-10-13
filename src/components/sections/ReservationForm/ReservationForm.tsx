"use client";

import { useActionState, useEffect, useState } from "react";
import { createReservation } from "@/app/reservations/actions";
import { siteConfig } from "@/config/site";

function getLondonToday(): string {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const parts = formatter.formatToParts(now);
  const year = parts.find((p) => p.type === "year")!.value;
  const month = parts.find((p) => p.type === "month")!.value;
  const day = parts.find((p) => p.type === "day")!.value;
  return `${year}-${month}-${day}`;
}

export function ReservationForm() {
  const { openingHours } = siteConfig;
  const [state, formAction] = useActionState(createReservation, {
    ok: false,
    fieldErrors: {},
    values: {},
  } as const);
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMinDate(getLondonToday());
  }, []);

  const isPending = state.fieldErrors === undefined && state.values === undefined;
  const hasErrors = Object.keys(state.fieldErrors || {}).length > 0;
  const isSuccess = state.ok && !isPending && !hasErrors;

  const firstName = state.values?.fullName?.split(" ")[0] || "";

  if (isSuccess) {
    return (
      <div className="bg-cream-surface border border-border rounded-2xl p-6 md:p-8 shadow-sm" role="status">
        <h2 className="text-2xl font-bold text-black mb-4">Request received</h2>
        <p className="text-text-muted mb-6">
          Thanks {firstName}. We have your request for {state.values?.guests} guests on{" "}
          {state.values?.date} at {state.values?.time}. We will confirm your booking shortly.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream bg-white text-deep-red border border-deep-red hover:bg-deep-red/10 px-6 py-3 text-base"
        >
          Make another booking
        </button>
        <p className="text-sm text-text-muted text-center md:text-left mt-4">
          Demo website for portfolio purposes.
        </p>
      </div>
    );
  }

  const getError = (field: string) => state.fieldErrors?.[field]?.[0];
  const hasError = (field: string) => !!getError(field);
  const getValue = (field: string) => state.values?.[field] ?? "";

  return (
    <div className="bg-cream-surface border border-border rounded-2xl p-6 md:p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-black mb-6">Your details</h2>

      <form action={formAction} className="space-y-6" noValidate>
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
              defaultValue={getValue("fullName")}
              className={`w-full min-w-0 rounded-lg border bg-white px-4 py-3 text-base text-black placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${
                hasError("fullName")
                  ? "border-deep-red focus-visible:ring-deep-red"
                  : "border-border"
              }`}
              placeholder="John Smith"
              aria-invalid={hasError("fullName")}
              aria-describedby={hasError("fullName") ? "fullName-error" : undefined}
            />
            {hasError("fullName") && (
              <p id="fullName-error" className="mt-1 text-sm text-deep-red" role="alert">
                {getError("fullName")}
              </p>
            )}
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
              defaultValue={getValue("phone")}
              className={`w-full min-w-0 rounded-lg border bg-white px-4 py-3 text-base text-black placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${
                hasError("phone")
                  ? "border-deep-red focus-visible:ring-deep-red"
                  : "border-border"
              }`}
              placeholder="0161 555 1234"
              aria-invalid={hasError("phone")}
              aria-describedby={hasError("phone") ? "phone-error" : undefined}
            />
            {hasError("phone") && (
              <p id="phone-error" className="mt-1 text-sm text-deep-red" role="alert">
                {getError("phone")}
              </p>
            )}
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
              defaultValue={getValue("email")}
              className={`w-full min-w-0 rounded-lg border bg-white px-4 py-3 text-base text-black placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${
                hasError("email")
                  ? "border-deep-red focus-visible:ring-deep-red"
                  : "border-border"
              }`}
              placeholder="john@example.com"
              aria-invalid={hasError("email")}
              aria-describedby={hasError("email") ? "email-error" : undefined}
            />
            {hasError("email") && (
              <p id="email-error" className="mt-1 text-sm text-deep-red" role="alert">
                {getError("email")}
              </p>
            )}
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
              max={12}
              required
              defaultValue={getValue("guests")}
              className={`w-full min-w-0 rounded-lg border bg-white px-4 py-3 text-base text-black placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${
                hasError("guests")
                  ? "border-deep-red focus-visible:ring-deep-red"
                  : "border-border"
              }`}
              placeholder="2"
              aria-invalid={hasError("guests")}
              aria-describedby={hasError("guests") ? "guests-error" : undefined}
            />
            {hasError("guests") && (
              <p id="guests-error" className="mt-1 text-sm text-deep-red" role="alert">
                {getError("guests")}
              </p>
            )}
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
              defaultValue={getValue("date")}
              min={minDate}
              className={`w-full min-w-0 rounded-lg border bg-white px-4 py-3 text-base text-black placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${
                hasError("date")
                  ? "border-deep-red focus-visible:ring-deep-red"
                  : "border-border"
              }`}
              aria-invalid={hasError("date")}
              aria-describedby={hasError("date") ? "date-error" : undefined}
            />
            {hasError("date") && (
              <p id="date-error" className="mt-1 text-sm text-deep-red" role="alert">
                {getError("date")}
              </p>
            )}
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
              defaultValue={getValue("time")}
              step={1800}
              className={`w-full min-w-0 rounded-lg border bg-white px-4 py-3 text-base text-black placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${
                hasError("time")
                  ? "border-deep-red focus-visible:ring-deep-red"
                  : "border-border"
              }`}
              aria-invalid={hasError("time")}
              aria-describedby={hasError("time") ? "time-error" : undefined}
            />
            {hasError("time") && (
              <p id="time-error" className="mt-1 text-sm text-deep-red" role="alert">
                {getError("time")}
              </p>
            )}
          </div>
        </div>

        <p className="text-sm text-text-muted">
          {openingHours.display.monThu} &bull; {openingHours.display.friSat} &bull;{" "}
          {openingHours.display.sun}
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
            defaultValue={getValue("specialRequests")}
          />
        </div>

        <div
          style={{ position: "absolute", left: "-9999px" }}
          aria-hidden="true"
        >
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {state.message && (
          <div
            role="alert"
            className="border border-deep-red/40 bg-white text-black p-4 rounded-lg mb-4"
          >
            {state.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full md:w-auto inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-50 disabled:cursor-not-allowed bg-deep-red text-cream-surface hover:bg-deep-red-dark px-6 py-3 text-base"
        >
          {isPending ? "Sending..." : "Request reservation"}
        </button>

        <p className="text-sm text-text-muted text-center md:text-left">
          Demo website for portfolio purposes.
        </p>
      </form>
    </div>
  );
}