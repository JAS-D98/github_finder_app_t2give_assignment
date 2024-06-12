/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:'#070f2b',
        repocard_bg:'#F1F1E6',
        cream:'#FFF7D6',
        blue:'#ccd2da',
      }
    },
  },
  plugins: [],
}