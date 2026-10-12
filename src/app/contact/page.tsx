import type { Metadata } from "next";
import { ContactInfo } from "@/components/sections/ContactInfo/ContactInfo";
import { ContactForm } from "@/components/sections/ContactForm/ContactForm";
import { Section, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Get in touch with Urban Bite Kitchen in Manchester. Find our address, phone, email, and opening hours.",
};

export default function ContactPage() {
  return (
    <Section id="contact">
      <Container>
        <div className="space-y-8">
          <h1 className="font-archivo font-extrabold text-3xl md:text-4xl lg:text-5xl uppercase tracking-wider text-black mb-6">
            Contact us
          </h1>
          <p className="text-lg leading-relaxed text-text-muted max-w-2xl">
            Have questions? Want to make a reservation or share feedback? We&rsquo;re here to help. Find all our contact details below or visit us at our Manchester location.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="w-full min-w-0">
              <ContactInfo />
            </div>
            <div className="w-full min-w-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}