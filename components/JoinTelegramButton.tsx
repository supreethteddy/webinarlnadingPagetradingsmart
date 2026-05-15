"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export const TELEGRAM_URL = "https://t.me/+gI80-j0NXJM3N2Fl";

type JoinTelegramButtonProps = {
  label?: string;
  variant?: "outline" | "filled";
  size?: "md" | "lg";
  className?: string;
};

export default function JoinTelegramButton({
  label = "Join Telegram",
  variant = "outline",
  size = "md",
  className = "",
}: JoinTelegramButtonProps) {
  const sizeClasses =
    size === "lg" ? "px-10 py-5 text-lg gap-2.5" : "px-8 py-4 text-base gap-2";
  const iconSize = size === "lg" ? 20 : 18;

  const variantClasses =
    variant === "filled"
      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border border-cyan-400/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.45)]"
      : "bg-white/5 text-white border border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-400/60 hover:shadow-[0_0_28px_rgba(6,182,212,0.25)]";

  return (
    <motion.a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`telegram-cta relative inline-flex items-center justify-center rounded-full font-semibold whitespace-nowrap transition-colors duration-300 ${sizeClasses} ${variantClasses} ${className}`}
      animate={{
        scale: [1, 1.03, 1],
        boxShadow: [
          "0 0 0 0 rgba(6, 182, 212, 0.55)",
          "0 0 0 14px rgba(6, 182, 212, 0)",
          "0 0 0 0 rgba(6, 182, 212, 0)",
        ],
      }}
      transition={{
        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        boxShadow: { duration: 2, repeat: Infinity, ease: "easeOut" },
      }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
    >
      <span
        className="telegram-cta-shimmer pointer-events-none absolute inset-0 rounded-full"
        aria-hidden
      />
      <motion.span
        className="relative z-10 flex items-center justify-center"
        animate={{ rotate: [0, -8, 8, -4, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "easeInOut",
        }}
      >
        <Send
          size={iconSize}
          className={variant === "filled" ? "text-white" : "text-cyan-400"}
        />
      </motion.span>
      <span className="relative z-10">{label}</span>
    </motion.a>
  );
}
