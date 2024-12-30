export interface SparkleParticle {
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  opacity: number;
  angle: number;
}

export const createSparkleParticle = (width: number, height: number): SparkleParticle => {
  const colors = ['#FFD700', '#C0C0C0', '#87CEEB'];
  return {
    x: Math.random() * width,
    y: Math.random() * height + height * 0.2,
    size: Math.random() * 2 + 1,
    speed: Math.random() * 0.5 + 0.2,
    color: colors[Math.floor(Math.random() * colors.length)],
    opacity: 0,
    angle: Math.random() * Math.PI * 0.5 - Math.PI * 0.25, // -45 to 45 Grad
  };
};