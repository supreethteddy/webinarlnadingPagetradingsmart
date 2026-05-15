'use client';

import { motion } from 'framer-motion';
import { motionInitial } from '@/components/motion';
import { ArrowRight } from 'lucide-react';
import JoinTelegramButton from '@/components/JoinTelegramButton';
import TradingInfographic from '@/components/TradingInfographic';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#040816] via-[#061024] to-[#040816]" />
      <motion.div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
      <motion.div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />

      <motion.div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-12">
        <motion.div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={motionInitial}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              3-Day AI Trading Workshop
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Learn Trading in the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                AI Era
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              AI-assisted trading workflows, market structure mastery, option chain understanding,
              realistic simulations, and advanced risk management — all powered by artificial intelligence.
            </p>

            <motion.div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo('register')}
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-base hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 whitespace-nowrap"
              >
                Register Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <JoinTelegramButton variant="outline" />
            </motion.div>
          </motion.div>

          <TradingInfographic />
        </motion.div>
      </motion.div>
    </section>
  );
}
