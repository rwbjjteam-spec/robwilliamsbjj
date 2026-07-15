/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  safelist: [
    // Timetable type colours — used dynamically via typeStyles[cell.type]
    'bg-blue-700/80', 'border-blue-500',
    'bg-blue-900/80', 'border-blue-700',
    'bg-yellow-600/80', 'border-yellow-500',
    'bg-orange-600/80', 'border-orange-400',
    'bg-purple-600/80', 'border-purple-400',
    'bg-emerald-700/80', 'border-emerald-500',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#c41230',
          dark: '#0d0d0d',
          gray: '#1a1a1a',
        },
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['system-ui', 'sans-serif'],
      },
    },
  },
};
