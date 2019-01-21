import React from 'react'
import { compose } from 'redux'
import hoistNonReactStatics from 'hoist-non-react-statics'

function withGreet(Component, data) {
  return class WithGreet extends React.Component {
    constructor(props) {
      super(props)
      this.state = { greeting: 'Fancy meeting you here' }
    }

    componentDidMount() {
      if (data && data.greeting) {
        this.setState({ greeting: `${data.greeting} ${Component.name}` })
      } else {
        this.setState((state, props) => {
          return { greeting: `${state.greeting} ${Component.name}` }
        })
      }
    }

    render() {
      hoistNonReactStatics(WithGreet, Component)
      WithGreet.displayName = `WithGreet(${getDisplayName(Component)})`
      return <Component greeting={this.state.greeting} {...this.props} />
    }
  }
}

function withExcuse(Component) {
  return function WithExcuse(props) {
    WithExcuse.displayName = `WithExcuse(${getDisplayName(Component)})`
    return (
      <div>
        **
        <Component {...props} />
        **
      </div>
    )
  }
}

function Greet(props) {
  return (
    <div>
      <h2>{props.greeting}</h2>
    </div>
  )
}

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component'
}

const data = { greeting: 'Oh! FUCK! It`s you!' }

export default compose(
  withExcuse,
  withGreet
)(Greet, data)
