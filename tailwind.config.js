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
      },
      screens: {
        'xs': '370px',     // Extra small phones
        'sm': '640px',     // Small devices (default Tailwind)
        'md': '768px',     // Medium devices (default)
        'lg': '1024px',    // Large devices (default)
        'xl': '1280px',    // Extra large (default)
        '2xl': '1536px',   // 2X large (default)
        '3xl': '1800px',   // Custom ultra-wide
      }
    },
  },
  plugins: [],
}