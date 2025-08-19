import { style } from '@vanilla-extract/css';
import { colorAccent } from './css/vars.css';

export const link = style({
  padding: '2px 10px',
  color: colorAccent,
});

export const linkActive = style({
  backgroundColor: '#eee',
});
