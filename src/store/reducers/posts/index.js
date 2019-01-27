import * as types from './types'
import * as R from 'ramda'

export function reducer(state = [], action) {
  switch (action.type) {
    case types.SAVE: {
      return R.concat(state, action.payload)
    }

    case types.INSERT: {
      return R.append(action.payload, state)
    }

    case types.REMOVE: {
      return R.remove(R.findIndex(R.propEq('_id', action.payload)), 1, state)
    }

    default: {
      return state
    }
  }
}

export * from './actions'
export * from './selectors'
export * from './types'
