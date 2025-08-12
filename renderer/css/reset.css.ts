import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css.ts';

globalStyle(`*, *::before, *::after`, {
  boxSizing: 'border-box',
});

globalStyle(`*`, {
  margin: 0,
  border: `0px solid ${vars.color.border}`,
});

globalStyle(`:where(body)`, {
  lineHeight: 1.5,
  fontSynthesis: 'none',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle(`:where(img, picture, video, canvas, svg)`, {
  display: 'block',
  maxWidth: '100%',
  height: 'auto',
});

globalStyle(`:where(input, button, textarea, select)`, {
  font: 'inherit',
});

globalStyle(`:where(p, h1, h2, h3, h4, h5, h6)`, {
  overflowWrap: 'break-word',
});

globalStyle(`:where(p)`, {
  textWrap: 'pretty',
});

globalStyle(`:where(h1, h2, h3, h4, h5, h6)`, {
  textWrap: 'balance',
});

globalStyle(`:where(iframe)`, {
  borderStyle: 'none',
});

globalStyle(`:where(ol, ul, menu)`, {
  margin: 0,
  listStyle: 'none',
});

globalStyle(`:where(table)`, {
  textIndent: 0,
  borderCollapse: 'collapse',
});

globalStyle(`:where(a)`, {
  textDecoration: 'none',
});

globalStyle(`:where(hr)`, {
  height: 0,
  color: 'inherit',
  borderTopWidth: '1px',
});

globalStyle(`:where(code, kbd, samp, pre)`, {
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSize: '1em',
});

globalStyle(`:where(summary)`, {
  display: 'list-item',
});
