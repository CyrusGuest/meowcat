/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // light surfaces: 950 is the page, lower numbers step darker
        ink: {
          950: '#FFFFFF',
          900: '#FFFFFF',
          850: '#F6F6F8',
          800: '#EEEEF1',
          700: '#E2E2E7',
        },
        // text on light
        mist: {
          DEFAULT: '#111318',
          dim: '#4B5160',
          faint: '#8A90A0',
        },
        // green accent: DEFAULT for fills, bright for text, deep for washes
        azure: {
          DEFAULT: '#0A8754',
          bright: '#06693F',
          deep: '#9FE8C5',
        },
        brass: {
          DEFAULT: '#8A6A1E',
          dim: '#B8964A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        // display headings: same grotesque as body, sized/weighted up (Morpho-style)
        serif: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm: '0.625rem',
        DEFAULT: '0.75rem',
        md: '1rem',
        lg: '1.25rem',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        pulseSoft: 'pulseSoft 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
