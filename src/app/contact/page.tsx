import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact | R&f Projects",
  description:
    "Get in touch with R&f Projects for a free quote on aluminium gates, window frames, doors, railings and custom fabrication.",
};

const CONTACT_DETAILS = [
  {
    icon: "📍",
    label: "Visit Us",
    value: "25 bishop Gaul Avenue Belvedere Harare"
  },
  {
    icon: "📞",
    label: "Call Us",
    value: "+263 778 808 516",
  },
  {
    icon: "✉️",
    label: "Email Us",
    value: "rfprojects2@gmail.com",
  },
  {
    icon: "🕐",
    label: "Working Hours",
    value: "Monday – Saturday: 8am – 5pm",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero banner ── */}
      <div className="relative h-64 md:h-80 bg-slate-900 overflow-hidden">
        <Image
          src="/images/gallery/gallery-12.jpeg"
          alt="R&f Projects contact"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-20 pb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-blue-400" />
            <span className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em]">
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
          <p className="text-slate-300 mt-2 max-w-lg text-sm md:text-base">
            Fill in the form and we&apos;ll get back to you within 24 hours with a free,
            no-obligation quote.
          </p>
        </div>
      </div>

      {/* ── Contact info cards ── */}
      <div className="bg-blue-600 py-10 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {CONTACT_DETAILS.map((detail) => (
            <div key={detail.label} className="flex items-start gap-3">
              <span className="text-2xl">{detail.icon}</span>
              <div>
                <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-0.5">
                  {detail.label}
                </p>
                <p className="text-white text-sm font-medium">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Form section ── */}
      <ContactForm />

      {/* ── Map placeholder ── */}
      <div className="bg-slate-100 h-64 flex items-center justify-center border-t border-slate-200">
        <div className="text-center text-slate-400">
          <p className="text-2xl mb-2">📍</p>
          <p className="text-sm font-medium">Map coming soon</p>
          <p className="text-xs mt-1">123 Industrial Road, Harare, Zimbabwe</p>
        </div>
      </div>
    </div>
  );
}
