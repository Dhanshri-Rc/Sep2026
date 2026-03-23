/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          950: '#06060A',
          900: '#0F0F14',
          800: '#16161E',
          700: '#1E1E28',
          600: '#272733',
        },
        orange: {
          300: '#ffab85',
          400: '#FF9F7A',
          500: '#FF6B35',
          600: '#e85520',
        },
        mint: {
          300: '#7ffde5',
          400: '#2EFAC8',
          500: '#00e8b0',
          600: '#00c993',
        },
        ash: {
          100: '#EDEDED',
          200: '#d4d4d4',
          300: '#b0b0b0',
          400: '#888888',
          500: '#555555',
        },
      },
      backgroundImage: {
        'fire-gradient': 'linear-gradient(135deg, #FF6B35 0%, #FF9F7A 50%, #2EFAC8 100%)',
        'orange-glow': 'radial-gradient(ellipse at center, rgba(255,107,53,0.2) 0%, transparent 65%)',
        'mint-glow': 'radial-gradient(ellipse at center, rgba(46,250,200,0.15) 0%, transparent 65%)',
      },
      animation: {
        'ticker': 'ticker 28s linear infinite',
        'glow-orange': 'glowOrange 3s ease-in-out infinite',
        'glow-mint': 'glowMint 3.5s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glowOrange: {
          '0%,100%': { boxShadow: '0 0 18px rgba(255,107,53,0.25)' },
          '50%': { boxShadow: '0 0 40px rgba(255,107,53,0.55)' },
        },
        glowMint: {
          '0%,100%': { boxShadow: '0 0 18px rgba(46,250,200,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(46,250,200,0.5)' },
        },
      },
    },
  },
  plugins: [],
}
