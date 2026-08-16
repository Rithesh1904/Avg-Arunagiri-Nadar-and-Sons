/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          900: '#0F172A', // Deep navy
          800: '#1E293B', // Charcoal
          700: '#334155', // Steel grey
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
          300: '#CBD5E1', // Metallic light
          200: '#E2E8F0',
          100: '#F1F5F9',
          50: '#F8FAFC',
        },
        accent: {
          500: '#EAB308', // Warm accent for CTA
          600: '#CA8A04',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
