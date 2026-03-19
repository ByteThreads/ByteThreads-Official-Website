'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';
import { strings } from '@/utils/content';

export default function TechStackSection() {
  const { ref, controls } = useScrollAnimation();
  const items = strings.techStack.items;
  // Duplicate for seamless marquee
  const marqueeItems = [...items, ...items];

  return (
    <section className="py-24 px-4 relative overflow-hidden border-y border-foreground/5">
      <div className="max-w-7xl mx-auto mb-12">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <motion.span
            variants={staggerItem}
            className="text-xs font-mono text-copper uppercase tracking-[0.3em] block mb-4"
          >
            {strings.techStack.label}
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="font-serif text-3xl md:text-4xl text-foreground"
          >
            {strings.techStack.headline}
          </motion.h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy to-transparent z-10" />

        <div className="flex animate-marquee">
          {marqueeItems.map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex-shrink-0 px-8 py-4"
            >
              <span className="text-lg font-mono text-foreground/40 hover:text-copper/60 transition-colors duration-300 whitespace-nowrap">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
