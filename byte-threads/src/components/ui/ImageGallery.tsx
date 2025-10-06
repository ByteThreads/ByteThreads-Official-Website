'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  className?: string;
}

export default function ImageGallery({ images, className = '' }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Animation completes when entire section is in view
          // 0 = section entering viewport from bottom, 1 = entire section visible in viewport
          const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / rect.height));
          setScrollY(scrollProgress);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div className={`w-full ${className}`} ref={containerRef}>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => {
          // Staggered parallax effect with varied speeds per column
          const columnIndex = index % 3;
          const rowIndex = Math.floor(index / 3);

          // Different speeds for each column (creates depth effect)
          const speeds = [0.8, 1.2, 1.0];
          const speed = speeds[columnIndex];

          // Base offset with stagger delay based on row
          const baseOffset = 400 * speed;
          const staggerDelay = rowIndex * 0.15;

          // Adjusted scroll progress with stagger
          const adjustedProgress = Math.max(0, Math.min(1, scrollY - staggerDelay));

          // Calculate parallax offset
          const slideUpOffset = (1 - adjustedProgress) * baseOffset;

          // Opacity with stagger
          const opacity = Math.min(1, adjustedProgress * 1.8);

          // Slight scale effect as it comes in
          const scale = 0.85 + (adjustedProgress * 0.15);

          return (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => setSelectedImage(index)}
              style={{
                transform: `translateY(${slideUpOffset}px) scale(${scale})`,
                opacity: opacity,
                willChange: 'transform, opacity'
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              {image.title && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Modal for enlarged view */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
            {/* Navigation arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  →
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}