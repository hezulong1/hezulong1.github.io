import { createVar, fallbackVar, style } from '@vanilla-extract/css';
import { colorAccent, colorText1, radius } from '../css/vars.css.ts';

export const varArrowTop = createVar();

const localArrowTop = createVar();

export const divider = style({
  vars: {
    [localArrowTop]: `calc(${varArrowTop} - 10px)`,
  },
  display: 'flex',
  position: 'relative',
  backgroundColor: colorText1,
  '::before': {
    content: '',
    width: `calc(100% / 3 * 2)`,
    height: '100%',
    backgroundColor: colorAccent,
  },
  '::after': {
    content: '',
    position: 'absolute',
    top: fallbackVar(localArrowTop, 'calc(50% - 10px)'),
    left: -8,
    width: 20,
    height: 20,
    borderRadius: radius,
    backgroundColor: colorAccent,
    transform: 'rotate(45deg)',
  },
});
