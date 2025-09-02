"use client"

import { motion } from "framer-motion"

export default function HeroCurves() {
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 1440 520"
      className="hero-curves pointer-events-none absolute inset-x-0 -top-24 h-[520px] w-full [mix-blend-mode:multiply]"
      style={{
        maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
    >
      <defs>
        <linearGradient id="hero-grad-1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.32" />
          <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="hero-grad-2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.24" />
          <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.00" />
        </linearGradient>
        <linearGradient id="hero-grad-3" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#0284c7" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.02" />
        </linearGradient>
        <filter id="hero-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="32" />
        </filter>
        <filter id="hero-blur-light" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
      </defs>

      {/* Animated floating orbs in the background */}
      <motion.circle
        cx="200"
        cy="180"
        r="60"
        fill="url(#hero-grad-1)"
        filter="url(#hero-blur)"
        animate={{
          cx: [200, 250, 200],
          cy: [180, 140, 180],
          r: [60, 80, 60],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.circle
        cx="1200"
        cy="160"
        r="40"
        fill="url(#hero-grad-2)"
        filter="url(#hero-blur)"
        animate={{
          cx: [1200, 1160, 1200],
          cy: [160, 200, 160],
          r: [40, 60, 40],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Main flowing curves with scroll animations */}
      <motion.g 
        filter="url(#hero-blur)" 
        className="curve-1"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path
          d="M0,330 C 280,240 580,420 900,330 C 1120,280 1320,320 1440,300 L 1440,520 L 0,520 Z"
          fill="url(#hero-grad-1)"
        />
      </motion.g>

      {/* Secondary curve with different animation timing */}
      <motion.g 
        filter="url(#hero-blur)" 
        className="curve-2"
        animate={{
          scale: [1, 1.01, 1],
          opacity: [0.9, 0.7, 0.9],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <path
          d="M0,280 C 240,220 520,300 800,260 C 1050,210 1280,250 1440,230 L 1440,520 L 0,520 Z"
          fill="url(#hero-grad-2)"
        />
      </motion.g>

      {/* Foreground subtle curve */}
      <motion.g 
        filter="url(#hero-blur-light)" 
        className="curve-3"
        initial={{ opacity: 0, y: 30 }}
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          y: [30, 20, 30],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <path
          d="M0,220 C 360,180 720,240 1080,200 C 1260,180 1360,190 1440,180 L 1440,520 L 0,520 Z"
          fill="url(#hero-grad-3)"
        />
      </motion.g>
    </motion.svg>
  )
}
