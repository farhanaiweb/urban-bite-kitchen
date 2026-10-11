import type { Offer } from "@/types";

export const offers = [
  {
    id: "student-meal-deal",
    title: "Student Meal Deal",
    description: "Burger + fries + drink",
    price: 9.99,
    validFrom: "2026-10-01",
    validTo: "2026-12-31",
    terms: "Demo offer for portfolio purposes only",
    image: "/images/demo/student-meal-deal.webp",
    ctaText: "Book a Table",
    ctaLink: "/reservations",
    isDemo: true,
  },
  {
    id: "family-feast",
    title: "Family Feast",
    description: "For 4 people",
    price: 19.99,
    validFrom: "2026-10-01",
    validTo: "2026-12-31",
    terms: "Demo offer for portfolio purposes only",
    image: "/images/demo/family-feast.webp",
    ctaText: "View Menu",
    ctaLink: "/menu",
    isDemo: true,
  },
] as Offer[];