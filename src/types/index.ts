// ─── Product Types ───────────────────────────────────────────────────────────

export type ProductCategory =
  | "gates"
  | "window-frames"
  | "doors"
  | "railings"
  | "custom";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  shortDescription: string;
  images: string[];
  features: string[];
  finishOptions?: string[];
  inStock: boolean;
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// ─── Gallery ─────────────────────────────────────────────────────────────────

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: ProductCategory;
  caption?: string;
}
