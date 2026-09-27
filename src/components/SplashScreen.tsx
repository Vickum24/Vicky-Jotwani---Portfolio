import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1400; // ~1.4 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(nextProgress);

      if (elapsed >= duration) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 150);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-slate-100 selection:bg-none"
      >
        <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
          {/* Futuristic Monogram */}
          <div className="relative mb-8 flex items-center justify-center">
            {/* Subtle glow ring */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.45, 0.2],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-sky-400/20 to-emerald-500/20 blur-xl"
            />

            <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/90 shadow-2xl backdrop-blur-xl">
              {/* Outer corner marks */}
              <span className="absolute -top-1 -left-1 h-2.5 w-2.5 border-t border-l border-cyan-400" />
              <span className="absolute -top-1 -right-1 h-2.5 w-2.5 border-t border-r border-cyan-400" />
              <span className="absolute -bottom-1 -left-1 h-2.5 w-2.5 border-b border-l border-cyan-400" />
              <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 border-b border-r border-cyan-400" />

              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="font-display text-4xl font-extrabold tracking-wider bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent"
              >
                VJ
              </motion.span>
            </div>
          </div>

          {/* Name & Title preview */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mb-6 space-y-1"
          >
            <h1 className="font-display text-lg font-bold tracking-tight text-white">
              Vicky Jotwani
            </h1>
            <p className="text-xs text-slate-400 tracking-wide">
              AML/KYC Client Risk Framework · People Leadership
            </p>
          </motion.div>

          {/* Loading bar */}
          <div className="w-56 space-y-2">
            <div className="h-1 w-full overflow-hidden rounded-full bg-slate-800/80 p-0.5">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400 shadow-[0_0_12px_rgba(56,189,248,0.5)]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
              <span>SYSTEM INITIALIZATION</span>
              <span>{progress}%</span>
            </div>
          </div>

          {/* Optional skip button */}
          <button
            onClick={onComplete}
            className="mt-8 text-[11px] text-slate-400 hover:text-slate-300 transition-colors cursor-pointer"
          >
            Skip Intro →
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
