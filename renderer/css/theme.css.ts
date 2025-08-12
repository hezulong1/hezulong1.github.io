import { createTheme } from '@vanilla-extract/css';
import * as myVars from './vars.css.ts';

export const [defaultTheme, vars] = createTheme({
  color: {
    accent: myVars.colorAccent,
    border: myVars.colorBorder,
    text1: myVars.colorText1,
    text2: myVars.colorText2,
    fill1: myVars.colorFill1,
    fill2: myVars.colorFill2,
  },
});
