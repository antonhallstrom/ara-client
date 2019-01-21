import http from './https'

function fetchPosts(config) {
  return http.get('https://lit-shore-63278.herokuapp.com/api/v1/posts', config)
}

export default fetchPosts
