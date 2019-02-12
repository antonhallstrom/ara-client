import * as R from 'ramda'
import { css } from '@emotion/core'
import emotionReset from 'emotion-reset'

const pxToRems = R.curry((base, px) => px / base)

function themeConfigurator(theme) {
  const spec = R.applySpec({
    border: {
      sizes: R.map(pxToRems(16)),
    },
  })(theme.border.sizes)

  return R.merge(theme, spec)
}

export const theme = themeConfigurator({
  color: 'darkblue',
  border: {
    sizes: [4, 8, 12],
  },
})

/**
 * Global styles and emotionReset
 *
 * The goal of a reset stylesheet is to reduce browser inconsistencies in things
 * like default line heights, margins and font sizes of headings, and so on.
 */
export const globalStyles = css`
  ${emotionReset}

  html {
    font-size: 16px;
  }
`
