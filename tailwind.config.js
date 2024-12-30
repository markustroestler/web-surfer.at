/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ocean': {
          50: '#E0F7F6',
          100: '#B3EAE8',
          200: '#80D6D3',
          300: '#4DC2BE',
          400: '#26ABA7',
          500: '#009490',
          600: '#007C79',
          700: '#006462',
          800: '#004C4B',
          900: '#003434',
        },
        'sand': {
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#FFC107',
          600: '#FFB300',
          700: '#FFA000',
        },
        'deep': {
          800: '#1a1f2c',
          900: '#0f1219',
        }
      },
      fontFamily: {
        'surf': ['Montserrat', 'sans-serif'],
      }
    }
  },
  plugins: [],
}