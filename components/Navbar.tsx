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
    <nav style={{ backgroundColor: "#f3c400" }} className="border-b-4 border-black text-slate-900 shadow-[0_4px_0_0_#000]">
      <div className="max-w-6xl mx-auto border-x-2 border-black">
        <div className="hidden md:flex min-h-[120px] items-stretch">
          <Link href="/" className="flex flex-1 items-center gap-4 border-r-4 border-black px-6 bg-yellow-300/40 hover:bg-yellow-300/60 transition-colors duration-200">
            <span
              aria-hidden="true"
              className="inline-flex h-14 w-14 items-center justify-center border-2 border-black bg-white text-xs font-bold tracking-wide"
            >
              LOGO
            </span>
            <span className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">Opcional</span>
              <span className="text-2xl font-semibold tracking-tight font-display">DS Desentupimentos</span>
            </span>
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex min-w-44 px-6 items-center justify-center border-r-4 border-black text-2xl lg:text-3xl font-medium leading-tight hover:bg-yellow-300 transition-colors duration-200 last:border-r-0 font-display"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-between px-4 py-3 md:hidden">
          <Link href="/" className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center border-2 border-black bg-white text-[10px] font-bold"
            >
              LOGO
            </span>
            <span className="text-xl font-semibold tracking-tight font-display">DS Desentupimentos</span>
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
