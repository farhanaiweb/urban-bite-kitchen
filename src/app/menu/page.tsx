import type { Metadata } from "next";
import { MenuList } from "@/components/sections/MenuList/MenuList";
import { Section, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Menu",
  description: "Browse our menu of quality burgers, sides, shakes, and drinks at Urban Bite Kitchen in Manchester.",
};

export default function MenuPage() {
  return (
    <Section id="menu">
      <Container>
        <MenuList />
      </Container>
    </Section>
  );
}