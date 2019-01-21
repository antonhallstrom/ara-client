import * as R from 'ramda'
import { FETCH } from 'redux-effects-fetch'

const EFFECT_FETCH_API = 'EFFECT_FETCH_API'

function fetchApi() {
  return next => action => {
    if (action.type === EFFECT_FETCH_API) {
      const nextAction = R.assoc('type', FETCH)(action)

      return next(nextAction)
    }

    return next(action)
  }
}

export default fetchApi
