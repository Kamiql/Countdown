export interface StarParticle {
  x: number;
  y: number;
  baseSize: number;
  currentSize: number;
  baseOpacity: number;
  currentOpacity: number;
  pulseSpeed: number;
  pulseOffset: number;
  fadeSpeed: number;
  fadeDirection: 1 | -1;
  glowRadius: number;
}

export const createStarParticle = (width: number, height: number): StarParticle => {
  const gridSize = 100;
  const gridX = Math.floor(width / gridSize);
  const gridY = Math.floor(height / gridSize);
  
  const cellX = Math.floor(Math.random() * gridX);
  const cellY = Math.floor(Math.random() * gridY);
  
  const x = (cellX * gridSize) + (Math.random() * gridSize);
  const y = (cellY * gridSize) + (Math.random() * gridSize);
  
  const baseSize = Math.random() * 1.5 + 0.5;
  const baseOpacity = Math.random() * 0.25 + 0.15;
  
  return {
    x,
    y,
    baseSize,
    currentSize: baseSize,
    baseOpacity,
    currentOpacity: 0,
    pulseSpeed: Math.random() * 0.0008 + 0.0003,
    pulseOffset: Math.random() * Math.PI * 2,
    fadeSpeed: Math.random() * 0.002 + 0.001, 
    fadeDirection: 1,
    glowRadius: baseSize * (Math.random() * 4 + 6) 
  };
};