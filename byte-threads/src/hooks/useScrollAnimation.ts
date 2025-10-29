import { useEffect, useRef } from 'react';
import { useInView, useAnimation, Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -75 },
  visible: { opacity: 1, x: 0 }
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 75 },
  visible: { opacity: 1, x: 0 }
};

export function useScrollAnimation() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls };
}
