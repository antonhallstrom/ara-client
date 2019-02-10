import * as R from 'ramda'
import http from './https'

export function login(payload, config) {
  const params = {
    body: {
      username: payload.username,
      password: payload.password,
    },
  }

  return http.post('/api/v1/authenticate', R.merge({ params }, config))
}

export function admin(config) {
  return http.get('/api/v1/admin', config)
}
