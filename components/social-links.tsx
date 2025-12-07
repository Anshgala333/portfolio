"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    username: "@anshgala"
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com",
    username: "@anshgala"
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com",
    username: "@anshgala"
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:ansh@example.com",
    username: "ansh@example.com"
  }
];

export default function SocialLinks() {
  return (
    <section className="py-24 px-4 ">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Let's </span>
            <span style={{ color: 'rgba(182, 180, 189, 0.2)' }}>Connect</span>
          </h2>
          <div className="w-20 h-1 bg-[#F46C38] mx-auto mb-6"></div>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Feel free to reach out through any of these platforms
          </p>
        </motion.div>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.1, y: -4, borderColor: "#F46C3866", transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-3 backdrop-blur-sm"
                title={link.name}
              >
                <Icon className="w-5 h-5 text-gray-400 " />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
