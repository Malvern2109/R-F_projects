"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const STATS = [
  { value: "6+",  label: "Years Experience" },
  { value: "15+", label: "Projects Completed" },
  { value: "44+",  label: "Portfolio Photos" },
  { value: "24h",  label: "Quote Turnaround" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a1628]">

      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery/gallery-33.jpg"
          alt="R&f Projects aluminium work"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/60 to-transparent" />
      </div>

      {/* Animated dot grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32">
        <div className="max-w-2xl">

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-blue-400" />
            <span className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em]">
            Precision Aluminium Fabrication
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
          >
            Built Strong.
            <br />
            <span className="text-blue-400">
              Built to Last.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
          >
            R&amp;F Projects manufactures premium aluminium gates, window frames, railings,
            and custom architectural products engineered for durability and designed for beauty.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-blue-900/40"
            >
              View Our Products
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200"
            >
              Get a Free Quote
            </Link>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 border border-slate-700/60 rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-sm"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-8 py-6 ${i < STATS.length - 1 ? "border-r border-slate-700/60" : ""}`}
            >
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}


