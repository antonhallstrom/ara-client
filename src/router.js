import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import App from './app'

const history = createBrowserHistory()

function Router() {
  return (
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  )
}

export default Router
