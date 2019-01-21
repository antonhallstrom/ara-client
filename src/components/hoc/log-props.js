import React from 'react'

const LogComponent = React.forwardRef(function LogComponent(props, ref) {
  return (
    <p ref={ref} style={{ color: props.color }}>
      Foo
    </p>
  )
})

function logProps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps)
      console.log('new props:', this.props)
    }

    render() {
      console.log(Component)
      const { forwardedRef, ...rest } = this.props
      return <Component ref={forwardedRef} {...rest} />
    }
  }

  function forwardRef(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />
  }

  const name = Component.displayName || Component.name
  console.log(name)
  forwardRef.displayName = `logProps(${name})`

  return React.forwardRef(forwardRef)
}

export default logProps(LogComponent)
