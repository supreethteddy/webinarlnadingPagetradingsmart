"use client";

import { motion } from "framer-motion";
import { motionInitial } from "@/components/motion";
import { TrendingUp, Globe, Radio, Layers } from "lucide-react";

const proofs = [
  {
    icon: TrendingUp,
    stat: "2,400+",
    label: "Traders Learning with AI",
    desc: "From beginners to seasoned professionals upgrading their edge.",
  },
  {
    icon: Globe,
    stat: "40+",
    label: "Countries Represented",
    desc: "A truly global community of AI-powered traders.",
  },
  {
    icon: Radio,
    stat: "12,000+",
    label: "Webinar Minutes Watched",
    desc: "Deep-dive sessions packed with actionable AI trading insights.",
  },
  {
    icon: Layers,
    stat: "96%",
    label: "Satisfaction Rate",
    desc: "Attendees rate the workshop as transformative for their trading.",
  },
];

export default function SocialProofSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#040816] via-[#060d24] to-[#040816]" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={motionInitial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-4">
              Trusted by Traders Worldwide
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Growing AI Trading Ecosystem
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Numbers that reflect the momentum of AI-powered trading education.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {proofs.map((p, i) => (
              <motion.div
                key={p.label}
                initial={motionInitial}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative p-7 rounded-2xl bg-[#0a0f24]/90 border border-cyan-500/10 hover:border-cyan-500/20 transition-all duration-500 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <p.icon size={22} className="text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                  {p.stat}
                </div>
                <div className="text-white font-medium text-sm mb-2">
                  {p.label}
                </div>
                <div className="text-gray-500 text-xs leading-relaxed">
                  {p.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
