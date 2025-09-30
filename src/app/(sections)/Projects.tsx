'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';
import { projects } from '@/data/projects';

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(project =>
    filter === 'all' ? true : project.featured
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        ease: [0.6, 0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-green mb-8" />
          <p className="text-slate text-lg max-w-3xl">
            Here are some of my recent projects. Each one represents a unique challenge and learning experience.
            I've worked on everything from full-stack applications to responsive web design.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-4 bg-light-navy p-2 rounded-lg">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-green text-dark-navy'
                  : 'text-slate hover:text-lightest-slate hover:bg-lightest-navy'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                filter === 'featured'
                  ? 'bg-green text-dark-navy'
                  : 'text-slate hover:text-lightest-slate hover:bg-lightest-navy'
              }`}
            >
              Featured
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                whileHover={{ y: -8 }}
                className="group relative bg-light-navy rounded-lg overflow-hidden border border-lightest-navy hover:border-green/50 transition-all duration-300"
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-light-navy to-dark-navy overflow-hidden">
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-green text-4xl font-bold">
                      {project.title.charAt(0)}
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-dark-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-green rounded-full text-dark-navy hover:bg-green-bright transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiGithub className="h-5 w-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-green rounded-full text-dark-navy hover:bg-green-bright transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-green text-dark-navy text-xs font-bold rounded">
                        FEATURED
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-lightest-slate mb-2 group-hover:text-green transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-lightest-navy text-green text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-lightest-navy text-slate text-xs rounded">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate hover:text-green transition-colors text-sm flex items-center space-x-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate hover:text-green transition-colors text-sm flex items-center space-x-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Expanded Details (when clicked) */}
                <AnimatePresence>
                  {selectedProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 border-t border-lightest-navy"
                    >
                      <p className="text-slate text-sm leading-relaxed mt-4">
                        {project.longDescription}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/blakepfaff"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 border border-green text-green hover:bg-green hover:text-dark-navy transition-all duration-300 font-medium"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <FiExternalLink className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
