'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';
import { strings } from '@/utils/content';

export default function AboutSection() {
  const { ref, controls } = useScrollAnimation();
  const { ref: diffRef, controls: diffControls } = useScrollAnimation();

  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Philosophy */}
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
              {strings.about.label}
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8"
            >
              {strings.about.headline}
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-lg text-foreground/70 leading-relaxed"
            >
              {strings.about.philosophy}
            </motion.p>
          </motion.div>

          {/* Right: Differentiators */}
          <motion.div
            ref={diffRef}
            initial="hidden"
            animate={diffControls}
            variants={staggerContainer}
            className="space-y-8 lg:pt-16"
          >
            {strings.about.differentiators.map((diff) => (
              <motion.div
                key={diff.title}
                variants={staggerItem}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-px bg-foreground/10 group-hover:bg-copper/50 transition-colors duration-500 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-foreground/10 group-hover:bg-copper transition-colors duration-500" />
                  </div>
                  <div className="pb-2">
                    <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-copper transition-colors duration-300">
                      {diff.title}
                    </h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
