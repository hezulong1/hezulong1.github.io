import { defineConfig } from 'windicss/helpers';
import typography from 'windicss/plugin/typography';

export default defineConfig({
  darkMode: 'class',
  extract: {
    include: [
      'index.html',
      './**/*.{vue,tsx,md}',
    ],
  },
  plugins: [
    typography(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: '"v-sans",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
      },
      colors: {
        accent: 'var(--c-accent)',
        accentLight: 'var(--c-accent-light)',
        accentDark: 'var(--c-accent-dark)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
});
