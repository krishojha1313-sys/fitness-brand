import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#0A0A0A',
        'brand-charcoal': '#121212',
        'brand-white': '#FFFFFF',
        'brand-blue': '#00D9FF',
        'brand-green': '#00FF88',
        'brand-red': '#FF1744',
        'dark-bg': '#0A0A0A',
        'dark-card': '#1A1A1A',
        'dark-border': '#2A2A2A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xl: '20px',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 217, 255, 0.5)',
        'neon-green': '0 0 20px rgba(0, 255, 136, 0.5)',
        'neon-red': '0 0 20px rgba(255, 23, 68, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
