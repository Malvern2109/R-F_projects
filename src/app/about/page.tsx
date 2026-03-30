import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | R&f Projects",
  description:
    "Learn about R&f Projects — a specialist aluminium fabrication company with over 6 years of experience delivering premium gates, window frames, and railings.",
};

const VALUES = [
  {
    icon: "🏆",
    title: "Quality First",
    body: "We never compromise on material grade or workmanship. Every weld, cut, and finish is inspected before it leaves our workshop.",
  },
  {
    icon: "🤝",
    title: "Client Focus",
    body: "Every project is treated as if it were our own home. We listen, advise, and deliver exactly what the client envisions.",
  },
  {
    icon: "⏱️",
    title: "On-Time Delivery",
    body: "We respect your timelines and communicate proactively at every stage of fabrication and delivery.",
  },
  {
    icon: "🔬",
    title: "Precision Engineering",
    body: "Our workshop uses modern CNC cutting and welding equipment to ensure exact tolerances on every product.",
  },
  {
    icon: "🌍",
    title: "Local Expertise",
    body: "Based in Zimbabwe, we understand local construction needs, climate conditions, and architectural styles.",
  },
  {
    icon: "♻️",
    title: "Sustainable Materials",
    body: "Aluminium is 100% recyclable. We source responsibly and minimise waste throughout our production process.",
  },
];

const STATS = [
  { value: "6+",  label: "Years in Business" },
  { value: "15+", label: "Projects Delivered" },
  { value: "100%", label: "Aluminium Certified" },
  { value: "24h",  label: "Quote Turnaround" },
];

const MILESTONES = [
  { year: "2018", event: "R&f Projects founded with a small workshop and a big vision." },
  { year: "2019", event: "Expanded into commercial projects — delivering gates and frames for office complexes." },
  { year: "2020", event: "Invested in modern CNC cutting equipment, doubling production capacity." },
  { year: "2022", event: "Reached 400+ completed projects across residential and commercial sectors." },
  { year: "2026", event: "Launched our online presence to better serve clients across Zimbabwe." },
];

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* ── Hero banner ── */}
      <div className="relative h-72 md:h-96 bg-slate-900 overflow-hidden">
        <Image
          src="/images/gallery/gallery-39.jpeg"
          alt="R&f Projects workshop"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-20 pb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-blue-400" />
            <span className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em]">
              Who We Are
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">About R&amp;f Projects</h1>
        </div>
      </div>

      {/* ── Our Story ── */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-blue-600" />
              <span className="text-blue-600 font-semibold text-xs uppercase tracking-[0.2em]">OUR STORY
              </span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              10+ Years of Crafting
              <br />
              <span className="text-blue-600">Aluminium Excellence</span>
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                R&amp;F Projects was founded with a simple belief that aluminium fabrication
                should combine engineering precision with genuine craftsmanship. Over the past
                6 years, we have grown from a small workshop into one of Zimbabwe&apos;s trusted
                aluminium manufacturers.
              </p>
              <p>
                Our workshop is equipped with modern cutting, welding, and powder-coating
                equipment to ensure every product meets the highest standards. We take pride
                in our work and stand behind every gate, frame, and railing we produce.
              </p>
              <p>
                From a simple garden gate to complex architectural glazing systems, we work
                closely with clients, architects, and contractors to deliver exactly what
                the project demands on time, every time.
              </p>
            </div>
          </div>

          {/* Image collage */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/gallery/gallery-04.jpeg"
                alt="R&f Projects work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden mt-6">
              <Image
                src="/images/gallery/gallery-08.jpeg"
                alt="R&f Projects work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/gallery/gallery-15.jpeg"
                alt="R&f Projects work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden mt-6">
              <Image
                src="/images/gallery/gallery-22.jpeg"
                alt="R&f Projects work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-blue-600 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-blue-200 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-blue-600" />
            <span className="text-blue-600 font-semibold text-xs uppercase tracking-[0.2em]">
              What Drives Us
            </span>
            <div className="h-px w-8 bg-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-slate-900">Our Values</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 group"
            >
              <span className="text-3xl mb-4 block">{value.icon}</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {value.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 bg-slate-950 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-blue-400" />
              <span className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em]">
                Our Journey
              </span>
              <div className="h-px w-8 bg-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-white">How We Got Here</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-800" />

            <div className="space-y-10">
              {MILESTONES.map((m, i) => (
                <div key={i} className="flex gap-8 items-start">
                  {/* Dot */}
                  <div className="relative flex-shrink-0 w-12 flex justify-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mt-1.5 ring-4 ring-slate-950" />
                  </div>
                  {/* Content */}
                  <div className="pb-4">
                    <span className="text-blue-400 font-bold text-sm font-mono">{m.year}</span>
                    <p className="text-slate-300 mt-1 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Ready to work with us?
        </h2>
        <p className="text-slate-500 max-w-lg mx-auto mb-8">
          Get in touch with us today for a free, no-obligation quote on any aluminium fabrication project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            Get A Free Quote →
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-2 border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </section>

    </div>
  );
}
