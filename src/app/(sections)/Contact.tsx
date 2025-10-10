"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Blake-Pfaff",
      icon: FiGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/blake-a-pfaff/",
      icon: FiLinkedin,
    },
    {
      name: "Email",
      href: "mailto:blake.a.pfaff2@gmail.com",
      icon: FiMail,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-lightest-slate mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-green mb-8 mx-auto" />
          <p className="text-slate text-lg max-w-3xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat about technology. Feel free to reach
            out if you&apos;d like to work together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-bold text-lightest-slate mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-slate text-lg leading-relaxed mb-8">
                I&apos;m currently available for freelance work and full-time
                opportunities. Whether you have a project in mind or just want
                to say hello, I&apos;d love to hear from you.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green/20 rounded-lg flex items-center justify-center">
                  <FiMail className="h-6 w-6 text-green" />
                </div>
                <div>
                  <p className="text-lightest-slate font-medium">Email</p>
                  <a
                    href="mailto:blake.a.pfaff2@gmail.com"
                    className="text-green hover:text-green-bright transition-colors"
                  >
                    blake.a.pfaff2@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green/20 rounded-lg flex items-center justify-center">
                  <FiMapPin className="h-6 w-6 text-green" />
                </div>
                <div>
                  <p className="text-lightest-slate font-medium">Location</p>
                  <p className="text-slate">Available for remote work</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="mt-12">
              <p className="text-lightest-slate font-medium mb-6">
                Find me online
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-light-navy rounded-lg flex items-center justify-center text-slate hover:text-green hover:bg-lightest-navy transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className="block text-lightest-slate font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-light-navy border border-lightest-navy rounded-lg text-lightest-slate placeholder-slate focus:border-green focus:outline-none focus:ring-1 focus:ring-green transition-colors"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-lightest-slate font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-light-navy border border-lightest-navy rounded-lg text-lightest-slate placeholder-slate focus:border-green focus:outline-none focus:ring-1 focus:ring-green transition-colors"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-lightest-slate font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-light-navy border border-lightest-navy rounded-lg text-lightest-slate placeholder-slate focus:border-green focus:outline-none focus:ring-1 focus:ring-green transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </motion.div>

              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-green text-dark-navy font-medium rounded-lg hover:bg-green-bright focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 focus:ring-offset-dark-navy transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-dark-navy border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green text-sm text-center"
                >
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.p>
              )}

              {submitStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm text-center"
                >
                  Something went wrong. Please try again or contact me directly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
