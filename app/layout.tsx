import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frutpulp.vercel.app"),
  title: {
    default: "FRUTPULP | Pulpas de Fruta Natural en Quito",
    template: "%s | FRUTPULP",
  },
  description:
    "FRUTPULP — Pulpas de fruta 100% natural sin conservantes. Frutilla, guanábana, mora, naranjilla, piña, tamarindo y tomate de árbol. Elaboradas artesanalmente en Quito, Ecuador.",
  keywords: [
    "pulpas de fruta",
    "fruta natural",
    "Quito",
    "Frutpulp",
    "pulpa de frutilla",
    "pulpa de mora",
    "pulpa de guanábana",
    "pulpa de piña",
    "pulpa de naranjilla",
    "pulpa de tamarindo",
    "pulpa de tomate de árbol",
    "pulpa congelada",
    "pulpa sin conservantes",
    "batidos naturales",
    "pulpas artesanales Ecuador",
    "comprar pulpa de fruta Quito",
  ],
  authors: [{ name: "FRUTPULP" }],
  creator: "FRUTPULP",
  publisher: "FRUTPULP",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "FRUTPULP | Pulpas de Fruta Natural en Quito",
    description:
      "Pulpas de fruta 100% natural. Sin conservantes, sin colorantes. Elaboradas artesanalmente en Quito. Batidos, postres, salsas y cócteles.",
    url: "https://frutpulp.vercel.app",
    siteName: "FRUTPULP",
    type: "website",
    locale: "es_EC",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "FRUTPULP - Pulpas de fruta natural",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FRUTPULP | Pulpas de Fruta Natural en Quito",
    description:
      "Pulpas de fruta 100% natural, sin conservantes. Hechas en Quito, Ecuador.",
    images: ["/icon.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#173b2b",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FRUTPULP",
  url: "https://frutpulp.vercel.app",
  logo: "https://frutpulp.vercel.app/icon.png",
  description:
    "Pulpas de fruta 100% natural, sin conservantes ni colorantes, elaboradas artesanalmente en Quito, Ecuador.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Quito",
    addressCountry: "EC",
  },
  areaServed: "Quito, Ecuador",
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pulpa de Frutilla" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pulpa de Mora" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pulpa de Guanábana" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pulpa de Piña" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pulpa de Naranjilla" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pulpa de Tamarindo" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pulpa de Tomate de Árbol" } },
  ],
  sameAs: [],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
