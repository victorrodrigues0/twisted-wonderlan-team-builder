import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Nunito } from 'next/font/google';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-nunito',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TWST",
  description: "Team Builder de Twisted Wonderland feito por Victor Rodrigeus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full w-full antialiased`}
    >
      <body className={`${nunito.className} min-h-full flex flex-col`}>
        <Navbar />
        <main className=" flex-1 h-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
