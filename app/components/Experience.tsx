"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

export default function Experience() {
  const experiences = [
    {
      company: "Khaled SK Production",
      location: "Kabul, Afghanistan",
      period: "Feb 2020 – Jun 2021",
      role: "Communication Officer & Video Editor",
      responsibilities: [
        "Produced and edited professional video content for campaigns and productions.",
        "Coordinated communication strategies and supported creative direction.",
        "Collaborated with teams to deliver projects on time and to client requirements.",
      ],
    },
    {
      company: "Awaz Productions",
      location: "Kabul, Afghanistan",
      period: "Mar 2023 – Aug 2024",
      role: "Video Editor / Video Director",
      responsibilities: [
        "Directed and edited high-quality video content for media and entertainment.",
        "Managed the full video production workflow from concept to delivery.",
        "Worked closely with creative teams to develop compelling visual storytelling.",
      ],
    },
    {
      company: "Book Café 451",
      location: "Kabul, Afghanistan",
      period: "Jun 2018 – Jan 2020",
      role: "Manager",
      responsibilities: [
        "Oversaw daily operations and staff at a busy cultural café.",
        "Planned and organized events to increase community engagement.",
        "Handled administration, customer service, and resource management.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 transition-transform duration-300 group-hover:scale-110"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white">
                  {exp.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 dark:text-gray-300 flex items-start"
                    >
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
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
