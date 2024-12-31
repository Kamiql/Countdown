import React, { useEffect, useState } from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { motion, AnimatePresence } from 'framer-motion';
import { countdownAnimations } from './Countdown/countdownAnimations';

interface TimeUnit {
  label: string;
  value: number;
}

export const CountdownDisplay: React.FC = () => {
  const { days, hours, minutes, seconds } = useCountdown(new Date('2024-12-31T22:34:00'));
  const [isFinalFive, setIsFinalFive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const time = (days * 24 * 60 * 60) + (hours * 60 * 24) + (minutes * 60) + seconds;

    if (seconds <= 5 && seconds > 0 && time <= 5) {
      setIsFinalFive(true);
    }
    
    if (time === 0) {
      setIsFinished(true);
    }
  }, [days, hours, minutes, seconds]);

  if (isFinished) {
    return (
      <div className="celebration-screen">
        <motion.h1
          {...countdownAnimations.bigText}
          className="text-9xl font-bold text-gold"
        >
          2025
        </motion.h1>
        <div className="fireworks"></div>
      </div>
    );
  }

  const timeUnits: TimeUnit[] = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds }
  ].filter(({ value }) => value > 0)
    .map(({ label, value }) => ({
      label:
        value === 1
          ? label.slice(0, -1)
          : label,
      value
    }));

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
      {timeUnits.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={value}
              {...(isFinalFive ? countdownAnimations.enlarge : countdownAnimations.default)}
              className="text-7xl md:text-8xl lg:text-9xl font-space font-bold mb-2 text-gray-100"
            >
              {value.toString().padStart(2, '0')}
            </motion.div>
          </AnimatePresence>
          <span className="text-sm md:text-lg font-space uppercase tracking-widest text-gray-400">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};
