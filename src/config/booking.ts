/**
 * Booking rules — demo defaults the business can change.
 * All time calculations use Europe/London timezone.
 */

export const bookingConfig = {
  /** Slot interval in minutes (e.g., 30 = half-hour slots) */
  slotMinutes: 30,

  /** Last seating is this many minutes before closing time */
  lastSeatingMinutesBeforeClose: 60,

  /** Maximum guests per booking */
  maxGuests: 12,

  /** Maximum days in advance a booking can be made */
  maxAdvanceDays: 90,

  /** IANA timezone for business hours and validation */
  timezone: "Europe/London",
} as const;

export type BookingConfig = typeof bookingConfig;