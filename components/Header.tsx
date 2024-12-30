import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useActiveSection } from '../hooks/useActiveSection';

const navigation = [
  { name: 'Home', href: '#', sectionId: 'hero' },
  { name: 'Landing Pages', href: '#landing-pages', sectionId: 'landing-pages' },
  { name: 'Custom Projects', href: '#custom-projects', sectionId: 'custom-projects' },
  { name: 'Portfolio', href: '#portfolio', sectionId: 'portfolio' },
  { name: 'Contact', href: '#contact', sectionId: 'contact' }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(navigation.map(nav => nav.sectionId));

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed w-full bg-deep-900/90 backdrop-blur-sm z-40">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold text-ocean-600">web-surfer.at</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 hover:text-ocean-400 transition-colors ${
                  activeSection === item.sectionId
                    ? 'text-ocean-400 border-b-2 border-ocean-400'
                    : 'text-gray-300'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#contact"
              className="rounded-full bg-ocean-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-ocean-400 transition-colors"
            >
              Join the crew
            </a>
          </div>
        </nav>
      </header>
      
      {/* Mobile menu */}
      <div className={`lg:hidden fixed inset-0 z-50 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div 
          className="fixed inset-0 bg-black/50" 
          aria-hidden="true" 
          onClick={() => setMobileMenuOpen(false)}
        />
        
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-deep-900 px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="text-2xl font-bold text-ocean-400">web-surfer.at</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-700">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-deep-800 transition-colors ${
                      activeSection === item.sectionId
                        ? 'text-ocean-400 bg-deep-800'
                        : 'text-gray-300'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-full bg-ocean-500 px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-ocean-400 transition-colors"
                >
                  Join the crew
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}