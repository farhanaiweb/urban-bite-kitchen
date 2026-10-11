"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui";

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

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      menuRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      previousActiveElement.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && pathname !== previousPathname.current) {
      setIsOpen(false);
    }
    previousPathname.current = pathname;
  }, [pathname, isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
    if (e.key === "Tab" && isOpen) {
      const focusableElements = menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements && focusableElements.length > 0) {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-black hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-red focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      <div
        ref={menuRef}
        id="mobile-menu"
        role="navigation"
        aria-label="Main navigation"
        className={`md:hidden fixed inset-0 z-50 bg-cream/98 backdrop-blur-sm flex flex-col items-center justify-center gap-8 transition-opacity duration-200 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
      >
        <nav className="flex flex-col items-center gap-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-2xl font-semibold transition-colors ${pathname === link.href ? "text-deep-red" : "text-black hover:text-deep-red"}`}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="primary"
            size="lg"
            fullWidth
            as="a"
            href="/reservations"
            onClick={() => setIsOpen(false)}
          >
            Book a Table
          </Button>
        </nav>
      </div>
    </>
  );
}