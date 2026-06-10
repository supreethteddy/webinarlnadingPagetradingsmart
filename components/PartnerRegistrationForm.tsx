"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { motionInitial } from "@/components/motion";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  Loader2,
  MapPin,
  Globe,
} from "lucide-react";

const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
  "450f3c03-489f-4ad0-bd5d-5fa162b5f0ac";

const inputClass =
  "w-full px-5 py-3.5 rounded-xl bg-[#061024] border border-cyan-500/15 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300";

type PartnerRegistrationFormProps = {
  variant?: "section" | "embedded";
  id?: string;
  formIdPrefix?: string;
  showHeader?: boolean;
};

export default function PartnerRegistrationForm({
  variant = "section",
  id = "partner-apply",
  formIdPrefix = "",
  showHeader = true,
}: PartnerRegistrationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    city: "",
    domain: "",
    background: "",
    message: "",
  });

  const fid = (name: string) => `${formIdPrefix}${name}`;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.whatsapp,
          message: [
            `City: ${formData.city || "—"}`,
            `Domain: ${formData.domain || "—"}`,
            `Background: ${formData.background || "—"}`,
            `Goals / Questions: ${formData.message || "—"}`,
          ].join("\n"),
          subject: "TradingSmart.ai — Strategy Consultation Request",
          from_name: "TradingSmart.ai Partner Page",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || "Submission failed. Please try again.");
      }
    } catch {
      setError("Unable to submit. Check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formCard = (
    <motion.div
      initial={motionInitial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative p-6 md:p-8 rounded-3xl bg-[#0a0f24] border border-cyan-500/15 overflow-hidden"
      style={{ backgroundColor: "#0a0f24" }}
    >
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/8 rounded-full blur-[80px]" />

      {submitted ? (
        <div className="relative z-10 flex flex-col items-center py-10 text-center">
          <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-4">
            <CheckCircle2 size={28} className="text-emerald-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            Consultation Request Received!
          </h3>
          <p className="text-gray-400 text-sm max-w-md">
            Thank you for your interest. Our team will contact you shortly to
            schedule your strategy consultation.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor={fid("name")}
                className="text-sm text-gray-400 flex items-center gap-2"
              >
                <User size={14} className="text-cyan-400" />
                Full Name
              </label>
              <input
                id={fid("name")}
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={inputClass}
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor={fid("email")}
                className="text-sm text-gray-400 flex items-center gap-2"
              >
                <Mail size={14} className="text-cyan-400" />
                Email Address
              </label>
              <input
                id={fid("email")}
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={inputClass}
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor={fid("phone")}
                className="text-sm text-gray-400 flex items-center gap-2"
              >
                <Phone size={14} className="text-cyan-400" />
                WhatsApp Number
              </label>
              <input
                id={fid("phone")}
                type="tel"
                required
                inputMode="tel"
                value={formData.whatsapp}
                onChange={(e) =>
                  setFormData({ ...formData, whatsapp: e.target.value })
                }
                className={inputClass}
                placeholder="+91 98765 43210"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor={fid("city")}
                className="text-sm text-gray-400 flex items-center gap-2"
              >
                <MapPin size={14} className="text-cyan-400" />
                City
              </label>
              <input
                id={fid("city")}
                type="text"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className={inputClass}
                placeholder="Mumbai, Delhi, etc."
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor={fid("domain")}
              className="text-sm text-gray-400 flex items-center gap-2"
            >
              <Globe size={14} className="text-cyan-400" />
              Domain Name (if you have one)
            </label>
            <input
              id={fid("domain")}
              type="text"
              value={formData.domain}
              onChange={(e) =>
                setFormData({ ...formData, domain: e.target.value })
              }
              className={inputClass}
              placeholder="yourbrand.com"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor={fid("background")}
              className="text-sm text-gray-400 flex items-center gap-2"
            >
              <MessageSquare size={14} className="text-cyan-400" />
              Your Background
            </label>
            <textarea
              id={fid("background")}
              rows={2}
              maxLength={400}
              value={formData.background}
              onChange={(e) =>
                setFormData({ ...formData, background: e.target.value })
              }
              className={`${inputClass} resize-none`}
              placeholder="Entrepreneur, digital marketer, trainer..."
            />
          </div>

          <div className="space-y-2">
            <label htmlFor={fid("message")} className="text-sm text-gray-400">
              Goals & Questions (Optional)
            </label>
            <textarea
              id={fid("message")}
              rows={2}
              maxLength={500}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={`${inputClass} resize-none`}
              placeholder="Business goals, audience size, timeline..."
            />
          </div>

          {error && (
            <p className="text-sm text-red-400 text-center px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send size={18} />
                Book Strategy Consultation
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  );

  if (variant === "embedded") {
    return formCard;
  }

  return (
    <section
      id={id}
      className="relative scroll-mt-28 md:scroll-mt-32 py-24 md:py-28 overflow-hidden bg-[#040816]"
      style={{ backgroundColor: "#040816" }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/8 rounded-full blur-[180px]" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {showHeader && (
            <motion.div
              initial={motionInitial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-sm mb-4">
                Strategy Consultation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Book Your Consultation
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Tell us about your goals and background. Our team will reach out
                on WhatsApp and email within 24–48 hours.
              </p>
            </motion.div>
          )}
          {formCard}
        </div>
      </div>
    </section>
  );
}
