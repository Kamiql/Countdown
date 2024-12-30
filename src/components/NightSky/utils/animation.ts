import { StarParticle, createStarParticle } from '../particles/StarParticle';

export const updateStar = (
  star: StarParticle,
  time: number,
  width: number,
  height: number
): StarParticle => {
  star.currentOpacity += star.fadeSpeed * star.fadeDirection;

  // Handle fade in/out
  if (star.currentOpacity <= 0) {
    return createStarParticle(width, height);
  } else if (star.currentOpacity >= star.baseOpacity) {
    star.fadeDirection = -1; // Start fade out
  }

  // Smooth pulse effekt, weil sieht geil aus yk
  const pulseAmount = Math.sin(time * star.pulseSpeed + star.pulseOffset);
  const sizeMultiplier = 1 + pulseAmount * 0.3; // 30% size Unterschied
  star.currentSize = star.baseSize * sizeMultiplier;

  return star;
};
