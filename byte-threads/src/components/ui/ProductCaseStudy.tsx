'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';
import type { ProductCaseStudy as ProductCaseStudyContent } from '@/content/products';

interface ProductCaseStudyProps {
  product: ProductCaseStudyContent;
  mockup: React.ReactNode;
}

const sectionViewport = { once: true, margin: '-100px' as const };

function hexWithAlpha(hex: string, alpha: string) {
  return `${hex}${alpha}`;
}

export default function ProductCaseStudy({ product, mockup }: ProductCaseStudyProps) {
  const accent = product.accent;
  const accentSecondary = product.accentSecondary;

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-36 pb-20 px-4 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${hexWithAlpha(accent, '14')} 0%, transparent 70%)`,
          }}
        />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.div variants={staggerItem} className="mb-6">
                <Link
                  href="/#work"
                  className="text-xs font-mono text-foreground/40 uppercase tracking-[0.2em] hover:text-foreground/70 transition-colors"
                >
                  &larr; Work
                </Link>
              </motion.div>
              <motion.span
                variants={staggerItem}
                className="text-xs font-mono uppercase tracking-[0.3em] block mb-4"
                style={{ color: accent }}
              >
                {product.eyebrow}
              </motion.span>
              <motion.h1
                variants={staggerItem}
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6"
              >
                {product.headline}{' '}
                <span
                  className="italic bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${accent}, ${accentSecondary})`,
                  }}
                >
                  {product.headlineAccent}
                </span>
              </motion.h1>
              <motion.p
                variants={staggerItem}
                className="text-foreground/60 text-lg leading-relaxed mb-8 max-w-xl"
              >
                {product.subheadline}
              </motion.p>
              <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-4">
                <a
                  href={product.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-sm font-medium text-navy rounded-full transition-opacity hover:opacity-90"
                  style={{ backgroundColor: accent }}
                >
                  Visit {product.siteLabel}
                </a>
                <a
                  href={product.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm text-foreground/70 border border-foreground/15 rounded-full hover:border-foreground/40 hover:text-foreground transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download for iOS
                </a>
              </motion.div>
            </div>
            <motion.div variants={staggerItem}>{mockup}</motion.div>
          </motion.div>
        </div>
      </section>

      {/* Fact ledger */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto border-y border-foreground/10">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {product.facts.map((fact, i) => (
              <div
                key={fact.label}
                className={`py-6 px-4 sm:px-8 ${i > 0 ? 'border-l border-foreground/10' : ''} ${
                  i >= 2 ? 'border-t border-foreground/10 lg:border-t-0' : ''
                } ${i === 2 ? 'border-l-0 lg:border-l' : ''}`}
              >
                <span className="block text-[10px] font-mono text-foreground/40 uppercase tracking-[0.2em] mb-2">
                  {fact.label}
                </span>
                <span className="text-sm text-foreground/80">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={staggerContainer}
          >
            <motion.span
              variants={staggerItem}
              className="text-xs font-mono uppercase tracking-[0.3em] block mb-4"
              style={{ color: accent }}
            >
              The Product
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="font-serif text-3xl md:text-4xl text-foreground mb-8 max-w-2xl"
            >
              {product.overview.heading}
            </motion.h2>
            <div className="max-w-3xl space-y-6">
              {product.overview.paragraphs.map((paragraph) => (
                <motion.p
                  key={paragraph.slice(0, 32)}
                  variants={staggerItem}
                  className="text-foreground/60 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 bg-navy-light/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={staggerContainer}
          >
            <motion.span
              variants={staggerItem}
              className="text-xs font-mono uppercase tracking-[0.3em] block mb-4"
              style={{ color: accent }}
            >
              Features
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="font-serif text-3xl md:text-4xl text-foreground mb-4"
            >
              {product.features.heading}
            </motion.h2>
            <motion.p variants={staggerItem} className="text-foreground/50 mb-14 max-w-2xl">
              {product.features.subheading}
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.features.items.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={staggerItem}
                  className="rounded-xl border border-foreground/5 bg-background/60 p-6 transition-colors duration-300 hover:border-foreground/15"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mb-4"
                    style={{ backgroundColor: accent }}
                  />
                  <h3 className="text-foreground font-medium mb-2">{feature.title}</h3>
                  <p className="text-sm text-foreground/50 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* iOS */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={staggerContainer}
            className="rounded-2xl border border-foreground/10 p-10 md:p-14 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${hexWithAlpha(accent, '0F')} 0%, transparent 60%)`,
            }}
          >
            <motion.span
              variants={staggerItem}
              className="text-xs font-mono uppercase tracking-[0.3em] block mb-4"
              style={{ color: accent }}
            >
              Native on iOS
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="font-serif text-3xl md:text-4xl text-foreground mb-6 max-w-2xl"
            >
              {product.ios.heading}
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-foreground/60 leading-relaxed max-w-2xl mb-8"
            >
              {product.ios.body}
            </motion.p>
            <motion.div variants={staggerItem}>
              <a
                href={product.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-80 group"
                style={{ color: accent }}
              >
                Download on the App Store
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Engineering */}
      <section className="py-24 px-4 bg-navy-light/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={staggerContainer}
          >
            <motion.span
              variants={staggerItem}
              className="text-xs font-mono uppercase tracking-[0.3em] block mb-4"
              style={{ color: accent }}
            >
              Engineering
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="font-serif text-3xl md:text-4xl text-foreground mb-8"
            >
              {product.engineering.heading}
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-foreground/60 leading-relaxed max-w-3xl mb-10"
            >
              {product.engineering.body}
            </motion.p>
            <motion.div variants={staggerItem} className="flex flex-wrap gap-2">
              {product.engineering.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-full border"
                  style={{
                    color: hexWithAlpha(accent, 'CC'),
                    backgroundColor: hexWithAlpha(accent, '0D'),
                    borderColor: hexWithAlpha(accent, '1A'),
                  }}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={staggerContainer}
          >
            <motion.h2
              variants={staggerItem}
              className="font-serif text-3xl md:text-5xl text-foreground mb-6"
            >
              Want something like this built?
            </motion.h2>
            <motion.p variants={staggerItem} className="text-foreground/60 leading-relaxed mb-10">
              {product.name} is designed, engineered, and maintained by ByteThreads. If you have a
              product in mind — a SaaS platform, a native iOS app, or both — let&rsquo;s talk.
            </motion.p>
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              <Link
                href="/contact"
                className="px-8 py-3.5 text-sm font-medium text-navy bg-copper hover:bg-copper-light transition-colors rounded-full"
              >
                Start a Conversation
              </Link>
              <Link
                href={product.nextCaseStudy.href}
                className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-copper transition-colors group"
              >
                Next case study: {product.nextCaseStudy.name}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
