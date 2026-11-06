"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "../icons/menu.svg";
import CloseMenuIcon from "../icons/close.svg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `transition-colors ${
      pathname === href
        ? "text-primary-50 font-semibold"
        : "text-primary-200 hover:text-primary-50"
    }`;

  return (
    <header className="bg-primary-900/95 backdrop-blur shadow-md sticky top-0 z-50">
      <nav
        aria-label="Main"
        className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6"
      >
        <Link
          href="/"
          className="text-xl font-bold text-primary-100 hover:text-primary-50 transition-colors"
        >
          Luiz Seixas
        </Link>
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={linkClass(link.href)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-primary-100"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <CloseMenuIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </nav>
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute left-0 top-full w-full bg-primary-800 shadow-lg md:hidden animate-slide-down"
        >
          <ul className="flex flex-col px-6 py-4 text-lg">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`block py-3 ${linkClass(link.href)}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
