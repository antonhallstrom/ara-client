import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as session from './store/reducers/session'

function Component({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        rest.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

function mapStateToProps(state) {
  return {
    isAuthenticated: session.getAuthToken(state),
  }
}

export const PrivateRoute = connect(
  mapStateToProps,
  null
)(Component)
