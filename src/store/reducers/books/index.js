import * as types from './types'

export function reducer(state = [], action) {
  switch (action.type) {
    case types.SET: {
      return state.concat(action.payload)
    }

    default: {
      return state
    }
  }
}

export * from './actions'
export * from './selectors'
export * from './types'
