"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.id);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-navy/80 backdrop-blur-md border-b border-lightest-navy"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Social Links */}
          <motion.div className="flex-shrink-0 flex items-center space-x-6">
            {/* Social Links - Desktop Only */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.a
                href="https://github.com/Blake-Pfaff"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-green transition-colors cursor-pointer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub"
              >
                <FiGithub className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/blake-a-pfaff/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-green transition-colors cursor-pointer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="mailto:blake.a.pfaff2@gmail.com"
                className="cursor-pointer relative"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Email"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-green hover:border-green-bright transition-colors">
                  <Image
                    src="/images/profile.png"
                    alt="Blake Pfaff"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative cursor-pointer ${
                    activeSection === item.id
                      ? "text-green"
                      : "text-slate hover:text-lightest-slate"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green"
                      layoutId="navbar-indicator"
                    />
                  )}
                </motion.button>
              ))}

              {/* Resume Download Button */}
              <motion.a
                href="/resume.pdf"
                download="Blake_Pfaff_Resume.pdf"
                className="px-4 py-2 text-sm font-medium border border-green text-green hover:bg-green hover:text-dark-navy transition-all duration-300 rounded cursor-pointer"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate hover:text-green transition-colors cursor-pointer"
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-light-navy"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors cursor-pointer ${
                activeSection === item.id
                  ? "text-green bg-lightest-navy"
                  : "text-slate hover:text-lightest-slate hover:bg-lightest-navy"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}

          {/* Social Links - Mobile */}
          <div className="flex justify-center space-x-6 py-4 border-t border-lightest-navy/30">
            <motion.a
              href="https://github.com/Blake-Pfaff"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-green transition-colors cursor-pointer"
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <FiGithub className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/blake-a-pfaff/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-green transition-colors cursor-pointer"
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="mailto:blake.a.pfaff2@gmail.com"
              className="cursor-pointer"
              whileTap={{ scale: 0.9 }}
              aria-label="Email"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-green">
                <Image
                  src="/images/profile.png"
                  alt="Blake Pfaff"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
            </motion.a>
          </div>

          {/* Resume Download Button */}
          <motion.a
            href="/resume.pdf"
            download="Blake_Pfaff_Resume.pdf"
            className="block px-3 py-2 text-base font-medium w-full text-center border border-green text-green hover:bg-green hover:text-dark-navy transition-all duration-300 rounded cursor-pointer"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(false)}
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
