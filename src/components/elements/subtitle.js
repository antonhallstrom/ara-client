import PropTypes from 'prop-types'
import React from 'react'
import { clamp } from '../../utilities'
import { withTheme } from 'emotion-theming'

function Component(props) {
  return <p>{clamp(`${props.children}`, props.theme.clampMax)}</p>
}

Component.propTypes = {
  children: PropTypes.string,
  theme: PropTypes.object,
}

export const Subtitle = withTheme(Component)
