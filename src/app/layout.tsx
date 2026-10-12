import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/sections/TopBar/TopBar";
import { Navbar } from "@/components/sections/Navbar/Navbar";
import { Footer } from "@/components/sections/Footer/Footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://urbanbitekitchen.co.uk"),
  title: {
    default: "Urban Bite Kitchen",
    template: "%s | Urban Bite Kitchen",
  },
  description: "Modern fast-food restaurant in Manchester serving quality burgers, sides, and shakes. Dine in, takeaway, or delivery.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://urbanbitekitchen.co.uk",
    siteName: "Urban Bite Kitchen",
    title: "Urban Bite Kitchen",
    description: "Modern fast-food restaurant in Manchester serving quality burgers, sides, and shakes.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Urban Bite Kitchen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Bite Kitchen",
    description: "Modern fast-food restaurant in Manchester serving quality burgers, sides, and shakes.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5EFE0" },
    { media: "(prefers-color-scheme: dark)", color: "#0D0D0D" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-black">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-cream focus:text-black focus:outline-none focus:ring-2 focus:ring-deep-red"
        >
          Skip to main content
        </a>
        <TopBar />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}