'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { motionInitial } from '@/components/motion';
import { SITE_IMAGES } from '@/lib/site-images';
import { Playfair_Display } from 'next/font/google';

const displayFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
});

export default function GallerySection() {
  return (
    <section id="gallery" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#040816]" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <motion.div
          initial={motionInitial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto relative min-h-[380px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[620px] rounded-3xl overflow-hidden border border-white/[0.1] shadow-[0_0_80px_rgba(6,182,212,0.12)]"
        >
          <Image
            src={SITE_IMAGES.tradingEvent}
            alt="Packed trading seminar with live market charts on screen"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* 50% dark overlay for readable text */}
          <div className="absolute inset-0 bg-[#040816]/50" aria-hidden />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#040816]/70 via-transparent to-[#040816]/30"
            aria-hidden
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-20">
            <p
              className={`${displayFont.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight max-w-4xl`}
            >
              The Market Rewards Those Who{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                Prepare, Practice &amp; Persist.
              </span>
            </p>
            <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed font-light">
              Step into live sessions, real charts, and a community of traders building their edge with AI — not guesswork.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
