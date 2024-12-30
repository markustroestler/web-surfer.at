import { motion } from 'framer-motion';
import { TagIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import type { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative w-[70%] mx-auto aspect-[16/9]"
    >
      {/* Outer glass border - 4px */}
      <div className="absolute -inset-[4px] rounded-xl bg-gradient-to-r from-white/30 via-white/10 to-white/30 group-hover:opacity-70 transition-opacity duration-300" />
      <div className="absolute -inset-[3px] rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 blur-sm" />
      <div className="absolute inset-0 rounded-xl backdrop-blur-[2px] bg-white/5" />
      
      {/* Inner white border that appears on hover - 1px */}
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-white/20 transition-colors duration-300" />
      
      {/* Main content container */}
      <div className="relative h-full w-full rounded-xl bg-deep-900/50 backdrop-blur-sm overflow-hidden">
        {/* Background image and gradient */}
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-90 group-hover:opacity-75 transition-opacity duration-300`} />
        </div>
        
        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="w-1/2 p-12 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-white mb-6">{project.title}</h3>
              <p className="text-lg text-gray-200 mb-8">{project.description}</p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-ocean-300 text-sm border border-white/10"
                  >
                    <TagIcon className="w-4 h-4 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              
              <a
                href="#contact"
                className="inline-flex items-center text-ocean-300 hover:text-ocean-200 transition-colors group/link"
              >
                View Case Study 
                <ArrowRightIcon className="ml-2 h-5 w-5 transform group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}