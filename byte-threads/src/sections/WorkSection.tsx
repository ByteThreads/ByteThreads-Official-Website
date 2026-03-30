'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';
import { strings } from '@/utils/content';
import CaseStudyCard from '@/components/ui/CaseStudyCard';
import AnimatedDashboard from '@/components/ui/AnimatedDashboard';
import AnimatedWorkflow from '@/components/ui/AnimatedWorkflow';
import AnimatedShowly from '@/components/ui/AnimatedShowly';

export default function WorkSection() {
  const { ref, controls } = useScrollAnimation();

  const mockups = [<AnimatedDashboard key="osf" />, <AnimatedWorkflow key="spc" />, <AnimatedShowly key="showly" />];

  return (
    <section id="work" className="py-32 px-4 relative bg-navy-light/30">
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
            {strings.work.label}
          </motion.span>

          {/* Headline */}
          <motion.h2
            variants={staggerItem}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-20 max-w-3xl"
          >
            {strings.work.headline}
          </motion.h2>

          {/* Projects */}
          <div className="space-y-32">
            {strings.work.projects.map((project, i) => (
              <CaseStudyCard
                key={project.name}
                name={project.name}
                description={project.description}
                techStack={project.techStack}
                link={project.link}
                linkLabel={project.linkLabel}
                mockup={mockups[i]}
                reversed={i % 2 !== 0}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
