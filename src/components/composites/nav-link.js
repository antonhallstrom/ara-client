import React from 'react'
import styled from '@emotion/styled'

import { Link as RouterLink } from 'react-router-dom'

const Link = styled.a(props => ({
  color: props.theme.colors.black,
  textTransform: 'uppercase',
}))

function Component(props) {
  return <Link as={RouterLink} {...props} />
}

export const NavLink = Component
