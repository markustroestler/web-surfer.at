import { motion } from 'framer-motion';
import ServiceCard from '../ui/ServiceCard';

const services = [
  {
    title: 'Webdesign',
    description: 'Exzellente Designideen, für digitale Erlebnisse, die Ihre Kunden begeistern.',
    imageUrl: 'https://cdn.prod.website-files.com/6569f1cc8f4e331ed4cb2f2b/65fc6c312e59a88b186a9cd1_figma-dashboard-1.jpg',
    imageAlt: 'Webdesign in Figma'
  },
  {
    title: 'Webentwicklung',
    description: 'Zeitgerichteter Fokus auf die Technik, die Ihre neue Website wirklich benötigt.',
    imageUrl: '/images/web-development.jpg',
    imageAlt: 'Web Development'
  },
  {
    title: 'SEO & SEA',
    description: 'Organische Suchmaschinenoptimierung oder bezahlte Google Ads verhelfen Ihnen zu mehr Sichtbarkeit.',
    imageUrl: '/images/seo-analytics.jpg',
    imageAlt: 'SEO Analytics'
  },
  {
    title: 'Content Creation',
    description: 'Neue Texte, Fotos und Videos garantieren Ihnen sofort mehr Vertrauen und Zuspruch.',
    imageUrl: '/images/content-creation.jpg',
    imageAlt: 'Content Creation'
  }
];

export default function CustomProjects() {
  return (
    <section id="custom-projects" className="min-h-screen bg-deep-900 flex items-center">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-100 mb-6">
            Transformieren Sie Ihre langweilige Webseite zu einer unvergleichbaren Online Präsenz mit Premium Charakter
          </h2>
          <p className="text-lg text-gray-300">
            Eine neue, moderne Webseite bekommen Sie mittlerweile günstig an jeder Ecke. 
            Deshalb liegt unser Fokus zu 100% auf einzigartigem Service und Premiumqualität.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block rounded-full bg-ocean-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-ocean-500 transition-colors"
          >
            Jetzt Angebot einholen →
          </a>
        </motion.div>
      </div>
    </section>
  );
}