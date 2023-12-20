import stylex from '@stylexjs/stylex';

// const DARK_MODE = '@media (prefers-color-scheme: dark)';

export const globalTokens = stylex.defineVars({
  fontMono:
    'ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace',
  fontSans:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  // primaryText: {
  //   default: 'red',
  //   [DARK_MODE]: 'white'
  // },
  // secondaryText: {
  //   default: '#333',
  //   [DARK_MODE]: '#ccc'
  // },
  // primaryBackground: {
  //   default: 'white',
  //   [DARK_MODE]: 'black'
  // }
  primaryText: { default: 'black' },
  primaryBackground: { default: 'white' }
});
