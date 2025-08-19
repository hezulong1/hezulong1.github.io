import { createVar, style } from '@vanilla-extract/css';
import { colorFill1 } from '../css/vars.css.ts';

export const varSidebarWidth = createVar();

export const container = style({
  position: 'fixed',
  top: 0,
  bottom: 0,
  width: varSidebarWidth,
  backgroundColor: colorFill1,
  padding: '16px',
  paddingRight: '48px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
});

export const divider = style({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  width: 30,
});

export const copyRight = style({
  position: 'absolute',
  bottom: 0,
  left: 16,
});
