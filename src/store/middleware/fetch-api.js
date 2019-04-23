import * as R from 'ramda'
import { FETCH } from 'redux-effects-fetch'

const EFFECT_FETCH_API = 'EFFECT_FETCH_API'

export const fetchApi = options => store => next => action => {
  if (
    action.type === EFFECT_FETCH_API &&
    R.includes(process.env.AUTH0_ARA_AUTH_URL, action.payload.url)
  ) {
    const nextAction = R.assoc('type', FETCH)(action)

    return next(nextAction)
  }

  if (action.type === EFFECT_FETCH_API) {
    console.log('env', process.env)
    const nextAction = R.pipe(
      R.assoc('type', FETCH),
      R.assocPath(['payload', 'url'], `${options.host}${action.payload.url}`),
      R.assocPath(
        ['payload', 'params', 'headers', 'Authorization'],
        `Bearer ${options.tokenSelector(store.getState())}`
      )
    )(action)

    return next(nextAction)
  }

  return next(action)
}
