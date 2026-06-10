"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { motionInitial } from "@/components/motion";
import {
  ArrowRight,
  Check,
  X,
  Sparkles,
  Target,
  Rocket,
} from "lucide-react";
import PartnerRegistrationForm from "@/components/PartnerRegistrationForm";
import {
  WHAT_WE_PROVIDE,
  WHO_IS_THIS_FOR,
  BUILD_FROM_SCRATCH,
  FOCUS_INSTEAD,
  GET_STARTED_REQUIREMENTS,
  GET_STARTED_NOT_REQUIRED,
  TRADINGSMART_ADVANTAGE,
  PARTNER_STRUGGLES,
} from "@/lib/partnership-data";

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-4">
      {children}
    </span>
  );
}

const sectionClass = "scroll-mt-28 md:scroll-mt-32";

export default function PartnershipPageContent() {
  const scrollToConsult = () => {
    document
      .getElementById("partner-apply-top")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero + top consultation form */}
      <section
        id="partner-apply-top"
        className={`${sectionClass} relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-[#040816]`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(139,92,246,0.15),transparent)]" />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <motion.div
              initial={motionInitial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-left lg:pt-4"
            >
              <SectionBadge>Powered by TradingSmart.ai</SectionBadge>
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight mb-5">
                Start Your Own{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                  AI-Powered Stock Market Education Company
                </span>
              </h1>
              <p className="text-lg text-violet-300/90 font-medium mb-4">
                Launch your own branded stock market education business without
                building everything from scratch.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                The demand for stock market education, AI-powered trading
                solutions, strategy automation, and wealth creation guidance is
                growing rapidly. We provide the complete ecosystem — you focus on
                your brand, students, and revenue.
              </p>
              <a
                href="#what-we-provide"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
              >
                Explore what we provide
                <ArrowRight size={16} />
              </a>
            </motion.div>

            <div className="w-full">
              <p className="text-sm text-violet-300 font-medium mb-3 text-center lg:text-left">
                Book a Strategy Consultation
              </p>
              <PartnerRegistrationForm
                variant="embedded"
                formIdPrefix="hero-"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 bg-[#040816] border-y border-cyan-500/10">
        <div className="w-full px-6 md:px-12 lg:px-20 max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Thousands of aspiring traders are actively looking for structured
            learning, mentorship, and technology-driven solutions. Most
            entrepreneurs see the opportunity but struggle with{" "}
            {PARTNER_STRUGGLES.slice(0, -1).join(", ")}, and{" "}
            {PARTNER_STRUGGLES[PARTNER_STRUGGLES.length - 1]}.
          </p>
          <p className="text-white text-xl font-semibold leading-relaxed">
            That&apos;s where TradingSmart.ai comes in.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            We provide the complete ecosystem required to launch and scale your
            own AI-powered stock market education company while you focus on
            building your brand, acquiring students, and growing revenue.
          </p>
        </div>
      </section>

      {/* What we provide */}
      <section
        id="what-we-provide"
        className={`${sectionClass} py-20 md:py-28 bg-[#040816]`}
      >
        <div className="w-full px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <SectionBadge>What We Provide</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Everything you need to launch and scale
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_WE_PROVIDE.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-cyan-500/15 bg-[#0a0f24] p-6 text-left"
              >
                <h3 className="text-base font-bold text-white mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section
        id="who-is-this-for"
        className={`${sectionClass} py-16 md:py-20 bg-[#061024]`}
      >
        <div className="w-full px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <SectionBadge>Who Is This For?</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Built for ambitious entrepreneurs
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {WHO_IS_THIS_FOR.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-gray-300 text-sm md:text-base rounded-xl border border-cyan-500/10 bg-[#0a0f24] px-5 py-4"
              >
                <Check size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why different */}
      <section className="py-20 md:py-28 bg-[#040816]">
        <div className="w-full px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <SectionBadge>Why This Opportunity Is Different</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Skip the build — start scaling
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-red-500/15 bg-[#0a0f24] p-8">
              <p className="text-gray-400 mb-6 leading-relaxed">
                Most people spend months or even years trying to:
              </p>
              <ul className="space-y-3">
                {BUILD_FROM_SCRATCH.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-400 text-sm"
                  >
                    <X size={16} className="text-red-400/80 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-500/20 bg-[#0a0f24] p-8">
              <p className="text-gray-300 mb-6 leading-relaxed">
                With TradingSmart.ai, all of these foundations are already
                available. Instead of building infrastructure, focus on what
                truly matters:
              </p>
              <ul className="space-y-3">
                {FOCUS_INSTEAD.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-300 text-sm"
                  >
                    <Check size={16} className="text-emerald-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market opportunity */}
      <section className="py-16 md:py-20 bg-[#061024]">
        <div className="w-full px-6 md:px-12 lg:px-20 max-w-4xl mx-auto text-center">
          <SectionBadge>Why the Market Opportunity Is Growing</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Education meets AI — a future-ready business
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            The financial education industry continues to expand as more people
            enter the stock market every year. At the same time, Artificial
            Intelligence is transforming how traders analyze markets, test
            strategies, and automate decision-making.
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">
            Traditional education companies focus on teaching manual trading
            methods. TradingSmart.ai combines education, AI, automation,
            strategy development, and modern trading technology into a single
            ecosystem.
          </p>
          <p className="text-violet-300 font-medium">
            This creates a unique opportunity to build a future-ready business in
            one of the fastest-growing sectors.
          </p>
        </div>
      </section>

      {/* Get started */}
      <section className="py-20 md:py-28 bg-[#040816]">
        <div className="w-full px-6 md:px-12 lg:px-20 max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionBadge>What You Need To Get Started</SectionBadge>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              We keep the requirements simple
            </h2>
            <p className="text-gray-400 mb-6">You should have:</p>
            <ul className="space-y-3 mb-8">
              {GET_STARTED_REQUIREMENTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-gray-300 text-sm"
                >
                  <Target size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {GET_STARTED_NOT_REQUIRED.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-emerald-400/90 text-sm"
                >
                  <Check size={16} className="shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            id="advantage"
            className={`${sectionClass} rounded-2xl border border-violet-500/25 bg-gradient-to-b from-violet-500/10 to-[#0a0f24] p-8`}
          >
            <SectionBadge>The TradingSmart.ai Advantage</SectionBadge>
            <ul className="grid sm:grid-cols-2 gap-3 mt-6">
              {TRADINGSMART_ADVANTAGE.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-gray-300"
                >
                  <Sparkles size={14} className="text-violet-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Build a business CTA */}
      <section className="py-16 md:py-20 bg-[#061024] border-t border-cyan-500/10">
        <div className="w-full px-6 md:px-12 lg:px-20 max-w-4xl mx-auto text-center">
          <Rocket className="mx-auto text-cyan-400 mb-4" size={40} />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Build a Business, Not Just Another Course
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            TradingSmart.ai is designed for entrepreneurs who want to build a
            long-term business in the financial education and AI-powered trading
            industry.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            Instead of starting from zero, leverage a proven ecosystem,
            professional support, and modern technology to launch and scale
            faster.
          </p>
          <p className="text-xl text-white font-semibold mb-2">
            Book a Strategy Consultation
          </p>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Speak with our team to understand how the TradingSmart.ai Partner
            Ecosystem can help you build your own AI-powered stock market
            education company.
          </p>
          <p className="text-violet-300 text-sm font-medium mb-6">
            Start building your business. Powered by TradingSmart.ai.
          </p>
          <button
            type="button"
            onClick={scrollToConsult}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:shadow-[0_0_40px_rgba(139,92,246,0.35)] transition-all"
          >
            Book Strategy Consultation
            <ArrowRight size={18} />
          </button>
          <p className="mt-8 text-sm text-gray-500">
            <Link href="/" className="text-cyan-400 hover:underline">
              ← Back to Workshop Home
            </Link>
          </p>
        </div>
      </section>

      <PartnerRegistrationForm
        id="partner-apply"
        formIdPrefix="bottom-"
      />
    </>
  );
}
