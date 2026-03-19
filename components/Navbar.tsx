"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/servicos", label: "Serviços" },
  { href: "/o-nosso-trabalho", label: "O Nosso Trabalho" },
  { href: "/contactos", label: "Contactos" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#f3c400" }} className="border-b-4 border-black text-slate-900">
      <div className="max-w-6xl mx-auto border-x-2 border-black">
        <div className="hidden md:flex min-h-[120px] items-stretch">
          <Link href="/" className="flex flex-1 items-center gap-3 border-r-4 border-black px-6">
            <span className="text-3xl leading-none">Logo</span>
            <span className="text-2xl font-semibold tracking-tight">DS Desentupimentos</span>
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex min-w-44 px-6 items-center justify-center border-r-4 border-black text-2xl lg:text-3xl font-medium leading-tight hover:bg-yellow-300 transition-colors duration-200 last:border-r-0"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-between px-4 py-3 md:hidden">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-semibold tracking-tight">DS Desentupimentos</span>
          </Link>

          <button
            className="flex flex-col gap-1 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="block w-6 h-0.5 bg-slate-900"></span>
            <span className="block w-6 h-0.5 bg-slate-900"></span>
            <span className="block w-6 h-0.5 bg-slate-900"></span>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t-2 border-black px-4 py-3">
            <ul className="flex flex-col text-base font-medium">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b-2 border-black last:border-b-0">
                  <Link
                    href={link.href}
                    className="block py-2 hover:bg-yellow-300 transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
