import { style } from '@vanilla-extract/css';
import { varSidebarWidth } from './Sidebar.css.ts';

export const container = style({
  flexGrow: 1,
  padding: `20px 20px 50px calc(${varSidebarWidth} + 20px)`,
  minHeight: '100vh',
  overflow: 'auto',
});
