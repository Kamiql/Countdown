/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        dark: {
          bg: '#1a1a2e',
          accent: '#e2e8f0'
        }
      }
    },
  },
  plugins: [],
};