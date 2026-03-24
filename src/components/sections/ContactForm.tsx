"use client";

import { useState } from "react";
import type { ContactFormData } from "@/types";

const INITIAL_STATE: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const inputClass =
  "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition bg-white";

const labelClass = "block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5";

// R&f Projects WhatsApp number (no + or spaces)
const WHATSAPP_NUMBER = "263778808516";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_STATE);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    // Build a nicely formatted WhatsApp message
    const message = [
      `👋 *New Quote Request — R&f Projects Website*`,
      ``,
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      form.phone ? `*Phone:* ${form.phone}` : null,
      `*Product / Service:* ${form.subject}`,
      ``,
      `*Project Details:*`,
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab with the pre-filled message
    window.open(whatsappUrl, "_blank");

    setStatus("success");
    setForm(INITIAL_STATE);
  }

  // ── Success screen ──
  if (status === "success") {
    return (
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">WhatsApp Opened!</h2>
          <p className="text-slate-500 mb-3">
            Your message has been pre-filled in WhatsApp. Just hit <strong>Send</strong> to
            submit your quote request to R&amp;f Projects.
          </p>
          <p className="text-slate-400 text-sm mb-8">
            Didn&apos;t open automatically?{" "}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline font-medium"
            >
              Click here to open WhatsApp
            </a>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              💬 Open WhatsApp
            </a>
            <button
              onClick={() => setStatus("idle")}
              className="inline-flex items-center justify-center gap-2 border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Send Another Enquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* ── Left: Info panel ── */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-blue-600" />
                <span className="text-blue-600 font-semibold text-xs uppercase tracking-[0.2em]">
                  Let&apos;s Talk
                </span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-4">
                Request a
                <br />
                <span className="text-blue-600">Free Quote</span>
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Fill in the form and we&apos;ll receive your enquiry directly on WhatsApp —
                we&apos;ll respond within 24 hours with a detailed quote at no obligation.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {[
                { step: "01", title: "Fill in the form", desc: "Tell us your project details, dimensions, and finish preferences." },
                { step: "02", title: "Sent via WhatsApp", desc: "Your enquiry opens in WhatsApp, ready to send in one tap." },
                { step: "03", title: "We respond fast", desc: "Our team replies within 24 hours with a detailed quote." },
                { step: "04", title: "We get to work", desc: "Once approved, fabrication begins promptly." },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-4">
                  <span className="text-blue-600 font-bold text-sm font-mono mt-0.5 w-6 flex-shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{s.title}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              {[
                { icon: "⚡", text: "24h Response" },
                { icon: "💬", text: "WhatsApp Direct" },
                { icon: "📐", text: "Custom Sizing" },
                { icon: "🛡️", text: "Quality Guaranteed" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2 text-sm text-slate-600">
                  <span>{b.icon}</span>
                  <span className="font-medium">{b.text}</span>
                </div>
              ))}
            </div>

            {/* Direct WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              💬 Chat directly on WhatsApp
            </a>
          </div>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-100 space-y-6"
            >
              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Your Phone Number</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+263 778 808 516"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className={inputClass}
                />
              </div>

              {/* Product */}
              <div>
                <label className={labelClass}>Product / Service *</label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="">Select a product…</option>
                  <option value="Aluminium Gates">Aluminium Gates</option>
                  <option value="Window Frames">Window Frames</option>
                  <option value="Aluminium Doors">Aluminium Doors</option>
                  <option value="Railings & Balustrades">Railings &amp; Balustrades</option>
                  <option value="Custom Aluminium Fabrication">Custom Aluminium Fabrication</option>
                  <option value="Other / Not Sure">Other / Not Sure</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className={labelClass}>Project Details *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Describe your project — dimensions, quantities, finish preferences, site location…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-green-600 hover:bg-green-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
              >
                💬 Send via WhatsApp →
              </button>

              <p className="text-center text-xs text-slate-400">
                Submitting will open WhatsApp with your message pre-filled. Your details go
                directly to R&amp;f Projects — no middleman.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
