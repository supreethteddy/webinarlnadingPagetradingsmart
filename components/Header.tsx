"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { motionInitial } from "@/components/motion";
import { Menu, X } from "lucide-react";
import { ROUTES } from "@/lib/site-config";

const HOME_NAV = [
  { label: "Gallery", id: "gallery" },
  { label: "Features", id: "features" },
  { label: "Workshop", id: "workshop" },
  { label: "Community", id: "community" },
  { label: "Register", id: "register" },
] as const;

const PARTNER_NAV = [
  { label: "Provide", id: "what-we-provide" },
  { label: "Plans", id: "partner-plans" },
  { label: "Process", id: "how-it-works" },
  { label: "Apply", id: "partner-apply" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const isPartnership = pathname === "/partnership";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const navItems = isPartnership ? PARTNER_NAV : HOME_NAV;
  const ctaId = isPartnership ? "partner-apply" : "register";
  const ctaLabel = isPartnership ? "Apply Now" : "Join Workshop";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#040816]/95 backdrop-blur-md border-b border-white/5"
          : "bg-[#040816]/80 backdrop-blur-sm"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3 md:py-4 min-h-[5rem] md:min-h-[6rem]">
          <Link
            href="/"
            className="flex items-center shrink-0 self-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60"
            aria-label="TradingSmart.ai — home"
          >
            <Image
              src="/tradingsmart-logo.png"
              alt="TradingSmart.ai"
              width={1024}
              height={1024}
              className={`w-auto object-contain bg-transparent ${
                isPartnership ? "h-14 md:h-16 max-w-[200px]" : "h-16 md:h-20 max-w-[240px] md:max-w-[280px]"
              }`}
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 flex-wrap">
            {!isPartnership && (
            <Link
              href={ROUTES.partnership}
              className="text-sm text-violet-300 hover:text-violet-200 transition-colors whitespace-nowrap font-medium"
            >
              Partnership
            </Link>
            )}
            {isPartnership && (
              <Link
                href="/"
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors whitespace-nowrap"
              >
                Workshop
              </Link>
            )}
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors whitespace-nowrap py-1"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3 self-center">
            <button
              type="button"
              onClick={() => scrollTo(ctaId)}
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all whitespace-nowrap min-h-[2.5rem]"
            >
              {ctaLabel}
            </button>
            <button
              type="button"
              className="lg:hidden text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={motionInitial}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-[#040816] border-t border-white/5 px-6 py-6 space-y-1"
        >
          {!isPartnership ? (
            <Link
              href={ROUTES.partnership}
              onClick={() => setMobileOpen(false)}
              className="block text-violet-300 hover:text-violet-200 font-medium py-3"
            >
              Partnership
            </Link>
          ) : (
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block text-gray-300 hover:text-cyan-400 py-3"
            >
              Workshop Home
            </Link>
          )}
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left text-gray-300 hover:text-cyan-400 py-3"
            >
              {isPartnership && item.id === "what-we-provide"
                ? "What We Provide"
                : isPartnership && item.id === "how-it-works"
                  ? "How It Works"
                  : item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollTo(ctaId)}
            className="w-full mt-4 min-h-[3rem] inline-flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium"
          >
            {ctaLabel}
          </button>
        </motion.div>
      )}
    </header>
  );
}
