"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "HTML & CSS",
    "Tailwind CSS",
    "Framer Motion",
    "Git & GitHub",
    "REST APIs",
    "WordPress",
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.99] as const,
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-navy">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-lightest-slate mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-green mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Bio */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-slate text-lg leading-relaxed"
            >
              Hello! I&apos;m Blake, a passionate frontend engineer who loves
              creating exceptional digital experiences. My journey in web
              development began during college when I discovered the power of
              turning ideas into interactive realities.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-slate text-lg leading-relaxed"
            >
              Over the years, I&apos;ve had the privilege of working with
              startups and established companies, building everything from
              simple landing pages to complex web applications. I specialize in
              React and Next.js, but I&apos;m always excited to learn new
              technologies and tackle challenging problems.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-slate text-lg leading-relaxed"
            >
              When I’m not building or debugging something, I’m usually
              exploring new ideas, learning how things work, or finding
              inspiration in music, design, or psychology. I like diving deep
              into how people think and what makes great digital experiences
              feel effortless it’s what keeps me growing as a developer.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-slate text-lg leading-relaxed"
            >
              I&apos;m currently looking for new opportunities where I can
              contribute my skills while continuing to grow as a developer.
              I&apos;m particularly interested in companies that value clean
              code, user experience, and continuous learning.
            </motion.p>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative background */}
              <motion.div
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-lg bg-gradient-to-br from-green/10 to-transparent absolute -top-2 -left-2 border border-green/20"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Profile image */}
              <motion.div
                className="w-60 h-60 lg:w-72 lg:h-72 rounded-lg border border-green relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/profile.png"
                  alt="Blake Pfaff"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-lightest-slate mb-8 text-center">
            Technologies I Work With
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-lightest-navy text-green border border-green/30 rounded-md text-sm font-mono hover:bg-green/10 hover:border-green transition-colors duration-300 cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
