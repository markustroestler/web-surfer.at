import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { projects } from '../../types/portfolio';
import ProjectCard from '../ui/ProjectCard';

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-deep-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-100 text-center mb-16"
        >
          Featured Projects
        </motion.h2>
        
        <div className="space-y-24">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}