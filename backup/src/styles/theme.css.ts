import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    accent: 'var(--c-accent)',
    text: 'var(--c-text)',
  },
});
