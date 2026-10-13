import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ReservationForm } from "@/components/sections/ReservationForm/ReservationForm";
import { ReservationAside } from "@/components/sections/ReservationAside/ReservationAside";

export const metadata: Metadata = {
  title: "Book a Table",
  description: "Reserve a table at Urban Bite Kitchen in Manchester. Tell us when you're coming and how many guests, and we'll confirm your booking by email.",
};

export default function ReservationsPage() {
  return (
    <>
      <Section className="bg-cream">
        <Container>
          <p className="text-sm font-semibold uppercase text-deep-red">Reservations</p>
          <h1 className="font-archivo font-bold uppercase text-black text-4xl md:text-5xl mt-2">
            Book a table
          </h1>
          <p className="text-base md:text-lg text-text-muted mt-4 max-w-2xl">
            Tell us when you are coming and how many of you there will be. We will confirm your booking by email.
          </p>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-2 w-full min-w-0">
              <ReservationForm />
            </div>
            <div className="w-full min-w-0">
              <ReservationAside />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}