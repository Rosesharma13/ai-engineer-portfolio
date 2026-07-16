/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f4f5ec',
          100: '#e5e7d0',
          200: '#cdd1a3',
          300: '#b0b676',
          400: '#93994f',
          500: '#6b7233',
          600: '#556b2f',
          700: '#434f26',
          800: '#37401f',
          900: '#2e351b',
        },
      },
    },
  },
  plugins: [],
}
