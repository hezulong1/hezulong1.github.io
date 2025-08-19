import { globalStyle } from '@vanilla-extract/css';
import { rainbowColor } from './common/rainbow.css.ts';
import './common/reset.css.ts';
import * as vars from './vars.css.ts';

globalStyle(':root', {
  vars: {
    [vars.colorAccent]: rainbowColor,
    [vars.colorBorder]: '#ddd',
    [vars.colorText1]: '#3b3c3d',
    [vars.colorText2]: '#1d1c1c',
    [vars.colorFill1]: '#f5f4f1',
    [vars.colorFill2]: '#fffefb',
    [vars.radius]: '2px',
  },
});
