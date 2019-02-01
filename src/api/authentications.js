import * as R from 'ramda'
import http from './https'

/**
 * Fetch access token
 * @param {FetchConfig} config
 */
export function fetchAccessToken(config) {
  const params = {
    body: {
      client_id: process.env.AUTH0_ARA_CLIENT_ID,
      client_secret: process.env.AUTH0_ARA_CLIENT_SECRET,
      grant_type: 'client_credentials',
      audience: process.env.ARA_API_URL,
    },
  }

  return http.post(process.env.AUTH0_ARA_AUTH_URL, R.merge({ params }, config))
}
