/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#100f0a',
          900: '#17180f',
          800: '#1e2016',
          700: '#282a1c',
          600: '#3a3d28',
        },
        moss: {
          300: '#c9db8a',
          400: '#a8bd6c',
          500: '#8ba24f',
          600: '#6d8339',
          700: '#526326',
        },
        sand: {
          100: '#f3f1e6',
          300: '#d8d6c4',
          500: '#9a9a86',
          700: '#6b6b5c',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
