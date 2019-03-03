import PropTypes from 'prop-types'
import React, { useState, useRef, useEffect } from 'react'
import styled from '@emotion/styled'

export const Wrapper = styled.div(props => ({
  boxShadow: props.theme.shadows[0],
  position: 'sticky',
  top: 0,
  backgroundColor: props.theme.colors.white,
  opacity: props.isVisible ? 1 : 0,
  zIndex: props.isVisible ? 0 : -1,
  transition: 'all .150s cubic-bezier(0, 1, 0.5, 1)',
}))

export function Bar(props) {
  const [isVisible, showBar] = useState(true)
  const [prevYOffset, setPrevYOffset] = useState(window.pageYOffset)
  const wrapper = useRef(null)

  useEffect(
    () => {
      return (window.onscroll = () => {
        if (
          wrapper.current.getBoundingClientRect().height + 20 >
          window.pageYOffset
        ) {
          setPrevYOffset(window.pageYOffset)
          return showBar(true)
        } else if (prevYOffset > window.pageYOffset) {
          setPrevYOffset(window.pageYOffset)
          return showBar(true)
        } else {
          setPrevYOffset(window.pageYOffset)
          return showBar(false)
        }
      })
    },
    [isVisible, window.onscroll, prevYOffset]
  )

  return (
    <Wrapper ref={wrapper} isVisible={isVisible}>
      {props.children}
    </Wrapper>
  )
}

Bar.propTypes = {
  children: PropTypes.node,
}
