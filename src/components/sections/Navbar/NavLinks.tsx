"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            pathname === link.href
              ? "bg-deep-red text-cream-surface"
              : "text-black hover:text-deep-red hover:bg-black/5"
          }`}
          aria-current={pathname === link.href ? "page" : undefined}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}