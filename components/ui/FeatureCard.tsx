import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/outline';

interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative"
    >
       {/* Outer glass border - 4px */}
      <div className="absolute -inset-[4px] rounded-xl bg-gradient-to-r from-white/30 via-white/10 to-white/30 group-hover:opacity-70 transition-opacity duration-300" />
      <div className="absolute -inset-[3px] rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 blur-sm" />
      <div className="absolute inset-0 rounded-xl backdrop-blur-[2px] bg-white/5" />
      
      {/* Inner white border that appears on hover - 1px */}
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-white/20 transition-colors duration-300" />
      
      {/* Main content container */}
      <div className="relative bg-deep-800/50 backdrop-blur-sm p-8 rounded-xl">
        <SparklesIcon className="h-8 w-8 text-ocean-400 mb-4 group-hover:text-ocean-300 transition-colors" />
        <h3 className="text-xl font-semibold text-gray-100 mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}