'use client';

import { motion } from 'framer-motion';

interface ThreadBackgroundProps {
  variant?: 'hero' | 'contact';
}

const threadPaths = [
  "M-100,200 C200,180 400,320 600,280 S900,150 1100,220 S1400,350 1600,280",
  "M-100,400 C150,350 350,500 550,420 S800,300 1000,380 S1300,500 1600,420",
  "M-100,600 C250,650 450,520 650,580 S850,700 1050,620 S1350,500 1600,580",
  "M-100,150 C300,100 500,250 700,180 S1000,50 1200,130 S1500,280 1700,180",
  "M-100,500 C200,550 400,400 600,480 S900,600 1100,520 S1400,380 1600,480",
];

export default function ThreadBackground({ variant = 'hero' }: ThreadBackgroundProps) {
  const opacity = variant === 'hero' ? 0.12 : 0.08;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {threadPaths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke={i % 2 === 0 ? '#C8956C' : '#7A9E8E'}
            strokeWidth={i === 0 || i === 2 ? 1.5 : 1}
            strokeOpacity={opacity}
            strokeDasharray="8 12"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 2.5 + i * 0.5, ease: 'easeInOut', delay: i * 0.3 },
              opacity: { duration: 0.8, delay: i * 0.3 },
            }}
          />
        ))}
      </svg>

      {/* Subtle gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-copper/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sage/20 rounded-full blur-3xl"
      />
    </div>
  );
}
