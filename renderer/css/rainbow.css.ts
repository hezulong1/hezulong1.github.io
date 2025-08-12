import { keyframes, globalStyle, createVar } from '@vanilla-extract/css';

const tailWindColorPalette = [
  [createVar('red'), '#fb2c36', 'oklch(63.7% .237 25.331)'],
  [createVar('orange'), '#ff6900', 'oklch(70.5% .213 47.604)'],
  [createVar('amber'), '#fe9a00', 'oklch(76.9% .188 70.08)'],
  [createVar('yellow'), '#f0b100', 'oklch(79.5% .184 86.047)'],
  [createVar('lime'), '#7ccf00', 'oklch(76.8% .233 130.85)'],
  [createVar('green'), '#00c951', 'oklch(72.3% .219 149.579)'],
  [createVar('emerald'), '#00bc7d', 'oklch(69.6% .17 162.48)'],
  [createVar('teal'), '#00bba7', 'oklch(70.4% .14 182.503)'],
  [createVar('cyan'), '#00b8db', 'oklch(71.5% .143 215.221)'],
  [createVar('sky'), '#00a6f4', 'oklch(68.5% .169 237.323)'],
  [createVar('blue'), '#2b7fff', 'oklch(62.3% .214 259.815)'],
  [createVar('indigo'), '#615fff', 'oklch(58.5% .233 277.117)'],
  [createVar('violet'), '#8e51ff', 'oklch(60.6% .25 292.717)'],
  [createVar('purple'), '#ad46ff', 'oklch(62.7% .265 303.9)'],
  [createVar('fuchsia'), '#e12afb', 'oklch(66.7% .295 322.15)'],
  [createVar('pink'), '#f6339a', 'oklch(65.6% .241 354.308)'],
  [createVar('rose'), '#ff2056', 'oklch(64.5% .246 16.439)'],
];

export const rainbowColor = createVar({
  syntax: '<color>',
  initialValue: '#00000000',
  inherits: true,
});

const genHexPalette = () => {
  const colorPalette = tailWindColorPalette.map(([varName, hex]) => [varName, hex]);
  globalStyle(':root', {
    vars: Object.fromEntries(colorPalette),
  });
};

const genOklchPalette = () => {
  const colorPalette = tailWindColorPalette.map(([varName, hex, oklch]) => [varName, oklch]);
  globalStyle(':root', {
    '@supports': {
      '(color: oklch(0 0 0))': {
        vars: Object.fromEntries(colorPalette),
      },
    },
  });
};

const genKeyframes = () => {
  const colorPalette = tailWindColorPalette.map(([varName]) => varName);

  const allColors = [
    ...colorPalette,
    ...colorPalette.reverse().slice(1),
  ];

  const allColorLength = allColors.length;

  type CSSKeyframes = Parameters<typeof keyframes>[0];

  const rainbowKeyframes = allColors.reduce<CSSKeyframes>((acc, color, index) => {
    acc[`${(index / (allColorLength - 1)) * 100}%`] = {
      vars: {
        [rainbowColor]: color,
      },
    };
    return acc;
  }, {});

  globalStyle(':root', {
    animation: `${keyframes(rainbowKeyframes)} 40s linear infinite`,
  });
};

const genReduceMotion = () => {
  globalStyle(':root', {
    '@media': {
      '(prefers-reduced-motion: reduce)': {
        animation: 'none !important',
      },
    },
  });
};

genHexPalette();
genOklchPalette();
genKeyframes();
genReduceMotion();
