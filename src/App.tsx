import React from 'react';
import { CountdownDisplay } from './components/CountdownDisplay';
import { NightSky } from './components/NightSky/NightSky';
import { useFullscreen } from './hooks/useFullscreen';

export default function App() {
  useFullscreen();

  return (
    <>
      <NightSky />
      <div className="relative z-10">
        <main className="container mx-auto px-4 min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-space font-bold text-center mb-16 text-gray-100 tracking-wider">
            2025
          </h1>
          
          <CountdownDisplay />
          
          <p className="mt-16 text-center font-space text-gray-400">
            Countdown to August 30th, 2025
          </p>
        </main>
      </div>
    </>
  );
}