/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc4fc',
          400: '#38a5f8',
          500: '#0e8be3',
          600: '#026fc2',
          700: '#03589d',
          800: '#074b81',
          900: '#0c3f6c',
          950: '#082849',
        },
      },
    },
  },
  plugins: [],
}