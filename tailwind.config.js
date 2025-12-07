/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#00ffcc',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.12)'
      },
      borderRadius: {
        xl: '1rem'
      }
    },
  },
  plugins: [],
}

