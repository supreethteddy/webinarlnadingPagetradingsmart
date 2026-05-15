import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "TradingSmart.ai — AI Trading Education",
  description:
    "Learn Trading in the AI Era. Master market structure, AI workflows, option chains, and risk management with our 3-day premium workshop.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-[#040816]"
      style={{ backgroundColor: "#040816" }}
      suppressHydrationWarning={true}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-[#040816] text-white min-h-screen`}
        style={{ backgroundColor: "#040816", color: "#ffffff" }}
      >
        {children}
      </body>
    </html>
  );
}
