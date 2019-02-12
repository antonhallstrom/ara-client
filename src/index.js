import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'emotion-theming'
import configureStore from './store'
import App from './app'

import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

const theme = {
  color: 'darkblue',
}

const store = configureStore(history, {})

render(
  <Provider store={store}>
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
