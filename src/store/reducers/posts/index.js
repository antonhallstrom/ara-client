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
      return R.reject(R.propEq('_id', action.payload))(state)
    }

    case types.UPDATE: {
      const index = R.findIndex(R.propEq('_id', action.payload.postId))(state)
      return R.update(
        index,
        R.merge(
          action.payload.properties,
          R.find(R.propEq('_id', action.payload.postId))(state)
        ),
        state
      )
    }

    default: {
      return state
    }
  }
}

export * from './actions'
export * from './selectors'
export * from './types'
