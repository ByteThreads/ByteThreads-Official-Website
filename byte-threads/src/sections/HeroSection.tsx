'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ThreadBackground from '@/components/ui/ThreadBackground';
import { strings } from '@/utils/content';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThreadBackground variant="hero" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground tracking-tight mb-8"
        >
          {strings.hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed mb-12"
        >
          {strings.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-copper hover:bg-copper-light text-navy font-medium text-lg rounded-full transition-colors duration-300"
          >
            {strings.hero.cta}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-foreground/20 flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-foreground/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
