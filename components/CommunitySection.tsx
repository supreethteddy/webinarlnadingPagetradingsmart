"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motionInitial } from "@/components/motion";
import { Zap, Bell, Users, Sparkles } from "lucide-react";
import JoinTelegramButton from "@/components/JoinTelegramButton";
import { SITE_IMAGES } from "@/lib/site-images";

const benefits = [
  { icon: Zap, text: "Daily AI Market Insights" },
  { icon: Bell, text: "Real-time Trade Alerts" },
  { icon: Users, text: "Network with 2,400+ Traders" },
  { icon: Sparkles, text: "Exclusive AI Tool Access" },
];

export default function CommunitySection() {
  return (
    <section id="community" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#040816] via-[#060d24] to-[#040816]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-[180px]" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={motionInitial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-4">
              Join the Movement
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Live Telegram Community
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Connect with thousands of AI-curious traders. Get daily signals,
              share strategies, and grow together.
            </p>
          </motion.div>

          <motion.div
            initial={motionInitial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl bg-[#0a0f24]/90 border border-cyan-500/15 hover:border-cyan-500/25 transition-all duration-500 overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              <div
                className="img-fill-wrap relative min-h-[280px] lg:min-h-[420px]"
                style={{ position: "relative", overflow: "hidden" }}
              >
                <Image
                  src={SITE_IMAGES.networking}
                  alt="Traders networking at a professional trading event"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#040816]/80 lg:bg-gradient-to-r lg:from-transparent lg:to-[#040816]" />
              </div>

              <div className="relative z-10 p-10 md:p-14 flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  TradingSmart.ai Community
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Meet traders who think like you — ambitious, curious, and
                  ready to use AI as an edge in the markets.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {benefits.map((b) => (
                    <div
                      key={b.text}
                      className="flex items-center gap-2 text-gray-400 text-sm"
                    >
                      <b.icon size={16} className="text-cyan-400 shrink-0" />
                      {b.text}
                    </div>
                  ))}
                </div>
                <JoinTelegramButton
                  label="Join Telegram Now"
                  variant="filled"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
