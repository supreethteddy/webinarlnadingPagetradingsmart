"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motionInitial } from "@/components/motion";
import { CheckCircle2 } from "lucide-react";
import { EXPERIENCE_STORIES } from "@/lib/site-images";

export default function ExperienceSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#040816] via-[#061024] to-[#040816]" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-20 md:space-y-28">
          {EXPERIENCE_STORIES.map((story, index) => (
            <motion.div
              key={story.title}
              initial={motionInitial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                "reverse" in story && story.reverse
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >
              <div
                className="img-fill-wrap relative aspect-[4/3] rounded-3xl overflow-hidden border border-cyan-500/15 shadow-[0_0_60px_rgba(6,182,212,0.12)]"
                style={{ position: "relative", overflow: "hidden" }}
              >
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#040816]/50 via-transparent to-cyan-500/10" />
              </div>

              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-5">
                  {story.badge}
                </span>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-5 leading-tight">
                  {story.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {story.description}
                </p>
                <ul className="space-y-3">
                  {story.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <CheckCircle2
                        size={20}
                        className="text-cyan-400 shrink-0"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
