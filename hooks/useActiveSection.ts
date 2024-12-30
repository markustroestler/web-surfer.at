import { useState, useEffect } from 'react';

export function useActiveSection(sections: string[]) {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Filter for visible sections
        const visibleSections = entries.filter(
          entry => entry.isIntersecting && entry.intersectionRatio >= 0.2
        );

        if (visibleSections.length > 0) {
          // Get the section that is most visible
          const mostVisible = visibleSections.reduce((prev, current) => 
            current.intersectionRatio > prev.intersectionRatio ? current : prev
          );
          
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        // Adjust the root margin to better detect sections
        rootMargin: '-20% 0px -20% 0px',
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0]
      }
    );

    // Observe all sections
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  return activeSection;
}