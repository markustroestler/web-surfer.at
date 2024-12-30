export interface Project {
  title: string;
  description: string;
  image: string;
  color: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: 'Surf School Website',
    description: 'Modern landing page for a local surf school featuring course bookings and dynamic content management.',
    image: '/images/portfolio/surf-school.jpg',
    color: 'from-ocean-600/90 to-ocean-900/90',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Booking System']
  },
  {
    title: 'Beach Resort Platform',
    description: 'Full-featured resort website with room booking, virtual tours, and customer reviews.',
    image: '/images/portfolio/resort.jpg',
    color: 'from-sand-600/90 to-sand-900/90',
    tags: ['React', 'Supabase', 'Payment Integration', 'Virtual Tours']
  },
  {
    title: 'Beachside Café',
    description: 'Elegant website for a beachfront café featuring online ordering and event bookings.',
    image: '/images/portfolio/cafe.jpg',
    color: 'from-ocean-500/90 to-deep-900/90',
    tags: ['Next.js', 'Stripe', 'Online Ordering', 'Event Management']
  }
];