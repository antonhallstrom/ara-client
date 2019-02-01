import * as types from './types'
import * as R from 'ramda'

export function reducer(state = {}, action) {
  switch (action.type) {
    case types.SAVE: {
      return R.merge(action.payload, state)
    }

    default: {
      return state
    }
  }
}

export * from './actions'
export * from './selectors'
export * from './types'
