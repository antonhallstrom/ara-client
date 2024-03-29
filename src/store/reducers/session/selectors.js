import * as R from 'ramda'

/**
 * Gets ara auth token
 * @param {String} token - Token
 */
export function getAuthToken(state) {
  return R.path(['access_token'], state.session)
}
