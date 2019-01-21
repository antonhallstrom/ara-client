import React from 'react'
import MouseProvider from '../elements/MouseProvider'

function withMouse(Component) {
  return props => (
    <MouseProvider
      render={data => <Component {...props} injectedProps={data} />}
    />
  )
}

export default withMouse
