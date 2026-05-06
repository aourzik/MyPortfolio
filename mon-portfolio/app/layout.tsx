import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. Importe le composant ici (adapte le chemin si besoin)
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Profites-en pour mettre à jour tes Metadata !
export const metadata: Metadata = {
  title: "Aïny Ourzik — Portfolio",
  description: "Web Developer Full Stack & Ergonomie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* 3. Place le curseur ici, juste avant les enfants */}
        <CustomCursor />

        {children}
      </body>
    </html>
  );
}