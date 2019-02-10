import * as types from './types'

/**
 * Saves a list of posts
 * @param {Array.<Object>} posts - List containing published and drafted posts
 */
export function save(posts) {
  return {
    type: types.SAVE,
    payload: posts,
  }
}

/**
 * Inserts a post into the post list
 * @param {Object} post - Post
 */
export function insert(post) {
  return {
    type: types.INSERT,
    payload: post,
  }
}

/**
 * Removes a post by postId
 * @param {String} postId - PostId
 */
export function remove(postId) {
  return {
    type: types.REMOVE,
    payload: postId,
  }
}

/**
 * Updates provided properties on a post by postId
 * @param {String} postId - PostId
 * @param {Object} properties - Post properties for update
 */
export function update(postId, properties) {
  return {
    type: types.UPDATE,
    payload: {
      postId,
      properties,
    },
  }
}

export function init(post) {
  return {
    type: types.INIT_PERSISTED_POSTS_STATE,
    payload: post,
  }
}
