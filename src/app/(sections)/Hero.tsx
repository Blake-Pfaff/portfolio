"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowDown } from "react-icons/fi";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.99] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.p
              variants={itemVariants}
              className="text-green font-mono text-sm md:text-base mb-4"
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lightest-slate mb-6"
            >
              Blake Pfaff.
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate mb-8"
            >
              I build exceptional digital experiences.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-slate max-w-lg mx-auto lg:mx-0 text-lg md:text-xl leading-relaxed mb-12"
            >
              I&apos;m a passionate frontend engineer specializing in React,
              Next.js, and modern web technologies. I love creating beautiful,
              functional, and accessible web applications that deliver
              exceptional user experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-8 py-4 bg-transparent border-2 border-green text-green hover:bg-green hover:text-dark-navy transition-all duration-300 font-medium text-sm cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download="Blake_Pfaff_Resume.pdf"
                className="px-8 py-4 bg-green text-dark-navy hover:bg-green-bright transition-all duration-300 font-medium text-sm cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image/Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background circle */}
              <motion.div
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-green/20 to-green/5 absolute -top-4 -left-4"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Profile Image */}
              <motion.div
                className="w-72 h-72 lg:w-88 lg:h-88 rounded-full border-2 border-green relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/hero-porfile.png"
                  alt="Blake Pfaff"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            className="text-slate hover:text-green transition-colors duration-300 flex flex-col items-center space-y-2 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-mono">Scroll Down</span>
            <FiArrowDown className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
