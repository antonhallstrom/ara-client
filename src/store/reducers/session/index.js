import * as types from './types'
import * as R from 'ramda'

export function reducer(state = {}, action) {
  switch (action.type) {
    case types.INIT_PERSISTED_SESSION_STATE: {
      return R.merge(state, action.payload)
    }

    case types.SAVE: {
      return R.merge(state, action.payload)
    }

    default: {
      return state
    }
  }
}

export * from './actions'
export * from './selectors'
export * from './types'
