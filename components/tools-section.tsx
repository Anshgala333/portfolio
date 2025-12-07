"use client";

import { motion } from "framer-motion";
import {
  Code as Code2,
  Database,
  Container,
  GitBranch,
  FileCode,
  Cloud,
  Boxes,
  Binary,
  Network,
  Terminal,
  PackageOpen,
} from "lucide-react";
import BackgroundDecoration from "./background-decoration";
import Image from "next/image";

const tools = [
  {
    name: "Python",
    icon: Code2,
    color: "#F46C38",
    description: "Programming Language",
    image: "images/python.png",
  },
  {
    name: "MongoDB",
    icon: Database,
    color: "#C5FF41",
    description: "NoSQL Database",
    image: "images/mongodb.png",
  },
  {
    name: "React JS",
    icon: Code2,
    color: "#61DAFB",
    description: "Frontend JavaScript Library",
    image: "images/react.png",
  },
  {
    name: "Next JS",
    icon: Code2,
    color: "#000000",
    description: "React Full-Stack Framework",
    image: "images/nextjs.png",
  },
  {
    name: "Docker",
    icon: Container,
    color: "#0db7ed",
    description: "Containerization Platform",
    image: "images/docker.png",
  },
  {
    name: "NodeJS",
    icon: Binary,
    color: "#83CD29",
    description: "Backend JavaScript Runtime",
    image: "images/nodejs1.png",
  },
  {
    name: "AWS",
    icon: Binary,
    color: "#FF9900",
    description: "Cloud Computing Platform",
    image: "images/aws1.png",
  },
  {
    name: "TypeScript",
    icon: FileCode,
    color: "#3178C6",
    description: "Typed JavaScript Language",
    image: "images/ts1.png",
  },
  {
    name: "Git",
    icon: GitBranch,
    color: "#F05033",
    description: "Version Control System",
    image: "images/gtihub1.png",
  },
];

export default function ToolsSection() {
  return (
    <section
      id="tools"
      className="py-32 px-4 relative"
      style={{ backgroundColor: "#0A0908" }}
    >
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
            <span className="text-white">Tools & </span>
            <span className="text-zinc-700">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4">
            Technologies I work with to bring ideas to life
          </p>
          <div className="w-20 h-1 bg-[#F46C38] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
                }}
                className="group relative bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm cursor-default overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/0 via-zinc-800/0 to-zinc-800/10 opacity-0 "></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl  flex items-center justify-center  ">
                      <Image
                        src={tool.image}
                        alt="Icon"
                        width={44}
                        height={44}
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-gray-500 ">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 50%, ${tool.color}05, transparent 60%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
