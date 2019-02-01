import { combineReducers, applyMiddleware, createStore, compose } from 'redux'

// Reducers
import { reducer as postsReducer } from './reducers/posts'
import { reducer as sessionReducer } from './reducers/session'

// Middleware
import thunk from 'redux-thunk'
import localStorage from 'redux-effects-localstorage'
import { fetchApi } from './middleware/fetch-api'
import multi from 'redux-multi'
import effects from 'redux-effects'
import fetch from 'redux-effects-fetch'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import * as session from './reducers/session'

const rootReducer = history => {
  return combineReducers({
    router: connectRouter(history),
    posts: postsReducer,
    session: sessionReducer,
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
        multi,
        thunk,
        routerMiddleware(history),
        effects,
        fetchApi({
          host: process.env.ARA_API_URL,
          tokenSelector: session.getAuthToken,
        }),
        fetch,
        localStorage(window.localStorage)
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
