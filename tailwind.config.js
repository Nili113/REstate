/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#0e1a14',
          900: '#132b21',
          800: '#1e3f30',
          700: '#2d5844',
          600: '#3d7058',
          100: '#ebf2ee',
          50: '#f4f8f5',
        },
        ivory: {
          50: '#ffffff',
          100: '#fdfbf7',
          200: '#f5f1e9',
          300: '#ede8de',
          400: '#e3ddd2',
        },
        gold: {
          600: '#a88118',
          500: '#c59b27',
          400: '#ddb43e',
          100: '#fbf4de',
        },
        charcoal: {
          900: '#1b211e',
          700: '#36413c',
          500: '#627068',
          300: '#9aa79f',
        }
      },
      fontFamily: {
        serif: ['"Newsreader"', 'Georgia', 'serif'],
        display: ['"Outfit"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(19, 43, 33, 0.05)',
        'elevated': '0 12px 32px rgba(19, 43, 33, 0.08)',
        'card-hover': '0 20px 48px rgba(19, 43, 33, 0.14)',
        'gold-glow': '0 0 20px rgba(197, 155, 39, 0.25)',
      }
    },
  },
  plugins: [],
}
