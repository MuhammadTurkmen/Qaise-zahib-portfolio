"use client";

import { motion } from "framer-motion";
import {
  Clapperboard,
  FileText,
  Layout,
  Briefcase,
  PenTool,
  Monitor,
} from "lucide-react";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

const SkillIcon = ({ icon: Icon, color }: { icon: any; color: string }) => (
  <div className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg`}>
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
);

const skills = [
  {
    icon: Clapperboard,
    name: "Adobe Premiere",
    tech: "Video Editing",
    description:
      "Skilled in professional editing workflows, color correction, and post-production using Adobe Premiere.",
    color: "text-blue-500",
  },
  {
    icon: PenTool,
    name: "Photoshop",
    tech: "Graphic Design & Visuals",
    description:
      "Experienced in creating and editing graphics, thumbnails, and visuals to enhance video content.",
    color: "text-pink-500",
  },
  {
    icon: Monitor,
    name: "VMix / Video Mixer",
    tech: "Live Production",
    description:
      "Proficient in using VMix for live streaming, mixing multiple sources, and managing real-time video production.",
    color: "text-green-500",
  },
  {
    icon: FileText,
    name: "Content Writing",
    tech: "Articles, Scripts, Reports",
    description:
      "Creates engaging, structured content tailored for media, business, and creative projects.",
    color: "text-purple-500",
  },
  {
    icon: Layout,
    name: "HTML & CSS",
    tech: "Web Basics",
    description:
      "Familiar with HTML and CSS for structuring and styling simple web pages or portfolio content.",
    color: "text-yellow-500",
  },
  {
    icon: Briefcase,
    name: "Microsoft Office",
    tech: "Docs, Presentations, Analysis",
    description:
      "Proficient in Word, Excel, and PowerPoint for business, academic, and professional use.",
    color: "text-orange-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"></div>

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="skill-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M50 30 L50 70 M30 50 L70 50"
                stroke="currentColor"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#skill-pattern)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Skills & Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.tech}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
