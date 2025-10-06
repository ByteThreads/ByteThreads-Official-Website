'use client';

import { useState, useEffect, useRef } from 'react';

interface Feature {
  id: string;
  letter: string;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate how far the section has scrolled into view
        // 0 = section at bottom of viewport, 1 = section fully visible
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight * 0.7)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax values - slide down from top
  const translateY = (1 - scrollProgress) * -150; // Slide down from 150px above
  const opacity = scrollProgress;

  return (
    <section ref={sectionRef} className="min-h-screen bg-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-8 w-full">
        {/* Header with animated text */}
        <div
          className="mb-20 pt-8"
          style={{
            transform: `translateY(${translateY}px)`,
            opacity: opacity,
            transition: 'transform 0.1s ease-out, opacity 0.2s ease-out',
          }}
        >
          <div className="flex items-center justify-center">
            <h2 className="text-8xl md:text-9xl font-bold text-gray-900">
              <span className="inline-block">Powerful Solutions</span>
            </h2>
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              onMouseEnter={() => setActiveTab(index)}
              className={`group relative p-8 rounded-3xl border-2 transition-all duration-300 cursor-pointer ${
                activeTab === index
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className="relative w-12 h-12 flex items-center justify-center rounded-full border-2 border-current transition-transform duration-500"
                  style={{
                    transform: `rotate(${activeTab === index ? 360 : 0}deg)`,
                  }}
                >
                  <span className="text-2xl font-bold text-purple-600">
                    {feature.letter}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative min-h-[300px]">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`transition-all duration-500 ${
                activeTab === index
                  ? 'opacity-100 relative'
                  : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12">
                <h3 className="text-5xl font-bold text-gray-900 mb-6">
                  {feature.title}
                </h3>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
