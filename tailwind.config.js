/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#9333EA',
        dark: '#1F2937',
      },
      container: {
        center: true,
        padding: '16px',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
