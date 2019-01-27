import * as types from './types'

export function save(posts) {
  return {
    type: types.SAVE,
    payload: posts,
  }
}

export function insert(post) {
  return {
    type: types.INSERT,
    payload: post,
  }
}

export function remove(postId) {
  return {
    type: types.REMOVE,
    payload: postId,
  }
}
