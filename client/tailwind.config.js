/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#FFFFFF',
          dark: '#000000'
        },
        foreground: {
          light: '#000000',
          dark: '#FFFFFF'
        },
        primary: {
          light: '#3B82F6', // sky blue
          dark: '#60A5FA'
        },
        secondary: {
          light: '#F3F4F6',
          dark: '#1F2937'
        },
        accent: {
          light: '#60A5FA',
          dark: '#3B82F6'
        },
        muted: {
          light: '#6B7280',
          dark: '#9CA3AF'
        },
        'nav-bg': {
          light: 'rgba(255, 255, 255, 0.8)',
          dark: 'rgba(0, 0, 0, 0.8)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif']
      },
      container: {
        center: true,
        padding: '1rem'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      transitionDuration: {
        '400': '400ms',
      }
    },
  },
  plugins: [],
} 