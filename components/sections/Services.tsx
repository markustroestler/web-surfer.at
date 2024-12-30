import { motion } from 'framer-motion';
import { CodeBracketIcon, PaintBrushIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Custom Development',
    description: 'Tailored websites built with the latest technologies for optimal performance.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Modern Design',
    description: 'Clean, responsive designs that look great on all devices.',
    icon: PaintBrushIcon,
  },
  {
    title: 'Performance Focus',
    description: 'Lightning-fast loading times and smooth user experiences.',
    icon: RocketLaunchIcon,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
};

export default function Services() {
  return (
    <section id="services" className="snap-section min-h-screen bg-ocean-50 flex items-center">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Services</h2>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={item}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <service.icon className="h-12 w-12 text-ocean-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}