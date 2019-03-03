import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

function Component(props) {
  useEffect(() => {
    window.onbeforeunload = () => {
      return window.scrollTo(0, 0)
    }
  })
  useEffect(
    () => {
      return window.scrollTo(0, 0)
    },
    [props.location.pathname]
  )

  return props.children
}

Component.propTypes = {
  location: PropTypes.object,
}

export const ScrollTop = withRouter(Component)
