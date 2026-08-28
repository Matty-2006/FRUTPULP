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
    "sin conservantes",
    "pulpas artesanales Ecuador",
  ],
  authors: [{ name: "FRUTPULP" }],
  openGraph: {
    title: "FRUTPULP | Pulpas de Fruta Natural en Quito",
    description:
      "Pulpas de fruta 100% natural. Sin conservantes, sin colorantes. Elaboradas artesanalmente en Quito.",
    type: "website",
    locale: "es_EC",
    siteName: "FRUTPULP",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#173b2b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
