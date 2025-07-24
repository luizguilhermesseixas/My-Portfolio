"use client";

import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@/icons/menu.svg";
import CloseMenuIcon from "@/icons/close.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-primary-900 shadow-md relative z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold text-primary-400 hover:text-primary-300 transition-colors">
          <Link href="/">Luiz Seixas</Link>
        </div>
        {/* Menu de navegação (desktop) */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Botão hamburger/close (mobile) */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <CloseMenuIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </nav>
      {/* Menu mobile dropdown */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full bg-primary-800 shadow-lg md:hidden animate-slide-down">
          <ul className="flex flex-col px-6 py-4 space-y-4 text-lg">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-primary-400 hover:text-primary-300 transition-colors"
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
