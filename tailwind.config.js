/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#92140C',
        secondary: '#623CEA',
        white: '#FFF8F0',
        black: '#1E1E24',
      }
    },
  },
  plugins: [],
}