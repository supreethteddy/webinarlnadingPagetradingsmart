'use client';

import { motion } from 'framer-motion';
import { motionInitial } from '@/components/motion';
import {
  BrainCircuit,
  TrendingUp,
  BarChart3,
  Zap,
  Shield,
  Activity,
} from 'lucide-react';

const candles = [
  { h: 42, bull: true },
  { h: 28, bull: false },
  { h: 55, bull: true },
  { h: 38, bull: true },
  { h: 22, bull: false },
  { h: 48, bull: true },
  { h: 35, bull: false },
  { h: 62, bull: true },
  { h: 45, bull: true },
  { h: 30, bull: false },
  { h: 52, bull: true },
  { h: 68, bull: true },
];

const aiSignals = [
  { label: 'Breakout detected', conf: '94%', color: 'text-emerald-400' },
  { label: 'IV skew alert', conf: '88%', color: 'text-cyan-400' },
  { label: 'Risk within limits', conf: 'Safe', color: 'text-blue-400' },
];

const metrics = [
  { icon: TrendingUp, label: 'AI Win Rate', value: '87.4%', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  { icon: Activity, label: 'Signals Today', value: '24', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { icon: Shield, label: 'Risk Score', value: 'Low', color: 'text-blue-400', bg: 'bg-blue-500/10' },
];

function CandlestickChart() {
  const w = 280;
  const h = 100;
  const barW = 16;
  const gap = 6;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1={0}
          y1={20 + i * 22}
          x2={w}
          y2={20 + i * 22}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={1}
        />
      ))}
      <motion.path
        d="M8 75 L45 62 L82 58 L118 48 L155 42 L192 35 L228 28 L272 18"
        fill="none"
        stroke="#22d3ee"
        strokeWidth={1.5}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.2, ease: 'easeOut' }}
      />
      {candles.map((c, i) => {
        const x = 12 + i * (barW + gap);
        const bodyH = c.h * 0.55;
        const wickH = c.h;
        const color = c.bull ? '#34d399' : '#f87171';
        return (
          <g key={i}>
            <line
              x1={x + barW / 2}
              y1={h - 12 - wickH}
              x2={x + barW / 2}
              y2={h - 12}
              stroke={color}
              strokeWidth={1.5}
            />
            <rect x={x} y={h - 12 - bodyH} width={barW} height={bodyH} fill={color} rx={2} />
          </g>
        );
      })}
    </svg>
  );
}

function NeuralNodes() {
  const nodes = [
    { cx: 50, cy: 30 },
    { cx: 20, cy: 70 },
    { cx: 80, cy: 70 },
    { cx: 50, cy: 100 },
  ];
  const links = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [0, 3],
  ];

  return (
    <svg viewBox="0 0 100 120" className="w-full max-w-[100px] h-auto" aria-hidden>
      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].cx}
          y1={nodes[a].cy}
          x2={nodes[b].cx}
          y2={nodes[b].cy}
          stroke="rgba(6,182,212,0.35)"
          strokeWidth={1}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r={i === 0 ? 10 : 7}
          fill={i === 0 ? '#06b6d4' : '#0e7490'}
          stroke="#22d3ee"
          strokeWidth={1.5}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
        />
      ))}
    </svg>
  );
}

export default function TradingInfographic() {
  return (
    <motion.div
      initial={motionInitial}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full"
    >
      <div className="relative rounded-2xl border border-cyan-500/20 bg-[#0a0f24]/90 backdrop-blur-xl shadow-[0_0_60px_rgba(6,182,212,0.15)] overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <BrainCircuit size={18} className="text-cyan-400" />
            <span className="text-sm font-semibold text-white">AI Trading Dashboard</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400 font-medium">Live</span>
          </div>
        </div>

        <div className="p-5 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {metrics.map((m) => (
              <motion.div
                key={m.label}
                className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 text-center"
              >
                <div
                  className={`w-8 h-8 rounded-lg ${m.bg} flex items-center justify-center mx-auto mb-2`}
                >
                  <m.icon size={16} className={m.color} />
                </div>
                <p className="text-[10px] text-gray-500 uppercase tracking-wide">{m.label}</p>
                <p className={`text-lg font-bold ${m.color}`}>{m.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4">
            <div className="rounded-xl border border-white/[0.06] bg-[#040816]/60 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-gray-400 flex items-center gap-1.5">
                  <BarChart3 size={14} className="text-cyan-400" />
                  Market Structure · NIFTY
                </span>
                <span className="text-xs text-emerald-400 font-medium">+2.4% AI bias</span>
              </div>
              <CandlestickChart />
            </div>

            <div className="flex flex-col gap-3 min-w-[120px]">
              <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-3 flex flex-col items-center">
                <span className="text-[10px] text-cyan-400/80 uppercase tracking-wider mb-2">
                  AI Engine
                </span>
                <NeuralNodes />
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 space-y-2">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider flex items-center gap-1">
                  <Zap size={12} className="text-amber-400" />
                  Live Signals
                </span>
                {aiSignals.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={motionInitial}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.15 }}
                    className="flex items-center justify-between gap-2 text-[11px]"
                  >
                    <span className="text-gray-400 truncate">{s.label}</span>
                    <span className={`font-semibold shrink-0 ${s.color}`}>{s.conf}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-violet-500/10 p-3">
            <div className="flex flex-wrap items-center justify-between gap-2 text-[11px]">
              {['Scan', 'Analyze', 'Simulate', 'Execute'].map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-[10px]">
                    {i + 1}
                  </span>
                  <span className="text-gray-300 font-medium">{step}</span>
                  {i < 3 && <span className="text-gray-600 hidden sm:inline">→</span>}
                </div>
              ))}
              <span className="text-cyan-400/80 text-[10px] ml-auto">Powered by AI</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-4 hidden sm:flex px-4 py-3 rounded-xl border border-cyan-500/20 bg-[#0a0f24]/95 backdrop-blur-xl shadow-lg">
        <div className="flex items-center gap-2">
          <TrendingUp size={18} className="text-cyan-400" />
          <div>
            <p className="text-xs text-gray-400">Backtest Edge</p>
            <p className="text-sm font-bold text-white">+18.2%</p>
          </div>
        </div>
      </div>

      <div className="absolute -top-3 -right-3 px-4 py-3 rounded-xl border border-blue-500/20 bg-[#0a0f24]/95 backdrop-blur-xl shadow-lg">
        <p className="text-xs text-gray-400">Traders Learning</p>
        <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
          2,400+
        </p>
      </div>
    </motion.div>
  );
}
