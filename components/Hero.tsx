import { motion } from 'framer-motion';
import VideoBackground from './VideoBackground';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      <VideoBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-surf">
              Reiten Sie die digitale Welle
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 sm:max-w-md lg:max-w-none">
              Join our crew and let us handle your digital presence while you focus on what matters most. 
              We create high-performance, visually stunning websites that make waves in your industry.
            </p>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              <a
                href="#contact"
                className="rounded-full bg-ocean-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-ocean-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-600"
              >
                Start your journey
              </a>
              <a href="#services" className="text-sm font-semibold leading-6 text-white hover:text-ocean-200">
                View services <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}