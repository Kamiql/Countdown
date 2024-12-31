import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { motion, AnimatePresence } from 'framer-motion';

interface TimeUnit {
  label: string;
  value: number;
}

export const CountdownDisplay: React.FC = () => {
  const { days, hours, minutes, seconds } = useCountdown(new Date('2025-01-01T00:00:00'));

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
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
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
