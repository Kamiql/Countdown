export const createNightSkyGradient = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
): CanvasGradient => {
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, '#030618'); // Dunkle blue at top
  gradient.addColorStop(1, '#0A1232'); // Bisschen heller but still very dark blue at bottom
  return gradient;
};

export const createStarGradient = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  opacity: number,
  glowRadius: number
): CanvasGradient => {
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);

  // Core star
  gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
  // Inner glow
  gradient.addColorStop(0.1, `rgba(255, 255, 255, ${opacity * 0.8})`);
  gradient.addColorStop(0.2, `rgba(200, 220, 255, ${opacity * 0.6})`);
  // Outer glow
  gradient.addColorStop(0.4, `rgba(180, 200, 255, ${opacity * 0.3})`);
  gradient.addColorStop(0.8, `rgba(140, 180, 255, ${opacity * 0.1})`);
  gradient.addColorStop(1, 'rgba(100, 150, 255, 0)');

  return gradient;
};
