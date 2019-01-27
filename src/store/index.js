import { combineReducers, applyMiddleware, createStore, compose } from 'redux'

// Reducers
import { reducer as postsReducer } from './reducers/posts'

// Middleware
import fetchApi from './middleware/fetch-api'
import multi from 'redux-multi'
import effects from 'redux-effects'
import fetch from 'redux-effects-fetch'
import { routerMiddleware, connectRouter } from 'connected-react-router'

const rootReducer = history => {
  return combineReducers({
    router: connectRouter(history),
    posts: postsReducer,
  })
}

export default function configureStore(history, preloadedState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        effects,
        fetchApi,
        fetch,
        multi
      )
    )
  )

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(rootReducer(history))
    })
  }

  return store
}
