import type React from "react";
import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import { ScrollToTop } from "@/components/scroll-to-top";
import { FloatingActions } from "@/components/floating-actions";
import {
  Playfair_Display,
  Fira_Code,
  Inter as V0_Font_Inter,
  Geist_Mono as V0_Font_Geist_Mono,
  Source_Serif_4 as V0_Font_Source_Serif_4,
} from "next/font/google";

// Initialize Playfair Display font
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// Initialize fonts
const _inter = V0_Font_Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const _sourceSerif_4 = V0_Font_Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bianca Lupu | Psihoterapeut București",
  description:
    "Psihoterapie individuală pentru regăsirea echilibrului emoțional. Cabinet de psihoterapie în București cu Bianca Lupu - CBT, Schema Therapy, Psihanaliză.",
  keywords: [
    "psihoterapie",
    "psihoterapeut",
    "București",
    "anxietate",
    "depresie",
    "terapie",
    "Bianca Lupu",
  ],
  authors: [{ name: "Bianca Lupu" }],
  openGraph: {
    title: "Bianca Lupu | Psihoterapeut București",
    description:
      "Psihoterapie individuală pentru regăsirea echilibrului emoțional.",
    type: "website",
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${playfairDisplay.variable} ${firaCode.variable}`}
    >
      <body className="font-mono antialiased">
        <ScrollToTop />
        <FloatingActions />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
