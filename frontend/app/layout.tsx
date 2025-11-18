import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer";
import { CartProvider } from "@/context/CartContext";
import { NavbarDemo } from "./components/ui/navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextJS E-commerce",
  description: "A simple e-commerce application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f0f0f] text-white min-h-screen flex flex-col`}
      >
        <CartProvider>
          <NavbarDemo />
          <main className="grow">
            {children}
          </main>
          <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}
