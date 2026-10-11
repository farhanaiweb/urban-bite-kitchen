import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-cream border-b border-border">
      <div className="mx-auto max-w-[80rem] px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-md"
            aria-label={`${siteConfig.name} - Home`}
          >
            <span className="font-archivo font-extrabold text-xl md:text-2xl text-black">
              Urban Bite
            </span>
            <span className="font-archivo font-extrabold text-xl md:text-2xl text-deep-red">
              Kitchen
            </span>
          </Link>

          <NavLinks />

          <div className="hidden md:flex items-center">
            <Button variant="primary" as="a" href="/reservations">
              Book a Table
            </Button>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}