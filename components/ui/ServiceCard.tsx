import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export default function ServiceCard({ title, description, imageUrl, imageAlt }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Outer glass border - 4px */}
      <div className="absolute -inset-[4px] rounded-xl bg-gradient-to-r from-ocean-600/30 via-ocean-700/10 to-ocean-600/30 group-hover:opacity-70 transition-opacity duration-300" />
      <div className="absolute -inset-[3px] rounded-xl bg-gradient-to-r from-ocean-700/10 via-ocean-800/5 to-ocean-700/10 blur-sm" />
      <div className="absolute inset-0 rounded-xl backdrop-blur-[2px] bg-ocean-900/5" />
      
      {/* Inner white border that appears on hover - 1px */}
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-ocean-600/20 transition-colors duration-300" />
      
      {/* Content container */}
      <div className="relative bg-deep-800/50 backdrop-blur-sm rounded-xl overflow-hidden">
        <div className="p-8">
          <h3 className="text-2xl font-semibold text-gray-100 mb-3">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
        
        {/* Image wrapper */}
        <div className="relative h-[200px] overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </motion.div>
  );
}