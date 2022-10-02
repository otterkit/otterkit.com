import {
    IconRocket,
    IconComet,
  } from '@tabler/icons';

export const appMetadata = [
    { label: 'Getting Started', icon: IconRocket, href: '/docs' },
    {
      label: 'COBOL Basics',
      icon: IconComet,
      links: [
        { label: 'Overview', href: '/docs/basics' },
        { label: 'Divisions', href: '/' },
        { label: 'Sections', href: '/' },
        { label: 'Statements', href: '/' },
      ],
    },
  ];