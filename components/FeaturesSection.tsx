"use client";

import { motion } from "framer-motion";
import { motionInitial } from "@/components/motion";
import {
  BarChart3,
  Workflow,
  Shield,
  Link2,
  Gamepad2,
  BrainCircuit,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Market Structure",
    desc: "Decode price action, support/resistance zones, and institutional order flow with AI-enhanced chart analysis.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: Workflow,
    title: "AI Trading Workflows",
    desc: "Build automated scanning, alerting, and execution pipelines that save hours of manual research every day.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Shield,
    title: "Risk Management",
    desc: "Master position sizing, stop-loss strategies, and portfolio hedging using AI-calculated risk models.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: Link2,
    title: "Option Chain Analysis",
    desc: "Read Greek exposures, IV skews, and unusual volume signals with AI-powered option chain breakdowns.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    icon: Gamepad2,
    title: "Trading Simulations",
    desc: "Practice in realistic simulated environments with AI-generated market scenarios before risking real capital.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    icon: BrainCircuit,
    title: "AI-assisted Learning",
    desc: "Get personalized trade reviews, feedback, and learning paths driven by advanced AI tutoring systems.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#040816]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px]" />

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
              What You Will Learn
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Master the Future of Trading
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Six core pillars designed to transform how you approach the
              markets with artificial intelligence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={motionInitial}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative p-7 rounded-2xl bg-[#0a0f24]/90 border border-cyan-500/10 hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)] transition-all duration-500"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${f.bg} border ${f.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <f.icon size={22} className={f.color} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {f.desc}
                </p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
