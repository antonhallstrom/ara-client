import * as types from './types'

export function save(auth) {
  return {
    type: types.SAVE,
    payload: auth,
  }
}

export function init(sessionState) {
  return {
    type: types.INIT_PERSISTED_SESSION_STATE,
    payload: sessionState,
  }
}
