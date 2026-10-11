import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "Browse our menu of quality burgers, sides, shakes, and drinks at Urban Bite Kitchen in Manchester.",
};

export default function MenuPage() {
  return (
    <div className="min-h-screen">
      <h1 className="sr-only">Urban Bite Kitchen — Menu</h1>
      <p className="text-center py-20 text-text-muted">
        [PLACEHOLDER] Menu page — Categories, items, dietary filters will be added in later phases
      </p>
    </div>
  );
}