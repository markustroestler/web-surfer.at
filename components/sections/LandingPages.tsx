import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const features = [
  'Fixpreis ab 199 € – keine versteckten Kosten',
  'Inklusive 5 Abschnitte (Start, Über uns, Leistungen, Referenzen, Kontakt)',
  'SEO-freundlich und blitzschnell geladen',
  'Individuell angepasst an Ihre Marke (Logo, Farben, Texte)',
];

export default function LandingPages() {
  return (
    <section id="landing-pages" className="min-h-screen bg-deep-800 flex items-center">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto lg:text-center"
        >
          <h2 className="text-4xl font-bold text-gray-100 mb-6">
            Günstige Landing Pages – die perfekte Welle für Ihren Online-Erfolg
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Unsere Ein-Seiten-Websites sind ideal für kleine Unternehmen, Startups oder Freelancer. 
            Modern, responsiv und schnell – alles, was Sie für den Einstieg brauchen.
          </p>
          <ul className="space-y-4 text-left">
            {features.map((feature) => (
              <motion.li
                key={feature}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <CheckIcon className="h-6 w-6 text-ocean-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </motion.li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-gray-400">
            Mehr als 5 Abschnitte? Kein Problem! Zusätzliche Abschnitte ab 50 €.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="rounded-full bg-ocean-500 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-ocean-400 transition-colors"
            >
              Landing Page anfragen
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}