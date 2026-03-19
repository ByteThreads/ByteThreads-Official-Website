'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp } from '@/hooks/useScrollAnimation';
import { strings } from '@/utils/content';

export default function CTASection() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            {strings.cta.headline}
          </h2>
          <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto">
            {strings.cta.description}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-copper hover:bg-copper-light text-navy font-medium text-lg rounded-full transition-colors duration-300"
          >
            {strings.cta.button}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
