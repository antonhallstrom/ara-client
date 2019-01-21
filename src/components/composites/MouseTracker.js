import withMouse from '../hoc/mouse'

function MouseTracker(props) {
  const { injectedProps } = props

  return (
    <div>
      <h1>
        The current mouse position is ({injectedProps.x}, {injectedProps.y})
      </h1>
    </div>
  )
}

export default withMouse(MouseTracker)
