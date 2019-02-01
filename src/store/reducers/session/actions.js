import * as types from './types'

export function save(auth) {
  return {
    type: types.SAVE,
    payload: auth,
  }
}
