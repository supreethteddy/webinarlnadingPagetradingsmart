"use client";

import Image from "next/image";
import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-cyan-500/10 overflow-hidden">
      <div className="absolute inset-0 bg-[#040816]" />
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Image
            src="/tradingsmart-logo.png"
            alt="TradingSmart.ai"
            width={1024}
            height={1024}
            className="h-[4.5rem] w-auto max-w-[240px] object-contain bg-transparent"
          />
          <p className="text-gray-500 text-sm">
            &copy; 2026 TradingSmart.ai — AI Trading Webinar Community
          </p>
          <a
            href="https://t.me/+gI80-j0NXJM3N2Fl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
          >
            <Send size={16} />
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}
