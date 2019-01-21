import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'emotion-theming'
import configureStore from './store'
import Router from './router'

const theme = {
  color: 'darkblue',
}

const store = configureStore(history)

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
)

if (module.hot) {
  // Reload components
  module.hot.accept('./router', () => {
    render()
  })
}
