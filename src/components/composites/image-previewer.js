import PropTypes from 'prop-types'
import * as R from 'ramda'
import React, { useRef, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Modal } from '../elements'

// aspect ratio formula
// how to know the new height = width / height
// how to know the new width = height / width
// then divide the aspect ratio to the new width.

const Previewer = styled.div`
  cursor: pointer;
  position: relative;
`

const Image = styled.img`
  display: block;
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  opacity: 0;

  &:hover {
    background-color: ${props => props.theme.colors.purple.light};
    transition: opacity 0.1s linear;
    opacity: 0.3;
  }
`

const ImageOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.98);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export function ImagePreviewer(props) {
  const [show, onShow] = useState(false)
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const imageRef = useRef(null)

  useEffect(
    () => {
      if (props.image) {
        const naturalWidth = R.path(['current', 'naturalWidth'], imageRef)
        const naturalHeight = R.path(['current', 'naturalHeight'], imageRef)

        const newHeight = (naturalHeight / naturalWidth) * props.newWidth
        setWidth(props.newWidth)
        setHeight(newHeight)
      }
    },
    [imageRef, props.image, width, height]
  )

  return (
    <Previewer onClick={() => onShow(R.not(show))}>
      {show && (
        <Modal onClick={() => onShow(R.not(show))}>
          <ImageOverlay>
            <Image
              ref={imageRef}
              src={props.image}
              width={width}
              height={height}
            />
          </ImageOverlay>
        </Modal>
      )}
      <Overlay />
      <div>{props.children}</div>
    </Previewer>
  )
}

ImagePreviewer.propTypes = {
  newWidth: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node,
}
