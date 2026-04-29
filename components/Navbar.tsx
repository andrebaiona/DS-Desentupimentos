"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/o-nosso-trabalho", label: "O Nosso Trabalho" },
  { href: "/contactos", label: "Contactos" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#0249b6" }} className="sticky top-0 z-50 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/cropped-logo.jpg"
            alt="DS Desentupimentos"
            width={100}
            height={100}
            className="object-contain"
          />
        </Link>

        {/* Desktop menu - centered */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            className="flex gap-1 rounded-full px-2 py-2 backdrop-blur-sm"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full font-semibold transition-all duration-200 text-base"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact button - desktop */}
        <Link
          href="/contactos"
          className="hidden md:block bg-yellow-300 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors duration-200 flex-shrink-0 text-base"
        >
          Contacto
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: "#0249b6" }} className="md:hidden border-t border-white border-opacity-20">
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-6 py-3 text-white hover:bg-white hover:bg-opacity-20 rounded-lg font-semibold transition-all duration-200 text-base"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contactos"
              className="block w-full bg-yellow-300 text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors duration-200 text-center text-base"
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
