import type { Review } from "@/types";

const demoReviews: Review[] = [
  {
    id: "review-1",
    authorName: "John D.",
    rating: 5,
    comment: "Best burgers in Manchester! The smash patty is cooked perfectly and the sauce is amazing.",
    date: "2026-09-15",
    source: "direct",
    isDemo: true,
  },
  {
    id: "review-2",
    authorName: "Sarah K.",
    rating: 5,
    comment: "Crispy chicken burger was delicious and the fries were hot. Great takeaway service.",
    date: "2026-08-22",
    source: "direct",
    isDemo: true,
  },
  {
    id: "review-3",
    authorName: "Mike T.",
    rating: 4,
    comment: "Good portion sizes and reasonable prices. The loaded fries are a must-try.",
    date: "2026-07-30",
    source: "direct",
    isDemo: true,
  },
] as Review[];

export { demoReviews };