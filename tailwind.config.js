/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#D4A63A',
        navy: '#0F2A52',
        brand: {
          navy: '#0F2A52',
          navySoft: '#1E3E70',
          gold: '#D4A63A',
          goldSoft: '#E7C26A',
          sky: '#EAF3FF',
          mist: '#F7FBFF',
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          600: '#475569',
          700: '#334155',
          900: '#0F172A',
        },
      },
      boxShadow: {
        soft: '0 10px 35px rgba(15,42,82,0.08)',
        premium: '0 18px 45px rgba(15,42,82,0.14)',
      },
      fontFamily: {
        heading: ['Playfair Display', 'ui-serif', 'serif'],
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #EAF3FF 0%, #FFFFFF 45%, #F7FBFF 100%)',
      },
    },
  },
  plugins: [],
}
