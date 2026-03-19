'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';
import { strings } from '@/utils/content';

const serviceIcons: Record<string, React.ReactNode> = {
  dotnet: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="18" rx="2" />
      <path d="M7 8h4l-4 8h4" />
      <circle cx="17" cy="12" r="2" />
    </svg>
  ),
  ios: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" />
    </svg>
  ),
  web: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  ai: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
};

export default function ServicesSection() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="services" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          {/* Label */}
          <motion.div variants={staggerItem} className="mb-4">
            <span className="text-xs font-mono text-copper uppercase tracking-[0.3em]">
              {strings.services.label}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={staggerItem}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-20 max-w-3xl"
          >
            {strings.services.headline}
          </motion.h2>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strings.services.items.map((service, i) => (
              <motion.div
                key={service.title}
                variants={staggerItem}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-2xl border border-foreground/5 bg-navy-light/50 hover:border-copper/30 hover:bg-navy-light transition-all duration-500"
              >
                <div className="text-copper/70 group-hover:text-copper transition-colors duration-300 mb-6">
                  {serviceIcons[service.icon]}
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-copper transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
