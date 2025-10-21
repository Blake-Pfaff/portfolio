"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiCalendar } from "react-icons/fi";
import { experiences } from "@/data/experience";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(experiences[0]?.id || "");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.99] as const,
      },
    },
  };

  const activeExperience =
    experiences.find((exp) => exp.id === activeTab) || experiences[0];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-light-navy"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-lightest-slate mb-4">
            Where I&apos;ve Worked
          </h2>
          <div className="w-20 h-1 bg-green mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Company Tabs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="space-y-2">
              {experiences.map((experience) => (
                <motion.button
                  key={experience.id}
                  onClick={() => setActiveTab(experience.id)}
                  className={`w-full text-left p-4 rounded-lg border-l-2 transition-all duration-300 cursor-pointer ${
                    activeTab === experience.id
                      ? "border-green bg-green/10 text-green"
                      : "border-lightest-navy text-slate hover:text-lightest-slate hover:bg-lightest-navy/50"
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="font-medium">{experience.company}</div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Job Details */}
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2"
          >
            {activeExperience && (
              <>
                {/* Job Title and Company */}
                <motion.div variants={itemVariants} className="mb-6">
                  <h3 className="text-2xl font-bold text-lightest-slate mb-1">
                    {activeExperience.position}
                  </h3>
                  <motion.a
                    href="#"
                    className="text-xl text-green hover:text-green-bright transition-colors inline-flex items-center space-x-2"
                    whileHover={{ x: 4 }}
                  >
                    <span>@{activeExperience.company}</span>
                    <FiExternalLink className="h-4 w-4" />
                  </motion.a>
                </motion.div>

                {/* Job Duration */}
                <motion.div
                  variants={itemVariants}
                  className="mb-6 flex items-center space-x-4 text-slate"
                >
                  <div className="flex items-center space-x-2">
                    <FiCalendar className="h-4 w-4" />
                    <span className="text-sm font-mono">
                      {activeExperience.startDate} -{" "}
                      {activeExperience.endDate || "Present"}
                    </span>
                  </div>
                  {activeExperience.current && (
                    <span className="px-2 py-1 bg-green/20 text-green text-xs rounded-full">
                      Current
                    </span>
                  )}
                </motion.div>

                {/* Job Description */}
                <motion.div variants={itemVariants} className="mb-8">
                  <p className="text-slate text-lg leading-relaxed mb-6">
                    {activeExperience.description}
                  </p>
                </motion.div>

                {/* Achievements */}
                <motion.div variants={itemVariants} className="mb-8">
                  <h4 className="text-lightest-slate font-semibold mb-4">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {activeExperience.achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3 text-slate"
                      >
                        <div className="w-1.5 h-1.5 bg-green rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Technologies */}
                <motion.div variants={itemVariants}>
                  <h4 className="text-lightest-slate font-semibold mb-4">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeExperience.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-lightest-navy text-green text-sm rounded-md border border-green/30 hover:bg-green/10 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
