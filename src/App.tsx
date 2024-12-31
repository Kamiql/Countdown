import React from 'react';
import { CountdownDisplay } from './components/CountdownDisplay';
import { useFullscreen } from './hooks/useFullscreen';

export default function App() {
  useFullscreen();

  return (
    <div className="min-h-screen bg-[#00FF00] flex items-center justify-center">
      <main className="w-full flex items-center justify-center">
        <CountdownDisplay />
      </main>
    </div>
  );
}
