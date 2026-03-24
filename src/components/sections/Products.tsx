import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/lib/constants";

// Map each product slug to a real gallery image for the card
const PRODUCT_IMAGES: Record<string, string> = {
  "aluminium-gates":   "/images/gallery/gallery-01.jpeg",
  "window-frames":     "/images/gallery/gallery-05.jpeg",
  "railings":          "/images/gallery/gallery-13.jpeg",
};

export default function Products() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-blue-400" />
              <span className="text-blue-600 font-semibold text-xs uppercase tracking-[0.2em]">
                What We Make
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Our Products
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-sm leading-relaxed md:text-right">
            Every product is custom-fabricated to your exact specifications using
            premium-grade aluminium profiles and durable powder-coat finishes.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-slate-900 aspect-[4/5] flex flex-col justify-end cursor-pointer"
            >
              {/* Background image */}
              <Image
                src={PRODUCT_IMAGES[product.slug] ?? "/images/gallery/gallery-01.jpeg"}
                alt={product.name}
                fill
                className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

              {/* Number */}
              <span className="absolute top-6 right-6 text-slate-500 font-bold text-lg font-mono">
                0{i + 1}
              </span>

              {/* Content */}
              <div className="relative z-10 p-7">
                <div className="flex flex-wrap gap-2 mb-3">
                  {product.features.slice(0, 2).map((f) => (
                    <span
                      key={f}
                      className="text-[10px] font-semibold uppercase tracking-wider bg-blue-600/20 text-blue-300 border border-blue-500/20 px-2.5 py-1 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {product.name}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {product.shortDescription}
                </p>

                <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
                  <span>View details</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 border border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-700 font-semibold px-8 py-4 rounded-xl transition-all duration-200"
          >
            Browse All Products →
          </Link>
        </div>
      </div>
    </section>
  );
}
