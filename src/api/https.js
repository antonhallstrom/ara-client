import * as R from 'ramda'
import { bind } from 'redux-effects'

const EFFECT_FETCH_API = 'EFFECT_FETCH_API'

function request(url, config) {
  return bind(
    {
      type: EFFECT_FETCH_API,
      payload: {
        url,
        params: {},
      },
    },
    config.success,
    config.failure
  )
}

function createRequest(url, config, method) {
  const paramsMethodLens = R.lensPath(['params', 'method'])
  const params = R.set(paramsMethodLens, method, config)

  return request(url, params)
}

export default {
  delete: (url, config) => createRequest(url, config, 'delete'),
  get: (url, config) => createRequest(url, config, 'get'),
  post: (url, config) => createRequest(url, config, 'post'),
  put: (url, config) => createRequest(url, config, 'put'),
}
