import { Variants } from 'framer-motion';

export const countdownAnimations: Record<string, Variants> = {
  default: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.3 } },
  },
  enlarge: {
    initial: { scale: 1 },
    animate: { scale: 1.5, color: '#FF0000', transition: { duration: 0.5, ease: 'easeInOut' } },
  },
  bigText: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1.5, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
  }
};
