import { style, globalStyle } from '@vanilla-extract/css';
import { colorBorder, colorFill1, colorText2, radius } from '../css/vars.css';

export const container = style({
  display: 'grid',
  placeItems: 'center',
  placeContent: 'center',
  marginBottom: 16,
});

globalStyle(`${container} img`, {
  padding: 2,
  width: 48,
  height: 48,
  border: `1px solid ${colorBorder}`,
  borderRadius: '50%',
  background: '#fff',
});

globalStyle(`${container} svg`, {
  width: 20,
});

export const socialLinks = style({
  display: 'flex',
  marginTop: 8,
  alignItems: 'center',
});

globalStyle(`${socialLinks} a`, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: radius,
  width: 28,
  height: 28,
  cursor: 'pointer',
  color: colorText2,
});

globalStyle(`${socialLinks} a:hover`, {
  backgroundColor: colorFill1,
});
