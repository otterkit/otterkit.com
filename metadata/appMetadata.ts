import {
  TablerIcon,
  IconRocket,
  IconComet,
  IconLicense,
  IconMathFunction,
  IconCodeCircle,
} from '@tabler/icons';

export interface AppMetadataProps {
  icon: TablerIcon;
  label: string;
  href?: string;
  links?: { label: string; href: string }[];
  closeNav?: any;
}

export const appMetadata = [
  { label: 'Getting Started', icon: IconRocket, href: '/docs' },
  { label: 'Acknowledgement', icon: IconLicense, href: '/docs/acknowledgement' },
  {
    label: 'COBOL Fundamentals',
    icon: IconComet,
    links: [
      { label: 'Metalanguage', href: '/docs/fundamentals/metalanguage' },
      { label: 'Source Format', href: '/docs/fundamentals/source-format' },
      { label: 'Divisions', href: '/docs/fundamentals/divisions' },
      { label: 'Sections', href: '/docs/fundamentals/sections' },
      { label: 'Paragraphs', href: '/docs/fundamentals/paragraphs' },
    ],
  },
  {
    label: 'Statements',
    icon: IconCodeCircle,
    links: [{ label: 'TODO: Statements', href: '/docs/metalanguage' }],
  },
  {
    label: 'Intrinsic Functions',
    icon: IconMathFunction,
    links: [
      { label: 'Table of Contents', href: '/docs/intrinsics/_table-of-contents' },
      { label: 'ABS', href: '/docs/intrinsics/ABS' },
      { label: 'ACOS', href: '/docs/intrinsics/ACOS' },
      { label: 'ANNUITY', href: '/docs/intrinsics/ANNUITY' },
      { label: 'ASIN', href: '/docs/intrinsics/ASIN' },
      { label: 'ATAN', href: '/docs/intrinsics/ATAN' },
      { label: 'BASECONVERT', href: '/docs/intrinsics/BASECONVERT' },
      { label: 'BOOLEAN-OF-INTEGER', href: '/docs/intrinsics/BOOLEAN-OF-INTEGER' },
      { label: 'BYTE-LENGTH', href: '/docs/intrinsics/BYTE-LENGTH' },
      { label: 'CHAR', href: '/docs/intrinsics/CHAR' },
      { label: 'CHAR-NATIONAL', href: '/docs/intrinsics/CHAR-NATIONAL' },
      { label: 'COMBINED-DATETIME', href: '/docs/intrinsics/COMBINED-DATETIME' },
      { label: 'CONCAT', href: '/docs/intrinsics/CONCAT' },
      { label: 'CONVERT', href: '/docs/intrinsics/CONVERT' },
      { label: 'COS', href: '/docs/intrinsics/COS' },
      { label: 'CURRENT-DATE', href: '/docs/intrinsics/CURRENT-DATE' },
      { label: 'DATE-OF-INTEGER', href: '/docs/intrinsics/DATE-OF-INTEGER' },
      { label: 'DATE-TO-YYYYMMDD', href: '/docs/intrinsics/DATE-TO-YYYYMMDD' },
      { label: 'DAY-OF-INTEGER', href: '/docs/intrinsics/DAY-OF-INTEGER' },
      { label: 'DAY-TO-YYYYDDD', href: '/docs/intrinsics/DAY-TO-YYYYDDD' },
      { label: 'DISPLAY-OF', href: '/docs/intrinsics/DISPLAY-OF' },
      { label: 'E', href: '/docs/intrinsics/E' },
      { label: 'EXCEPTION-FILE', href: '/docs/intrinsics/EXCEPTION-FILE' },
      { label: 'EXCEPTION-FILE-N', href: '/docs/intrinsics/EXCEPTION-FILE-N' },
      { label: 'EXCEPTION-LOCATION', href: '/docs/intrinsics/EXCEPTION-LOCATION' },
      { label: 'EXCEPTION-LOCATION-N', href: '/docs/intrinsics/EXCEPTION-LOCATION-N' },
      { label: 'EXCEPTION-STATEMENT', href: '/docs/intrinsics/EXCEPTION-STATEMENT' },
      { label: 'EXCEPTION-STATUS', href: '/docs/intrinsics/EXCEPTION-STATUS' },
      { label: 'EXP', href: '/docs/intrinsics/EXP' },
      { label: 'EXP10', href: '/docs/intrinsics/EXP10' },
      { label: 'FACTORIAL', href: '/docs/intrinsics/FACTORIAL' },
      { label: 'FIND-STRING', href: '/docs/intrinsics/FIND-STRING' },
      { label: 'FORMATTED-CURRENT-DATE', href: '/docs/intrinsics/FORMATTED-CURRENT-DATE' },
      { label: 'FORMATTED-DATE', href: '/docs/intrinsics/FORMATTED-DATE' },
      { label: 'FORMATED-DATETIME', href: '/docs/intrinsics/FORMATED-DATETIME' },
      { label: 'FRACTION-PART', href: '/docs/intrinsics/FRACTION-PART' },
      { label: 'HIGHEST-ALGEBRAIC', href: '/docs/intrinsics/HIGHEST-ALGEBRAIC' },
      { label: 'INTEGER', href: '/docs/intrinsics/INTEGER' },
      { label: 'INTEGER-OF-BOOLEAN', href: '/docs/intrinsics/INTEGER-OF-BOOLEAN' },
      { label: 'INTEGER-OF-DATE', href: '/docs/intrinsics/INTEGER-OF-DATE' },
      { label: 'INTEGER-OF-DAY', href: '/docs/intrinsics/INTEGER-OF-DAY' },
      { label: 'INTEGER-OF-FORMATTED-DATE', href: '/docs/intrinsics/INTEGER-OF-FORMATTED-DATE' },
      { label: 'INTEGER-PART', href: '/docs/intrinsics/INTEGER-PART' },
      { label: 'LENGTH', href: '/docs/intrinsics/LENGTH' },
      { label: 'LOCALE-COMPARE', href: '/docs/intrinsics/LOCALE-COMPARE' },
      { label: 'LOCALE-DATE', href: '/docs/intrinsics/LOCALE-DATE' },
      { label: 'LOCALE-TIME-FROM-SECONDS', href: '/docs/intrinsics/LOCALE-TIME-FROM-SECONDS' },
      { label: 'LOG', href: '/docs/intrinsics/LOG' },
      { label: 'LOG10', href: '/docs/intrinsics/LOG10' },
      { label: 'LOWER-CASE', href: '/docs/intrinsics/LOWER-CASE' },
      { label: 'LOWEST-ALGEBRAIC', href: '/docs/intrinsics/LOWEST-ALGEBRAIC' },
      { label: 'MAX', href: '/docs/intrinsics/MAX' },
      { label: 'MEAN', href: '/docs/intrinsics/MEAN' },
      { label: 'MEDIAN', href: '/docs/intrinsics/MEDIAN' },
      { label: 'MIDRANGE', href: '/docs/intrinsics/MIDRANGE' },
      { label: 'MIN', href: '/docs/intrinsics/MIN' },
      { label: 'MOD', href: '/docs/intrinsics/MOD' },
      { label: 'MODULE-NAME', href: '/docs/intrinsics/MODULE-NAME' },
      { label: 'NATIONAL-OF', href: '/docs/intrinsics/NATIONAL-OF' },
      { label: 'NUMVAL', href: '/docs/intrinsics/NUMVAL' },
      { label: 'NUMVAL-C', href: '/docs/intrinsics/NUMVAL-C' },
      { label: 'NUMVAL-F', href: '/docs/intrinsics/NUMVAL-F' },
      { label: 'ORD', href: '/docs/intrinsics/ORD' },
      { label: 'ORD-MAX', href: '/docs/intrinsics/ORD-MAX' },
      { label: 'ORD-MIN', href: '/docs/intrinsics/ORD-MIN' },
      { label: 'PI', href: '/docs/intrinsics/PI' },
      { label: 'PRESENT-VALUE', href: '/docs/intrinsics/PRESENT-VALUE' },
      { label: 'RANDOM', href: '/docs/intrinsics/RANDOM' },
      { label: 'RANGE', href: '/docs/intrinsics/RANGE' },
      { label: 'REM', href: '/docs/intrinsics/REM' },
      { label: 'REVERSE', href: '/docs/intrinsics/REVERSE' },
      {
        label: 'SECONDS-FROM-FORMATTED-TIME',
        href: '/docs/intrinsics/SECONDS-FROM-FORMATTED-TIME',
      },
      { label: 'SECONDS-PAST-MIDNIGHT', href: '/docs/intrinsics/SECONDS-PAST-MIDNIGHT' },
      { label: 'SIGN', href: '/docs/intrinsics/SIGN' },
      { label: 'SIN', href: '/docs/intrinsics/SIN' },
      { label: 'SMALLEST-ALGEBRAIC', href: '/docs/intrinsics/SMALLEST-ALGEBRAIC' },
      { label: 'SQRT', href: '/docs/intrinsics/SQRT' },
      { label: 'STANDARD-COMPARE', href: '/docs/intrinsics/STANDARD-COMPARE' },
      { label: 'STANDARD-DEVIATION', href: '/docs/intrinsics/STANDARD-DEVIATION' },
      { label: 'SUM', href: '/docs/intrinsics/SUM' },
      { label: 'TAN', href: '/docs/intrinsics/TAN' },
      { label: 'TEST-DATE-YYYYMMDD', href: '/docs/intrinsics/TEST-DATE-YYYYMMDD' },
      { label: 'TEST-DAY-YYYYDDD', href: '/docs/intrinsics/TEST-DAY-YYYYDDD' },
      { label: 'TEST-FORMATTED-DATETIME', href: '/docs/intrinsics/TEST-FORMATTED-DATETIME' },
      { label: 'TEST-NUMVAL', href: '/docs/intrinsics/TEST-NUMVAL' },
      { label: 'TEST-NUMVAL-C', href: '/docs/intrinsics/TEST-NUMVAL-C' },
      { label: 'TEST-NUMBAL-F', href: '/docs/intrinsics/TEST-NUMBAL-F' },
      { label: 'TRIM', href: '/docs/intrinsics/TRIM' },
      { label: 'UPPERCASE', href: '/docs/intrinsics/UPPERCASE' },
      { label: 'VARIANCE', href: '/docs/intrinsics/VARIANCE' },
      { label: 'WHEN-COMPILED', href: '/docs/intrinsics/WHEN-COMPILED' },
      { label: 'YEAR-TO-YYYY', href: '/docs/intrinsics/YEAR-TO-YYYY' },
    ],
  },
];
