import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero/Hero";
import { About } from "@/components/sections/About/About";
import { FeaturedMenu } from "@/components/sections/FeaturedMenu/FeaturedMenu";
import { PopularDishes } from "@/components/sections/PopularDishes/PopularDishes";
import { Offers } from "@/components/sections/Offers/Offers";
import { Reviews } from "@/components/sections/Reviews/Reviews";

export const metadata: Metadata = {
  title: "Home",
  description: "Modern fast-food restaurant in Manchester serving quality burgers, sides, and shakes. Dine in, takeaway, or delivery.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedMenu />
      <PopularDishes />
      <Offers />
      <Reviews />
    </>
  );
}