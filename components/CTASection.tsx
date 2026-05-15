"use client";

import { motion } from "framer-motion";
import { motionInitial } from "@/components/motion";
import { ArrowRight } from "lucide-react";
import JoinTelegramButton from "@/components/JoinTelegramButton";

export default function CTASection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#040816]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/8 rounded-full blur-[200px]" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <motion.div
          initial={motionInitial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            The Future of Trading is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              AI-Assisted
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Do not get left behind. The traders who adapt to AI today will
            dominate the markets tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo("register")}
              className="group flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] transition-all duration-300 whitespace-nowrap"
            >
              Register For Workshop
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <JoinTelegramButton variant="outline" size="lg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
