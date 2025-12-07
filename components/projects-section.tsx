"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import BackgroundDecoration from "./background-decoration";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart, payments, and admin dashboard",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma"]
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"]
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content generation tool using GPT-4 API with custom prompts",
    tech: ["Next.js", "OpenAI", "Tailwind", "Vercel"]
  },
  {
    title: "Portfolio Builder",
    description: "Drag-and-drop portfolio builder with customizable templates and themes",
    tech: ["React", "Framer Motion", "Firebase", "DND Kit"]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-4 relative" style={{ backgroundColor: '#0A0908' }}>
      <BackgroundDecoration />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="text-zinc-700">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4">Selected work showcasing my expertise</p>
          <div className="w-20 h-1 bg-[#F46C38] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } }}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm hover:border-[#F46C38]/40 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#F46C38]" />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="hover:bg-[#F46C38]/20 transition-colors"
                    >
                      <Github className="w-5 h-5 text-gray-400 hover:text-[#F46C38]" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="hover:bg-[#F46C38]/20 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-400 hover:text-[#F46C38]" />
                    </Button>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium bg-zinc-800/50 text-gray-300 border border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
