"use client";

import { motion } from "framer-motion";
import { ArrowDown, Code, Sparkles, Zap, Rocket, Cpu } from "lucide-react";
import { useEffect, useRef } from "react";
import SplitText from "./split-text";
import BackgroundDecoration from "./background-decoration";
import Image from "next/image";

export default function HeroSection() {
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (floatingRef.current) {
      const icons = floatingRef.current.querySelectorAll(".floating-icon");

      icons.forEach((icon, index) => {
        const element = icon as HTMLElement;
        let startY = 0;
        let currentY = 0;
        const amplitude = 20;
        const speed = 0.002 + index * 0.0003;
        let animationId: number;

        const animate = () => {
          startY += speed;
          currentY = Math.sin(startY) * amplitude;
          element.style.transform = `translateY(${currentY}px)`;
          animationId = requestAnimationFrame(animate);
        };

        setTimeout(() => {
          animate();
        }, index * 500);

        return () => {
          if (animationId) {
            cancelAnimationFrame(animationId);
          }
        };
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-4 pt-20 pb-24 overflow-hidden"
      style={{ backgroundColor: "#0A0908" }}
    >
      <BackgroundDecoration />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <div className="flex flex-wrap gap-3 mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#F46C38]/20 rounded-full bg-[#F46C38]/5"
              >
                <Sparkles className="w-4 h-4 text-[#F46C38]" />
                <span className="text-sm text-gray-400">
                  Full Stack Developer
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#C5FF41]/20 rounded-full bg-[#C5FF41]/5"
              >
                <Rocket className="w-4 h-4 text-[#C5FF41]" />
                <span className="text-sm text-gray-400">Problem Solving</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-600/20 rounded-full bg-zinc-600/5"
              >
                <Cpu className="w-4 h-4 text-zinc-400" />
                <span className="text-sm text-gray-400">AI Explorer</span>
              </motion.div>
            </div>

            <div className="mb-6">
              <SplitText
                text="ANSH GALA"
                className="text-5xl md:text-6xl lg:text-7xl font-black"
                duration={0.6}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-8"
            >
              Aspiring Software Engineer skilled in data structures, algorithms,
              and system design. 650+ LeetCode problems solved and experience
              building scalable real-time apps using React.js, Node.js, Python,
              and MongoDB.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-[#F46C38] text-black font-semibold rounded-lg shadow-lg shadow-[#F46C38]/20"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border border-[#F46C38]/30 text-white font-semibold rounded-lg"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              className="mt-12"
            >
              <ArrowDown className="w-6 h-6 text-[#F46C38] animate-bounce" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center md:justify-end relative"
            ref={floatingRef}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F46C38]/20 via-[#C5FF41]/10 to-transparent rounded-2xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative w-80 h-96 rounded-2xl border-2 border-[#F46C38]/30 flex items-center justify-center backdrop-blur-sm bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="relative z-10 w-full h-full"
                >
                  <Image
                    src="/images/anshgala1.png"
                    alt="Photo"
                    fill
                   className="object-cover rounded-xl"
                  />{" "}
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#F46C38]/10 to-transparent opacity-50"></div>
              </div>

              <motion.div
                className="floating-icon absolute top-20 -left-6 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-zinc-700/40 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0, rotate: 90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.8,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Rocket className="w-6 h-6 text-zinc-400" />
              </motion.div>

              <motion.div
                className="floating-icon absolute bottom-20 -right-6 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-zinc-700/40 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.9,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Cpu className="w-6 h-6 text-zinc-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
