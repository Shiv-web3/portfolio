/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#18181b',
        accent: '#fff',
        primary: '#fff',
        secondary: '#a1a1aa',
        muted: '#27272a',
        blue: {
          DEFAULT: '#3b82f6', // Tailwind blue-500
          light: '#60a5fa',   // blue-400
          dark: '#1e40af',    // blue-800
        },
        teal: {
          DEFAULT: '#14b8a6', // Tailwind teal-500
          light: '#2dd4bf',   // teal-400
          dark: '#0f766e',    // teal-800
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

