import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  Montserrat,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LuxuryEstate | Premium Real Estate",
  description: "Discover exceptional luxury properties in premium locations",
  keywords: "luxury real estate, premium properties, mansion, penthouse, villa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${montserrat.variable} antialiased selection:bg-primary/20 selection:text-primary-dark`}
      >
        {children}
      </body>
    </html>
  );
}
