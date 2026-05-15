'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { motionInitial } from '@/components/motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#040816]/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center shrink-0 border-0 bg-transparent p-0 appearance-none rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#040816]"
          aria-label="TradingSmart.ai — scroll to top"
        >
          <Image
            src="/tradingsmart-logo.png"
            alt="TradingSmart.ai"
            width={1024}
            height={1024}
            className="h-20 w-auto md:h-24 max-w-[280px] md:max-w-[320px] object-contain bg-transparent"
            priority
          />
        </button>
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Gallery', id: 'gallery' },
            { label: 'Features', id: 'features' },
            { label: 'Workshop', id: 'workshop' },
            { label: 'Community', id: 'community' },
            { label: 'Register', id: 'register' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scrollTo('register')}
            className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 whitespace-nowrap"
          >
            Join Workshop
          </button>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <motion.div
          initial={motionInitial}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#040816]/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4"
        >
          {[
            { label: 'Gallery', id: 'gallery' },
            { label: 'Features', id: 'features' },
            { label: 'Workshop', id: 'workshop' },
            { label: 'Community', id: 'community' },
            { label: 'Register', id: 'register' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2"
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  );
}