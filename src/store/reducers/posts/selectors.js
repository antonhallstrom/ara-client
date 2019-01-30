import * as R from 'ramda'

/**
 * Gets all posts published or drafted
 * @param {Array.<Object>} state
 */
export function getPosts(state) {
  return state.posts
}

/**
 * Gets all drafted posts
 * @param {Array.<Object>} state
 */
export function getDrafts(state) {
  return R.filter(post => R.not(R.has('published', post)), state.posts)
}
