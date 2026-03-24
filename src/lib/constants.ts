import type { NavLink, Product } from "@/types";

export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "R&f Projects";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rfprojects.co.zw";

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ─── Products ────────────────────────────────────────────────────────────────

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "aluminium-gates",
    name: "Aluminium Gates",
    category: "gates",
    shortDescription: "Durable, corrosion-resistant gates for residential and commercial use.",
    description:
      "Our aluminium gates are precision-engineered for strength and longevity. Available in swing and sliding configurations with a wide range of finish options to complement any property.",
    images: [
      "/images/gallery/gallery-01.jpeg",
      "/images/gallery/gallery-02.jpeg",
      "/images/gallery/gallery-03.jpeg",
      "/images/gallery/gallery-20.jpeg",
    ],
    features: [
      "Powder-coated finish",
      "Rust & corrosion proof",
      "Custom sizing available",
      "Electric gate compatible",
      "Swing & sliding options",
      "Heavy-duty hinges included",
    ],
    finishOptions: ["Matte Black", "Anthracite Grey", "Silver", "White", "Custom RAL"],
    inStock: true,
  },
  {
    id: "2",
    slug: "window-frames",
    name: "Window Frames",
    category: "window-frames",
    shortDescription: "Thermally efficient aluminium window frames for modern architecture.",
    description:
      "Energy-efficient aluminium window frames designed for modern architecture. Our profiles offer excellent insulation performance, slim sightlines, and a lifetime of low-maintenance use.",
    images: [
      "/images/gallery/gallery-05.jpeg",
      "/images/gallery/gallery-06.jpeg",
      "/images/gallery/gallery-07.jpeg",
      "/images/gallery/gallery-22.jpeg",
    ],
    features: [
      "Thermal break technology",
      "Double & triple glazing ready",
      "Slim sightlines",
      "UV & weather resistant",
      "Noise reduction profiles",
      "Fixed, casement & sliding options",
    ],
    finishOptions: ["White", "Anthracite Grey", "Bronze", "Silver", "Custom RAL"],
    inStock: true,
  },
  {
    id: "3",
    slug: "railings",
    name: "Railings & Balustrades",
    category: "railings",
    shortDescription: "Modern aluminium railings for staircases, balconies, and terraces.",
    description:
      "Elegant and safe aluminium railings crafted to suit both residential and commercial projects. Our modular system allows for fast installation without compromising on aesthetics.",
    images: [
      "/images/gallery/gallery-13.jpeg",
      "/images/gallery/gallery-14.jpeg",
      "/images/gallery/gallery-15.jpeg",
      "/images/gallery/gallery-26.jpeg",
    ],
    features: [
      "High load capacity",
      "Modular system",
      "Glass infill option",
      "Easy installation",
      "Indoor & outdoor use",
      "Compliant with safety standards",
    ],
    finishOptions: ["Matte Black", "Silver", "Anthracite Grey", "Bronze"],
    inStock: true,
  },
  {
    id: "4",
    slug: "aluminium-doors",
    name: "Aluminium Doors",
    category: "doors",
    shortDescription: "Secure, stylish aluminium doors for entrances, patios, and offices.",
    description:
      "Our aluminium doors combine strength, security, and style. Whether for a residential entrance or a commercial fit-out, we fabricate doors to your exact dimensions and specification.",
    images: [
      "/images/gallery/gallery-09.jpeg",
      "/images/gallery/gallery-10.jpeg",
      "/images/gallery/gallery-11.jpeg",
      "/images/gallery/gallery-24.jpeg",
    ],
    features: [
      "Multi-point locking system",
      "Thermally broken profiles",
      "Flush & rebated options",
      "Single, double & bi-fold",
      "Glazed & solid panel options",
      "Custom dimensions",
    ],
    finishOptions: ["Matte Black", "White", "Anthracite Grey", "Bronze", "Custom RAL"],
    inStock: true,
  },
  {
    id: "5",
    slug: "custom-aluminium",
    name: "Custom Aluminium Work",
    category: "custom",
    shortDescription: "Bespoke aluminium fabrication for unique architectural and structural needs.",
    description:
      "Have a unique project requirement? Our fabrication team can design and produce custom aluminium structures, screens, louvres, pergolas, and more — engineered to your exact brief.",
    images: [
      "/images/gallery/gallery-17.jpeg",
      "/images/gallery/gallery-18.jpeg",
      "/images/gallery/gallery-37.webp",
      "/images/gallery/gallery-43.jpeg",
    ],
    features: [
      "Fully bespoke design",
      "Architectural screens & louvres",
      "Pergolas & shade structures",
      "Shopfronts & curtain walls",
      "CAD drawings provided",
      "Site survey available",
    ],
    finishOptions: ["Any RAL colour", "Anodised finishes", "Brushed aluminium", "Powder coat"],
    inStock: true,
  },
];
