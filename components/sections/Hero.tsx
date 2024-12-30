import { motion } from 'framer-motion';
import VideoBackground from '../VideoBackground';

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden min-h-screen">
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
              Reiten Sie die digitale Welle – mit modernen und beeindruckenden Websites
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              Wir bieten Ihnen günstige Ein-Seiten-Websites für den perfekten Start und maßgeschneiderte Lösungen für individuelle Ansprüche.
            </p>
            <ul className="mt-6 space-y-2 text-gray-100">
              <li className="flex items-center">
                <span className="mr-2">→</span>
                Perfektes Design – schnell und responsiv
              </li>
              <li className="flex items-center">
                <span className="mr-2">→</span>
                Fixpreis für Landing Pages: keine Überraschungen
              </li>
              <li className="flex items-center">
                <span className="mr-2">→</span>
                Maßgeschneiderte Lösungen für jede Idee
              </li>
            </ul>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              <a
                href="#contact"
                className="rounded-full bg-ocean-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-ocean-500"
              >
                Jetzt starten
              </a>
              <a href="#services" className="text-sm font-semibold leading-6 text-white hover:text-ocean-200">
                Mehr erfahren <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}