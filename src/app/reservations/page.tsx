import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservations",
  description: "Book a table at Urban Bite Kitchen in Manchester. Reserve online for dine-in experience.",
};

export default function ReservationsPage() {
  return (
    <div className="min-h-screen">
      <h1 className="sr-only">Urban Bite Kitchen — Reservations</h1>
      <p className="text-center py-20 text-text-muted">
        [PLACEHOLDER] Reservations page — Booking form, availability, confirmation will be added in later phases
      </p>
    </div>
  );
}