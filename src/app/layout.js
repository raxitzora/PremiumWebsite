import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import CoffeeCursor from "@/components/UI/CoffeeCursor";
import SmoothScroll from "@/components/UI/SmoothScroll";
import LoaderScreen from "@/components/UI/LoaderScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rangoon Coffee Brewery",
  description: "Luxury Specialty Coffee Experience",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#090706] text-white">
        
        <LoaderScreen />
        <SmoothScroll />
        <CoffeeCursor />

        <Navbar />

        <main className="flex-1 pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}