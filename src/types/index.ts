export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: "GBP";
  categoryId: string;
  image?: string;
  allergens?: string[];
  dietary?: ("vegetarian" | "vegan" | "gluten-free" | "halal")[];
  isPopular?: boolean;
  isNew?: boolean;
  isDemo?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  displayOrder: number;
  items: MenuItem[];
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  price: number;
  validFrom: string;
  validTo: string;
  terms?: string;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
  isDemo?: boolean;
}

export interface Review {
  id: string;
  authorName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  date: string;
  source: "google" | "tripadvisor" | "facebook" | "direct";
  verified?: boolean;
  isDemo?: boolean;
}