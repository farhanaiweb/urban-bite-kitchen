import type { MenuCategory, MenuItem } from "@/types";

export const featuredCategories = [
  {
    id: "burgers",
    name: "Burgers",
  },
  {
    id: "chicken",
    name: "Crispy Chicken",
  },
  {
    id: "wraps",
    name: "Wraps & Loaded Fries",
  },
] as MenuCategory[];

export const popularDishes: MenuItem[] = [
  {
    id: "classic-smash",
    name: "Classic Smash Burger",
    description: "Two smash patties with cheese, pickles, and Urban Bite sauce on a brioche bun",
    price: 8.49,
    currency: "GBP",
    categoryId: "burgers",
    image: "/images/demo/classic-smash-burger.webp",
    isDemo: true,
  },
  {
    id: "crispy-chicken-burger",
    name: "Crispy Chicken Burger",
    description: "Buttermilk-fried chicken with lettuce, tomato, and mayo on a brioche bun",
    price: 8.99,
    currency: "GBP",
    categoryId: "chicken",
    image: "/images/demo/crispy-chicken-burger.webp",
    isDemo: true,
  },
  {
    id: "loaded-fries",
    name: "Loaded Fries",
    description: "Crispy fries with cheese sauce, bacon bits, and ranch drizzle",
    price: 6.49,
    currency: "GBP",
    categoryId: "wraps",
    image: "/images/demo/loaded-fries.webp",
    isDemo: true,
  },
  {
    id: "spicy-chicken-wrap",
    name: "Spicy Chicken Wrap",
    description: "Grilled spicy chicken with lettuce, cucumber, and chipotle wrap",
    price: 7.49,
    currency: "GBP",
    categoryId: "wraps",
    image: "/images/demo/spicy-chicken-wrap.webp",
    isDemo: true,
  },
];