import { styleVariants } from '@vanilla-extract/css';

export const padding = styleVariants({
  small: { padding: '2px' },
  default: { padding: '4px' },
  medium: { padding: '8px' },
  large: { padding: '16px' },
});

export const margin = styleVariants({
  small: { margin: '2px' },
  default: { margin: '4px' },
  medium: { margin: '8px' },
  large: { margin: '16px' },
});
