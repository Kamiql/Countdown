import React, { useEffect, useRef } from 'react';
import { createStarParticle, type StarParticle } from './particles/StarParticle';
import { createNightSkyGradient, createStarGradient } from './utils/gradients';
import { updateStar } from './utils/animation';

const STAR_COUNT = 100;

export const NightSky: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<StarParticle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      // Regenerate stars for new dimensions
      starsRef.current = Array.from(
        { length: STAR_COUNT }, 
        () => createStarParticle(window.innerWidth, window.innerHeight)
      );
    };

    const drawStar = (star: StarParticle) => {
      const gradient = createStarGradient(
        ctx,
        star.x,
        star.y,
        star.currentSize,
        star.currentOpacity,
        star.glowRadius
      );
      
      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(star.x, star.y, star.glowRadius, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = (time: number) => {
      ctx.fillStyle = createNightSkyGradient(ctx, canvas.width, canvas.height);
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = 'lighter';
      
      starsRef.current = starsRef.current.map(star => {
        const updatedStar = updateStar(star, time, window.innerWidth, window.innerHeight);
        drawStar(updatedStar);
        return updatedStar;
      });
      
      ctx.globalCompositeOperation = 'source-over';

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
};