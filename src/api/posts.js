import * as R from 'ramda'
import http from './https'

/**
 * Gets all blog posts
 * @param {FetchConfig} config
 */
export function fetchPosts(config) {
  return http.get('/api/v1/posts', config)
}

/**
 * Creates a blog post
 * @param {Object} post
 * @param {String} post.title
 * @param {Boolean} post.publish
 * @param {FetchConfig} config
 */
export function createPost(post, config) {
  const params = {
    body: {
      title: post.title,
      subtitle: post.subtitle,
      content: post.content,
      categories: post.categories,
      shouldPublish: post.shouldPublish,
      imageId: post.imageId,
    },
  }

  return http.post('/api/v1/posts', R.merge({ params }, config))
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

  return http.delete(`/api/v1/posts`, R.merge({ params }, config))
}

export function publishDraft(postId, properties, config) {
  const params = {
    body: {
      postId: postId,
      properties,
    },
  }

  return http.put(`/api/v1/posts`, R.merge({ params }, config))
}
