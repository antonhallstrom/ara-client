import * as R from 'ramda'

function restoreState(specs, reducer, initialState) {
  const restoredState = R.reduce(
    (acc, v) => {
      const json = JSON.parse(window.sessionStorage.getItem(v.key))

      if (json) {
        return reducer(acc, v.mapper.getter(json))
      }

      return acc
    },
    initialState,
    specs
  )

  return restoredState
}

function enhanceReducer(specs, reducer) {
  return (state, action) => {
    const nextState = reducer(state, action)

    R.forEach(
      spec =>
        window.sessionStorage.setItem(
          spec.key,
          JSON.stringify(nextState[spec.key])
        ),
      specs
    )

    return nextState
  }
}

export const persistanceEnhancer = specs => {
  return createStore => (reducer, initialState, enhancer) => {
    const enhancedReducer = enhanceReducer(specs, reducer)
    const restoredState = restoreState(specs, reducer, initialState)

    const store = createStore(enhancedReducer, restoredState, enhancer)
    return store
  }
}
