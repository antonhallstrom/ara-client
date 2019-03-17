import PropTypes from 'prop-types'
import React from 'react'
import * as R from 'ramda'
import styled from '@emotion/styled'
import { withRouter } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'

const Link = styled.a(props => ({
  color:
    props.active === 'true'
      ? props.theme.colors.purple.light
      : props.theme.colors.secondary.dark,
  textTransform: 'uppercase',
  cursor: 'pointer',
}))

function Component(props) {
  const isActive =
    R.equals(props.to, props.location.pathname) ||
    (R.propOr(false, 'subPaths', props) &&
      R.includes(R.join('', props.subPaths), props.location.pathname))

  return (
    <Link to={props.to} as={RouterLink} active={isActive.toString()}>
      {props.children}
    </Link>
  )
}

Component.propTypes = {
  to: PropTypes.string,
  subPaths: PropTypes.array,
  location: PropTypes.object,
  children: PropTypes.node,
}

export const NavLink = withRouter(Component)
