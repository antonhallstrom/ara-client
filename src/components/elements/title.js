import PropTypes from 'prop-types'
import React from 'react'
import { clamp } from '../../utilities'
import { withTheme } from 'emotion-theming'

function Component(props) {
  return (
    <h3>
      <b>{clamp(`${props.children}`, props.theme.clampMax)}</b>
    </h3>
  )
}

Component.propTypes = {
  children: PropTypes.string,
  theme: PropTypes.object,
}

export const Title = withTheme(Component)
