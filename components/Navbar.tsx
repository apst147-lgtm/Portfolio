"use client";

import { useState, useEffect } from "react";
import { portfolio } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Work", "About", "Contact"];
  const dark = !scrolled; // dark bg hero → white text

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-white/95 backdrop-blur-sm border-b border-neutral-100 shadow-sm"
        : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className={`text-xs font-semibold tracking-[0.25em] uppercase transition-colors ${dark ? "text-white" : "text-neutral-900"}`}>
          {portfolio.name}
        </a>

        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}
                className={`text-xs tracking-widest uppercase transition-colors ${
                  dark ? "text-white/70 hover:text-white" : "text-neutral-500 hover:text-neutral-900"
                }`}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {[0,1,2].map((i) => (
            <span key={i} className={`block w-5 h-px transition-all duration-200 ${dark ? "bg-white" : "bg-neutral-900"} ${
              menuOpen && i===0 ? "rotate-45 translate-y-2" :
              menuOpen && i===1 ? "opacity-0" :
              menuOpen && i===2 ? "-rotate-45 -translate-y-2" : ""
            }`} />
          ))}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}
              className="text-sm text-neutral-600 hover:text-neutral-900"
              onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
