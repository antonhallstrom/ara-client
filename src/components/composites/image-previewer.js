import PropTypes from 'prop-types'
import * as R from 'ramda'
import React, { useRef, useState, useEffect } from 'react'
import styled from '@emotion/styled'

import ReactDOM from 'react-dom'
const modalRoot = document.getElementById('modal-root')

export function Modal(props) {
  return ReactDOM.createPortal(props.children, modalRoot)
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
}

// aspect ratio formula
// how to know the new height = width / height
// how to know the new width = height / width
// then divide the aspect ratio to the new width.
// load image once somehow

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
  z-index: 9999;
  opacity: 0;
`

const ImageOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
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
  const imageToClone = useRef(null)

  useEffect(
    () => {
      const imgPath = R.path(
        ['current', 'firstChild', 'firstChild', 'children', 1],
        imageToClone
      )

      const naturalWidth = R.path(['naturalWidth'], imgPath)
      const naturalHeight = R.path(['naturalHeight'], imgPath)

      const newHeight = (naturalHeight / naturalWidth) * props.newWidth
      setWidth(props.newWidth)
      setHeight(Math.round(newHeight))
    },
    [imageToClone]
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
      <div ref={imageToClone}>{props.children}</div>
    </Previewer>
  )
}

ImagePreviewer.propTypes = {
  newWidth: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node,
}
