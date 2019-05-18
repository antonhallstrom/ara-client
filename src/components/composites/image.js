import PropTypes from 'prop-types'
import * as R from 'ramda'
import React, { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'

const Placeholder = styled.div`
  background-color: #f6f6f6;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  height: ${props => (props.height ? `${props.height}px` : `100%`)};
  width: ${props => `${props.width}px`};
`

const AspectRatioFill = styled.div`
  padding-bottom: 66.6%;
`

const Img = styled('img', {
  shouldForwardProp: prop => prop !== 'loaded',
})(props => ({
  position: 'absolute',
  opacity: props.loaded ? 1 : 0,
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  transition: 'opacity 1s linear',
  objectFit: 'cover',
  filter: 'blur(50px)',
  /* this is needed so Safari keeps sharp edges */
  transform: 'scale(1)',
}))

const ReadyImage = styled('img', {
  shouldForwardProp: prop => prop !== 'loaded',
})(props => ({
  position: 'absolute',
  opacity: props.loaded ? 1 : 0,
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  transition: 'opacity 1s linear',
  objectFit: 'cover',
}))

export function Image(props) {
  const [loaded, setProcessing] = useState({})
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const small = useRef(null)
  const large = useRef(null)

  useEffect(
    (window.onload = () => {
      setProcessing({
        small: R.pathOr(false, ['complete'], small.current),
        large: R.pathOr(false, ['complete'], large.current),
      })
    }),
    [
      window.onload,
      R.path(['complete'], small.current),
      R.path(['complete'], large.current),
    ]
  )

  useEffect(
    () => {
      if (large) {
        const naturalWidth = R.path(['current', 'naturalWidth'], large)
        const naturalHeight = R.path(['current', 'naturalHeight'], large)

        const newHeight = (naturalHeight / naturalWidth) * props.newWidth
        setWidth(props.newWidth)
        setHeight(Math.round(newHeight))
      }
    },
    [
      large,
      width,
      height,
      props.newWidth,
      R.path(['current', 'naturalWidth'], large),
      R.path(['current', 'naturalHeight'], large),
    ]
  )

  return (
    <div>
      <Placeholder
        width={props.fixedWidth ? props.fixedWidth : width}
        height={props.fixedHeight ? props.fixedHeight : height}
      >
        <Img loaded={loaded.small} ref={small} src={props.small} />
        <ReadyImage ref={large} loaded={loaded.large} src={props.large} />
        <AspectRatioFill />
      </Placeholder>
    </div>
  )
}

Image.propTypes = {
  fixedWidth: PropTypes.string,
  fixedHeight: PropTypes.string,
  newWidth: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.string,
  large: PropTypes.string.isRequired,
  small: PropTypes.string.isRequired,
}
