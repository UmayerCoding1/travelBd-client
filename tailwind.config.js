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
      },
      backgroundImage: {
        searchBanner:"url('./src/assets/image/banner/search-banner.webp')"
      },
      boxShadow: {
        primaryShadow: "1px 1px 20px #63626294"
      }
    },
  },
  plugins: [require('daisyui')],
}

