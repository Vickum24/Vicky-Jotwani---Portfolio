import React from 'react';
import { motion } from 'motion/react';

interface SectionDividerProps {
  isDark?: boolean;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ isDark = true }) => {
  return (
    <div
      aria-hidden="true"
      className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full py-4 flex items-center justify-center overflow-hidden pointer-events-none"
    >
      {/* Background track line */}
      <div
        className={`w-full h-px ${
          isDark
            ? 'bg-gradient-to-r from-transparent via-slate-800/80 to-transparent'
            : 'bg-gradient-to-r from-transparent via-slate-200 to-transparent'
        }`}
      />

      {/* Animated glowing gradient beam on scroll into view */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-4 sm:inset-x-6 h-px bg-gradient-to-r from-transparent via-cyan-500/50 via-emerald-400/40 to-transparent"
      />

      {/* Subtle center glowing accent pulse */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
        className="absolute flex items-center justify-center"
      >
        <div
          className={`h-1.5 w-1.5 rounded-full ${
            isDark ? 'bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]' : 'bg-cyan-600 shadow-[0_0_8px_rgba(2,132,199,0.5)]'
          }`}
        />
        <div
          className={`absolute h-4 w-4 rounded-full animate-ping opacity-25 ${
            isDark ? 'bg-cyan-400' : 'bg-cyan-600'
          }`}
        />
      </motion.div>
    </div>
  );
};
