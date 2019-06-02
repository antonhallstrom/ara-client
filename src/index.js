import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Global } from '@emotion/core'
import { theme, globalStyles, ResponsiveThemeProvider } from './theme'
import configureStore from './store'
import App from './app'
import { ScrollTop } from './components/elements'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory({ basename: '/' })

export const store = configureStore(history, {})

render(
  <Provider store={store}>
    <Global styles={globalStyles} />
    <ResponsiveThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <ScrollTop>
          <App />
        </ScrollTop>
      </ConnectedRouter>
    </ResponsiveThemeProvider>
  </Provider>,
  document.getElementById('app')
)

if (module.hot) {
  // Reload components
  module.hot.accept('./app', () => {
    render()
  })
}
