'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { staggerItem } from '@/hooks/useScrollAnimation';

interface CaseStudyCardProps {
  name: string;
  description: string;
  techStack: readonly string[];
  link: string;
  linkLabel: string;
  mockup: React.ReactNode;
  reversed?: boolean;
  caseStudyHref?: string;
}

export default function CaseStudyCard({
  name,
  description,
  techStack,
  link,
  linkLabel,
  mockup,
  reversed = false,
  caseStudyHref,
}: CaseStudyCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
        reversed ? 'lg:direction-rtl' : ''
      }`}
    >
      {/* Text */}
      <div className={`space-y-6 ${reversed ? 'lg:order-2 lg:direction-ltr' : ''}`}>
        <h3 className="font-serif text-3xl md:text-4xl text-foreground">
          {name}
        </h3>
        <p className="text-foreground/60 leading-relaxed">
          {description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono text-copper/80 bg-copper/5 border border-copper/10 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {caseStudyHref && (
            <Link
              href={caseStudyHref}
              className="inline-flex items-center gap-2 text-sm text-copper hover:text-copper-light transition-colors group"
            >
              Read the case study
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          )}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm transition-colors group ${
              caseStudyHref
                ? 'text-foreground/50 hover:text-foreground/80'
                : 'text-copper hover:text-copper-light'
            }`}
          >
            {linkLabel}
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mockup */}
      <div className={`${reversed ? 'lg:order-1 lg:direction-ltr' : ''}`}>
        {mockup}
      </div>
    </motion.div>
  );
}
