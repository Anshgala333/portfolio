"use client";

import { motion } from "framer-motion";
import { Download, Code } from "lucide-react";
import BackgroundDecoration from "./background-decoration";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="py-32 px-4 relative"
      style={{ backgroundColor: "#0A0908" }}
    >
      <BackgroundDecoration />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid md:grid-cols-2 gap-6"
        >
          <motion.div
            whileHover={{
              y: -6,
              scale: 1.02,
              borderColor: "#F46C38",
              transition: {
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-zinc-800/50 border border-zinc-700/50 mb-6">
              <Download className="w-8 h-8 text-[#F46C38]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Resume</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Download my resume to learn more about my experience and skills.
            </p>
            <button
              className="w-full bg-[#F46C38]  text-black font-bold h-12 rounded-lg shadow-md "
              onClick={() => {}}
              type="button"
            >
              <a href="https://drive.google.com/file/d/1wWp7lHXsPlfMENi32FReSdigR9qdJduj/view?usp=drive_link">Download Resume</a>
            </button>
          </motion.div>

          <motion.div
            whileHover={{
              y: -6,
              scale: 1.02,
              borderColor: "#C5FF4166",
              transition: {
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-zinc-800/50 border border-zinc-700/50 mb-6">
              <Code className="w-8 h-8 text-[#C5FF41]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">LeetCode</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Check out my problem-solving skills and coding practice.
            </p>
            <button
              className="w-full bg-[#C5FF41] hover:bg-[#C5FF41]/90 text-black font-bold h-12 rounded-lg shadow-md "
              onClick={() => window.open("https://leetcode.com/u/Anshhhhh/", "_blank")}
              type="button"
            >
              View Profile
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
