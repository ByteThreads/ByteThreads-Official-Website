'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';
import { strings } from '@/utils/content';

export default function ProcessSection() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="process" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          {/* Label */}
          <motion.span
            variants={staggerItem}
            className="text-xs font-mono text-copper uppercase tracking-[0.3em] block mb-4"
          >
            {strings.process.label}
          </motion.span>

          {/* Headline */}
          <motion.h2
            variants={staggerItem}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-20 max-w-4xl"
          >
            {strings.process.headline}
          </motion.h2>

          {/* Steps */}
          <div className="relative">
            {/* Thread line connecting steps */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-copper/30 via-sage/20 to-transparent" />

            <div className="space-y-12">
              {strings.process.steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  variants={staggerItem}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex gap-8 md:gap-12 group"
                >
                  {/* Step number */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-foreground/10 bg-navy flex items-center justify-center group-hover:border-copper/50 transition-colors duration-500">
                      <span className="text-xs md:text-sm font-mono text-foreground/50 group-hover:text-copper transition-colors duration-500">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2 md:pt-4 pb-4">
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3 group-hover:text-copper transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-foreground/60 leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
