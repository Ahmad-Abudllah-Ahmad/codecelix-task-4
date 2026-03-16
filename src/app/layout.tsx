import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import BackgroundEffect from "@/components/BackgroundEffect";
import MouseHighlight from "@/components/MouseHighlight";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Digital Agency | Innovative Design & Development",
  description: "Accelerate your business with our cutting-edge web development, design, and AI solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body suppressHydrationWarning className={`${inter.variable} font-sans antialiased text-foreground bg-background`}>
        <BackgroundEffect />
        <MouseHighlight />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
