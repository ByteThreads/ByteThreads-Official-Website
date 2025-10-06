'use client';

import { useEffect, useRef } from 'react';

interface Section {
  title: string;
  description: string;
}

interface ConnectedThreadsProps {
  sections: Section[];
}

export default function AnimatedThreads({ sections }: ConnectedThreadsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const timeRef = useRef(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      timeRef.current += 0.02;

      // Get center positions of all sections
      const centers = sectionRefs.current
        .filter(ref => ref !== null)
        .map(ref => {
          const rect = ref!.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          return {
            x: rect.left - containerRect.left + rect.width / 2,
            y: rect.top - containerRect.top + rect.height / 2,
          };
        });

      if (centers.length < 2) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      // Draw spider web - connect every section to every other section
      const drawThread = (i: number, j: number) => {
        const x1 = centers[i].x;
        const y1 = centers[i].y;
        const x2 = centers[j].x;
        const y2 = centers[j].y;

        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        const points = [];
        const segments = 50;

        for (let k = 0; k <= segments; k++) {
          const progress = k / segments;
          const x = x1 + (x2 - x1) * progress;
          const y = y1 + (y2 - y1) * progress;

          // Add wave effect
          const wave = Math.sin(progress * Math.PI * 3 + timeRef.current + i + j) * 12;
          const perpX = -(y2 - y1) / distance;
          const perpY = (x2 - x1) / distance;

          points.push({
            x: x + perpX * wave,
            y: y + perpY * wave,
          });
        }

        // Create gradient
        const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        const colors = [
          ['59, 130, 246', '147, 51, 234'],
          ['147, 51, 234', '236, 72, 153'],
          ['236, 72, 153', '59, 130, 246'],
        ];
        const colorPair = colors[(i + j) % colors.length];

        gradient.addColorStop(0, `rgba(${colorPair[0]}, 0.4)`);
        gradient.addColorStop(1, `rgba(${colorPair[1]}, 0.2)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Draw smooth curve
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let k = 1; k < points.length - 2; k++) {
          const xc = (points[k].x + points[k + 1].x) / 2;
          const yc = (points[k].y + points[k + 1].y) / 2;
          ctx.quadraticCurveTo(points[k].x, points[k].y, xc, yc);
        }
        ctx.quadraticCurveTo(
          points[points.length - 2].x,
          points[points.length - 2].y,
          points[points.length - 1].x,
          points[points.length - 1].y
        );
        ctx.stroke();
      };

      // Connect all sections to each other (spider web pattern)
      for (let i = 0; i < centers.length; i++) {
        for (let j = i + 1; j < centers.length; j++) {
          drawThread(i, j);
        }
      }

      // Add radial threads from center
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      centers.forEach((center, i) => {
        const distance = Math.sqrt((center.x - centerX) ** 2 + (center.y - centerY) ** 2);
        const points = [];
        const segments = 40;

        for (let k = 0; k <= segments; k++) {
          const progress = k / segments;
          const x = centerX + (center.x - centerX) * progress;
          const y = centerY + (center.y - centerY) * progress;

          // Add wave effect
          const wave = Math.sin(progress * Math.PI * 4 + timeRef.current + i) * 10;
          const perpX = -(center.y - centerY) / distance;
          const perpY = (center.x - centerX) / distance;

          points.push({
            x: x + perpX * wave,
            y: y + perpY * wave,
          });
        }

        const gradient = ctx.createRadialGradient(centerX, centerY, 0, center.x, center.y, distance);
        gradient.addColorStop(0, 'rgba(147, 51, 234, 0.3)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0.1)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let k = 1; k < points.length - 2; k++) {
          const xc = (points[k].x + points[k + 1].x) / 2;
          const yc = (points[k].y + points[k + 1].y) / 2;
          ctx.quadraticCurveTo(points[k].x, points[k].y, xc, yc);
        }
        ctx.quadraticCurveTo(
          points[points.length - 2].x,
          points[points.length - 2].y,
          points[points.length - 1].x,
          points[points.length - 1].y
        );
        ctx.stroke();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [sections]);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="relative z-10 grid grid-cols-2 gap-x-16 gap-y-20 max-w-7xl mx-auto px-8 py-20 h-full items-center">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => { sectionRefs.current[index] = el; }}
            className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 w-full shadow-2xl border border-white/20 ${
              index % 2 === 0 ? 'justify-self-end' : 'justify-self-start'
            }`}
          >
            <h3 className="text-3xl font-bold text-stone-50 mb-4">{section.title}</h3>
            <p className="text-lg text-stone-100/80">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
