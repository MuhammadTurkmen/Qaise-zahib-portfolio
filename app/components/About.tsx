"use client";

import { motion } from "framer-motion";
import { Clapperboard, FileText, Users, LineChart } from "lucide-react";
import Image from "next/image";

export default function About() {
  const skills = [
    {
      icon: <Clapperboard className="w-8 h-8 text-blue-500" />,
      title: "Video Editing & Production",
      description:
        "Experienced video editor and director using Adobe Premiere, VMix, and Photoshop to craft compelling media content for brands and productions.",
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-500" />,
      title: "Content Writing",
      description:
        "Creates clear, engaging written content—scripts, articles, and reports—aligned with business goals and audience needs.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Management & Leadership",
      description:
        "Proven ability to organize teams, manage timelines, and deliver projects efficiently with strong communication and coordination.",
    },
    {
      icon: <LineChart className="w-8 h-8 text-yellow-500" />,
      title: "Economics & Market Analysis",
      description:
        "Background in economics and business administration; skilled at analyzing markets and supporting strategy with data-driven insights.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 md:gap-6">
          {/* SUMMARY COPY */}
          <motion.div
            className="lg:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I’m <span className="font-semibold">Qais Zaheb</span> — an
              Economist, Video Editor, and Content Writer with a strong
              background in management and business administration. I combine
              creative production with analytical thinking to deliver media that
              informs, engages, and supports business growth.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Experienced in market analysis, content creation, and video
              production, I excel at developing strategic solutions and
              high-quality visuals. I’m detail-oriented, collaborative, and
              passionate about innovation and problem-solving—comfortable
              leading projects from concept to delivery.
            </p>
          </motion.div>

          {/* SKILL CARDS */}
          <motion.div
            className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {skill.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image
          src="/placeholder.svg?height=256&width=256"
          alt="Decorative background"
          width={256}
          height={256}
        />
      </div>
    </section>
  );
}
