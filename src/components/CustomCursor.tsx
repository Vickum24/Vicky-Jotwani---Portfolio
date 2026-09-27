import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface CustomCursorProps {
  isDark?: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ isDark = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing outer ring and immediate inner dot
  const outerSpringConfig = { stiffness: 280, damping: 24, mass: 0.5 };
  const innerSpringConfig = { stiffness: 850, damping: 40, mass: 0.2 };

  const outerX = useSpring(mouseX, outerSpringConfig);
  const outerY = useSpring(mouseY, outerSpringConfig);

  const innerX = useSpring(mouseX, innerSpringConfig);
  const innerY = useSpring(mouseY, innerSpringConfig);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse / trackpad)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    // Detect hovering on interactive elements (links, buttons, inputs, etc.)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], [role="link"], .cursor-pointer'
      );
      setIsHovered(!!interactive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  // If touch device or mouse hasn't entered, render nothing
  if (!isFinePointer) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none"
    >
      {/* Outer Halo / Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none"
        style={{
          x: outerX,
          y: outerY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          opacity: isVisible ? (isHovered ? 0.9 : 0.6) : 0,
          scale: isClicked ? 0.85 : 1,
          backgroundColor: isHovered
            ? isDark
              ? 'rgba(34, 211, 238, 0.12)'
              : 'rgba(6, 182, 212, 0.15)'
            : 'rgba(56, 189, 248, 0.04)',
          borderColor: isHovered
            ? isDark
              ? 'rgba(52, 211, 153, 0.8)'
              : 'rgba(16, 185, 129, 0.8)'
            : isDark
            ? 'rgba(56, 189, 248, 0.45)'
            : 'rgba(14, 165, 233, 0.45)',
          borderWidth: isHovered ? '2px' : '1px',
          boxShadow: isHovered
            ? isDark
              ? '0 0 16px rgba(52, 211, 153, 0.4)'
              : '0 0 12px rgba(16, 185, 129, 0.3)'
            : '0 0 8px rgba(56, 189, 248, 0.15)',
        }}
        transition={{
          width: { duration: 0.2, ease: 'easeOut' },
          height: { duration: 0.2, ease: 'easeOut' },
          scale: { duration: 0.15, ease: 'easeOut' },
          backgroundColor: { duration: 0.2 },
          borderColor: { duration: 0.2 },
          boxShadow: { duration: 0.2 },
          opacity: { duration: 0.2 },
        }}
      />

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none"
        style={{
          x: innerX,
          y: innerY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 6 : 4,
          height: isHovered ? 6 : 4,
          opacity: isVisible ? 1 : 0,
          scale: isClicked ? 0.7 : 1,
          backgroundColor: isHovered
            ? isDark
              ? '#34d399' // Emerald on hover
              : '#059669'
            : isDark
            ? '#38bdf8' // Sky/Cyan normal
            : '#0284c7',
          boxShadow: isHovered
            ? isDark
              ? '0 0 8px #34d399'
              : '0 0 6px #059669'
            : isDark
            ? '0 0 6px #38bdf8'
            : '0 0 4px #0284c7',
        }}
        transition={{
          width: { duration: 0.15, ease: 'easeOut' },
          height: { duration: 0.15, ease: 'easeOut' },
          scale: { duration: 0.1 },
          backgroundColor: { duration: 0.15 },
          opacity: { duration: 0.15 },
        }}
      />
    </div>
  );
};
