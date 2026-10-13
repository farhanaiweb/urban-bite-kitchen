import { z } from "zod";
import { siteConfig } from "@/config/site";
import { bookingConfig } from "@/config/booking";

const phoneRegex = /^[\d\s+().-]+$/;
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const timeRegex = /^\d{2}:\d{2}$/;

function parseTimeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function formatTimeFromMinutes(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
}

function getLondonToday(): string {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: bookingConfig.timezone,
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

function getLondonNow(): Date {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: bookingConfig.timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const parts = formatter.formatToParts(now);
  const year = parts.find((p) => p.type === "year")!.value;
  const month = parts.find((p) => p.type === "month")!.value;
  const day = parts.find((p) => p.type === "day")!.value;
  const hour = parts.find((p) => p.type === "hour")!.value;
  const minute = parts.find((p) => p.type === "minute")!.value;
  return new Date(`${year}-${month}-${day}T${hour}:${minute}:00`);
}

function getDayName(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  // Create date at noon UTC to avoid DST issues
  const date = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: bookingConfig.timezone,
    weekday: "long",
  });
  return formatter.format(date);
}

function compareDatesInLondon(dateStr1: string, dateStr2: string): number {
  const [y1, m1, d1] = dateStr1.split("-").map(Number);
  const [y2, m2, d2] = dateStr2.split("-").map(Number);
  if (y1 !== y2) return y1 - y2;
  if (m1 !== m2) return m1 - m2;
  return d1 - d2;
}

function addDaysToDateStr(dateStr: string, days: number): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
  date.setUTCDate(date.getUTCDate() + days);
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function getOpeningHoursForDay(dayName: string) {
  return siteConfig.openingHours.structured.find((h) => h.day === dayName);
}

function isTimeOnGrid(time: string): boolean {
  const minutes = parseTimeToMinutes(time);
  return minutes % bookingConfig.slotMinutes === 0;
}

export const reservationSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name must be at most 100 characters"),
    phone: z
      .string()
      .trim()
      .min(7, "Phone number must be at least 7 characters")
      .max(20, "Phone number must be at most 20 characters")
      .regex(phoneRegex, "Phone number contains invalid characters"),
    email: z
      .string()
      .trim()
      .toLowerCase()
      .email("Invalid email address")
      .max(254, "Email must be at most 254 characters"),
    guests: z
      .coerce
      .number()
      .int("Guests must be a whole number")
      .min(1, "At least 1 guest required")
      .max(bookingConfig.maxGuests, `Maximum ${bookingConfig.maxGuests} guests per booking`),
    date: z
      .string()
      .regex(dateRegex, "Date must be in YYYY-MM-DD format")
      .refine((val) => !isNaN(Date.parse(val)), "Invalid date"),
    time: z
      .string()
      .regex(timeRegex, "Time must be in HH:MM format"),
    specialRequests: z
      .string()
      .trim()
      .max(500, "Special requests must be at most 500 characters")
      .optional()
      .transform((val) => (val === "" ? undefined : val)),
    website: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.website && data.website.trim() !== "") {
      return;
    }

    const londonToday = getLondonToday();

    if (compareDatesInLondon(data.date, londonToday) < 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["date"],
        message: "Booking date cannot be in the past",
      });
      return;
    }

    const maxDate = addDaysToDateStr(londonToday, bookingConfig.maxAdvanceDays);
    if (compareDatesInLondon(data.date, maxDate) > 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["date"],
        message: `Bookings can only be made up to ${bookingConfig.maxAdvanceDays} days in advance`,
      });
      return;
    }

    const dayName = getDayName(data.date);
    const hours = getOpeningHoursForDay(dayName);

    if (!hours) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["date"],
        message: `We are closed on ${dayName}s`,
      });
      return;
    }

    if (!isTimeOnGrid(data.time)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["time"],
        message: `Time must be on a ${bookingConfig.slotMinutes}-minute grid (e.g., 12:00, 12:30, 13:00)`,
      });
      return;
    }

    const openMinutes = parseTimeToMinutes(hours.open);
    let closeMinutes = parseTimeToMinutes(hours.close);
    if (hours.close === "00:00") {
      closeMinutes = 24 * 60;
    }
    const lastSeatingMinutes = closeMinutes - bookingConfig.lastSeatingMinutesBeforeClose;

    const timeMinutes = parseTimeToMinutes(data.time);

    if (timeMinutes < openMinutes || timeMinutes > lastSeatingMinutes) {
      const lastSeatingTime = formatTimeFromMinutes(lastSeatingMinutes);
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["time"],
        message: `Last booking on ${dayName}s is ${lastSeatingTime}`,
      });
      return;
    }

    if (compareDatesInLondon(data.date, londonToday) === 0) {
      const londonNow = getLondonNow();
      const nowMinutes = londonNow.getHours() * 60 + londonNow.getMinutes();

      if (timeMinutes <= nowMinutes) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["time"],
          message: "Time must be later than current time",
        });
      }
    }
  });

export type ReservationInput = z.infer<typeof reservationSchema>;
export type ReservationFieldErrors = Record<string, string[]>;