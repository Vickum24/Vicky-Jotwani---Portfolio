import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  isDark?: boolean;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ isDark = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery.matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Particle definition
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      pulseSpeed: number;
      pulseAngle: number;
      color: string;
    }

    let particles: Particle[] = [];

    const initParticles = () => {
      const isMobile = width < 768;
      // Cap particle count strictly: 22 on mobile, 45 on desktop
      const count = isMobile ? 22 : 45;
      particles = [];

      const colors = isDark
        ? [
            'rgba(56, 189, 248, ', // Sky blue
            'rgba(16, 185, 129, ', // Emerald
            'rgba(147, 197, 253, ', // Light blue
            'rgba(99, 102, 241, ',  // Indigo
          ]
        : [
            'rgba(14, 165, 233, ', // Sky
            'rgba(13, 148, 136, ', // Teal
            'rgba(79, 70, 229, ',  // Indigo
          ];

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          size: Math.random() * 1.8 + 1,
          baseAlpha: Math.random() * 0.18 + 0.08,
          pulseSpeed: Math.random() * 0.015 + 0.008,
          pulseAngle: Math.random() * Math.PI * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    initParticles();

    // Draw static gradient if user prefers reduced motion
    if (prefersReducedMotion) {
      ctx.clearRect(0, 0, width, height);
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      if (isDark) {
        bgGrad.addColorStop(0, '#030712');
        bgGrad.addColorStop(0.5, '#081226');
        bgGrad.addColorStop(1, '#020617');
      } else {
        bgGrad.addColorStop(0, '#f8fafc');
        bgGrad.addColorStop(0.5, '#f1f5f9');
        bgGrad.addColorStop(1, '#e2e8f0');
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }

    let time = 0;

    const render = () => {
      time += 0.004;
      ctx.clearRect(0, 0, width, height);

      // 1. Soft slow drifting gradient mesh
      const grad1X = width * 0.3 + Math.sin(time) * 120;
      const grad1Y = height * 0.25 + Math.cos(time * 0.8) * 80;
      const grad1 = ctx.createRadialGradient(
        grad1X,
        grad1Y,
        10,
        grad1X,
        grad1Y,
        Math.max(width, height) * 0.55
      );

      if (isDark) {
        grad1.addColorStop(0, 'rgba(14, 116, 144, 0.09)');
        grad1.addColorStop(0.6, 'rgba(15, 23, 42, 0.03)');
        grad1.addColorStop(1, 'rgba(2, 6, 23, 0)');
      } else {
        grad1.addColorStop(0, 'rgba(186, 230, 253, 0.35)');
        grad1.addColorStop(0.7, 'rgba(241, 245, 249, 0.1)');
        grad1.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }

      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2X = width * 0.75 + Math.cos(time * 0.7) * 100;
      const grad2Y = height * 0.75 + Math.sin(time * 0.6) * 90;
      const grad2 = ctx.createRadialGradient(
        grad2X,
        grad2Y,
        10,
        grad2X,
        grad2Y,
        Math.max(width, height) * 0.6
      );

      if (isDark) {
        grad2.addColorStop(0, 'rgba(67, 56, 202, 0.07)');
        grad2.addColorStop(0.5, 'rgba(16, 185, 129, 0.04)');
        grad2.addColorStop(1, 'rgba(2, 6, 23, 0)');
      } else {
        grad2.addColorStop(0, 'rgba(224, 231, 255, 0.3)');
        grad2.addColorStop(0.6, 'rgba(209, 250, 229, 0.2)');
        grad2.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }

      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Connecting lines between close particles
      const connectionDist = width < 768 ? 90 : 130;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectionDist) {
            const lineAlpha = (1 - dist / connectionDist) * (isDark ? 0.09 : 0.06);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isDark
              ? `rgba(148, 163, 184, ${lineAlpha})`
              : `rgba(100, 116, 139, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // 3. Update & render particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.pulseAngle += p.pulseSpeed;

        // Wrap around boundaries smoothly
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const currentAlpha = p.baseAlpha + Math.sin(p.pulseAngle) * 0.05;
        const boundedAlpha = Math.max(0.04, Math.min(0.28, currentAlpha));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${boundedAlpha})`;
        ctx.fill();
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 w-full h-full"
    />
  );
};
