import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/lib/constants";
import type { ProductCategory } from "@/types";

export const metadata: Metadata = {
  title: "Products | R&f Projects",
  description:
    "Browse our full range of premium aluminium gates, window frames, doors, railings, and custom fabrication work.",
};

const CATEGORY_LABELS: Record<ProductCategory, string> = {
  "gates":         "Gates",
  "window-frames": "Window Frames",
  "doors":         "Doors",
  "railings":      "Railings",
  "custom":        "Custom",
};

const CATEGORY_ICONS: Record<ProductCategory, string> = {
  "gates":         "🚪",
  "window-frames": "🪟",
  "doors":         "🚪",
  "railings":      "🔩",
  "custom":        "⚙️",
};

export default function ProductsPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero banner ── */}
      <div className="relative h-64 md:h-80 bg-slate-900 overflow-hidden">
        <Image
          src="/images/gallery/gallery-07.jpeg"
          alt="R&f Projects products"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-20 pb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-blue-400" />
            <span className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em]">
              What We Make
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Products</h1>
        </div>
      </div>

      {/* ── Intro strip ── */}
      <div className="bg-slate-50 border-b border-slate-100 py-6 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-slate-600 max-w-xl">
            All products are manufactured in-house to your exact specifications.
            <span className="font-semibold text-slate-800"> {PRODUCTS.length} product categories</span> available.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
          >
            Request a Quote →
          </Link>
        </div>
      </div>

      {/* ── Products grid ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 overflow-hidden bg-white flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <span>{CATEGORY_ICONS[product.category]}</span>
                    {CATEGORY_LABELS[product.category]}
                  </span>
                </div>
                {/* Number */}
                <div className="absolute top-4 right-4">
                  <span className="bg-slate-900/60 backdrop-blur-sm text-white text-xs font-mono font-bold px-2.5 py-1 rounded-full">
                    0{i + 1}
                  </span>
                </div>
                {/* In stock indicator */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <div className={`w-1.5 h-1.5 rounded-full ${product.inStock ? "bg-green-500" : "bg-amber-400"}`} />
                  <span className="text-xs font-semibold text-slate-700">
                    {product.inStock ? "Available" : "Lead time"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {product.shortDescription}
                </p>

                {/* Features preview */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.slice(0, 3).map((f) => (
                    <span
                      key={f}
                      className="text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200 px-2.5 py-1 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                  {product.features.length > 3 && (
                    <span className="text-xs font-medium bg-slate-50 text-slate-400 border border-slate-200 px-2.5 py-1 rounded-full">
                      +{product.features.length - 3} more
                    </span>
                  )}
                </div>

                {/* Finish swatches */}
                {product.finishOptions && (
                  <div className="mb-6">
                    <p className="text-xs text-slate-400 mb-2 font-medium uppercase tracking-wider">
                      Finishes
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.finishOptions.slice(0, 4).map((finish) => (
                        <span
                          key={finish}
                          className="text-xs text-slate-600 border border-slate-200 px-2 py-0.5 rounded"
                        >
                          {finish}
                        </span>
                      ))}
                      {product.finishOptions.length > 4 && (
                        <span className="text-xs text-slate-400 border border-slate-200 px-2 py-0.5 rounded">
                          +{product.finishOptions.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-500 transition-colors flex items-center gap-1">
                    View details
                    <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </span>
                  <span className="text-xs text-slate-400">Custom made</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-20 rounded-2xl bg-slate-900 p-10 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Don&apos;t see what you need?
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-8">
            We specialise in custom aluminium fabrication. If you have a unique requirement,
            get in touch and we&apos;ll design a solution specifically for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Discuss a Custom Project →
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Browse Our Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
