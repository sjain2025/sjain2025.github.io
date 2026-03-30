/** Client-side routes (match App.tsx `<Route path="...">`). */
export const paths = {
  home: '/',
  resume: '/resume',
  skills: '/skills',
  experience: '/experience',
  projects: '/projects',
  research: '/research',
  contact: '/contact',
} as const;

export type SitePath = (typeof paths)[keyof typeof paths];

export const NAV_ITEMS: { to: string; label: string }[] = [
  { to: paths.home, label: 'Home' },
  { to: paths.resume, label: 'Resume' },
  { to: paths.skills, label: 'Skills' },
  { to: paths.experience, label: 'Experience' },
  { to: paths.projects, label: 'Projects' },
  { to: paths.research, label: 'Research' },
  { to: paths.contact, label: 'Contact' },
];

/** Terminal / Hero links (order matches former `CLICKABLE_SECTIONS`). */
export const HERO_SECTION_LINKS: { to: string; label: string; description: string }[] = [
  { to: paths.resume, label: 'about', description: 'Resume' },
  { to: paths.skills, label: 'skills', description: 'Skills' },
  { to: paths.experience, label: 'experience', description: 'Experience' },
  { to: paths.projects, label: 'projects', description: 'Projects' },
  { to: paths.research, label: 'research', description: 'Research' },
  { to: paths.contact, label: 'contact', description: 'Contact' },
];
