import * as R from 'ramda'
import { css } from '@emotion/core'
import emotionReset from 'emotion-reset'

const baseFontSize = 16
const pxToRems = R.curry((base, px) => px / base + 'rem')

/**
 * @typedef {Object} ColorScheme
 * @property {string} default Default
 * @property {string} dark Dark
 * @property {string} light Light
 */

/**
 * @typedef {Object} BreakpointScheme
 * @property {string} xs Extra small
 * @property {string} s Small
 * @property {string} m Medium
 * @property {string} l Large
 * @property {string} xl Extra large
 */

/**
 * @typedef FontScheme
 * @property {Array.<number>} sizes Font sizes
 * @property {string} primary Primary font
 * @property {string} secondary Secondary font
 */

/**
 * @typedef {Object} ThemeTemplate
 * @property {ColorScheme} colors Colors
 * @property {Array.<string>} shadows Box shadows
 * @property {Array.<string>} opacities Opacities
 * @property {BreakpointScheme} breakpoints Media queries
 * @property {Array.<number>} layers Z-indexes
 * @property {Array.<number>} spacing Spacing
 * @property {Array.<number>} radiuses Border radius
 * @property {FontScheme} typographies Font properties
 */

export const theme = {
  colors: {
    black: '#ffffff',
    white: '#ffffff',
    primary: {
      default: '#37474f',
      dark: '#102027',
      light: '#62727b',
    },
    secondary: {
      default: '#f9f9f9',
      dark: '#c6c6c6',
      light: '#ffffff',
    },
    yellow: {
      default: '#ffee58',
      dark: '#c9bc1f',
      light: '#ffff8b',
    },
    green: {
      default: '#69f0ae',
      dark: '#2bbd7e',
      light: '#9fffe0',
    },
    red: {
      default: '#ff7043',
      dark: '#c63f17',
      light: '#ffa270',
    },
    purple: {
      default: '#7c4dff',
      dark: '#3f1dcb',
      light: '#b47cff',
    },
    orange: {
      default: 'ffab40',
      dark: '#c77c02',
      light: '#ffdd71',
    },
  },
  shadows: [
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  ],
  opacities: [0.25, 0.5, 0.75],
  breakpoints: {
    xs: 'max-width: 600px',
    s: 'min-width: 600px',
    m: 'min-width: 768px',
    l: 'min-width: 992px',
    xl: 'min-width: 1200px',
  },
  layers: [1, 2, 3],
  spacing: R.map(pxToRems(baseFontSize), [
    4,
    8,
    16,
    24,
    32,
    40,
    48,
    56,
    64,
    72,
  ]),
  fonts: {
    primary: 'Roboto, sans-serif',
    secondary: 'Open Sans, sans-serif',
    sizes: R.map(pxToRems(baseFontSize), [
      4,
      8,
      10,
      12,
      14,
      16,
      18,
      20,
      22,
      24,
    ]),
  },
  radiuses: R.map(pxToRems(baseFontSize), [16, 8, 4, 2]),
}

/**
 * Global styles and emotionReset
 *
 * The goal of a reset stylesheet is to reduce browser inconsistencies in things
 * like default line heights, margins and font sizes of headings, and so on.
 */
export const globalStyles = css`
  ${emotionReset}

  html {
    font-size: ${baseFontSize}px;
  }

  h1 {
    font-family: ${theme.fonts.primary};
    font-weight: 300;
    font-size: ${theme.fonts.sizes[9]};
  }

  h2 {
    font-family: ${theme.fonts.primary};
    font-weight: 300;
    font-size: ${theme.fonts.sizes[8]};
  }

  h3 {
    font-family: ${theme.fonts.primary};
    font-weight: 400;
    font-size: ${theme.fonts.sizes[7]};
  }

  h4 {
    font-family: ${theme.fonts.primary};
    font-weight: 400;
    font-size: ${theme.fonts.sizes[6]};
  }

  h5 {
    font-family: ${theme.fonts.primary};
    font-weight: 400;
    font-size: ${theme.fonts.sizes[5]};
  }

  h6 {
    font-family: ${theme.fonts.primary};
    font-weight: 500;
    font-size: ${theme.fonts.sizes[4]};
  }

  p,
  a {
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.fonts.sizes[4]};
  }
`
