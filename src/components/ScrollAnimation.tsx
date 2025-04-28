"use client"

import { motion, useAnimation } from 'framer-motion';
import { useEffect, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer'; // Changed import

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  once?: boolean;
}

// Define an interface for the return type of getDirectionValues
interface AnimationValues {
  initial: {
    y?: number;
    x?: number;
    opacity: number;
  };
  animate: {
    y?: number;
    x?: number;
    opacity: number;
  };
}

const ScrollAnimation = ({
  children,
  className = "",
  delay = 0.2,
  direction = 'up',
  duration = 0.5,
  once = true
}: ScrollAnimationProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  // Add explicit return type to the function
  const getDirectionValues = (): AnimationValues => {
    switch (direction) {
      case 'up':
        return { initial: { y: 50, opacity: 0 }, animate: { y: 0, opacity: 1 } };
      case 'down':
        return { initial: { y: -50, opacity: 0 }, animate: { y: 0, opacity: 1 } };
      case 'left':
        return { initial: { x: 50, opacity: 0 }, animate: { x: 0, opacity: 1 } };
      case 'right':
        return { initial: { x: -50, opacity: 0 }, animate: { x: 0, opacity: 1 } };
      default:
        return { initial: { y: 50, opacity: 0 }, animate: { y: 0, opacity: 1 } };
    }
  };

  const { initial, animate } = getDirectionValues();

  useEffect(() => {
    if (inView) {
      controls.start(animate);
    }
  }, [controls, inView, animate]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;