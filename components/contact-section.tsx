"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Code2, Terminal, Braces, FileCode, GitBranch, Database } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-32 px-4 relative" style={{ backgroundColor: '#0A0908' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]">
          <Code2 className="absolute top-20 left-10 w-16 h-16 text-[#F46C38] rotate-12" />
          <Terminal className="absolute top-40 right-20 w-20 h-20 text-zinc-700 -rotate-6" />
          <Braces className="absolute bottom-40 left-20 w-24 h-24 text-zinc-700 rotate-45" />
          <FileCode className="absolute bottom-32 right-32 w-16 h-16 text-[#F46C38] -rotate-12" />
          <GitBranch className="absolute top-1/3 left-1/3 w-12 h-12 text-zinc-700 rotate-90" />
          <Database className="absolute bottom-1/3 right-1/3 w-14 h-14 text-zinc-700 -rotate-45" />
        </div>
      </div>
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Get In </span>
            <span className="text-zinc-700">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[#F46C38] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-10 md:p-12 backdrop-blur-sm"
        >
          <div className="space-y-8">
            <div>
              <label className="text-white font-semibold mb-3 block text-sm uppercase tracking-wider text-gray-400">
                Full Name
              </label>
              <Input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-zinc-800/50 border-zinc-700/50 focus:border-[#F46C38]/50 focus:ring-[#F46C38]/20 text-white placeholder:text-gray-600 h-14 rounded-xl text-base"
                required
              />
            </div>

            <div>
              <label className="text-white font-semibold mb-3 block text-sm uppercase tracking-wider text-gray-400">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-zinc-800/50 border-zinc-700/50 focus:border-[#F46C38]/50 focus:ring-[#F46C38]/20 text-white placeholder:text-gray-600 h-14 rounded-xl text-base"
                required
              />
            </div>

            <div>
              <label className="text-white font-semibold mb-3 block text-sm uppercase tracking-wider text-gray-400">
                Your Message
              </label>
              <Textarea
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-zinc-800/50 border-zinc-700/50 focus:border-[#F46C38]/50 focus:ring-[#F46C38]/20 text-white placeholder:text-gray-600 min-h-40 rounded-xl text-base resize-none"
                required
              />
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              <Button
                type="submit"
                className="w-full bg-[#F46C38] hover:bg-[#F46C38]/90 text-black font-bold h-14 text-lg rounded-xl shadow-md"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </motion.div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
