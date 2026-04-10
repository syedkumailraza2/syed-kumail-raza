/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#b5c6e0',
        ink: '#1a1a1a',
        muted: '#6b7280',
      },
      fontFamily: {
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
    },
  },
  plugins: [],
};
