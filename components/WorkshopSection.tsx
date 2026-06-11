"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motionInitial } from "@/components/motion";
import {
  CheckCircle2,
  Lightbulb,
  Brain,
  MessageSquareText,
} from "lucide-react";
import { SITE_IMAGES } from "@/lib/site-images";

const days = [
  {
    day: "DAY 1",
    title: "Foundation & Mindset",
    icon: Lightbulb,
    items: ["Market Structure", "Trading Psychology", "Risk Management"],
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    day: "DAY 2",
    title: "AI Tools & Simulations",
    icon: Brain,
    items: ["AI-assisted Trading", "ChatGPT for Trading", "Live Simulations"],
    color: "from-blue-500/20 to-violet-500/20",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    day: "DAY 3",
    title: "Systems & Community",
    icon: MessageSquareText,
    items: ["Trading Workflows", "AI Systems Setup", "Q&A + Community Access"],
    color: "from-violet-500/20 to-cyan-500/20",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
  },
];

export default function WorkshopSection() {
  return (
    <section id="workshop" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#040816]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={motionInitial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-4">
              3-Day Schedule
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Workshop Breakdown
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A carefully structured 3-day journey from market fundamentals to
              building your own AI-powered trading system.
            </p>
          </motion.div>

          <motion.div
            initial={motionInitial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-8 mb-14"
          >
            <div
              className="img-fill-wrap relative aspect-[16/10] rounded-3xl overflow-hidden border border-cyan-500/15"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <Image
                src={SITE_IMAGES.classroom}
                alt="Interactive classroom workshop with instructor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040816]/70 to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-white font-medium">
                Day-by-day classroom sessions with live Q&A
              </p>
            </div>
            <div
              className="img-fill-wrap relative aspect-[16/10] rounded-3xl overflow-hidden border border-cyan-500/15"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <Image
                src={SITE_IMAGES.forexDemo}
                alt="Demo account trading practice with mentor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040816]/70 to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-white font-medium">
                Risk-free demo practice before you trade live capital
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {days.map((d, i) => (
              <motion.div
                key={d.day}
                initial={motionInitial}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${d.color} border ${d.border} hover:shadow-[0_0_40px_rgba(6,182,212,0.12)] transition-all duration-500`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <d.icon size={22} className={d.iconColor} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 tracking-wider">
                      {d.day}
                    </div>
                    <div className="text-lg font-semibold text-white">
                      {d.title}
                    </div>
                  </div>
                </div>
                <ul className="space-y-4">
                  {d.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-gray-300 text-sm"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-cyan-400 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
