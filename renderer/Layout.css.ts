import { style } from '@vanilla-extract/css';
import { varSidebarWidth } from './layoutParts/Sidebar.css.ts';

export const frame = style({
  vars: {
    [varSidebarWidth]: '270px',
  },
  maxWidth: '900px',
  margin: '0 auto',
});
