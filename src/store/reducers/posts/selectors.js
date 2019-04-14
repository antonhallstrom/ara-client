import * as R from 'ramda'

/**
 * Gets all posts published or drafted
 * @param {Object} state
 * @param {Array.<Object>} state.posts
 */
export function getPosts(state) {
  return state.posts
}

/**
 * Gets all drafted posts
 * @param {Object} state
 * @param {Array.<Object>} state.posts
 */
export function getDrafts(state) {
  return R.filter(post => R.not(R.has('published', post)), state.posts)
}

/**
 * Get post by postId
 * @param {Object} state
 * @param {Array.<Object>} state.posts
 * @param {Object} props
 * @param {string} props.postId
 */
export function getPost(state, props) {
  return R.find(R.propEq('_id', props.postId))(state.posts)
}
