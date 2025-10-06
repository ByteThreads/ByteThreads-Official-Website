'use client';

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  fadeIn: boolean;
  age: number;
}

export default function AnimatedNodesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Create initial nodes
    const maxNodes = 60;
    const connectionDistance = 250;

    // Function to create a new node
    const createNode = (): Node => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 3 + 2,
        opacity: 0,
        fadeIn: true,
        age: 0,
      };
    };

    // Initialize some nodes
    for (let i = 0; i < maxNodes * 0.5; i++) {
      nodesRef.current.push(createNode());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Randomly add new nodes
      if (nodesRef.current.length < maxNodes && Math.random() < 0.02) {
        nodesRef.current.push(createNode());
      }

      // Update and draw nodes
      nodesRef.current.forEach((node, index) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        node.age++;

        // Fade in/out
        if (node.fadeIn) {
          node.opacity = Math.min(node.opacity + 0.02, 0.6);
          if (node.opacity >= 0.6) node.fadeIn = false;
        }

        // Remove old nodes
        if (node.age > 1000) {
          node.opacity = Math.max(node.opacity - 0.02, 0);
          if (node.opacity <= 0) {
            nodesRef.current.splice(index, 1);
            return;
          }
        }

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Calculate distance to mouse
        const dx = node.x - mouseRef.current.x;
        const dy = node.y - mouseRef.current.y;
        const distanceToMouse = Math.sqrt(dx * dx + dy * dy);
        const mouseInfluenceRadius = 100;

        // Scale node based on mouse proximity
        let drawRadius = node.radius;
        let glowIntensity = 0;
        if (distanceToMouse < mouseInfluenceRadius) {
          const scaleFactor = 1 + (1 - distanceToMouse / mouseInfluenceRadius) * 1.5;
          drawRadius = node.radius * scaleFactor;
          glowIntensity = (1 - distanceToMouse / mouseInfluenceRadius) * node.opacity;
        }

        // Draw glow if mouse is near
        if (glowIntensity > 0) {
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, drawRadius * 4);
          gradient.addColorStop(0, `rgba(91, 143, 199, ${glowIntensity * 0.4})`);
          gradient.addColorStop(0.3, `rgba(91, 143, 199, ${glowIntensity * 0.15})`);
          gradient.addColorStop(0.6, `rgba(91, 143, 199, ${glowIntensity * 0.05})`);
          gradient.addColorStop(1, 'rgba(91, 143, 199, 0)');

          ctx.beginPath();
          ctx.arc(node.x, node.y, drawRadius * 4, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, drawRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(91, 143, 199, ${node.opacity})`;
        ctx.fill();
      });

      // Draw connections
      nodesRef.current.forEach((node1, i) => {
        nodesRef.current.slice(i + 1).forEach((node2) => {
          const dx = node2.x - node1.x;
          const dy = node2.y - node1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.3 * Math.min(node1.opacity, node2.opacity);

            // Draw wavy line
            const steps = 20;
            ctx.beginPath();
            ctx.moveTo(node1.x, node1.y);

            for (let i = 1; i <= steps; i++) {
              const t = i / steps;
              const x = node1.x + dx * t;
              const y = node1.y + dy * t;

              // Add wave effect
              const wave = Math.sin(t * Math.PI * 2 + Date.now() * 0.001) * 5;
              const perpX = -dy / distance;
              const perpY = dx / distance;

              const waveX = x + perpX * wave;
              const waveY = y + perpY * wave;

              ctx.lineTo(waveX, waveY);
            }

            ctx.strokeStyle = `rgba(91, 143, 199, ${opacity})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
