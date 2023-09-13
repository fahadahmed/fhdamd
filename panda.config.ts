import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
    tokens: {
      colors: {
        primary: { value: ' #41424D' },
        secondary: { value: '#FFFFFF' },
        accent: { value: '#FFCD41' },
      },
      fonts: {
        inter: { value: 'var(--font-inter)' },
        knewave: { value: 'var(--font-knewave)' },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
