"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motionInitial } from "@/components/motion";
import { ArrowRight, Bot, Sparkles, Users } from "lucide-react";
import JoinTelegramButton from "@/components/JoinTelegramButton";
import { SITE_IMAGES } from "@/lib/site-images";

const stats = [
  { icon: Sparkles, label: "3-Day Workshop", value: "Live + Replay" },
  { icon: Users, label: "Community", value: "2,400+ Traders" },
  { icon: Bot, label: "AI Workflows", value: "Hands-On" },
];

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#040816]"
      style={{ backgroundColor: "#040816" }}
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[#040816]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(139,92,246,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_80%,rgba(6,182,212,0.12),transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-10 md:py-14">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <motion.div
            className="lg:col-span-5"
            initial={motionInitial}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              3-Day AI Trading Workshop
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-[3.25rem] font-bold leading-[1.08] mb-6 text-white tracking-tight">
              Learn Trading in the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">
                AI Era
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              AI-assisted trading workflows, market structure mastery, option chains,
              realistic simulations, and advanced risk management — taught by practitioners.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                type="button"
                onClick={() => scrollTo("register")}
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-semibold text-base hover:shadow-[0_0_40px_rgba(139,92,246,0.35)] transition-all duration-300"
              >
                Register Now
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <JoinTelegramButton variant="outline" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 rounded-xl border border-cyan-500/10 bg-[#0a0f24] px-4 py-3"
                  style={{ backgroundColor: "#0a0f24" }}
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                    <s.icon size={16} className="text-cyan-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">{s.label}</p>
                    <p className="text-sm font-semibold text-white truncate">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual banner */}
          <motion.div
            className="lg:col-span-7 relative"
            initial={motionInitial}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          >
            <div className="relative mx-auto max-w-[640px] lg:max-w-none">
              {/* Glow behind main image */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-600/30 via-cyan-500/20 to-fuchsia-600/25 blur-2xl opacity-80" />

              {/* Primary — AI robot */}
              <div
                className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden border border-violet-500/30 shadow-[0_0_80px_rgba(139,92,246,0.25)] bg-[#061024]"
                style={{ backgroundColor: "#061024" }}
              >
                <Image
                  src={SITE_IMAGES.heroRobot}
                  alt="AI robot analyzing live market data on trading dashboards"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#040816]/80 via-[#040816]/20 to-transparent"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#040816]/60 via-transparent to-[#040816]/30"
                  aria-hidden
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a0f24] border border-cyan-500/25">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-medium text-cyan-300">Live AI Analysis</span>
                </div>
              </div>

              {/* Secondary — collaboration scene */}
              <div
                className="absolute -bottom-6 -left-2 sm:-left-6 w-[42%] sm:w-[38%] max-w-[220px] aspect-[4/5] rounded-xl overflow-hidden border-2 border-[#040816] shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-2 ring-cyan-500/30 bg-[#061024] rotate-[-3deg] hover:rotate-0 transition-transform duration-500"
                style={{ backgroundColor: "#061024" }}
              >
                <Image
                  src={SITE_IMAGES.heroAiTrading}
                  alt="Trader working with AI assistant and live charts"
                  fill
                  unoptimized
                  sizes="220px"
                  className="object-cover object-center"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#040816]/50 to-transparent"
                  aria-hidden
                />
              </div>

              {/* Floating metric */}
              <div className="absolute -top-2 -right-2 sm:top-4 sm:right-4 px-4 py-3 rounded-xl border border-violet-500/30 bg-[#0a0f24] shadow-xl">
                <p className="text-[10px] uppercase tracking-wider text-gray-500">Win Rate Boost</p>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                  +24%
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
