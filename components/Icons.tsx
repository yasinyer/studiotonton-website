type P = { className?: string };
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'aria-hidden': true,
} as const;

export const Arrow = ({ className = 'arr' }: P) => (
  <svg {...base} strokeWidth={2} strokeLinecap="square" className={className}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const ArrowDiag = ({ className = 'arr' }: P) => (
  <svg {...base} strokeWidth={2} strokeLinecap="square" className={className}>
    <path d="M5.5 18.5 18 6M8.5 5.5H18.5V15.5" />
  </svg>
);

export const ArrowLeft = ({ className }: P) => (
  <svg {...base} strokeWidth={2} strokeLinecap="square" className={className}>
    <path d="M20 12H5M11 6l-6 6 6 6" />
  </svg>
);

export const Check = ({ className }: P) => (
  <svg {...base} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4.5 12.5l5 5 10-11" />
  </svg>
);

export const Plus = ({ className }: P) => (
  <svg {...base} strokeWidth={1.6} strokeLinecap="round" className={className}>
    <path d="M12 4v16M4 12h16" />
  </svg>
);

export const Home = ({ className }: P) => (
  <svg {...base} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V21h14V9.5" />
    <path d="M10 21v-6h4v6" />
  </svg>
);

export const Sun = ({ className }: P) => (
  <svg {...base} strokeWidth={1.6} strokeLinecap="round" className={className}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const Moon = ({ className }: P) => (
  <svg {...base} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
  </svg>
);
