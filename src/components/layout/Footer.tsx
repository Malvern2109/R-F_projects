import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

const PRODUCTS_LINKS = [
  { label: "Aluminium Gates", href: "/products/aluminium-gates" },
  { label: "Window Frames", href: "/products/window-frames" },
  { label: "Aluminium Doors", href: "/products/aluminium-doors" },
  { label: "Railings & Balustrades", href: "/products/railings" },
  { label: "Custom Fabrication", href: "/products/custom-aluminium" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400">

      {/* ── Main footer content ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-sm">R&f</span>
              </div>
              <div>
                <span className="text-white font-extrabold text-lg tracking-tight leading-none block">
                  {SITE_NAME}
                </span>
                <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
                  Aluminium Fabrication
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Premium aluminium gates, window frames, doors, railings, and custom
              architectural products — precision-crafted to last a lifetime.
            </p>
            {/* Social / WhatsApp */}
            <a
              href="https://wa.me/263778808516"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
            >
              💬 WhatsApp Us
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.15em]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.15em]">
              Products
            </h4>
            <ul className="space-y-3">
              {PRODUCTS_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.15em]">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5">📍</span>
                <span className="text-slate-400 leading-snug">Harare, Zimbabwe</span>
              </li>
              <li>
                <a
                  href="tel:+263778808516"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                >
                  <span>📞</span>
                  +263 778 808 516
                </a>
              </li>
              <li>
                <a
                  href="tel:+263785148773"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                >
                  <span>📞</span>
                  +263 785 148 773
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@rfprojects.co.zw"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                >
                  <span>✉️</span>
                  rfprojects2@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span>🕐</span>
                <span className="text-slate-400">Mon – Sat: 8am – 5pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-slate-800 py-6 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <span>© {currentYear} {SITE_NAME}. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-400 transition-colors">About</Link>
            <Link href="/gallery" className="hover:text-slate-400 transition-colors">Gallery</Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
