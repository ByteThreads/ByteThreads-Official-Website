'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, scaleIn, slideInLeft, slideInRight } from '@/hooks/useScrollAnimation';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

// Icon components
const MobileIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" />
  </svg>
);

const AIIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const ReportIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 3v18h18" />
    <path d="M18 17V9" />
    <path d="M13 17V5" />
    <path d="M8 17v-3" />
  </svg>
);

const NotificationIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const SecurityIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const CloudIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const iconMap: { [key: string]: React.FC } = {
  '📱': MobileIcon,
  '🤖': AIIcon,
  '📊': ReportIcon,
  '🔔': NotificationIcon,
  '🔒': SecurityIcon,
  '🌐': CloudIcon,
};

interface ProductShowcaseProps {
  title: string;
  tagline: string;
  description: string;
  features: readonly Feature[];
  ctaText: string;
  ctaLink: string;
}

export default function ProductShowcase({
  title,
  tagline,
  description,
  features,
  ctaText,
  ctaLink,
}: ProductShowcaseProps) {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation();
  const { ref: contentRef, controls: contentControls } = useScrollAnimation();
  const { ref: heroCardRef, controls: heroCardControls } = useScrollAnimation();

  return (
    <section className="relative min-h-screen bg-slate-950 py-24 px-4 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500"></span>
            <span className="text-blue-400 text-sm font-medium tracking-[0.3em] uppercase">
              Introducing
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500"></span>
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              {title}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-200/80 font-light italic mb-6">
            {tagline}
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Hero Feature Card - Large */}
          <motion.div
            ref={heroCardRef}
            initial="hidden"
            animate={heroCardControls}
            variants={scaleIn}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 lg:row-span-2 relative group"
          >
            <div className="h-full bg-gradient-to-br from-[#5E80FF]/20 via-[#8C5EFF]/10 to-transparent backdrop-blur-xl border border-white/10 rounded-3xl p-10 overflow-hidden hover:border-[#5E80FF]/50 transition-all duration-500">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#5E80FF]/0 via-[#8C5EFF]/0 to-[#5E80FF]/0 group-hover:from-[#5E80FF]/10 group-hover:via-[#8C5EFF]/10 group-hover:to-[#5E80FF]/5 transition-all duration-500 rounded-3xl" />

              <div className="relative z-10">
                <div className="w-20 h-20 mb-6 text-[#5E80FF] group-hover:text-[#8C5EFF] filter drop-shadow-2xl transition-colors duration-500">
                  {(() => {
                    const IconComponent = iconMap[features[0]?.icon];
                    return IconComponent ? <IconComponent /> : null;
                  })()}
                </div>
                <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-[#8C5EFF] transition-colors">
                  {features[0]?.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {features[0]?.description}
                </p>

                {/* App Preview */}
                <div className="mt-8 relative">
                  <div className="aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border border-white/5 shadow-2xl flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 text-gray-600 animate-pulse">
                        <MobileIcon />
                      </div>
                      <p className="text-gray-500 text-sm">App Preview Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards - Smaller Grid */}
          {features.slice(1).map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <motion.div
                key={index}
                initial="hidden"
                animate={contentControls}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`${
                  index === 0 || index === 3 ? 'lg:col-span-4' : 'lg:col-span-4'
                } group`}
              >
                <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#5E80FF]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#8C5EFF]/20">
                  <div className="w-12 h-12 mb-4 text-[#5E80FF] group-hover:text-[#8C5EFF] group-hover:scale-110 transition-all duration-300">
                    {IconComponent ? <IconComponent /> : null}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#8C5EFF] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate={contentControls}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-gray-400 max-w-2xl text-lg">
              {description}
            </p>
            <motion.a
              href={ctaLink}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-semibold text-lg px-12 py-5 rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">{ctaText}</span>
              <motion.svg
                className="relative z-10 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </motion.svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
