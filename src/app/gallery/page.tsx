import type { Metadata } from "next";
import Image from "next/image";
import type { GalleryItem, ProductCategory } from "@/types";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse photos of our completed aluminium gate, window frame, and railing projects.",
};

const GALLERY_ITEMS: GalleryItem[] = [
  { id: "1",  src: "/images/gallery/gallery-01.jpeg", alt: "Aluminium project 1",  category: "gates" },
  { id: "2",  src: "/images/gallery/gallery-02.jpeg", alt: "Aluminium project 2",  category: "gates" },
  { id: "3",  src: "/images/gallery/gallery-03.jpeg", alt: "Aluminium project 3",  category: "gates" },
  { id: "4",  src: "/images/gallery/gallery-04.jpeg", alt: "Aluminium project 4",  category: "gates" },
  { id: "5",  src: "/images/gallery/gallery-05.jpeg", alt: "Aluminium project 5",  category: "window-frames" },
  { id: "6",  src: "/images/gallery/gallery-06.jpeg", alt: "Aluminium project 6",  category: "window-frames" },
  { id: "7",  src: "/images/gallery/gallery-07.jpeg", alt: "Aluminium project 7",  category: "window-frames" },
  { id: "8",  src: "/images/gallery/gallery-08.jpeg", alt: "Aluminium project 8",  category: "window-frames" },
  { id: "9",  src: "/images/gallery/gallery-09.jpeg", alt: "Aluminium project 9",  category: "doors" },
  { id: "10", src: "/images/gallery/gallery-10.jpeg", alt: "Aluminium project 10", category: "doors" },
  { id: "11", src: "/images/gallery/gallery-11.jpeg", alt: "Aluminium project 11", category: "doors" },
  { id: "12", src: "/images/gallery/gallery-12.jpeg", alt: "Aluminium project 12", category: "doors" },
  { id: "13", src: "/images/gallery/gallery-13.jpeg", alt: "Aluminium project 13", category: "railings" },
  { id: "14", src: "/images/gallery/gallery-14.jpeg", alt: "Aluminium project 14", category: "railings" },
  { id: "15", src: "/images/gallery/gallery-15.jpeg", alt: "Aluminium project 15", category: "railings" },
  { id: "16", src: "/images/gallery/gallery-16.jpeg", alt: "Aluminium project 16", category: "railings" },
  { id: "17", src: "/images/gallery/gallery-17.jpeg", alt: "Aluminium project 17", category: "custom" },
  { id: "18", src: "/images/gallery/gallery-18.jpeg", alt: "Aluminium project 18", category: "custom" },
  { id: "19", src: "/images/gallery/gallery-19.jpeg", alt: "Aluminium project 19", category: "custom" },
  { id: "20", src: "/images/gallery/gallery-20.jpeg", alt: "Aluminium project 20", category: "gates" },
  { id: "21", src: "/images/gallery/gallery-21.jpeg", alt: "Aluminium project 21", category: "gates" },
  { id: "22", src: "/images/gallery/gallery-22.jpeg", alt: "Aluminium project 22", category: "window-frames" },
  { id: "23", src: "/images/gallery/gallery-23.jpeg", alt: "Aluminium project 23", category: "window-frames" },
  { id: "24", src: "/images/gallery/gallery-24.jpeg", alt: "Aluminium project 24", category: "doors" },
  { id: "25", src: "/images/gallery/gallery-25.jpeg", alt: "Aluminium project 25", category: "doors" },
  { id: "26", src: "/images/gallery/gallery-26.jpeg", alt: "Aluminium project 26", category: "railings" },
  { id: "27", src: "/images/gallery/gallery-27.jpeg", alt: "Aluminium project 27", category: "custom" },
  { id: "28", src: "/images/gallery/gallery-28.jpeg", alt: "Aluminium project 28", category: "custom" },
  { id: "29", src: "/images/gallery/gallery-29.jpg",  alt: "Aluminium project 29", category: "gates" },
  { id: "30", src: "/images/gallery/gallery-30.webp", alt: "Aluminium project 30", category: "gates" },
  { id: "31", src: "/images/gallery/gallery-31.jpg",  alt: "Aluminium project 31", category: "window-frames" },
  { id: "32", src: "/images/gallery/gallery-32.webp", alt: "Aluminium project 32", category: "window-frames" },
  { id: "33", src: "/images/gallery/gallery-33.jpg",  alt: "Aluminium project 33", category: "doors" },
  { id: "34", src: "/images/gallery/gallery-34.webp", alt: "Aluminium project 34", category: "doors" },
  { id: "35", src: "/images/gallery/gallery-35.webp", alt: "Aluminium project 35", category: "railings" },
  { id: "36", src: "/images/gallery/gallery-36.webp", alt: "Aluminium project 36", category: "railings" },
  { id: "37", src: "/images/gallery/gallery-37.webp", alt: "Aluminium project 37", category: "custom" },
  { id: "38", src: "/images/gallery/gallery-38.jpeg", alt: "Aluminium project 38", category: "custom" },
  { id: "39", src: "/images/gallery/gallery-39.jpeg", alt: "Aluminium project 39", category: "gates" },
  { id: "40", src: "/images/gallery/gallery-40.jpeg", alt: "Aluminium project 40", category: "window-frames" },
  { id: "41", src: "/images/gallery/gallery-41.jpeg", alt: "Aluminium project 41", category: "doors" },
  { id: "42", src: "/images/gallery/gallery-42.jpeg", alt: "Aluminium project 42", category: "railings" },
  { id: "43", src: "/images/gallery/gallery-43.jpeg", alt: "Aluminium project 43", category: "custom" },
  { id: "44", src: "/images/gallery/gallery-44.jpeg", alt: "Aluminium project 44", category: "custom" },
];

const CATEGORY_LABELS: Record<ProductCategory, string> = {
  "gates":         "Gates",
  "window-frames": "Window Frames",
  "doors":         "Doors",
  "railings":      "Railings",
  "custom":        "Custom",
};

export default function GalleryPage() {
  const categories = Object.keys(CATEGORY_LABELS) as ProductCategory[];

  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="mb-12 text-center">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Our Work
          </span>
          <h1 className="text-5xl font-heading font-bold text-brand-900 mt-2">Project Gallery</h1>
          <p className="text-brand-500 mt-3 max-w-md mx-auto">
          {GALLERY_ITEMS.length} completed projects showcasing our range of aluminium products.
          </p>
        </div>

        {/* Render by category */}
        {categories.map((cat) => {
          const items = GALLERY_ITEMS.filter((i) => i.category === cat);
          if (items.length === 0) return null;
          return (
            <div key={cat} className="mb-14">
              <h2 className="text-2xl font-heading font-bold text-brand-800 mb-6 border-b border-brand-100 pb-3">
                {CATEGORY_LABELS[cat]}
                <span className="ml-2 text-sm font-normal text-brand-400">({items.length})</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="relative h-56 rounded-xl overflow-hidden bg-brand-100 group"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {item.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.caption}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
