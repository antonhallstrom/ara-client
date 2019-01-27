import * as R from 'ramda'
import http from './https'

/**
 * Gets all blog posts
 * @param {FetchConfig} config
 */
export function fetchPosts(config) {
  return http.get('http://localhost:5000/api/v1/posts', config)
}

/**
 * Creates a blog post
 * @param {Object} post
 * @param {String} post.title
 * @param {FetchConfig} config
 */
export function createPost(post, config) {
  const params = {
    body: {
      title: post.title,
      content: post.content,
    },
  }

  return http.post(
    'http://localhost:5000/api/v1/posts',
    R.merge({ params }, config)
  )
}

/**
 * Deletes a blog post
 * @param {String} postId - Unique identifier for post
 * @param {FetchConfig} config
 */
export function deletePost(post, config) {
  const params = {
    body: {
      postId: post.postId,
    },
  }

  return http.delete(
    `http://localhost:5000/api/v1/posts`,
    R.merge({ params }, config)
  )
}
