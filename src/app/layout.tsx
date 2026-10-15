import type { Metadata } from "next";
import { Playfair_Display, Lora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-mono-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rock-laieta.vercel.app"),
  title: "Rock Laietà · Ona laietana 1970–1980",
  description:
    "App interactiva i premium sobre l'Ona laietana (Rock Laietà): el moviment musical barceloní dels anys 70 que fusionà jazz-rock, tradició catalana, flamenc i rumba. Sala Zeleste, Orquestra Mirasol, Companyia Elèctrica Dharma, Iceberg, Secta Sònica, Gato Pérez, Pegasus i més.",
  keywords: [
    "Ona laietana",
    "Rock Laietà",
    "música laietana",
    "Sala Zeleste",
    "Companyia Elèctrica Dharma",
    "Orquestra Mirasol",
    "Iceberg",
    "Gato Pérez",
    "Pegasus",
    "rock català",
    "Barcelona anys 70",
  ],
  authors: [{ name: "Rock Laietà" }],
  openGraph: {
    title: "Rock Laietà · Ona laietana 1970–1980",
    description:
      "El revulsiu que va canviar la música catalana. Ona laietana 1970–1980.",
    type: "website",
    images: [
      {
        url: "/laieta/cover.png",
        width: 1344,
        height: 768,
        alt: "Rock Laietà — Ona laietana: caràtula d'estil setanter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rock Laietà · Ona laietana",
    description: "El revulsiu que va canviar la música catalana.",
    images: ["/laieta/cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${lora.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
