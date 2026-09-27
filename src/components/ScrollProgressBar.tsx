import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

interface ScrollProgressBarProps {
  isDark?: boolean;
}

export const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({ isDark = true }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 z-50 h-[3px] pointer-events-none ${
        isDark ? 'bg-slate-900/40' : 'bg-slate-200/50'
      }`}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400 origin-left shadow-[0_0_12px_rgba(56,189,248,0.7)]"
        style={{ scaleX }}
      />
    </div>
  );
};
