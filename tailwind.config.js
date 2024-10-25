import { url } from 'inspector';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "heroBackground" : "url('./src/assets/icons/home-hero-gradient.svg')"
      }
    },
  },
  plugins: [],
}