import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const shimmer = keyframes`
  0%{
      background-position: -468px 0
  }
  100%{
      background-position: 468px 0
  }
`

const Loader = styled.div`
  border-radius: 2px;
  /* background-color: ${props => props.theme.colors.purple.light}; */
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin-top: 4px;
  margin-bottom: 4px;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${shimmer};
  animation-timing-function: linear;
  background: #7c4dff;
  background: linear-gradient(to right, #ECE1FD 8%, #b47cff 18%, #ECE1FD 33%);
  background-size: 800px 104px;
  position: relative;
`

export function SkeletonLoader(props) {
  return props.loading ? (
    <Loader width={props.width} height={props.height} />
  ) : (
    props.children
  )
}

SkeletonLoader.defaultProps = {
  loading: true,
}

SkeletonLoader.propTypes = {
  loading: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node,
}
