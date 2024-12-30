import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function JoinCrew() {
  return (
    <section id="contact" className="min-h-screen bg-deep-900 flex items-center">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-100 text-center mb-6">
            Join Our Crew – Let's Make Waves Together
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12">
            Ready to elevate your online presence? Join our crew and let us create a website 
            that makes a lasting impression.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:contact@web-surfer.at"
              className="flex items-center justify-center gap-x-3 rounded-xl border border-gray-700 bg-deep-800 p-4 hover:bg-deep-800/70 transition-colors group"
            >
              <EnvelopeIcon className="h-6 w-6 text-ocean-400 group-hover:text-ocean-300" />
              <span className="text-gray-300 group-hover:text-gray-100">contact@web-surfer.at</span>
            </a>
            <a
              href="tel:+43123456789"
              className="flex items-center justify-center gap-x-3 rounded-xl border border-gray-700 bg-deep-800 p-4 hover:bg-deep-800/70 transition-colors group"
            >
              <PhoneIcon className="h-6 w-6 text-ocean-400 group-hover:text-ocean-300" />
              <span className="text-gray-300 group-hover:text-gray-100">+43 123 456 789</span>
            </a>
          </div>

          <form className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="block w-full rounded-xl border-gray-700 bg-deep-800 text-gray-100 shadow-sm focus:border-ocean-400 focus:ring-ocean-400 px-4 py-3 text-lg"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                className="block w-full rounded-xl border-gray-700 bg-deep-800 text-gray-100 shadow-sm focus:border-ocean-400 focus:ring-ocean-400 px-4 py-3 text-lg"
              />
            </div>
            <div>
              <label htmlFor="project-type" className="block text-sm font-medium text-gray-300 mb-3">
                Project Type
              </label>
              <select
                id="project-type"
                className="block w-full rounded-xl border-gray-700 bg-deep-800 text-gray-100 shadow-sm focus:border-ocean-400 focus:ring-ocean-400 px-4 py-3 text-lg"
              >
                <option>Landing Page</option>
                <option>Custom Project</option>
                <option>Not Sure Yet</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block w-full rounded-xl border-gray-700 bg-deep-800 text-gray-100 shadow-sm focus:border-ocean-400 focus:ring-ocean-400 px-4 py-3 text-lg"
                placeholder="Tell us about your project..."
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-full bg-ocean-500 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-ocean-400 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}