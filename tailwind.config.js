/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        AlexBrush: "'Alex Brush', cursive",
        Inconsolata: "'Inconsolata', monospace"
      }
    },
  },
  plugins: [require('daisyui')],
}

