/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#050505",
          card: "#0d0d0e",
          accent: "#ff3b00", // High-voltage Kinetic Neon Red-Orange
          accentYellow: "#ccff00", // Kinetic Acid Yellow
          textDark: "#88888e",
        }
      },
      fontFamily: {
        sans: ['Oswald', 'Inter', 'sans-serif'],
        display: ['Teko', 'Oswald', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
