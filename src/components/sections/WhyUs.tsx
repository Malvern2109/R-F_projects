"use client";

import { motion } from "framer-motion";

const REASONS = [
  {
    number: "01",
    icon: "🏭",
    title: "In-House Manufacturing",
    description:
      "Everything is fabricated at our own facility — no outsourcing, full quality control from raw material to finished product.",
  },
  {
    number: "02",
    icon: "📐",
    title: "Custom to Your Specs",
    description:
      "We manufacture to exact measurements and finish requirements. No off-the-shelf compromises — ever.",
  },
  {
    number: "03",
    icon: "🛡️",
    title: "Corrosion Resistant",
    description:
      "Premium aluminium alloys with powder-coat finishes rated for harsh climates and long-term durability.",
  },
  {
    number: "04",
    icon: "⚡",
    title: "Fast Lead Times",
    description:
      "Efficient production processes mean most orders are completed and delivered ahead of schedule.",
  },
  {
    number: "05",
    icon: "💬",
    title: "Expert Guidance",
    description:
      "Our team advises on design, sizing, and finish options to ensure the best outcome for your project.",
  },
  {
    number: "06",
    icon: "🔧",
    title: "Installation Support",
    description:
      "We offer installation guidance and can recommend trusted installation partners in your area.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative">

      {/* Background subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-blue-400" />
              <span className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em]">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              The Difference Is
              <br />
              <span className="text-blue-400">in the Detail</span>
            </h2>
          </div>
          <p className="text-slate-400 leading-relaxed max-w-md lg:ml-auto">
            We&apos;ve spent over a decade perfecting our process. Here&apos;s why contractors,
            architects, and homeowners keep coming back to R&amp;f Projects.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800 rounded-2xl overflow-hidden">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-slate-950 p-8 group hover:bg-slate-900 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-3xl">{reason.icon}</span>
                <span className="text-slate-700 font-bold text-2xl font-mono group-hover:text-blue-800 transition-colors">
                  {reason.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {reason.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800 rounded-2xl px-8 py-6">
          <p className="text-slate-300 text-lg font-medium">
            Ready to start your project with us?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 whitespace-nowrap"
          >
            Get a Free Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
