import {
    IconRocket,
    IconServer,
  } from '@tabler/icons';

export const sidebarMetadata = [
    { label: 'Getting Started', icon: IconRocket },
    {
      label: 'COBOL Basics',
      icon: IconServer,
      links: [
        { label: 'Overview', link: '/' },
        { label: 'Divisions', link: '/' },
        { label: 'Sections', link: '/' },
        { label: 'Statements', link: '/' },
      ],
    },
  ];