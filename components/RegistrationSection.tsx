'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { motionInitial } from '@/components/motion';
import { Send, User, Mail, Phone, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';

const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
  '450f3c03-489f-4ad0-bd5d-5fa162b5f0ac';

export default function RegistrationSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.whatsapp,
          message: formData.message || '—',
          subject: 'TradingSmart.ai — Workshop Registration',
          from_name: 'TradingSmart.ai Website',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || 'Submission failed. Please try again.');
      }
    } catch {
      setError('Unable to submit. Check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#040816]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={motionInitial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-4">
              Limited Seats
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Register For The Workshop
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Secure your spot in the next cohort. Join thousands of traders already transforming their approach with AI.
            </p>
          </motion.div>

          <motion.div
            initial={motionInitial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative p-8 md:p-12 rounded-3xl bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/8 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-600/8 rounded-full blur-[60px]" />

            {submitted ? (
              <motion.div
                initial={motionInitial}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 flex flex-col items-center py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Registration Confirmed!</h3>
                <p className="text-gray-400 max-w-md">
                  Thank you for registering. We will contact you on WhatsApp and email with workshop details.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative z-10 space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-400 flex items-center gap-2">
                      <User size={14} className="text-cyan-400" />
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-400 flex items-center gap-2">
                      <Mail size={14} className="text-cyan-400" />
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm text-gray-400 flex items-center gap-2">
                    <Phone size={14} className="text-cyan-400" />
                    WhatsApp Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    value={formData.whatsapp}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsapp: e.target.value })
                    }
                    className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-400 flex items-center gap-2">
                    <MessageSquare size={14} className="text-cyan-400" />
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={500}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 resize-none"
                    placeholder="Tell us about your trading experience or goals..."
                  />
                  <div className="text-xs text-gray-500 text-right">
                    {formData.message.length}/500
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-red-400 text-center px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-base hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Register For Workshop
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
