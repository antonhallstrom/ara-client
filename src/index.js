import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { theme, globalStyles } from './theme'
import configureStore from './store'
import App from './app'

import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

const store = configureStore(history, {})

render(
  <Provider store={store}>
    <Global styles={globalStyles} />
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
)

if (module.hot) {
  // Reload components
  module.hot.accept('./app', () => {
    render()
  })
}
