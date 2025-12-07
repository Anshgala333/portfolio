"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-zinc-900" style={{ backgroundColor: "black" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <p className="text-gray-400 flex items-center gap-2 text-base">
            Built with <Heart className="w-4 h-4 text-[#F46C38] fill-[#F46C38] animate-pulse" /> by Ansh Gala
          </p>
          <p className="text-gray-600 text-sm font-medium">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
