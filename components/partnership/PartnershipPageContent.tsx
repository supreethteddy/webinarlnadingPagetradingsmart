"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { motionInitial } from "@/components/motion";
import {
  ArrowRight,
  Check,
  X,
  Handshake,
  TrendingUp,
  Users,
  Zap,
  Shield,
  BarChart3,
} from "lucide-react";
import PartnerRegistrationForm from "@/components/PartnerRegistrationForm";
import {
  PARTNER_PLANS,
  PROVIDE_SECTIONS,
  SUITABLE_FOR,
  HOW_IT_WORKS,
  REVENUE_STREAMS,
  COMPANY_PRODUCTS,
  CONDITIONS,
  PARTNER_PAIN_POINTS,
} from "@/lib/partnership-data";

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-4">
      {children}
    </span>
  );
}

function SplitBar({
  partner,
  company,
  label,
}: {
  partner: number;
  company: number;
  label: string;
}) {
  return (
    <div className="text-left space-y-2">
      <p className="text-xs font-medium text-gray-300 leading-snug">{label}</p>
      <div className="flex items-center justify-between gap-3 text-[11px] text-gray-500 tabular-nums">
        <span className="shrink-0">Partner {partner}%</span>
        <span className="shrink-0">Company {company}%</span>
      </div>
      <div className="flex h-2.5 rounded-full overflow-hidden bg-[#061024]">
        <div
          className="bg-gradient-to-r from-cyan-500 to-cyan-400"
          style={{ width: `${partner}%` }}
        />
        <div
          className="bg-violet-600/80"
          style={{ width: `${company}%` }}
        />
      </div>
    </div>
  );
}

const sectionClass = "scroll-mt-28 md:scroll-mt-32";

export default function PartnershipPageContent() {
  const scrollToApply = () => {
    document.getElementById("partner-apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#040816]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(139,92,246,0.15),transparent)]" />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={motionInitial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <SectionBadge>TradingSmart.ai Partner Program</SectionBadge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Build Your Own{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                  Trading Education Business
                </span>
              </h1>
              <p className="text-xl text-violet-300/90 font-medium mb-4">
                Launch Your Own Trading Academy with TradingSmart.ai
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                The fintech and stock market education industry is growing rapidly.
                Our Partner Program lets you launch your own trading education
                business with complete infrastructure, training, backend support,
                and revenue-sharing — you focus on growth, we handle the rest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  onClick={scrollToApply}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:shadow-[0_0_40px_rgba(139,92,246,0.35)] transition-all"
                >
                  Apply Now
                  <ArrowRight size={18} />
                </button>
                <a
                  href="#partner-plans"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-cyan-500/30 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-all"
                >
                  View Partner Plans
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain points + solution */}
      <section className="py-16 md:py-20 bg-[#040816] border-y border-cyan-500/10">
        <div className="w-full px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Most entrepreneurs struggle with…
              </h2>
              <ul className="space-y-3">
                {PARTNER_PAIN_POINTS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-400"
                  >
                    <X size={16} className="text-red-400/80 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-cyan-500/20 bg-[#0a0f24] p-8">
              <Handshake className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">
                TradingSmart.ai solves all of this
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                You focus on growing your business. We help you with everything
                else — technology, trainers, curriculum, operations, and product
                delivery.
              </p>
              <ul className="space-y-2">
                {[
                  "Complete infrastructure",
                  "Training & backend support",
                  "Revenue-sharing opportunities",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-gray-300 text-sm">
                    <Check size={16} className="text-emerald-400 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What we provide */}
      <section id="what-we-provide" className={`${sectionClass} py-20 md:py-28 bg-[#040816]`}>
        <div className="w-full px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <SectionBadge>What We Provide</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              End-to-end partner infrastructure
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PROVIDE_SECTIONS.map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border border-cyan-500/15 bg-[#0a0f24] p-7"
              >
                <h3 className="text-lg font-bold text-white mb-5">{block.title}</h3>
                <ul className="space-y-3">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <Check size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why opportunity */}
      <section className="py-16 md:py-20 bg-[#061024]">
        <div className="w-full px-6 md:px-12 lg:px-20 max-w-6xl mx-auto text-center">
          <SectionBadge>Why This Opportunity?</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start immediately — don&apos;t build from scratch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Instead of spending years building a trading academy, leverage our
            existing ecosystem and launch right away. No prior fintech experience
            required.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {SUITABLE_FOR.map((role) => (
              <span
                key={role}
                className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-300"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="partner-plans" className={`${sectionClass} py-20 md:py-28 bg-[#040816]`}>
        <div className="w-full px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <SectionBadge>Partner Plans</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Choose the plan that fits your ambition
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {PARTNER_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col h-full text-left rounded-2xl border p-6 md:p-8 ${
                  plan.highlight
                    ? "border-violet-500/50 bg-gradient-to-b from-violet-500/10 to-[#0a0f24] shadow-[0_0_50px_rgba(139,92,246,0.15)]"
                    : "border-cyan-500/15 bg-[#0a0f24]"
                } ${plan.highlight ? "pt-10" : "pt-8"}`}
              >
                {plan.highlight && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 whitespace-nowrap px-4 py-1.5 rounded-full bg-violet-500 text-white text-xs font-semibold tracking-wide">
                    Most Popular
                  </span>
                )}

                <div className="mb-6">
                  <p className="text-cyan-400 text-sm font-semibold mb-1">{plan.name}</p>
                  <h3 className="text-xl font-bold text-white leading-snug mb-3 min-h-[3.5rem]">
                    {plan.title}
                  </h3>
                  <p className="text-3xl font-bold text-white leading-none mb-1">
                    {plan.investment}
                  </p>
                  <p className="text-sm text-gray-500">{plan.duration}</p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 min-h-[5rem]">
                  {plan.description}
                </p>

                <div className="space-y-5 mb-6">
                  <SplitBar
                    label="Course Revenue"
                    partner={plan.courseSplit.partner}
                    company={plan.courseSplit.company}
                  />
                  <SplitBar
                    label="TradingSmart.ai Products"
                    partner={plan.productSplit.partner}
                    company={plan.productSplit.company}
                  />
                </div>

                <div className="mb-6 space-y-3 text-left">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    <span className="block text-gray-400 font-medium mb-1">Products</span>
                    {COMPANY_PRODUCTS.join(" · ")}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    <span className="block text-white font-medium mb-1">Website</span>
                    {plan.website}
                  </p>
                </div>

                {plan.lifetimeRevenue && (
                  <p className="text-sm text-emerald-400/90 mb-4 font-medium leading-relaxed">
                    ✓ Lifetime recurring revenue from every client you introduce
                  </p>
                )}

                <ul className="space-y-2.5 mb-8 text-sm text-gray-400 flex-grow">
                  {plan.included.slice(0, 6).map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-left">
                      <Check size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                  {plan.included.length > 6 && (
                    <li className="text-cyan-400/80 text-xs pl-6 text-left">+ more included</li>
                  )}
                </ul>

                <button
                  type="button"
                  onClick={scrollToApply}
                  className={`mt-auto w-full min-h-[3rem] inline-flex items-center justify-center rounded-full font-semibold text-sm transition-all ${
                    plan.highlight
                      ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white hover:shadow-lg"
                      : "border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                  }`}
                >
                  Apply for {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className={`${sectionClass} py-20 bg-[#061024]`}>
        <div className="w-full px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <SectionBadge>How It Works</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Six steps to your trading academy
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((item) => (
              <div
                key={item.step}
                className="relative rounded-xl border border-cyan-500/15 bg-[#0a0f24] p-6"
              >
                <span className="text-4xl font-bold text-cyan-500/20">
                  {String(item.step).padStart(2, "0")}
                </span>
                <p className="text-white font-semibold mt-2">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue streams + success model */}
      <section className="py-20 md:py-28 bg-[#040816]">
        <div className="w-full px-6 md:px-12 lg:px-20 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <SectionBadge>Potential Revenue Streams</SectionBadge>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Multiple ways to earn
            </h2>
            <ul className="space-y-3">
              {REVENUE_STREAMS.map((stream) => (
                <li
                  key={stream}
                  className="flex items-center gap-3 text-gray-400"
                >
                  <TrendingUp size={16} className="text-cyan-400 shrink-0" />
                  {stream}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-violet-500/20 bg-[#0a0f24] p-8">
            <SectionBadge>Partner Success Model</SectionBadge>
            <div className="grid sm:grid-cols-2 gap-8 mt-6">
              <div>
                <p className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                  <Users size={18} />
                  Your Role
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {["Marketing", "Lead Generation", "Sales Activities", "Business Growth"].map(
                    (r) => (
                      <li key={r} className="flex gap-2">
                        <Check size={14} className="text-cyan-400 shrink-0" />
                        {r}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <p className="text-violet-400 font-semibold mb-3 flex items-center gap-2">
                  <Zap size={18} />
                  Our Role
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {[
                    "Technology",
                    "Trainers",
                    "Curriculum",
                    "Backend Operations",
                    "Product Delivery",
                    "Technical Support",
                  ].map((r) => (
                    <li key={r} className="flex gap-2">
                      <Check size={14} className="text-violet-400 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 bg-[#061024]">
        <div className="w-full px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionBadge>Conditions & Rules</SectionBadge>
            <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-2">
              <Shield size={28} className="text-cyan-400" />
              Transparent partnership terms
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {CONDITIONS.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-cyan-500/10 bg-[#0a0f24] p-5"
              >
                <h3 className="font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 bg-[#040816] border-t border-cyan-500/10">
        <div className="w-full px-6 md:px-12 lg:px-20 max-w-4xl mx-auto text-center">
          <BarChart3 className="mx-auto text-cyan-400 mb-4" size={40} />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to build your trading education business?
          </h2>
          <p className="text-gray-400 mb-8">
            Join the TradingSmart.ai Partner Program with complete infrastructure,
            trainers, support, and recurring revenue opportunities.
          </p>
          <p className="text-violet-300 text-sm font-medium mb-6">
            Limited Partner Slots Available
          </p>
          <button
            type="button"
            onClick={scrollToApply}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:shadow-[0_0_40px_rgba(139,92,246,0.35)] transition-all"
          >
            Apply Now
            <ArrowRight size={18} />
          </button>
          <p className="mt-8 text-sm text-gray-500">
            <Link href="/" className="text-cyan-400 hover:underline">
              ← Back to Workshop Home
            </Link>
          </p>
        </div>
      </section>

      <PartnerRegistrationForm />
    </>
  );
}
