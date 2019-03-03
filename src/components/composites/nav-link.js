import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import { withRouter, matchPath } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'

const Link = styled.a(props => ({
  color: props.active
    ? props.theme.colors.purple.light
    : props.theme.colors.secondary.dark,
  textTransform: 'uppercase',
  cursor: 'pointer',
}))

function Component(props) {
  const isActive = matchPath(props.location.pathname, {
    path: props.to,
    exact: true,
    strict: true,
  })

  return (
    <Link to={props.to} as={RouterLink} active={isActive}>
      {props.children}
    </Link>
  )
}

Component.propTypes = {
  to: PropTypes.string,
  location: PropTypes.object,
  children: PropTypes.node,
}

export const NavLink = withRouter(Component)
