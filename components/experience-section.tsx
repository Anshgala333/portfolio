"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import BackgroundDecoration from "./background-decoration";
import Image from "next/image";

const experiences = [
  {
    company: "RSPY Tech Pvt Ltd",
    role: "Full Stack Developer intern",
    period: "July2024 - May 2025",
    location: "Mumbai",
    description:
      "I built the entire React Native frontend for a cross-platform mobile app and delivered real-time chat with <250ms latency for 1,000+ users. I contributed to backend optimization, improving MongoDB queries and REST APIs to cut response time by 35% and payload size by 50%, along with adding rate limiting. I also enhanced state management and performance, achieving a 25% reduction in UI render time for a smoother experience across devices.",
    achievements: [
      "Developed 100% of the frontend for a cross-platform mobile app using React Native. Implemented real-time chat with Socket.IO, maintaining < 250ms message latency and supporting 1,000+ concurrent users.",
      "Contributed to 40% of backend logic by optimizing MongoDB queries and REST APIs, reducing response time by 35% and payload size by 50%. Implemented rate limiting to prevent excessive API calls",
      "Improved overall app performance and state management, achieving a 25% reduction in UI render time and delivering a smoother user experience across devices",
    ],
    color: "orange",
    image: "images/rspytech.jpeg",
  },
  {
    company: "Cloudesign Technology Service",
    role: "SDE Intern",
    period: "June 2025 - December 2025",
    location: "Ghatkoper, Mumbai",
    description:
      "I developed scalable NestJS-based microservices and a full real-time auction system using Redis, RabbitMQ, and WebSockets. I optimized complex logistics with Python and OR-Tools, improving routing efficiency by 18% while reducing compute costs by 30% and latency by 40%. I also integrated AWS S3 and MongoDB to ensure high availability and fast data access across services.",
    achievements: [
      "Developed and maintained NestJS-based microservices, designing REST and event-driven APIs with Redis, RabbitMQ, and WebSockets.",
      "Built a full auction system from scratch, covering architecture, real-time bidding logic, and inter-service communication for concurrent users.",
      "Designed and optimized Python algorithms for NP-hard logistics problems using Google OR-Tools and heuristics,improving route efficiency by 18%.",
    ],
    color: "yellow",
    image: "images/cloudesign.jpg",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-32 px-4 relative"
      style={{ backgroundColor: "#0A0908" }}
    >
      <BackgroundDecoration />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Work </span>
            <span className="text-zinc-700">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4">
            My professional journey and accomplishments
          </p>
          <div className="w-20 h-1 bg-[#F46C38] mx-auto"></div>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                borderColor: "#F46C38",
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-9 backdrop-blur-sm group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#F46C38] rounded-l-2xl"></div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5 gap-4">
                <div className="flex items-start gap-4">
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex-shrink-0">
                    <Image
                      src={exp.image}
                      alt="Icon"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-base md:text-lg font-semibold text-[#F46C38]">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-5 text-sm md:text-base">
                {exp.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-white font-semibold text-base">
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-400"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F46C38] mt-2 flex-shrink-0"></span>
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
