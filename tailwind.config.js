/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F6F4EF',
        ink: '#182B3A',
        navy: {
          50: '#EEF3F6',
          100: '#D6E1E9',
          200: '#AFC4D3',
          300: '#82A2B9',
          400: '#4E7994',
          500: '#2E5975',
          600: '#1F455E',
          700: '#16324B',
          800: '#102438',
          900: '#0B1A28',
        },
        gold: {
          50: '#FBF4E4',
          100: '#F3E1B4',
          200: '#E7C878',
          300: '#D6AC47',
          400: '#C08A28',
          500: '#A5711E',
          600: '#845817',
        },
        clay: {
          400: '#C56A52',
          500: '#B04C36',
          600: '#903A28',
        },
        moss: {
          400: '#5C9077',
          500: '#3F7D5C',
          600: '#2E5F45',
        },
      },
      fontFamily: {
        display: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16, 36, 56, 0.06), 0 4px 16px rgba(16, 36, 56, 0.06)',
      },
    },
  },
  plugins: [],
}
