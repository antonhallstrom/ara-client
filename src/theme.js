import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import * as R from 'ramda'
import { css } from '@emotion/core'
import emotionReset from 'emotion-reset'
import { ThemeProvider } from 'emotion-theming'

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
    black: '#000000',
    white: '#ffffff',
    primary: {
      default: '#37474f',
      dark: '#102027',
      light: '#757575',
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
      dark: '#ECE1FD',
      light: '#b47cff',
    },
    orange: {
      default: 'ffab40',
      dark: '#dbc5fb',
      light: '#ffdd71',
    },
  },
  shadows: [
    '0 1px 1px 0 rgba(60,64,67,.08), 0 1px 3px 1px rgba(60,64,67,.16)',
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
  sizes: R.map(pxToRems(baseFontSize), [
    1,
    2,
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
    reading: 'Merriweather, serif',
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
      28,
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

    @media screen and (${theme.breakpoints.xs}) {
      font-size: ${baseFontSize - 2}px;
    }
  }

  h1 {
    font-family: ${theme.fonts.primary};
    font-weight: 300;
    font-size: ${theme.fonts.sizes[10]};
  }

  h2 {
    font-family: ${theme.fonts.primary};
    font-weight: 300;
    font-size: ${theme.fonts.sizes[7]};
    color: ${theme.colors.primary.light};
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
    font-weight: 500;
    font-size: ${theme.fonts.sizes[5]};
  }

  h6 {
    font-family: ${theme.fonts.primary};
    font-weight: 500;
    font-size: ${theme.fonts.sizes[4]};
    color: ${theme.colors.primary.light};
  }

  a {
    text-decoration: none;
    color: ${theme.colors.purple.light};
    font-size: ${theme.fonts.sizes[5]};
    font-family: ${theme.fonts.secondary};
  }

  p {
    color: ${theme.colors.primary.light};
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.fonts.sizes[5]};
  }

  small {
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.fonts.sizes[3]};
    color: ${theme.colors.primary.light};
  }

  li {
    list-style-type: disc;
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.fonts.sizes[4]};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    line-height: 1.5;
  }

  q {
    quotes: '“' '”' '‘' '’';
  }
  q:before {
    content: open-quote;
  }
  q:after {
    content: close-quote;
  }

  small {
    font-size: ${theme.fonts.sizes[3]};
  }

  b {
    font-weight: 600;
    color: ${theme.colors.primary.dark};
  }

  li {
    list-style-position: inside;
  }

  pre {
    white-space: normal;
  }
`

export const breakpoints = {
  xs: 600,
  s: 600,
  m: 768,
  l: 992,
  xl: 1200,
}

function throttled(delay, fn) {
  let lastCall = 0
  return function(...args) {
    const now = new Date().getTime()
    if (now - lastCall < delay) {
      return
    }
    lastCall = now
    return fn(...args)
  }
}

export function ResponsiveThemeProvider(props) {
  const [clampMax, setClampMax] = useState(null)

  useEffect(
    () => {
      window.addEventListener(
        'resize',
        throttled(1000, () => {
          if (
            window.innerWidth < breakpoints.xs &&
            !(window.innerWidth > breakpoints.m)
          ) {
            return setClampMax(40)
          }

          if (
            window.innerWidth > breakpoints.m &&
            window.innerWidth < breakpoints.l
          ) {
            return setClampMax(68)
          }

          if (window.innerWidth > breakpoints.l) {
            return setClampMax(138)
          }
        })
      )
    },
    [window.resize, window.innerWidth]
  )

  useEffect(() => {
    if (
      window.innerWidth < breakpoints.xs &&
      !(window.innerWidth > breakpoints.m)
    ) {
      return setClampMax(40)
    }

    if (
      window.innerWidth > breakpoints.m &&
      window.innerWidth < breakpoints.l
    ) {
      return setClampMax(68)
    }

    if (window.innerWidth > breakpoints.l) {
      return setClampMax(138)
    }
  }, [])

  function configureTheme(theme) {
    return R.assoc('clampMax', clampMax, theme)
  }

  return (
    <ThemeProvider theme={configureTheme(props.theme)}>
      {props.children}
    </ThemeProvider>
  )
}

ResponsiveThemeProvider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node,
}
