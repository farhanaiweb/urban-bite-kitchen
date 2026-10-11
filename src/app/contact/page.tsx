import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Urban Bite Kitchen in Manchester. Find our address, phone, email, and opening hours.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <h1 className="sr-only">Urban Bite Kitchen — Contact</h1>
      <p className="text-center py-20 text-text-muted">
        [PLACEHOLDER] Contact page — Address, map, contact form, opening hours will be added in later phases
      </p>
    </div>
  );
}