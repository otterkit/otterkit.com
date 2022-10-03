import { IconRocket, IconStars, IconCertificate, IconLicense } from '@tabler/icons';

export const appMetadata = [
  { label: 'Getting Started', icon: IconRocket, href: '/docs' },
  { label: 'Acknowledgement', icon: IconLicense, href: '/docs/acknowledgement' },
  { label: 'ANSI Agreement', icon: IconCertificate, href: '/docs/ANSI' },
  {
    label: 'COBOL Basics',
    icon: IconStars,
    href: '',
    links: [
      { label: 'Overview', href: '/docs/basics' },
      { label: 'Divisions', href: '/' },
      { label: 'Sections', href: '/' },
      { label: 'Statements', href: '/' },
    ],
  },
];
