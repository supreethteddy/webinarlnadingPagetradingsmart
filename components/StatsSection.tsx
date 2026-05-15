'use client';

import { motion } from 'framer-motion';
import { motionInitial } from '@/components/motion';
import { CalendarDays, Cpu, MessageCircle } from 'lucide-react';

const stats = [
  {
    icon: CalendarDays,
    title: '3 Day Workshop',
    desc: 'Intensive hands-on training with live market analysis and AI tool demonstrations.',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    border: 'border-cyan-500/20',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Cpu,
    title: 'AI + Trading',
    desc: 'Learn how to leverage ChatGPT, AI analytics, and machine learning for smarter trades.',
    gradient: 'from-blue-500/20 to-purple-500/20',
    border: 'border-blue-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: MessageCircle,
    title: 'Live Telegram Community',
    desc: 'Join 2,400+ traders sharing AI insights, signals, and daily market breakdowns.',
    gradient: 'from-purple-500/20 to-cyan-500/20',
    border: 'border-purple-500/20',
    iconColor: 'text-purple-400',
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#040816]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={motionInitial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${stat.gradient} backdrop-blur-xl border ${stat.border} hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-500`}
            >
              <div className={`w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon size={26} className={stat.iconColor} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{stat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{stat.desc}</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}