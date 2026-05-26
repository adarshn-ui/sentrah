/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          50: '#f0f4fc',
          100: '#e0eaf8',
          200: '#c1d5f0',
          300: '#92b5e4',
          400: '#5d8fd4',
          500: '#3b6ec0',
          600: '#2552a3',
          700: '#1e3a8a',
          800: '#172e6f',
          900: '#112353',
          950: '#0a1535',
        },
        brand: {
          blue: '#0A2540',
          darkBlue: '#06182c',
          cream: '#FCFAF6',
          offOrange: '#F4EFE6',
          accentOrange: '#C2410C',
          slate: '#5A6E85',
        }
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
