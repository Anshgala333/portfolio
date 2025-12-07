"use client";

import { motion } from "framer-motion";

export default function BackgroundDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(113, 113, 122, 0.15)" />
          </pattern>
          <pattern id="grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(113, 113, 122, 0.08)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(244, 108, 56, 0.03) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(197, 255, 65, 0.02) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="absolute inset-0 opacity-[0.03]">
        <motion.div
          className="absolute top-20 right-1/3 w-2 h-2 bg-zinc-700 rounded-full"
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-2 h-2 bg-zinc-700 rounded-full"
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-zinc-700 rounded-full"
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <svg className="absolute top-10 left-10 w-32 h-32 opacity-[0.04]" viewBox="0 0 100 100">
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          stroke="rgba(244, 108, 56, 0.4)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, rotate: 0 }}
          animate={{ pathLength: 1, rotate: 360 }}
          transition={{
            pathLength: { duration: 2, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
        />
      </svg>

      <svg className="absolute bottom-20 right-16 w-24 h-24 opacity-[0.04]" viewBox="0 0 100 100">
        <motion.rect
          x="25"
          y="25"
          width="50"
          height="50"
          stroke="rgba(197, 255, 65, 0.4)"
          strokeWidth="1"
          fill="none"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>
    </div>
  );
}
