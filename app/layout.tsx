import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-schietto-display",
  display: "swap",
});

const bodyFont = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-schietto-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://schietto.com.br"),
  title: "Schiètto | Café e Home Decor em Pedreira, SP",
  description:
    "Portal da marca Schiètto — escolha entre o Caffè Schiètto e a Schiètto Home Decor & Semi Jóias, em Pedreira, SP.",
  keywords: [
    "Schiètto",
    "café Pedreira",
    "home decor Pedreira",
    "Caffè Schiètto",
    "Schiètto Home Decor",
  ],
  openGraph: {
    title: "Schiètto",
    description:
      "Universo Schiètto em Pedreira, SP — café gourmet e curadoria de home decor & semi jóias.",
    url: "https://schietto.com.br",
    siteName: "Schiètto",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/cafe-ambiente.webp",
        width: 1200,
        height: 630,
        alt: "Ambiente Caffè Schiètto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schiètto",
    description:
      "Escolha seu destino: Caffè Schiètto ou Schiètto Home Decor em Pedreira, SP.",
    images: ["/images/cafe-ambiente.webp"],
  },
  alternates: {
    canonical: "https://schietto.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${displayFont.variable} ${bodyFont.variable} h-full`}
    >
      <body className="font-body min-h-full antialiased">{children}</body>
    </html>
  );
}
