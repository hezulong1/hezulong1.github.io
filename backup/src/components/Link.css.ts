import { style } from '@vanilla-extract/css';

export const link = style({
  color: 'var(--color-link)',
  textDecoration: 'none',
  transition: 'color 0.3s ease',

  ':hover': {
    color: 'var(--color-link-hover)',
  },

  ':active': {
    color: 'var(--color-link-active)',
  },
});
