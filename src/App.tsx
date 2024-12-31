import React from 'react';
import { CountdownDisplay } from './components/CountdownDisplay';
import { useFullscreen } from './hooks/useFullscreen';

export default function App() {
  useFullscreen();

  return (
    <div className="min-h-screen bg-[#00FF00]">
      <main className="container mx-auto px-4 min-h-screen flex flex-col items-center justify-center">
        <CountdownDisplay />
      </main>
    </div>
  );
}