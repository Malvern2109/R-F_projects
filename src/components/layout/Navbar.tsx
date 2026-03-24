"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Top contact bar ── */}
      <div className="hidden md:block bg-slate-900 text-slate-400 text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span>Premium Aluminium Fabrication — Harare, Zimbabwe</span>
          <div className="flex items-center gap-6">
            <a href="tel:+263778808516" className="hover:text-white transition-colors flex items-center gap-1.5">
              📞 +263 778 808 516
            </a>
            <a href="tel:+263785148773" className="hover:text-white transition-colors flex items-center gap-1.5">
              📞 +263 785 148 773
            </a>
            <a href="mailto:info@rfprojects.co.zw" className="hover:text-white transition-colors">
              ✉️ info@rfprojects.co.zw
            </a>
          </div>
        </div>
      </div>

      {/* ── Main navbar ── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md border-b border-slate-100"
            : "bg-white/95 backdrop-blur-sm border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors">
              <span className="text-white font-black text-sm">R&f</span>
            </div>
            <div>
              <span className="text-lg font-extrabold text-slate-900 tracking-tight leading-none block">
                {SITE_NAME}
              </span>
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider leading-none">
                Aluminium Fabrication
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+263778808516"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              📞 Call Now
            </a>
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-sm"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile nav dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-screen border-t border-slate-100" : "max-h-0"
          }`}
        >
          <nav className="px-6 py-4 flex flex-col gap-1 bg-white">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 font-medium py-2.5 px-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-slate-100 space-y-2">
              <a
                href="tel:+263778808516"
                className="flex items-center gap-2 text-sm text-slate-600 py-2 px-3"
              >
                📞 +263 778 808 516
              </a>
              <a
                href="tel:+263785148773"
                className="flex items-center gap-2 text-sm text-slate-600 py-2 px-3"
              >
                📞 +263 785 148 773
              </a>
              <Link
                href="/contact"
                className="block text-center bg-blue-600 text-white font-semibold py-3 rounded-xl mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
