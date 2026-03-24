import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/lib/constants";

interface Props {
  params: { slug: string };
}

// Map product slugs to multiple gallery images
const PRODUCT_GALLERY: Record<string, string[]> = {
  "aluminium-gates": [
    "/images/gallery/gallery-01.jpeg",
    "/images/gallery/gallery-02.jpeg",
    "/images/gallery/gallery-03.jpeg",
    "/images/gallery/gallery-20.jpeg",
  ],
  "window-frames": [
    "/images/gallery/gallery-05.jpeg",
    "/images/gallery/gallery-06.jpeg",
    "/images/gallery/gallery-07.jpeg",
    "/images/gallery/gallery-22.jpeg",
  ],
  "railings": [
    "/images/gallery/gallery-13.jpeg",
    "/images/gallery/gallery-14.jpeg",
    "/images/gallery/gallery-15.jpeg",
    "/images/gallery/gallery-26.jpeg",
  ],
};

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: `${product.name} | R&f Projects`,
    description: product.shortDescription,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const images = PRODUCT_GALLERY[product.slug] ?? ["/images/gallery/gallery-01.jpeg"];
  const relatedProducts = PRODUCTS.filter((p) => p.slug !== product.slug);

  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero banner ── */}
      <div className="relative h-72 md:h-96 bg-slate-900 overflow-hidden">
        <Image
          src={images[0]}
          alt={product.name}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-6 left-6 md:left-20 flex items-center gap-2 text-sm text-slate-300">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-slate-600">/</span>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <span className="text-slate-600">/</span>
          <span className="text-white font-medium">{product.name}</span>
        </div>

        {/* Title */}
        <div className="absolute bottom-8 left-6 md:left-20">
          <span className="inline-block bg-blue-600 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
            {product.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white">{product.name}</h1>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Left: details */}
          <div className="lg:col-span-2 space-y-12">

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About this Product</h2>
              <p className="text-slate-600 leading-relaxed text-lg">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50"
                  >
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Finish options */}
            {product.finishOptions && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Available Finishes</h2>
                <div className="flex flex-wrap gap-3">
                  {product.finishOptions.map((finish) => (
                    <span
                      key={finish}
                      className="border border-slate-200 text-slate-700 text-sm font-medium px-5 py-2.5 rounded-full hover:border-blue-400 hover:text-blue-600 transition-colors cursor-default"
                    >
                      {finish}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Photo grid */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Photos</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {images.map((src, i) => (
                  <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-slate-100">
                    <Image
                      src={src}
                      alt={`${product.name} photo ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: sidebar */}
          <div className="space-y-6">

            {/* Quote card */}
            <div className="bg-slate-900 rounded-2xl p-8 text-white sticky top-24">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-2 h-2 rounded-full ${product.inStock ? "bg-green-400" : "bg-amber-400"}`} />
                <span className="text-sm text-slate-300">
                  {product.inStock ? "Available — Ready to fabricate" : "Made to order"}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2">Interested in this product?</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Get a free, no-obligation quote tailored to your exact dimensions and finish requirements.
              </p>

              <Link
                href="/contact"
                className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl transition-colors mb-3"
              >
                Request a Free Quote
              </Link>
              <Link
                href="/gallery"
                className="block w-full text-center border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold py-4 rounded-xl transition-colors"
              >
                View Full Gallery
              </Link>

              <div className="mt-8 pt-6 border-t border-slate-800 space-y-3 text-sm text-slate-400">
                <p className="flex items-center gap-2">
                  <span>📞</span> +263 778 808 516
                </p>
                <p className="flex items-center gap-2">
                  <span>✉️</span> info@rfprojects.co.zw
                </p>
                <p className="flex items-center gap-2">
                  <span>🕐</span> Mon – Fri: 8am – 5pm
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Related products ── */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Other Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProducts.map((related) => (
              <Link
                key={related.id}
                href={`/products/${related.slug}`}
                className="group flex items-center gap-5 p-5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-200"
              >
                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                  <Image
                    src={PRODUCT_GALLERY[related.slug]?.[0] ?? "/images/gallery/gallery-01.jpeg"}
                    alt={related.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                    {related.name}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-2">{related.shortDescription}</p>
                </div>
                <span className="ml-auto text-slate-300 group-hover:text-blue-400 group-hover:translate-x-1 transition-all text-lg">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
